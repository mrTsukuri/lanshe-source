"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(i) {
    if (t[i]) return t[i].exports;
    var n = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      s.d(i, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return i;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 4);
}({
  4: function _(e, t, s) {
    "use strict";

    function i(e) {
      return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
    }

    function n() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(t).forEach(function (s) {
        void 0 === e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s]);
      });
    }

    s.r(t);
    var r = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function a() {
      var e = "undefined" != typeof document ? document : {};
      return n(e, r), e;
    }

    var o = {
      document: r,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      },
      requestAnimationFrame: function requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
      },
      cancelAnimationFrame: function cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }
    };

    function l() {
      var e = "undefined" != typeof window ? window : {};
      return n(e, o), e;
    }

    var d =
    /*#__PURE__*/
    function (_Array) {
      _inherits(d, _Array);

      function d(e) {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, d);

        "number" == typeof e ? _this = _possibleConstructorReturn(this, _getPrototypeOf(d).call(this, e)) : (_this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(d)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(e || [])))), function (e) {
          var t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: function get() {
              return t;
            },
            set: function set(e) {
              t.__proto__ = e;
            }
          });
        }(_assertThisInitialized(_this)));
        return _possibleConstructorReturn(_this);
      }

      return d;
    }(_wrapNativeSuper(Array));

    function c() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var t = [];
      return e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, _toConsumableArray(c(e))) : t.push(e);
      }), t;
    }

    function p(e, t) {
      return Array.prototype.filter.call(e, t);
    }

    function u(e, t) {
      var s = l(),
          i = a();
      var n = [];
      if (!t && e instanceof d) return e;
      if (!e) return new d(n);

      if ("string" == typeof e) {
        var _s = e.trim();

        if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
          var _e = "div";
          0 === _s.indexOf("<li") && (_e = "ul"), 0 === _s.indexOf("<tr") && (_e = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e = "tr"), 0 === _s.indexOf("<tbody") && (_e = "table"), 0 === _s.indexOf("<option") && (_e = "select");

          var _t = i.createElement(_e);

          _t.innerHTML = _s;

          for (var _e2 = 0; _e2 < _t.childNodes.length; _e2 += 1) {
            n.push(_t.childNodes[_e2]);
          }
        } else n = function (e, t) {
          if ("string" != typeof e) return [e];
          var s = [],
              i = t.querySelectorAll(e);

          for (var _e3 = 0; _e3 < i.length; _e3 += 1) {
            s.push(i[_e3]);
          }

          return s;
        }(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);else if (Array.isArray(e)) {
        if (e instanceof d) return e;
        n = e;
      }

      return new d(function (e) {
        var t = [];

        for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
          -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
        }

        return t;
      }(n));
    }

    u.fn = d.prototype;
    var h = "resize scroll".split(" ");

    function f(e) {
      return function () {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        if (void 0 === t[0]) {
          for (var _t2 = 0; _t2 < this.length; _t2 += 1) {
            h.indexOf(e) < 0 && (e in this[_t2] ? this[_t2][e]() : u(this[_t2]).trigger(e));
          }

          return this;
        }

        return this.on.apply(this, [e].concat(t));
      };
    }

    f("click"), f("blur"), f("focus"), f("focusin"), f("focusout"), f("keyup"), f("keydown"), f("keypress"), f("submit"), f("change"), f("mousedown"), f("mousemove"), f("mouseup"), f("mouseenter"), f("mouseleave"), f("mouseout"), f("mouseover"), f("touchstart"), f("touchend"), f("touchmove"), f("resize"), f("scroll");
    var m = {
      addClass: function addClass() {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        var t = c(e.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var _e$classList;

          (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(t));
        }), this;
      },
      removeClass: function removeClass() {
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          e[_key3] = arguments[_key3];
        }

        var t = c(e.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var _e$classList2;

          (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(t));
        }), this;
      },
      hasClass: function hasClass() {
        for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          e[_key4] = arguments[_key4];
        }

        var t = c(e.map(function (e) {
          return e.split(" ");
        }));
        return p(this, function (e) {
          return t.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function toggleClass() {
        for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          e[_key5] = arguments[_key5];
        }

        var t = c(e.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          t.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function attr(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
          if (2 === arguments.length) this[_s3].setAttribute(e, t);else for (var _t3 in e) {
            this[_s3][_t3] = e[_t3], this[_s3].setAttribute(_t3, e[_t3]);
          }
        }

        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
          this[_t4].removeAttribute(e);
        }

        return this;
      },
      transform: function transform(e) {
        for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
          this[_t5].style.transform = e;
        }

        return this;
      },
      transition: function transition(e) {
        for (var _t6 = 0; _t6 < this.length; _t6 += 1) {
          this[_t6].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
        }

        return this;
      },
      on: function on() {
        var _e5, _e6;

        for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          e[_key6] = arguments[_key6];
        }

        var t = e[0],
            s = e[1],
            i = e[2],
            n = e[3];

        function r(e) {
          var t = e.target;
          if (!t) return;
          var n = e.target.dom7EventData || [];
          if (n.indexOf(e) < 0 && n.unshift(e), u(t).is(s)) i.apply(t, n);else {
            var _e4 = u(t).parents();

            for (var _t7 = 0; _t7 < _e4.length; _t7 += 1) {
              u(_e4[_t7]).is(s) && i.apply(_e4[_t7], n);
            }
          }
        }

        function a(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }

        "function" == typeof e[1] && ((_e5 = e, _e6 = _slicedToArray(_e5, 3), t = _e6[0], i = _e6[1], n = _e6[2], _e5), s = void 0), n || (n = !1);
        var o = t.split(" ");
        var l;

        for (var _e7 = 0; _e7 < this.length; _e7 += 1) {
          var _t8 = this[_e7];
          if (s) for (l = 0; l < o.length; l += 1) {
            var _e8 = o[l];
            _t8.dom7LiveListeners || (_t8.dom7LiveListeners = {}), _t8.dom7LiveListeners[_e8] || (_t8.dom7LiveListeners[_e8] = []), _t8.dom7LiveListeners[_e8].push({
              listener: i,
              proxyListener: r
            }), _t8.addEventListener(_e8, r, n);
          } else for (l = 0; l < o.length; l += 1) {
            var _e9 = o[l];
            _t8.dom7Listeners || (_t8.dom7Listeners = {}), _t8.dom7Listeners[_e9] || (_t8.dom7Listeners[_e9] = []), _t8.dom7Listeners[_e9].push({
              listener: i,
              proxyListener: a
            }), _t8.addEventListener(_e9, a, n);
          }
        }

        return this;
      },
      off: function off() {
        var _e10, _e11;

        for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          e[_key7] = arguments[_key7];
        }

        var t = e[0],
            s = e[1],
            i = e[2],
            n = e[3];
        "function" == typeof e[1] && ((_e10 = e, _e11 = _slicedToArray(_e10, 3), t = _e11[0], i = _e11[1], n = _e11[2], _e10), s = void 0), n || (n = !1);
        var r = t.split(" ");

        for (var _e12 = 0; _e12 < r.length; _e12 += 1) {
          var _t9 = r[_e12];

          for (var _e13 = 0; _e13 < this.length; _e13 += 1) {
            var _r = this[_e13];

            var _a = void 0;

            if (!s && _r.dom7Listeners ? _a = _r.dom7Listeners[_t9] : s && _r.dom7LiveListeners && (_a = _r.dom7LiveListeners[_t9]), _a && _a.length) for (var _e14 = _a.length - 1; _e14 >= 0; _e14 -= 1) {
              var _s4 = _a[_e14];
              i && _s4.listener === i || i && _s4.listener && _s4.listener.dom7proxy && _s4.listener.dom7proxy === i ? (_r.removeEventListener(_t9, _s4.proxyListener, n), _a.splice(_e14, 1)) : i || (_r.removeEventListener(_t9, _s4.proxyListener, n), _a.splice(_e14, 1));
            }
          }
        }

        return this;
      },
      trigger: function trigger() {
        for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          e[_key8] = arguments[_key8];
        }

        var t = l(),
            s = e[0].split(" "),
            i = e[1];

        for (var _n2 = 0; _n2 < s.length; _n2 += 1) {
          var _r2 = s[_n2];

          for (var _s5 = 0; _s5 < this.length; _s5 += 1) {
            var _n3 = this[_s5];

            if (t.CustomEvent) {
              var _s6 = new t.CustomEvent(_r2, {
                detail: i,
                bubbles: !0,
                cancelable: !0
              });

              _n3.dom7EventData = e.filter(function (e, t) {
                return t > 0;
              }), _n3.dispatchEvent(_s6), _n3.dom7EventData = [], delete _n3.dom7EventData;
            }
          }
        }

        return this;
      },
      transitionEnd: function transitionEnd(e) {
        var t = this;
        return e && t.on("transitionend", function s(i) {
          i.target === this && (e.call(this, i), t.off("transitionend", s));
        }), this;
      },
      outerWidth: function outerWidth(e) {
        if (this.length > 0) {
          if (e) {
            var _e15 = this.styles();

            return this[0].offsetWidth + parseFloat(_e15.getPropertyValue("margin-right")) + parseFloat(_e15.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function outerHeight(e) {
        if (this.length > 0) {
          if (e) {
            var _e16 = this.styles();

            return this[0].offsetHeight + parseFloat(_e16.getPropertyValue("margin-top")) + parseFloat(_e16.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      styles: function styles() {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function offset() {
        if (this.length > 0) {
          var _e17 = l(),
              _t10 = a(),
              _s7 = this[0],
              _i2 = _s7.getBoundingClientRect(),
              _n4 = _t10.body,
              _r3 = _s7.clientTop || _n4.clientTop || 0,
              _o = _s7.clientLeft || _n4.clientLeft || 0,
              _d2 = _s7 === _e17 ? _e17.scrollY : _s7.scrollTop,
              _c = _s7 === _e17 ? _e17.scrollX : _s7.scrollLeft;

          return {
            top: _i2.top + _d2 - _r3,
            left: _i2.left + _c - _o
          };
        }

        return null;
      },
      css: function css(e, t) {
        var s = l();
        var i;

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1) {
              for (var _t11 in e) {
                this[i].style[_t11] = e[_t11];
              }
            }

            return this;
          }

          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) {
            this[i].style[e] = t;
          }

          return this;
        }

        return this;
      },
      each: function each(e) {
        return e ? (this.forEach(function (t, s) {
          e.apply(t, [t, s]);
        }), this) : this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;

        for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
          this[_t12].innerHTML = e;
        }

        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var _t13 = 0; _t13 < this.length; _t13 += 1) {
          this[_t13].textContent = e;
        }

        return this;
      },
      is: function is(e) {
        var t = l(),
            s = a(),
            i = this[0];
        var n, r;
        if (!i || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);

          for (n = u(e), r = 0; r < n.length; r += 1) {
            if (n[r] === i) return !0;
          }

          return !1;
        }

        if (e === s) return i === s;
        if (e === t) return i === t;

        if (e.nodeType || e instanceof d) {
          for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1) {
            if (n[r] === i) return !0;
          }

          return !1;
        }

        return !1;
      },
      index: function index() {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) {
            1 === t.nodeType && (e += 1);
          }

          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return u([]);

        if (e < 0) {
          var _s8 = t + e;

          return u(_s8 < 0 ? [] : [this[_s8]]);
        }

        return u([this[e]]);
      },
      append: function append() {
        var t;
        var s = a();

        for (var _i3 = 0; _i3 < arguments.length; _i3 += 1) {
          t = _i3 < 0 || arguments.length <= _i3 ? undefined : arguments[_i3];

          for (var _e18 = 0; _e18 < this.length; _e18 += 1) {
            if ("string" == typeof t) {
              var _i4 = s.createElement("div");

              for (_i4.innerHTML = t; _i4.firstChild;) {
                this[_e18].appendChild(_i4.firstChild);
              }
            } else if (t instanceof d) for (var _s9 = 0; _s9 < t.length; _s9 += 1) {
              this[_e18].appendChild(t[_s9]);
            } else this[_e18].appendChild(t);
          }
        }

        return this;
      },
      prepend: function prepend(e) {
        var t = a();
        var s, i;

        for (s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var _n5 = t.createElement("div");

            for (_n5.innerHTML = e, i = _n5.childNodes.length - 1; i >= 0; i -= 1) {
              this[s].insertBefore(_n5.childNodes[i], this[s].childNodes[0]);
            }
          } else if (e instanceof d) for (i = 0; i < e.length; i += 1) {
            this[s].insertBefore(e[i], this[s].childNodes[0]);
          } else this[s].insertBefore(e, this[s].childNodes[0]);
        }

        return this;
      },
      next: function next(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([]);
      },
      nextAll: function nextAll(e) {
        var t = [];
        var s = this[0];
        if (!s) return u([]);

        for (; s.nextElementSibling;) {
          var _i5 = s.nextElementSibling;
          e ? u(_i5).is(e) && t.push(_i5) : t.push(_i5), s = _i5;
        }

        return u(t);
      },
      prev: function prev(e) {
        if (this.length > 0) {
          var _t14 = this[0];
          return e ? _t14.previousElementSibling && u(_t14.previousElementSibling).is(e) ? u([_t14.previousElementSibling]) : u([]) : _t14.previousElementSibling ? u([_t14.previousElementSibling]) : u([]);
        }

        return u([]);
      },
      prevAll: function prevAll(e) {
        var t = [];
        var s = this[0];
        if (!s) return u([]);

        for (; s.previousElementSibling;) {
          var _i6 = s.previousElementSibling;
          e ? u(_i6).is(e) && t.push(_i6) : t.push(_i6), s = _i6;
        }

        return u(t);
      },
      parent: function parent(e) {
        var t = [];

        for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
          null !== this[_s10].parentNode && (e ? u(this[_s10].parentNode).is(e) && t.push(this[_s10].parentNode) : t.push(this[_s10].parentNode));
        }

        return u(t);
      },
      parents: function parents(e) {
        var t = [];

        for (var _s11 = 0; _s11 < this.length; _s11 += 1) {
          var _i7 = this[_s11].parentNode;

          for (; _i7;) {
            e ? u(_i7).is(e) && t.push(_i7) : t.push(_i7), _i7 = _i7.parentNode;
          }
        }

        return u(t);
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        var t = [];

        for (var _s12 = 0; _s12 < this.length; _s12 += 1) {
          var _i8 = this[_s12].querySelectorAll(e);

          for (var _e19 = 0; _e19 < _i8.length; _e19 += 1) {
            t.push(_i8[_e19]);
          }
        }

        return u(t);
      },
      children: function children(e) {
        var t = [];

        for (var _s13 = 0; _s13 < this.length; _s13 += 1) {
          var _i9 = this[_s13].children;

          for (var _s14 = 0; _s14 < _i9.length; _s14 += 1) {
            e && !u(_i9[_s14]).is(e) || t.push(_i9[_s14]);
          }
        }

        return u(t);
      },
      filter: function filter(e) {
        return u(p(this, e));
      },
      remove: function remove() {
        for (var _e20 = 0; _e20 < this.length; _e20 += 1) {
          this[_e20].parentNode && this[_e20].parentNode.removeChild(this[_e20]);
        }

        return this;
      }
    };
    Object.keys(m).forEach(function (e) {
      Object.defineProperty(u.fn, e, {
        value: m[e],
        writable: !0
      });
    });
    var g = u;

    function v(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function w() {
      return Date.now();
    }

    function T(e, t) {
      void 0 === t && (t = "x");
      var s = l();
      var i, n, r;

      var a = function (e) {
        var t = l();
        var s;
        return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
      }(e);

      return s.WebKitCSSMatrix ? (n = a.transform || a.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0;
    }

    function b(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }

    function S(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
    }

    function C() {
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];

      for (var _s15 = 1; _s15 < arguments.length; _s15 += 1) {
        var _i10 = _s15 < 0 || arguments.length <= _s15 ? void 0 : arguments[_s15];

        if (null != _i10 && !S(_i10)) {
          var _s16 = Object.keys(Object(_i10)).filter(function (e) {
            return t.indexOf(e) < 0;
          });

          for (var _t15 = 0, _n6 = _s16.length; _t15 < _n6; _t15 += 1) {
            var _n7 = _s16[_t15],
                _r4 = Object.getOwnPropertyDescriptor(_i10, _n7);

            void 0 !== _r4 && _r4.enumerable && (b(e[_n7]) && b(_i10[_n7]) ? _i10[_n7].__swiper__ ? e[_n7] = _i10[_n7] : C(e[_n7], _i10[_n7]) : !b(e[_n7]) && b(_i10[_n7]) ? (e[_n7] = {}, _i10[_n7].__swiper__ ? e[_n7] = _i10[_n7] : C(e[_n7], _i10[_n7])) : e[_n7] = _i10[_n7]);
          }
        }
      }

      return e;
    }

    function E(e, t, s) {
      e.style.setProperty(t, s);
    }

    function x(e) {
      var t = e.swiper,
          s = e.targetPosition,
          i = e.side;
      var n = l(),
          r = -t.translate;
      var a,
          o = null;
      var d = t.params.speed;
      t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);

      var c = s > r ? "next" : "prev",
          p = function p(e, t) {
        return "next" === c && e >= t || "prev" === c && e <= t;
      },
          u = function u() {
        a = new Date().getTime(), null === o && (o = a);
        var e = Math.max(Math.min((a - o) / d, 1), 0),
            l = .5 - Math.cos(e * Math.PI) / 2;
        var c = r + l * (s - r);
        if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, i, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, i, c));
        }), void n.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = n.requestAnimationFrame(u);
      };

      u();
    }

    var y, M, P;

    function k() {
      return y || (y = function () {
        var e = l(),
            t = a();
        return {
          smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          passiveListener: function () {
            var t = !1;

            try {
              var _s17 = Object.defineProperty({}, "passive", {
                get: function get() {
                  t = !0;
                }
              });

              e.addEventListener("testPassiveListener", null, _s17);
            } catch (e) {}

            return t;
          }(),
          gestures: "ongesturestart" in e
        };
      }()), y;
    }

    function L(e) {
      return void 0 === e && (e = {}), M || (M = function (e) {
        var _ref = void 0 === e ? {} : e,
            t = _ref.userAgent;

        var s = k(),
            i = l(),
            n = i.navigator.platform,
            r = t || i.navigator.userAgent,
            a = {
          ios: !1,
          android: !1
        },
            o = i.screen.width,
            d = i.screen.height,
            c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
        var p = r.match(/(iPad).*OS\s([\d_]+)/);
        var u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === n;
        var m = "MacIntel" === n;
        return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(d)) >= 0 && (p = r.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !f && (a.os = "android", a.android = !0), (p || h || u) && (a.os = "ios", a.ios = !0), a;
      }(e)), M;
    }

    function O() {
      return P || (P = function () {
        var e = l();
        return {
          isSafari: function () {
            var t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
          }(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
        };
      }()), P;
    }

    function $(e) {
      var t = e.swiper,
          s = e.runCallbacks,
          i = e.direction,
          n = e.step;
      var r = t.activeIndex,
          a = t.previousIndex;
      var o = i;

      if (o || (o = r > a ? "next" : r < a ? "prev" : "reset"), t.emit("transition" + n), s && r !== a) {
        if ("reset" === o) return void t.emit("slideResetTransition" + n);
        t.emit("slideChangeTransition" + n), "next" === o ? t.emit("slideNextTransition" + n) : t.emit("slidePrevTransition" + n);
      }
    }

    function A(e) {
      var t = this,
          s = a(),
          i = l(),
          n = t.touchEventsData,
          r = t.params,
          o = t.touches,
          d = t.enabled;
      if (!d) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      var c = e;
      c.originalEvent && (c = c.originalEvent);
      var p = g(c.target);
      if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
      if (n.isTouchEvent = "touchstart" === c.type, !n.isTouchEvent && "which" in c && 3 === c.which) return;
      if (!n.isTouchEvent && "button" in c && c.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!r.noSwipingClass && "" !== r.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = g(e.path[0]));
      var u = r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass,
          h = !(!c.target || !c.target.shadowRoot);
      if (r.noSwiping && (h ? function (e, t) {
        return void 0 === t && (t = this), function t(s) {
          if (!s || s === a() || s === l()) return null;
          s.assignedSlot && (s = s.assignedSlot);
          var i = s.closest(e);
          return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
        }(t);
      }(u, p[0]) : p.closest(u)[0])) return void (t.allowClick = !0);
      if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
      o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
      var f = o.currentX,
          m = o.currentY,
          v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          T = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;

      if (v && (f <= T || f >= i.innerWidth - T)) {
        if ("prevent" !== v) return;
        e.preventDefault();
      }

      if (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), o.startX = f, o.startY = m, n.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
        var _e21 = !0;

        p.is(n.focusableElements) && (_e21 = !1, "SELECT" === p[0].nodeName && (n.isTouched = !1)), s.activeElement && g(s.activeElement).is(n.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();

        var _i11 = _e21 && t.allowTouchMove && r.touchStartPreventDefault;

        !r.touchStartForcePreventDefault && !_i11 || p[0].isContentEditable || c.preventDefault();
      }

      t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c);
    }

    function z(e) {
      var t = a(),
          s = this,
          i = s.touchEventsData,
          n = s.params,
          r = s.touches,
          o = s.rtlTranslate,
          l = s.enabled;
      if (!l) return;
      var d = e;
      if (d.originalEvent && (d = d.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
      if (i.isTouchEvent && "touchmove" !== d.type) return;
      var c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
          p = "touchmove" === d.type ? c.pageX : d.pageX,
          u = "touchmove" === d.type ? c.pageY : d.pageY;
      if (d.preventedByNestedSwiper) return r.startX = p, void (r.startY = u);
      if (!s.allowTouchMove) return g(d.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(r, {
        startX: p,
        startY: u,
        currentX: p,
        currentY: u
      }), i.touchStartTime = w()));
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (s.isVertical()) {
        if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
      } else if (p < r.startX && s.translate <= s.maxTranslate() || p > r.startX && s.translate >= s.minTranslate()) return;
      if (i.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
      if (i.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
      r.currentX = p, r.currentY = u;
      var h = r.currentX - r.startX,
          f = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) < s.params.threshold) return;

      if (void 0 === i.isScrolling) {
        var _e22;

        s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (_e22 = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e22 > n.touchAngle : 90 - _e22 > n.touchAngle);
      }

      if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
      if (!i.startMoving) return;
      s.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation(), i.isMoved || (n.loop && !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), i.isMoved = !0;
      var m = s.isHorizontal() ? h : f;
      r.diff = m, m *= n.touchRatio, o && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
      var v = !0,
          T = n.resistanceRatio;

      if (n.touchReleaseOnEdges && (T = 0), m > 0 && i.currentTranslate > s.minTranslate() ? (v = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + m, T))) : m < 0 && i.currentTranslate < s.maxTranslate() && (v = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - m, T))), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), n.threshold > 0) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
      }

      n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }

    function I(e) {
      var t = this,
          s = t.touchEventsData,
          i = t.params,
          n = t.touches,
          r = t.rtlTranslate,
          a = t.slidesGrid,
          o = t.enabled;
      if (!o) return;
      var l = e;
      if (l.originalEvent && (l = l.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", l), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
      i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      var d = w(),
          c = d - s.touchStartTime;

      if (t.allowClick) {
        var _e23 = l.path || l.composedPath && l.composedPath();

        t.updateClickedSlide(_e23 && _e23[0] || l.target), t.emit("tap click", l), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", l);
      }

      if (s.lastClickTime = w(), v(function () {
        t.destroyed || (t.allowClick = !0);
      }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
      var p;
      if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
      if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: p
      });
      var u = 0,
          h = t.slidesSizesGrid[0];

      for (var _e24 = 0; _e24 < a.length; _e24 += _e24 < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        var _t16 = _e24 < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

        void 0 !== a[_e24 + _t16] ? p >= a[_e24] && p < a[_e24 + _t16] && (u = _e24, h = a[_e24 + _t16] - a[_e24]) : p >= a[_e24] && (u = _e24, h = a[a.length - 1] - a[a.length - 2]);
      }

      var f = null,
          m = null;
      i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
      var g = (p - a[u]) / h,
          T = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

      if (c > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : u + T) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(u + T) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(u));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(u + T) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + T), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
      }
    }

    function D() {
      var e = this,
          t = e.params,
          s = e.el;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          n = e.allowSlidePrev,
          r = e.snapGrid;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }

    function G(e) {
      var t = this;
      t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }

    function N() {
      var e = this,
          t = e.wrapperEl,
          s = e.rtlTranslate,
          i = e.enabled;
      if (!i) return;
      var n;
      e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      var r = e.maxTranslate() - e.minTranslate();
      n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }

    var _ = !1;

    function B() {}

    var j = function j(e, t) {
      var s = a(),
          i = e.params,
          n = e.touchEvents,
          r = e.el,
          o = e.wrapperEl,
          l = e.device,
          d = e.support,
          c = !!i.nested,
          p = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;

      if (d.touch) {
        var _t17 = !("touchstart" !== n.start || !d.passiveListener || !i.passiveListeners) && {
          passive: !0,
          capture: !1
        };

        r[p](n.start, e.onTouchStart, _t17), r[p](n.move, e.onTouchMove, d.passiveListener ? {
          passive: !1,
          capture: c
        } : c), r[p](n.end, e.onTouchEnd, _t17), n.cancel && r[p](n.cancel, e.onTouchEnd, _t17);
      } else r[p](n.start, e.onTouchStart, !1), s[p](n.move, e.onTouchMove, c), s[p](n.end, e.onTouchEnd, !1);

      (i.preventClicks || i.preventClicksPropagation) && r[p]("click", e.onClick, !0), i.cssMode && o[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D, !0) : e[u]("observerUpdate", D, !0);
    };

    var H = function H(e, t) {
      return e.grid && t.grid && t.grid.rows > 1;
    };

    var V = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };

    function F(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        var i = Object.keys(s)[0],
            n = s[i];
        "object" == _typeof(n) && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
          auto: !0
        }), i in e && "enabled" in n ? (!0 === e[i] && (e[i] = {
          enabled: !0
        }), "object" != _typeof(e[i]) || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
          enabled: !1
        }), C(t, s)) : C(t, s)) : C(t, s);
      };
    }

    var W = {
      eventsEmitter: {
        on: function on(e, t, s) {
          var i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          var n = s ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t);
          }), i;
        },
        once: function once(e, t, s) {
          var i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;

            for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) {
              r[a] = arguments[a];
            }

            t.apply(i, r);
          }

          return n.__emitterProxy = t, i.on(e, n, s);
        },
        onAny: function onAny(e, t) {
          var s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          var i = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
        },
        offAny: function offAny(e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          var s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off: function off(e, t) {
          var s = this;
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (i, n) {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(n, 1);
            });
          }), s) : s;
        },
        emit: function emit() {
          var e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          var t, s, i;

          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) {
            r[a] = arguments[a];
          }

          "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), i = e) : (t = r[0].events, s = r[0].data, i = r[0].context || e), s.unshift(i);
          return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
              e.apply(i, [t].concat(_toConsumableArray(s)));
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
              e.apply(i, s);
            });
          }), e;
        }
      },
      update: {
        updateSize: function updateSize() {
          var e = this;
          var t, s;
          var i = e.$el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
          }));
        },
        updateSlides: function updateSlides() {
          var e = this;

          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          }

          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }

          var i = e.params,
              n = e.$wrapperEl,
              r = e.size,
              a = e.rtlTranslate,
              o = e.wrongRTL,
              l = e.virtual && i.virtual.enabled,
              d = l ? e.virtual.slides.length : e.slides.length,
              c = n.children("." + e.params.slideClass),
              p = l ? e.virtual.slides.length : c.length;
          var u = [];
          var h = [],
              f = [];
          var m = i.slidesOffsetBefore;
          "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
          var g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          var v = e.snapGrid.length,
              w = e.slidesGrid.length;
          var T = i.spaceBetween,
              b = -m,
              S = 0,
              C = 0;
          if (void 0 === r) return;
          "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * r), e.virtualSize = -T, a ? c.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
          }) : c.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
          }), i.centeredSlides && i.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
          var x = i.grid && i.grid.rows > 1 && e.grid;
          var y;
          x && e.grid.initSlides(p);
          var M = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(function (e) {
            return void 0 !== i.breakpoints[e].slidesPerView;
          }).length > 0;

          for (var _n8 = 0; _n8 < p; _n8 += 1) {
            y = 0;

            var _a2 = c.eq(_n8);

            if (x && e.grid.updateSlide(_n8, _a2, p, t), "none" !== _a2.css("display")) {
              if ("auto" === i.slidesPerView) {
                M && (c[_n8].style[t("width")] = "");

                var _r5 = getComputedStyle(_a2[0]),
                    _o2 = _a2[0].style.transform,
                    _l = _a2[0].style.webkitTransform;

                if (_o2 && (_a2[0].style.transform = "none"), _l && (_a2[0].style.webkitTransform = "none"), i.roundLengths) y = e.isHorizontal() ? _a2.outerWidth(!0) : _a2.outerHeight(!0);else {
                  var _e25 = s(_r5, "width"),
                      _t18 = s(_r5, "padding-left"),
                      _i12 = s(_r5, "padding-right"),
                      _n9 = s(_r5, "margin-left"),
                      _o3 = s(_r5, "margin-right"),
                      _l2 = _r5.getPropertyValue("box-sizing");

                  if (_l2 && "border-box" === _l2) y = _e25 + _n9 + _o3;else {
                    var _a2$ = _a2[0],
                        _s18 = _a2$.clientWidth,
                        _r6 = _a2$.offsetWidth;
                    y = _e25 + _t18 + _i12 + _n9 + _o3 + (_r6 - _s18);
                  }
                }
                _o2 && (_a2[0].style.transform = _o2), _l && (_a2[0].style.webkitTransform = _l), i.roundLengths && (y = Math.floor(y));
              } else y = (r - (i.slidesPerView - 1) * T) / i.slidesPerView, i.roundLengths && (y = Math.floor(y)), c[_n8] && (c[_n8].style[t("width")] = y + "px");

              c[_n8] && (c[_n8].swiperSlideSize = y), f.push(y), i.centeredSlides ? (b = b + y / 2 + S / 2 + T, 0 === S && 0 !== _n8 && (b = b - r / 2 - T), 0 === _n8 && (b = b - r / 2 - T), Math.abs(b) < .001 && (b = 0), i.roundLengths && (b = Math.floor(b)), C % i.slidesPerGroup == 0 && u.push(b), h.push(b)) : (i.roundLengths && (b = Math.floor(b)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(b), h.push(b), b = b + y + T), e.virtualSize += y + T, S = y, C += 1;
            }
          }

          if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && o && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
            width: e.virtualSize + i.spaceBetween + "px"
          }), i.setWrapperSize && n.css(_defineProperty({}, t("width"), e.virtualSize + i.spaceBetween + "px")), x && e.grid.updateWrapperSize(y, u, t), !i.centeredSlides) {
            var _t19 = [];

            for (var _s19 = 0; _s19 < u.length; _s19 += 1) {
              var _n10 = u[_s19];
              i.roundLengths && (_n10 = Math.floor(_n10)), u[_s19] <= e.virtualSize - r && _t19.push(_n10);
            }

            u = _t19, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
          }

          if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
            var _s20 = e.isHorizontal() && a ? "marginLeft" : t("marginRight");

            c.filter(function (e, t) {
              return !i.cssMode || t !== c.length - 1;
            }).css(_defineProperty({}, _s20, T + "px"));
          }

          if (i.centeredSlides && i.centeredSlidesBounds) {
            var _e26 = 0;
            f.forEach(function (t) {
              _e26 += t + (i.spaceBetween ? i.spaceBetween : 0);
            }), _e26 -= i.spaceBetween;

            var _t20 = _e26 - r;

            u = u.map(function (e) {
              return e < 0 ? -m : e > _t20 ? _t20 + g : e;
            });
          }

          if (i.centerInsufficientSlides) {
            var _e27 = 0;

            if (f.forEach(function (t) {
              _e27 += t + (i.spaceBetween ? i.spaceBetween : 0);
            }), _e27 -= i.spaceBetween, _e27 < r) {
              var _t21 = (r - _e27) / 2;

              u.forEach(function (e, s) {
                u[s] = e - _t21;
              }), h.forEach(function (e, s) {
                h[s] = e + _t21;
              });
            }
          }

          if (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: f
          }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
            E(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");

            var _t22 = -e.snapGrid[0],
                _s21 = -e.slidesGrid[0];

            e.snapGrid = e.snapGrid.map(function (e) {
              return e + _t22;
            }), e.slidesGrid = e.slidesGrid.map(function (e) {
              return e + _s21;
            });
          }

          if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
            var _t23 = i.containerModifierClass + "backface-hidden",
                _s22 = e.$el.hasClass(_t23);

            p <= i.maxBackfaceHiddenSlides ? _s22 || e.$el.addClass(_t23) : _s22 && e.$el.removeClass(_t23);
          }
        },
        updateAutoHeight: function updateAutoHeight(e) {
          var t = this,
              s = [],
              i = t.virtual && t.params.virtual.enabled;
          var n,
              r = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

          var a = function a(e) {
            return i ? t.slides.filter(function (t) {
              return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
            })[0] : t.slides.eq(e)[0];
          };

          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
            if (t.params.centeredSlides) (t.visibleSlides || g([])).each(function (e) {
              s.push(e);
            });else for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              var _e28 = t.activeIndex + n;

              if (_e28 > t.slides.length && !i) break;
              s.push(a(_e28));
            }
          } else s.push(a(t.activeIndex));

          for (n = 0; n < s.length; n += 1) {
            if (void 0 !== s[n]) {
              var _e29 = s[n].offsetHeight;
              r = _e29 > r ? _e29 : r;
            }
          }

          (r || 0 === r) && t.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function updateSlidesOffset() {
          var e = this,
              t = e.slides;

          for (var _s23 = 0; _s23 < t.length; _s23 += 1) {
            t[_s23].swiperSlideOffset = e.isHorizontal() ? t[_s23].offsetLeft : t[_s23].offsetTop;
          }
        },
        updateSlidesProgress: function updateSlidesProgress(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this,
              s = t.params,
              i = t.slides,
              n = t.rtlTranslate,
              r = t.snapGrid;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var a = -e;
          n && (a = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

          for (var _e30 = 0; _e30 < i.length; _e30 += 1) {
            var _o4 = i[_e30];
            var _l3 = _o4.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (_l3 -= i[0].swiperSlideOffset);

            var _d3 = (a + (s.centeredSlides ? t.minTranslate() : 0) - _l3) / (_o4.swiperSlideSize + s.spaceBetween),
                _c2 = (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _l3) / (_o4.swiperSlideSize + s.spaceBetween),
                _p = -(a - _l3),
                _u = _p + t.slidesSizesGrid[_e30];

            (_p >= 0 && _p < t.size - 1 || _u > 1 && _u <= t.size || _p <= 0 && _u >= t.size) && (t.visibleSlides.push(_o4), t.visibleSlidesIndexes.push(_e30), i.eq(_e30).addClass(s.slideVisibleClass)), _o4.progress = n ? -_d3 : _d3, _o4.originalProgress = n ? -_c2 : _c2;
          }

          t.visibleSlides = g(t.visibleSlides);
        },
        updateProgress: function updateProgress(e) {
          var t = this;

          if (void 0 === e) {
            var _s24 = t.rtlTranslate ? -1 : 1;

            e = t && t.translate && t.translate * _s24 || 0;
          }

          var s = t.params,
              i = t.maxTranslate() - t.minTranslate();
          var n = t.progress,
              r = t.isBeginning,
              a = t.isEnd;
          var o = r,
              l = a;
          0 === i ? (n = 0, r = !0, a = !0) : (n = (e - t.minTranslate()) / i, r = n <= 0, a = n >= 1), Object.assign(t, {
            progress: n,
            isBeginning: r,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", n);
        },
        updateSlidesClasses: function updateSlidesClasses() {
          var e = this,
              t = e.slides,
              s = e.params,
              i = e.$wrapperEl,
              n = e.activeIndex,
              r = e.realIndex,
              a = e.virtual && s.virtual.enabled;
          var o;
          t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), o = a ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(n, "\"]")) : t.eq(n), o.addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
          var l = o.nextAll("." + s.slideClass).eq(0).addClass(s.slideNextClass);
          s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
          var d = o.prevAll("." + s.slideClass).eq(0).addClass(s.slidePrevClass);
          s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
        },
        updateActiveIndex: function updateActiveIndex(e) {
          var t = this,
              s = t.rtlTranslate ? t.translate : -t.translate,
              i = t.slidesGrid,
              n = t.snapGrid,
              r = t.params,
              a = t.activeIndex,
              o = t.realIndex,
              l = t.snapIndex;
          var d,
              c = e;

          if (void 0 === c) {
            for (var _e31 = 0; _e31 < i.length; _e31 += 1) {
              void 0 !== i[_e31 + 1] ? s >= i[_e31] && s < i[_e31 + 1] - (i[_e31 + 1] - i[_e31]) / 2 ? c = _e31 : s >= i[_e31] && s < i[_e31 + 1] && (c = _e31 + 1) : s >= i[_e31] && (c = _e31);
            }

            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }

          if (n.indexOf(s) >= 0) d = n.indexOf(s);else {
            var _e32 = Math.min(r.slidesPerGroupSkip, c);

            d = _e32 + Math.floor((c - _e32) / r.slidesPerGroup);
          }
          if (d >= n.length && (d = n.length - 1), c === a) return void (d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
          var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
          Object.assign(t, {
            snapIndex: d,
            realIndex: p,
            previousIndex: a,
            activeIndex: c
          }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
        },
        updateClickedSlide: function updateClickedSlide(e) {
          var t = this,
              s = t.params,
              i = g(e).closest("." + s.slideClass)[0];
          var n,
              r = !1;
          if (i) for (var _e33 = 0; _e33 < t.slides.length; _e33 += 1) {
            if (t.slides[_e33] === i) {
              r = !0, n = _e33;
              break;
            }
          }
          if (!i || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
          t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function getTranslate(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
              s = this.rtlTranslate,
              i = this.translate,
              n = this.$wrapperEl;
          if (t.virtualTranslate) return s ? -i : i;
          if (t.cssMode) return i;
          var r = T(n[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function setTranslate(e, t) {
          var s = this,
              i = s.rtlTranslate,
              n = s.params,
              r = s.$wrapperEl,
              a = s.wrapperEl,
              o = s.progress;
          var l,
              d = 0,
              c = 0;
          s.isHorizontal() ? d = i ? -e : e : c = e, n.roundLengths && (d = Math.floor(d), c = Math.floor(c)), n.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : n.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
          var p = s.maxTranslate() - s.minTranslate();
          l = 0 === p ? 0 : (e - s.minTranslate()) / p, l !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function minTranslate() {
          return -this.snapGrid[0];
        },
        maxTranslate: function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function translateTo(e, t, s, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
          var r = this,
              a = r.params,
              o = r.wrapperEl;
          if (r.animating && a.preventInteractionOnTransition) return !1;
          var l = r.minTranslate(),
              d = r.maxTranslate();
          var c;

          if (c = i && e > l ? l : i && e < d ? d : e, r.updateProgress(c), a.cssMode) {
            var _e34 = r.isHorizontal();

            if (0 === t) o[_e34 ? "scrollLeft" : "scrollTop"] = -c;else {
              var _o$scrollTo;

              if (!r.support.smoothScroll) return x({
                swiper: r,
                targetPosition: -c,
                side: _e34 ? "left" : "top"
              }), !0;
              o.scrollTo((_o$scrollTo = {}, _defineProperty(_o$scrollTo, _e34 ? "left" : "top", -c), _defineProperty(_o$scrollTo, "behavior", "smooth"), _o$scrollTo));
            }
            return !0;
          }

          return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function setTransition(e, t) {
          var s = this;
          s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var s = this,
              i = s.params;
          i.cssMode || (i.autoHeight && s.updateAutoHeight(), $({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function transitionEnd(e, t) {
          void 0 === e && (e = !0);
          var s = this.params;
          this.animating = !1, s.cssMode || (this.setTransition(0), $({
            swiper: this,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: {
        slideTo: function slideTo(e, t, s, i, n) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

          if ("string" == typeof e) {
            var _t24 = parseInt(e, 10);

            if (!isFinite(_t24)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
            e = _t24;
          }

          var r = this;
          var a = e;
          a < 0 && (a = 0);
          var o = r.params,
              l = r.snapGrid,
              d = r.slidesGrid,
              c = r.previousIndex,
              p = r.activeIndex,
              u = r.rtlTranslate,
              h = r.wrapperEl,
              f = r.enabled;
          if (r.animating && o.preventInteractionOnTransition || !f && !i && !n) return !1;
          var m = Math.min(r.params.slidesPerGroupSkip, a);
          var g = m + Math.floor((a - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1), (p || o.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
          var v = -l[g];
          if (r.updateProgress(v), o.normalizeSlideIndex) for (var _e35 = 0; _e35 < d.length; _e35 += 1) {
            var _t25 = -Math.floor(100 * v),
                _s25 = Math.floor(100 * d[_e35]),
                _i13 = Math.floor(100 * d[_e35 + 1]);

            void 0 !== d[_e35 + 1] ? _t25 >= _s25 && _t25 < _i13 - (_i13 - _s25) / 2 ? a = _e35 : _t25 >= _s25 && _t25 < _i13 && (a = _e35 + 1) : _t25 >= _s25 && (a = _e35);
          }

          if (r.initialized && a !== p) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== a) return !1;
          }

          var w;
          if (w = a > p ? "next" : a < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(a), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;

          if (o.cssMode) {
            var _e36 = r.isHorizontal(),
                _s26 = u ? v : -v;

            if (0 === t) {
              var _t26 = r.virtual && r.params.virtual.enabled;

              _t26 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e36 ? "scrollLeft" : "scrollTop"] = _s26, _t26 && requestAnimationFrame(function () {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
              });
            } else {
              var _h$scrollTo;

              if (!r.support.smoothScroll) return x({
                swiper: r,
                targetPosition: _s26,
                side: _e36 ? "left" : "top"
              }), !0;
              h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e36 ? "left" : "top", _s26), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
            }

            return !0;
          }

          return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, w), 0 === t ? r.transitionEnd(s, w) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
        },
        slideToLoop: function slideToLoop(e, t, s, i) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
            var _t27 = parseInt(e, 10);

            if (!isFinite(_t27)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
            e = _t27;
          }

          var n = this;
          var r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
        },
        slideNext: function slideNext(e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
              n = i.animating,
              r = i.enabled,
              a = i.params;
          if (!r) return i;
          var o = a.slidesPerGroup;
          "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          var l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;

          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
          }

          return a.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
        },
        slidePrev: function slidePrev(e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
              n = i.params,
              r = i.animating,
              a = i.snapGrid,
              o = i.slidesGrid,
              l = i.rtlTranslate,
              d = i.enabled;
          if (!d) return i;

          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
          }

          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }

          var p = c(l ? i.translate : -i.translate),
              u = a.map(function (e) {
            return c(e);
          });
          var h = a[u.indexOf(p) - 1];

          if (void 0 === h && n.cssMode) {
            var _e37;

            a.forEach(function (t, s) {
              p >= t && (_e37 = s);
            }), void 0 !== _e37 && (h = a[_e37 > 0 ? _e37 - 1 : _e37]);
          }

          var f = 0;

          if (void 0 !== h && (f = o.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), n.rewind && i.isBeginning) {
            var _n11 = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;

            return i.slideTo(_n11, e, t, s);
          }

          return i.slideTo(f, e, t, s);
        },
        slideReset: function slideReset(e, t, s) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function slideToClosest(e, t, s, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
          var n = this;
          var r = n.activeIndex;
          var a = Math.min(n.params.slidesPerGroupSkip, r),
              o = a + Math.floor((r - a) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;

          if (l >= n.snapGrid[o]) {
            var _e38 = n.snapGrid[o];
            l - _e38 > (n.snapGrid[o + 1] - _e38) * i && (r += n.params.slidesPerGroup);
          } else {
            var _e39 = n.snapGrid[o - 1];
            l - _e39 <= (n.snapGrid[o] - _e39) * i && (r -= n.params.slidesPerGroup);
          }

          return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s);
        },
        slideToClickedSlide: function slideToClickedSlide() {
          var e = this,
              t = e.params,
              s = e.$wrapperEl,
              i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          var n,
              r = e.clickedIndex;

          if (t.loop) {
            if (e.animating) return;
            n = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(n, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), v(function () {
              e.slideTo(r);
            })) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(n, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), v(function () {
              e.slideTo(r);
            })) : e.slideTo(r);
          } else e.slideTo(r);
        }
      },
      loop: {
        loopCreate: function loopCreate() {
          var e = this,
              t = a(),
              s = e.params,
              i = e.$wrapperEl,
              n = i.children().length > 0 ? g(i.children()[0].parentNode) : i;
          n.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
          var r = n.children("." + s.slideClass);

          if (s.loopFillGroupWithBlank) {
            var _e40 = s.slidesPerGroup - r.length % s.slidesPerGroup;

            if (_e40 !== s.slidesPerGroup) {
              for (var _i14 = 0; _i14 < _e40; _i14 += 1) {
                var _e41 = g(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

                n.append(_e41);
              }

              r = n.children("." + s.slideClass);
            }
          }

          "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
          var o = [],
              l = [];
          r.each(function (t, s) {
            var i = g(t);
            s < e.loopedSlides && l.push(t), s < r.length && s >= r.length - e.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", s);
          });

          for (var _e42 = 0; _e42 < l.length; _e42 += 1) {
            n.append(g(l[_e42].cloneNode(!0)).addClass(s.slideDuplicateClass));
          }

          for (var _e43 = o.length - 1; _e43 >= 0; _e43 -= 1) {
            n.prepend(g(o[_e43].cloneNode(!0)).addClass(s.slideDuplicateClass));
          }
        },
        loopFix: function loopFix() {
          var e = this;
          e.emit("beforeLoopFix");
          var t = e.activeIndex,
              s = e.slides,
              i = e.loopedSlides,
              n = e.allowSlidePrev,
              r = e.allowSlideNext,
              a = e.snapGrid,
              o = e.rtlTranslate;
          var l;
          e.allowSlidePrev = !0, e.allowSlideNext = !0;
          var d = -a[t] - e.getTranslate();

          if (t < i) {
            l = s.length - 3 * i + t, l += i;
            e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
          } else if (t >= s.length - i) {
            l = -s.length + t + i, l += i;
            e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
          }

          e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix");
        },
        loopDestroy: function loopDestroy() {
          var e = this.$wrapperEl,
              t = this.params,
              s = this.slides;
          e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
          var t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
          t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab";
        },
        unsetGrabCursor: function unsetGrabCursor() {
          this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
              t = a(),
              s = e.params,
              i = e.support;
          e.onTouchStart = A.bind(e), e.onTouchMove = z.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = N.bind(e)), e.onClick = G.bind(e), i.touch && !_ && (t.addEventListener("touchstart", B), _ = !0), j(e, "on");
        },
        detachEvents: function detachEvents() {
          j(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
              t = e.activeIndex,
              s = e.initialized,
              _e$loopedSlides = e.loopedSlides,
              i = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
              n = e.params,
              r = e.$el,
              a = n.breakpoints;
          if (!a || a && 0 === Object.keys(a).length) return;
          var o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
          if (!o || e.currentBreakpoint === o) return;
          var l = (o in a ? a[o] : void 0) || e.originalParams,
              d = H(e, n),
              c = H(e, l),
              p = n.enabled;
          d && !c ? (r.removeClass("".concat(n.containerModifierClass, "grid ").concat(n.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass(n.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && r.addClass(n.containerModifierClass + "grid-column"), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
            var s = n[t] && n[t].enabled,
                i = l[t] && l[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
          var u = l.direction && l.direction !== n.direction,
              h = n.loop && (l.slidesPerView !== n.slidesPerView || u);
          u && s && e.changeDirection(), C(e.params, l);
          var f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), p && !f ? e.disable() : !p && f && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l);
        },
        getBreakpoint: function getBreakpoint(e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          var i = !1;
          var n = l(),
              r = "window" === t ? n.innerHeight : s.clientHeight,
              a = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var _t28 = parseFloat(e.substr(1));

              return {
                value: r * _t28,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          a.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var _e44 = 0; _e44 < a.length; _e44 += 1) {
            var _a$_e = a[_e44],
                _r7 = _a$_e.point,
                _o5 = _a$_e.value;
            "window" === t ? n.matchMedia("(min-width: ".concat(_o5, "px)")).matches && (i = _r7) : _o5 <= s.clientWidth && (i = _r7);
          }

          return i || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
              t = e.isLocked,
              s = e.params,
              i = s.slidesOffsetBefore;

          if (i) {
            var _t29 = e.slides.length - 1,
                _s27 = e.slidesGrid[_t29] + e.slidesSizesGrid[_t29] + 2 * i;

            e.isLocked = e.size > _s27;
          } else e.isLocked = 1 === e.snapGrid.length;

          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e = this.classNames,
              t = this.params,
              s = this.rtl,
              i = this.$el,
              n = this.device,
              r = this.support,
              a = function (e, t) {
            var s = [];
            return e.forEach(function (e) {
              "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
                e[i] && s.push(t + i);
              }) : "string" == typeof e && s.push(t + e);
            }), s;
          }(["initialized", t.direction, {
            "pointer-events": !r.touch
          }, {
            "free-mode": this.params.freeMode && t.freeMode.enabled
          }, {
            autoheight: t.autoHeight
          }, {
            rtl: s
          }, {
            grid: t.grid && t.grid.rows > 1
          }, {
            "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
          }, {
            android: n.android
          }, {
            ios: n.ios
          }, {
            "css-mode": t.cssMode
          }, {
            centered: t.cssMode && t.centeredSlides
          }, {
            "watch-progress": t.watchSlidesProgress
          }], t.containerModifierClass);

          e.push.apply(e, _toConsumableArray(a)), i.addClass(_toConsumableArray(e).join(" ")), this.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
              t = this.classNames;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
      },
      images: {
        loadImage: function loadImage(e, t, s, i, n, r) {
          var a = l();
          var o;

          function d() {
            r && r();
          }

          g(e).parent("picture")[0] || e.complete && n ? d() : t ? (o = new a.Image(), o.onload = d, o.onerror = d, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : d();
        },
        preloadImages: function preloadImages() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var _s28 = 0; _s28 < e.imagesToLoad.length; _s28 += 1) {
            var _i15 = e.imagesToLoad[_s28];
            e.loadImage(_i15, _i15.currentSrc || _i15.getAttribute("src"), _i15.srcset || _i15.getAttribute("srcset"), _i15.sizes || _i15.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        R = {};

    var q =
    /*#__PURE__*/
    function () {
      function q() {
        var _i16, _i17, _r$modules;

        _classCallCheck(this, q);

        var e, t;

        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) {
          i[n] = arguments[n];
        }

        if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : (_i16 = i, _i17 = _slicedToArray(_i16, 2), e = _i17[0], t = _i17[1], _i16), t || (t = {}), t = C({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
          var _e45 = [];
          return g(t.el).each(function (s) {
            var i = C({}, t, {
              el: s
            });

            _e45.push(new q(i));
          }), _e45;
        }

        var r = this;
        r.__swiper__ = !0, r.support = k(), r.device = L({
          userAgent: t.userAgent
        }), r.browser = O(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = _toConsumableArray(r.__modules__), t.modules && Array.isArray(t.modules) && (_r$modules = r.modules).push.apply(_r$modules, _toConsumableArray(t.modules));
        var a = {};
        r.modules.forEach(function (e) {
          e({
            swiper: r,
            extendParams: F(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r)
          });
        });
        var o = C({}, V, a);
        return r.params = C({}, o, R, t), r.originalParams = C({}, r.params), r.passedParams = C({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(function (e) {
          r.on(e, r.params.on[e]);
        }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = g, Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: g(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === r.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === r.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: function () {
            var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
            return r.touchEventsTouch = {
              start: e[0],
              move: e[1],
              end: e[2],
              cancel: e[3]
            }, r.touchEventsDesktop = {
              start: t[0],
              move: t[1],
              end: t[2]
            }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: w(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), r.emit("_swiper"), r.params.init && r.init(), r;
      }

      _createClass(q, [{
        key: "enable",
        value: function enable() {
          var e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
      }, {
        key: "disable",
        value: function disable() {
          var e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
      }, {
        key: "setProgress",
        value: function setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          var s = this.minTranslate(),
              i = (this.maxTranslate() - s) * e + s;
          this.translateTo(i, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses();
        }
      }, {
        key: "emitContainerClasses",
        value: function emitContainerClasses() {
          var e = this;
          if (!e.params._emitClasses || !e.el) return;
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, {
        key: "getSlideClasses",
        value: function getSlideClasses(e) {
          var t = this;
          return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
            return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
          }).join(" ");
        }
      }, {
        key: "emitSlidesClasses",
        value: function emitSlidesClasses() {
          var e = this;
          if (!e.params._emitClasses || !e.el) return;
          var t = [];
          e.slides.each(function (s) {
            var i = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: i
            }), e.emit("_slideClass", s, i);
          }), e.emit("_slideClasses", t);
        }
      }, {
        key: "slidesPerViewDynamic",
        value: function slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          var s = this.params,
              i = this.slides,
              n = this.slidesGrid,
              r = this.slidesSizesGrid,
              a = this.size,
              o = this.activeIndex;
          var l = 1;

          if (s.centeredSlides) {
            var _e46,
                _t30 = i[o].swiperSlideSize;

            for (var _s29 = o + 1; _s29 < i.length; _s29 += 1) {
              i[_s29] && !_e46 && (_t30 += i[_s29].swiperSlideSize, l += 1, _t30 > a && (_e46 = !0));
            }

            for (var _s30 = o - 1; _s30 >= 0; _s30 -= 1) {
              i[_s30] && !_e46 && (_t30 += i[_s30].swiperSlideSize, l += 1, _t30 > a && (_e46 = !0));
            }
          } else if ("current" === e) for (var _e47 = o + 1; _e47 < i.length; _e47 += 1) {
            (t ? n[_e47] + r[_e47] - n[o] < a : n[_e47] - n[o] < a) && (l += 1);
          } else for (var _e48 = o - 1; _e48 >= 0; _e48 -= 1) {
            n[o] - n[_e48] < a && (l += 1);
          }

          return l;
        }
      }, {
        key: "update",
        value: function update() {
          var e = this;
          if (!e || e.destroyed) return;
          var t = e.snapGrid,
              s = e.params;

          function i() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }

          var n;
          s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
      }, {
        key: "changeDirection",
        value: function changeDirection(e, t) {
          void 0 === t && (t = !0);
          var s = this,
              i = s.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(i)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
            "vertical" === e ? t.style.width = "" : t.style.height = "";
          }), s.emit("changeDirection"), t && s.update()), s;
        }
      }, {
        key: "changeLanguageDirection",
        value: function changeLanguageDirection(e) {
          var t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(t.params.containerModifierClass + "rtl"), t.el.dir = "rtl") : (t.$el.removeClass(t.params.containerModifierClass + "rtl"), t.el.dir = "ltr"), t.update());
        }
      }, {
        key: "mount",
        value: function mount(e) {
          var t = this;
          if (t.mounted) return !0;
          var s = g(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;

          var i = function i() {
            return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
          };

          var n = function () {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              var _t31 = g(e.shadowRoot.querySelector(i()));

              return _t31.children = function (e) {
                return s.children(e);
              }, _t31;
            }

            return s.children ? s.children(i()) : g(s).children(i());
          }();

          if (0 === n.length && t.params.createElements) {
            var _e49 = a().createElement("div");

            n = g(_e49), _e49.className = t.params.wrapperClass, s.append(_e49), s.children("." + t.params.slideClass).each(function (e) {
              n.append(e);
            });
          }

          return Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display")
          }), !0;
        }
      }, {
        key: "init",
        value: function init(e) {
          var t = this;
          if (t.initialized) return t;
          return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
        }
      }, {
        key: "destroy",
        value: function destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var s = this,
              i = s.params,
              n = s.$el,
              r = s.$wrapperEl,
              a = s.slides;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
            s.off(e);
          }), !1 !== e && (s.$el[0].swiper = null, function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
              try {
                t[e] = null;
              } catch (e) {}

              try {
                delete t[e];
              } catch (e) {}
            });
          }(s)), s.destroyed = !0), null;
        }
      }], [{
        key: "extendDefaults",
        value: function extendDefaults(e) {
          C(R, e);
        }
      }, {
        key: "installModule",
        value: function installModule(e) {
          q.prototype.__modules__ || (q.prototype.__modules__ = []);
          var t = q.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
      }, {
        key: "use",
        value: function use(e) {
          return Array.isArray(e) ? (e.forEach(function (e) {
            return q.installModule(e);
          }), q) : (q.installModule(e), q);
        }
      }, {
        key: "extendedDefaults",
        get: function get() {
          return R;
        }
      }, {
        key: "defaults",
        get: function get() {
          return V;
        }
      }]);

      return q;
    }();

    Object.keys(W).forEach(function (e) {
      Object.keys(W[e]).forEach(function (t) {
        q.prototype[t] = W[e][t];
      });
    }), q.use([function (e) {
      var t = e.swiper,
          s = e.on,
          i = e.emit;
      var n = l();
      var r = null,
          a = null;

      var o = function o() {
        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
      },
          d = function d() {
        t && !t.destroyed && t.initialized && i("orientationchange");
      };

      s("init", function () {
        t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver(function (e) {
          a = n.requestAnimationFrame(function () {
            var s = t.width,
                i = t.height;
            var n = s,
                r = i;
            e.forEach(function (e) {
              var s = e.contentBoxSize,
                  i = e.contentRect,
                  a = e.target;
              a && a !== t.el || (n = i ? i.width : (s[0] || s).inlineSize, r = i ? i.height : (s[0] || s).blockSize);
            }), n === s && r === i || o();
          });
        }), r.observe(t.el)) : (n.addEventListener("resize", o), n.addEventListener("orientationchange", d));
      }), s("destroy", function () {
        a && n.cancelAnimationFrame(a), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", d);
      });
    }, function (e) {
      var t = e.swiper,
          s = e.extendParams,
          i = e.on,
          n = e.emit;

      var r = [],
          a = l(),
          o = function o(e, t) {
        void 0 === t && (t = {});
        var s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
          if (1 === e.length) return void n("observerUpdate", e[0]);

          var t = function t() {
            n("observerUpdate", e[0]);
          };

          a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
        });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), r.push(s);
      };

      s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      }), i("init", function () {
        if (t.params.observer) {
          if (t.params.observeParents) {
            var _e50 = t.$el.parents();

            for (var _t32 = 0; _t32 < _e50.length; _t32 += 1) {
              o(_e50[_t32]);
            }
          }

          o(t.$el[0], {
            childList: t.params.observeSlideChildren
          }), o(t.$wrapperEl[0], {
            attributes: !1
          });
        }
      }), i("destroy", function () {
        r.forEach(function (e) {
          e.disconnect();
        }), r.splice(0, r.length);
      });
    }]);
    var X = q;

    function Y(e, t, s, i) {
      var n = a();
      return e.params.createElements && Object.keys(i).forEach(function (r) {
        if (!s[r] && !0 === s.auto) {
          var _a3 = e.$el.children("." + i[r])[0];
          _a3 || (_a3 = n.createElement("div"), _a3.className = i[r], e.$el.append(_a3)), s[r] = _a3, t[r] = _a3;
        }
      }), s;
    }

    function U(e) {
      var t = e.swiper,
          s = e.extendParams,
          i = e.on,
          n = e.emit;

      function r(e) {
        var s;
        return e && (s = g(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
      }

      function a(e, s) {
        var i = t.params.navigation;
        e && e.length > 0 && (e[s ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }

      function o() {
        if (t.params.loop) return;
        var _t$navigation = t.navigation,
            e = _t$navigation.$nextEl,
            s = _t$navigation.$prevEl;
        a(s, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind);
      }

      function l(e) {
        e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"));
      }

      function d(e) {
        e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"));
      }

      function c() {
        var e = t.params.navigation;
        if (t.params.navigation = Y(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }), !e.nextEl && !e.prevEl) return;
        var s = r(e.nextEl),
            i = r(e.prevEl);
        s && s.length > 0 && s.on("click", d), i && i.length > 0 && i.on("click", l), Object.assign(t.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0]
        }), t.enabled || (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }

      function p() {
        var _t$navigation2 = t.navigation,
            e = _t$navigation2.$nextEl,
            s = _t$navigation2.$prevEl;
        e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(t.params.navigation.disabledClass));
      }

      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled"
        }
      }), t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      }, i("init", function () {
        !1 === t.params.navigation.enabled ? u() : (c(), o());
      }), i("toEdge fromEdge lock unlock", function () {
        o();
      }), i("destroy", function () {
        p();
      }), i("enable disable", function () {
        var _t$navigation3 = t.navigation,
            e = _t$navigation3.$nextEl,
            s = _t$navigation3.$prevEl;
        e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
      }), i("click", function (e, s) {
        var _t$navigation4 = t.navigation,
            i = _t$navigation4.$nextEl,
            r = _t$navigation4.$prevEl,
            a = s.target;

        if (t.params.navigation.hideOnClick && !g(a).is(r) && !g(a).is(i)) {
          if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;

          var _e51;

          i ? _e51 = i.hasClass(t.params.navigation.hiddenClass) : r && (_e51 = r.hasClass(t.params.navigation.hiddenClass)), n(!0 === _e51 ? "navigationShow" : "navigationHide"), i && i.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
        }
      });

      var u = function u() {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), p();
      };

      Object.assign(t.navigation, {
        enable: function enable() {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), o();
        },
        disable: u,
        update: o,
        init: c,
        destroy: p
      });
    }

    document.addEventListener("DOMContentLoaded", function () {
      document.querySelector(".slider-reviews") && document.querySelectorAll(".slider-reviews").forEach(function (e) {
        new X(e, {
          modules: [U],
          slidesPerView: 1,
          spaceBetween: 10,
          breakpoints: {
            768: {
              spaceBetween: 20,
              slidesPerView: 2
            },
            992: {
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 35
            }
          },
          navigation: {
            nextEl: ".reviews-slider-next",
            prevEl: ".reviews-slider-prev"
          }
        });
      });
    });
  }
});