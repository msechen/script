/*
 版本 : hui 3.0
 作者 : 深海
 官网 : http://hui.hcoder.net/
 */

!function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)if (a.forEach) a.forEach(b, c); else if (a.length !== d)for (e = 0; e < a.length;)b.call(c, a[e], e, a), e++; else for (e in a)a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function () {
            var c = new Error("get-stack-trace"), d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments)
        }
    }

    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
    }

    function j(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
    }

    function l(a, b) {
        return a === d ? b : a
    }

    function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function o(a, b) {
        for (; a;) {
            if (a == b)return !0;
            a = a.parentNode
        }
        return !1
    }

    function p(a, b) {
        return a.indexOf(b) > -1
    }

    function q(a) {
        return a.trim().split(/\s+/g)
    }

    function r(a, b, c) {
        if (a.indexOf && !c)return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b)return d;
            d++
        }
        return -1
    }

    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
                return a[b] > c[b]
            }) : d.sort()), d
    }

    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a)return e;
            g++
        }
        return d
    }

    function v() {
        return ua++
    }

    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }

    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
    }

    function z(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & Ea && d - e === 0, g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function A(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = E(d);
        b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
    }

    function B(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {x: c.x, y: c.y}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX, k = b.deltaY - h.deltaY, l = F(i, j, k);
            e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;)b[c] = {
            clientX: pa(a.pointers[c].clientX),
            clientY: pa(a.pointers[c].clientY)
        }, c++;
        return {timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY}
    }

    function E(a) {
        var b = a.length;
        if (1 === b)return {x: pa(a[0].clientX), y: pa(a[0].clientY)};
        for (var c = 0, d = 0, e = 0; b > e;)c += a[e].clientX, d += a[e].clientY, e++;
        return {x: pa(c / b), y: pa(d / b)}
    }

    function F(a, b, c) {
        return {x: b / a || 0, y: c / a || 0}
    }

    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
    }

    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
    }

    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
    }

    function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
    }

    function O(a, b) {
        var c = s(a.touches), d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
    }

    function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
    }

    function Q(a, b) {
        var c = s(a.touches), d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length)return d[c[0].identifier] = !0, [c, c];
        var e, f, g = s(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return o(a.target, i)
            }), b === Ea)for (e = 0; e < f.length;)d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;)d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }

    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
    }

    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
    }

    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {x: b.clientX, y: b.clientY};
            this.lastTouches.push(c);
            var d = this.lastTouches, e = function () {
                var a = d.indexOf(c);
                a > -1 && d.splice(a, 1)
            };
            setTimeout(e, cb)
        }
    }

    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d], f = Math.abs(b - e.x), g = Math.abs(c - e.y);
            if (db >= f && db >= g)return !0
        }
        return !1
    }

    function V(a, b) {
        this.manager = a, this.set(b)
    }

    function W(a) {
        if (p(a, jb))return jb;
        var b = p(a, kb), c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
    }

    function X() {
        if (!fb)return !1;
        var b = {}, c = a.CSS && a.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0
        }), b
    }

    function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
    }

    function Z(a) {
        return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
    }

    function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
    }

    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function aa() {
        Y.apply(this, arguments)
    }

    function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null
    }

    function ca() {
        aa.apply(this, arguments)
    }

    function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function ea() {
        aa.apply(this, arguments)
    }

    function fa() {
        aa.apply(this, arguments)
    }

    function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
    }

    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
            }), b || (a.oldCssProps = {})
        }
    }

    function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }

    var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function", pa = Math.round, qa = Math.abs, ra = Date.now;
    la = "function" != typeof Object.assign ? function (a) {
            if (a === d || null === a)throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
                var e = arguments[c];
                if (e !== d && null !== e)for (var f in e)e.hasOwnProperty(f) && (b[f] = e[f])
            }
            return b
        } : Object.assign;
    var sa = h(function (a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }, "extend", "Use `assign`."), ta = h(function (a, b) {
        return sa(a, b, !0)
    }, "merge", "Use `assign`."), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i, wa = "ontouchstart" in a, xa = u(a, "PointerEvent") !== d, ya = wa && va.test(navigator.userAgent), za = "touch", Aa = "pen", Ba = "mouse", Ca = "kinect", Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1, Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = ["x", "y"], Ra = ["clientX", "clientY"];
    x.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Sa = {mousedown: Ea, mousemove: Fa, mouseup: Ga}, Ta = "mousedown", Ua = "mousemove mouseup";
    i(L, x, {
        handler: function (a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }))
        }
    });
    var Va = {pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha}, Wa = {
        2: za,
        3: Aa,
        4: Ba,
        5: Ca
    }, Xa = "pointerdown", Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Va[d], f = Wa[a.pointerType] || a.pointerType, g = f == za, h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Za = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    }, $a = "touchstart", _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function (a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        }
    });
    var ab = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    }, bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function (a) {
            var b = ab[a.type], c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a})
        }
    });
    var cb = 2500, db = 25;
    i(R, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == za, e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) S.call(this, b, c); else if (e && U.call(this, c))return;
                this.callback(a, b, c)
            }
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var eb = u(na.style, "touchAction"), fb = eb !== d, gb = "compute", hb = "auto", ib = "manipulation", jb = "none", kb = "pan-x", lb = "pan-y", mb = X();
    V.prototype = {
        set: function (a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), W(a.join(" "))
        }, preventDefaults: function (a) {
            var b = a.srcEvent, c = a.offsetDirection;
            if (this.manager.session.prevented)return void b.preventDefault();
            var d = this.actions, e = p(d, jb) && !mb[jb], f = p(d, lb) && !mb[lb], g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length, i = a.distance < 2, j = a.deltaTime < 250;
                if (h && i && j)return
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
        }, preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32;
    Y.prototype = {
        defaults: {}, set: function (a) {
            return la(this.options, a), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (a) {
            if (f(a, "recognizeWith", this))return this;
            var b = this.simultaneous;
            return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        }, dropRecognizeWith: function (a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
        }, requireFailure: function (a) {
            if (f(a, "requireFailure", this))return this;
            var b = this.requireFail;
            return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
        }, dropRequireFailure: function (a) {
            if (f(a, "dropRequireFailure", this))return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        }, emit: function (a) {
            function b(b) {
                c.manager.emit(b, a)
            }

            var c = this, d = this.state;
            qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d))
        }, tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void(this.state = tb)
        }, canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb)))return !1;
                a++
            }
            return !0
        }, recognize: function (a) {
            var b = la({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(this.state = tb))
        }, process: function (a) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, i(aa, Y, {
        defaults: {pointers: 1}, attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        }, process: function (a) {
            var b = this.state, c = a.eventType, d = b & (ob | pb), e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
        }
    }), i(ba, aa, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Pa}, getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & Na && b.push(lb), a & Oa && b.push(kb), b
        }, directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        }, attrTest: function (a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
        }, emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
        }
    }), i(ca, aa, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [jb]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
        }, emit: function (a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }), i(da, Y, {
        defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
            return [hb]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset(); else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
                this.state = rb, this.tryEmit()
            }, b.time, this); else if (a.eventType & Ga)return rb;
            return tb
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
        }
    }), i(ea, aa, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [jb]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
        }
    }), i(fa, aa, {
        defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1},
        getTouchAction: function () {
            return ba.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
        },
        emit: function (a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), i(ga, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ib]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Ea && 0 === this.count)return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga)return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i)return this.hasRequireFailures() ? (this._timer = e(function () {
                        this.state = rb, this.tryEmit()
                    }, b.interval, this), ob) : rb
            }
            return tb
        }, failTimeout: function () {
            return this._timer = e(function () {
                this.state = tb
            }, this.options.interval, this), tb
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ha.VERSION = "2.0.8", ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ea, {enable: !1}], [ca, {enable: !1}, ["rotate"]], [fa, {direction: Na}], [ba, {direction: Na}, ["swipe"]], [ga], [ga, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [da]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ub = 1, vb = 2;
    ia.prototype = {
        set: function (a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        }, stop: function (a) {
            this.session.stopped = a ? vb : ub
        }, recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
            }
        }, get: function (a) {
            if (a instanceof Y)return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)if (b[c].options.event == a)return b[c];
            return null
        }, add: function (a) {
            if (f(a, "add", this))return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        }, remove: function (a) {
            if (f(a, "remove", this))return this;
            if (a = this.get(a)) {
                var b = this.recognizers, c = r(b, a);
                -1 !== c && (b.splice(c, 1), this.touchAction.update())
            }
            return this
        }, on: function (a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            }
        }, off: function (a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }), this
            }
        }, emit: function (a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;)c[d](b), d++
            }
        }, destroy: function () {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
            return ha
        }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
}(window, document, "Hammer");
var huiReSizeTimer, huiResizeNeedDo = new Array();
var hui = (function (selector) {
    /* 语言包 */
    var _lang = {
        domEmpty: '没有选中的dom元素',
        xhrError: '无法加载XMLHttpRequest模块！',
        ajaxTimeout: '请求超时',
        quit: '再按一次退出程序'
    };
    var _huiDeputes = new Array();
    /* 选择器 */
    var _hui = function (selector) {
        if (!selector) {
            selector = document;
        }
        var selectorType = typeof(selector);
        switch (selectorType) {
            case 'string':
                var doms = document.querySelectorAll(selector);
                var reObj = {dom: doms, length: doms.length};
                break;
            case 'object':
                var reObj = {dom: [selector], length: 1};
                break;
            default:
                return null;
        }
        reObj.__proto__ = hcExtends;
        return reObj;
    }

    function addFuns(doms) {
        var reObj = {dom: doms, length: doms.length};
        reObj.__proto__ = hcExtends;
        return reObj;
    }

    _hui.import = function (funName, path) {
        if (!path) {
            path = './js/';
        }
        new_element = document.createElement("script");
        new_element.setAttribute("type", "text/javascript");
        new_element.setAttribute("src", path + 'hui-' + funName + '.js');
        document.body.appendChild(new_element);
    }
    /* dom 操作扩展 */
    var hcExtends = {
        size: function () {
            return this.length
        },
        /* 值、属性、HTML、操作 */
        val: function (vars) {
            if (typeof(vars) != 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this.dom[i].value = vars;
                }
                return this;
            }
            try {
                return this.dom[0].value;
            } catch (e) {
                console.log(_lang.domEmpty);
                return null;
            }
        },
        html: function (html) {
            if (this.length < 1) {
                return this;
            }
            if (typeof(html) != 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this.dom[i].innerHTML = html;
                }
                return this;
            }
            try {
                return this.dom[0].innerHTML;
            } catch (e) {
                console.log(_lang.domEmpty);
                return null;
            }
        },
        attr: function (attrName, val) {
            if (val) {
                this.setAttr(attrName, val);
            } else {
                return this.getAttr(attrName);
            }
        },
        getAttr: function (attrName) {
            try {
                return this.dom[0].getAttribute(attrName);
            } catch (e) {
                console.log(_lang.domEmpty);
                return null;
            }
        },
        setAttr: function (attrName, val) {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].setAttribute(attrName, val);
            }
            return this;
        },
        removeAttr: function (attrName) {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].removeAttribute(attrName);
            }
            return this;
        },
        /* 样式操作 */
        css: function (csses) {
            for (var i = 0; i < this.length; i++) {
                var styles = this.dom[i].style;
                for (var k in csses) {
                    styles[k] = csses[k];
                }
            }
            return this;
        },
        hasClass: function (cls) {
            if (this.length != 1) {
                return false;
            }
            return this.dom[0].className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        addClass: function (cls) {
            for (var i = 0; i < this.length; i++) {
                if (!this.dom[i].className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))) {
                    this.dom[i].className += " " + cls;
                }
            }
            return this;
        },
        removeClass: function (cls) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            for (var i = 0; i < this.length; i++) {
                this.dom[i].className = this.dom[i].className.replace(reg, ' ');
            }
            return this;
        },
        hide: function (isAnimate) {
            for (var i = 0; i < this.length; i++) {
                if (isAnimate) {
                    var ctdom = hui(this.dom[i]);
                    ctdom.addClass('hui-fade-out');
                    setTimeout(function () {
                        ctdom.dom[0].style.display = 'none';
                        ctdom.removeClass('hui-fade-out');
                    }, 300);
                } else {
                    this.dom[i].style.display = 'none';
                }
            }
            return this;
        },
        show: function (isAnimate) {
            for (var i = 0; i < this.length; i++) {
                if (isAnimate) {
                    var ctdom = hui(this.dom[i]);
                    ctdom.addClass('hui-fade-in');
                    setTimeout(function () {
                        ctdom.dom[0].style.display = 'block';
                        ctdom.removeClass('hui-fade-in');
                    }, 300);
                } else {
                    this.dom[i].style.display = 'block';
                }
            }
            return this;
        },
        /* 事件 */
        click: function (callBack) {
            for (var i = 0; i < this.length; i++) {
                if (callBack == undefined) {
                    _hui(this.dom[i]).trigger('click');
                }
                this.dom[i].addEventListener('click', callBack);
            }
        },
        change: function (callBack) {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].addEventListener('change', callBack);
            }
        },
        focusIn: function (callBack) {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].addEventListener('focus', callBack);
            }
        },
        focusOut: function (callBack) {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].addEventListener('focusout', callBack);
            }
        },
        on: function (eventType, sonSelector, callBack) {
            _huiDeputes.push({selector: sonSelector, cb: callBack});
            for (var i = 0; i < this.length; i++) {
                this.dom[i].addEventListener('click', function (e) {
                    this.ondo(e);
                }.bind(this));
            }
        },
        ondo: function (e) {
            if (!e.target) {
                return false;
            }
            for (var i = 0; i < _huiDeputes.length; i++) {
                var objs = hui(_huiDeputes[i].selector);
                for (var ii = 0; ii < objs.length; ii++) {
                    if (objs.dom[ii] === e.target) {
                        objs.dom[ii].index = ii;
                        _huiDeputes[i].cb(objs.dom[ii]);
                        break;
                    }
                }
            }
        },
        longTap: function (callBack) {
            if (this.length < 1) {
                return;
            }
            var timer = null, timerNum = 0, _self = this.dom[0];
            _self.addEventListener('longTapDo', callBack);
            _self.addEventListener('touchstart', function () {
                timer = setInterval(function () {
                    if (timerNum >= 1000) {
                        _hui(_self).trigger('longTapDo');
                        timerNum = 0;
                        clearInterval(timer);
                    } else {
                        timerNum += 100;
                    }
                }, 100);
            });
            this.dom[0].addEventListener('touchend', function () {
                clearInterval(timer);
            });
        },
        scroll: function (callBack) {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].addEventListener('scroll', callBack);
            }
        },
        swiper: null,
        swipe: function (callBack) {
            if (this.length != 1) {
                return;
            }
            this.swiper = new Hammer(this.dom[0]);
            this.swiper.on("pan", function (ev) {
                callBack(ev);
            });
        },
        swipeLeft: function (callBack) {
            if (this.length != 1) {
                return;
            }
            if (this.swiper == null) {
                this.swiper = new Hammer(this.dom[0]);
            }
            this.swiper.on("swipeleft", function (ev) {
                callBack(ev);
            });
        },
        swipeRight: function (callBack) {
            if (this.length != 1) {
                return;
            }
            if (this.swiper == null) {
                this.swiper = new Hammer(this.dom[0]);
            }
            this.swiper.on("swiperight", function (ev) {
                callBack(ev);
            });
        },
        swipeUp: function (callBack) {
            if (this.length != 1) {
                return;
            }
            if (this.swiper == null) {
                this.swiper = new Hammer(this.dom[0]);
            }
            this.swiper.get('swipe').set({direction: Hammer.DIRECTION_ALL});
            this.swiper.on("swipeup", function (ev) {
                callBack(ev);
            });
        },
        swipeDown: function (callBack) {
            if (this.swiper == null) {
                this.swiper = new Hammer(this.dom[0]);
            }
            this.swiper.get('swipe').set({direction: Hammer.DIRECTION_ALL});
            this.swiper.on("swipedown", function (ev) {
                callBack(ev);
            });
        },
        swipeEnd: function (callBack) {
            this.swiper.on("panend", function (ev) {
                callBack(ev);
            });
        },
        trigger: function (eventType, eventData) {
            var element = this.dom[0];
            element.dispatchEvent(new CustomEvent(eventType, {detail: eventData, bubbles: true, cancelable: true}));
        },
        /* dom 元素遍历 */
        each: function (callBack) {
            if (!callBack) {
                return;
            }
            for (var i = 0; i < this.length; i++) {
                this.dom[i].index = i;
                callBack(this.dom[i]);
            }
        },
        /* 筛选器 */
        eq: function (index) {
            return _hui(this.dom[index]);
        },
        last: function () {
            return _hui(this.dom[this.length - 1]);
        },
        first: function () {
            return _hui(this.dom[0]);
        },
        next: function () {
            return _hui(this.dom[0].nextElementSibling || this.dom[0].nextSibling);
        },
        parent: function () {
            return _hui(this.dom[0].parentNode);
        },
        siblings: function () {
            if (!this.dom[0]) {
                return this;
            }
            var nodes = [], startNode = this.dom[0], nextNode, preNode;
            var currentNode = startNode;
            while (nextNode = currentNode.nextElementSibling) {
                nodes.push(nextNode);
                currentNode = nextNode;
            }
            currentNode = startNode;
            while (preNode = currentNode.previousElementSibling) {
                nodes.push(preNode);
                currentNode = preNode;
            }
            return addFuns(nodes);
        },
        even: function () {
            var doms = new Array();
            for (var i = 0; i < this.length; i++) {
                if (i % 2 == 0) {
                    doms.push(this.dom[i]);
                }
            }
            return addFuns(doms);
        },
        odd: function () {
            var doms = new Array();
            for (var i = 0; i < this.length; i++) {
                if (i % 2 == 1) {
                    doms.push(this.dom[i]);
                }
            }
            return addFuns(doms);
        },
        index: function () {
            if (this.length != 1) {
                return null;
            }
            var nodes = [], startNode = this.dom[0], preNode;
            while (preNode = startNode.previousElementSibling) {
                nodes.push(preNode);
                startNode = preNode;
            }
            return nodes.length;
        },
        find: function (selector) {
            if (this.length < 1) {
                return this;
            }
            var doms = new Array();
            for (var i = 0; i < this.length; i++) {
                var domsquery = this.dom[i].querySelectorAll(selector);
                for (var ii = 0; ii < domsquery.length; ii++) {
                    doms.push(domsquery[ii]);
                }
            }
            return addFuns(doms);
        },
        /* dom 操作 */
        clone: function () {
            var doms = new Array();
            for (var i = 0; i < this.length; i++) {
                doms.push(this.dom[i].cloneNode(true));
            }
            return addFuns(doms);
        },
        appendTo: function (parentObj) {
            if (typeof(parentObj) == 'object') {
                for (var i = 0; i < this.length; i++) {
                    parentObj.dom[0].appendChild(this.dom[i]);
                }
            } else if (typeof(parentObj) == 'string') {
                var parentDom = _hui(parentObj);
                if (parentDom.length >= 1) {
                    for (var i = 0; i < this.length; i++) {
                        parentDom.dom[0].appendChild(this.dom[i]);
                    }
                }
            }
        },
        prependTo: function (parentObj) {
            if (typeof(parentObj) == 'object') {
                for (var i = 0; i < this.length; i++) {
                    parentObj.dom[0].insertBefore(this.dom[i], parentObj.dom[0].firstChild);
                }
            } else if (typeof(parentObj) == 'string') {
                var parentDom = hui(parentObj);
                if (parentDom.length >= 1) {
                    for (var i = 0; i < this.length; i++) {
                        parentDom.dom[0].insertBefore(this.dom[i], parentDom.dom[0].firstChild);
                    }
                }
            }
        },
        remove: function () {
            for (var i = 0; i < this.length; i++) {
                this.dom[i].parentNode.removeChild(this.dom[i]);
            }
        },
        /* 宽、高获取 */
        height: function (isOffset) {
            if (this.length != 1) {
                return 0;
            }
            if (isOffset) {
                return this.dom[0].offsetHeight;
            }
            return this.dom[0].clientHeight;
        },
        width: function (isOffset) {
            if (this.length != 1) {
                return 0;
            }
            if (isOffset) {
                return this.dom[0].offsetWidth;
            }
            return this.dom[0].clientWidth;
        },
        /* 展示状态 */
        isShow: function () {
            if (this.length != 1) {
                return true;
            }
            if (this.dom[0].currentStyle) {
                var showRes = this.dom[0].currentStyle.display;
            } else {
                var showRes = getComputedStyle(this.dom[0], null).display;
            }
            if (showRes == 'none') {
                return false;
            }
            return true;
        },
        isHide: function () {
            return !this.isShow();
        },
        /* loadding button */
        loadingButton: function (loadingText, isIcon) {
            if (!loadingText) {
                loadingText = 'Loading...';
            }
            if (!isIcon) {
                isIcon = true;
            }
            this.setAttr('HUI_BTN_RESET', this.html());
            var loadingHtml = '<div class="hui-loading-wrap"><div class="hui-loading" style="margin:8px 0px 0px 0px;"></div><div class="hui-loading-text">' + loadingText + '</div></div>';
            this.html(loadingHtml);
        },
        resetLoadingButton: function () {
            this.html(this.getAttr('HUI_BTN_RESET'));
            this.removeAttr('HUI_BTN_RESET');
        },
        buttonIsLoading: function () {
            if (this.attr('HUI_BTN_RESET')) {
                return true;
            }
            return false;
        },
        /* point msg */
        pointMsg: function (msg, color, size, top, right, isRelative) {
            if (this.length < 1) {
                return false;
            }
            if (!isRelative) {
                isRelative = true;
            }
            if (isRelative) {
                this.dom[0].style.position = 'relative';
            }
            if (!msg) {
                if (!color) {
                    color = '#ED2D22';
                }
                if (!size) {
                    size = '8px';
                }
                if (!top) {
                    top = '0px';
                }
                if (!right) {
                    right = '8px';
                }
                var HUI_RedPoint = this.find('.hui-point-msg');
                if (HUI_RedPoint.length >= 1) {
                    return;
                }
                HUI_RedPoint = document.createElement('div');
                HUI_RedPoint.className = 'hui-point-msg';
                HUI_RedPoint.style.width = size;
                HUI_RedPoint.style.height = size;
                HUI_RedPoint.style.background = color;
                HUI_RedPoint.style.top = top;
                HUI_RedPoint.style.right = right;
                hui(HUI_RedPoint).appendTo(this);
                return;
            }
            var HUI_RedPoint = this.find('.hui-number-point');
            if (!HUI_RedPoint.length) {
                if (!color) {
                    color = '#ED2D22';
                }
                if (!size) {
                    size = '8px';
                }
                if (!top) {
                    top = '0px';
                }
                if (!right) {
                    right = '5px';
                }
                HUI_RedPoint = document.createElement('div');
                HUI_RedPoint.className = 'hui-number-point';
                HUI_RedPoint.style.fontSize = size;
                HUI_RedPoint.style.background = color;
                HUI_RedPoint.style.top = top;
                if (typeof(msg) == 'number') {
                    if (msg <= 99) {
                        hui(HUI_RedPoint).css({
                            borderRadius: '50%',
                            fontSize: '12px',
                            lineHeight: '12px',
                            width: '12px',
                            height: '12px'
                        });
                    } else {
                        HUI_RedPoint.style.borderRadius = '5px';
                        HUI_RedPoint.style.padding = '1px 3px';
                    }
                } else {
                    HUI_RedPoint.style.borderRadius = '5px';
                    HUI_RedPoint.style.padding = '1px 3px';
                }
                HUI_RedPoint.style.right = right;
                HUI_RedPoint.innerHTML = msg;
                hui(HUI_RedPoint).appendTo(this);
            } else {
                if (typeof(msg) == 'number') {
                    if (msg <= 99) {
                        HUI_RedPoint.css({
                            borderRadius: '50%',
                            fontSize: '12px',
                            lineHeight: '12px',
                            width: '12px',
                            padding: '2px',
                            height: '12px'
                        });
                    } else {
                        HUI_RedPoint.css({'borderRadius': '3px', padding: '1px 3px', fontSize: '10px'});
                    }
                } else {
                    HUI_RedPoint.css({borderRadius: '5px', padding: '1px 3px'});
                }
                HUI_RedPoint.html(msg);
            }
        },
        removePointMsg: function () {
            if (this.length < 1) {
                return false;
            }
            var HUI_RedPoint = this.find('.hui-point-msg');
            if (HUI_RedPoint.length >= 1) {
                HUI_RedPoint.remove();
            }
            var HUI_NumPoint = this.find('.hui-number-point');
            if (HUI_NumPoint.length >= 1) {
                HUI_NumPoint.remove();
            }
        },
        /* switch box */
        switchBox: function (butNames, callBack) {
            if (!butNames) {
                butNames = ['Off', 'On'];
            }
            this.dom[0].onclick = function () {
                var thisObj = hui(this);
                var status = thisObj.hasClass('hui-switch-on');
                var span = thisObj.dom[0].getElementsByTagName('span');
                if (status) {
                    thisObj.removeClass('hui-switcn-on');
                    span[0].innerHTML = butNames[0];
                    thisObj.removeClass('hui-switch-on');
                    if (callBack) {
                        callBack(false);
                    }
                    return;
                }
                thisObj.addClass('hui-switch-on');
                span[0].innerHTML = butNames[1];
                thisObj.addClass('hui-switch-on');
                if (callBack) {
                    callBack(true);
                }
            }
        },
        getSwitchVal: function () {
            if (this.hasClass('hui-switch-on')) {
                return true;
            }
            return false;
        },
        progressBar: function (val) {
            this.find('span').first().css({width: val + '%'});
        },
        /* ranging */
        ranging: function (callBack) {
            this.dom[0].oninput = function () {
                callBack(this.value);
            };
            this.dom.onchange = function () {
                callBack(this.value);
            }
        },
        rangeRuling: function () {
            for (var i = 0; i < this.length; i++) {
                var html = '';
                for (var ii = 0; ii < 10; ii++) {
                    html += '<div><div></div></div>';
                }
                this.dom[i].innerHTML = html;
            }
        },
        /* offset */
        offset: function () {
            if (this.length != 1) {
                return {left: 0, top: 0};
            }
            return _hui.offset(this.dom[0]);
        },
        scrollX: function (num, sonsTag, extraValue) {
            if (this.length < 1) {
                return
            }
            if (!num) {
                num = 3;
            }
            if (!sonsTag) {
                sonsTag = 'img';
            }
            if (!extraValue) {
                extraValue = 0;
            }
            var setWitdh = hui(this.dom[0]).width() / num;
            for (var i = 0; i < this.length; i++) {
                var cObj = hui(this.dom[i]), sons = cObj.find(sonsTag), total = sons.length;
                sons.css({'width': (setWitdh + extraValue) + 'px', 'float': 'left'});
                cObj.find('div').eq(0).css({width: (setWitdh * total) + 'px'});
                cObj.css({'overflowX': 'auto'});
            }
        },
        scrollY: function (height) {
            if (this.length < 1) {
                return
            }
            if (!height) {
                height = 150;
            }
            for (var i = 0; i < this.length; i++) {
                var cObj = hui(this.dom[i]);
                hui(this.dom[i]).css({height: height + 'px', 'overflowY': 'auto'});
            }
        },
        unfold: function (height, text) {
            if (this.length < 1) {
                return
            }
            if (!height) {
                height = 580;
            }
            if (!text) {
                text = '展开全文';
            }
            this.css({height: height + 'px'});
            var buttonDom = document.createElement('div');
            buttonDom.setAttribute('id', 'hui-unfold');
            buttonDom.innerHTML = '<span class="hui-icons hui-icons-down2"></span>' + text;
            hui(buttonDom).appendTo(this);
            hui('#hui-unfold').click(function () {
                hui(this).parent().css({height: 'auto'});
                hui(this).remove();
            });
        }
    }
    _hui.offset = function (e) {
        var offset = {left: 0, top: 0};
        offset.left = e.offsetLeft;
        offset.top = e.offsetTop;
        while (e = e.offsetParent) {
            offset.top += e.offsetTop;
            offset.left += e.offsetLeft;
        }
        return offset;
    };
    _hui.scrollTop = function (val) {
        document.body.scrollTop = val;
    }

    /* ajax */
    _hui.ajax = function (sets) {
        if (!sets) {
            sets = {url: null};
        }
        if (!sets.url) {
            return;
        }
        var async = 'async' in sets ? sets.async : true;
        sets.type = 'type' in sets ? sets.type.toUpperCase() : 'GET';
        sets.backType = 'backType' in sets ? sets.backType.toUpperCase() : 'HTML';
        sets.beforeSend = 'beforeSend' in sets ? sets.beforeSend : null;
        sets.complete = 'complete' in sets ? sets.complete : null;
        sets.success = 'success' in sets ? sets.success : function () {
            };
        sets.error = 'error' in sets ? sets.error : function (e) {
                console.log('ajax error : ' + JSON.stringify(e));
            }
        sets.ContentType = 'ContentType' in sets ? sets.ContentType : 'application/x-www-form-urlencoded';
        sets.header = 'header' in sets ? sets.header : false;
        var xhr = new window.XMLHttpRequest();
        if (typeof(xhr) == 'undefined') {
            if (sets.error) {
                sets.error(_lang.xhrError);
            }
            return;
        }
        if (sets.header) {
            for (var i = 0; i < sets.header.length; i++) {
                xhr.setRequestHeader(sets.header[i][0], sets.header[i][1]);
            }
        }
        xhr.timeout = 'timeout' in sets ? sets.timeout : 0;
        if (sets.beforeSend) {
            sets.beforeSend();
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (sets.complete) {
                    sets.complete();
                }
                if (xhr.status == 200) {
                    if (sets.backType == 'HTML') {
                        sets.success(xhr.responseText);
                    } else if (sets.backType == 'JSON') {
                        sets.success(JSON.parse(xhr.responseText));
                    }
                }
            }
        }
        xhr.ontimeout = function () {
            sets.error(_lang.ajaxTimeout);
        }
        if (sets.error) {
            xhr.onerror = function (e) {
                sets.error(e);
            }
        }
        xhr.open(sets.type, sets.url, async);
        if (sets.type == 'POST') {
            var pd = '';
            if (sets.ContentType == 'application/x-www-form-urlencoded') {
                for (var k in sets.data) {
                    pd += encodeURIComponent(k) + '=' + encodeURIComponent(sets.data[k]) + '&';
                }
                pd = pd.substr(0, pd.length - 1);
            } else {
                pd = sets.data;
            }
            xhr.setRequestHeader('Content-Type', sets.ContentType);
            xhr.send(pd);
        } else {
            xhr.send();
        }
    };
    _hui.get = function (url, success, err) {
        var sets = {url: url, type: 'GET', backType: 'HTML', success: success, error: err};
        this.ajax(sets);
    };
    _hui.getJSON = function (url, success, err) {
        var sets = {url: url, type: 'GET', backType: 'JSON', success: success, error: err};
        this.ajax(sets);
    };
    _hui.post = function (url, pd, success, err) {
        var sets = {url: url, type: 'POST', backType: 'HTML', data: pd, success: success, error: err};
        this.ajax(sets);
    };
    _hui.postJSON = function (url, pd, success, err) {
        var sets = {url: url, type: 'POST', backType: 'JSON', data: pd, success: success, error: err};
        this.ajax(sets);
    };

    /* 通用操作 */
    _hui.version = 'hui 3.0';
    _hui.createDom = function (domTag, attrs) {
        if (!attrs) {
            return document.createElement(domTag);
        }
        var dom = document.createElement(domTag);
        for (var k in attrs) {
            dom.setAttribute(k, attrs[k]);
        }
        return dom;
    };
    _hui.cAnda = function (domTag, attrs) {
        var dom = this.createDom(domTag, attrs);
        document.body.appendChild(dom);
    };
    /* hui toast */
    _hui.toast = function (msg, timer) {
        if (timer == undefined) {
            timer = 'short';
        }
        if (typeof(plus) != 'undefined') {
            plus.nativeUI.toast(msg, {duration: timer});
            return;
        }
        var toast = hui('#hui-toast');
        if (toast.length > 0) {
            toast.remove();
        }
        var div = document.createElement('div');
        div.setAttribute('id', 'hui-toast');
        div.setAttribute('class', 'hui-fade-in');
        document.body.appendChild(div);
        toast = hui('#hui-toast');
        toast.html('<div id="hui-toast-msg">' + msg + '</div>');
        if (_hui.ToastTimer) {
            clearTimeout(_hui.ToastTimer);
        }
        if (timer == 'short') {
            timer = 2000;
        } else {
            timer = 3500;
        }
        _hui.ToastTimer = setTimeout(function () {
            toast.remove();
        }, timer);
    };
    /* icon Toast */
    _hui.iconToast = function (msg, icon) {
        if (icon == undefined) {
            icon = 'success';
        }
        var iconToast = hui('#hui-icon-toast');
        if (iconToast.length < 1) {
            var div = document.createElement('div');
            div.setAttribute('id', 'hui-icon-toast');
            div.innerHTML = '<div class="hui-icons"></div><div class="hui-text-center"></div>';
            document.body.appendChild(div);
            iconToast = hui('#hui-icon-toast');
        } else {
            return false;
        }
        iconToast.find('div').eq(0).addClass('hui-icons-' + icon);
        iconToast.find('div').eq(1).html(msg);
        setTimeout(function () {
            iconToast.remove();
        }, 2000);
    };
    _hui.ToastTimer = null;
    _hui.upToast = function (msg) {
        var toast = hui('#hui-up-toast');
        if (toast.length > 0) {
            toast.remove();
        }
        var div = document.createElement('div');
        div.setAttribute('id', 'hui-up-toast');
        document.body.appendChild(div);
        toast = hui('#hui-up-toast');
        toast.html(msg);
        if (_hui.ToastTimer) {
            clearTimeout(_hui.ToastTimer);
        }
        _hui.ToastTimer = setTimeout(function () {
            toast.remove();
        }, 2500);
    };
    /* dialog */
    _hui.maskShow = function () {
        _hui.mask = document.getElementById('hui-mask');
        if (!_hui.mask) {
            _hui.mask = document.createElement('div');
            _hui.mask.setAttribute('id', 'hui-mask');
            document.body.appendChild(_hui.mask);
        }
    };
    _hui.maskHide = function () {
        if (_hui.mask) {
            document.body.removeChild(_hui.mask);
        }
    }
    _hui.maskTap = function (callBack) {
        _hui.mask.addEventListener('click', callBack);
    }
    _hui.dialogBase = function () {
        hui.dialogDom = document.getElementById('hui-dialog');
        if (hui.dialogDom) {
            document.body.removeChild(hui.dialogDom);
        }
        hui.dialogDom = document.createElement('div');
        hui.dialogDom.setAttribute('id', 'hui-dialog');
        hui.dialogDom.setAttribute('class', 'hui-fade-in');
        document.body.appendChild(hui.dialogDom);
        hui.maskShow();
    }
    _hui.dialogClose = function () {
        document.body.removeChild(hui.dialogDom);
        hui.maskHide();
    };
    _hui.dialogCallBack = null;
    _hui.alert = function (msg, btnName, callBack) {
        hui.dialogCallBack = callBack;
        if (!btnName) {
            btnName = '确定';
        }
        hui.dialogBase();
        hui.dialogDom.innerHTML = '<div id="hui-dialog-in"><div id="hui-dialog-msg">' + msg + '</div><div id="hui-dialog-btn-line">' + btnName + '</div></div>';
        var btn = document.getElementById('hui-dialog-btn-line');
        btn.onclick = function () {
            hui.dialogClose();
            if (hui.dialogCallBack) {
                hui.dialogCallBack();
            }
        }
    };
    _hui.confirm = function (msg, btnName, callBack, callBack2) {
        if (!btnName) {
            btnName = ['取消', '确定'];
        }
        hui.dialogBase();
        hui.dialogDom.innerHTML = '<div id="hui-dialog-in"><div id="hui-dialog-msg">' + msg + '</div><div id="hui-dialog-btn-line"><div>' + btnName[0] + '</div><div>' + btnName[1] + '</div></div></div>';
        var btns = document.getElementById('hui-dialog-btn-line').getElementsByTagName('div');
        btns[0].onclick = function () {
            hui.dialogClose();
            if (callBack2) {
                callBack2();
            }
        };
        btns[1].onclick = function () {
            hui.dialogClose();
            if (callBack) {
                callBack();
            }
        };
    };
    _hui.prompt = function (msg, btnName, callBack, placeholder, val, callBack2) {
        if (!btnName) {
            btnName = ['取消', '确定'];
        }
        if (!placeholder) {
            placeholder = '';
        }
        if (!val) {
            val = '';
        }
        hui.dialogBase();
        hui.dialogDom.innerHTML = '<div id="hui-dialog-in"><div id="hui-dialog-msg" style="padding-bottom:12px;">' + msg + '</div><div id="hui-dialog-input-in"><input type="text" id="hui-dialog-input" placeholder="' + placeholder + '" value="' + val + '" /></div><div style="height:15px;"></div><div id="hui-dialog-btn-line"><div>' + btnName[0] + '</div><div>' + btnName[1] + '</div></div></div>';
        var btns = document.getElementById('hui-dialog-btn-line').getElementsByTagName('div');
        btns[0].onclick = function () {
            if (callBack2) {
                callBack2();
            }
            hui.dialogClose();
        };
        btns[1].onclick = function () {
            if (callBack) {
                callBack(document.getElementById("hui-dialog-input").value);
            }
            hui.dialogClose();
        };
    };
    /* loading */
    _hui.loading = function (msg, isClose) {
        if (msg) {
            var loadingText = '<div id="hui-loading-text">' + msg + '</div>';
        } else {
            var loadingText = '';
        }
        var HUI_LoadingMask = document.getElementById('hui-transparent-mask');
        if (isClose) {
            if (HUI_LoadingMask) {
                HUI_LoadingMask.parentNode.removeChild(HUI_LoadingMask);
            }
            return false;
        }
        if (!HUI_LoadingMask) {
            var HUI_LoadingMask = document.createElement('div');
            HUI_LoadingMask.setAttribute('id', 'hui-transparent-mask');
            HUI_LoadingMask.innerHTML = '<div id="hui-loading"><div id="hui-loading-in"><div></div><div></div><div></div><div></div><div></div></div>' + loadingText + '</div>';
            document.body.appendChild(HUI_LoadingMask);
        }
    };
    _hui.closeLoading = function () {
        var HUI_LoadingMask = document.getElementById('hui-transparent-mask');
        if (HUI_LoadingMask) {
            HUI_LoadingMask.parentNode.removeChild(HUI_LoadingMask);
        }
    };
    _hui.h5Loading = function (isClose, title, options) {
        if (isClose) {
            plus.nativeUI.closeWaiting();
            return;
        }
        if (!title) {
            title = ''
        }
        ;
        if (!options) {
            options = {};
        }
        plus.nativeUI.showWaiting(title, options);
    }
    /* action sheet */
    _hui.actionSheet = function (menus, cancel, callBack) {
        hui.maskShow();
        var huiActionSheet = document.getElementById('hui-action-sheet');
        if (!huiActionSheet) {
            var huiActionSheet = document.createElement('div');
            huiActionSheet.setAttribute('id', 'hui-action-sheet');
            document.body.appendChild(huiActionSheet);
            huiActionSheet = document.getElementById('hui-action-sheet');
        }
        var actionSheets = '<ul>';
        for (var i = 0; i < menus.length; i++) {
            actionSheets += '<li huiASId="' + i + '">' + meuns[i] + '</li>';
        }
        huiActionSheet.innerHTML = actionSheets + '<li id="hui-action-sheet-cancel" huiASId="-1">' + cancel + '</li></ul>';
        hui.mask.removeEventListener('click', hui.actionSheetClose);
        hui.mask.addEventListener('click', hui.actionSheetClose);
        hui(huiActionSheet).find('li').click(function () {
            this.index = this.getAttribute('huiASId');
            callBack(this);
            hui.actionSheetClose();
        });
    };
    _hui.actionSheetClose = function () {
        hui.maskHide();
        var huiActionSheet = document.getElementById('hui-action-sheet');
        if (huiActionSheet) {
            document.body.removeChild(huiActionSheet);
        }
    }
    /* number box */
    _hui.numberBox = function () {
        var numberBoxes = document.getElementsByClassName('hui-number-box');
        if (!numberBoxes) {
            return;
        }
        for (var i = 0; i < numberBoxes.length; i++) {
            var numberBox = numberBoxes[i], numberBoxL = numberBox.getElementsByClassName('reduce')[0];
            var numberBoxR = numberBox.getElementsByClassName('add')[0];
            numberBoxL.onclick = function () {
                var min = Number(this.parentNode.getAttribute('min'));
                var max = Number(this.parentNode.getAttribute('max'));
                var numberIn = this.parentNode.getElementsByTagName('input')[0];
                var cNum = Number(numberIn.value);
                if (!cNum || cNum == NaN) {
                    cNum = min;
                }
                cNum -= 1;
                if (cNum < min) {
                    cNum = min;
                }
                numberIn.value = cNum;
                hui(numberIn).trigger('change');
            }
            numberBoxR.onclick = function () {
                var min = Number(this.parentNode.getAttribute('min'));
                var max = Number(this.parentNode.getAttribute('max'));
                var numberIn = this.parentNode.getElementsByTagName('input')[0];
                var cNum = Number(numberIn.value);
                if (!cNum || cNum == NaN) {
                    cNum = min;
                }
                var cNum = Number(numberIn.value);
                if (!cNum || cNum == NaN) {
                    cNum = min;
                }
                cNum += 1;
                if (cNum > max) {
                    cNum = max;
                }
                numberIn.value = cNum;
                hui(numberIn).trigger('change');
            }
        }
    };
    /* lazy load */
    _hui.lazyLoad = function (className) {
        _hui.timerForLazy = null;
        window.addEventListener('scroll', function () {
            clearTimeout(_hui.timerForLazy);
            _hui.timerForLazy = setTimeout(function () {
                _hui.lazyLoadNow(className)
            }, 200);
        });
        _hui.lazyLoadNow();
    };
    _hui.lazyLoadNow = function (className) {
        if (!className) {
            className = 'hui-lazy';
        }
        var winInfo = hui.winInfo(), imgs = new Array(), lazyObj = hui('.' + className);
        for (var i = 0; i < lazyObj.length; i++) {
            var dom = lazyObj.dom[i], realSrc = dom.getAttribute('lazySrc');
            var setsY = hui.offset(dom);
            if (setsY.top >= winInfo.height + winInfo.scrollTop) {
                break;
            }
            dom.src = realSrc;
            hui(dom).removeClass(className);
        }
    };
    _hui.winInfo = function () {
        var winInfo = {height: 0, width: 0, scrollTop: 0};
        if (window.innerHeight) {
            winInfo.height = window.innerHeight;
        } else if ((document.body) && (document.body.clientHeight)) {
            winInfo.height = document.body.clientHeight;
        }
        if (window.innerWidth) {
            winInfo.width = window.innerWidth;
        } else if ((document.body) && (document.body.clientWidth)) {
            winInfo.width = document.body.clientWidth;
        }
        if (document.documentElement && document.documentElement.scrollTop) {
            winInfo.scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            winInfo.scrollTop = document.body.scrollTop;
        }
        return winInfo;
    };
    _hui.onScroll = function (callBack) {
        window.addEventListener('scroll', function (e) {
            var e = e || window.event;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            callBack(scrollTop);
        });
    };
    /* date picker */
    _hui.datePicker = function () {
        hui('.hui-date-picker').each(function (dom) {
            var val = dom.getAttribute('value');
            if (val) {
                hui(dom).addClass('hui-picker-valued');
            }
            dom.addEventListener('input', function () {
                hui(dom).addClass('hui-picker-valued');
            });
        });
    };
    /* slide menu */
    _hui.slideMenu = function () {
        hui(document.body).swipeLeft(function (e) {
            hui.showSlideMenu();
        });
    };
    _hui.showSlideMenu = function () {
        hui.maskShow();
        var menu = hui('.hui-slide-menu').eq(0);
        var header = hui('.hui-header');
        if (header.length > 0) {
            var sets = header.offset();
            menu.css({top: (sets.top + 44 + hui.immersedStatusbarHeight) + 'px'});
        }
        menu.addClass('hui-slide-menu-show');
        hui.maskTap(function () {
            _hui.closeSlideMenu();
        });
    };
    _hui.closeSlideMenu = function () {
        var menu = hui('.hui-slide-menu').eq(0);
        menu.addClass('hui-slide-menu-hide');
        setTimeout(function () {
            hui.maskHide();
            menu.removeClass('hui-slide-menu-show');
            menu.removeClass('hui-slide-menu-hide');
        }, 600);
    };
    /* swipe do */
    _hui.swipeDo = function () {
        hui('.hui-swipe-do').each(function (sobj) {
            var sdObj = hui(sobj);
            var sdwidth = sdObj.width() + 1;
            sdObj.find('.hui-swipe-do-content').css({'width': sdwidth + 'px'});
            var sdactions = sdObj.find('.hui-swipe-do-btn');
            var sdactionsWidth = 0;
            for (var i = 0; i < sdactions.length; i++) {
                sdactionsWidth += sdactions.eq(i).width();
            }
            sdObj.find('.hui-swipe-do-doms').css({width: (sdactionsWidth + sdwidth) + 'px'});
            var sdHeight = sdObj.height();
            sdactions.css({height: sdHeight + 'px', lineHeight: sdHeight + 'px'});
        })
    };
    /* black mask */
    _hui.blackMask = function () {
        _hui.blackMasker = hui('#hui-black-mask');
        if (_hui.blackMasker.length < 1) {
            hui.toast('请在HTML中创建#hui-black-mask');
            return false;
        }
        _hui.blackMaskerAction = hui('#hui-black-action');
        _hui.blackMaskerAction.css({top: hui.immersedStatusbarHeight});
        hui('#hui-black-close').click(_hui.closeBlackMask);
    };
    _hui.shwoBlackMasker = function () {
        _hui.blackMasker.show(true);
        _hui.blackMaskerAction.show(true);
    };
    _hui.closeBlackMask = function () {
        _hui.blackMasker.hide(true);
        _hui.blackMaskerAction.hide(true);
    };
    /* tags */
    _hui.tags = function (selecter, func) {
        var tagsMain = hui(selecter);
        var tags = tagsMain.find('div');
        tags.click(function () {
            var cTags = hui(this);
            if (cTags.hasClass('hui-tags-active')) {
                cTags.removeClass('hui-tags-active');
            } else {
                cTags.addClass('hui-tags-active');
            }
            if (func) {
                func();
            }
        });
    }
    _hui.getTagsData = function (selecter) {
        var tagsMain = hui(selecter);
        var tags = tagsMain.find('.hui-tags-active');
        if (tags.length < 1) {
            return false;
        }
        var resText = [], resVal = [];
        for (var i = 0; i < tags.length; i++) {
            resText.push(tags.dom[i].innerText);
            resVal.push(tags.dom[i].getAttribute('tagVal'));
        }
        return {tagsText: resText, tagsVal: resVal};
    }
    /* count down */
    _hui.countdown = function (timer, domId, showType) {
        if (!showType) {
            showType = 1;
        }
        hui.countdownBase(timer, domId, showType);
        setInterval(function () {
            hui.countdownBase(timer, domId, showType);
        }, 1000);
    }
    _hui.countdownBase = function (timer, domId, showType) {
        var reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
        var res = timer.match(reg);
        if (res == null) {
            console.log('时间格式错误');
            return false;
        }
        var year = parseInt(res[1]);
        if (year < 1000) {
            console.log('时间格式错误');
            return false;
        }
        var month = parseInt(res[2]);
        var day = parseInt(res[3]);
        var h = parseInt(res[4]);
        if (h < 0 || h > 24) {
            console.log('时间格式错误');
            return false;
        }
        var i = parseInt(res[5]);
        if (i < 0 || i > 60) {
            console.log('时间格式错误');
            return false;
        }
        var s = parseInt(res[6]);
        if (s < 0 || s > 60) {
            console.log('时间格式错误');
            return false;
        }
        var leftTime = (new Date(year, month - 1, day, h, i, s)) - new Date();
        if (leftTime > 0) {
            var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);
            var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);
            var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
            var seconds = parseInt(leftTime / 1000 % 60, 10);
        } else {
            var days = 0, hours = 0, minutes = 0, seconds = 0;
        }
        var html = '';
        var daysStr = days.toString(), daysHtml = '';
        if (daysStr.length < 2) {
            daysHtml += '<span>0</span><span>' + daysStr + '</span>';
        } else {
            for (var i = 0; i < daysStr.length; i++) {
                daysHtml += '<span>' + daysStr[i] + '</span>';
            }
        }
        var hoursStr = hours.toString(), hoursHtml = '';
        if (hoursStr.length < 2) {
            hoursHtml += '<span>0</span><span>' + hoursStr + '</span>';
        } else {
            for (var i = 0; i < hoursStr.length; i++) {
                hoursHtml += '<span>' + hoursStr[i] + '</span>';
            }
        }
        var minutesStr = minutes.toString(), minutesHtml = '';
        if (minutesStr.length < 2) {
            minutesHtml += '<span>0</span><span>' + minutesStr + '</span>';
        } else {
            for (var i = 0; i < minutesStr.length; i++) {
                minutesHtml += '<span>' + minutesStr[i] + '</span>';
            }
        }
        var secondsStr = seconds.toString(), secondsHtml = '';
        if (secondsStr.length < 2) {
            secondsHtml += '<span>0</span><span>' + secondsStr + '</span>';
        } else {
            for (var i = 0; i < secondsStr.length; i++) {
                secondsHtml += '<span>' + secondsStr[i] + '</span>';
            }
        }
        switch (showType) {
            case 1 :
                html += daysHtml + '天' + hoursHtml + '时' + minutesHtml + '分' + secondsHtml + '秒';
                break;
            case 2 :
                html += hoursHtml + '时' + minutesHtml + '分' + secondsHtml + '秒';
                break;
            case 3 :
                html += hoursHtml + ':' + minutesHtml + ':' + secondsHtml;
                break;
            case 4 :
                html += minutesHtml + ':' + secondsHtml;
                break;
            default:
                html += daysHtml + '天' + hoursHtml + '时' + minutesHtml + '分' + secondsHtml + '秒';
        }
        var domShow = hui(domId);
        domShow.addClass('hui-countdown');
        hui(domId).html(html);
    }
    /* scroll news */
    _hui.scrollNews = function (domId, speed) {
        if (!speed) {
            speed = 3000;
        }
        var dom = hui(domId);
        if (dom.length < 1) {
            return false;
        }
        setInterval(function () {
            var firstNews = dom.find('.hui-scroll-news-items').eq(0);
            firstNews.addClass('hui-scroll-news-h0');
            setTimeout(function () {
                firstNews.removeClass('hui-scroll-news-h0');
                firstNews.appendTo(dom);
            }, 800);
        }, speed);
    }
    _hui.resize = function (callBack) {
        huiResizeNeedDo.push(callBack);
    };
    /* ready */
    _hui.readyRe = /complete|loaded|interactive/;
    _hui.ready = function (callBack) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function () {
                var backBtn = document.getElementById('hui-back');
                if (backBtn) {
                    backBtn.onclick = _hui.Back;
                }
                if (callBack) {
                    callBack();
                }
            });
        } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", function () {
                if (_hui.readyRe.test(document.readyState)) {
                    var backBtn = document.getElementById('hui-back');
                    if (backBtn) {
                        backBtn.onclick = _hui.Back;
                    }
                    if (callBack) {
                        callBack();
                    }
                }
            });
        }
    };
    _hui.backNumber = 0;
    _hui.Back = function () {
        if (!window.plus) {
            history.back();
            return;
        }
        if (hui.BackDo) {
            var res = hui.BackDo();
            if (!res) {
                return;
            }
        }
        var selfW = plus.webview.currentWebview();
        if (selfW.id == plus.runtime.appid || selfW.id == 'HBuilder') {
            if (_hui.backNumber < 1) {
                hui.toast(_lang.quit);
                _hui.backNumber++;
                setTimeout(function () {
                    _hui.backNumber = 0;
                }, 2000);
            } else {
                plus.webview.close(selfW, 'slide-out-right');
            }
        } else {
            if (selfW.HuiIsClose) {
                if (selfW.HuiIsClose == 'no') {
                    return;
                }
                plus.webview.close(selfW, 'slide-out-right');
            } else {
                plus.webview.hide(selfW, 'slide-out-right');
            }
        }
    };
    _hui.back = _hui.Back;
    _hui.extend = function (funName, fun) {
        hcExtends[funName] = fun;
    }
    /* h5 plus 常用接口 */
    _hui.plusReady = function (callBack) {
        document.addEventListener('plusready', function () {
            if (callBack) {
                callBack();
            }
        });
    };
    _hui.open = function (winName, styles, isClose, extras) {
        if (!window.plus) {
            location.href = winName;
            return;
        }
        if (!styles) {
            styles = {};
        }
        var w = this.create(winName, styles, isClose, extras);
        plus.webview.show(w, 'slide-in-right');
        return w;
    };
    _hui.create = function (winName, styles, isClose, extras) {
        if (!isClose) {
            isClose = false;
        }
        if (typeof(styles) == "undefined") {
            styles = {popGesture: "none"};
        }
        if (!styles.popGesture) {
            styles.popGesture = 'none';
        }
        if (typeof(extras) == "undefined") {
            extras = {};
        }
        if (!styles.zindex) {
            styles.zindex = 10;
        }
        extras.HuiIsClose = isClose;
        var w = plus.webview.getWebviewById(winName);
        if (w) {
            return w;
        }
        w = plus.webview.create(winName, winName, styles, extras);
        return w;
    };
    _hui.subpages = function (subpages) {
        //检查沉浸式
        var isImmersedStatusbar = plus.navigator.isImmersedStatusbar();
        var StatusbarHeight = isImmersedStatusbar ? plus.navigator.getStatusbarHeight() : 0;
        var currentView = plus.webview.currentWebview();
        for (var i = 0; i < subpages.length; i++) {
            var top = subpages[i][1].top;
            top = parseInt(top);
            top += StatusbarHeight;
            subpages[i][1].top = top + 'px';
            var subView = this.create(subpages[i][0], subpages[i][1]);
            currentView.append(subView);
        }
    };
    _hui.drag = function (prevView, nextView, callBack) {
        var currentView = plus.webview.currentWebview();
        if (nextView) {
            var _next = hui.getView(nextView.pageId);
            currentView.drag(
                {direction: "left", moveMode: "followFinger"},
                {view: _next, moveMode: "follow"},
                function (e) {
                    if (e.type == 'end' && e.result) {
                        if (nextView.callBack) {
                            nextView.callBack();
                        }
                    }
                }
            );
        }
        if (prevView) {
            var _prev = hui.getView(prevView.pageId);
            currentView.drag(
                {direction: "right", moveMode: "followFinger"},
                {view: _prev, moveMode: "follow"},
                function (e) {
                    if (e.type == 'end' && e.result) {
                        if (prevView.callBack) {
                            prevView.callBack();
                        }
                    }
                }
            );
        }
    };
    _hui.close = function (vId) {
        var w = plus.webview.getWebviewById(vId);
        if (w) {
            w.close();
        }
    };
    _hui.allViews = function () {
        return plus.webview.all();
    };
    _hui.getView = function (vId) {
        return plus.webview.getWebviewById(vId);
    };
    _hui.getViewById = function (vId) {
        return plus.webview.getWebviewById(vId);
    };
    _hui.getCView = function () {
        return plus.webview.currentWebview();
    };
    _hui.closeView = function (view) {
        if (!view) {
            view = plus.webview.currentWebview();
        }
        plus.webview.close(view, 'slide-out-right', 300);
    };
    _hui.delay = function (func, timer) {
        if (!timer) {
            timer = 1000;
        }
        return setTimeout(func, timer);
    }
    _hui.immersedStatusbarHeight = 0;
    _hui.ready(function () {
        document.body.addEventListener('touchstart', function () {
        });
    });
    return _hui;
})(document);
window.addEventListener('resize', function () {
    clearTimeout(huiReSizeTimer);
    if (huiResizeNeedDo.length < 1) {
        return false;
    }
    huiReSizeTimer = setTimeout(function () {
        for (var i = 0; i < huiResizeNeedDo.length; i++) {
            var fun = huiResizeNeedDo[i];
            fun();
        }
    }, 100);
});
document.addEventListener('plusready', function () {
    //监听安卓返回键
    plus.key.addEventListener("backbutton", hui.Back);
    //处理沉浸式
    var isImmersedStatusbar = plus.navigator.isImmersedStatusbar();
    if (isImmersedStatusbar) {
        var huiHeader = hui('.hui-header');
        if (huiHeader.length > 0) {
            var StatusbarHeight = plus.navigator.getStatusbarHeight();
            hui.immersedStatusbarHeight = StatusbarHeight;
            hui('.hui-header').eq(0).css({'paddingTop': StatusbarHeight + 'px'});
            hui('#hui-back').css({top: StatusbarHeight + 'px'});
            hui('#hui-header-menu').css({top: StatusbarHeight + 'px'});
            hui('.hui-wrap').eq(0).css({'paddingTop': (StatusbarHeight + 44) + 'px'});
        }
    }
});
Array.prototype.shuffle = function () {
    this.sort(function () {
        return Math.random() - 0.5;
    });
};
(function () {
    if (typeof(window.CustomEvent) === 'undefined') {
        function CustomEvent(event, params) {
            params = params || {bubbles: false, cancelable: false, detail: undefined};
            var evt = document.createEvent('Events');
            var bubbles = true;
            for (var name in params) {
                (name === 'bubbles') ? (bubbles = !!params[name]) : (evt[name] = params[name]);
            }
            evt.initEvent(event, bubbles, true);
            return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }
})();