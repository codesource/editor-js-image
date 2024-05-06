(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;min-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button{display:none}.image-tool--filled .image-tool__image{position:relative}.image-tool--filled .image-tool__image-sizer{align-items:center;cursor:grab;display:none;height:100%;position:absolute;top:0;width:20px}.image-tool--filled .image-tool__image-sizer-left{left:0}.image-tool--filled .image-tool__image-sizer-right{right:0}.image-tool--filled .image-tool__image-fullscreen-toggle{bottom:5px;cursor:pointer;position:absolute;right:10px}.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--filled .image-tool__image:hover .image-tool__image-sizer{display:flex}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool-fullscreen{align-items:center;background:rgba(255,255,255,.9);display:flex;height:100vh;justify-content:center;left:0;padding:100px;position:fixed;top:0;width:100vw;z-index:1000}.image-tool-fullscreen__image{position:relative}.image-tool-fullscreen__image>img{height:auto;max-height:100%;max-width:100%;display:block;vertical-align:bottom;width:auto}.image-tool-fullscreen__image>span{display:block;padding:10px 0}.image-tool-fullscreen__image-close{cursor:pointer;left:calc(100% + 10px);position:absolute;top:-10px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', P = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function S(E, o = null, a = {}, c = "") {
  const i = document.createElement(E);
  Array.isArray(o) ? i.classList.add(...o) : o && i.classList.add(o);
  for (const t in a)
    i[t] = a[t];
  return i.innerHTML = c, i;
}
class M {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {Function} ui.onResizePicture - callback for drag on resize picture
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: o, config: a, onSelectFile: c, onResizePicture: i, readOnly: t }) {
    this.api = o, this.config = a, this.onSelectFile = c, this.onResizePicture = i, this.readOnly = t, this.nodes = {
      wrapper: S("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: S("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: S("div", this.CSS.imagePreloader),
      imageSizeGrabberLeft: void 0,
      imageSizeGrabberRight: void 0,
      imageFullscreen: void 0,
      caption: S("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
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
      wrapper: "image-tool",
      wrapperFullscreen: "image-tool-fullscreen",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageSizeGrabber: "image-tool__image-sizer",
      imageSizeGrabberLeft: "image-tool__image-sizer-left",
      imageSizeGrabberRight: "image-tool__image-sizer-right",
      imageFullscreen: "image-tool-fullscreen__image",
      imageFullscreenToggle: "image-tool__image-fullscreen-toggle",
      imageFullscreenClose: "image-tool-fullscreen__image-close",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Icons
   *
   * @returns {object}
   */
  get icons() {
    return {
      sizer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"></path>
<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"></path>
<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"></path>
<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"></path>
<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"></path>
<path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"></path>
</svg>`,
      fullscreen: `<svg fill="#333333" height="20" width="20" viewBox="0 0 512 512" xml:space="preserve">
<path d="M192,64H32C14.328,64,0,78.328,0,96v96c0,17.672,14.328,32,32,32s32-14.328,32-32v-64h128c17.672,0,32-14.328,32-32 S209.672,64,192,64z"/>
<path d="M480,64H320c-17.672,0-32,14.328-32,32s14.328,32,32,32h128v64c0,17.672,14.328,32,32,32s32-14.328,32-32V96 C512,78.328,497.672,64,480,64z"/>
<path d="M480,288c-17.672,0-32,14.328-32,32v64H320c-17.672,0-32,14.328-32,32s14.328,32,32,32h160c17.672,0,32-14.328,32-32v-96 C512,302.328,497.672,288,480,288z"/>
<path d="M192,384H64v-64c0-17.672-14.328-32-32-32S0,302.328,0,320v96c0,17.672,14.328,32,32,32h160c17.672,0,32-14.328,32-32 S209.672,384,192,384z"/>
</svg>`,
      close: '<svg fill="#333333" height="20" viewBox="0 0 512 512" width="20" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>'
    };
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
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(o) {
    return !o.file || Object.keys(o.file).length === 0 ? this.toggleStatus(M.status.EMPTY) : this.toggleStatus(M.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const o = S("div", [this.CSS.button]);
    return o.innerHTML = this.config.buttonContent || `${P} ${this.api.i18n.t("Select an Image")}`, o.addEventListener("click", () => {
      this.onSelectFile();
    }), o;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(o) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${o})`, this.toggleStatus(M.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(M.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(o) {
    const a = /\.mp4$/.test(o) ? "VIDEO" : "IMG", c = {
      src: o
    };
    let i = "load";
    if (a === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = S(a, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(i, () => {
      this.toggleStatus(M.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl), this.config.sizable && !this.readOnly) {
      let t = !1;
      this.nodes.imageSizeGrabberLeft = S("div", [this.CSS.imageSizeGrabber, this.CSS.imageSizeGrabberLeft], { draggable: !0 }, this.icons.sizer), this.nodes.imageSizeGrabberLeft.addEventListener("drag", (n) => {
        this.resizePicture(t ? t - n.clientX : 0), t = n.clientX;
      }), this.nodes.imageSizeGrabberLeft.addEventListener("dragend", (n) => {
        t = !1;
      }), this.nodes.imageContainer.appendChild(this.nodes.imageSizeGrabberLeft), this.nodes.imageSizeGrabberRight = S("div", [this.CSS.imageSizeGrabber, this.CSS.imageSizeGrabberRight], { draggable: !0 }, this.icons.sizer), this.nodes.imageSizeGrabberRight.addEventListener("drag", (n) => {
        this.resizePicture(-1 * (t ? t - n.clientX : 0)), t = n.clientX;
      }), this.nodes.imageSizeGrabberRight.addEventListener("dragend", (n) => {
        t = !1;
      }), this.nodes.imageContainer.appendChild(this.nodes.imageSizeGrabberRight);
    }
    this.config.allowFullscreen && (this.nodes.imageFullscreen = S("div", [this.CSS.imageFullscreenToggle], {}, this.icons.fullscreen), this.nodes.imageFullscreen.addEventListener("click", (t) => {
      t.stopPropagation();
      let n = S(a, "", c), d = S("div", this.CSS.imageFullscreen), v = S("span", "", {}, this.nodes.caption.innerHTML), s = S("div", this.CSS.wrapperFullscreen), p = S("div", this.CSS.imageFullscreenClose, {}, this.icons.close);
      p.addEventListener("click", (h) => {
        h.stopPropagation(), document.body.removeChild(s);
      }), d.appendChild(n), d.appendChild(v), d.appendChild(p), s.appendChild(d), document.body.appendChild(s);
    }), this.nodes.imageContainer.appendChild(this.nodes.imageFullscreen));
  }
  resizePicture(o) {
    let a = this.nodes.wrapper.offsetWidth + o;
    this.nodes.wrapper.style.width = a + "px", this.onResizePicture(a);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(o) {
    this.nodes.caption && (this.nodes.caption.innerHTML = o);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(o) {
    for (const a in M.status)
      Object.prototype.hasOwnProperty.call(M.status, a) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${M.status[a]}`, o === M.status[a]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(o, a) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`, a);
  }
}
function x(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var O = { exports: {} };
(function(E, o) {
  (function(a, c) {
    E.exports = c();
  })(window, function() {
    return function(a) {
      var c = {};
      function i(t) {
        if (c[t])
          return c[t].exports;
        var n = c[t] = { i: t, l: !1, exports: {} };
        return a[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = a, i.c = c, i.d = function(t, n, d) {
        i.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: d });
      }, i.r = function(t) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }, i.t = function(t, n) {
        if (1 & n && (t = i(t)), 8 & n || 4 & n && typeof t == "object" && t && t.__esModule)
          return t;
        var d = /* @__PURE__ */ Object.create(null);
        if (i.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: t }), 2 & n && typeof t != "string")
          for (var v in t)
            i.d(d, v, (function(s) {
              return t[s];
            }).bind(null, v));
        return d;
      }, i.n = function(t) {
        var n = t && t.__esModule ? function() {
          return t.default;
        } : function() {
          return t;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }, i.p = "", i(i.s = 3);
    }([function(a, c) {
      var i;
      i = function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      a.exports = i;
    }, function(a, c, i) {
      (function(t) {
        var n = i(2), d = setTimeout;
        function v() {
        }
        function s(r) {
          if (!(this instanceof s))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], e(r, this);
        }
        function p(r, u) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, s._immediateFn(function() {
            var l = r._state === 1 ? u.onFulfilled : u.onRejected;
            if (l !== null) {
              var m;
              try {
                m = l(r._value);
              } catch (g) {
                return void w(u.promise, g);
              }
              h(u.promise, m);
            } else
              (r._state === 1 ? h : w)(u.promise, r._value);
          })) : r._deferreds.push(u);
        }
        function h(r, u) {
          try {
            if (u === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var l = u.then;
              if (u instanceof s)
                return r._state = 3, r._value = u, void y(r);
              if (typeof l == "function")
                return void e((m = l, g = u, function() {
                  m.apply(g, arguments);
                }), r);
            }
            r._state = 1, r._value = u, y(r);
          } catch (f) {
            w(r, f);
          }
          var m, g;
        }
        function w(r, u) {
          r._state = 2, r._value = u, y(r);
        }
        function y(r) {
          r._state === 2 && r._deferreds.length === 0 && s._immediateFn(function() {
            r._handled || s._unhandledRejectionFn(r._value);
          });
          for (var u = 0, l = r._deferreds.length; u < l; u++)
            p(r, r._deferreds[u]);
          r._deferreds = null;
        }
        function b(r, u, l) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = l;
        }
        function e(r, u) {
          var l = !1;
          try {
            r(function(m) {
              l || (l = !0, h(u, m));
            }, function(m) {
              l || (l = !0, w(u, m));
            });
          } catch (m) {
            if (l)
              return;
            l = !0, w(u, m);
          }
        }
        s.prototype.catch = function(r) {
          return this.then(null, r);
        }, s.prototype.then = function(r, u) {
          var l = new this.constructor(v);
          return p(this, new b(r, u, l)), l;
        }, s.prototype.finally = n.a, s.all = function(r) {
          return new s(function(u, l) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var m = Array.prototype.slice.call(r);
            if (m.length === 0)
              return u([]);
            var g = m.length;
            function f(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var F = C.then;
                  if (typeof F == "function")
                    return void F.call(C, function(L) {
                      f(T, L);
                    }, l);
                }
                m[T] = C, --g == 0 && u(m);
              } catch (L) {
                l(L);
              }
            }
            for (var k = 0; k < m.length; k++)
              f(k, m[k]);
          });
        }, s.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === s ? r : new s(function(u) {
            u(r);
          });
        }, s.reject = function(r) {
          return new s(function(u, l) {
            l(r);
          });
        }, s.race = function(r) {
          return new s(function(u, l) {
            for (var m = 0, g = r.length; m < g; m++)
              r[m].then(u, l);
          });
        }, s._immediateFn = typeof t == "function" && function(r) {
          t(r);
        } || function(r) {
          d(r, 0);
        }, s._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, c.a = s;
      }).call(this, i(5).setImmediate);
    }, function(a, c, i) {
      c.a = function(t) {
        var n = this.constructor;
        return this.then(function(d) {
          return n.resolve(t()).then(function() {
            return d;
          });
        }, function(d) {
          return n.resolve(t()).then(function() {
            return n.reject(d);
          });
        });
      };
    }, function(a, c, i) {
      function t(e) {
        return (t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        })(e);
      }
      i(4);
      var n, d, v, s, p, h, w, y = i(8), b = (d = function(e) {
        return new Promise(function(r, u) {
          e = s(e), (e = p(e)).beforeSend && e.beforeSend();
          var l = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          l.open(e.method, e.url), l.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(e.headers).forEach(function(g) {
            var f = e.headers[g];
            l.setRequestHeader(g, f);
          });
          var m = e.ratio;
          l.upload.addEventListener("progress", function(g) {
            var f = Math.round(g.loaded / g.total * 100), k = Math.ceil(f * m / 100);
            e.progress(Math.min(k, 100));
          }, !1), l.addEventListener("progress", function(g) {
            var f = Math.round(g.loaded / g.total * 100), k = Math.ceil(f * (100 - m) / 100) + m;
            e.progress(Math.min(k, 100));
          }, !1), l.onreadystatechange = function() {
            if (l.readyState === 4) {
              var g = l.response;
              try {
                g = JSON.parse(g);
              } catch {
              }
              var f = y.parseHeaders(l.getAllResponseHeaders()), k = { body: g, code: l.status, headers: f };
              w(l.status) ? r(k) : u(k);
            }
          }, l.send(e.data);
        });
      }, v = function(e) {
        return e.method = "POST", d(e);
      }, s = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (e.url && typeof e.url != "string")
          throw new Error("Url must be a string");
        if (e.url = e.url || "", e.method && typeof e.method != "string")
          throw new Error("`method` must be a string or null");
        if (e.method = e.method ? e.method.toUpperCase() : "GET", e.headers && t(e.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (e.headers = e.headers || {}, e.type && (typeof e.type != "string" || !Object.values(n).includes(e.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (e.progress && typeof e.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (e.progress = e.progress || function(r) {
        }, e.beforeSend = e.beforeSend || function(r) {
        }, e.ratio && typeof e.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (e.ratio < 0 || e.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (e.ratio = e.ratio || 90, e.accept && typeof e.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (e.accept = e.accept || "*/*", e.multiple && typeof e.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (e.multiple = e.multiple || !1, e.fieldName && typeof e.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return e.fieldName = e.fieldName || "files", e;
      }, p = function(e) {
        switch (e.method) {
          case "GET":
            var r = h(e.data, n.URLENCODED);
            delete e.data, e.url = /\?/.test(e.url) ? e.url + "&" + r : e.url + "?" + r;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var u = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(e);
            (y.isFormData(e.data) || y.isFormElement(e.data)) && (u = n.FORM), e.data = h(e.data, u), u !== b.contentType.FORM && (e.headers["content-type"] = u);
        }
        return e;
      }, h = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return y.urlEncode(e);
          case n.JSON:
            return y.jsonEncode(e);
          case n.FORM:
            return y.formEncode(e);
          default:
            return e;
        }
      }, w = function(e) {
        return e >= 200 && e < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(e) {
        return e.method = "GET", d(e);
      }, post: v, transport: function(e) {
        return e = s(e), y.selectFiles(e).then(function(r) {
          for (var u = new FormData(), l = 0; l < r.length; l++)
            u.append(e.fieldName, r[l], r[l].name);
          y.isObject(e.data) && Object.keys(e.data).forEach(function(g) {
            var f = e.data[g];
            u.append(g, f);
          });
          var m = e.beforeSend;
          return e.beforeSend = function() {
            return m(r);
          }, e.data = u, v(e);
        });
      }, selectFiles: function(e) {
        return delete (e = s(e)).beforeSend, y.selectFiles(e);
      } });
      a.exports = b;
    }, function(a, c, i) {
      i.r(c);
      var t = i(1);
      window.Promise = window.Promise || t.a;
    }, function(a, c, i) {
      (function(t) {
        var n = t !== void 0 && t || typeof self < "u" && self || window, d = Function.prototype.apply;
        function v(s, p) {
          this._id = s, this._clearFn = p;
        }
        c.setTimeout = function() {
          return new v(d.call(setTimeout, n, arguments), clearTimeout);
        }, c.setInterval = function() {
          return new v(d.call(setInterval, n, arguments), clearInterval);
        }, c.clearTimeout = c.clearInterval = function(s) {
          s && s.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, c.enroll = function(s, p) {
          clearTimeout(s._idleTimeoutId), s._idleTimeout = p;
        }, c.unenroll = function(s) {
          clearTimeout(s._idleTimeoutId), s._idleTimeout = -1;
        }, c._unrefActive = c.active = function(s) {
          clearTimeout(s._idleTimeoutId);
          var p = s._idleTimeout;
          p >= 0 && (s._idleTimeoutId = setTimeout(function() {
            s._onTimeout && s._onTimeout();
          }, p));
        }, i(6), c.setImmediate = typeof self < "u" && self.setImmediate || t !== void 0 && t.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || t !== void 0 && t.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(a, c, i) {
      (function(t, n) {
        (function(d, v) {
          if (!d.setImmediate) {
            var s, p, h, w, y, b = 1, e = {}, r = !1, u = d.document, l = Object.getPrototypeOf && Object.getPrototypeOf(d);
            l = l && l.setTimeout ? l : d, {}.toString.call(d.process) === "[object process]" ? s = function(f) {
              n.nextTick(function() {
                g(f);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var f = !0, k = d.onmessage;
                return d.onmessage = function() {
                  f = !1;
                }, d.postMessage("", "*"), d.onmessage = k, f;
              }
            }() ? (w = "setImmediate$" + Math.random() + "$", y = function(f) {
              f.source === d && typeof f.data == "string" && f.data.indexOf(w) === 0 && g(+f.data.slice(w.length));
            }, d.addEventListener ? d.addEventListener("message", y, !1) : d.attachEvent("onmessage", y), s = function(f) {
              d.postMessage(w + f, "*");
            }) : d.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(f) {
              g(f.data);
            }, s = function(f) {
              h.port2.postMessage(f);
            }) : u && "onreadystatechange" in u.createElement("script") ? (p = u.documentElement, s = function(f) {
              var k = u.createElement("script");
              k.onreadystatechange = function() {
                g(f), k.onreadystatechange = null, p.removeChild(k), k = null;
              }, p.appendChild(k);
            }) : s = function(f) {
              setTimeout(g, 0, f);
            }, l.setImmediate = function(f) {
              typeof f != "function" && (f = new Function("" + f));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++)
                k[T] = arguments[T + 1];
              var C = { callback: f, args: k };
              return e[b] = C, s(b), b++;
            }, l.clearImmediate = m;
          }
          function m(f) {
            delete e[f];
          }
          function g(f) {
            if (r)
              setTimeout(g, 0, f);
            else {
              var k = e[f];
              if (k) {
                r = !0;
                try {
                  (function(T) {
                    var C = T.callback, F = T.args;
                    switch (F.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(F[0]);
                        break;
                      case 2:
                        C(F[0], F[1]);
                        break;
                      case 3:
                        C(F[0], F[1], F[2]);
                        break;
                      default:
                        C.apply(v, F);
                    }
                  })(k);
                } finally {
                  m(f), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? t === void 0 ? this : t : self);
      }).call(this, i(0), i(7));
    }, function(a, c) {
      var i, t, n = a.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(l) {
        if (i === setTimeout)
          return setTimeout(l, 0);
        if ((i === d || !i) && setTimeout)
          return i = setTimeout, setTimeout(l, 0);
        try {
          return i(l, 0);
        } catch {
          try {
            return i.call(null, l, 0);
          } catch {
            return i.call(this, l, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          i = d;
        }
        try {
          t = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          t = v;
        }
      })();
      var p, h = [], w = !1, y = -1;
      function b() {
        w && p && (w = !1, p.length ? h = p.concat(h) : y = -1, h.length && e());
      }
      function e() {
        if (!w) {
          var l = s(b);
          w = !0;
          for (var m = h.length; m; ) {
            for (p = h, h = []; ++y < m; )
              p && p[y].run();
            y = -1, m = h.length;
          }
          p = null, w = !1, function(g) {
            if (t === clearTimeout)
              return clearTimeout(g);
            if ((t === v || !t) && clearTimeout)
              return t = clearTimeout, clearTimeout(g);
            try {
              t(g);
            } catch {
              try {
                return t.call(null, g);
              } catch {
                return t.call(this, g);
              }
            }
          }(l);
        }
      }
      function r(l, m) {
        this.fun = l, this.array = m;
      }
      function u() {
      }
      n.nextTick = function(l) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var g = 1; g < arguments.length; g++)
            m[g - 1] = arguments[g];
        h.push(new r(l, m)), h.length !== 1 || w || s(e);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = u, n.addListener = u, n.once = u, n.off = u, n.removeListener = u, n.removeAllListeners = u, n.emit = u, n.prependListener = u, n.prependOnceListener = u, n.listeners = function(l) {
        return [];
      }, n.binding = function(l) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(l) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(a, c, i) {
      function t(d, v) {
        for (var s = 0; s < v.length; s++) {
          var p = v[s];
          p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
        }
      }
      var n = i(9);
      a.exports = function() {
        function d() {
          (function(h, w) {
            if (!(h instanceof w))
              throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var v, s, p;
        return v = d, p = [{ key: "urlEncode", value: function(h) {
          return n(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h))
            return h;
          if (this.isFormElement(h))
            return new FormData(h);
          if (this.isObject(h)) {
            var w = new FormData();
            return Object.keys(h).forEach(function(y) {
              var b = h[y];
              w.append(y, b);
            }), w;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        } }, { key: "isFormData", value: function(h) {
          return h instanceof FormData;
        } }, { key: "isFormElement", value: function(h) {
          return h instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(w, y) {
            var b = document.createElement("INPUT");
            b.type = "file", h.multiple && b.setAttribute("multiple", "multiple"), h.accept && b.setAttribute("accept", h.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(e) {
              var r = e.target.files;
              w(r), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var w = h.trim().split(/[\r\n]+/), y = {};
          return w.forEach(function(b) {
            var e = b.split(": "), r = e.shift(), u = e.join(": ");
            r && (y[r] = u);
          }), y;
        } }], (s = null) && t(v.prototype, s), p && t(v, p), d;
      }();
    }, function(a, c) {
      var i = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, t = function(n, d, v, s) {
        return d = d || null, v = v || "&", s = s || null, n ? function(p) {
          for (var h = new Array(), w = 0; w < p.length; w++)
            p[w] && h.push(p[w]);
          return h;
        }(Object.keys(n).map(function(p) {
          var h, w, y = p;
          if (s && (y = s + "[" + y + "]"), typeof n[p] == "object" && n[p] !== null)
            h = t(n[p], null, v, y);
          else {
            d && (w = y, y = !isNaN(parseFloat(w)) && isFinite(w) ? d + Number(y) : y);
            var b = n[p];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", h = i(y) + "=" + i(b);
          }
          return h;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      a.exports = t;
    }]);
  });
})(O);
var D = O.exports;
const _ = /* @__PURE__ */ x(D);
function j(E) {
  return E && typeof E.then == "function";
}
class B {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: o, onUpload: a, onError: c }) {
    this.config = o, this.onUpload = a, this.onError = c;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: o }) {
    const a = function(i) {
      const t = new FileReader();
      t.readAsDataURL(i), t.onload = (n) => {
        o(n.target.result);
      };
    };
    let c;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? c = _.selectFiles({ accept: this.config.types }).then((i) => {
      a(i[0]);
      const t = this.config.uploader.uploadByFile(i[0]);
      return j(t) || console.warn("Custom uploader method uploadByFile should return a Promise"), t;
    }) : c = _.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (i) => {
        a(i[0]);
      },
      fieldName: this.config.field
    }).then((i) => i.body), c.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(o) {
    let a;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (a = this.config.uploader.uploadByUrl(o), j(a) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : a = _.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: o
      }, this.config.additionalRequestData),
      type: _.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((c) => c.body), a.then((c) => {
      this.onUpload(c);
    }).catch((c) => {
      this.onError(c);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(o, { onPreview: a }) {
    const c = new FileReader();
    c.readAsDataURL(o), c.onload = (t) => {
      a(t.target.result);
    };
    let i;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      i = this.config.uploader.uploadByFile(o), j(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const t = new FormData();
      t.append(this.config.field, o), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, d]) => {
        t.append(n, d);
      }), i = _.post({
        url: this.config.endpoints.byFile,
        data: t,
        type: _.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((n) => n.body);
    }
    i.then((t) => {
      this.onUpload(t);
    }).catch((t) => {
      this.onError(t);
    });
  }
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class H {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: P,
      title: "Image"
    };
  }
  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: z,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: I,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: R,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: o, config: a, api: c, readOnly: i, block: t }) {
    this.api = c, this.readOnly = i, this.block = t, this.config = {
      endpoints: a.endpoints || "",
      additionalRequestData: a.additionalRequestData || {},
      additionalRequestHeaders: a.additionalRequestHeaders || {},
      field: a.field || "image",
      types: a.types || "image/*",
      captionPlaceholder: this.api.i18n.t(a.captionPlaceholder || "Caption"),
      buttonContent: a.buttonContent || "",
      uploader: a.uploader || void 0,
      actions: a.actions || [],
      defaultTunes: Array.isArray(a.defaultTunes) ? a.defaultTunes : ["withBorder", "stretched", "withBackground"],
      sizable: a.sizable || !1,
      allowFullscreen: a.allowFullscreen || !1
    }, this.uploader = new B({
      config: this.config,
      onUpload: (n) => this.onUpload(n),
      onError: (n) => this.uploadingFailed(n)
    }), this.ui = new M({
      api: c,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (n) => {
            this.ui.showPreloader(n);
          }
        });
      },
      onResizePicture: (n) => {
        this._data.pictureSize = n;
      },
      readOnly: i
    }), this.tunes = H.tunes.filter((n) => this.config.defaultTunes.indexOf(n.name) !== -1).concat(this.config.actions), this._data = {}, this.data = o;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(o) {
    return o.file && o.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const o = this.ui.nodes.caption;
    return this._data.caption = o.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.tunes.map((o) => ({
      icon: o.icon,
      label: this.api.i18n.t(o.title),
      name: o.name,
      toggle: o.toggle,
      isActive: this.data[o.name],
      onActivate: () => {
        if (typeof o.action == "function") {
          o.action(o.name);
          return;
        }
        this.tuneToggled(o.name), o.toggle && this.tunes.forEach((a) => {
          o.name !== a.name && o.toggle == a.toggle && this.setTune(a.name, !1);
        });
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(o) {
    switch (o.type) {
      case "tag": {
        const a = o.detail.data;
        if (/^blob:/.test(a.src)) {
          const i = await (await fetch(a.src)).blob();
          this.uploadFile(i);
          break;
        }
        this.uploadUrl(a.src);
        break;
      }
      case "pattern": {
        const a = o.detail.data;
        this.uploadUrl(a);
        break;
      }
      case "file": {
        const a = o.detail.file;
        this.uploadFile(a);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(o) {
    this.image = o.file, this._data.caption = o.caption || "", this.ui.fillCaption(this._data.caption), this.config.sizable && typeof o.pictureSize < "u" && (this.ui.resizePicture(o.pictureSize), this._data.pictureSize = o.pictureSize), this.tunes.forEach(({ name: a }) => {
      const c = typeof o[a] < "u" ? o[a] === !0 || o[a] === "true" : !1;
      this.setTune(a, c);
    });
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(o) {
    this._data.file = o || {}, o && o.url && this.ui.fillImage(o.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(o) {
    o.success && o.file ? this.image = o.file : this.uploadingFailed("incorrect response: " + JSON.stringify(o));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(o) {
    console.log("Image Tool: uploading failed because of", o), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(o) {
    this.setTune(o, !this._data[o]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(o, a) {
    this._data[o] = a, this.ui.applyTune(o, a), o === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = a;
    }).catch((c) => {
      console.error(c);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(o) {
    this.uploader.uploadByFile(o, {
      onPreview: (a) => {
        this.ui.showPreloader(a);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(o) {
    this.ui.showPreloader(o), this.uploader.uploadByUrl(o);
  }
}
export {
  H as default
};
