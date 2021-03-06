/*! scroll-parallax|https://github.com/kamem/scrollParallax.git|1.0.0|MIT license|kamem */ ! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 6)
}([function (t, e, n) {
    "use strict";
    (function (t) {
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        n.d(e, "a", (function () {
            return o
        }));
        var o = new(function () {
            function e() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.$stage = t, this.direction = "y", this.functions = [], this.debugMode = !1, this.setDirectionInfo()
            }
            var n, o, i;
            return n = e, (o = [{
                key: "setVal",
                value: function (e) {
                    this.$stage = e.stage ? e.stage : t, this.direction = e.direction || this.direction, this.debugMode = e.debugMode || this.debugMode, this.setDirectionInfo()
                }
            }, {
                key: "update",
                value: function () {
                    this.scrollPosition = this.$stage["page".concat(this.direction.toUpperCase(), "Offset")];
                    var t = this.$stage["inner".concat(this.stageSizeName)];
                    this.stageSize = t || document.documentElement["client".concat(this.stageSizeName)], this.contentSize = $(document)[this.stageSizeName.toLowerCase()]()
                }
            }, {
                key: "setDirectionInfo",
                value: function () {
                    this.directionPositionName = "y" === this.direction ? "Top" : "Left", this.stageSizeName = "y" === this.direction ? "Height" : "Width"
                }
            }]) && r(n.prototype, o), i && r(n, i), e
        }())
    }).call(this, n(2))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n.d(e, "d", (function () {
            return u
        })), n.d(e, "b", (function () {
            return s
        })), n.d(e, "c", (function () {
            return c
        })), n.d(e, "e", (function () {
            return v
        })), n.d(e, "a", (function () {
            return d
        }));
        var r = n(0);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    o = !0, i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var a = /([-]?([1-9]\d*|0)(\.\d+)?)(deg|\)|px|em|rem|%|$|\,)/g,
            u = function (t) {
                for (var e, n = []; null !== (e = a.exec(t));) n.push(parseFloat(e[1]));
                return n
            },
            s = function (t) {
                var e = String(t);
                return e = h(e), e = f(e)
            },
            c = function (t, e) {
                var n = 0;
                return t.replace(a, (function (t) {
                    return t.replace(/[-]?([1-9]\d*|0)(\.\d+)?/, e[n++])
                }))
            },
            l = function (t) {
                return t + t
            },
            f = function (t) {
                return t.replace(/#[0-9a-fA-F]{3,6}/g, (function (t) {
                    var e, n = i(function (t) {
                            var e = t.substring(1);
                            return [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)]
                        }((e = t).length > 4 ? e : "#".concat(l(e[1])).concat(l(e[2])).concat(l(e[3]))), 3),
                        r = n[0],
                        o = n[1],
                        a = n[2];
                    return "rgb(".concat(r, ",").concat(o, ",").concat(a, ")")
                }))
            },
            h = function (t) {
                var e = {
                    red: "f00",
                    blue: "00f",
                    yellow: "ff0",
                    green: "008000"
                };
                return t.replace(/red|blue|green|yellow/g, (function (t) {
                    return "#" + e[t]
                }))
            },
            y = function (e, n) {
                var r = n.direction,
                    o = "y" === r ? "Top" : "Left",
                    i = t["page".concat(r.toUpperCase(), "Offset")] || document.documentElement["scroll".concat(o)];
                return e.getBoundingClientRect()[o.toLocaleLowerCase()] + i
            },
            v = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a,
                    n = e.stageSize,
                    i = e.contentSize,
                    a = i - n;
                if (t > a || ~["lastScrollPosition", "last"].indexOf(t)) return a;
                if (~["string", "object"].indexOf(o(t))) {
                    var u = "string" == typeof t ? t.split(",") : t,
                        s = u[0],
                        c = ~["lastScrollPosition", "last"].indexOf(s) ? a : y(document.querySelector(s), e);
                    return Math.min(c + (parseInt(u[1]) || 0), a)
                }
                return t
            },
            d = {
                linear: function (t, e, n, r) {
                    return e + n * t
                },
                easeInQuad: function (t, e, n, r) {
                    return n * (t /= r) * t + e
                },
                easeOutQuad: function (t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                },
                easeInOutQuad: function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                },
                easeInCubic: function (t, e, n, r) {
                    return n * (t /= r) * t * t + e
                },
                easeOutCubic: function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                },
                easeInOutCubic: function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                },
                easeInQuart: function (t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                },
                easeOutQuart: function (t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                },
                easeInOutQuart: function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                },
                easeInQuint: function (t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                },
                easeOutQuint: function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                },
                easeInOutQuint: function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                },
                easeInSine: function (t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                },
                easeOutSine: function (t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                },
                easeInOutSine: function (t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                },
                easeInExpo: function (t, e, n, r) {
                    return 0 == t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                },
                easeOutExpo: function (t, e, n, r) {
                    return t == r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                },
                easeInOutExpo: function (t, e, n, r) {
                    return 0 == t ? e : t == r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                },
                easeInCirc: function (t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                },
                easeOutCirc: function (t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                },
                easeInOutCirc: function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                },
                easeInElastic: function (t, e, n, r) {
                    var o = 1.70158,
                        i = 0,
                        a = n;
                    if (0 == t) return e;
                    if (1 == (t /= r)) return e + n;
                    if (i || (i = .3 * r), a < Math.abs(n)) {
                        a = n;
                        o = i / 4
                    } else o = i / (2 * Math.PI) * Math.asin(n / a);
                    return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / i) + e
                },
                easeOutElastic: function (t, e, n, r) {
                    var o = 1.70158,
                        i = 0,
                        a = n;
                    if (0 == t) return e;
                    if (1 == (t /= r)) return e + n;
                    if (i || (i = .3 * r), a < Math.abs(n)) {
                        a = n;
                        o = i / 4
                    } else o = i / (2 * Math.PI) * Math.asin(n / a);
                    return a * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / i) + n + e
                },
                easeInOutElastic: function (t, e, n, r) {
                    var o = 1.70158,
                        i = 0,
                        a = n;
                    if (0 == t) return e;
                    if (2 == (t /= r / 2)) return e + n;
                    if (i || (i = r * (.3 * 1.5)), a < Math.abs(n)) {
                        a = n;
                        o = i / 4
                    } else o = i / (2 * Math.PI) * Math.asin(n / a);
                    return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / i) * -.5 + e : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / i) * .5 + n + e
                },
                easeInBack: function (t, e, n, r, o) {
                    return null == o && (o = 1.70158), n * (t /= r) * t * ((o + 1) * t - o) + e
                },
                easeOutBack: function (t, e, n, r, o) {
                    return null == o && (o = 1.70158), n * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + e
                },
                easeInOutBack: function (t, e, n, r, o) {
                    return null == o && (o = 1.70158), (t /= r / 2) < 1 ? n / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + e : n / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + e
                },
                easeInBounce: function (t, e, n, r) {
                    return n - d.easeOutBounce(r - t, 0, n, r) + e
                },
                easeOutBounce: function (t, e, n, r) {
                    return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + e : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                },
                easeInOutBounce: function (t, e, n, r) {
                    return t < r / 2 ? .5 * d.easeInBounce(2 * t, 0, n, r) + e : .5 * d.easeOutBounce(2 * t - r, 0, n, r) + .5 * n + e
                }
            }
    }).call(this, n(2))
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    var r = n(1);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var i = function () {
        function t(e, n, r, o) {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.isOver = !1, this.$el = e, this.eventScrollElementPosition = n, this.timingLinePercent = r || 50, this.events = o
        }
        var e, n, i;
        return e = t, (n = [{
            key: "getEventScrollElementPosition",
            value: function (t) {
                return this.eventScrollElementPosition ? Object(r.e)(this.eventScrollElementPosition) : this.$el.offset()[t.toLocaleLowerCase()]
            }
        }, {
            key: "timingEvent",
            value: function (t) {
                var e = t.stageSize,
                    n = t.scrollPosition,
                    r = t.directionPositionName;
                this.eventScrollPlussWindowPerCentPosition = n + e * (this.timingLinePercent / 100);
                var o = this.eventScrollPlussWindowPerCentPosition >= this.getEventScrollElementPosition(r);
                if (o !== this.isOver) return this.isOver = o, (0, this.events[o ? 0 : 1])({
                    target: this.$el,
                    isOver: o
                })
            }
        }]) && o(e.prototype, n), i && o(e, i), t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var r = n(1);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var a = function () {
        function t(e, n, o, i, a, u) {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.$el = e, this.speed = n, this.min = o, this.max = i, this.contentScrollPosition = a;
            var s = Object(r.b)(u);
            this.contentStyleValue = s, this.styleValues = Object(r.d)(s)
        }
        var e, n, a;
        return e = t, (n = [{
            key: "getValue",
            value: function (t, e) {
                return "object" === o(this[t]) ? this[t][e] : this[t]
            }
        }, {
            key: "generateValues",
            value: function (t) {
                var e = this;
                return this.styleValues.map((function (n, o) {
                    var i = e.getValue("min", o),
                        a = e.getValue("max", o),
                        u = e.getValue("speed", o),
                        s = Object(r.e)(e.contentScrollPosition),
                        c = -parseFloat(-t * u + s * u) + n;
                    return c = Math.min(c, a), c = Math.max(c, i), e.contentStyleValue.indexOf("rgb") >= 0 && (c = Math.max(parseInt(c), 0)), c
                }))
            }
        }, {
            key: "generateStyleValue",
            value: function (t) {
                var e = t.scrollPosition;
                return Object(r.c)(this.contentStyleValue, this.generateValues(e))
            }
        }]) && i(e.prototype, n), a && i(e, a), t
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    var r = n(1);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var i = function () {
        function t(e) {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.$el = e, this.styleValues = {}, this.motions = [], this.rangeMotions = []
        }
        var e, n, i;
        return e = t, (n = [{
            key: "setMotion",
            value: function (t) {
                var e = this.setStyleValue(t.fromStyle),
                    n = this.setStyleValue(t.toStyle);
                this.motions.push(Object.assign({}, t, {
                    easing: t.easing || "linear",
                    fromStyle: e,
                    toStyle: n
                }))
            }
        }, {
            key: "setStyleValues",
            value: function () {
                var t = this;
                this.motions = this.motions.map((function (e) {
                    return Object.assign({}, e, {
                        fromStyleValues: t.generateStyleValues(e.fromStyle),
                        toStyleValues: t.generateStyleValues(e.toStyle)
                    })
                }))
            }
        }, {
            key: "generateStyleValues",
            value: function (t) {
                var e = {};
                for (var n in t) e[n] = Object(r.d)(t[n]);
                return e
            }
        }, {
            key: "setStyleValue",
            value: function (t) {
                var e = {};
                for (var n in t) e[n] = Object(r.b)(t[n]);
                return e
            }
        }, {
            key: "setRangeMotions",
            value: function (t) {
                var e = t.scrollPosition,
                    n = [];
                this.motions.forEach((function (t) {
                    Object(r.e)(t.start) <= e && n.push(t)
                })), this.rangeMotions = n
            }
        }, {
            key: "setDefaultStyles",
            value: function () {
                var t = {};
                this.motions.forEach((function (e) {
                    var n = e.fromStyle;
                    for (var r in n) void 0 === t[r] && (t[r] = n[r])
                })), this.styleValues = t
            }
        }, {
            key: "setFromStyle",
            value: function () {
                var t = this;
                this.motions.forEach((function (e, n) {
                    var r = e.fromStyle,
                        o = e.toStyle;
                    for (var i in o) void 0 === r && (r = {}), void 0 === r[i] && (r[i] = t.getLastToStyle(i, n))
                }))
            }
        }, {
            key: "getLastToStyle",
            value: function (t, e) {
                for (var n = "", r = Math.max(e - 1, 0); r >= 0; r--) {
                    var o = this.motions[r];
                    if (void 0 !== o.fromStyle[t]) {
                        n = o.toStyle[t];
                        break
                    }
                }
                return "" === n && (n = this.$el.css(t)), n
            }
        }, {
            key: "setStart",
            value: function () {
                var t = this;
                this.motions.forEach((function (e, n) {
                    void 0 === e.start && (e.start = t.getLastStart(n))
                }))
            }
        }, {
            key: "getLastStart",
            value: function (t) {
                for (var e = "", n = Math.max(t - 1, 0); n >= 0; n--) {
                    var r = this.motions[n];
                    if (void 0 !== r.start) {
                        e = r.end;
                        break
                    }
                }
                return e
            }
        }, {
            key: "generateScrollStyleValues",
            value: function (t, e, n, o, i) {
                var a = Math.abs(e - n),
                    u = e < n ? a : -a,
                    s = r.a[o](i, e, u, 1);
                return t.indexOf("rgb") >= 0 && (s = s >= 1 ? parseInt(s) : s < 0 ? 0 : s), s
            }
        }, {
            key: "getStyleValues",
            value: function (t) {
                var e = this,
                    n = t.scrollPosition;
                return this.rangeMotions.forEach((function (t, o) {
                    var i = Object(r.e)(t.start),
                        a = Object(r.e)(t.end),
                        u = i < n && n < a ? (n - i) / (a - i) : n > i ? 1 : n < a ? 0 : "";
                    for (var s in t.fromStyle) {
                        for (var c = t.fromStyle[s], l = t.fromStyleValues[s], f = t.toStyleValues[s], h = [], y = 0; y < l.length; y++) h[y] = e.generateScrollStyleValues(c, l[y], f[y], t.easing, u);
                        e.styleValues[s] = Object(r.c)(c, h)
                    }
                })), this.styleValues
            }
        }]) && o(e.prototype, n), i && o(e, i), t
    }()
}, function (t, e, n) {
    "use strict";
    n.r(e),
        function (t) {
            var e = n(0),
                r = n(3),
                o = n(4),
                i = n(5);

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            $.parallax = function (t) {
                e.a.setVal(t), e.a.debugMode && $("body").append('<p class="parallax-debug" style="border: 1px solid red;position: absolute;' + ("y" === e.a.direction ? "width" : "height") + ": 100%;" + ("y" === e.a.direction ? "left" : "top") + ': 0;"></p>')
            }, $.parallaxTiming = function (t) {
                this.timingLinePercent = t.timingLinePercent
            }, $.fn.parallaxTiming = function (t) {
                var n = e.a.directionPositionName.toLocaleLowerCase(),
                    o = new r.a(this, t.eventScrollPosition, t.timingLinePercent || $.timingLinePercent, "[object Array]" === Object.prototype.toString.call(t) ? t : t.start ? [t.start, t.end] : t.toggle);
                return e.a.functions.push((function (t) {
                    o.timingEvent(t), e.a.debugMode && $("body > .parallax-debug").css(n, o.eventScrollPlussWindowPerCentPosition)
                })), this
            }, $.fn.parallaxSpeed = function (t) {
                var n = t.speed,
                    r = void 0 === n ? 2 : n,
                    i = t.min,
                    u = void 0 === i ? -99999 : i,
                    s = t.max,
                    c = void 0 === s ? 99999 : s,
                    l = t.contentScrollPositionStyleValue,
                    f = t.contentScrollPosition,
                    h = void 0 === f ? 0 : f,
                    y = t.style,
                    v = void 0 === y ? "top" : y,
                    d = this,
                    p = "object" === a(v) ? v : [v],
                    m = "object" === a(r) ? r : [r],
                    g = "object" === a(u) ? u : [u],
                    b = "object" === a(c) ? c : [c],
                    S = "object" === a(l) ? l : [l],
                    M = p.map((function (t, e) {
                        return {
                            name: t,
                            scrollSpeed: new o.a(d, m[e] || r, g[e] || u, b[e] || c, h, S[e] || String(d.css(t)) || String(d.css(v)))
                        }
                    }));
                return e.a.functions.push((function (t) {
                    M.forEach((function (e) {
                        var n = e.name,
                            r = e.scrollSpeed;
                        d.css(n, r.generateStyleValue(t))
                    }))
                })), this
            }, $.fn.parallaxFit = function (t) {
                var n = new i.a(this);
                t.length ? t.forEach((function (t) {
                    return n.setMotion(t)
                })) : void 0 !== t.end && n.setMotion({
                    start: t.start,
                    end: t.end,
                    fromStyle: t.fromStyle,
                    toStyle: t.toStyle,
                    easing: t.easing
                });
                for (var r = 1; void 0 !== t["motion" + r + "End"]; r++) {
                    var o = "motion" + r;
                    n.setMotion({
                        start: t[o + "Start"],
                        end: t[o + "End"],
                        fromStyle: t[o + "FromStyle"],
                        toStyle: t[o + "ToStyle"],
                        easing: t[o + "Easing"]
                    })
                }
                return n.setFromStyle(), n.setStyleValues(), n.setStart(), e.a.functions.push((function (t) {
                    n.setRangeMotions(t), n.setDefaultStyles(), n.$el.css(n.getStyleValues(t))
                })), this
            }, $(e.a.$stage).on("scroll resize load", (function () {
                e.a.update(), e.a.functions.forEach((function (t) {
                    return t(e.a)
                }))
            }));
            var u = function () {
                return $(e.a.$stage).queue([]).stop()
            };
            t.addEventListener("DOMMouseScroll", u, !1), t.onmousewheel = document.onmousewheel = u
        }.call(this, n(2))
}]);
