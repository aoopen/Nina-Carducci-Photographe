/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
        t());
})(this, function () {
  "use strict";
  let e = "transitionend",
    t = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t;
    },
    i = (e) => {
      let i = t(e);
      return i ? document.querySelector(i) : null;
    },
    n = (t) => {
      t.dispatchEvent(new Event(e));
    },
    s = (e) =>
      !(!e || "object" != typeof e) &&
      (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    r = (e) =>
      s(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? document.querySelector(e)
        : null,
    l = (e, t, i) => {
      Object.keys(i).forEach((n) => {
        var r;
        let l = i[n],
          a = t[n],
          o =
            a && s(a)
              ? "element"
              : null == (r = a)
              ? `${r}`
              : {}.toString
                  .call(r)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        if (!RegExp(l).test(o))
          throw TypeError(
            `${e.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${l}".`
          );
      });
    },
    a = (e) =>
      !(!s(e) || 0 === e.getClientRects().length) &&
      "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    o = (e) =>
      !e ||
      e.nodeType !== Node.ELEMENT_NODE ||
      !!e.classList.contains("disabled") ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    u = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot
        ? e
        : e.parentNode
        ? u(e.parentNode)
        : null;
    },
    c = (e) => {
      e.offsetHeight;
    },
    d = () => {
      let { jQuery: e } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
    h = [],
    f = () => "rtl" === document.documentElement.dir,
    g = (e) => {
      var t;
      (t = () => {
        let t = d();
        if (t) {
          let i = e.NAME,
            n = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (h.length ||
              document.addEventListener("DOMContentLoaded", () => {
                h.forEach((e) => e());
              }),
            h.push(t))
          : t();
    },
    p = (e) => {
      "function" == typeof e && e();
    },
    m = (t, i, s = !0) => {
      if (!s) return void p(t);
      let r =
          ((e) => {
            if (!e) return 0;
            let { transitionDuration: t, transitionDelay: i } =
                window.getComputedStyle(e),
              n = Number.parseFloat(t),
              s = Number.parseFloat(i);
            return n || s
              ? ((t = t.split(",")[0]),
                (i = i.split(",")[0]),
                1e3 * (Number.parseFloat(t) + Number.parseFloat(i)))
              : 0;
          })(i) + 5,
        l = !1,
        a = ({ target: n }) => {
          n === i && ((l = !0), i.removeEventListener(e, a), p(t));
        };
      i.addEventListener(e, a),
        setTimeout(() => {
          l || n(i);
        }, r);
    },
    v = (e, t, i, n) => {
      let s = e.indexOf(t);
      if (-1 === s) return e[!i && n ? e.length - 1 : 0];
      let r = e.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + r) % r),
        e[Math.max(0, Math.min(s, r - 1))]
      );
    },
    b = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    y = /::\d+$/,
    A = {},
    $ = 1,
    I = { mouseenter: "mouseover", mouseleave: "mouseout" },
    S = /^(mouseenter|mouseleave)/i,
    T = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function D(e, t) {
    return (t && `${t}::${$++}`) || e.uidEvent || $++;
  }
  function L(e) {
    let t = D(e);
    return (e.uidEvent = t), (A[t] = A[t] || {}), A[t];
  }
  function O(e, t, i = null) {
    let n = Object.keys(e);
    for (let s = 0, r = n.length; s < r; s++) {
      let l = e[n[s]];
      if (l.originalHandler === t && l.delegationSelector === i) return l;
    }
    return null;
  }
  function w(e, t, i) {
    let n = "string" == typeof t,
      s = k(e);
    return T.has(s) || (s = e), [n, n ? i : t, s];
  }
  function x(e, t, i, n, s) {
    var r, l, a, o, u;
    if ("string" != typeof t || !e) return;
    if ((i || ((i = n), (n = null)), S.test(t))) {
      let c = (e) =>
        function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget &&
              !t.delegateTarget.contains(t.relatedTarget))
          )
            return e.call(this, t);
        };
      n ? (n = c(n)) : (i = c(i));
    }
    let [d, h, f] = w(t, i, n),
      g = L(e),
      p = g[f] || (g[f] = {}),
      m = O(p, h, d ? i : null);
    if (m) return void (m.oneOff = m.oneOff && s);
    let v = D(h, t.replace(b, "")),
      E = d
        ? ((r = e),
          (l = i),
          (a = n),
          function e(t) {
            let i = r.querySelectorAll(l);
            for (let { target: n } = t; n && n !== this; n = n.parentNode)
              for (let s = i.length; s--; )
                if (i[s] === n)
                  return (
                    (t.delegateTarget = n),
                    e.oneOff && C.off(r, t.type, l, a),
                    a.apply(n, [t])
                  );
            return null;
          })
        : ((o = e),
          (u = i),
          function e(t) {
            return (
              (t.delegateTarget = o),
              e.oneOff && C.off(o, t.type, u),
              u.apply(o, [t])
            );
          });
    (E.delegationSelector = d ? i : null),
      (E.originalHandler = h),
      (E.oneOff = s),
      (E.uidEvent = v),
      (p[v] = E),
      e.addEventListener(f, E, d);
  }
  function N(e, t, i, n, s) {
    let r = O(t[i], n, s);
    r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
  }
  function k(e) {
    return I[(e = e.replace(E, ""))] || e;
  }
  let C = {
      on(e, t, i, n) {
        x(e, t, i, n, !1);
      },
      one(e, t, i, n) {
        x(e, t, i, n, !0);
      },
      off(e, t, i, n) {
        if ("string" != typeof t || !e) return;
        let [s, r, l] = w(t, i, n),
          a = l !== t,
          o = L(e),
          u = t.startsWith(".");
        if (void 0 !== r) {
          if (!o || !o[l]) return;
          return void N(e, o, l, r, s ? i : null);
        }
        u &&
          Object.keys(o).forEach((i) => {
            var n, s, r, l;
            let a;
            (n = e),
              (s = o),
              (r = i),
              (l = t.slice(1)),
              Object.keys((a = s[r] || {})).forEach((e) => {
                if (e.includes(l)) {
                  let t = a[e];
                  N(n, s, r, t.originalHandler, t.delegationSelector);
                }
              });
          });
        let c = o[l] || {};
        Object.keys(c).forEach((i) => {
          let n = i.replace(y, "");
          if (!a || t.includes(n)) {
            let s = c[i];
            N(e, o, l, s.originalHandler, s.delegationSelector);
          }
        });
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        let n = d(),
          s = k(t),
          r = T.has(s),
          l,
          a = !0,
          o = !0,
          u = !1,
          c = null;
        return (
          t !== s &&
            n &&
            ((l = n.Event(t, i)),
            n(e).trigger(l),
            (a = !l.isPropagationStopped()),
            (o = !l.isImmediatePropagationStopped()),
            (u = l.isDefaultPrevented())),
          r
            ? (c = document.createEvent("HTMLEvents")).initEvent(s, a, !0)
            : (c = new CustomEvent(t, { bubbles: a, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((e) => {
              Object.defineProperty(c, e, { get: () => i[e] });
            }),
          u && c.preventDefault(),
          o && e.dispatchEvent(c),
          c.defaultPrevented && void 0 !== l && l.preventDefault(),
          c
        );
      },
    },
    _ = new Map(),
    M = {
      set(e, t, i) {
        _.has(e) || _.set(e, new Map());
        let n = _.get(e);
        n.has(t) || 0 === n.size
          ? n.set(t, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (e, t) => (_.has(e) && _.get(e).get(t)) || null,
      remove(e, t) {
        if (!_.has(e)) return;
        let i = _.get(e);
        i.delete(t), 0 === i.size && _.delete(e);
      },
    };
  class P {
    constructor(e) {
      (e = r(e)) &&
        ((this._element = e),
        M.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      M.remove(this._element, this.constructor.DATA_KEY),
        C.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
    }
    _queueCallback(e, t, i = !0) {
      m(e, t, i);
    }
    static getInstance(e) {
      return M.get(r(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  let X = (e, t = "hide") => {
    let n = `click.dismiss${e.EVENT_KEY}`,
      s = e.NAME;
    C.on(document, n, `[data-bs-dismiss="${s}"]`, function (n) {
      if ((["A", "AREA"].includes(this.tagName) && n.preventDefault(), o(this)))
        return;
      let r = i(this) || this.closest(`.${s}`);
      e.getOrCreateInstance(r)[t]();
    });
  };
  class j extends P {
    static get NAME() {
      return "alert";
    }
    close() {
      if (C.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      let e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(),
        C.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = j.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  X(j, "close"), g(j);
  let q = '[data-bs-toggle="button"]';
  class Y extends P {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = Y.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  function H(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        (e === Number(e).toString()
          ? Number(e)
          : "" === e || "null" === e
          ? null
          : e))
    );
  }
  function K(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  C.on(document, "click.bs.button.data-api", q, (e) => {
    e.preventDefault();
    let t = e.target.closest(q);
    Y.getOrCreateInstance(t).toggle();
  }),
    g(Y);
  let R = {
      setDataAttribute(e, t, i) {
        e.setAttribute(`data-bs-${K(t)}`, i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${K(t)}`);
      },
      getDataAttributes(e) {
        if (!e) return {};
        let t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = H(
                e.dataset[i]
              );
            }),
          t
        );
      },
      getDataAttribute: (e, t) => H(e.getAttribute(`data-bs-${K(t)}`)),
      offset(e) {
        let t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset,
        };
      },
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    },
    V = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        let i = [],
          n = e.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(t) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        let t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(t, e).filter((e) => !o(e) && a(e));
      },
    },
    W = "carousel",
    B = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Q = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    z = "next",
    F = "prev",
    U = "left",
    Z = "right",
    G = { ArrowLeft: Z, ArrowRight: U },
    J = "slid.bs.carousel",
    ee = "active",
    et = ".active.carousel-item";
  class ei extends P {
    constructor(e, t) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(t)),
        (this._indicatorsElement = V.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return B;
    }
    static get NAME() {
      return W;
    }
    next() {
      this._slide(z);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(F);
    }
    pause(e) {
      e || (this._isPaused = !0),
        V.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (n(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(e) {
      e || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = V.findOne(et, this._element);
      let t = this._getItemIndex(this._activeElement);
      return e > this._items.length - 1 || e < 0
        ? void 0
        : this._isSliding
        ? void C.one(this._element, J, () => this.to(e))
        : t === e
        ? (this.pause(), void this.cycle())
        : void this._slide(e > t ? z : F, this._items[e]);
    }
    _getConfig(e) {
      return (
        l(
          W,
          (e = {
            ...B,
            ...R.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          Q
        ),
        e
      );
    }
    _handleSwipe() {
      let e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      let t = e / this.touchDeltaX;
      (this.touchDeltaX = 0), t && this._slide(t > 0 ? Z : U);
    }
    _addEventListeners() {
      this._config.keyboard &&
        C.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (C.on(this._element, "mouseenter.bs.carousel", (e) => this.pause(e)),
          C.on(this._element, "mouseleave.bs.carousel", (e) => this.cycle(e))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      let e = (e) =>
          this._pointerEvent &&
          ("pen" === e.pointerType || "touch" === e.pointerType),
        t = (t) => {
          e(t)
            ? (this.touchStartX = t.clientX)
            : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        },
        i = (e) => {
          this.touchDeltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (e) => this.cycle(e),
                500 + this._config.interval
              )));
        };
      V.find(".carousel-item img", this._element).forEach((e) => {
        C.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
      }),
        this._pointerEvent
          ? (C.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
            C.on(this._element, "pointerup.bs.carousel", (e) => n(e)),
            this._element.classList.add("pointer-event"))
          : (C.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
            C.on(this._element, "touchmove.bs.carousel", (e) => i(e)),
            C.on(this._element, "touchend.bs.carousel", (e) => n(e)));
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      let t = G[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
    _getItemIndex(e) {
      return (
        (this._items =
          e && e.parentNode ? V.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(e, t) {
      return v(this._items, t, e === z, this._config.wrap);
    }
    _triggerSlideEvent(e, t) {
      let i = this._getItemIndex(e),
        n = this._getItemIndex(V.findOne(et, this._element));
      return C.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: e,
        direction: t,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        let t = V.findOne(".active", this._indicatorsElement);
        t.classList.remove(ee), t.removeAttribute("aria-current");
        let i = V.find("[data-bs-target]", this._indicatorsElement);
        for (let n = 0; n < i.length; n++)
          if (
            Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(e)
          ) {
            i[n].classList.add(ee), i[n].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      let e = this._activeElement || V.findOne(et, this._element);
      if (!e) return;
      let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = t))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(e, t) {
      let i = this._directionToOrder(e),
        n = V.findOne(et, this._element),
        s = this._getItemIndex(n),
        r = t || this._getItemByOrder(i, n),
        l = this._getItemIndex(r),
        a = Boolean(this._interval),
        o = i === z,
        u = o ? "carousel-item-start" : "carousel-item-end",
        d = o ? "carousel-item-next" : "carousel-item-prev",
        h = this._orderToDirection(i);
      if (r && r.classList.contains(ee)) return void (this._isSliding = !1);
      if (
        this._isSliding ||
        this._triggerSlideEvent(r, h).defaultPrevented ||
        !n ||
        !r
      )
        return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      let f = () => {
        C.trigger(this._element, J, {
          relatedTarget: r,
          direction: h,
          from: s,
          to: l,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(d), c(r), n.classList.add(u), r.classList.add(u);
        let g = () => {
          r.classList.remove(u, d),
            r.classList.add(ee),
            n.classList.remove(ee, d, u),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(g, n, !0);
      } else n.classList.remove(ee), r.classList.add(ee), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(e) {
      return [Z, U].includes(e)
        ? f()
          ? e === U
            ? F
            : z
          : e === U
          ? z
          : F
        : e;
    }
    _orderToDirection(e) {
      return [z, F].includes(e)
        ? f()
          ? e === F
            ? U
            : Z
          : e === F
          ? Z
          : U
        : e;
    }
    static carouselInterface(e, t) {
      let i = ei.getOrCreateInstance(e, t),
        { _config: n } = i;
      "object" == typeof t && (n = { ...n, ...t });
      let s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function () {
        ei.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      let t = i(this);
      if (!t || !t.classList.contains("carousel")) return;
      let n = { ...R.getDataAttributes(t), ...R.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (n.interval = !1),
        ei.carouselInterface(t, n),
        s && ei.getInstance(t).to(s),
        e.preventDefault();
    }
  }
  return (
    C.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      ei.dataApiClickHandler
    ),
    C.on(window, "load.bs.carousel.data-api", () => {
      let e = V.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++)
        ei.carouselInterface(e[t], ei.getInstance(e[t]));
    }),
    g(ei),
    C.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          o(this) || xn.getOrCreateInstance(this).show();
      }
    ),
    g(xn),
    X(Mn),
    g(Mn),
    {
      Alert: j,
      Button: Y,
      Carousel: ei,
      Collapse: pt,
      Dropdown: hi,
      Modal: Hi,
      Offcanvas: Fi,
      Popover: gn,
      ScrollSpy: An,
      Tab: xn,
      Toast: Mn,
      Tooltip: un,
    }
  );
});
