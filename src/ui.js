import { IconPicture } from '@codexteam/icons';
import { make } from './utils/dom';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {Function} ui.onResizePicture - callback for drag on resize picture
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, onResizePicture, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.onResizePicture = onResizePicture;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [ this.CSS.imageContainer ]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      imageSizeGrabberLeft: undefined,
      imageSizeGrabberRight: undefined,
      imageFullscreen: undefined,
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'image-tool',
      wrapperFullscreen: 'image-tool-fullscreen',
      imageContainer: 'image-tool__image',
      imagePreloader: 'image-tool__image-preloader',
      imageSizeGrabber: 'image-tool__image-sizer',
      imageSizeGrabberLeft: 'image-tool__image-sizer-left',
      imageSizeGrabberRight: 'image-tool__image-sizer-right',
      imageFullscreen: 'image-tool-fullscreen__image',
      imageFullscreenToggle: 'image-tool__image-fullscreen-toggle',
      imageFullscreenClose: 'image-tool-fullscreen__image-close',
      imageEl: 'image-tool__image-picture',
      caption: 'image-tool__caption',
    };
  };

  /**
   * Icons
   *
   * @returns {object}
   */
  get icons(){
    return {
      sizer: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n' +
          '<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"></path>\n' +
          '<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"></path>\n' +
          '<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"></path>\n' +
          '<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"></path>\n' +
          '<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"></path>\n' +
          '<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"></path>\n' +
          '</svg>',
      fullscreen: '<svg fill="#333333" height="20" width="20" viewBox="0 0 512 512" xml:space="preserve">\n' +
          '<path d="M192,64H32C14.328,64,0,78.328,0,96v96c0,17.672,14.328,32,32,32s32-14.328,32-32v-64h128c17.672,0,32-14.328,32-32 S209.672,64,192,64z"/>\n' +
          '<path d="M480,64H320c-17.672,0-32,14.328-32,32s14.328,32,32,32h128v64c0,17.672,14.328,32,32,32s32-14.328,32-32V96 C512,78.328,497.672,64,480,64z"/>\n' +
          '<path d="M480,288c-17.672,0-32,14.328-32,32v64H320c-17.672,0-32,14.328-32,32s14.328,32,32,32h160c17.672,0,32-14.328,32-32v-96 C512,302.328,497.672,288,480,288z"/>\n' +
          '<path d="M192,384H64v-64c0-17.672-14.328-32-32-32S0,302.328,0,320v96c0,17.672,14.328,32,32,32h160c17.672,0,32-14.328,32-32 S209.672,384,192,384z"/>\n' +
          '</svg>',
      close: '<svg fill="#333333" height="20" viewBox="0 0 512 512" width="20" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>' +
          '</svg>',
    }
  }

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `${IconPicture} ${this.api.i18n.t('Select an Image')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(url) {
    /**
     * Check for a source extension to compose element correctly: video tag for mp4, img — for others
     */
    const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';

    const attributes = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Update attributes and eventName if source is a mp4 video
     */
    if (tag === 'VIDEO') {
      /**
       * Add attributes for playing muted mp4 as a gif
       *
       * @type {boolean}
       */
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;

      /**
       * Change event to be listened
       *
       * @type {string}
       */
      eventName = 'loadeddata';
    }

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);

    if(this.config.sizable && !this.readOnly){
      let position = false;
      /** @type {Element} */
      this.nodes.imageSizeGrabberLeft = make('div', [this.CSS.imageSizeGrabber, this.CSS.imageSizeGrabberLeft], {draggable: true}, this.icons.sizer);
      this.nodes.imageSizeGrabberLeft.addEventListener('drag', (evt) => {
        this.resizePicture(position ? position - evt.clientX : 0);
        position = evt.clientX
      });
      this.nodes.imageSizeGrabberLeft.addEventListener('dragend', (evt) => {
        position = false
      });
      this.nodes.imageContainer.appendChild(this.nodes.imageSizeGrabberLeft);

      this.nodes.imageSizeGrabberRight = make('div', [this.CSS.imageSizeGrabber, this.CSS.imageSizeGrabberRight], {draggable: true}, this.icons.sizer);
      this.nodes.imageSizeGrabberRight.addEventListener('drag', (evt) => {
        this.resizePicture(-1 * (position ? position - evt.clientX : 0));
        position = evt.clientX
      });
      this.nodes.imageSizeGrabberRight.addEventListener('dragend', (evt) => {
        position = false
      });
      this.nodes.imageContainer.appendChild(this.nodes.imageSizeGrabberRight);
    }

    if(this.config.allowFullscreen){
      this.nodes.imageFullscreen = make('div', [this.CSS.imageFullscreenToggle], {}, this.icons.fullscreen);
      this.nodes.imageFullscreen.addEventListener('click', (evt) => {
        evt.stopPropagation();
        let cloneImage = make(tag, '', attributes),
            imageContainer = make('div', this.CSS.imageFullscreen),
            cloneCaption = make('span', '', {}, this.nodes.caption.innerHTML),
            fullscreenWrapper = make('div', this.CSS.wrapperFullscreen),
            close = make('div', this.CSS.imageFullscreenClose, {}, this.icons.close);
        close.addEventListener('click', (evt) =>{
          evt.stopPropagation();
          document.body.removeChild(fullscreenWrapper);
        });
        imageContainer.appendChild(cloneImage);
        imageContainer.appendChild(cloneCaption)
        imageContainer.appendChild(close);
        fullscreenWrapper.appendChild(imageContainer);
        document.body.appendChild(fullscreenWrapper);
      });
      this.nodes.imageContainer.appendChild(this.nodes.imageFullscreen);
    }
  }

  resizePicture(size){
    let wrapperSize = this.nodes.wrapper.offsetWidth + size;
    this.nodes.wrapper.style.width = wrapperSize + 'px';
    this.onResizePicture(wrapperSize)
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName, status) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }
}

