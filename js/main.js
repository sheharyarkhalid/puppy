/*!For license information please see quiz.js.LICENSE.txt*/ ! function() {
    var t = {
            6791: function(t, e, n) {
                t.exports = function() {
                    "use strict";

                    function t(e) {
                        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, t(e)
                    }

                    function e(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }

                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function i(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            })))), i.forEach((function(e) {
                                r(t, e, n[e])
                            }))
                        }
                        return t
                    }

                    function o(t) {
                        return function(t) {
                            if (Array.isArray(t)) {
                                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                return n
                            }
                        }(t) || function(t) {
                            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }
                    var a, s, u, c;

                    function l() {
                        return "object" == typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
                    }(function(t) {
                        t.IDENTIFY = "$identify"
                    })(a || (a = {})),
                    function(t) {
                        t.SET = "$set", t.SET_ONCE = "$setOnce", t.ADD = "$add", t.APPEND = "$append", t.PREPEND = "$prepend", t.REMOVE = "$remove", t.PREINSERT = "$preinsert", t.POSTINSERT = "$postinsert", t.UNSET = "$unset", t.CLEAR_ALL = "$clearAll"
                    }(s || (s = {})),
                    function(t) {
                        t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Warn = 2] = "Warn", t[t.Verbose = 3] = "Verbose"
                    }(u || (u = {})),
                    function(t) {
                        t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.PayloadTooLarge = "payload_too_large", t.Invalid = "invalid", t.Failed = "failed"
                    }(c || (c = {})),
                    function(t) {
                        t.fromHttpCode = function(e) {
                            return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : 413 === e ? t.PayloadTooLarge : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
                        }
                    }(c || (c = {})), c.Skipped;
                    var f, h = {},
                        p = ((f = function() {
                            return "object" == typeof process && void 0 !== (null === (t = null === process || void 0 === process ? void 0 : process.versions) || void 0 === t ? void 0 : t.node) ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : h;
                            var t
                        }()).__AMPLITUDE__ = f.__AMPLITUDE__ || {}, f.__AMPLITUDE__),
                        d = "Amplitude Logger ",
                        v = function() {
                            function t() {
                                this._logLevel = 0
                            }
                            return t.prototype.disable = function() {
                                this._logLevel = 0
                            }, t.prototype.enable = function(t) {
                                void 0 === t && (t = u.Warn), this._logLevel = t
                            }, t.prototype.log = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                this._logLevel < u.Verbose || n.g.console.log(d + "[Log]: " + t.join(" "))
                            }, t.prototype.warn = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                this._logLevel < u.Warn || n.g.console.warn(d + "[Warn]: " + t.join(" "))
                            }, t.prototype.error = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                this._logLevel < u.Error || n.g.console.error(d + "[Error]: " + t.join(" "))
                            }, t
                        }(),
                        y = (p.logger || (p.logger = new v), {
                            DEFAULT_INSTANCE: "$default_instance",
                            API_VERSION: 2,
                            MAX_STRING_LENGTH: 4096,
                            MAX_PROPERTY_KEYS: 1e3,
                            IDENTIFY_EVENT: "$identify",
                            GROUP_IDENTIFY_EVENT: "$groupidentify",
                            LAST_EVENT_ID: "amplitude_lastEventId",
                            LAST_EVENT_TIME: "amplitude_lastEventTime",
                            LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
                            LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
                            SESSION_ID: "amplitude_sessionId",
                            DEVICE_ID: "amplitude_deviceId",
                            OPT_OUT: "amplitude_optOut",
                            USER_ID: "amplitude_userId",
                            DEVICE_ID_INDEX: 0,
                            USER_ID_INDEX: 1,
                            OPT_OUT_INDEX: 2,
                            SESSION_ID_INDEX: 3,
                            LAST_EVENT_TIME_INDEX: 4,
                            EVENT_ID_INDEX: 5,
                            IDENTIFY_ID_INDEX: 6,
                            SEQUENCE_NUMBER_INDEX: 7,
                            COOKIE_TEST_PREFIX: "amp_cookie_test",
                            COOKIE_PREFIX: "amp",
                            STORAGE_DEFAULT: "",
                            STORAGE_COOKIES: "cookies",
                            STORAGE_NONE: "none",
                            STORAGE_LOCAL: "localStorage",
                            STORAGE_SESSION: "sessionStorage",
                            REVENUE_EVENT: "revenue_amount",
                            REVENUE_PRODUCT_ID: "$productId",
                            REVENUE_QUANTITY: "$quantity",
                            REVENUE_PRICE: "$price",
                            REVENUE_REVENUE_TYPE: "$revenueType",
                            AMP_DEVICE_ID_PARAM: "amp_device_id",
                            REFERRER: "referrer",
                            UTM_SOURCE: "utm_source",
                            UTM_MEDIUM: "utm_medium",
                            UTM_CAMPAIGN: "utm_campaign",
                            UTM_TERM: "utm_term",
                            UTM_CONTENT: "utm_content",
                            ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
                            TRANSPORT_HTTP: "http",
                            TRANSPORT_BEACON: "beacon"
                        }),
                        g = function(t) {
                            for (var e = "", n = 0; n < t.length; n++) {
                                var r = t.charCodeAt(n);
                                r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
                            }
                            return e
                        },
                        m = function(t) {
                            for (var e = "", n = 0, r = 0, i = 0, o = 0; n < t.length;)(r = t.charCodeAt(n)) < 128 ? (e += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (i = t.charCodeAt(n + 1), e += String.fromCharCode((31 & r) << 6 | 63 & i), n += 2) : (i = t.charCodeAt(n + 1), o = t.charCodeAt(n + 2), e += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & o), n += 3);
                            return e
                        },
                        _ = {
                            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            encode: function(t) {
                                try {
                                    if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(t)))
                                } catch (t) {}
                                return _._encode(t)
                            },
                            _encode: function(t) {
                                var e, n, r, i, o, a, s, u = "",
                                    c = 0;
                                for (t = g(t); c < t.length;) i = (e = t.charCodeAt(c++)) >> 2, o = (3 & e) << 4 | (n = t.charCodeAt(c++)) >> 4, a = (15 & n) << 2 | (r = t.charCodeAt(c++)) >> 6, s = 63 & r, isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64), u = u + _._keyStr.charAt(i) + _._keyStr.charAt(o) + _._keyStr.charAt(a) + _._keyStr.charAt(s);
                                return u
                            },
                            decode: function(t) {
                                try {
                                    if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(t)))
                                } catch (t) {}
                                return _._decode(t)
                            },
                            _decode: function(t) {
                                var e, n, r, i, o, a, s = "",
                                    u = 0;
                                for (t = t.replace(/[^A-Za-z0-9+/=]/g, ""); u < t.length;) e = _._keyStr.indexOf(t.charAt(u++)) << 2 | (i = _._keyStr.indexOf(t.charAt(u++))) >> 4, n = (15 & i) << 4 | (o = _._keyStr.indexOf(t.charAt(u++))) >> 2, r = (3 & o) << 6 | (a = _._keyStr.indexOf(t.charAt(u++))), s += String.fromCharCode(e), 64 !== o && (s += String.fromCharCode(n)), 64 !== a && (s += String.fromCharCode(r));
                                return m(s)
                            }
                        },
                        b = Object.prototype.toString;

                    function w(e) {
                        switch (b.call(e)) {
                            case "[object Date]":
                                return "date";
                            case "[object RegExp]":
                                return "regexp";
                            case "[object Arguments]":
                                return "arguments";
                            case "[object Array]":
                                return "array";
                            case "[object Error]":
                                return "error"
                        }
                        return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? "buffer" : t(e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
                    }
                    var S, E = {
                            DISABLE: 0,
                            ERROR: 1,
                            WARN: 2,
                            INFO: 3
                        },
                        x = E.WARN,
                        I = {
                            error: function(t) {
                                x >= E.ERROR && O(t)
                            },
                            warn: function(t) {
                                x >= E.WARN && O(t)
                            },
                            info: function(t) {
                                x >= E.INFO && O(t)
                            }
                        },
                        O = function(t) {
                            try {
                                console.log("[Amplitude] " + t)
                            } catch (t) {}
                        },
                        T = function(t) {
                            return "string" === w(t) && t.length > y.MAX_STRING_LENGTH ? t.substring(0, y.MAX_STRING_LENGTH) : t
                        },
                        P = function(t, e, n) {
                            return w(t) === n || (I.error("Invalid " + e + " input type. Expected " + n + " but received " + w(t)), !1)
                        },
                        k = function(t) {
                            var e = w(t);
                            if ("object" !== e) return I.error("Error: invalid properties format. Expecting Javascript object, received " + e + ", ignoring"), {};
                            if (Object.keys(t).length > y.MAX_PROPERTY_KEYS) return I.error("Error: too many properties (more than 1000), ignoring"), {};
                            var n = {};
                            for (var r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    var i = r,
                                        o = w(i);
                                    "string" !== o && (i = String(i), I.warn("WARNING: Non-string property key, received type " + o + ', coercing to string "' + i + '"'));
                                    var a = N(i, t[r]);
                                    null !== a && (n[i] = a)
                                }
                            return n
                        },
                        A = ["nan", "function", "arguments", "regexp", "element"],
                        N = function t(e, n) {
                            var r = w(n);
                            if (-1 !== A.indexOf(r)) I.warn('WARNING: Property key "' + e + '" with invalid value type ' + r + ", ignoring"), n = null;
                            else if ("undefined" === r) n = null;
                            else if ("error" === r) n = String(n), I.warn('WARNING: Property key "' + e + '" with value type error, coercing to ' + n);
                            else if ("array" === r) {
                                for (var i = [], o = 0; o < n.length; o++) {
                                    var a = n[o],
                                        s = w(a);
                                    "array" !== s ? "object" === s ? i.push(k(a)) : i.push(t(e, a)) : I.warn("WARNING: Cannot have " + s + " nested in an array property value, skipping")
                                }
                                n = i
                            } else "object" === r && (n = k(n));
                            return n
                        },
                        C = function(t, e) {
                            var n = w(e);
                            if ("string" === n) return e;
                            if ("date" === n || "number" === n || "boolean" === n) return e = String(e), I.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + e + '"'), e;
                            if ("array" === n) {
                                for (var r = [], i = 0; i < e.length; i++) {
                                    var o = e[i],
                                        a = w(o);
                                    "array" !== a && "object" !== a ? "string" === a ? r.push(o) : "date" !== a && "number" !== a && "boolean" !== a || (o = String(o), I.warn("WARNING: Non-string groupName, received type " + a + ', coercing to string "' + o + '"'), r.push(o)) : I.warn("WARNING: Skipping nested " + a + " in array groupName")
                                }
                                return r
                            }
                            I.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                        },
                        M = function(t) {
                            Object.prototype.hasOwnProperty.call(E, t) && (x = E[t])
                        },
                        R = I,
                        q = function(t) {
                            return !t || 0 === t.length
                        },
                        j = function(t, e) {
                            t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                            var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                            return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                        },
                        D = function t(e) {
                            if ("array" === w(e))
                                for (var n = 0; n < e.length; n++) e[n] = t(e[n]);
                            else if ("object" === w(e))
                                for (var r in e) r in e && (e[r] = t(e[r]));
                            else e = T(e);
                            return e
                        },
                        F = function(t) {
                            var e = w(t);
                            if ("object" !== e) return I.error("Error: invalid groups format. Expecting Javascript object, received " + e + ", ignoring"), {};
                            var n = {};
                            for (var r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    var i = r,
                                        o = w(i);
                                    "string" !== o && (i = String(i), I.warn("WARNING: Non-string groupType, received type " + o + ', coercing to string "' + i + '"'));
                                    var a = C(i, t[r]);
                                    null !== a && (n[i] = a)
                                }
                            return n
                        },
                        L = P,
                        B = k,
                        U = function(t) {
                            return !(!P(t, "deviceId", "string") || t.includes(".") && (I.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(t, '"')), 1))
                        },
                        z = function(t) {
                            return !(!P(t, "transport", "string") || (t !== y.TRANSPORT_HTTP && t !== y.TRANSPORT_BEACON ? (I.error("transport value must be one of '".concat(y.TRANSPORT_BEACON, "' or '").concat(y.TRANSPORT_HTTP, "'")), 1) : t !== y.TRANSPORT_HTTP && !navigator.sendBeacon && (I.error("browser does not support sendBeacon, so transport must be HTTP"), 1)))
                        },
                        W = function() {
                            return window.location
                        },
                        G = function() {
                            for (var t = "", e = 0; e < 22; ++e) t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
                            return t
                        },
                        V = function(t) {
                            try {
                                for (var e = document.cookie.split(";"), n = null, r = 0; r < e.length; r++) {
                                    for (var i = e[r];
                                        " " === i.charAt(0);) i = i.substring(1, i.length);
                                    if (0 === i.indexOf(t)) {
                                        n = i.substring(t.length, i.length);
                                        break
                                    }
                                }
                                return n
                            } catch (t) {
                                return null
                            }
                        },
                        K = function(t, e, n) {
                            var r = null !== e ? n.expirationDays : -1;
                            if (r) {
                                var i = new Date;
                                i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3), r = i
                            }
                            var o = t + "=" + e;
                            r && (o += "; expires=" + r.toUTCString()), o += "; path=/", n.domain && (o += "; domain=" + n.domain), n.secure && (o += "; Secure"), n.sameSite && (o += "; SameSite=" + n.sameSite), document.cookie = o
                        },
                        H = function() {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = e.split(".")[y.LAST_EVENT_TIME_INDEX];
                            return n && (t = parseInt(n, 32)), t || (R.warn("unable to parse malformed cookie: ".concat(e)), 0)
                        },
                        X = K,
                        $ = V,
                        Y = function(t) {
                            try {
                                var e = document.cookie.split(";").map((function(t) {
                                        return t.trimStart()
                                    })),
                                    n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                        for (var u = a.value;
                                            " " === u.charAt(0);) u = u.substring(1);
                                        0 === u.indexOf(t) && n.push(u.substring(t.length))
                                    }
                                } catch (t) {
                                    i = !0, o = t
                                } finally {
                                    try {
                                        r || null == s.return || s.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            } catch (t) {
                                return []
                            }
                        },
                        Q = function(t) {
                            return o(t).sort((function(t, e) {
                                var n = H(t);
                                return H(e) - n
                            }))
                        },
                        J = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = y.COOKIE_TEST_PREFIX + G(),
                                n = !1;
                            try {
                                var r = String(new Date);
                                K(e, r, t), R.info("Testing if cookies available"), n = V(e + "=") === r
                            } catch (t) {
                                R.warn('Error thrown when checking for cookies. Reason: "'.concat(t, '"'))
                            } finally {
                                R.info("Cleaning up cookies availability test"), K(e, null, t)
                            }
                            return n
                        },
                        Z = function(t) {
                            var e = document.createElement("a");
                            return e.href = t, e.hostname || location.hostname
                        },
                        tt = function(t) {
                            for (var e = Z(t).split("."), n = [], r = "_tldtest_" + G(), i = e.length - 2; i >= 0; --i) n.push(e.slice(i).join("."));
                            for (var o = 0; o < n.length; ++o) {
                                var a = n[o],
                                    s = {
                                        domain: "." + a
                                    };
                                if (X(r, 1, s), $(r)) return X(r, null, s), a
                            }
                            return ""
                        },
                        et = {
                            expirationDays: void 0,
                            domain: void 0
                        },
                        nt = function(t) {
                            var e = "";
                            return et.domain && (e = "." === et.domain.charAt(0) ? et.domain.substring(1) : et.domain), t + e
                        },
                        rt = function(t) {
                            var e = nt(t) + "=",
                                n = $(e);
                            try {
                                if (n) return JSON.parse(_.decode(n))
                            } catch (t) {
                                return null
                            }
                            return null
                        },
                        it = function(t, e) {
                            try {
                                return X(nt(t), _.encode(JSON.stringify(e)), et), !0
                            } catch (t) {
                                return !1
                            }
                        },
                        ot = function(t) {
                            try {
                                return X(nt(t), null, et), !0
                            } catch (t) {
                                return !1
                            }
                        },
                        at = {
                            reset: function() {
                                et = {
                                    expirationDays: void 0,
                                    domain: void 0
                                }
                            },
                            options: function(t) {
                                if (0 === arguments.length) return et;
                                t = t || {}, et.expirationDays = t.expirationDays, et.secure = t.secure, et.sameSite = t.sameSite;
                                var e = q(t.domain) ? "." + tt(W().href) : t.domain,
                                    n = Math.random();
                                et.domain = e, it("amplitude_test", n);
                                var r = rt("amplitude_test");
                                return r && r === n || (e = null), ot("amplitude_test"), et.domain = e, et
                            },
                            get: rt,
                            set: it,
                            remove: ot,
                            setRaw: function(t, e) {
                                try {
                                    return X(nt(t), e, et), !0
                                } catch (t) {
                                    return !1
                                }
                            },
                            getRaw: function(t) {
                                var e = nt(t) + "=";
                                return $(e)
                            }
                        };
                    if (function() {
                            var t, e = new Date;
                            try {
                                return window.localStorage.setItem(e, e), t = window.localStorage.getItem(e) === String(e), window.localStorage.removeItem(e), t
                            } catch (t) {}
                            return !1
                        }()) S = window.localStorage;
                    else if (window.globalStorage) try {
                        S = window.globalStorage[window.location.hostname]
                    } catch (t) {} else if ("undefined" != typeof document) {
                        var st = document.createElement("div"),
                            ut = "localStorage";
                        st.style.display = "none", document.getElementsByTagName("head")[0].appendChild(st), st.addBehavior && (st.addBehavior("#default#userdata"), S = {
                            length: 0,
                            setItem: function(t, e) {
                                st.load(ut), st.getAttribute(t) || this.length++, st.setAttribute(t, e), st.save(ut)
                            },
                            getItem: function(t) {
                                return st.load(ut), st.getAttribute(t)
                            },
                            removeItem: function(t) {
                                st.load(ut), st.getAttribute(t) && this.length--, st.removeAttribute(t), st.save(ut)
                            },
                            clear: function() {
                                st.load(ut);
                                for (var t, e = 0; t = st.XMLDocument.documentElement.attributes[e++];) st.removeAttribute(t.name);
                                st.save(ut), this.length = 0
                            },
                            key: function(t) {
                                return st.load(ut), st.XMLDocument.documentElement.attributes[t]
                            }
                        }, st.load(ut), S.length = st.XMLDocument.documentElement.attributes.length)
                    }
                    S || (S = {
                        length: 0,
                        setItem: function(t, e) {},
                        getItem: function(t) {},
                        removeItem: function(t) {},
                        clear: function() {},
                        key: function(t) {}
                    });
                    var ct, lt = S,
                        ft = function() {
                            this.storage = null
                        };
                    ft.prototype.getStorage = function() {
                        if (null !== this.storage) return this.storage;
                        if (J()) this.storage = at;
                        else {
                            var t = "amp_cookiestore_";
                            this.storage = {
                                _options: {
                                    expirationDays: void 0,
                                    domain: void 0,
                                    secure: !1
                                },
                                reset: function() {
                                    this._options = {
                                        expirationDays: void 0,
                                        domain: void 0,
                                        secure: !1
                                    }
                                },
                                options: function(t) {
                                    return 0 === arguments.length ? this._options : (t = t || {}, this._options.expirationDays = t.expirationDays || this._options.expirationDays, this._options.domain = t.domain || this._options.domain || window && window.location && window.location.hostname, this._options.secure = t.secure || !1)
                                },
                                get: function(e) {
                                    try {
                                        return JSON.parse(lt.getItem(t + e))
                                    } catch (t) {}
                                    return null
                                },
                                set: function(e, n) {
                                    try {
                                        return lt.setItem(t + e, JSON.stringify(n)), !0
                                    } catch (t) {}
                                    return !1
                                },
                                remove: function(e) {
                                    try {
                                        lt.removeItem(t + e)
                                    } catch (t) {
                                        return !1
                                    }
                                }
                            }
                        }
                        return this.storage
                    };
                    var ht = (r(ct = {}, y.STORAGE_COOKIES, !0), r(ct, y.STORAGE_NONE, !0), r(ct, y.STORAGE_LOCAL, !0), r(ct, y.STORAGE_SESSION, !0), ct),
                        pt = function() {
                            function t(e) {
                                var n = e.storageKey,
                                    r = e.disableCookies,
                                    i = e.domain,
                                    o = e.secure,
                                    a = e.sameSite,
                                    s = e.expirationDays,
                                    u = e.storage;
                                (function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                })(this, t), this.storageKey = n, this.domain = i, this.secure = o, this.sameSite = a, this.expirationDays = s, this.cookieDomain = "";
                                var c = tt(W().href);
                                if (this.cookieDomain = i || (c ? "." + c : null), ht[u]) this.storage = u;
                                else {
                                    var l = r || !J({
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    });
                                    this.storage = l ? y.STORAGE_LOCAL : y.STORAGE_COOKIES
                                }
                            }
                            return n = t, (r = [{
                                key: "getCookieStorageKey",
                                value: function() {
                                    if (!this.domain) return this.storageKey;
                                    var t = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                                    return "".concat(this.storageKey).concat(t ? "_".concat(t) : "")
                                }
                            }, {
                                key: "save",
                                value: function(t) {
                                    var e = t.deviceId,
                                        n = t.userId,
                                        r = t.optOut,
                                        i = t.sessionId,
                                        o = t.lastEventTime,
                                        a = t.eventId,
                                        s = t.identifyId,
                                        u = t.sequenceNumber;
                                    if (this.storage !== y.STORAGE_NONE) {
                                        var c = [e, _.encode(n || ""), r ? "1" : "", i ? i.toString(32) : "0", o ? o.toString(32) : "0", a ? a.toString(32) : "0", s ? s.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                                        switch (this.storage) {
                                            case y.STORAGE_SESSION:
                                                window.sessionStorage && window.sessionStorage.setItem(this.storageKey, c);
                                                break;
                                            case y.STORAGE_LOCAL:
                                                lt.setItem(this.storageKey, c);
                                                break;
                                            case y.STORAGE_COOKIES:
                                                this.saveCookie(c)
                                        }
                                    }
                                }
                            }, {
                                key: "saveCookie",
                                value: function(t) {
                                    X(this.getCookieStorageKey(), t, {
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    })
                                }
                            }, {
                                key: "load",
                                value: function() {
                                    var t, e = this;
                                    if (this.storage === y.STORAGE_COOKIES) {
                                        var n = this.getCookieStorageKey() + "=",
                                            r = Y(n);
                                        if (0 === r.length || 1 === r.length) t = r[0];
                                        else {
                                            var i = Q(r)[0];
                                            r.forEach((function() {
                                                return X(e.getCookieStorageKey(), null, {})
                                            })), this.saveCookie(i), t = $(n)
                                        }
                                    }
                                    if (t || (t = lt.getItem(this.storageKey)), !t) try {
                                        t = window.sessionStorage && window.sessionStorage.getItem(this.storageKey)
                                    } catch (t) {
                                        R.info('window.sessionStorage unavailable. Reason: "'.concat(t, '"'))
                                    }
                                    if (!t) return null;
                                    var o = t.split("."),
                                        a = null;
                                    if (o[y.USER_ID_INDEX]) try {
                                        a = _.decode(o[y.USER_ID_INDEX])
                                    } catch (t) {
                                        a = null
                                    }
                                    return {
                                        deviceId: o[y.DEVICE_ID_INDEX],
                                        userId: a,
                                        optOut: "1" === o[y.OPT_OUT_INDEX],
                                        sessionId: parseInt(o[y.SESSION_ID_INDEX], 32),
                                        lastEventTime: parseInt(o[y.LAST_EVENT_TIME_INDEX], 32),
                                        eventId: parseInt(o[y.EVENT_ID_INDEX], 32),
                                        identifyId: parseInt(o[y.IDENTIFY_ID_INDEX], 32),
                                        sequenceNumber: parseInt(o[y.SEQUENCE_NUMBER_INDEX], 32)
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    var t;
                                    if (this.storage === y.STORAGE_COOKIES && (t = $(this.getCookieStorageKey() + "="), X(this.getCookieStorageKey(), null, {
                                            domain: this.cookieDomain,
                                            secure: this.secure,
                                            sameSite: this.sameSite,
                                            expirationDays: 0
                                        })), t || (t = lt.getItem(this.storageKey), lt.clear()), !t) try {
                                        t = window.sessionStorage && window.sessionStorage.getItem(this.storageKey), window.sessionStorage.clear()
                                    } catch (t) {
                                        R.info('window.sessionStorage unavailable. Reason: "'.concat(t, '"'))
                                    }
                                    return !!t
                                }
                            }]) && e(n.prototype, r), i && e(n, i), t;
                            var n, r, i
                        }(),
                        dt = "$clearAll",
                        vt = function() {
                            this.userPropertiesOperations = {}, this.properties = []
                        };
                    vt.prototype.add = function(t, e) {
                        return "number" === w(e) || "string" === w(e) ? this._addOperation("$add", t, e) : R.error("Unsupported type for value: " + w(e) + ", expecting number or string"), this
                    }, vt.prototype.append = function(t, e) {
                        return this._addOperation("$append", t, e), this
                    }, vt.prototype.clearAll = function() {
                        return Object.keys(this.userPropertiesOperations).length > 0 ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, dt) || R.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations.$clearAll = "-", this)
                    }, vt.prototype.prepend = function(t, e) {
                        return this._addOperation("$prepend", t, e), this
                    }, vt.prototype.set = function(t, e) {
                        return this._addOperation("$set", t, e), this
                    }, vt.prototype.setOnce = function(t, e) {
                        return this._addOperation("$setOnce", t, e), this
                    }, vt.prototype.unset = function(t) {
                        return this._addOperation("$unset", t, "-"), this
                    }, vt.prototype.preInsert = function(t, e) {
                        return this._addOperation("$preInsert", t, e), this
                    }, vt.prototype.postInsert = function(t, e) {
                        return this._addOperation("$postInsert", t, e), this
                    }, vt.prototype.remove = function(t, e) {
                        return this._addOperation("$remove", t, e), this
                    }, vt.prototype._addOperation = function(t, e, n) {
                        Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, dt) ? R.error("This identify already contains a $clearAll operation, skipping operation " + t) : -1 === this.properties.indexOf(e) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, t) || (this.userPropertiesOperations[t] = {}), this.userPropertiesOperations[t][e] = n, this.properties.push(e)) : R.error('User property "' + e + '" already used in this identify, skipping operation ' + t)
                    };
                    var yt = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

                    function gt(t, e) {
                        return t(e = {
                            exports: {}
                        }, e.exports), e.exports
                    }
                    var mt = gt((function(t) {
                            ! function(e) {
                                function n(t, e) {
                                    var n = (65535 & t) + (65535 & e);
                                    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
                                }

                                function r(t, e, r, i, o, a) {
                                    return n((s = n(n(e, t), n(i, a))) << (u = o) | s >>> 32 - u, r);
                                    var s, u
                                }

                                function i(t, e, n, i, o, a, s) {
                                    return r(e & n | ~e & i, t, e, o, a, s)
                                }

                                function o(t, e, n, i, o, a, s) {
                                    return r(e & i | n & ~i, t, e, o, a, s)
                                }

                                function a(t, e, n, i, o, a, s) {
                                    return r(e ^ n ^ i, t, e, o, a, s)
                                }

                                function s(t, e, n, i, o, a, s) {
                                    return r(n ^ (e | ~i), t, e, o, a, s)
                                }

                                function u(t, e) {
                                    var r, u, c, l, f;
                                    t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
                                    var h = 1732584193,
                                        p = -271733879,
                                        d = -1732584194,
                                        v = 271733878;
                                    for (r = 0; r < t.length; r += 16) u = h, c = p, l = d, f = v, h = i(h, p, d, v, t[r], 7, -680876936), v = i(v, h, p, d, t[r + 1], 12, -389564586), d = i(d, v, h, p, t[r + 2], 17, 606105819), p = i(p, d, v, h, t[r + 3], 22, -1044525330), h = i(h, p, d, v, t[r + 4], 7, -176418897), v = i(v, h, p, d, t[r + 5], 12, 1200080426), d = i(d, v, h, p, t[r + 6], 17, -1473231341), p = i(p, d, v, h, t[r + 7], 22, -45705983), h = i(h, p, d, v, t[r + 8], 7, 1770035416), v = i(v, h, p, d, t[r + 9], 12, -1958414417), d = i(d, v, h, p, t[r + 10], 17, -42063), p = i(p, d, v, h, t[r + 11], 22, -1990404162), h = i(h, p, d, v, t[r + 12], 7, 1804603682), v = i(v, h, p, d, t[r + 13], 12, -40341101), d = i(d, v, h, p, t[r + 14], 17, -1502002290), h = o(h, p = i(p, d, v, h, t[r + 15], 22, 1236535329), d, v, t[r + 1], 5, -165796510), v = o(v, h, p, d, t[r + 6], 9, -1069501632), d = o(d, v, h, p, t[r + 11], 14, 643717713), p = o(p, d, v, h, t[r], 20, -373897302), h = o(h, p, d, v, t[r + 5], 5, -701558691), v = o(v, h, p, d, t[r + 10], 9, 38016083), d = o(d, v, h, p, t[r + 15], 14, -660478335), p = o(p, d, v, h, t[r + 4], 20, -405537848), h = o(h, p, d, v, t[r + 9], 5, 568446438), v = o(v, h, p, d, t[r + 14], 9, -1019803690), d = o(d, v, h, p, t[r + 3], 14, -187363961), p = o(p, d, v, h, t[r + 8], 20, 1163531501), h = o(h, p, d, v, t[r + 13], 5, -1444681467), v = o(v, h, p, d, t[r + 2], 9, -51403784), d = o(d, v, h, p, t[r + 7], 14, 1735328473), h = a(h, p = o(p, d, v, h, t[r + 12], 20, -1926607734), d, v, t[r + 5], 4, -378558), v = a(v, h, p, d, t[r + 8], 11, -2022574463), d = a(d, v, h, p, t[r + 11], 16, 1839030562), p = a(p, d, v, h, t[r + 14], 23, -35309556), h = a(h, p, d, v, t[r + 1], 4, -1530992060), v = a(v, h, p, d, t[r + 4], 11, 1272893353), d = a(d, v, h, p, t[r + 7], 16, -155497632), p = a(p, d, v, h, t[r + 10], 23, -1094730640), h = a(h, p, d, v, t[r + 13], 4, 681279174), v = a(v, h, p, d, t[r], 11, -358537222), d = a(d, v, h, p, t[r + 3], 16, -722521979), p = a(p, d, v, h, t[r + 6], 23, 76029189), h = a(h, p, d, v, t[r + 9], 4, -640364487), v = a(v, h, p, d, t[r + 12], 11, -421815835), d = a(d, v, h, p, t[r + 15], 16, 530742520), h = s(h, p = a(p, d, v, h, t[r + 2], 23, -995338651), d, v, t[r], 6, -198630844), v = s(v, h, p, d, t[r + 7], 10, 1126891415), d = s(d, v, h, p, t[r + 14], 15, -1416354905), p = s(p, d, v, h, t[r + 5], 21, -57434055), h = s(h, p, d, v, t[r + 12], 6, 1700485571), v = s(v, h, p, d, t[r + 3], 10, -1894986606), d = s(d, v, h, p, t[r + 10], 15, -1051523), p = s(p, d, v, h, t[r + 1], 21, -2054922799), h = s(h, p, d, v, t[r + 8], 6, 1873313359), v = s(v, h, p, d, t[r + 15], 10, -30611744), d = s(d, v, h, p, t[r + 6], 15, -1560198380), p = s(p, d, v, h, t[r + 13], 21, 1309151649), h = s(h, p, d, v, t[r + 4], 6, -145523070), v = s(v, h, p, d, t[r + 11], 10, -1120210379), d = s(d, v, h, p, t[r + 2], 15, 718787259), p = s(p, d, v, h, t[r + 9], 21, -343485551), h = n(h, u), p = n(p, c), d = n(d, l), v = n(v, f);
                                    return [h, p, d, v]
                                }

                                function c(t) {
                                    var e, n = "",
                                        r = 32 * t.length;
                                    for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                                    return n
                                }

                                function l(t) {
                                    var e, n = [];
                                    for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
                                    var r = 8 * t.length;
                                    for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                                    return n
                                }

                                function f(t) {
                                    var e, n, r = "0123456789abcdef",
                                        i = "";
                                    for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), i += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
                                    return i
                                }

                                function h(t) {
                                    return unescape(encodeURIComponent(t))
                                }

                                function p(t) {
                                    return function(t) {
                                        return c(u(l(t), 8 * t.length))
                                    }(h(t))
                                }

                                function d(t, e) {
                                    return function(t, e) {
                                        var n, r, i = l(t),
                                            o = [],
                                            a = [];
                                        for (o[15] = a[15] = void 0, i.length > 16 && (i = u(i, 8 * t.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                                        return r = u(o.concat(l(e)), 512 + 8 * e.length), c(u(a.concat(r), 640))
                                    }(h(t), h(e))
                                }

                                function v(t, e, n) {
                                    return e ? n ? d(e, t) : f(d(e, t)) : n ? p(t) : f(p(t))
                                }
                                t.exports ? t.exports = v : e.md5 = v
                            }(yt)
                        })),
                        _t = Object.getOwnPropertySymbols,
                        bt = Object.prototype.hasOwnProperty,
                        wt = Object.prototype.propertyIsEnumerable;

                    function St(t) {
                        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }
                    var Et = function() {
                            try {
                                if (!Object.assign) return !1;
                                var t = new String("abc");
                                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                                for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                                if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                                        return e[t]
                                    })).join("")) return !1;
                                var r = {};
                                return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                                    r[t] = t
                                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                            } catch (t) {
                                return !1
                            }
                        }() ? Object.assign : function(t, e) {
                            for (var n, r, i = St(t), o = 1; o < arguments.length; o++) {
                                for (var a in n = Object(arguments[o])) bt.call(n, a) && (i[a] = n[a]);
                                if (_t) {
                                    r = _t(n);
                                    for (var s = 0; s < r.length; s++) wt.call(n, r[s]) && (i[r[s]] = n[r[s]])
                                }
                            }
                            return i
                        },
                        xt = "%[a-f0-9]{2}";
                    new RegExp(xt, "gi"), new RegExp("(" + xt + ")+", "gi");

                    function It(t, e) {
                        return e.encode ? e.strict ? encodeURIComponent(t).replace(/[!'()*]/g, (function(t) {
                            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                        })) : encodeURIComponent(t) : t
                    }
                    var Ot = function(t, e) {
                            !1 === (e = Et({
                                encode: !0,
                                strict: !0,
                                arrayFormat: "none"
                            }, e)).sort && (e.sort = function() {});
                            var n = function(t) {
                                switch (t.arrayFormat) {
                                    case "index":
                                        return function(e, n, r) {
                                            return null === n ? [It(e, t), "[", r, "]"].join("") : [It(e, t), "[", It(r, t), "]=", It(n, t)].join("")
                                        };
                                    case "bracket":
                                        return function(e, n) {
                                            return null === n ? It(e, t) : [It(e, t), "[]=", It(n, t)].join("")
                                        };
                                    default:
                                        return function(e, n) {
                                            return null === n ? It(e, t) : [It(e, t), "=", It(n, t)].join("")
                                        }
                                }
                            }(e);
                            return t ? Object.keys(t).sort(e.sort).map((function(r) {
                                var i = t[r];
                                if (void 0 === i) return "";
                                if (null === i) return It(r, e);
                                if (Array.isArray(i)) {
                                    var o = [];
                                    return i.slice().forEach((function(t) {
                                        void 0 !== t && o.push(n(r, t, o.length))
                                    })), o.join("&")
                                }
                                return It(r, e) + "=" + It(i, e)
                            })).filter((function(t) {
                                return t.length > 0
                            })).join("&") : ""
                        },
                        Tt = function(t, e, n) {
                            this.url = t, this.data = e || {}, this.headers = n
                        };
                    Tt.prototype.send = function(t) {
                        if (window.XDomainRequest) {
                            var e = new window.XDomainRequest;
                            e.open("POST", this.url, !0), e.onload = function() {
                                t(200, e.responseText)
                            }, e.onerror = function() {
                                "Request Entity Too Large" === e.responseText ? t(413, e.responseText) : t(500, e.responseText)
                            }, e.ontimeout = function() {}, e.onprogress = function() {}, e.send(Ot(this.data))
                        } else {
                            var n = new XMLHttpRequest;
                            n.open("POST", this.url, !0), n.onreadystatechange = function() {
                                    4 === n.readyState && t(n.status, n.responseText)
                                },
                                function(t, e) {
                                    for (var n in e) t.setRequestHeader(n, e[n])
                                }(n, this.headers), n.send(Ot(this.data))
                        }
                    };
                    var Pt = function() {
                        this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                    };
                    Pt.prototype.setProductId = function(t) {
                        return "string" !== w(t) ? R.error("Unsupported type for productId: " + w(t) + ", expecting string") : q(t) ? R.error("Invalid empty productId") : this._productId = t, this
                    }, Pt.prototype.setQuantity = function(t) {
                        return "number" !== w(t) ? R.error("Unsupported type for quantity: " + w(t) + ", expecting number") : this._quantity = parseInt(t), this
                    }, Pt.prototype.setPrice = function(t) {
                        return "number" !== w(t) ? R.error("Unsupported type for price: " + w(t) + ", expecting number") : this._price = t, this
                    }, Pt.prototype.setRevenueType = function(t) {
                        return "string" !== w(t) ? R.error("Unsupported type for revenueType: " + w(t) + ", expecting string") : this._revenueType = t, this
                    }, Pt.prototype.setEventProperties = function(t) {
                        return "object" !== w(t) ? R.error("Unsupported type for eventProperties: " + w(t) + ", expecting object") : this._properties = B(t), this
                    }, Pt.prototype._isValidRevenue = function() {
                        return "number" === w(this._price) || (R.error("Invalid revenue, need to set price field"), !1)
                    }, Pt.prototype._toJSONObject = function() {
                        var t = "object" === w(this._properties) ? this._properties : {};
                        return null !== this._productId && (t[y.REVENUE_PRODUCT_ID] = this._productId), null !== this._quantity && (t[y.REVENUE_QUANTITY] = this._quantity), null !== this._price && (t[y.REVENUE_PRICE] = this._price), null !== this._revenueType && (t[y.REVENUE_REVENUE_TYPE] = this._revenueType), t
                    };
                    var kt = gt((function(t, e) {
                            ! function(n, r) {
                                var i = "function",
                                    o = "undefined",
                                    a = "object",
                                    s = "string",
                                    u = "model",
                                    c = "name",
                                    l = "type",
                                    f = "vendor",
                                    h = "version",
                                    p = "architecture",
                                    d = "console",
                                    v = "mobile",
                                    y = "tablet",
                                    g = "smarttv",
                                    m = "wearable",
                                    _ = "embedded",
                                    b = "Amazon",
                                    w = "Apple",
                                    S = "ASUS",
                                    E = "BlackBerry",
                                    x = "Firefox",
                                    I = "Google",
                                    O = "Huawei",
                                    T = "LG",
                                    P = "Microsoft",
                                    k = "Motorola",
                                    A = "Opera",
                                    N = "Samsung",
                                    C = "Sony",
                                    M = "Xiaomi",
                                    R = "Zebra",
                                    q = function(t) {
                                        var e = {};
                                        for (var n in t) e[t[n].toUpperCase()] = t[n];
                                        return e
                                    },
                                    j = function(t, e) {
                                        return typeof t === s && -1 !== D(e).indexOf(D(t))
                                    },
                                    D = function(t) {
                                        return t.toLowerCase()
                                    },
                                    F = function(t, e) {
                                        if (typeof t === s) return t = t.replace(/^\s+|\s+$/g, ""), typeof e === o ? t : t.substring(0, 255)
                                    },
                                    L = function(t, e) {
                                        for (var n, o, s, u, c, l, f = 0; f < e.length && !c;) {
                                            var h = e[f],
                                                p = e[f + 1];
                                            for (n = o = 0; n < h.length && !c;)
                                                if (c = h[n++].exec(t))
                                                    for (s = 0; s < p.length; s++) l = c[++o], typeof(u = p[s]) === a && u.length > 0 ? 2 == u.length ? typeof u[1] == i ? this[u[0]] = u[1].call(this, l) : this[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== i || u[1].exec && u[1].test ? this[u[0]] = l ? l.replace(u[1], u[2]) : r : this[u[0]] = l ? u[1].call(this, l, u[2]) : r : 4 == u.length && (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : r) : this[u] = l || r;
                                            f += 2
                                        }
                                    },
                                    B = function(t, e) {
                                        for (var n in e)
                                            if (typeof e[n] === a && e[n].length > 0) {
                                                for (var i = 0; i < e[n].length; i++)
                                                    if (j(e[n][i], t)) return "?" === n ? r : n
                                            } else if (j(e[n], t)) return "?" === n ? r : n;
                                        return t
                                    },
                                    U = {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        10: ["NT 6.4", "NT 10.0"],
                                        RT: "ARM"
                                    },
                                    z = {
                                        browser: [
                                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                            [h, [c, "Chrome"]],
                                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                            [h, [c, "Edge"]],
                                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                            [c, h],
                                            [/opios[\/ ]+([\w\.]+)/i],
                                            [h, [c, "Opera Mini"]],
                                            [/\bopr\/([\w\.]+)/i],
                                            [h, [c, A]],
                                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                            [c, h],
                                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                            [h, [c, "UCBrowser"]],
                                            [/\bqbcore\/([\w\.]+)/i],
                                            [h, [c, "WeChat(Win) Desktop"]],
                                            [/micromessenger\/([\w\.]+)/i],
                                            [h, [c, "WeChat"]],
                                            [/konqueror\/([\w\.]+)/i],
                                            [h, [c, "Konqueror"]],
                                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                            [h, [c, "IE"]],
                                            [/yabrowser\/([\w\.]+)/i],
                                            [h, [c, "Yandex"]],
                                            [/(avast|avg)\/([\w\.]+)/i],
                                            [
                                                [c, /(.+)/, "$1 Secure Browser"], h
                                            ],
                                            [/\bfocus\/([\w\.]+)/i],
                                            [h, [c, "Firefox Focus"]],
                                            [/\bopt\/([\w\.]+)/i],
                                            [h, [c, "Opera Touch"]],
                                            [/coc_coc\w+\/([\w\.]+)/i],
                                            [h, [c, "Coc Coc"]],
                                            [/dolfin\/([\w\.]+)/i],
                                            [h, [c, "Dolphin"]],
                                            [/coast\/([\w\.]+)/i],
                                            [h, [c, "Opera Coast"]],
                                            [/miuibrowser\/([\w\.]+)/i],
                                            [h, [c, "MIUI Browser"]],
                                            [/fxios\/([-\w\.]+)/i],
                                            [h, [c, x]],
                                            [/\bqihu|(qi?ho?o?|360)browser/i],
                                            [
                                                [c, "360 Browser"]
                                            ],
                                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                            [
                                                [c, /(.+)/, "$1 Browser"], h
                                            ],
                                            [/(comodo_dragon)\/([\w\.]+)/i],
                                            [
                                                [c, /_/g, " "], h
                                            ],
                                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                            [c, h],
                                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                            [c],
                                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                            [
                                                [c, "Facebook"], h
                                            ],
                                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                            [c, h],
                                            [/\bgsa\/([\w\.]+) .*safari\//i],
                                            [h, [c, "GSA"]],
                                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                                            [h, [c, "Chrome Headless"]],
                                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                                            [
                                                [c, "Chrome WebView"], h
                                            ],
                                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                            [h, [c, "Android Browser"]],
                                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                            [c, h],
                                            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                            [h, [c, "Mobile Safari"]],
                                            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                            [h, c],
                                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                            [c, [h, B, {
                                                "1.0": "/8",
                                                1.2: "/1",
                                                1.3: "/3",
                                                "2.0": "/412",
                                                "2.0.2": "/416",
                                                "2.0.3": "/417",
                                                "2.0.4": "/419",
                                                "?": "/"
                                            }]],
                                            [/(webkit|khtml)\/([\w\.]+)/i],
                                            [c, h],
                                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                            [
                                                [c, "Netscape"], h
                                            ],
                                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                            [h, [c, "Firefox Reality"]],
                                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                            [c, h]
                                        ],
                                        cpu: [
                                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                            [
                                                [p, "amd64"]
                                            ],
                                            [/(ia32(?=;))/i],
                                            [
                                                [p, D]
                                            ],
                                            [/((?:i[346]|x)86)[;\)]/i],
                                            [
                                                [p, "ia32"]
                                            ],
                                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                            [
                                                [p, "arm64"]
                                            ],
                                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                            [
                                                [p, "armhf"]
                                            ],
                                            [/windows (ce|mobile); ppc;/i],
                                            [
                                                [p, "arm"]
                                            ],
                                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                            [
                                                [p, /ower/, "", D]
                                            ],
                                            [/(sun4\w)[;\)]/i],
                                            [
                                                [p, "sparc"]
                                            ],
                                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                            [
                                                [p, D]
                                            ]
                                        ],
                                        device: [
                                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                            [u, [f, N],
                                                [l, y]
                                            ],
                                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                            [u, [f, N],
                                                [l, v]
                                            ],
                                            [/((ipod|iphone)\d+,\d+)/i],
                                            [u, [f, w],
                                                [l, v]
                                            ],
                                            [/(ipad\d+,\d+)/i],
                                            [u, [f, w],
                                                [l, y]
                                            ],
                                            [/\((ip(?:hone|od)[\w ]*);/i],
                                            [u, [f, w],
                                                [l, v]
                                            ],
                                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                            [u, [f, w],
                                                [l, y]
                                            ],
                                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                            [u, [f, O],
                                                [l, y]
                                            ],
                                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                                            [u, [f, O],
                                                [l, v]
                                            ],
                                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                            [
                                                [u, /_/g, " "],
                                                [f, M],
                                                [l, v]
                                            ],
                                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                            [
                                                [u, /_/g, " "],
                                                [f, M],
                                                [l, y]
                                            ],
                                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                                            [u, [f, "OPPO"],
                                                [l, v]
                                            ],
                                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                            [u, [f, "Vivo"],
                                                [l, v]
                                            ],
                                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                            [u, [f, "Realme"],
                                                [l, v]
                                            ],
                                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                            [u, [f, k],
                                                [l, v]
                                            ],
                                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                            [u, [f, k],
                                                [l, y]
                                            ],
                                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                            [u, [f, T],
                                                [l, y]
                                            ],
                                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                            [u, [f, T],
                                                [l, v]
                                            ],
                                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                            [u, [f, "Lenovo"],
                                                [l, y]
                                            ],
                                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                            [
                                                [u, /_/g, " "],
                                                [f, "Nokia"],
                                                [l, v]
                                            ],
                                            [/(pixel c)\b/i],
                                            [u, [f, I],
                                                [l, y]
                                            ],
                                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                            [u, [f, I],
                                                [l, v]
                                            ],
                                            [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                            [u, [f, C],
                                                [l, v]
                                            ],
                                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                            [
                                                [u, "Xperia Tablet"],
                                                [f, C],
                                                [l, y]
                                            ],
                                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                            [u, [f, "OnePlus"],
                                                [l, v]
                                            ],
                                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                            [u, [f, b],
                                                [l, y]
                                            ],
                                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                            [
                                                [u, /(.+)/g, "Fire Phone $1"],
                                                [f, b],
                                                [l, v]
                                            ],
                                            [/(playbook);[-\w\),; ]+(rim)/i],
                                            [u, f, [l, y]],
                                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                            [u, [f, E],
                                                [l, v]
                                            ],
                                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                            [u, [f, S],
                                                [l, y]
                                            ],
                                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                            [u, [f, S],
                                                [l, v]
                                            ],
                                            [/(nexus 9)/i],
                                            [u, [f, "HTC"],
                                                [l, y]
                                            ],
                                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                                            [f, [u, /_/g, " "],
                                                [l, v]
                                            ],
                                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                            [u, [f, "Acer"],
                                                [l, y]
                                            ],
                                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                            [u, [f, "Meizu"],
                                                [l, v]
                                            ],
                                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                            [u, [f, "Sharp"],
                                                [l, v]
                                            ],
                                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                            [f, u, [l, v]],
                                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                            [f, u, [l, y]],
                                            [/(surface duo)/i],
                                            [u, [f, P],
                                                [l, y]
                                            ],
                                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                            [u, [f, "Fairphone"],
                                                [l, v]
                                            ],
                                            [/(u304aa)/i],
                                            [u, [f, "AT&T"],
                                                [l, v]
                                            ],
                                            [/\bsie-(\w*)/i],
                                            [u, [f, "Siemens"],
                                                [l, v]
                                            ],
                                            [/\b(rct\w+) b/i],
                                            [u, [f, "RCA"],
                                                [l, y]
                                            ],
                                            [/\b(venue[\d ]{2,7}) b/i],
                                            [u, [f, "Dell"],
                                                [l, y]
                                            ],
                                            [/\b(q(?:mv|ta)\w+) b/i],
                                            [u, [f, "Verizon"],
                                                [l, y]
                                            ],
                                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                            [u, [f, "Barnes & Noble"],
                                                [l, y]
                                            ],
                                            [/\b(tm\d{3}\w+) b/i],
                                            [u, [f, "NuVision"],
                                                [l, y]
                                            ],
                                            [/\b(k88) b/i],
                                            [u, [f, "ZTE"],
                                                [l, y]
                                            ],
                                            [/\b(nx\d{3}j) b/i],
                                            [u, [f, "ZTE"],
                                                [l, v]
                                            ],
                                            [/\b(gen\d{3}) b.+49h/i],
                                            [u, [f, "Swiss"],
                                                [l, v]
                                            ],
                                            [/\b(zur\d{3}) b/i],
                                            [u, [f, "Swiss"],
                                                [l, y]
                                            ],
                                            [/\b((zeki)?tb.*\b) b/i],
                                            [u, [f, "Zeki"],
                                                [l, y]
                                            ],
                                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                            [
                                                [f, "Dragon Touch"], u, [l, y]
                                            ],
                                            [/\b(ns-?\w{0,9}) b/i],
                                            [u, [f, "Insignia"],
                                                [l, y]
                                            ],
                                            [/\b((nxa|next)-?\w{0,9}) b/i],
                                            [u, [f, "NextBook"],
                                                [l, y]
                                            ],
                                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                            [
                                                [f, "Voice"], u, [l, v]
                                            ],
                                            [/\b(lvtel\-)?(v1[12]) b/i],
                                            [
                                                [f, "LvTel"], u, [l, v]
                                            ],
                                            [/\b(ph-1) /i],
                                            [u, [f, "Essential"],
                                                [l, v]
                                            ],
                                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                            [u, [f, "Envizen"],
                                                [l, y]
                                            ],
                                            [/\b(trio[-\w\. ]+) b/i],
                                            [u, [f, "MachSpeed"],
                                                [l, y]
                                            ],
                                            [/\btu_(1491) b/i],
                                            [u, [f, "Rotor"],
                                                [l, y]
                                            ],
                                            [/(shield[\w ]+) b/i],
                                            [u, [f, "Nvidia"],
                                                [l, y]
                                            ],
                                            [/(sprint) (\w+)/i],
                                            [f, u, [l, v]],
                                            [/(kin\.[onetw]{3})/i],
                                            [
                                                [u, /\./g, " "],
                                                [f, P],
                                                [l, v]
                                            ],
                                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                            [u, [f, R],
                                                [l, y]
                                            ],
                                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                            [u, [f, R],
                                                [l, v]
                                            ],
                                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                            [f, u, [l, d]],
                                            [/droid.+; (shield) bui/i],
                                            [u, [f, "Nvidia"],
                                                [l, d]
                                            ],
                                            [/(playstation [345portablevi]+)/i],
                                            [u, [f, C],
                                                [l, d]
                                            ],
                                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                            [u, [f, P],
                                                [l, d]
                                            ],
                                            [/smart-tv.+(samsung)/i],
                                            [f, [l, g]],
                                            [/hbbtv.+maple;(\d+)/i],
                                            [
                                                [u, /^/, "SmartTV"],
                                                [f, N],
                                                [l, g]
                                            ],
                                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                            [
                                                [f, T],
                                                [l, g]
                                            ],
                                            [/(apple) ?tv/i],
                                            [f, [u, "Apple TV"],
                                                [l, g]
                                            ],
                                            [/crkey/i],
                                            [
                                                [u, "Chromecast"],
                                                [f, I],
                                                [l, g]
                                            ],
                                            [/droid.+aft(\w)( bui|\))/i],
                                            [u, [f, b],
                                                [l, g]
                                            ],
                                            [/\(dtv[\);].+(aquos)/i],
                                            [u, [f, "Sharp"],
                                                [l, g]
                                            ],
                                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                            [
                                                [f, F],
                                                [u, F],
                                                [l, g]
                                            ],
                                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                            [
                                                [l, g]
                                            ],
                                            [/((pebble))app/i],
                                            [f, u, [l, m]],
                                            [/droid.+; (glass) \d/i],
                                            [u, [f, I],
                                                [l, m]
                                            ],
                                            [/droid.+; (wt63?0{2,3})\)/i],
                                            [u, [f, R],
                                                [l, m]
                                            ],
                                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                            [f, [l, _]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                            [u, [l, v]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                            [u, [l, y]],
                                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                            [
                                                [l, y]
                                            ],
                                            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                            [
                                                [l, v]
                                            ],
                                            [/(android[-\w\. ]{0,9});.+buil/i],
                                            [u, [f, "Generic"]]
                                        ],
                                        engine: [
                                            [/windows.+ edge\/([\w\.]+)/i],
                                            [h, [c, "EdgeHTML"]],
                                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                            [h, [c, "Blink"]],
                                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                            [c, h],
                                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                            [h, c]
                                        ],
                                        os: [
                                            [/microsoft (windows) (vista|xp)/i],
                                            [c, h],
                                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                            [c, [h, B, U]],
                                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                            [
                                                [c, "Windows"],
                                                [h, B, U]
                                            ],
                                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                            [
                                                [h, /_/g, "."],
                                                [c, "iOS"]
                                            ],
                                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                            [
                                                [c, "Mac OS"],
                                                [h, /_/g, "."]
                                            ],
                                            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                            [h, c],
                                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                            [c, h],
                                            [/\(bb(10);/i],
                                            [h, [c, E]],
                                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                            [h, [c, "Symbian"]],
                                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                            [h, [c, "Firefox OS"]],
                                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                            [h, [c, "webOS"]],
                                            [/crkey\/([\d\.]+)/i],
                                            [h, [c, "Chromecast"]],
                                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                                            [
                                                [c, "Chromium OS"], h
                                            ],
                                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                            [c, h],
                                            [/(sunos) ?([\w\.\d]*)/i],
                                            [
                                                [c, "Solaris"], h
                                            ],
                                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                            [c, h]
                                        ]
                                    },
                                    W = function(t, e) {
                                        if (typeof t === a && (e = t, t = r), !(this instanceof W)) return new W(t, e).getResult();
                                        var i = t || (typeof n !== o && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                                            u = e ? function(t, e) {
                                                var n = {};
                                                for (var r in t) e[r] && e[r].length % 2 == 0 ? n[r] = e[r].concat(t[r]) : n[r] = t[r];
                                                return n
                                            }(z, e) : z;
                                        return this.getBrowser = function() {
                                            var t = {};
                                            return t.name = r, t.version = r, L.call(t, i, u.browser), t.major = function(t) {
                                                return typeof t === s ? t.replace(/[^\d\.]/g, "").split(".")[0] : r
                                            }(t.version), t
                                        }, this.getCPU = function() {
                                            var t = {};
                                            return t.architecture = r, L.call(t, i, u.cpu), t
                                        }, this.getDevice = function() {
                                            var t = {};
                                            return t.vendor = r, t.model = r, t.type = r, L.call(t, i, u.device), t
                                        }, this.getEngine = function() {
                                            var t = {};
                                            return t.name = r, t.version = r, L.call(t, i, u.engine), t
                                        }, this.getOS = function() {
                                            var t = {};
                                            return t.name = r, t.version = r, L.call(t, i, u.os), t
                                        }, this.getResult = function() {
                                            return {
                                                ua: this.getUA(),
                                                browser: this.getBrowser(),
                                                engine: this.getEngine(),
                                                os: this.getOS(),
                                                device: this.getDevice(),
                                                cpu: this.getCPU()
                                            }
                                        }, this.getUA = function() {
                                            return i
                                        }, this.setUA = function(t) {
                                            return i = typeof t === s && t.length > 255 ? F(t, 255) : t, this
                                        }, this.setUA(i), this
                                    };
                                W.VERSION = "0.7.28", W.BROWSER = q([c, h, "major"]), W.CPU = q([p]), W.DEVICE = q([u, f, l, d, v, g, y, m, _]), W.ENGINE = W.OS = q([c, h]), t.exports && (e = t.exports = W), e.UAParser = W;
                                var G = typeof n !== o && (n.jQuery || n.Zepto);
                                if (G && !G.ua) {
                                    var V = new W;
                                    G.ua = V.getResult(), G.ua.get = function() {
                                        return V.getUA()
                                    }, G.ua.set = function(t) {
                                        V.setUA(t);
                                        var e = V.getResult();
                                        for (var n in e) G.ua[n] = e[n]
                                    }
                                }
                            }("object" == typeof window ? window : yt)
                        })),
                        At = (kt.UAParser, function t(e) {
                            return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t)
                        }),
                        Nt = "8.8.0",
                        Ct = {
                            apiEndpoint: "api.amplitude.com",
                            batchEvents: !1,
                            cookieExpiration: 365,
                            cookieName: "amplitude_id",
                            sameSiteCookie: "Lax",
                            cookieForceUpgrade: !1,
                            deferInitialization: !1,
                            disableCookies: !1,
                            deviceIdFromUrlParam: !1,
                            domain: "",
                            eventUploadPeriodMillis: 3e4,
                            eventUploadThreshold: 30,
                            forceHttps: !0,
                            includeFbclid: !1,
                            includeGclid: !1,
                            includeReferrer: !1,
                            includeUtm: !1,
                            language: navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || "",
                            logLevel: "WARN",
                            logAttributionCapturedEvent: !1,
                            optOut: !1,
                            onError: function() {},
                            onExitPage: function() {},
                            plan: {
                                branch: "",
                                source: "",
                                version: ""
                            },
                            platform: "Web",
                            savedMaxCount: 1e3,
                            saveEvents: !0,
                            saveParamsReferrerOncePerSession: !0,
                            secureCookie: !1,
                            sessionTimeout: 18e5,
                            storage: y.STORAGE_DEFAULT,
                            trackingOptions: {
                                city: !0,
                                country: !0,
                                carrier: !0,
                                device_manufacturer: !0,
                                device_model: !0,
                                dma: !0,
                                ip_address: !0,
                                language: !0,
                                os_name: !0,
                                os_version: !0,
                                platform: !0,
                                region: !0,
                                version_name: !0
                            },
                            transport: y.TRANSPORT_HTTP,
                            unsetParamsReferrerOnNewSession: !1,
                            unsentKey: "amplitude_unsent",
                            unsentIdentifyKey: "amplitude_unsent_identify",
                            uploadBatchSize: 100,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Cross-Origin-Resource-Policy": "cross-origin"
                            }
                        },
                        Mt = function(t) {
                            l() || R.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = q(t) ? y.DEFAULT_INSTANCE : t.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new kt(navigator.userAgent).getResult(), this.options = i({}, Ct, {
                                trackingOptions: i({}, Ct.trackingOptions)
                            }), this.cookieStorage = (new ft).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInit = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._userAgent = navigator && navigator.userAgent || null
                        };
                    Mt.prototype.Identify = vt, Mt.prototype.Revenue = Pt, Mt.prototype.init = function(t, e, n, r) {
                        var i = this;
                        if ("string" !== w(t) || q(t)) R.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                        else try {
                            qt(this.options, n), l() && void 0 !== window.Prototype && Array.prototype.toJSON && (function() {
                                var t;
                                if (l()) {
                                    var e = window,
                                        n = Array;
                                    if (void 0 !== e.Prototype && void 0 !== (null === (t = n.prototype) || void 0 === t ? void 0 : t.toJSON)) return delete n.prototype.toJSON, !0
                                }
                            }(), R.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== Ct.cookieName && R.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.apiKey = t, this._storageSuffix = "_" + t + (this._instanceName === y.DEFAULT_INSTANCE ? "" : "_" + this._instanceName), this._storageSuffixV5 = t.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = y.COOKIE_PREFIX + "_" + this._storageSuffixV5, this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie
                            }), this._metadataStorage = new pt({
                                storageKey: this._cookieName,
                                disableCookies: this.options.disableCookies,
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie,
                                storage: this.options.storage
                            });
                            var o = !!this.cookieStorage.get(this._oldCookiename),
                                a = !!this._metadataStorage.load();
                            this._useOldCookie = !a && o && !this.options.cookieForceUpgrade;
                            var s = a || o;
                            if (this.options.domain = this.cookieStorage.options().domain, this.options.deferInitialization && !s) return void this._deferInitialization(t, e, n, r);
                            "string" === w(this.options.logLevel) && M(this.options.logLevel);
                            var u = Gt(this);
                            this._apiPropertiesTrackingOptions = Object.keys(u).length > 0 ? {
                                tracking_options: u
                            } : {}, this.options.cookieForceUpgrade && o && (a || Dt(this), this.cookieStorage.remove(this._oldCookiename)), jt(this), this._pendingReadStorage = !0;
                            this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map((function(t) {
                                    return {
                                        event: t
                                    }
                                })).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map((function(t) {
                                    return {
                                        event: t
                                    }
                                })).concat(this._unsentIdentifys)),
                                function(t) {
                                    n && n.deviceId && !U(n.deviceId) && (R.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(n.deviceId, '"')), delete n.deviceId), i.options.deviceId = i._getInitialDeviceId(n && n.deviceId, t), i.options.userId = "string" === w(e) && !q(e) && e || "number" === w(e) && e.toString() || i.options.userId || null;
                                    var r = (new Date).getTime();
                                    (!i._sessionId || !i._lastEventTime || r - i._lastEventTime > i.options.sessionTimeout) && (i.options.unsetParamsReferrerOnNewSession && i._unsetUTMParams(), i._newSession = !0, i._sessionId = r, i.options.saveParamsReferrerOncePerSession && i._trackParamsAndReferrer()), i.options.saveParamsReferrerOncePerSession || i._trackParamsAndReferrer(), i.options.saveEvents && (Rt(i._unsentEvents), Rt(i._unsentIdentifys)), i._lastEventTime = r, Lt(i), i._pendingReadStorage = !1, i._sendEventsIfReady();
                                    for (var o = 0; o < i._onInit.length; o++) i._onInit[o](i);
                                    i._onInit = [], i._isInitialized = !0
                                }(), this.runQueuedFunctions(), "function" === w(r) && r(this);
                            var c = this.options.onExitPage;
                            if ("function" === w(c) && !this.pageHandlersAdded) {
                                this.pageHandlersAdded = !0;
                                window.addEventListener("pagehide", (function() {
                                    var t;
                                    t = i.options.transport, i.setTransport(y.TRANSPORT_BEACON), c(), i.setTransport(t)
                                }), !1)
                            }
                        } catch (t) {
                            R.error(t), "function" === w(n.onError) && n.onError(t)
                        }
                    }, Mt.prototype.deleteLowerLevelDomainCookies = function() {
                        var t = Z(),
                            e = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
                        if (e && t !== e && new RegExp(e + "$").test(t)) {
                            for (var n = t.split("."), r = e.split("."), i = n.length; i > r.length; --i) {
                                var o = n.slice(n.length - i).join(".");
                                X(this._cookieName, null, {
                                    domain: "." + o
                                })
                            }
                            X(this._cookieName, null, {})
                        }
                    }, Mt.prototype._getInitialDeviceId = function(t, e) {
                        if (t) return t;
                        if (this.options.deviceIdFromUrlParam) {
                            var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
                            if (n) return n
                        }
                        return this.options.deviceId ? this.options.deviceId : e || G()
                    };
                    var Rt = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e].event.user_properties,
                                r = t[e].event.event_properties,
                                i = t[e].event.groups;
                            t[e].event.user_properties = B(n), t[e].event.event_properties = B(r), t[e].event.groups = F(i)
                        }
                    };
                    Mt.prototype._trackParamsAndReferrer = function() {
                        var t, e, n, r;
                        if (this.options.includeUtm && (t = this._initUtmData()), this.options.includeReferrer && (e = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (r = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent) {
                            var o = i({}, t, e, n, r);
                            Object.keys(o).length > 0 && this.logEvent(y.ATTRIBUTION_EVENT, o)
                        }
                    };
                    var qt = function t(e, n) {
                        if ("object" === w(n)) {
                            var r = new Set(["headers"]),
                                o = function(r) {
                                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                                        var i = n[r],
                                            o = w(e[r]);
                                        ("transport" !== r || z(i)) && L(i, r + " option", o) && ("boolean" === o ? e[r] = !!i : "string" === o && !q(i) || "number" === o && i > 0 || "function" === o ? e[r] = i : "object" === o && t(e[r], i))
                                    }
                                };
                            for (var a in n) r.has(a) ? e[a] = i({}, e[a], n[a]) : Object.prototype.hasOwnProperty.call(n, a) && o(a)
                        }
                    };
                    Mt.prototype.runQueuedFunctions = function() {
                        var t = this._q;
                        this._q = [];
                        for (var e = 0; e < t.length; e++) {
                            var n = this[t[e][0]];
                            "function" === w(n) && n.apply(this, t[e].slice(1))
                        }
                    }, Mt.prototype._apiKeySet = function(t) {
                        return !q(this.options.apiKey) || (R.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + t), !1)
                    }, Mt.prototype._loadSavedUnsentEvents = function(t) {
                        var e = this._getFromStorage(lt, t),
                            n = this._parseSavedUnsentEventsString(e, t);
                        return this._setInStorage(lt, t, JSON.stringify(n)), n
                    }, Mt.prototype._parseSavedUnsentEventsString = function(t, e) {
                        if (q(t)) return [];
                        if ("string" === w(t)) try {
                            var n = JSON.parse(t);
                            if ("array" === w(n)) return n
                        } catch (t) {}
                        return R.error("Unable to load " + e + " events. Restart with a new empty queue."), []
                    }, Mt.prototype.isNewSession = function() {
                        return this._newSession
                    }, Mt.prototype.onInit = function(t) {
                        this._isInitialized ? t(this) : this._onInit.push(t)
                    }, Mt.prototype.getSessionId = function() {
                        return this._sessionId
                    }, Mt.prototype.nextEventId = function() {
                        return this._eventId++, this._eventId
                    }, Mt.prototype.nextIdentifyId = function() {
                        return this._identifyId++, this._identifyId
                    }, Mt.prototype.nextSequenceNumber = function() {
                        return this._sequenceNumber++, this._sequenceNumber
                    }, Mt.prototype._unsentCount = function() {
                        return this._unsentEvents.length + this._unsentIdentifys.length
                    }, Mt.prototype._sendEventsIfReady = function() {
                        return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === y.TRANSPORT_BEACON ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                            this._updateScheduled = !1, this.sendEvents()
                        }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(), !0))
                    }, Mt.prototype.clearStorage = function() {
                        return this._metadataStorage.clear()
                    }, Mt.prototype._getFromStorage = function(t, e) {
                        return t.getItem(e + this._storageSuffix)
                    }, Mt.prototype._setInStorage = function(t, e, n) {
                        t.setItem(e + this._storageSuffix, n)
                    };
                    var jt = function(t) {
                            if (t._useOldCookie) {
                                var e = t.cookieStorage.get(t._oldCookiename);
                                "object" !== w(e) || Ft(t, e)
                            } else {
                                var n = t._metadataStorage.load();
                                "object" === w(n) && Ft(t, n)
                            }
                        },
                        Dt = function(t) {
                            var e = t.cookieStorage.get(t._oldCookiename);
                            "object" === w(e) && (Ft(t, e), Lt(t))
                        },
                        Ft = function(t, e) {
                            e.deviceId && (t.options.deviceId = e.deviceId), e.userId && (t.options.userId = e.userId), null !== e.optOut && void 0 !== e.optOut && !1 !== e.optOut && (t.options.optOut = e.optOut), e.sessionId && (t._sessionId = parseInt(e.sessionId, 10)), e.lastEventTime && (t._lastEventTime = parseInt(e.lastEventTime, 10)), e.eventId && (t._eventId = parseInt(e.eventId, 10)), e.identifyId && (t._identifyId = parseInt(e.identifyId, 10)), e.sequenceNumber && (t._sequenceNumber = parseInt(e.sequenceNumber, 10))
                        },
                        Lt = function(t) {
                            var e = {
                                deviceId: t.options.deviceId,
                                userId: t.options.userId,
                                optOut: t.options.optOut,
                                sessionId: t._sessionId,
                                lastEventTime: t._lastEventTime,
                                eventId: t._eventId,
                                identifyId: t._identifyId,
                                sequenceNumber: t._sequenceNumber
                            };
                            t._useOldCookie ? t.cookieStorage.set(t.options.cookieName + t._storageSuffix, e) : t._metadataStorage.save(e)
                        };
                    Mt.prototype._initUtmData = function(t, e) {
                        t = t || this._getUrlParams(), e = e || this.cookieStorage.get("__utmz");
                        var n, r, i, o, a, s, u, c, l, f, h, p = (r = t, i = (n = e) ? "?" + n.split(".").slice(-1)[0].replace(/\|/g, "&") : "", o = function(t, e, n, r) {
                            return j(t, e) || j(n, r)
                        }, a = o(y.UTM_SOURCE, r, "utmcsr", i), s = o(y.UTM_MEDIUM, r, "utmcmd", i), u = o(y.UTM_CAMPAIGN, r, "utmccn", i), c = o(y.UTM_TERM, r, "utmctr", i), l = o(y.UTM_CONTENT, r, "utmcct", i), f = {}, (h = function(t, e) {
                            q(e) || (f[t] = e)
                        })(y.UTM_SOURCE, a), h(y.UTM_MEDIUM, s), h(y.UTM_CAMPAIGN, u), h(y.UTM_TERM, c), h(y.UTM_CONTENT, l), f);
                        return Bt(this, p), p
                    }, Mt.prototype._unsetUTMParams = function() {
                        var t = new vt;
                        t.unset(y.REFERRER), t.unset(y.UTM_SOURCE), t.unset(y.UTM_MEDIUM), t.unset(y.UTM_CAMPAIGN), t.unset(y.UTM_TERM), t.unset(y.UTM_CONTENT), this.identify(t)
                    };
                    var Bt = function(t, e) {
                        if ("object" === w(e) && 0 !== Object.keys(e).length) {
                            var n = new vt;
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n.setOnce("initial_" + r, e[r]), n.set(r, e[r]));
                            t.identify(n)
                        }
                    };
                    Mt.prototype._getReferrer = function() {
                        return document.referrer
                    }, Mt.prototype._getUrlParams = function() {
                        return location.search
                    }, Mt.prototype._saveGclid = function(t) {
                        var e = j("gclid", t);
                        if (!q(e)) {
                            var n = {
                                gclid: e
                            };
                            return Bt(this, n), n
                        }
                    }, Mt.prototype._saveFbclid = function(t) {
                        var e = j("fbclid", t);
                        if (!q(e)) {
                            var n = {
                                fbclid: e
                            };
                            return Bt(this, n), n
                        }
                    }, Mt.prototype._getDeviceIdFromUrlParam = function(t) {
                        return j(y.AMP_DEVICE_ID_PARAM, t)
                    }, Mt.prototype._getReferringDomain = function(t) {
                        if (q(t)) return null;
                        var e = t.split("/");
                        return e.length >= 3 ? e[2] : null
                    }, Mt.prototype._saveReferrer = function(t) {
                        if (!q(t)) {
                            var e = {
                                referrer: t,
                                referring_domain: this._getReferringDomain(t)
                            };
                            return Bt(this, e), e
                        }
                    }, Mt.prototype.saveEvents = function() {
                        try {
                            var t = JSON.stringify(this._unsentEvents.map((function(t) {
                                return t.event
                            })));
                            this._setInStorage(lt, this.options.unsentKey, t)
                        } catch (t) {}
                        try {
                            var e = JSON.stringify(this._unsentIdentifys.map((function(t) {
                                return t.event
                            })));
                            this._setInStorage(lt, this.options.unsentIdentifyKey, e)
                        } catch (t) {}
                    }, Mt.prototype.setDomain = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (L(t, "domain", "string")) try {
                            this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                secure: this.options.secureCookie,
                                domain: t,
                                sameSite: this.options.sameSiteCookie
                            }), this.options.domain = this.cookieStorage.options().domain, jt(this), Lt(this)
                        } catch (t) {
                            R.error(t)
                        }
                    }, Mt.prototype.setUserId = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                        try {
                            this.options.userId = null != t && "" + t || null, Lt(this)
                        } catch (t) {
                            R.error(t)
                        }
                    }, Mt.prototype.setGroup = function(t, e) {
                        if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setGroup()") && L(t, "groupType", "string") && !q(t)) {
                            var n = {};
                            n[t] = e;
                            var r = (new vt).set(t, e);
                            this._logEvent(y.IDENTIFY_EVENT, null, null, r.userPropertiesOperations, n, null, null, null)
                        }
                    }, Mt.prototype.setOptOut = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (L(t, "enable", "boolean")) try {
                            this.options.optOut = t, Lt(this)
                        } catch (t) {
                            R.error(t)
                        }
                    }, Mt.prototype.setSessionId = function(t) {
                        if (L(t, "sessionId", "number")) try {
                            this._sessionId = t, Lt(this)
                        } catch (t) {
                            R.error(t)
                        }
                    }, Mt.prototype.resetSessionId = function() {
                        this.setSessionId((new Date).getTime())
                    }, Mt.prototype.regenerateDeviceId = function() {
                        if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        this.setDeviceId(G())
                    }, Mt.prototype.setDeviceId = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (U(t)) try {
                            q(t) || (this.options.deviceId = "" + t, Lt(this))
                        } catch (t) {
                            R.error(t)
                        }
                    }, Mt.prototype.setTransport = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
                        z(t) && (this.options.transport = t)
                    }, Mt.prototype.setUserProperties = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setUserProperties()") && L(t, "userProperties", "object")) {
                            var e = D(B(t));
                            if (0 !== Object.keys(e).length) {
                                var n = new vt;
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.set(r, e[r]);
                                this.identify(n)
                            }
                        }
                    }, Mt.prototype.clearUserProperties = function() {
                        if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("clearUserProperties()")) {
                            var t = new vt;
                            t.clearAll(), this.identify(t)
                        }
                    };
                    var Ut = function(t, e) {
                        for (var n = 0; n < e._q.length; n++) {
                            var r = t[e._q[n][0]];
                            "function" === w(r) && r.apply(t, e._q[n].slice(1))
                        }
                        return t
                    };
                    Mt.prototype.identify = function(t, e, n) {
                        if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("identify()"))
                            if ("object" === w(t) && Object.prototype.hasOwnProperty.call(t, "_q") && (t = Ut(new vt, t)), t instanceof vt) {
                                if (Object.keys(t.userPropertiesOperations).length > 0) return this._logEvent(y.IDENTIFY_EVENT, null, null, t.userPropertiesOperations, null, null, null, e, n);
                                Kt(e, n, 0, "No request sent", {
                                    reason: "No user property operations"
                                })
                            } else R.error("Invalid identify input type. Expected Identify object but saw " + w(t)), Kt(e, n, 0, "No request sent", {
                                reason: "Invalid identify input type"
                            });
                        else Kt(e, n, 0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, Mt.prototype.groupIdentify = function(t, e, n, i, o) {
                        if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("groupIdentify()"))
                            if (L(t, "group_type", "string") && !q(t))
                                if (null != e)
                                    if ("object" === w(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = Ut(new vt, n)), n instanceof vt) {
                                        if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(y.GROUP_IDENTIFY_EVENT, null, null, null, r({}, t, e), n.userPropertiesOperations, null, i, o);
                                        Kt(i, o, 0, "No request sent", {
                                            reason: "No group property operations"
                                        })
                                    } else R.error("Invalid identify input type. Expected Identify object but saw " + w(n)), Kt(i, o, 0, "No request sent", {
                                        reason: "Invalid identify input type"
                                    });
                        else Kt(i, o, 0, "No request sent", {
                            reason: "Invalid group name"
                        });
                        else Kt(i, o, 0, "No request sent", {
                            reason: "Invalid group type"
                        });
                        else Kt(i, o, 0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, Mt.prototype.setVersionName = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                        L(t, "versionName", "string") && (this.options.versionName = t)
                    }, Mt.prototype._logEvent = function(t, e, n, r, o, a, s, u, c) {
                        if (jt(this), t)
                            if (this.options.optOut) Kt(u, c, 0, "No request sent", {
                                reason: "optOut is set to true"
                            });
                            else try {
                                var l;
                                l = t === y.IDENTIFY_EVENT || t === y.GROUP_IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId();
                                var f = this.nextSequenceNumber(),
                                    h = "number" === w(s) ? s : (new Date).getTime();
                                (!this._sessionId || !this._lastEventTime || h - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = h), this._lastEventTime = h, Lt(this);
                                var p = this._ua.browser.name,
                                    d = this._ua.browser.major,
                                    v = this._ua.device.model || this._ua.os.name,
                                    g = this._ua.device.vendor;
                                r = r || {};
                                var m = i({}, this._apiPropertiesTrackingOptions);
                                n = i({}, n || {}, m), e = e || {}, o = o || {}, a = a || {};
                                var _ = {
                                    device_id: this.options.deviceId,
                                    user_id: this.options.userId,
                                    timestamp: h,
                                    event_id: l,
                                    session_id: this._sessionId || -1,
                                    event_type: t,
                                    version_name: this.options.versionName || null,
                                    platform: Wt(this, "platform") ? this.options.platform : null,
                                    os_name: Wt(this, "os_name") && p || null,
                                    os_version: Wt(this, "os_version") && d || null,
                                    device_model: Wt(this, "device_model") && v || null,
                                    device_manufacturer: Wt(this, "device_manufacturer") && g || null,
                                    language: Wt(this, "language") ? this.options.language : null,
                                    api_properties: n,
                                    event_properties: D(B(e)),
                                    user_properties: D(B(r)),
                                    uuid: At(),
                                    library: {
                                        name: "amplitude-js",
                                        version: Nt
                                    },
                                    sequence_number: f,
                                    groups: D(F(o)),
                                    group_properties: D(B(a)),
                                    user_agent: this._userAgent
                                };
                                return zt(this) && (_.plan = {
                                    branch: this.options.plan.branch || void 0,
                                    source: this.options.plan.source || void 0,
                                    version: this.options.plan.version || void 0
                                }), t === y.IDENTIFY_EVENT || t === y.GROUP_IDENTIFY_EVENT ? (this._unsentIdentifys.push({
                                    event: _,
                                    callback: u,
                                    errorCallback: c
                                }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                                    event: _,
                                    callback: u,
                                    errorCallback: c
                                }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), l
                            } catch (t) {
                                R.error(t)
                            } else Kt(u, c, 0, "No request sent", {
                                reason: "Missing eventType"
                            })
                    };
                    var zt = function(t) {
                            return t.options.plan && (t.options.plan.source || t.options.plan.branch || t.options.plan.version)
                        },
                        Wt = function(t, e) {
                            return !!t.options.trackingOptions[e]
                        },
                        Gt = function(t) {
                            for (var e = ["city", "country", "dma", "ip_address", "region"], n = {}, r = 0; r < e.length; r++) {
                                var i = e[r];
                                Wt(t, i) || (n[i] = !1)
                            }
                            return n
                        };
                    Mt.prototype._limitEventsQueued = function(t) {
                        t.length > this.options.savedMaxCount && t.splice(0, t.length - this.options.savedMaxCount).forEach((function(t) {
                            Kt(t.callback, t.errorCallback, 0, "No request sent", {
                                reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
                            })
                        }))
                    }, Mt.prototype.logEvent = function(t, e, n, r) {
                        return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(t, e, null, n, r)
                    }, Mt.prototype.logEventWithTimestamp = function(t, e, n, r, i) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? L(t, "eventType", "string") ? q(t) ? (Kt(r, i, 0, "No request sent", {
                            reason: "Missing eventType"
                        }), -1) : this._logEvent(t, e, null, null, null, null, n, r, i) : (Kt(r, i, 0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : (Kt(r, i, 0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    }, Mt.prototype.logEventWithGroups = function(t, e, n, r, i) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? L(t, "eventType", "string") ? this._logEvent(t, e, null, null, n, null, null, r, i) : (Kt(event.callback, event.errorCallback, 0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : (Kt(event.callback, event.errorCallback, 0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    };
                    var Vt = function(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        },
                        Kt = function(t, e, n, r, i) {
                            "function" === w(t) && t(n, r, i), "function" === w(e) && e(n, r, i)
                        };
                    Mt.prototype.logRevenueV2 = function(t) {
                        if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("logRevenueV2()"))
                            if ("object" === w(t) && Object.prototype.hasOwnProperty.call(t, "_q") && (t = Ut(new Pt, t)), t instanceof Pt) {
                                if (t && t._isValidRevenue()) return this.logEvent(y.REVENUE_EVENT, t._toJSONObject())
                            } else R.error("Invalid revenue input type. Expected Revenue object but saw " + w(t))
                    }, Mt.prototype.logRevenue = function(t, e, n) {
                        return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && Vt(t) && (void 0 === e || Vt(e)) ? this._logEvent(y.REVENUE_EVENT, {}, {
                            productId: n,
                            special: "revenue_amount",
                            quantity: e || 1,
                            price: t
                        }, null, null, null, null, null) : -1
                    }, Mt.prototype._logErrorsOnEvents = function(t, e, n, r) {
                        for (var i = ["_unsentEvents", "_unsentIdentifys"], o = 0; o < i.length; o++)
                            for (var a = i[o], s = "_unsentEvents" === a ? t : e, u = 0; u < this[a].length; u++) {
                                var c = this[a][u];
                                c.event.event_id <= s && c.errorCallback && c.errorCallback(n, r)
                            }
                    }, Mt.prototype.removeEvents = function(t, e, n, r) {
                        Ht(this, "_unsentEvents", t, n, r), Ht(this, "_unsentIdentifys", e, n, r)
                    };
                    var Ht = function(t, e, n, r, i) {
                        if (!(n < 0)) {
                            for (var o = [], a = 0; a < t[e].length; a++) {
                                var s = t[e][a];
                                s.event.event_id > n ? o.push(s) : s.callback && s.callback(r, i)
                            }
                            t[e] = o
                        }
                    };
                    Mt.prototype.sendEvents = function() {
                        if (this._apiKeySet("sendEvents()")) {
                            if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                                reason: "Opt out is set to true"
                            });
                            else if (0 !== this._unsentCount()) {
                                if (this.options.transport !== y.TRANSPORT_BEACON) {
                                    if (this._sending) return;
                                    this._sending = !0
                                }
                                var t = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                                    e = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                                    n = this._mergeEventsAndIdentifys(e),
                                    r = n.maxEventId,
                                    i = n.maxIdentifyId,
                                    o = JSON.stringify(n.eventsToSend.map((function(t) {
                                        return t.event
                                    }))),
                                    a = (new Date).getTime(),
                                    s = {
                                        client: this.options.apiKey,
                                        e: o,
                                        v: y.API_VERSION,
                                        upload_time: a,
                                        checksum: mt(y.API_VERSION + this.options.apiKey + o + a)
                                    };
                                if (this.options.transport !== y.TRANSPORT_BEACON) {
                                    var u = this;
                                    new Tt(t, s, this.options.headers).send((function(t, n) {
                                        u._sending = !1;
                                        try {
                                            200 === t && "success" === n ? (u.removeEvents(r, i, t, n), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(r, i, t, n), 413 === t && (1 === u.options.uploadBatchSize && u.removeEvents(r, i, t, n), u.options.uploadBatchSize = Math.ceil(e / 2), u.sendEvents()))
                                        } catch (t) {}
                                    }))
                                } else navigator.sendBeacon(t, new URLSearchParams(s)) ? (this.removeEvents(r, i, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(r, i, 0, "")
                            }
                        } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "API key not set"
                        })
                    }, Mt.prototype._mergeEventsAndIdentifys = function(t) {
                        for (var e = [], n = 0, r = -1, i = 0, o = -1; e.length < t;) {
                            var a = void 0,
                                s = i >= this._unsentIdentifys.length,
                                u = n >= this._unsentEvents.length;
                            if (u && s) {
                                R.error("Merging Events and Identifys, less events and identifys than expected");
                                break
                            }
                            s ? r = (a = this._unsentEvents[n++]).event.event_id : u ? o = (a = this._unsentIdentifys[i++]).event.event_id : !("sequence_number" in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[i].event.sequence_number ? r = (a = this._unsentEvents[n++]).event.event_id : o = (a = this._unsentIdentifys[i++]).event.event_id, e.push(a)
                        }
                        return {
                            eventsToSend: e,
                            maxEventId: r,
                            maxIdentifyId: o
                        }
                    }, Mt.prototype.setGlobalUserProperties = function(t) {
                        this.setUserProperties(t)
                    }, Mt.prototype.__VERSION__ = Nt, Mt.prototype._shouldDeferCall = function() {
                        return this._pendingReadStorage || this._initializationDeferred
                    }, Mt.prototype._deferInitialization = function() {
                        this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
                    }, Mt.prototype.enableTracking = function() {
                        this._initializationDeferred = !1, Lt(this), this.runQueuedFunctions()
                    };
                    var Xt = function() {
                        this.options = i({}, Ct), this._q = [], this._instances = {}
                    };
                    Xt.prototype.Identify = vt, Xt.prototype.Revenue = Pt, Xt.prototype.getInstance = function(t) {
                        t = q(t) ? y.DEFAULT_INSTANCE : t.toLowerCase();
                        var e = this._instances[t];
                        return void 0 === e && (e = new Mt(t), this._instances[t] = e), e
                    }, Xt.prototype.runQueuedFunctions = function() {
                        for (var t = 0; t < this._q.length; t++) {
                            var e = this[this._q[t][0]];
                            "function" === w(e) && e.apply(this, this._q[t].slice(1))
                        }
                        for (var n in this._q = [], this._instances) Object.prototype.hasOwnProperty.call(this._instances, n) && this._instances[n].runQueuedFunctions()
                    }, Xt.prototype.init = function(t, e, n, r) {
                        this.getInstance().init(t, e, n, function(t) {
                            this.options = t.options, "function" === w(r) && r(t)
                        }.bind(this))
                    }, Xt.prototype.isNewSession = function() {
                        return this.getInstance().isNewSession()
                    }, Xt.prototype.getSessionId = function() {
                        return this.getInstance().getSessionId()
                    }, Xt.prototype.nextEventId = function() {
                        return this.getInstance().nextEventId()
                    }, Xt.prototype.nextIdentifyId = function() {
                        return this.getInstance().nextIdentifyId()
                    }, Xt.prototype.nextSequenceNumber = function() {
                        return this.getInstance().nextSequenceNumber()
                    }, Xt.prototype.saveEvents = function() {
                        this.getInstance().saveEvents()
                    }, Xt.prototype.setDomain = function(t) {
                        this.getInstance().setDomain(t)
                    }, Xt.prototype.setUserId = function(t) {
                        this.getInstance().setUserId(t)
                    }, Xt.prototype.setGroup = function(t, e) {
                        this.getInstance().setGroup(t, e)
                    }, Xt.prototype.setOptOut = function(t) {
                        this.getInstance().setOptOut(t)
                    }, Xt.prototype.regenerateDeviceId = function() {
                        this.getInstance().regenerateDeviceId()
                    }, Xt.prototype.setDeviceId = function(t) {
                        this.getInstance().setDeviceId(t)
                    }, Xt.prototype.setUserProperties = function(t) {
                        this.getInstance().setUserProperties(t)
                    }, Xt.prototype.clearUserProperties = function() {
                        this.getInstance().clearUserProperties()
                    }, Xt.prototype.identify = function(t, e) {
                        this.getInstance().identify(t, e)
                    }, Xt.prototype.setVersionName = function(t) {
                        this.getInstance().setVersionName(t)
                    }, Xt.prototype.logEvent = function(t, e, n) {
                        return this.getInstance().logEvent(t, e, n)
                    }, Xt.prototype.logEventWithGroups = function(t, e, n, r) {
                        return this.getInstance().logEventWithGroups(t, e, n, r)
                    }, Xt.prototype.logRevenueV2 = function(t) {
                        return this.getInstance().logRevenueV2(t)
                    }, Xt.prototype.logRevenue = function(t, e, n) {
                        return this.getInstance().logRevenue(t, e, n)
                    }, Xt.prototype.removeEvents = function(t, e) {
                        this.getInstance().removeEvents(t, e)
                    }, Xt.prototype.sendEvents = function(t) {
                        this.getInstance().sendEvents(t)
                    }, Xt.prototype.setGlobalUserProperties = function(t) {
                        this.getInstance().setUserProperties(t)
                    }, Xt.prototype.__VERSION__ = Nt;
                    var $t = window.amplitude || {},
                        Yt = new Xt;
                    for (var Qt in Yt._q = $t._q || [], $t._iq) Object.prototype.hasOwnProperty.call($t._iq, Qt) && (Yt.getInstance(Qt)._q = $t._iq[Qt]._q || []);
                    return Yt.runQueuedFunctions(), Yt
                }()
            },
            525: function() {
                if (null !== document.querySelector(".quiz__datalist")) {
                    var t = ["Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akita", "Alaskan Malamute", "American Hairless Terrier", "American Staffordshire Terrier", "American Pit Bull Terrier", "Anatolian Shepherd Dog", "Australian Cattle Dog", "Australian Heeler Cross", "Australian Kelpie", "Australian Silky Terrier", "Australian Shepherd", "Australian Stumpy Tail Cattle Dog", "Australian Terrier", "Azawakh", "Basenji", "Basset Fauve de Bretagne", "Basset Hound", "Beagle", "Bearded Collie", "Bedlington Terrier", "Belgian Shepherd Dog", "Belgian Shepherd Dog (Groenendael)", "Belgian Shepherd Dog (Laekenois)", "Belgian Shepherd Dog (Malinois)", "Belgian Shepherd Dog (Tervueren)", "Bergamasco Shepherd Dog", "Bernese Mountain Dog", "Bichon Frise", "Black and Tan Coonhound", "Black Mouth Cur", "Bloodhound", "Bluetick Coonhound", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flandres", "Boxer", "Bracco Italiano", "Briard", "British Bulldog", "Brittany", "Bull Terrier", "Bull Terrier (Miniature)", "Bullmastiff", "Cairn Terrier", "Canaan Dog", "Canadian Eskimo Dog", "Cane Corso", "Caucasian Shepherd Dog", "Cavalier King Charles Spaniel", "Cavoodle", "Central Asian Shepherd Dog", "Cesky Terrier", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested Dog", "Chow Chow", "Clumber Spaniel", "Cockapoo", "Cocker Spaniel", "Coton De Tulear", "Curly Coated Retriever", "Dachshund", "Dachshund (Miniature Smooth Haired)", "Dachshund (Long-Haired)", "Dachshund (Miniature Long Haired)", "Dachshund (Miniature Wire Haired)", "Dachshund (Smooth Haired)", "Dachshund (Wire Haired)", "Danish–Swedish Farmdog", "Dalmatian", "Dandie Dinmont Terrier", "Deerhound", "Dobermann", "Dogo Argentino", "Dogue de Bordeaux", "Dutch Shepherd Dog", "English Setter", "English Springer Spaniel", "English Toy Terrier (Black and Tan)", "Estrela Mountain Dog", "Eurasier", "Field Spaniel", "Finnish Lapphund", "Finnish Spitz", "Flat Coated Retriever", "Fox Terrier", "Fox Terrier (Smooth) Fox Terrier (Wire)", "Foxhound", "French Bulldog", "German Hunting Terrier", "German Pinscher", "German Shepherd Dog", "German Shorthaired Pointer", "German Spitz", "German Spitz (Klein)", "German Spitz (Mittel)", "German Wirehaired Pointer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Grand Basset Griffon Vendeen", "Great Dane", "Greyhound", "Griffon Bruxellois", "Groodle", "Hamiltonstolete", "Harrier", "Havanese", "Hungarian Vizsla", "Hungarian Wirehaired Vizsla", "Ibizan Hound", "Icelandic Sheepdog", "Irish Red and White Setter", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Italian Spinone", "Jack Russell Terrier", "Japanese Chin", "Japanese Spitz", "Kangal Shepherd Dog", "Keeshond", "Kerry Blue Terrier", "King Charles Spaniel", "Komondor", "Kooiker", "Kuvasz", "Labradoodle", "Labrador", "Labrador Retriever", "Lagotto Romagnolo", "Lakeland Terrier", "Landseer (European Continental Type)", "Large Munsterlander", "Leonberger", "Lhasa Apso", "Lowchen", "Maltese", "Maltipoo", "Manchester Terrier", "Maremma Sheepdog", "Mastiff", "Miniature Schnauzer", "Miniature American Shepherd", "Moodle", "Morkie", "Neapolitan Mastiff", "Newfoundland", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon", "Parson Russell Terrier", "Pekingese", "Peruvian Hairless Dog", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Pinscher (Miniature)", "Pointer", "Polish Lowland Sheepdog", "Pomeranian", "Poodle (Miniature)", "Poodle (Standard)", "Poodle (Toy)", "Portuguese Podengo", "Portuguese Water Dog", "Pug", "Puli", "Pumi", "Pyrenean Mastiff", "Pyrenean Mountain Dog", "Rafeiro do Alentejo", "Rhodesian Ridgeback", "Rough Collie", "Rottweiler", "Russian Black Terrier", "Russian Toy (Long Haired, Smooth haired)", "Saluki", "Samoyed", "Schipperke", "Schnoodle", "Scottish Terrier", "Sealyham Terrier", "Shar Pei", "Shetland Sheepdog", "Shiba Inu", "Shih Tzu", "Shih-Poo", "Shikoku", "Siberian Husky", "Skye Terrier", "Sloughi", "Soft Coated Wheaten Terrier", "Spanish Mastiff", "Spanish Water Dog", "Spoodle", "St Bernard", "Staffordshire Bull Terrier", "Standard Schnauzer", "Sussex Spaniel", "Swedish Lapphund", "Swedish Vallhund", "Tatra Shepherd Dog", "Tenterfield Terrier", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Weimaraner", "Weimaraner (Long-Haired)", "Welsh Corgi", "Welsh Corgi (Cardigan)", "Welsh Corgi (Pembroke)", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier", "Whippet", "White Swiss Shepherd Dog", "Wirehaired Slovakian Pointer", "Xoloitzcuintle (intermediate, standard, miniature)", "Yorkshire Terrier", "Zuchon"],
                        e = t,
                        n = document.getElementById("dataInput"),
                        r = document.getElementById("autocomplete");

                    function i(t) {
                        o(), e.forEach((e => {
                            var n = document.createElement("li");
                            n.setAttribute("class", "breed-autocomplete__item"), n.innerHTML = "<span>".concat(e.substr(0, t.length), "</span>"), n.innerHTML += e.substr(t.length), n.innerHTML += "<input type='hidden' value='".concat(e, "'>"), r.appendChild(n)
                        })), r.classList.add("active")
                    }

                    function o() {
                        r.querySelectorAll(".breed-autocomplete__item").forEach((t => {
                            r.classList.remove("active"), t.parentNode.removeChild(t)
                        }))
                    }
                    document.addEventListener("DOMContentLoaded", (() => {
                        var a;
                        n.addEventListener("click", (t => {
                            t.stopPropagation(), i("")
                        })), document.addEventListener("click", (() => {
                            r.classList.remove("active")
                        })), r.addEventListener("click", (t => {
                            var e = document.getElementsByClassName("quiz__index-active")[0].querySelector(".quiz__btn"),
                                r = t.target || t.srcElement,
                                i = document.querySelectorAll('[name="dog-breed-radio"]');
                            n.value = r.getElementsByTagName("input")[0].value, o(), e.disabled = !1, i.forEach((t => {
                                t.checked = !1
                            }))
                        })), a = t, n.addEventListener("input", (() => {
                            var {
                                value: t
                            } = n;
                            e = a.filter((e => null !== e.toLowerCase().match(t.toLowerCase()))), i(t)
                        }))
                    }))
                }
            },
            2490: function() {
                document.addEventListener("DOMContentLoaded", (() => {
                    var t = ["gmail.com", "yahoo.com", "hotmail.com", "aol.com", "outlook.com", "comcast.net", "live.com", "mail.com", "msn.com", "att.net", "icloud.com"],
                        e = document.getElementById("email"),
                        n = document.getElementById("autoComplete");
                    e.addEventListener("input", (() => {
                        var r = e.value;
                        if (-1 === r.indexOf("@") && "" !== r) {
                            n.style.setProperty("display", "block");
                            var i = "";
                            t.forEach((t => {
                                i += "<li class='email-autocomplete__item'>".concat(r, "@").concat(t, "</li>")
                            })), n.innerHTML = i
                        } else n.style.setProperty("display", "none")
                    })), n.addEventListener("click", (t => {
                        e.value = t.target.innerHTML, n.style.setProperty("display", "none")
                    }))
                }))
            },
            6124: function(t, e, n) {
                "use strict";
                if (n(7931), n(5666), n(7182), n.g._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");

                function r(t, e, n) {
                    t[e] || Object.defineProperty(t, e, {
                        writable: !0,
                        configurable: !0,
                        value: n
                    })
                }
                n.g._babelPolyfill = !0, r(String.prototype, "padLeft", "".padStart), r(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function(t) {
                    [][t] && r(Array, t, Function.call.bind([][t]))
                }))
            },
            7182: function(t, e, n) {
                n(4530), t.exports = n(8080).RegExp.escape
            },
            8347: function(t) {
                t.exports = function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!");
                    return t
                }
            },
            8479: function(t, e, n) {
                var r = n(2380);
                t.exports = function(t, e) {
                    if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
                    return +t
                }
            },
            7296: function(t, e, n) {
                var r = n(4410)("unscopables"),
                    i = Array.prototype;
                null == i[r] && n(4461)(i, r, {}), t.exports = function(t) {
                    i[r][t] = !0
                }
            },
            990: function(t, e, n) {
                "use strict";
                var r = n(5454)(!0);
                t.exports = function(t, e, n) {
                    return e + (n ? r(t, e).length : 1)
                }
            },
            269: function(t) {
                t.exports = function(t, e, n, r) {
                    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                    return t
                }
            },
            5075: function(t, e, n) {
                var r = n(9708);
                t.exports = function(t) {
                    if (!r(t)) throw TypeError(t + " is not an object!");
                    return t
                }
            },
            3697: function(t, e, n) {
                "use strict";
                var r = n(6040),
                    i = n(9519),
                    o = n(5263);
                t.exports = [].copyWithin || function(t, e) {
                    var n = r(this),
                        a = o(n.length),
                        s = i(t, a),
                        u = i(e, a),
                        c = arguments.length > 2 ? arguments[2] : void 0,
                        l = Math.min((void 0 === c ? a : i(c, a)) - u, a - s),
                        f = 1;
                    for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0;) u in n ? n[s] = n[u] : delete n[s], s += f, u += f;
                    return n
                }
            },
            2378: function(t, e, n) {
                "use strict";
                var r = n(6040),
                    i = n(9519),
                    o = n(5263);
                t.exports = function(t) {
                    for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > s;) e[s++] = t;
                    return e
                }
            },
            9315: function(t, e, n) {
                var r = n(4036);
                t.exports = function(t, e) {
                    var n = [];
                    return r(t, !1, n.push, n, e), n
                }
            },
            4513: function(t, e, n) {
                var r = n(6282),
                    i = n(5263),
                    o = n(9519);
                t.exports = function(t) {
                    return function(e, n, a) {
                        var s, u = r(e),
                            c = i(u.length),
                            l = o(a, c);
                        if (t && n != n) {
                            for (; c > l;)
                                if ((s = u[l++]) != s) return !0
                        } else
                            for (; c > l; l++)
                                if ((t || l in u) && u[l] === n) return t || l || 0;
                        return !t && -1
                    }
                }
            },
            3635: function(t, e, n) {
                var r = n(1550),
                    i = n(5945),
                    o = n(6040),
                    a = n(5263),
                    s = n(2143);
                t.exports = function(t, e) {
                    var n = 1 == t,
                        u = 2 == t,
                        c = 3 == t,
                        l = 4 == t,
                        f = 6 == t,
                        h = 5 == t || f,
                        p = e || s;
                    return function(e, s, d) {
                        for (var v, y, g = o(e), m = i(g), _ = r(s, d, 3), b = a(m.length), w = 0, S = n ? p(e, b) : u ? p(e, 0) : void 0; b > w; w++)
                            if ((h || w in m) && (y = _(v = m[w], w, g), t))
                                if (n) S[w] = y;
                                else if (y) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return w;
                            case 2:
                                S.push(v)
                        } else if (l) return !1;
                        return f ? -1 : c || l ? l : S
                    }
                }
            },
            6574: function(t, e, n) {
                var r = n(8347),
                    i = n(6040),
                    o = n(5945),
                    a = n(5263);
                t.exports = function(t, e, n, s, u) {
                    r(e);
                    var c = i(t),
                        l = o(c),
                        f = a(c.length),
                        h = u ? f - 1 : 0,
                        p = u ? -1 : 1;
                    if (n < 2)
                        for (;;) {
                            if (h in l) {
                                s = l[h], h += p;
                                break
                            }
                            if (h += p, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
                        }
                    for (; u ? h >= 0 : f > h; h += p) h in l && (s = e(s, l[h], h, c));
                    return s
                }
            },
            920: function(t, e, n) {
                var r = n(9708),
                    i = n(3623),
                    o = n(4410)("species");
                t.exports = function(t) {
                    var e;
                    return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
                }
            },
            2143: function(t, e, n) {
                var r = n(920);
                t.exports = function(t, e) {
                    return new(r(t))(e)
                }
            },
            7240: function(t, e, n) {
                "use strict";
                var r = n(8347),
                    i = n(9708),
                    o = n(1671),
                    a = [].slice,
                    s = {},
                    u = function(t, e, n) {
                        if (!(e in s)) {
                            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                            s[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                        }
                        return s[e](t, n)
                    };
                t.exports = Function.bind || function(t) {
                    var e = r(this),
                        n = a.call(arguments, 1),
                        s = function() {
                            var r = n.concat(a.call(arguments));
                            return this instanceof s ? u(e, r.length, r) : o(e, r, t)
                        };
                    return i(e.prototype) && (s.prototype = e.prototype), s
                }
            },
            6347: function(t, e, n) {
                var r = n(2380),
                    i = n(4410)("toStringTag"),
                    o = "Arguments" == r(function() {
                        return arguments
                    }());
                t.exports = function(t) {
                    var e, n, a;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
                }
            },
            2380: function(t) {
                var e = {}.toString;
                t.exports = function(t) {
                    return e.call(t).slice(8, -1)
                }
            },
            7647: function(t, e, n) {
                "use strict";
                var r = n(4213).f,
                    i = n(6088),
                    o = n(3227),
                    a = n(1550),
                    s = n(269),
                    u = n(4036),
                    c = n(5706),
                    l = n(4257),
                    f = n(2373),
                    h = n(3144),
                    p = n(8648).fastKey,
                    d = n(1554),
                    v = h ? "_s" : "size",
                    y = function(t, e) {
                        var n, r = p(e);
                        if ("F" !== r) return t._i[r];
                        for (n = t._f; n; n = n.n)
                            if (n.k == e) return n
                    };
                t.exports = {
                    getConstructor: function(t, e, n, c) {
                        var l = t((function(t, r) {
                            s(t, l, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, null != r && u(r, n, t[c], t)
                        }));
                        return o(l.prototype, {
                            clear: function() {
                                for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                                t._f = t._l = void 0, t[v] = 0
                            },
                            delete: function(t) {
                                var n = d(this, e),
                                    r = y(n, t);
                                if (r) {
                                    var i = r.n,
                                        o = r.p;
                                    delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[v]--
                                }
                                return !!r
                            },
                            forEach: function(t) {
                                d(this, e);
                                for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                                    for (r(n.v, n.k, this); n && n.r;) n = n.p
                            },
                            has: function(t) {
                                return !!y(d(this, e), t)
                            }
                        }), h && r(l.prototype, "size", {
                            get: function() {
                                return d(this, e)[v]
                            }
                        }), l
                    },
                    def: function(t, e, n) {
                        var r, i, o = y(t, e);
                        return o ? o.v = n : (t._l = o = {
                            i: i = p(e, !0),
                            k: e,
                            v: n,
                            p: r = t._l,
                            n: void 0,
                            r: !1
                        }, t._f || (t._f = o), r && (r.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t
                    },
                    getEntry: y,
                    setStrong: function(t, e, n) {
                        c(t, e, (function(t, n) {
                            this._t = d(t, e), this._k = n, this._l = void 0
                        }), (function() {
                            for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                            return t._t && (t._l = n = n ? n.n : t._t._f) ? l(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0, l(1))
                        }), n ? "entries" : "values", !n, !0), f(e)
                    }
                }
            },
            2935: function(t, e, n) {
                var r = n(6347),
                    i = n(9315);
                t.exports = function(t) {
                    return function() {
                        if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                        return i(this)
                    }
                }
            },
            8348: function(t, e, n) {
                "use strict";
                var r = n(3227),
                    i = n(8648).getWeak,
                    o = n(5075),
                    a = n(9708),
                    s = n(269),
                    u = n(4036),
                    c = n(3635),
                    l = n(3050),
                    f = n(1554),
                    h = c(5),
                    p = c(6),
                    d = 0,
                    v = function(t) {
                        return t._l || (t._l = new y)
                    },
                    y = function() {
                        this.a = []
                    },
                    g = function(t, e) {
                        return h(t.a, (function(t) {
                            return t[0] === e
                        }))
                    };
                y.prototype = {
                    get: function(t) {
                        var e = g(this, t);
                        if (e) return e[1]
                    },
                    has: function(t) {
                        return !!g(this, t)
                    },
                    set: function(t, e) {
                        var n = g(this, t);
                        n ? n[1] = e : this.a.push([t, e])
                    },
                    delete: function(t) {
                        var e = p(this.a, (function(e) {
                            return e[0] === t
                        }));
                        return ~e && this.a.splice(e, 1), !!~e
                    }
                }, t.exports = {
                    getConstructor: function(t, e, n, o) {
                        var c = t((function(t, r) {
                            s(t, c, e, "_i"), t._t = e, t._i = d++, t._l = void 0, null != r && u(r, n, t[o], t)
                        }));
                        return r(c.prototype, {
                            delete: function(t) {
                                if (!a(t)) return !1;
                                var n = i(t);
                                return !0 === n ? v(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i]
                            },
                            has: function(t) {
                                if (!a(t)) return !1;
                                var n = i(t);
                                return !0 === n ? v(f(this, e)).has(t) : n && l(n, this._i)
                            }
                        }), c
                    },
                    def: function(t, e, n) {
                        var r = i(o(e), !0);
                        return !0 === r ? v(t).set(e, n) : r[t._i] = n, t
                    },
                    ufstore: v
                }
            },
            8107: function(t, e, n) {
                "use strict";
                var r = n(4405),
                    i = n(1693),
                    o = n(9593),
                    a = n(3227),
                    s = n(8648),
                    u = n(4036),
                    c = n(269),
                    l = n(9708),
                    f = n(496),
                    h = n(3229),
                    p = n(5572),
                    d = n(7856);
                t.exports = function(t, e, n, v, y, g) {
                    var m = r[t],
                        _ = m,
                        b = y ? "set" : "add",
                        w = _ && _.prototype,
                        S = {},
                        E = function(t) {
                            var e = w[t];
                            o(w, t, "delete" == t || "has" == t ? function(t) {
                                return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                            } : "get" == t ? function(t) {
                                return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                            } : "add" == t ? function(t) {
                                return e.call(this, 0 === t ? 0 : t), this
                            } : function(t, n) {
                                return e.call(this, 0 === t ? 0 : t, n), this
                            })
                        };
                    if ("function" == typeof _ && (g || w.forEach && !f((function() {
                            (new _).entries().next()
                        })))) {
                        var x = new _,
                            I = x[b](g ? {} : -0, 1) != x,
                            O = f((function() {
                                x.has(1)
                            })),
                            T = h((function(t) {
                                new _(t)
                            })),
                            P = !g && f((function() {
                                for (var t = new _, e = 5; e--;) t[b](e, e);
                                return !t.has(-0)
                            }));
                        T || ((_ = e((function(e, n) {
                            c(e, _, t);
                            var r = d(new m, e, _);
                            return null != n && u(n, y, r[b], r), r
                        }))).prototype = w, w.constructor = _), (O || P) && (E("delete"), E("has"), y && E("get")), (P || I) && E(b), g && w.clear && delete w.clear
                    } else _ = v.getConstructor(e, t, y, b), a(_.prototype, n), s.NEED = !0;
                    return p(_, t), S[t] = _, i(i.G + i.W + i.F * (_ != m), S), g || v.setStrong(_, t, y), _
                }
            },
            8080: function(t) {
                var e = t.exports = {
                    version: "2.6.12"
                };
                "number" == typeof __e && (__e = e)
            },
            2559: function(t, e, n) {
                "use strict";
                var r = n(4213),
                    i = n(3388);
                t.exports = function(t, e, n) {
                    e in t ? r.f(t, e, i(0, n)) : t[e] = n
                }
            },
            1550: function(t, e, n) {
                var r = n(8347);
                t.exports = function(t, e, n) {
                    if (r(t), void 0 === e) return t;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            };
                        case 2:
                            return function(n, r) {
                                return t.call(e, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return t.call(e, n, r, i)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            9496: function(t, e, n) {
                "use strict";
                var r = n(496),
                    i = Date.prototype.getTime,
                    o = Date.prototype.toISOString,
                    a = function(t) {
                        return t > 9 ? t : "0" + t
                    };
                t.exports = r((function() {
                    return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001))
                })) || !r((function() {
                    o.call(new Date(NaN))
                })) ? function() {
                    if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
                    var t = this,
                        e = t.getUTCFullYear(),
                        n = t.getUTCMilliseconds(),
                        r = e < 0 ? "-" : e > 9999 ? "+" : "";
                    return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
                } : o
            },
            2967: function(t, e, n) {
                "use strict";
                var r = n(5075),
                    i = n(3825),
                    o = "number";
                t.exports = function(t) {
                    if ("string" !== t && t !== o && "default" !== t) throw TypeError("Incorrect hint");
                    return i(r(this), t != o)
                }
            },
            1083: function(t) {
                t.exports = function(t) {
                    if (null == t) throw TypeError("Can't call method on  " + t);
                    return t
                }
            },
            3144: function(t, e, n) {
                t.exports = !n(496)((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            7339: function(t, e, n) {
                var r = n(9708),
                    i = n(4405).document,
                    o = r(i) && r(i.createElement);
                t.exports = function(t) {
                    return o ? i.createElement(t) : {}
                }
            },
            5985: function(t) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            },
            6522: function(t, e, n) {
                var r = n(1126),
                    i = n(8910),
                    o = n(2806);
                t.exports = function(t) {
                    var e = r(t),
                        n = i.f;
                    if (n)
                        for (var a, s = n(t), u = o.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
                    return e
                }
            },
            1693: function(t, e, n) {
                var r = n(4405),
                    i = n(8080),
                    o = n(4461),
                    a = n(9593),
                    s = n(1550),
                    u = function(t, e, n) {
                        var c, l, f, h, p = t & u.F,
                            d = t & u.G,
                            v = t & u.S,
                            y = t & u.P,
                            g = t & u.B,
                            m = d ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                            _ = d ? i : i[e] || (i[e] = {}),
                            b = _.prototype || (_.prototype = {});
                        for (c in d && (n = e), n) f = ((l = !p && m && void 0 !== m[c]) ? m : n)[c], h = g && l ? s(f, r) : y && "function" == typeof f ? s(Function.call, f) : f, m && a(m, c, f, t & u.U), _[c] != f && o(_, c, h), y && b[c] != f && (b[c] = f)
                    };
                r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
            },
            528: function(t, e, n) {
                var r = n(4410)("match");
                t.exports = function(t) {
                    var e = /./;
                    try {
                        "/./" [t](e)
                    } catch (n) {
                        try {
                            return e[r] = !1, !"/./" [t](e)
                        } catch (t) {}
                    }
                    return !0
                }
            },
            496: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            7925: function(t, e, n) {
                "use strict";
                n(7515);
                var r = n(9593),
                    i = n(4461),
                    o = n(496),
                    a = n(1083),
                    s = n(4410),
                    u = n(2562),
                    c = s("species"),
                    l = !o((function() {
                        var t = /./;
                        return t.exec = function() {
                            var t = [];
                            return t.groups = {
                                a: "7"
                            }, t
                        }, "7" !== "".replace(t, "$<a>")
                    })),
                    f = function() {
                        var t = /(?:)/,
                            e = t.exec;
                        t.exec = function() {
                            return e.apply(this, arguments)
                        };
                        var n = "ab".split(t);
                        return 2 === n.length && "a" === n[0] && "b" === n[1]
                    }();
                t.exports = function(t, e, n) {
                    var h = s(t),
                        p = !o((function() {
                            var e = {};
                            return e[h] = function() {
                                return 7
                            }, 7 != "" [t](e)
                        })),
                        d = p ? !o((function() {
                            var e = !1,
                                n = /a/;
                            return n.exec = function() {
                                return e = !0, null
                            }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                                return n
                            }), n[h](""), !e
                        })) : void 0;
                    if (!p || !d || "replace" === t && !l || "split" === t && !f) {
                        var v = /./ [h],
                            y = n(a, h, "" [t], (function(t, e, n, r, i) {
                                return e.exec === u ? p && !i ? {
                                    done: !0,
                                    value: v.call(e, n, r)
                                } : {
                                    done: !0,
                                    value: t.call(n, e, r)
                                } : {
                                    done: !1
                                }
                            })),
                            g = y[0],
                            m = y[1];
                        r(String.prototype, t, g), i(RegExp.prototype, h, 2 == e ? function(t, e) {
                            return m.call(t, this, e)
                        } : function(t) {
                            return m.call(t, this)
                        })
                    }
                }
            },
            5660: function(t, e, n) {
                "use strict";
                var r = n(5075);
                t.exports = function() {
                    var t = r(this),
                        e = "";
                    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
                }
            },
            4225: function(t, e, n) {
                "use strict";
                var r = n(3623),
                    i = n(9708),
                    o = n(5263),
                    a = n(1550),
                    s = n(4410)("isConcatSpreadable");
                t.exports = function t(e, n, u, c, l, f, h, p) {
                    for (var d, v, y = l, g = 0, m = !!h && a(h, p, 3); g < c;) {
                        if (g in u) {
                            if (d = m ? m(u[g], g, n) : u[g], v = !1, i(d) && (v = void 0 !== (v = d[s]) ? !!v : r(d)), v && f > 0) y = t(e, n, d, o(d.length), y, f - 1) - 1;
                            else {
                                if (y >= 9007199254740991) throw TypeError();
                                e[y] = d
                            }
                            y++
                        }
                        g++
                    }
                    return y
                }
            },
            4036: function(t, e, n) {
                var r = n(1550),
                    i = n(8226),
                    o = n(2193),
                    a = n(5075),
                    s = n(5263),
                    u = n(6882),
                    c = {},
                    l = {},
                    f = t.exports = function(t, e, n, f, h) {
                        var p, d, v, y, g = h ? function() {
                                return t
                            } : u(t),
                            m = r(n, f, e ? 2 : 1),
                            _ = 0;
                        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
                        if (o(g)) {
                            for (p = s(t.length); p > _; _++)
                                if ((y = e ? m(a(d = t[_])[0], d[1]) : m(t[_])) === c || y === l) return y
                        } else
                            for (v = g.call(t); !(d = v.next()).done;)
                                if ((y = i(v, m, d.value, e)) === c || y === l) return y
                    };
                f.BREAK = c, f.RETURN = l
            },
            9769: function(t, e, n) {
                t.exports = n(7104)("native-function-to-string", Function.toString)
            },
            4405: function(t) {
                var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = e)
            },
            3050: function(t) {
                var e = {}.hasOwnProperty;
                t.exports = function(t, n) {
                    return e.call(t, n)
                }
            },
            4461: function(t, e, n) {
                var r = n(4213),
                    i = n(3388);
                t.exports = n(3144) ? function(t, e, n) {
                    return r.f(t, e, i(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                }
            },
            7727: function(t, e, n) {
                var r = n(4405).document;
                t.exports = r && r.documentElement
            },
            748: function(t, e, n) {
                t.exports = !n(3144) && !n(496)((function() {
                    return 7 != Object.defineProperty(n(7339)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            7856: function(t, e, n) {
                var r = n(9708),
                    i = n(1794).set;
                t.exports = function(t, e, n) {
                    var o, a = e.constructor;
                    return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t
                }
            },
            1671: function(t) {
                t.exports = function(t, e, n) {
                    var r = void 0 === n;
                    switch (e.length) {
                        case 0:
                            return r ? t() : t.call(n);
                        case 1:
                            return r ? t(e[0]) : t.call(n, e[0]);
                        case 2:
                            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                        case 3:
                            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                        case 4:
                            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
                    }
                    return t.apply(n, e)
                }
            },
            5945: function(t, e, n) {
                var r = n(2380);
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == r(t) ? t.split("") : Object(t)
                }
            },
            2193: function(t, e, n) {
                var r = n(7985),
                    i = n(4410)("iterator"),
                    o = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (r.Array === t || o[i] === t)
                }
            },
            3623: function(t, e, n) {
                var r = n(2380);
                t.exports = Array.isArray || function(t) {
                    return "Array" == r(t)
                }
            },
            8645: function(t, e, n) {
                var r = n(9708),
                    i = Math.floor;
                t.exports = function(t) {
                    return !r(t) && isFinite(t) && i(t) === t
                }
            },
            9708: function(t) {
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            },
            939: function(t, e, n) {
                var r = n(9708),
                    i = n(2380),
                    o = n(4410)("match");
                t.exports = function(t) {
                    var e;
                    return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
                }
            },
            8226: function(t, e, n) {
                var r = n(5075);
                t.exports = function(t, e, n, i) {
                    try {
                        return i ? e(r(n)[0], n[1]) : e(n)
                    } catch (e) {
                        var o = t.return;
                        throw void 0 !== o && r(o.call(t)), e
                    }
                }
            },
            9614: function(t, e, n) {
                "use strict";
                var r = n(6088),
                    i = n(3388),
                    o = n(5572),
                    a = {};
                n(4461)(a, n(4410)("iterator"), (function() {
                    return this
                })), t.exports = function(t, e, n) {
                    t.prototype = r(a, {
                        next: i(1, n)
                    }), o(t, e + " Iterator")
                }
            },
            5706: function(t, e, n) {
                "use strict";
                var r = n(4925),
                    i = n(1693),
                    o = n(9593),
                    a = n(4461),
                    s = n(7985),
                    u = n(9614),
                    c = n(5572),
                    l = n(8539),
                    f = n(4410)("iterator"),
                    h = !([].keys && "next" in [].keys()),
                    p = "keys",
                    d = "values",
                    v = function() {
                        return this
                    };
                t.exports = function(t, e, n, y, g, m, _) {
                    u(n, e, y);
                    var b, w, S, E = function(t) {
                            if (!h && t in T) return T[t];
                            switch (t) {
                                case p:
                                case d:
                                    return function() {
                                        return new n(this, t)
                                    }
                            }
                            return function() {
                                return new n(this, t)
                            }
                        },
                        x = e + " Iterator",
                        I = g == d,
                        O = !1,
                        T = t.prototype,
                        P = T[f] || T["@@iterator"] || g && T[g],
                        k = P || E(g),
                        A = g ? I ? E("entries") : k : void 0,
                        N = "Array" == e && T.entries || P;
                    if (N && (S = l(N.call(new t))) !== Object.prototype && S.next && (c(S, x, !0), r || "function" == typeof S[f] || a(S, f, v)), I && P && P.name !== d && (O = !0, k = function() {
                            return P.call(this)
                        }), r && !_ || !h && !O && T[f] || a(T, f, k), s[e] = k, s[x] = v, g)
                        if (b = {
                                values: I ? k : E(d),
                                keys: m ? k : E(p),
                                entries: A
                            }, _)
                            for (w in b) w in T || o(T, w, b[w]);
                        else i(i.P + i.F * (h || O), e, b);
                    return b
                }
            },
            3229: function(t, e, n) {
                var r = n(4410)("iterator"),
                    i = !1;
                try {
                    var o = [7][r]();
                    o.return = function() {
                        i = !0
                    }, Array.from(o, (function() {
                        throw 2
                    }))
                } catch (t) {}
                t.exports = function(t, e) {
                    if (!e && !i) return !1;
                    var n = !1;
                    try {
                        var o = [7],
                            a = o[r]();
                        a.next = function() {
                            return {
                                done: n = !0
                            }
                        }, o[r] = function() {
                            return a
                        }, t(o)
                    } catch (t) {}
                    return n
                }
            },
            4257: function(t) {
                t.exports = function(t, e) {
                    return {
                        value: e,
                        done: !!t
                    }
                }
            },
            7985: function(t) {
                t.exports = {}
            },
            4925: function(t) {
                t.exports = !1
            },
            8651: function(t) {
                var e = Math.expm1;
                t.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function(t) {
                    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
                } : e
            },
            8961: function(t, e, n) {
                var r = n(9439),
                    i = Math.pow,
                    o = i(2, -52),
                    a = i(2, -23),
                    s = i(2, 127) * (2 - a),
                    u = i(2, -126);
                t.exports = Math.fround || function(t) {
                    var e, n, i = Math.abs(t),
                        c = r(t);
                    return i < u ? c * (i / u / a + 1 / o - 1 / o) * u * a : (n = (e = (1 + a / o) * i) - (e - i)) > s || n != n ? c * (1 / 0) : c * n
                }
            },
            8738: function(t) {
                t.exports = Math.log1p || function(t) {
                    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
                }
            },
            4917: function(t) {
                t.exports = Math.scale || function(t, e, n, r, i) {
                    return 0 === arguments.length || t != t || e != e || n != n || r != r || i != i ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (i - r) / (n - e) + r
                }
            },
            9439: function(t) {
                t.exports = Math.sign || function(t) {
                    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
                }
            },
            8648: function(t, e, n) {
                var r = n(7767)("meta"),
                    i = n(9708),
                    o = n(3050),
                    a = n(4213).f,
                    s = 0,
                    u = Object.isExtensible || function() {
                        return !0
                    },
                    c = !n(496)((function() {
                        return u(Object.preventExtensions({}))
                    })),
                    l = function(t) {
                        a(t, r, {
                            value: {
                                i: "O" + ++s,
                                w: {}
                            }
                        })
                    },
                    f = t.exports = {
                        KEY: r,
                        NEED: !1,
                        fastKey: function(t, e) {
                            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!o(t, r)) {
                                if (!u(t)) return "F";
                                if (!e) return "E";
                                l(t)
                            }
                            return t[r].i
                        },
                        getWeak: function(t, e) {
                            if (!o(t, r)) {
                                if (!u(t)) return !0;
                                if (!e) return !1;
                                l(t)
                            }
                            return t[r].w
                        },
                        onFreeze: function(t) {
                            return c && f.NEED && u(t) && !o(t, r) && l(t), t
                        }
                    }
            },
            380: function(t, e, n) {
                var r = n(9164),
                    i = n(1693),
                    o = n(7104)("metadata"),
                    a = o.store || (o.store = new(n(6189))),
                    s = function(t, e, n) {
                        var i = a.get(t);
                        if (!i) {
                            if (!n) return;
                            a.set(t, i = new r)
                        }
                        var o = i.get(e);
                        if (!o) {
                            if (!n) return;
                            i.set(e, o = new r)
                        }
                        return o
                    };
                t.exports = {
                    store: a,
                    map: s,
                    has: function(t, e, n) {
                        var r = s(e, n, !1);
                        return void 0 !== r && r.has(t)
                    },
                    get: function(t, e, n) {
                        var r = s(e, n, !1);
                        return void 0 === r ? void 0 : r.get(t)
                    },
                    set: function(t, e, n, r) {
                        s(n, r, !0).set(t, e)
                    },
                    keys: function(t, e) {
                        var n = s(t, e, !1),
                            r = [];
                        return n && n.forEach((function(t, e) {
                            r.push(e)
                        })), r
                    },
                    key: function(t) {
                        return void 0 === t || "symbol" == typeof t ? t : String(t)
                    },
                    exp: function(t) {
                        i(i.S, "Reflect", t)
                    }
                }
            },
            2583: function(t, e, n) {
                var r = n(4405),
                    i = n(1597).set,
                    o = r.MutationObserver || r.WebKitMutationObserver,
                    a = r.process,
                    s = r.Promise,
                    u = "process" == n(2380)(a);
                t.exports = function() {
                    var t, e, n, c = function() {
                        var r, i;
                        for (u && (r = a.domain) && r.exit(); t;) {
                            i = t.fn, t = t.next;
                            try {
                                i()
                            } catch (r) {
                                throw t ? n() : e = void 0, r
                            }
                        }
                        e = void 0, r && r.enter()
                    };
                    if (u) n = function() {
                        a.nextTick(c)
                    };
                    else if (!o || r.navigator && r.navigator.standalone)
                        if (s && s.resolve) {
                            var l = s.resolve(void 0);
                            n = function() {
                                l.then(c)
                            }
                        } else n = function() {
                            i.call(r, c)
                        };
                    else {
                        var f = !0,
                            h = document.createTextNode("");
                        new o(c).observe(h, {
                            characterData: !0
                        }), n = function() {
                            h.data = f = !f
                        }
                    }
                    return function(r) {
                        var i = {
                            fn: r,
                            next: void 0
                        };
                        e && (e.next = i), t || (t = i, n()), e = i
                    }
                }
            },
            2219: function(t, e, n) {
                "use strict";
                var r = n(8347);

                function i(t) {
                    var e, n;
                    this.promise = new t((function(t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t, n = r
                    })), this.resolve = r(e), this.reject = r(n)
                }
                t.exports.f = function(t) {
                    return new i(t)
                }
            },
            2075: function(t, e, n) {
                "use strict";
                var r = n(3144),
                    i = n(1126),
                    o = n(8910),
                    a = n(2806),
                    s = n(6040),
                    u = n(5945),
                    c = Object.assign;
                t.exports = !c || n(496)((function() {
                    var t = {},
                        e = {},
                        n = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return t[n] = 7, r.split("").forEach((function(t) {
                        e[t] = t
                    })), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
                })) ? function(t, e) {
                    for (var n = s(t), c = arguments.length, l = 1, f = o.f, h = a.f; c > l;)
                        for (var p, d = u(arguments[l++]), v = f ? i(d).concat(f(d)) : i(d), y = v.length, g = 0; y > g;) p = v[g++], r && !h.call(d, p) || (n[p] = d[p]);
                    return n
                } : c
            },
            6088: function(t, e, n) {
                var r = n(5075),
                    i = n(2390),
                    o = n(5985),
                    a = n(1145)("IE_PROTO"),
                    s = function() {},
                    u = function() {
                        var t, e = n(7339)("iframe"),
                            r = o.length;
                        for (e.style.display = "none", n(7727).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
                        return u()
                    };
                t.exports = Object.create || function(t, e) {
                    var n;
                    return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : i(n, e)
                }
            },
            4213: function(t, e, n) {
                var r = n(5075),
                    i = n(748),
                    o = n(3825),
                    a = Object.defineProperty;
                e.f = n(3144) ? Object.defineProperty : function(t, e, n) {
                    if (r(t), e = o(e, !0), r(n), i) try {
                        return a(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (t[e] = n.value), t
                }
            },
            2390: function(t, e, n) {
                var r = n(4213),
                    i = n(5075),
                    o = n(1126);
                t.exports = n(3144) ? Object.defineProperties : function(t, e) {
                    i(t);
                    for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
                    return t
                }
            },
            2296: function(t, e, n) {
                "use strict";
                t.exports = n(4925) || !n(496)((function() {
                    var t = Math.random();
                    __defineSetter__.call(null, t, (function() {})), delete n(4405)[t]
                }))
            },
            4676: function(t, e, n) {
                var r = n(2806),
                    i = n(3388),
                    o = n(6282),
                    a = n(3825),
                    s = n(3050),
                    u = n(748),
                    c = Object.getOwnPropertyDescriptor;
                e.f = n(3144) ? c : function(t, e) {
                    if (t = o(t), e = a(e, !0), u) try {
                        return c(t, e)
                    } catch (t) {}
                    if (s(t, e)) return i(!r.f.call(t, e), t[e])
                }
            },
            5469: function(t, e, n) {
                var r = n(6282),
                    i = n(7173).f,
                    o = {}.toString,
                    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                t.exports.f = function(t) {
                    return a && "[object Window]" == o.call(t) ? function(t) {
                        try {
                            return i(t)
                        } catch (t) {
                            return a.slice()
                        }
                    }(t) : i(r(t))
                }
            },
            7173: function(t, e, n) {
                var r = n(3872),
                    i = n(5985).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return r(t, i)
                }
            },
            8910: function(t, e) {
                e.f = Object.getOwnPropertySymbols
            },
            8539: function(t, e, n) {
                var r = n(3050),
                    i = n(6040),
                    o = n(1145)("IE_PROTO"),
                    a = Object.prototype;
                t.exports = Object.getPrototypeOf || function(t) {
                    return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
                }
            },
            3872: function(t, e, n) {
                var r = n(3050),
                    i = n(6282),
                    o = n(4513)(!1),
                    a = n(1145)("IE_PROTO");
                t.exports = function(t, e) {
                    var n, s = i(t),
                        u = 0,
                        c = [];
                    for (n in s) n != a && r(s, n) && c.push(n);
                    for (; e.length > u;) r(s, n = e[u++]) && (~o(c, n) || c.push(n));
                    return c
                }
            },
            1126: function(t, e, n) {
                var r = n(3872),
                    i = n(5985);
                t.exports = Object.keys || function(t) {
                    return r(t, i)
                }
            },
            2806: function(t, e) {
                e.f = {}.propertyIsEnumerable
            },
            9870: function(t, e, n) {
                var r = n(1693),
                    i = n(8080),
                    o = n(496);
                t.exports = function(t, e) {
                    var n = (i.Object || {})[t] || Object[t],
                        a = {};
                    a[t] = e(n), r(r.S + r.F * o((function() {
                        n(1)
                    })), "Object", a)
                }
            },
            2133: function(t, e, n) {
                var r = n(3144),
                    i = n(1126),
                    o = n(6282),
                    a = n(2806).f;
                t.exports = function(t) {
                    return function(e) {
                        for (var n, s = o(e), u = i(s), c = u.length, l = 0, f = []; c > l;) n = u[l++], r && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);
                        return f
                    }
                }
            },
            2275: function(t, e, n) {
                var r = n(7173),
                    i = n(8910),
                    o = n(5075),
                    a = n(4405).Reflect;
                t.exports = a && a.ownKeys || function(t) {
                    var e = r.f(o(t)),
                        n = i.f;
                    return n ? e.concat(n(t)) : e
                }
            },
            5995: function(t, e, n) {
                var r = n(4405).parseFloat,
                    i = n(5480).trim;
                t.exports = 1 / r(n(1176) + "-0") != -1 / 0 ? function(t) {
                    var e = i(String(t), 3),
                        n = r(e);
                    return 0 === n && "-" == e.charAt(0) ? -0 : n
                } : r
            },
            7252: function(t, e, n) {
                var r = n(4405).parseInt,
                    i = n(5480).trim,
                    o = n(1176),
                    a = /^[-+]?0[xX]/;
                t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t, e) {
                    var n = i(String(t), 3);
                    return r(n, e >>> 0 || (a.test(n) ? 16 : 10))
                } : r
            },
            4552: function(t) {
                t.exports = function(t) {
                    try {
                        return {
                            e: !1,
                            v: t()
                        }
                    } catch (t) {
                        return {
                            e: !0,
                            v: t
                        }
                    }
                }
            },
            9894: function(t, e, n) {
                var r = n(5075),
                    i = n(9708),
                    o = n(2219);
                t.exports = function(t, e) {
                    if (r(t), i(e) && e.constructor === t) return e;
                    var n = o.f(t);
                    return (0, n.resolve)(e), n.promise
                }
            },
            3388: function(t) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            3227: function(t, e, n) {
                var r = n(9593);
                t.exports = function(t, e, n) {
                    for (var i in e) r(t, i, e[i], n);
                    return t
                }
            },
            9593: function(t, e, n) {
                var r = n(4405),
                    i = n(4461),
                    o = n(3050),
                    a = n(7767)("src"),
                    s = n(9769),
                    u = "toString",
                    c = ("" + s).split(u);
                n(8080).inspectSource = function(t) {
                    return s.call(t)
                }, (t.exports = function(t, e, n, s) {
                    var u = "function" == typeof n;
                    u && (o(n, "name") || i(n, "name", e)), t[e] !== n && (u && (o(n, a) || i(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
                })(Function.prototype, u, (function() {
                    return "function" == typeof this && this[a] || s.call(this)
                }))
            },
            6798: function(t, e, n) {
                "use strict";
                var r = n(6347),
                    i = RegExp.prototype.exec;
                t.exports = function(t, e) {
                    var n = t.exec;
                    if ("function" == typeof n) {
                        var o = n.call(t, e);
                        if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                        return o
                    }
                    if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                    return i.call(t, e)
                }
            },
            2562: function(t, e, n) {
                "use strict";
                var r, i, o = n(5660),
                    a = RegExp.prototype.exec,
                    s = String.prototype.replace,
                    u = a,
                    c = (r = /a/, i = /b*/g, a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                    l = void 0 !== /()??/.exec("")[1];
                (c || l) && (u = function(t) {
                    var e, n, r, i, u = this;
                    return l && (n = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))), c && (e = u.lastIndex), r = a.call(u, t), c && r && (u.lastIndex = u.global ? r.index + r[0].length : e), l && r && r.length > 1 && s.call(r[0], n, (function() {
                        for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
                    })), r
                }), t.exports = u
            },
            2950: function(t) {
                t.exports = function(t, e) {
                    var n = e === Object(e) ? function(t) {
                        return e[t]
                    } : e;
                    return function(e) {
                        return String(e).replace(t, n)
                    }
                }
            },
            1366: function(t) {
                t.exports = Object.is || function(t, e) {
                    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
                }
            },
            578: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(8347),
                    o = n(1550),
                    a = n(4036);
                t.exports = function(t) {
                    r(r.S, t, {
                        from: function(t) {
                            var e, n, r, s, u = arguments[1];
                            return i(this), (e = void 0 !== u) && i(u), null == t ? new this : (n = [], e ? (r = 0, s = o(u, arguments[2], 2), a(t, !1, (function(t) {
                                n.push(s(t, r++))
                            }))) : a(t, !1, n.push, n), new this(n))
                        }
                    })
                }
            },
            147: function(t, e, n) {
                "use strict";
                var r = n(1693);
                t.exports = function(t) {
                    r(r.S, t, { of: function() {
                            for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                            return new this(e)
                        }
                    })
                }
            },
            1794: function(t, e, n) {
                var r = n(9708),
                    i = n(5075),
                    o = function(t, e) {
                        if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                    };
                t.exports = {
                    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                        try {
                            (r = n(1550)(Function.call, n(4676).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                        } catch (t) {
                            e = !0
                        }
                        return function(t, n) {
                            return o(t, n), e ? t.__proto__ = n : r(t, n), t
                        }
                    }({}, !1) : void 0),
                    check: o
                }
            },
            2373: function(t, e, n) {
                "use strict";
                var r = n(4405),
                    i = n(4213),
                    o = n(3144),
                    a = n(4410)("species");
                t.exports = function(t) {
                    var e = r[t];
                    o && e && !e[a] && i.f(e, a, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            },
            5572: function(t, e, n) {
                var r = n(4213).f,
                    i = n(3050),
                    o = n(4410)("toStringTag");
                t.exports = function(t, e, n) {
                    t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                        configurable: !0,
                        value: e
                    })
                }
            },
            1145: function(t, e, n) {
                var r = n(7104)("keys"),
                    i = n(7767);
                t.exports = function(t) {
                    return r[t] || (r[t] = i(t))
                }
            },
            7104: function(t, e, n) {
                var r = n(8080),
                    i = n(4405),
                    o = "__core-js_shared__",
                    a = i[o] || (i[o] = {});
                (t.exports = function(t, e) {
                    return a[t] || (a[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: r.version,
                    mode: n(4925) ? "pure" : "global",
                    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                })
            },
            3611: function(t, e, n) {
                var r = n(5075),
                    i = n(8347),
                    o = n(4410)("species");
                t.exports = function(t, e) {
                    var n, a = r(t).constructor;
                    return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
                }
            },
            9718: function(t, e, n) {
                "use strict";
                var r = n(496);
                t.exports = function(t, e) {
                    return !!t && r((function() {
                        e ? t.call(null, (function() {}), 1) : t.call(null)
                    }))
                }
            },
            5454: function(t, e, n) {
                var r = n(4058),
                    i = n(1083);
                t.exports = function(t) {
                    return function(e, n) {
                        var o, a, s = String(i(e)),
                            u = r(n),
                            c = s.length;
                        return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
                    }
                }
            },
            1452: function(t, e, n) {
                var r = n(939),
                    i = n(1083);
                t.exports = function(t, e, n) {
                    if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                    return String(i(t))
                }
            },
            7742: function(t, e, n) {
                var r = n(1693),
                    i = n(496),
                    o = n(1083),
                    a = /"/g,
                    s = function(t, e, n, r) {
                        var i = String(o(t)),
                            s = "<" + e;
                        return "" !== n && (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
                    };
                t.exports = function(t, e) {
                    var n = {};
                    n[t] = e(s), r(r.P + r.F * i((function() {
                        var e = "" [t]('"');
                        return e !== e.toLowerCase() || e.split('"').length > 3
                    })), "String", n)
                }
            },
            6687: function(t, e, n) {
                var r = n(5263),
                    i = n(3874),
                    o = n(1083);
                t.exports = function(t, e, n, a) {
                    var s = String(o(t)),
                        u = s.length,
                        c = void 0 === n ? " " : String(n),
                        l = r(e);
                    if (l <= u || "" == c) return s;
                    var f = l - u,
                        h = i.call(c, Math.ceil(f / c.length));
                    return h.length > f && (h = h.slice(0, f)), a ? h + s : s + h
                }
            },
            3874: function(t, e, n) {
                "use strict";
                var r = n(4058),
                    i = n(1083);
                t.exports = function(t) {
                    var e = String(i(this)),
                        n = "",
                        o = r(t);
                    if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
                    for (; o > 0;
                        (o >>>= 1) && (e += e)) 1 & o && (n += e);
                    return n
                }
            },
            5480: function(t, e, n) {
                var r = n(1693),
                    i = n(1083),
                    o = n(496),
                    a = n(1176),
                    s = "[" + a + "]",
                    u = RegExp("^" + s + s + "*"),
                    c = RegExp(s + s + "*$"),
                    l = function(t, e, n) {
                        var i = {},
                            s = o((function() {
                                return !!a[t]() || "​" != "​" [t]()
                            })),
                            u = i[t] = s ? e(f) : a[t];
                        n && (i[n] = u), r(r.P + r.F * s, "String", i)
                    },
                    f = l.trim = function(t, e) {
                        return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
                    };
                t.exports = l
            },
            1176: function(t) {
                t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
            },
            1597: function(t, e, n) {
                var r, i, o, a = n(1550),
                    s = n(1671),
                    u = n(7727),
                    c = n(7339),
                    l = n(4405),
                    f = l.process,
                    h = l.setImmediate,
                    p = l.clearImmediate,
                    d = l.MessageChannel,
                    v = l.Dispatch,
                    y = 0,
                    g = {},
                    m = function() {
                        var t = +this;
                        if (g.hasOwnProperty(t)) {
                            var e = g[t];
                            delete g[t], e()
                        }
                    },
                    _ = function(t) {
                        m.call(t.data)
                    };
                h && p || (h = function(t) {
                    for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
                    return g[++y] = function() {
                        s("function" == typeof t ? t : Function(t), e)
                    }, r(y), y
                }, p = function(t) {
                    delete g[t]
                }, "process" == n(2380)(f) ? r = function(t) {
                    f.nextTick(a(m, t, 1))
                } : v && v.now ? r = function(t) {
                    v.now(a(m, t, 1))
                } : d ? (o = (i = new d).port2, i.port1.onmessage = _, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
                    l.postMessage(t + "", "*")
                }, l.addEventListener("message", _, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
                    u.appendChild(c("script")).onreadystatechange = function() {
                        u.removeChild(this), m.call(t)
                    }
                } : function(t) {
                    setTimeout(a(m, t, 1), 0)
                }), t.exports = {
                    set: h,
                    clear: p
                }
            },
            9519: function(t, e, n) {
                var r = n(4058),
                    i = Math.max,
                    o = Math.min;
                t.exports = function(t, e) {
                    return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
                }
            },
            4423: function(t, e, n) {
                var r = n(4058),
                    i = n(5263);
                t.exports = function(t) {
                    if (void 0 === t) return 0;
                    var e = r(t),
                        n = i(e);
                    if (e !== n) throw RangeError("Wrong length!");
                    return n
                }
            },
            4058: function(t) {
                var e = Math.ceil,
                    n = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t)
                }
            },
            6282: function(t, e, n) {
                var r = n(5945),
                    i = n(1083);
                t.exports = function(t) {
                    return r(i(t))
                }
            },
            5263: function(t, e, n) {
                var r = n(4058),
                    i = Math.min;
                t.exports = function(t) {
                    return t > 0 ? i(r(t), 9007199254740991) : 0
                }
            },
            6040: function(t, e, n) {
                var r = n(1083);
                t.exports = function(t) {
                    return Object(r(t))
                }
            },
            3825: function(t, e, n) {
                var r = n(9708);
                t.exports = function(t, e) {
                    if (!r(t)) return t;
                    var n, i;
                    if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                    if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
                    if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            3412: function(t, e, n) {
                "use strict";
                if (n(3144)) {
                    var r = n(4925),
                        i = n(4405),
                        o = n(496),
                        a = n(1693),
                        s = n(6331),
                        u = n(7050),
                        c = n(1550),
                        l = n(269),
                        f = n(3388),
                        h = n(4461),
                        p = n(3227),
                        d = n(4058),
                        v = n(5263),
                        y = n(4423),
                        g = n(9519),
                        m = n(3825),
                        _ = n(3050),
                        b = n(6347),
                        w = n(9708),
                        S = n(6040),
                        E = n(2193),
                        x = n(6088),
                        I = n(8539),
                        O = n(7173).f,
                        T = n(6882),
                        P = n(7767),
                        k = n(4410),
                        A = n(3635),
                        N = n(4513),
                        C = n(3611),
                        M = n(6172),
                        R = n(7985),
                        q = n(3229),
                        j = n(2373),
                        D = n(2378),
                        F = n(3697),
                        L = n(4213),
                        B = n(4676),
                        U = L.f,
                        z = B.f,
                        W = i.RangeError,
                        G = i.TypeError,
                        V = i.Uint8Array,
                        K = "ArrayBuffer",
                        H = "SharedArrayBuffer",
                        X = "BYTES_PER_ELEMENT",
                        $ = Array.prototype,
                        Y = u.ArrayBuffer,
                        Q = u.DataView,
                        J = A(0),
                        Z = A(2),
                        tt = A(3),
                        et = A(4),
                        nt = A(5),
                        rt = A(6),
                        it = N(!0),
                        ot = N(!1),
                        at = M.values,
                        st = M.keys,
                        ut = M.entries,
                        ct = $.lastIndexOf,
                        lt = $.reduce,
                        ft = $.reduceRight,
                        ht = $.join,
                        pt = $.sort,
                        dt = $.slice,
                        vt = $.toString,
                        yt = $.toLocaleString,
                        gt = k("iterator"),
                        mt = k("toStringTag"),
                        _t = P("typed_constructor"),
                        bt = P("def_constructor"),
                        wt = s.CONSTR,
                        St = s.TYPED,
                        Et = s.VIEW,
                        xt = "Wrong length!",
                        It = A(1, (function(t, e) {
                            return At(C(t, t[bt]), e)
                        })),
                        Ot = o((function() {
                            return 1 === new V(new Uint16Array([1]).buffer)[0]
                        })),
                        Tt = !!V && !!V.prototype.set && o((function() {
                            new V(1).set({})
                        })),
                        Pt = function(t, e) {
                            var n = d(t);
                            if (n < 0 || n % e) throw W("Wrong offset!");
                            return n
                        },
                        kt = function(t) {
                            if (w(t) && St in t) return t;
                            throw G(t + " is not a typed array!")
                        },
                        At = function(t, e) {
                            if (!w(t) || !(_t in t)) throw G("It is not a typed array constructor!");
                            return new t(e)
                        },
                        Nt = function(t, e) {
                            return Ct(C(t, t[bt]), e)
                        },
                        Ct = function(t, e) {
                            for (var n = 0, r = e.length, i = At(t, r); r > n;) i[n] = e[n++];
                            return i
                        },
                        Mt = function(t, e, n) {
                            U(t, e, {
                                get: function() {
                                    return this._d[n]
                                }
                            })
                        },
                        Rt = function(t) {
                            var e, n, r, i, o, a, s = S(t),
                                u = arguments.length,
                                l = u > 1 ? arguments[1] : void 0,
                                f = void 0 !== l,
                                h = T(s);
                            if (null != h && !E(h)) {
                                for (a = h.call(s), r = [], e = 0; !(o = a.next()).done; e++) r.push(o.value);
                                s = r
                            }
                            for (f && u > 2 && (l = c(l, arguments[2], 2)), e = 0, n = v(s.length), i = At(this, n); n > e; e++) i[e] = f ? l(s[e], e) : s[e];
                            return i
                        },
                        qt = function() {
                            for (var t = 0, e = arguments.length, n = At(this, e); e > t;) n[t] = arguments[t++];
                            return n
                        },
                        jt = !!V && o((function() {
                            yt.call(new V(1))
                        })),
                        Dt = function() {
                            return yt.apply(jt ? dt.call(kt(this)) : kt(this), arguments)
                        },
                        Ft = {
                            copyWithin: function(t, e) {
                                return F.call(kt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                            },
                            every: function(t) {
                                return et(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            fill: function(t) {
                                return D.apply(kt(this), arguments)
                            },
                            filter: function(t) {
                                return Nt(this, Z(kt(this), t, arguments.length > 1 ? arguments[1] : void 0))
                            },
                            find: function(t) {
                                return nt(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            findIndex: function(t) {
                                return rt(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            forEach: function(t) {
                                J(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            indexOf: function(t) {
                                return ot(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            includes: function(t) {
                                return it(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            join: function(t) {
                                return ht.apply(kt(this), arguments)
                            },
                            lastIndexOf: function(t) {
                                return ct.apply(kt(this), arguments)
                            },
                            map: function(t) {
                                return It(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            reduce: function(t) {
                                return lt.apply(kt(this), arguments)
                            },
                            reduceRight: function(t) {
                                return ft.apply(kt(this), arguments)
                            },
                            reverse: function() {
                                for (var t, e = this, n = kt(e).length, r = Math.floor(n / 2), i = 0; i < r;) t = e[i], e[i++] = e[--n], e[n] = t;
                                return e
                            },
                            some: function(t) {
                                return tt(kt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                            },
                            sort: function(t) {
                                return pt.call(kt(this), t)
                            },
                            subarray: function(t, e) {
                                var n = kt(this),
                                    r = n.length,
                                    i = g(t, r);
                                return new(C(n, n[bt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, v((void 0 === e ? r : g(e, r)) - i))
                            }
                        },
                        Lt = function(t, e) {
                            return Nt(this, dt.call(kt(this), t, e))
                        },
                        Bt = function(t) {
                            kt(this);
                            var e = Pt(arguments[1], 1),
                                n = this.length,
                                r = S(t),
                                i = v(r.length),
                                o = 0;
                            if (i + e > n) throw W(xt);
                            for (; o < i;) this[e + o] = r[o++]
                        },
                        Ut = {
                            entries: function() {
                                return ut.call(kt(this))
                            },
                            keys: function() {
                                return st.call(kt(this))
                            },
                            values: function() {
                                return at.call(kt(this))
                            }
                        },
                        zt = function(t, e) {
                            return w(t) && t[St] && "symbol" != typeof e && e in t && String(+e) == String(e)
                        },
                        Wt = function(t, e) {
                            return zt(t, e = m(e, !0)) ? f(2, t[e]) : z(t, e)
                        },
                        Gt = function(t, e, n) {
                            return !(zt(t, e = m(e, !0)) && w(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value, t)
                        };
                    wt || (B.f = Wt, L.f = Gt), a(a.S + a.F * !wt, "Object", {
                        getOwnPropertyDescriptor: Wt,
                        defineProperty: Gt
                    }), o((function() {
                        vt.call({})
                    })) && (vt = yt = function() {
                        return ht.call(this)
                    });
                    var Vt = p({}, Ft);
                    p(Vt, Ut), h(Vt, gt, Ut.values), p(Vt, {
                        slice: Lt,
                        set: Bt,
                        constructor: function() {},
                        toString: vt,
                        toLocaleString: Dt
                    }), Mt(Vt, "buffer", "b"), Mt(Vt, "byteOffset", "o"), Mt(Vt, "byteLength", "l"), Mt(Vt, "length", "e"), U(Vt, mt, {
                        get: function() {
                            return this[St]
                        }
                    }), t.exports = function(t, e, n, u) {
                        var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
                            f = "get" + t,
                            p = "set" + t,
                            d = i[c],
                            g = d || {},
                            m = d && I(d),
                            _ = !d || !s.ABV,
                            S = {},
                            E = d && d.prototype,
                            T = function(t, n) {
                                U(t, n, {
                                    get: function() {
                                        return function(t, n) {
                                            var r = t._d;
                                            return r.v[f](n * e + r.o, Ot)
                                        }(this, n)
                                    },
                                    set: function(t) {
                                        return function(t, n, r) {
                                            var i = t._d;
                                            u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[p](n * e + i.o, r, Ot)
                                        }(this, n, t)
                                    },
                                    enumerable: !0
                                })
                            };
                        _ ? (d = n((function(t, n, r, i) {
                            l(t, d, c, "_d");
                            var o, a, s, u, f = 0,
                                p = 0;
                            if (w(n)) {
                                if (!(n instanceof Y || (u = b(n)) == K || u == H)) return St in n ? Ct(d, n) : Rt.call(d, n);
                                o = n, p = Pt(r, e);
                                var g = n.byteLength;
                                if (void 0 === i) {
                                    if (g % e) throw W(xt);
                                    if ((a = g - p) < 0) throw W(xt)
                                } else if ((a = v(i) * e) + p > g) throw W(xt);
                                s = a / e
                            } else s = y(n), o = new Y(a = s * e);
                            for (h(t, "_d", {
                                    b: o,
                                    o: p,
                                    l: a,
                                    e: s,
                                    v: new Q(o)
                                }); f < s;) T(t, f++)
                        })), E = d.prototype = x(Vt), h(E, "constructor", d)) : o((function() {
                            d(1)
                        })) && o((function() {
                            new d(-1)
                        })) && q((function(t) {
                            new d, new d(null), new d(1.5), new d(t)
                        }), !0) || (d = n((function(t, n, r, i) {
                            var o;
                            return l(t, d, c), w(n) ? n instanceof Y || (o = b(n)) == K || o == H ? void 0 !== i ? new g(n, Pt(r, e), i) : void 0 !== r ? new g(n, Pt(r, e)) : new g(n) : St in n ? Ct(d, n) : Rt.call(d, n) : new g(y(n))
                        })), J(m !== Function.prototype ? O(g).concat(O(m)) : O(g), (function(t) {
                            t in d || h(d, t, g[t])
                        })), d.prototype = E, r || (E.constructor = d));
                        var P = E[gt],
                            k = !!P && ("values" == P.name || null == P.name),
                            A = Ut.values;
                        h(d, _t, !0), h(E, St, c), h(E, Et, !0), h(E, bt, d), (u ? new d(1)[mt] == c : mt in E) || U(E, mt, {
                            get: function() {
                                return c
                            }
                        }), S[c] = d, a(a.G + a.W + a.F * (d != g), S), a(a.S, c, {
                            BYTES_PER_ELEMENT: e
                        }), a(a.S + a.F * o((function() {
                            g.of.call(d, 1)
                        })), c, {
                            from: Rt,
                            of: qt
                        }), X in E || h(E, X, e), a(a.P, c, Ft), j(c), a(a.P + a.F * Tt, c, {
                            set: Bt
                        }), a(a.P + a.F * !k, c, Ut), r || E.toString == vt || (E.toString = vt), a(a.P + a.F * o((function() {
                            new d(1).slice()
                        })), c, {
                            slice: Lt
                        }), a(a.P + a.F * (o((function() {
                            return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
                        })) || !o((function() {
                            E.toLocaleString.call([1, 2])
                        }))), c, {
                            toLocaleString: Dt
                        }), R[c] = k ? P : A, r || k || h(E, gt, A)
                    }
                } else t.exports = function() {}
            },
            7050: function(t, e, n) {
                "use strict";
                var r = n(4405),
                    i = n(3144),
                    o = n(4925),
                    a = n(6331),
                    s = n(4461),
                    u = n(3227),
                    c = n(496),
                    l = n(269),
                    f = n(4058),
                    h = n(5263),
                    p = n(4423),
                    d = n(7173).f,
                    v = n(4213).f,
                    y = n(2378),
                    g = n(5572),
                    m = "ArrayBuffer",
                    _ = "DataView",
                    b = "Wrong index!",
                    w = r.ArrayBuffer,
                    S = r.DataView,
                    E = r.Math,
                    x = r.RangeError,
                    I = r.Infinity,
                    O = w,
                    T = E.abs,
                    P = E.pow,
                    k = E.floor,
                    A = E.log,
                    N = E.LN2,
                    C = "buffer",
                    M = "byteLength",
                    R = "byteOffset",
                    q = i ? "_b" : C,
                    j = i ? "_l" : M,
                    D = i ? "_o" : R;

                function F(t, e, n) {
                    var r, i, o, a = new Array(n),
                        s = 8 * n - e - 1,
                        u = (1 << s) - 1,
                        c = u >> 1,
                        l = 23 === e ? P(2, -24) - P(2, -77) : 0,
                        f = 0,
                        h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for ((t = T(t)) != t || t === I ? (i = t != t ? 1 : 0, r = u) : (r = k(A(t) / N), t * (o = P(2, -r)) < 1 && (r--, o *= 2), (t += r + c >= 1 ? l / o : l * P(2, 1 - c)) * o >= 2 && (r++, o /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (t * o - 1) * P(2, e), r += c) : (i = t * P(2, c - 1) * P(2, e), r = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8);
                    for (r = r << e | i, s += e; s > 0; a[f++] = 255 & r, r /= 256, s -= 8);
                    return a[--f] |= 128 * h, a
                }

                function L(t, e, n) {
                    var r, i = 8 * n - e - 1,
                        o = (1 << i) - 1,
                        a = o >> 1,
                        s = i - 7,
                        u = n - 1,
                        c = t[u--],
                        l = 127 & c;
                    for (c >>= 7; s > 0; l = 256 * l + t[u], u--, s -= 8);
                    for (r = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; r = 256 * r + t[u], u--, s -= 8);
                    if (0 === l) l = 1 - a;
                    else {
                        if (l === o) return r ? NaN : c ? -I : I;
                        r += P(2, e), l -= a
                    }
                    return (c ? -1 : 1) * r * P(2, l - e)
                }

                function B(t) {
                    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
                }

                function U(t) {
                    return [255 & t]
                }

                function z(t) {
                    return [255 & t, t >> 8 & 255]
                }

                function W(t) {
                    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
                }

                function G(t) {
                    return F(t, 52, 8)
                }

                function V(t) {
                    return F(t, 23, 4)
                }

                function K(t, e, n) {
                    v(t.prototype, e, {
                        get: function() {
                            return this[n]
                        }
                    })
                }

                function H(t, e, n, r) {
                    var i = p(+n);
                    if (i + e > t[j]) throw x(b);
                    var o = t[q]._b,
                        a = i + t[D],
                        s = o.slice(a, a + e);
                    return r ? s : s.reverse()
                }

                function X(t, e, n, r, i, o) {
                    var a = p(+n);
                    if (a + e > t[j]) throw x(b);
                    for (var s = t[q]._b, u = a + t[D], c = r(+i), l = 0; l < e; l++) s[u + l] = c[o ? l : e - l - 1]
                }
                if (a.ABV) {
                    if (!c((function() {
                            w(1)
                        })) || !c((function() {
                            new w(-1)
                        })) || c((function() {
                            return new w, new w(1.5), new w(NaN), w.name != m
                        }))) {
                        for (var $, Y = (w = function(t) {
                                return l(this, w), new O(p(t))
                            }).prototype = O.prototype, Q = d(O), J = 0; Q.length > J;)($ = Q[J++]) in w || s(w, $, O[$]);
                        o || (Y.constructor = w)
                    }
                    var Z = new S(new w(2)),
                        tt = S.prototype.setInt8;
                    Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || u(S.prototype, {
                        setInt8: function(t, e) {
                            tt.call(this, t, e << 24 >> 24)
                        },
                        setUint8: function(t, e) {
                            tt.call(this, t, e << 24 >> 24)
                        }
                    }, !0)
                } else w = function(t) {
                    l(this, w, m);
                    var e = p(t);
                    this._b = y.call(new Array(e), 0), this[j] = e
                }, S = function(t, e, n) {
                    l(this, S, _), l(t, w, _);
                    var r = t[j],
                        i = f(e);
                    if (i < 0 || i > r) throw x("Wrong offset!");
                    if (i + (n = void 0 === n ? r - i : h(n)) > r) throw x("Wrong length!");
                    this[q] = t, this[D] = i, this[j] = n
                }, i && (K(w, M, "_l"), K(S, C, "_b"), K(S, M, "_l"), K(S, R, "_o")), u(S.prototype, {
                    getInt8: function(t) {
                        return H(this, 1, t)[0] << 24 >> 24
                    },
                    getUint8: function(t) {
                        return H(this, 1, t)[0]
                    },
                    getInt16: function(t) {
                        var e = H(this, 2, t, arguments[1]);
                        return (e[1] << 8 | e[0]) << 16 >> 16
                    },
                    getUint16: function(t) {
                        var e = H(this, 2, t, arguments[1]);
                        return e[1] << 8 | e[0]
                    },
                    getInt32: function(t) {
                        return B(H(this, 4, t, arguments[1]))
                    },
                    getUint32: function(t) {
                        return B(H(this, 4, t, arguments[1])) >>> 0
                    },
                    getFloat32: function(t) {
                        return L(H(this, 4, t, arguments[1]), 23, 4)
                    },
                    getFloat64: function(t) {
                        return L(H(this, 8, t, arguments[1]), 52, 8)
                    },
                    setInt8: function(t, e) {
                        X(this, 1, t, U, e)
                    },
                    setUint8: function(t, e) {
                        X(this, 1, t, U, e)
                    },
                    setInt16: function(t, e) {
                        X(this, 2, t, z, e, arguments[2])
                    },
                    setUint16: function(t, e) {
                        X(this, 2, t, z, e, arguments[2])
                    },
                    setInt32: function(t, e) {
                        X(this, 4, t, W, e, arguments[2])
                    },
                    setUint32: function(t, e) {
                        X(this, 4, t, W, e, arguments[2])
                    },
                    setFloat32: function(t, e) {
                        X(this, 4, t, V, e, arguments[2])
                    },
                    setFloat64: function(t, e) {
                        X(this, 8, t, G, e, arguments[2])
                    }
                });
                g(w, m), g(S, _), s(S.prototype, a.VIEW, !0), e.ArrayBuffer = w, e.DataView = S
            },
            6331: function(t, e, n) {
                for (var r, i = n(4405), o = n(4461), a = n(7767), s = a("typed_array"), u = a("view"), c = !(!i.ArrayBuffer || !i.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = i[h[f++]]) ? (o(r.prototype, s, !0), o(r.prototype, u, !0)) : l = !1;
                t.exports = {
                    ABV: c,
                    CONSTR: l,
                    TYPED: s,
                    VIEW: u
                }
            },
            7767: function(t) {
                var e = 0,
                    n = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
                }
            },
            7860: function(t, e, n) {
                var r = n(4405).navigator;
                t.exports = r && r.userAgent || ""
            },
            1554: function(t, e, n) {
                var r = n(9708);
                t.exports = function(t, e) {
                    if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                    return t
                }
            },
            4519: function(t, e, n) {
                var r = n(4405),
                    i = n(8080),
                    o = n(4925),
                    a = n(3438),
                    s = n(4213).f;
                t.exports = function(t) {
                    var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
                    "_" == t.charAt(0) || t in e || s(e, t, {
                        value: a.f(t)
                    })
                }
            },
            3438: function(t, e, n) {
                e.f = n(4410)
            },
            4410: function(t, e, n) {
                var r = n(7104)("wks"),
                    i = n(7767),
                    o = n(4405).Symbol,
                    a = "function" == typeof o;
                (t.exports = function(t) {
                    return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
                }).store = r
            },
            6882: function(t, e, n) {
                var r = n(6347),
                    i = n(4410)("iterator"),
                    o = n(7985);
                t.exports = n(8080).getIteratorMethod = function(t) {
                    if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
                }
            },
            4530: function(t, e, n) {
                var r = n(1693),
                    i = n(2950)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                r(r.S, "RegExp", {
                    escape: function(t) {
                        return i(t)
                    }
                })
            },
            9440: function(t, e, n) {
                var r = n(1693);
                r(r.P, "Array", {
                    copyWithin: n(3697)
                }), n(7296)("copyWithin")
            },
            6075: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(4);
                r(r.P + r.F * !n(9718)([].every, !0), "Array", {
                    every: function(t) {
                        return i(this, t, arguments[1])
                    }
                })
            },
            5588: function(t, e, n) {
                var r = n(1693);
                r(r.P, "Array", {
                    fill: n(2378)
                }), n(7296)("fill")
            },
            8931: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(2);
                r(r.P + r.F * !n(9718)([].filter, !0), "Array", {
                    filter: function(t) {
                        return i(this, t, arguments[1])
                    }
                })
            },
            5294: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(6),
                    o = "findIndex",
                    a = !0;
                o in [] && Array(1)[o]((function() {
                    a = !1
                })), r(r.P + r.F * a, "Array", {
                    findIndex: function(t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), n(7296)(o)
            },
            6233: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(5),
                    o = "find",
                    a = !0;
                o in [] && Array(1).find((function() {
                    a = !1
                })), r(r.P + r.F * a, "Array", {
                    find: function(t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), n(7296)(o)
            },
            9946: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(0),
                    o = n(9718)([].forEach, !0);
                r(r.P + r.F * !o, "Array", {
                    forEach: function(t) {
                        return i(this, t, arguments[1])
                    }
                })
            },
            9731: function(t, e, n) {
                "use strict";
                var r = n(1550),
                    i = n(1693),
                    o = n(6040),
                    a = n(8226),
                    s = n(2193),
                    u = n(5263),
                    c = n(2559),
                    l = n(6882);
                i(i.S + i.F * !n(3229)((function(t) {
                    Array.from(t)
                })), "Array", {
                    from: function(t) {
                        var e, n, i, f, h = o(t),
                            p = "function" == typeof this ? this : Array,
                            d = arguments.length,
                            v = d > 1 ? arguments[1] : void 0,
                            y = void 0 !== v,
                            g = 0,
                            m = l(h);
                        if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && s(m))
                            for (n = new p(e = u(h.length)); e > g; g++) c(n, g, y ? v(h[g], g) : h[g]);
                        else
                            for (f = m.call(h), n = new p; !(i = f.next()).done; g++) c(n, g, y ? a(f, v, [i.value, g], !0) : i.value);
                        return n.length = g, n
                    }
                })
            },
            9209: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(4513)(!1),
                    o = [].indexOf,
                    a = !!o && 1 / [1].indexOf(1, -0) < 0;
                r(r.P + r.F * (a || !n(9718)(o)), "Array", {
                    indexOf: function(t) {
                        return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
                    }
                })
            },
            2550: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Array", {
                    isArray: n(3623)
                })
            },
            6172: function(t, e, n) {
                "use strict";
                var r = n(7296),
                    i = n(4257),
                    o = n(7985),
                    a = n(6282);
                t.exports = n(5706)(Array, "Array", (function(t, e) {
                    this._t = a(t), this._i = 0, this._k = e
                }), (function() {
                    var t = this._t,
                        e = this._k,
                        n = this._i++;
                    return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
            },
            5956: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6282),
                    o = [].join;
                r(r.P + r.F * (n(5945) != Object || !n(9718)(o)), "Array", {
                    join: function(t) {
                        return o.call(i(this), void 0 === t ? "," : t)
                    }
                })
            },
            2733: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6282),
                    o = n(4058),
                    a = n(5263),
                    s = [].lastIndexOf,
                    u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
                r(r.P + r.F * (u || !n(9718)(s)), "Array", {
                    lastIndexOf: function(t) {
                        if (u) return s.apply(this, arguments) || 0;
                        var e = i(this),
                            n = a(e.length),
                            r = n - 1;
                        for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                            if (r in e && e[r] === t) return r || 0;
                        return -1
                    }
                })
            },
            2369: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(1);
                r(r.P + r.F * !n(9718)([].map, !0), "Array", {
                    map: function(t) {
                        return i(this, t, arguments[1])
                    }
                })
            },
            745: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(2559);
                r(r.S + r.F * n(496)((function() {
                    function t() {}
                    return !(Array.of.call(t) instanceof t)
                })), "Array", { of: function() {
                        for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
                        return n.length = e, n
                    }
                })
            },
            3565: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6574);
                r(r.P + r.F * !n(9718)([].reduceRight, !0), "Array", {
                    reduceRight: function(t) {
                        return i(this, t, arguments.length, arguments[1], !0)
                    }
                })
            },
            9662: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6574);
                r(r.P + r.F * !n(9718)([].reduce, !0), "Array", {
                    reduce: function(t) {
                        return i(this, t, arguments.length, arguments[1], !1)
                    }
                })
            },
            6149: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(7727),
                    o = n(2380),
                    a = n(9519),
                    s = n(5263),
                    u = [].slice;
                r(r.P + r.F * n(496)((function() {
                    i && u.call(i)
                })), "Array", {
                    slice: function(t, e) {
                        var n = s(this.length),
                            r = o(this);
                        if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
                        for (var i = a(t, n), c = a(e, n), l = s(c - i), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == r ? this.charAt(i + h) : this[i + h];
                        return f
                    }
                })
            },
            4135: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(3635)(3);
                r(r.P + r.F * !n(9718)([].some, !0), "Array", {
                    some: function(t) {
                        return i(this, t, arguments[1])
                    }
                })
            },
            2106: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(8347),
                    o = n(6040),
                    a = n(496),
                    s = [].sort,
                    u = [1, 2, 3];
                r(r.P + r.F * (a((function() {
                    u.sort(void 0)
                })) || !a((function() {
                    u.sort(null)
                })) || !n(9718)(s)), "Array", {
                    sort: function(t) {
                        return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t))
                    }
                })
            },
            5324: function(t, e, n) {
                n(2373)("Array")
            },
            2330: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Date", {
                    now: function() {
                        return (new Date).getTime()
                    }
                })
            },
            2943: function(t, e, n) {
                var r = n(1693),
                    i = n(9496);
                r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
                    toISOString: i
                })
            },
            6665: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6040),
                    o = n(3825);
                r(r.P + r.F * n(496)((function() {
                    return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                        toISOString: function() {
                            return 1
                        }
                    })
                })), "Date", {
                    toJSON: function(t) {
                        var e = i(this),
                            n = o(e);
                        return "number" != typeof n || isFinite(n) ? e.toISOString() : null
                    }
                })
            },
            1002: function(t, e, n) {
                var r = n(4410)("toPrimitive"),
                    i = Date.prototype;
                r in i || n(4461)(i, r, n(2967))
            },
            8616: function(t, e, n) {
                var r = Date.prototype,
                    i = "Invalid Date",
                    o = r.toString,
                    a = r.getTime;
                new Date(NaN) + "" != i && n(9593)(r, "toString", (function() {
                    var t = a.call(this);
                    return t == t ? o.call(this) : i
                }))
            },
            7442: function(t, e, n) {
                var r = n(1693);
                r(r.P, "Function", {
                    bind: n(7240)
                })
            },
            7998: function(t, e, n) {
                "use strict";
                var r = n(9708),
                    i = n(8539),
                    o = n(4410)("hasInstance"),
                    a = Function.prototype;
                o in a || n(4213).f(a, o, {
                    value: function(t) {
                        if ("function" != typeof this || !r(t)) return !1;
                        if (!r(this.prototype)) return t instanceof this;
                        for (; t = i(t);)
                            if (this.prototype === t) return !0;
                        return !1
                    }
                })
            },
            6278: function(t, e, n) {
                var r = n(4213).f,
                    i = Function.prototype,
                    o = /^\s*function ([^ (]*)/,
                    a = "name";
                a in i || n(3144) && r(i, a, {
                    configurable: !0,
                    get: function() {
                        try {
                            return ("" + this).match(o)[1]
                        } catch (t) {
                            return ""
                        }
                    }
                })
            },
            9164: function(t, e, n) {
                "use strict";
                var r = n(7647),
                    i = n(1554),
                    o = "Map";
                t.exports = n(8107)(o, (function(t) {
                    return function() {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }), {
                    get: function(t) {
                        var e = r.getEntry(i(this, o), t);
                        return e && e.v
                    },
                    set: function(t, e) {
                        return r.def(i(this, o), 0 === t ? 0 : t, e)
                    }
                }, r, !0)
            },
            6367: function(t, e, n) {
                var r = n(1693),
                    i = n(8738),
                    o = Math.sqrt,
                    a = Math.acosh;
                r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                    acosh: function(t) {
                        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
                    }
                })
            },
            7345: function(t, e, n) {
                var r = n(1693),
                    i = Math.asinh;
                r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
                    asinh: function t(e) {
                        return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
                    }
                })
            },
            9471: function(t, e, n) {
                var r = n(1693),
                    i = Math.atanh;
                r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
                    atanh: function(t) {
                        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
                    }
                })
            },
            5890: function(t, e, n) {
                var r = n(1693),
                    i = n(9439);
                r(r.S, "Math", {
                    cbrt: function(t) {
                        return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
                    }
                })
            },
            8299: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    clz32: function(t) {
                        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
                    }
                })
            },
            9286: function(t, e, n) {
                var r = n(1693),
                    i = Math.exp;
                r(r.S, "Math", {
                    cosh: function(t) {
                        return (i(t = +t) + i(-t)) / 2
                    }
                })
            },
            8240: function(t, e, n) {
                var r = n(1693),
                    i = n(8651);
                r(r.S + r.F * (i != Math.expm1), "Math", {
                    expm1: i
                })
            },
            1050: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    fround: n(8961)
                })
            },
            8246: function(t, e, n) {
                var r = n(1693),
                    i = Math.abs;
                r(r.S, "Math", {
                    hypot: function(t, e) {
                        for (var n, r, o = 0, a = 0, s = arguments.length, u = 0; a < s;) u < (n = i(arguments[a++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
                        return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
                    }
                })
            },
            9349: function(t, e, n) {
                var r = n(1693),
                    i = Math.imul;
                r(r.S + r.F * n(496)((function() {
                    return -5 != i(4294967295, 5) || 2 != i.length
                })), "Math", {
                    imul: function(t, e) {
                        var n = 65535,
                            r = +t,
                            i = +e,
                            o = n & r,
                            a = n & i;
                        return 0 | o * a + ((n & r >>> 16) * a + o * (n & i >>> 16) << 16 >>> 0)
                    }
                })
            },
            5159: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    log10: function(t) {
                        return Math.log(t) * Math.LOG10E
                    }
                })
            },
            3158: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    log1p: n(8738)
                })
            },
            7521: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    log2: function(t) {
                        return Math.log(t) / Math.LN2
                    }
                })
            },
            2565: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    sign: n(9439)
                })
            },
            8337: function(t, e, n) {
                var r = n(1693),
                    i = n(8651),
                    o = Math.exp;
                r(r.S + r.F * n(496)((function() {
                    return -2e-17 != !Math.sinh(-2e-17)
                })), "Math", {
                    sinh: function(t) {
                        return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
                    }
                })
            },
            8582: function(t, e, n) {
                var r = n(1693),
                    i = n(8651),
                    o = Math.exp;
                r(r.S, "Math", {
                    tanh: function(t) {
                        var e = i(t = +t),
                            n = i(-t);
                        return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
                    }
                })
            },
            2310: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    trunc: function(t) {
                        return (t > 0 ? Math.floor : Math.ceil)(t)
                    }
                })
            },
            5434: function(t, e, n) {
                "use strict";
                var r = n(4405),
                    i = n(3050),
                    o = n(2380),
                    a = n(7856),
                    s = n(3825),
                    u = n(496),
                    c = n(7173).f,
                    l = n(4676).f,
                    f = n(4213).f,
                    h = n(5480).trim,
                    p = "Number",
                    d = r.Number,
                    v = d,
                    y = d.prototype,
                    g = o(n(6088)(y)) == p,
                    m = "trim" in String.prototype,
                    _ = function(t) {
                        var e = s(t, !1);
                        if ("string" == typeof e && e.length > 2) {
                            var n, r, i, o = (e = m ? e.trim() : h(e, 3)).charCodeAt(0);
                            if (43 === o || 45 === o) {
                                if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                            } else if (48 === o) {
                                switch (e.charCodeAt(1)) {
                                    case 66:
                                    case 98:
                                        r = 2, i = 49;
                                        break;
                                    case 79:
                                    case 111:
                                        r = 8, i = 55;
                                        break;
                                    default:
                                        return +e
                                }
                                for (var a, u = e.slice(2), c = 0, l = u.length; c < l; c++)
                                    if ((a = u.charCodeAt(c)) < 48 || a > i) return NaN;
                                return parseInt(u, r)
                            }
                        }
                        return +e
                    };
                if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
                    d = function(t) {
                        var e = arguments.length < 1 ? 0 : t,
                            n = this;
                        return n instanceof d && (g ? u((function() {
                            y.valueOf.call(n)
                        })) : o(n) != p) ? a(new v(_(e)), n, d) : _(e)
                    };
                    for (var b, w = n(3144) ? c(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; w.length > S; S++) i(v, b = w[S]) && !i(d, b) && f(d, b, l(v, b));
                    d.prototype = y, y.constructor = d, n(9593)(r, p, d)
                }
            },
            4412: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Number", {
                    EPSILON: Math.pow(2, -52)
                })
            },
            7993: function(t, e, n) {
                var r = n(1693),
                    i = n(4405).isFinite;
                r(r.S, "Number", {
                    isFinite: function(t) {
                        return "number" == typeof t && i(t)
                    }
                })
            },
            1755: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Number", {
                    isInteger: n(8645)
                })
            },
            5390: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Number", {
                    isNaN: function(t) {
                        return t != t
                    }
                })
            },
            352: function(t, e, n) {
                var r = n(1693),
                    i = n(8645),
                    o = Math.abs;
                r(r.S, "Number", {
                    isSafeInteger: function(t) {
                        return i(t) && o(t) <= 9007199254740991
                    }
                })
            },
            526: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Number", {
                    MAX_SAFE_INTEGER: 9007199254740991
                })
            },
            708: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Number", {
                    MIN_SAFE_INTEGER: -9007199254740991
                })
            },
            2360: function(t, e, n) {
                var r = n(1693),
                    i = n(5995);
                r(r.S + r.F * (Number.parseFloat != i), "Number", {
                    parseFloat: i
                })
            },
            5114: function(t, e, n) {
                var r = n(1693),
                    i = n(7252);
                r(r.S + r.F * (Number.parseInt != i), "Number", {
                    parseInt: i
                })
            },
            7967: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(4058),
                    o = n(8479),
                    a = n(3874),
                    s = 1..toFixed,
                    u = Math.floor,
                    c = [0, 0, 0, 0, 0, 0],
                    l = "Number.toFixed: incorrect invocation!",
                    f = "0",
                    h = function(t, e) {
                        for (var n = -1, r = e; ++n < 6;) r += t * c[n], c[n] = r % 1e7, r = u(r / 1e7)
                    },
                    p = function(t) {
                        for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = u(n / t), n = n % t * 1e7
                    },
                    d = function() {
                        for (var t = 6, e = ""; --t >= 0;)
                            if ("" !== e || 0 === t || 0 !== c[t]) {
                                var n = String(c[t]);
                                e = "" === e ? n : e + a.call(f, 7 - n.length) + n
                            }
                        return e
                    },
                    v = function(t, e, n) {
                        return 0 === e ? n : e % 2 == 1 ? v(t, e - 1, n * t) : v(t * t, e / 2, n)
                    };
                r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(496)((function() {
                    s.call({})
                }))), "Number", {
                    toFixed: function(t) {
                        var e, n, r, s, u = o(this, l),
                            c = i(t),
                            y = "",
                            g = f;
                        if (c < 0 || c > 20) throw RangeError(l);
                        if (u != u) return "NaN";
                        if (u <= -1e21 || u >= 1e21) return String(u);
                        if (u < 0 && (y = "-", u = -u), u > 1e-21)
                            if (e = function(t) {
                                    for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                                    for (; n >= 2;) e += 1, n /= 2;
                                    return e
                                }(u * v(2, 69, 1)) - 69, n = e < 0 ? u * v(2, -e, 1) : u / v(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                                for (h(0, n), r = c; r >= 7;) h(1e7, 0), r -= 7;
                                for (h(v(10, r, 1), 0), r = e - 1; r >= 23;) p(1 << 23), r -= 23;
                                p(1 << r), h(1, 1), p(2), g = d()
                            } else h(0, n), h(1 << -e, 0), g = d() + a.call(f, c);
                        return c > 0 ? y + ((s = g.length) <= c ? "0." + a.call(f, c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : y + g
                    }
                })
            },
            3552: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(496),
                    o = n(8479),
                    a = 1..toPrecision;
                r(r.P + r.F * (i((function() {
                    return "1" !== a.call(1, void 0)
                })) || !i((function() {
                    a.call({})
                }))), "Number", {
                    toPrecision: function(t) {
                        var e = o(this, "Number#toPrecision: incorrect invocation!");
                        return void 0 === t ? a.call(e) : a.call(e, t)
                    }
                })
            },
            2680: function(t, e, n) {
                var r = n(1693);
                r(r.S + r.F, "Object", {
                    assign: n(2075)
                })
            },
            7031: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Object", {
                    create: n(6088)
                })
            },
            3073: function(t, e, n) {
                var r = n(1693);
                r(r.S + r.F * !n(3144), "Object", {
                    defineProperties: n(2390)
                })
            },
            8892: function(t, e, n) {
                var r = n(1693);
                r(r.S + r.F * !n(3144), "Object", {
                    defineProperty: n(4213).f
                })
            },
            230: function(t, e, n) {
                var r = n(9708),
                    i = n(8648).onFreeze;
                n(9870)("freeze", (function(t) {
                    return function(e) {
                        return t && r(e) ? t(i(e)) : e
                    }
                }))
            },
            476: function(t, e, n) {
                var r = n(6282),
                    i = n(4676).f;
                n(9870)("getOwnPropertyDescriptor", (function() {
                    return function(t, e) {
                        return i(r(t), e)
                    }
                }))
            },
            8899: function(t, e, n) {
                n(9870)("getOwnPropertyNames", (function() {
                    return n(5469).f
                }))
            },
            7771: function(t, e, n) {
                var r = n(6040),
                    i = n(8539);
                n(9870)("getPrototypeOf", (function() {
                    return function(t) {
                        return i(r(t))
                    }
                }))
            },
            2395: function(t, e, n) {
                var r = n(9708);
                n(9870)("isExtensible", (function(t) {
                    return function(e) {
                        return !!r(e) && (!t || t(e))
                    }
                }))
            },
            1263: function(t, e, n) {
                var r = n(9708);
                n(9870)("isFrozen", (function(t) {
                    return function(e) {
                        return !r(e) || !!t && t(e)
                    }
                }))
            },
            2875: function(t, e, n) {
                var r = n(9708);
                n(9870)("isSealed", (function(t) {
                    return function(e) {
                        return !r(e) || !!t && t(e)
                    }
                }))
            },
            4177: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Object", {
                    is: n(1366)
                })
            },
            950: function(t, e, n) {
                var r = n(6040),
                    i = n(1126);
                n(9870)("keys", (function() {
                    return function(t) {
                        return i(r(t))
                    }
                }))
            },
            5695: function(t, e, n) {
                var r = n(9708),
                    i = n(8648).onFreeze;
                n(9870)("preventExtensions", (function(t) {
                    return function(e) {
                        return t && r(e) ? t(i(e)) : e
                    }
                }))
            },
            585: function(t, e, n) {
                var r = n(9708),
                    i = n(8648).onFreeze;
                n(9870)("seal", (function(t) {
                    return function(e) {
                        return t && r(e) ? t(i(e)) : e
                    }
                }))
            },
            6548: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Object", {
                    setPrototypeOf: n(1794).set
                })
            },
            6268: function(t, e, n) {
                "use strict";
                var r = n(6347),
                    i = {};
                i[n(4410)("toStringTag")] = "z", i + "" != "[object z]" && n(9593)(Object.prototype, "toString", (function() {
                    return "[object " + r(this) + "]"
                }), !0)
            },
            4212: function(t, e, n) {
                var r = n(1693),
                    i = n(5995);
                r(r.G + r.F * (parseFloat != i), {
                    parseFloat: i
                })
            },
            5291: function(t, e, n) {
                var r = n(1693),
                    i = n(7252);
                r(r.G + r.F * (parseInt != i), {
                    parseInt: i
                })
            },
            2229: function(t, e, n) {
                "use strict";
                var r, i, o, a, s = n(4925),
                    u = n(4405),
                    c = n(1550),
                    l = n(6347),
                    f = n(1693),
                    h = n(9708),
                    p = n(8347),
                    d = n(269),
                    v = n(4036),
                    y = n(3611),
                    g = n(1597).set,
                    m = n(2583)(),
                    _ = n(2219),
                    b = n(4552),
                    w = n(7860),
                    S = n(9894),
                    E = "Promise",
                    x = u.TypeError,
                    I = u.process,
                    O = I && I.versions,
                    T = O && O.v8 || "",
                    P = u.Promise,
                    k = "process" == l(I),
                    A = function() {},
                    N = i = _.f,
                    C = !! function() {
                        try {
                            var t = P.resolve(1),
                                e = (t.constructor = {})[n(4410)("species")] = function(t) {
                                    t(A, A)
                                };
                            return (k || "function" == typeof PromiseRejectionEvent) && t.then(A) instanceof e && 0 !== T.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                        } catch (t) {}
                    }(),
                    M = function(t) {
                        var e;
                        return !(!h(t) || "function" != typeof(e = t.then)) && e
                    },
                    R = function(t, e) {
                        if (!t._n) {
                            t._n = !0;
                            var n = t._c;
                            m((function() {
                                for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                                        var n, o, a, s = i ? e.ok : e.fail,
                                            u = e.resolve,
                                            c = e.reject,
                                            l = e.domain;
                                        try {
                                            s ? (i || (2 == t._h && D(t), t._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === e.promise ? c(x("Promise-chain cycle")) : (o = M(n)) ? o.call(n, u, c) : u(n)) : c(r)
                                        } catch (t) {
                                            l && !a && l.exit(), c(t)
                                        }
                                    }; n.length > o;) a(n[o++]);
                                t._c = [], t._n = !1, e && !t._h && q(t)
                            }))
                        }
                    },
                    q = function(t) {
                        g.call(u, (function() {
                            var e, n, r, i = t._v,
                                o = j(t);
                            if (o && (e = b((function() {
                                    k ? I.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                                        promise: t,
                                        reason: i
                                    }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                                })), t._h = k || j(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                        }))
                    },
                    j = function(t) {
                        return 1 !== t._h && 0 === (t._a || t._c).length
                    },
                    D = function(t) {
                        g.call(u, (function() {
                            var e;
                            k ? I.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                                promise: t,
                                reason: t._v
                            })
                        }))
                    },
                    F = function(t) {
                        var e = this;
                        e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), R(e, !0))
                    },
                    L = function(t) {
                        var e, n = this;
                        if (!n._d) {
                            n._d = !0, n = n._w || n;
                            try {
                                if (n === t) throw x("Promise can't be resolved itself");
                                (e = M(t)) ? m((function() {
                                    var r = {
                                        _w: n,
                                        _d: !1
                                    };
                                    try {
                                        e.call(t, c(L, r, 1), c(F, r, 1))
                                    } catch (t) {
                                        F.call(r, t)
                                    }
                                })): (n._v = t, n._s = 1, R(n, !1))
                            } catch (t) {
                                F.call({
                                    _w: n,
                                    _d: !1
                                }, t)
                            }
                        }
                    };
                C || (P = function(t) {
                    d(this, P, E, "_h"), p(t), r.call(this);
                    try {
                        t(c(L, this, 1), c(F, this, 1))
                    } catch (t) {
                        F.call(this, t)
                    }
                }, (r = function(t) {
                    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
                }).prototype = n(3227)(P.prototype, {
                    then: function(t, e) {
                        var n = N(y(this, P));
                        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = k ? I.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
                    },
                    catch: function(t) {
                        return this.then(void 0, t)
                    }
                }), o = function() {
                    var t = new r;
                    this.promise = t, this.resolve = c(L, t, 1), this.reject = c(F, t, 1)
                }, _.f = N = function(t) {
                    return t === P || t === a ? new o(t) : i(t)
                }), f(f.G + f.W + f.F * !C, {
                    Promise: P
                }), n(5572)(P, E), n(2373)(E), a = n(8080).Promise, f(f.S + f.F * !C, E, {
                    reject: function(t) {
                        var e = N(this);
                        return (0, e.reject)(t), e.promise
                    }
                }), f(f.S + f.F * (s || !C), E, {
                    resolve: function(t) {
                        return S(s && this === a ? P : this, t)
                    }
                }), f(f.S + f.F * !(C && n(3229)((function(t) {
                    P.all(t).catch(A)
                }))), E, {
                    all: function(t) {
                        var e = this,
                            n = N(e),
                            r = n.resolve,
                            i = n.reject,
                            o = b((function() {
                                var n = [],
                                    o = 0,
                                    a = 1;
                                v(t, !1, (function(t) {
                                    var s = o++,
                                        u = !1;
                                    n.push(void 0), a++, e.resolve(t).then((function(t) {
                                        u || (u = !0, n[s] = t, --a || r(n))
                                    }), i)
                                })), --a || r(n)
                            }));
                        return o.e && i(o.v), n.promise
                    },
                    race: function(t) {
                        var e = this,
                            n = N(e),
                            r = n.reject,
                            i = b((function() {
                                v(t, !1, (function(t) {
                                    e.resolve(t).then(n.resolve, r)
                                }))
                            }));
                        return i.e && r(i.v), n.promise
                    }
                })
            },
            9757: function(t, e, n) {
                var r = n(1693),
                    i = n(8347),
                    o = n(5075),
                    a = (n(4405).Reflect || {}).apply,
                    s = Function.apply;
                r(r.S + r.F * !n(496)((function() {
                    a((function() {}))
                })), "Reflect", {
                    apply: function(t, e, n) {
                        var r = i(t),
                            u = o(n);
                        return a ? a(r, e, u) : s.call(r, e, u)
                    }
                })
            },
            8545: function(t, e, n) {
                var r = n(1693),
                    i = n(6088),
                    o = n(8347),
                    a = n(5075),
                    s = n(9708),
                    u = n(496),
                    c = n(7240),
                    l = (n(4405).Reflect || {}).construct,
                    f = u((function() {
                        function t() {}
                        return !(l((function() {}), [], t) instanceof t)
                    })),
                    h = !u((function() {
                        l((function() {}))
                    }));
                r(r.S + r.F * (f || h), "Reflect", {
                    construct: function(t, e) {
                        o(t), a(e);
                        var n = arguments.length < 3 ? t : o(arguments[2]);
                        if (h && !f) return l(t, e, n);
                        if (t == n) {
                            switch (e.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3])
                            }
                            var r = [null];
                            return r.push.apply(r, e), new(c.apply(t, r))
                        }
                        var u = n.prototype,
                            p = i(s(u) ? u : Object.prototype),
                            d = Function.apply.call(t, p, e);
                        return s(d) ? d : p
                    }
                })
            },
            3451: function(t, e, n) {
                var r = n(4213),
                    i = n(1693),
                    o = n(5075),
                    a = n(3825);
                i(i.S + i.F * n(496)((function() {
                    Reflect.defineProperty(r.f({}, 1, {
                        value: 1
                    }), 1, {
                        value: 2
                    })
                })), "Reflect", {
                    defineProperty: function(t, e, n) {
                        o(t), e = a(e, !0), o(n);
                        try {
                            return r.f(t, e, n), !0
                        } catch (t) {
                            return !1
                        }
                    }
                })
            },
            3735: function(t, e, n) {
                var r = n(1693),
                    i = n(4676).f,
                    o = n(5075);
                r(r.S, "Reflect", {
                    deleteProperty: function(t, e) {
                        var n = i(o(t), e);
                        return !(n && !n.configurable) && delete t[e]
                    }
                })
            },
            6012: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(5075),
                    o = function(t) {
                        this._t = i(t), this._i = 0;
                        var e, n = this._k = [];
                        for (e in t) n.push(e)
                    };
                n(9614)(o, "Object", (function() {
                    var t, e = this,
                        n = e._k;
                    do {
                        if (e._i >= n.length) return {
                            value: void 0,
                            done: !0
                        }
                    } while (!((t = n[e._i++]) in e._t));
                    return {
                        value: t,
                        done: !1
                    }
                })), r(r.S, "Reflect", {
                    enumerate: function(t) {
                        return new o(t)
                    }
                })
            },
            3806: function(t, e, n) {
                var r = n(4676),
                    i = n(1693),
                    o = n(5075);
                i(i.S, "Reflect", {
                    getOwnPropertyDescriptor: function(t, e) {
                        return r.f(o(t), e)
                    }
                })
            },
            9063: function(t, e, n) {
                var r = n(1693),
                    i = n(8539),
                    o = n(5075);
                r(r.S, "Reflect", {
                    getPrototypeOf: function(t) {
                        return i(o(t))
                    }
                })
            },
            9849: function(t, e, n) {
                var r = n(4676),
                    i = n(8539),
                    o = n(3050),
                    a = n(1693),
                    s = n(9708),
                    u = n(5075);
                a(a.S, "Reflect", {
                    get: function t(e, n) {
                        var a, c, l = arguments.length < 3 ? e : arguments[2];
                        return u(e) === l ? e[n] : (a = r.f(e, n)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(c = i(e)) ? t(c, n, l) : void 0
                    }
                })
            },
            1111: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Reflect", {
                    has: function(t, e) {
                        return e in t
                    }
                })
            },
            2413: function(t, e, n) {
                var r = n(1693),
                    i = n(5075),
                    o = Object.isExtensible;
                r(r.S, "Reflect", {
                    isExtensible: function(t) {
                        return i(t), !o || o(t)
                    }
                })
            },
            7098: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Reflect", {
                    ownKeys: n(2275)
                })
            },
            2294: function(t, e, n) {
                var r = n(1693),
                    i = n(5075),
                    o = Object.preventExtensions;
                r(r.S, "Reflect", {
                    preventExtensions: function(t) {
                        i(t);
                        try {
                            return o && o(t), !0
                        } catch (t) {
                            return !1
                        }
                    }
                })
            },
            6938: function(t, e, n) {
                var r = n(1693),
                    i = n(1794);
                i && r(r.S, "Reflect", {
                    setPrototypeOf: function(t, e) {
                        i.check(t, e);
                        try {
                            return i.set(t, e), !0
                        } catch (t) {
                            return !1
                        }
                    }
                })
            },
            9920: function(t, e, n) {
                var r = n(4213),
                    i = n(4676),
                    o = n(8539),
                    a = n(3050),
                    s = n(1693),
                    u = n(3388),
                    c = n(5075),
                    l = n(9708);
                s(s.S, "Reflect", {
                    set: function t(e, n, s) {
                        var f, h, p = arguments.length < 4 ? e : arguments[3],
                            d = i.f(c(e), n);
                        if (!d) {
                            if (l(h = o(e))) return t(h, n, s, p);
                            d = u(0)
                        }
                        if (a(d, "value")) {
                            if (!1 === d.writable || !l(p)) return !1;
                            if (f = i.f(p, n)) {
                                if (f.get || f.set || !1 === f.writable) return !1;
                                f.value = s, r.f(p, n, f)
                            } else r.f(p, n, u(0, s));
                            return !0
                        }
                        return void 0 !== d.set && (d.set.call(p, s), !0)
                    }
                })
            },
            1544: function(t, e, n) {
                var r = n(4405),
                    i = n(7856),
                    o = n(4213).f,
                    a = n(7173).f,
                    s = n(939),
                    u = n(5660),
                    c = r.RegExp,
                    l = c,
                    f = c.prototype,
                    h = /a/g,
                    p = /a/g,
                    d = new c(h) !== h;
                if (n(3144) && (!d || n(496)((function() {
                        return p[n(4410)("match")] = !1, c(h) != h || c(p) == p || "/a/i" != c(h, "i")
                    })))) {
                    c = function(t, e) {
                        var n = this instanceof c,
                            r = s(t),
                            o = void 0 === e;
                        return !n && r && t.constructor === c && o ? t : i(d ? new l(r && !o ? t.source : t, e) : l((r = t instanceof c) ? t.source : t, r && o ? u.call(t) : e), n ? this : f, c)
                    };
                    for (var v = function(t) {
                            t in c || o(c, t, {
                                configurable: !0,
                                get: function() {
                                    return l[t]
                                },
                                set: function(e) {
                                    l[t] = e
                                }
                            })
                        }, y = a(l), g = 0; y.length > g;) v(y[g++]);
                    f.constructor = c, c.prototype = f, n(9593)(r, "RegExp", c)
                }
                n(2373)("RegExp")
            },
            7515: function(t, e, n) {
                "use strict";
                var r = n(2562);
                n(1693)({
                    target: "RegExp",
                    proto: !0,
                    forced: r !== /./.exec
                }, {
                    exec: r
                })
            },
            5155: function(t, e, n) {
                n(3144) && "g" != /./g.flags && n(4213).f(RegExp.prototype, "flags", {
                    configurable: !0,
                    get: n(5660)
                })
            },
            4675: function(t, e, n) {
                "use strict";
                var r = n(5075),
                    i = n(5263),
                    o = n(990),
                    a = n(6798);
                n(7925)("match", 1, (function(t, e, n, s) {
                    return [function(n) {
                        var r = t(this),
                            i = null == n ? void 0 : n[e];
                        return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
                    }, function(t) {
                        var e = s(n, t, this);
                        if (e.done) return e.value;
                        var u = r(t),
                            c = String(this);
                        if (!u.global) return a(u, c);
                        var l = u.unicode;
                        u.lastIndex = 0;
                        for (var f, h = [], p = 0; null !== (f = a(u, c));) {
                            var d = String(f[0]);
                            h[p] = d, "" === d && (u.lastIndex = o(c, i(u.lastIndex), l)), p++
                        }
                        return 0 === p ? null : h
                    }]
                }))
            },
            1983: function(t, e, n) {
                "use strict";
                var r = n(5075),
                    i = n(6040),
                    o = n(5263),
                    a = n(4058),
                    s = n(990),
                    u = n(6798),
                    c = Math.max,
                    l = Math.min,
                    f = Math.floor,
                    h = /\$([$&`']|\d\d?|<[^>]*>)/g,
                    p = /\$([$&`']|\d\d?)/g;
                n(7925)("replace", 2, (function(t, e, n, d) {
                    return [function(r, i) {
                        var o = t(this),
                            a = null == r ? void 0 : r[e];
                        return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
                    }, function(t, e) {
                        var i = d(n, t, this, e);
                        if (i.done) return i.value;
                        var f = r(t),
                            h = String(this),
                            p = "function" == typeof e;
                        p || (e = String(e));
                        var y = f.global;
                        if (y) {
                            var g = f.unicode;
                            f.lastIndex = 0
                        }
                        for (var m = [];;) {
                            var _ = u(f, h);
                            if (null === _) break;
                            if (m.push(_), !y) break;
                            "" === String(_[0]) && (f.lastIndex = s(h, o(f.lastIndex), g))
                        }
                        for (var b, w = "", S = 0, E = 0; E < m.length; E++) {
                            _ = m[E];
                            for (var x = String(_[0]), I = c(l(a(_.index), h.length), 0), O = [], T = 1; T < _.length; T++) O.push(void 0 === (b = _[T]) ? b : String(b));
                            var P = _.groups;
                            if (p) {
                                var k = [x].concat(O, I, h);
                                void 0 !== P && k.push(P);
                                var A = String(e.apply(void 0, k))
                            } else A = v(x, h, I, O, P, e);
                            I >= S && (w += h.slice(S, I) + A, S = I + x.length)
                        }
                        return w + h.slice(S)
                    }];

                    function v(t, e, r, o, a, s) {
                        var u = r + t.length,
                            c = o.length,
                            l = p;
                        return void 0 !== a && (a = i(a), l = h), n.call(s, l, (function(n, i) {
                            var s;
                            switch (i.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return t;
                                case "`":
                                    return e.slice(0, r);
                                case "'":
                                    return e.slice(u);
                                case "<":
                                    s = a[i.slice(1, -1)];
                                    break;
                                default:
                                    var l = +i;
                                    if (0 === l) return n;
                                    if (l > c) {
                                        var h = f(l / 10);
                                        return 0 === h ? n : h <= c ? void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1) : n
                                    }
                                    s = o[l - 1]
                            }
                            return void 0 === s ? "" : s
                        }))
                    }
                }))
            },
            6285: function(t, e, n) {
                "use strict";
                var r = n(5075),
                    i = n(1366),
                    o = n(6798);
                n(7925)("search", 1, (function(t, e, n, a) {
                    return [function(n) {
                        var r = t(this),
                            i = null == n ? void 0 : n[e];
                        return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
                    }, function(t) {
                        var e = a(n, t, this);
                        if (e.done) return e.value;
                        var s = r(t),
                            u = String(this),
                            c = s.lastIndex;
                        i(c, 0) || (s.lastIndex = 0);
                        var l = o(s, u);
                        return i(s.lastIndex, c) || (s.lastIndex = c), null === l ? -1 : l.index
                    }]
                }))
            },
            2467: function(t, e, n) {
                "use strict";
                var r = n(939),
                    i = n(5075),
                    o = n(3611),
                    a = n(990),
                    s = n(5263),
                    u = n(6798),
                    c = n(2562),
                    l = n(496),
                    f = Math.min,
                    h = [].push,
                    p = 4294967295,
                    d = !l((function() {
                        RegExp(p, "y")
                    }));
                n(7925)("split", 2, (function(t, e, n, l) {
                    var v;
                    return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
                        var i = String(this);
                        if (void 0 === t && 0 === e) return [];
                        if (!r(t)) return n.call(i, t, e);
                        for (var o, a, s, u = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, d = void 0 === e ? p : e >>> 0, v = new RegExp(t.source, l + "g");
                            (o = c.call(v, i)) && !((a = v.lastIndex) > f && (u.push(i.slice(f, o.index)), o.length > 1 && o.index < i.length && h.apply(u, o.slice(1)), s = o[0].length, f = a, u.length >= d));) v.lastIndex === o.index && v.lastIndex++;
                        return f === i.length ? !s && v.test("") || u.push("") : u.push(i.slice(f)), u.length > d ? u.slice(0, d) : u
                    } : "0".split(void 0, 0).length ? function(t, e) {
                        return void 0 === t && 0 === e ? [] : n.call(this, t, e)
                    } : n, [function(n, r) {
                        var i = t(this),
                            o = null == n ? void 0 : n[e];
                        return void 0 !== o ? o.call(n, i, r) : v.call(String(i), n, r)
                    }, function(t, e) {
                        var r = l(v, t, this, e, v !== n);
                        if (r.done) return r.value;
                        var c = i(t),
                            h = String(this),
                            y = o(c, RegExp),
                            g = c.unicode,
                            m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (d ? "y" : "g"),
                            _ = new y(d ? c : "^(?:" + c.source + ")", m),
                            b = void 0 === e ? p : e >>> 0;
                        if (0 === b) return [];
                        if (0 === h.length) return null === u(_, h) ? [h] : [];
                        for (var w = 0, S = 0, E = []; S < h.length;) {
                            _.lastIndex = d ? S : 0;
                            var x, I = u(_, d ? h : h.slice(S));
                            if (null === I || (x = f(s(_.lastIndex + (d ? 0 : S)), h.length)) === w) S = a(h, S, g);
                            else {
                                if (E.push(h.slice(w, S)), E.length === b) return E;
                                for (var O = 1; O <= I.length - 1; O++)
                                    if (E.push(I[O]), E.length === b) return E;
                                S = w = x
                            }
                        }
                        return E.push(h.slice(w)), E
                    }]
                }))
            },
            223: function(t, e, n) {
                "use strict";
                n(5155);
                var r = n(5075),
                    i = n(5660),
                    o = n(3144),
                    a = "toString",
                    s = /./.toString,
                    u = function(t) {
                        n(9593)(RegExp.prototype, a, t, !0)
                    };
                n(496)((function() {
                    return "/a/b" != s.call({
                        source: "a",
                        flags: "b"
                    })
                })) ? u((function() {
                    var t = r(this);
                    return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
                })) : s.name != a && u((function() {
                    return s.call(this)
                }))
            },
            9594: function(t, e, n) {
                "use strict";
                var r = n(7647),
                    i = n(1554);
                t.exports = n(8107)("Set", (function(t) {
                    return function() {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }), {
                    add: function(t) {
                        return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
                    }
                }, r)
            },
            3583: function(t, e, n) {
                "use strict";
                n(7742)("anchor", (function(t) {
                    return function(e) {
                        return t(this, "a", "name", e)
                    }
                }))
            },
            4234: function(t, e, n) {
                "use strict";
                n(7742)("big", (function(t) {
                    return function() {
                        return t(this, "big", "", "")
                    }
                }))
            },
            6853: function(t, e, n) {
                "use strict";
                n(7742)("blink", (function(t) {
                    return function() {
                        return t(this, "blink", "", "")
                    }
                }))
            },
            5165: function(t, e, n) {
                "use strict";
                n(7742)("bold", (function(t) {
                    return function() {
                        return t(this, "b", "", "")
                    }
                }))
            },
            730: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(5454)(!1);
                r(r.P, "String", {
                    codePointAt: function(t) {
                        return i(this, t)
                    }
                })
            },
            3948: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(5263),
                    o = n(1452),
                    a = "endsWith",
                    s = "".endsWith;
                r(r.P + r.F * n(528)(a), "String", {
                    endsWith: function(t) {
                        var e = o(this, t, a),
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            r = i(e.length),
                            u = void 0 === n ? r : Math.min(i(n), r),
                            c = String(t);
                        return s ? s.call(e, c, u) : e.slice(u - c.length, u) === c
                    }
                })
            },
            4050: function(t, e, n) {
                "use strict";
                n(7742)("fixed", (function(t) {
                    return function() {
                        return t(this, "tt", "", "")
                    }
                }))
            },
            7868: function(t, e, n) {
                "use strict";
                n(7742)("fontcolor", (function(t) {
                    return function(e) {
                        return t(this, "font", "color", e)
                    }
                }))
            },
            1191: function(t, e, n) {
                "use strict";
                n(7742)("fontsize", (function(t) {
                    return function(e) {
                        return t(this, "font", "size", e)
                    }
                }))
            },
            3684: function(t, e, n) {
                var r = n(1693),
                    i = n(9519),
                    o = String.fromCharCode,
                    a = String.fromCodePoint;
                r(r.S + r.F * (!!a && 1 != a.length), "String", {
                    fromCodePoint: function(t) {
                        for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                            if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                            n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                        }
                        return n.join("")
                    }
                })
            },
            4487: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(1452),
                    o = "includes";
                r(r.P + r.F * n(528)(o), "String", {
                    includes: function(t) {
                        return !!~i(this, t, o).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            5220: function(t, e, n) {
                "use strict";
                n(7742)("italics", (function(t) {
                    return function() {
                        return t(this, "i", "", "")
                    }
                }))
            },
            1872: function(t, e, n) {
                "use strict";
                var r = n(5454)(!0);
                n(5706)(String, "String", (function(t) {
                    this._t = String(t), this._i = 0
                }), (function() {
                    var t, e = this._t,
                        n = this._i;
                    return n >= e.length ? {
                        value: void 0,
                        done: !0
                    } : (t = r(e, n), this._i += t.length, {
                        value: t,
                        done: !1
                    })
                }))
            },
            1644: function(t, e, n) {
                "use strict";
                n(7742)("link", (function(t) {
                    return function(e) {
                        return t(this, "a", "href", e)
                    }
                }))
            },
            6373: function(t, e, n) {
                var r = n(1693),
                    i = n(6282),
                    o = n(5263);
                r(r.S, "String", {
                    raw: function(t) {
                        for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
                        return a.join("")
                    }
                })
            },
            2778: function(t, e, n) {
                var r = n(1693);
                r(r.P, "String", {
                    repeat: n(3874)
                })
            },
            4609: function(t, e, n) {
                "use strict";
                n(7742)("small", (function(t) {
                    return function() {
                        return t(this, "small", "", "")
                    }
                }))
            },
            1390: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(5263),
                    o = n(1452),
                    a = "startsWith",
                    s = "".startsWith;
                r(r.P + r.F * n(528)(a), "String", {
                    startsWith: function(t) {
                        var e = o(this, t, a),
                            n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                            r = String(t);
                        return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r
                    }
                })
            },
            1627: function(t, e, n) {
                "use strict";
                n(7742)("strike", (function(t) {
                    return function() {
                        return t(this, "strike", "", "")
                    }
                }))
            },
            8942: function(t, e, n) {
                "use strict";
                n(7742)("sub", (function(t) {
                    return function() {
                        return t(this, "sub", "", "")
                    }
                }))
            },
            8325: function(t, e, n) {
                "use strict";
                n(7742)("sup", (function(t) {
                    return function() {
                        return t(this, "sup", "", "")
                    }
                }))
            },
            2067: function(t, e, n) {
                "use strict";
                n(5480)("trim", (function(t) {
                    return function() {
                        return t(this, 3)
                    }
                }))
            },
            107: function(t, e, n) {
                "use strict";
                var r = n(4405),
                    i = n(3050),
                    o = n(3144),
                    a = n(1693),
                    s = n(9593),
                    u = n(8648).KEY,
                    c = n(496),
                    l = n(7104),
                    f = n(5572),
                    h = n(7767),
                    p = n(4410),
                    d = n(3438),
                    v = n(4519),
                    y = n(6522),
                    g = n(3623),
                    m = n(5075),
                    _ = n(9708),
                    b = n(6040),
                    w = n(6282),
                    S = n(3825),
                    E = n(3388),
                    x = n(6088),
                    I = n(5469),
                    O = n(4676),
                    T = n(8910),
                    P = n(4213),
                    k = n(1126),
                    A = O.f,
                    N = P.f,
                    C = I.f,
                    M = r.Symbol,
                    R = r.JSON,
                    q = R && R.stringify,
                    j = p("_hidden"),
                    D = p("toPrimitive"),
                    F = {}.propertyIsEnumerable,
                    L = l("symbol-registry"),
                    B = l("symbols"),
                    U = l("op-symbols"),
                    z = Object.prototype,
                    W = "function" == typeof M && !!T.f,
                    G = r.QObject,
                    V = !G || !G.prototype || !G.prototype.findChild,
                    K = o && c((function() {
                        return 7 != x(N({}, "a", {
                            get: function() {
                                return N(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                    })) ? function(t, e, n) {
                        var r = A(z, e);
                        r && delete z[e], N(t, e, n), r && t !== z && N(z, e, r)
                    } : N,
                    H = function(t) {
                        var e = B[t] = x(M.prototype);
                        return e._k = t, e
                    },
                    X = W && "symbol" == typeof M.iterator ? function(t) {
                        return "symbol" == typeof t
                    } : function(t) {
                        return t instanceof M
                    },
                    $ = function(t, e, n) {
                        return t === z && $(U, e, n), m(t), e = S(e, !0), m(n), i(B, e) ? (n.enumerable ? (i(t, j) && t[j][e] && (t[j][e] = !1), n = x(n, {
                            enumerable: E(0, !1)
                        })) : (i(t, j) || N(t, j, E(1, {})), t[j][e] = !0), K(t, e, n)) : N(t, e, n)
                    },
                    Y = function(t, e) {
                        m(t);
                        for (var n, r = y(e = w(e)), i = 0, o = r.length; o > i;) $(t, n = r[i++], e[n]);
                        return t
                    },
                    Q = function(t) {
                        var e = F.call(this, t = S(t, !0));
                        return !(this === z && i(B, t) && !i(U, t)) && (!(e || !i(this, t) || !i(B, t) || i(this, j) && this[j][t]) || e)
                    },
                    J = function(t, e) {
                        if (t = w(t), e = S(e, !0), t !== z || !i(B, e) || i(U, e)) {
                            var n = A(t, e);
                            return !n || !i(B, e) || i(t, j) && t[j][e] || (n.enumerable = !0), n
                        }
                    },
                    Z = function(t) {
                        for (var e, n = C(w(t)), r = [], o = 0; n.length > o;) i(B, e = n[o++]) || e == j || e == u || r.push(e);
                        return r
                    },
                    tt = function(t) {
                        for (var e, n = t === z, r = C(n ? U : w(t)), o = [], a = 0; r.length > a;) !i(B, e = r[a++]) || n && !i(z, e) || o.push(B[e]);
                        return o
                    };
                W || (M = function() {
                    if (this instanceof M) throw TypeError("Symbol is not a constructor!");
                    var t = h(arguments.length > 0 ? arguments[0] : void 0),
                        e = function(n) {
                            this === z && e.call(U, n), i(this, j) && i(this[j], t) && (this[j][t] = !1), K(this, t, E(1, n))
                        };
                    return o && V && K(z, t, {
                        configurable: !0,
                        set: e
                    }), H(t)
                }, s(M.prototype, "toString", (function() {
                    return this._k
                })), O.f = J, P.f = $, n(7173).f = I.f = Z, n(2806).f = Q, T.f = tt, o && !n(4925) && s(z, "propertyIsEnumerable", Q, !0), d.f = function(t) {
                    return H(p(t))
                }), a(a.G + a.W + a.F * !W, {
                    Symbol: M
                });
                for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
                for (var rt = k(p.store), it = 0; rt.length > it;) v(rt[it++]);
                a(a.S + a.F * !W, "Symbol", {
                    for: function(t) {
                        return i(L, t += "") ? L[t] : L[t] = M(t)
                    },
                    keyFor: function(t) {
                        if (!X(t)) throw TypeError(t + " is not a symbol!");
                        for (var e in L)
                            if (L[e] === t) return e
                    },
                    useSetter: function() {
                        V = !0
                    },
                    useSimple: function() {
                        V = !1
                    }
                }), a(a.S + a.F * !W, "Object", {
                    create: function(t, e) {
                        return void 0 === e ? x(t) : Y(x(t), e)
                    },
                    defineProperty: $,
                    defineProperties: Y,
                    getOwnPropertyDescriptor: J,
                    getOwnPropertyNames: Z,
                    getOwnPropertySymbols: tt
                });
                var ot = c((function() {
                    T.f(1)
                }));
                a(a.S + a.F * ot, "Object", {
                    getOwnPropertySymbols: function(t) {
                        return T.f(b(t))
                    }
                }), R && a(a.S + a.F * (!W || c((function() {
                    var t = M();
                    return "[null]" != q([t]) || "{}" != q({
                        a: t
                    }) || "{}" != q(Object(t))
                }))), "JSON", {
                    stringify: function(t) {
                        for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                        if (n = e = r[1], (_(e) || void 0 !== t) && !X(t)) return g(e) || (e = function(t, e) {
                            if ("function" == typeof n && (e = n.call(this, t, e)), !X(e)) return e
                        }), r[1] = e, q.apply(R, r)
                    }
                }), M.prototype[D] || n(4461)(M.prototype, D, M.prototype.valueOf), f(M, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
            },
            7955: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6331),
                    o = n(7050),
                    a = n(5075),
                    s = n(9519),
                    u = n(5263),
                    c = n(9708),
                    l = n(4405).ArrayBuffer,
                    f = n(3611),
                    h = o.ArrayBuffer,
                    p = o.DataView,
                    d = i.ABV && l.isView,
                    v = h.prototype.slice,
                    y = i.VIEW,
                    g = "ArrayBuffer";
                r(r.G + r.W + r.F * (l !== h), {
                    ArrayBuffer: h
                }), r(r.S + r.F * !i.CONSTR, g, {
                    isView: function(t) {
                        return d && d(t) || c(t) && y in t
                    }
                }), r(r.P + r.U + r.F * n(496)((function() {
                    return !new h(2).slice(1, void 0).byteLength
                })), g, {
                    slice: function(t, e) {
                        if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                        for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new(f(this, h))(u(i - r)), c = new p(this), l = new p(o), d = 0; r < i;) l.setUint8(d++, c.getUint8(r++));
                        return o
                    }
                }), n(2373)(g)
            },
            4879: function(t, e, n) {
                var r = n(1693);
                r(r.G + r.W + r.F * !n(6331).ABV, {
                    DataView: n(7050).DataView
                })
            },
            7117: function(t, e, n) {
                n(3412)("Float32", 4, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            1370: function(t, e, n) {
                n(3412)("Float64", 8, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            157: function(t, e, n) {
                n(3412)("Int16", 2, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            2634: function(t, e, n) {
                n(3412)("Int32", 4, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            5275: function(t, e, n) {
                n(3412)("Int8", 1, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            2099: function(t, e, n) {
                n(3412)("Uint16", 2, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            3463: function(t, e, n) {
                n(3412)("Uint32", 4, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            3411: function(t, e, n) {
                n(3412)("Uint8", 1, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }))
            },
            9163: function(t, e, n) {
                n(3412)("Uint8", 1, (function(t) {
                    return function(e, n, r) {
                        return t(this, e, n, r)
                    }
                }), !0)
            },
            6189: function(t, e, n) {
                "use strict";
                var r, i = n(4405),
                    o = n(3635)(0),
                    a = n(9593),
                    s = n(8648),
                    u = n(2075),
                    c = n(8348),
                    l = n(9708),
                    f = n(1554),
                    h = n(1554),
                    p = !i.ActiveXObject && "ActiveXObject" in i,
                    d = "WeakMap",
                    v = s.getWeak,
                    y = Object.isExtensible,
                    g = c.ufstore,
                    m = function(t) {
                        return function() {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0)
                        }
                    },
                    _ = {
                        get: function(t) {
                            if (l(t)) {
                                var e = v(t);
                                return !0 === e ? g(f(this, d)).get(t) : e ? e[this._i] : void 0
                            }
                        },
                        set: function(t, e) {
                            return c.def(f(this, d), t, e)
                        }
                    },
                    b = t.exports = n(8107)(d, m, _, c, !0, !0);
                h && p && (u((r = c.getConstructor(m, d)).prototype, _), s.NEED = !0, o(["delete", "has", "get", "set"], (function(t) {
                    var e = b.prototype,
                        n = e[t];
                    a(e, t, (function(e, i) {
                        if (l(e) && !y(e)) {
                            this._f || (this._f = new r);
                            var o = this._f[t](e, i);
                            return "set" == t ? this : o
                        }
                        return n.call(this, e, i)
                    }))
                })))
            },
            6937: function(t, e, n) {
                "use strict";
                var r = n(8348),
                    i = n(1554),
                    o = "WeakSet";
                n(8107)(o, (function(t) {
                    return function() {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }), {
                    add: function(t) {
                        return r.def(i(this, o), t, !0)
                    }
                }, r, !1, !0)
            },
            3570: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(4225),
                    o = n(6040),
                    a = n(5263),
                    s = n(8347),
                    u = n(2143);
                r(r.P, "Array", {
                    flatMap: function(t) {
                        var e, n, r = o(this);
                        return s(t), e = a(r.length), n = u(r, 0), i(n, r, r, e, 0, 1, t, arguments[1]), n
                    }
                }), n(7296)("flatMap")
            },
            1625: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(4225),
                    o = n(6040),
                    a = n(5263),
                    s = n(4058),
                    u = n(2143);
                r(r.P, "Array", {
                    flatten: function() {
                        var t = arguments[0],
                            e = o(this),
                            n = a(e.length),
                            r = u(e, 0);
                        return i(r, e, e, n, 0, void 0 === t ? 1 : s(t)), r
                    }
                }), n(7296)("flatten")
            },
            3605: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(4513)(!0);
                r(r.P, "Array", {
                    includes: function(t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), n(7296)("includes")
            },
            8553: function(t, e, n) {
                var r = n(1693),
                    i = n(2583)(),
                    o = n(4405).process,
                    a = "process" == n(2380)(o);
                r(r.G, {
                    asap: function(t) {
                        var e = a && o.domain;
                        i(e ? e.bind(t) : t)
                    }
                })
            },
            826: function(t, e, n) {
                var r = n(1693),
                    i = n(2380);
                r(r.S, "Error", {
                    isError: function(t) {
                        return "Error" === i(t)
                    }
                })
            },
            3499: function(t, e, n) {
                var r = n(1693);
                r(r.G, {
                    global: n(4405)
                })
            },
            5865: function(t, e, n) {
                n(578)("Map")
            },
            8920: function(t, e, n) {
                n(147)("Map")
            },
            5745: function(t, e, n) {
                var r = n(1693);
                r(r.P + r.R, "Map", {
                    toJSON: n(2935)("Map")
                })
            },
            3588: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    clamp: function(t, e, n) {
                        return Math.min(n, Math.max(e, t))
                    }
                })
            },
            4607: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    DEG_PER_RAD: Math.PI / 180
                })
            },
            2641: function(t, e, n) {
                var r = n(1693),
                    i = 180 / Math.PI;
                r(r.S, "Math", {
                    degrees: function(t) {
                        return t * i
                    }
                })
            },
            5657: function(t, e, n) {
                var r = n(1693),
                    i = n(4917),
                    o = n(8961);
                r(r.S, "Math", {
                    fscale: function(t, e, n, r, a) {
                        return o(i(t, e, n, r, a))
                    }
                })
            },
            9252: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    iaddh: function(t, e, n, r) {
                        var i = t >>> 0,
                            o = n >>> 0;
                        return (e >>> 0) + (r >>> 0) + ((i & o | (i | o) & ~(i + o >>> 0)) >>> 31) | 0
                    }
                })
            },
            3548: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    imulh: function(t, e) {
                        var n = 65535,
                            r = +t,
                            i = +e,
                            o = r & n,
                            a = i & n,
                            s = r >> 16,
                            u = i >> 16,
                            c = (s * a >>> 0) + (o * a >>> 16);
                        return s * u + (c >> 16) + ((o * u >>> 0) + (c & n) >> 16)
                    }
                })
            },
            9295: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    isubh: function(t, e, n, r) {
                        var i = t >>> 0,
                            o = n >>> 0;
                        return (e >>> 0) - (r >>> 0) - ((~i & o | ~(i ^ o) & i - o >>> 0) >>> 31) | 0
                    }
                })
            },
            6577: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    RAD_PER_DEG: 180 / Math.PI
                })
            },
            5914: function(t, e, n) {
                var r = n(1693),
                    i = Math.PI / 180;
                r(r.S, "Math", {
                    radians: function(t) {
                        return t * i
                    }
                })
            },
            4100: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    scale: n(4917)
                })
            },
            598: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    signbit: function(t) {
                        return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
                    }
                })
            },
            7151: function(t, e, n) {
                var r = n(1693);
                r(r.S, "Math", {
                    umulh: function(t, e) {
                        var n = 65535,
                            r = +t,
                            i = +e,
                            o = r & n,
                            a = i & n,
                            s = r >>> 16,
                            u = i >>> 16,
                            c = (s * a >>> 0) + (o * a >>> 16);
                        return s * u + (c >>> 16) + ((o * u >>> 0) + (c & n) >>> 16)
                    }
                })
            },
            4255: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6040),
                    o = n(8347),
                    a = n(4213);
                n(3144) && r(r.P + n(2296), "Object", {
                    __defineGetter__: function(t, e) {
                        a.f(i(this), t, {
                            get: o(e),
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                })
            },
            1346: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6040),
                    o = n(8347),
                    a = n(4213);
                n(3144) && r(r.P + n(2296), "Object", {
                    __defineSetter__: function(t, e) {
                        a.f(i(this), t, {
                            set: o(e),
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                })
            },
            3788: function(t, e, n) {
                var r = n(1693),
                    i = n(2133)(!0);
                r(r.S, "Object", {
                    entries: function(t) {
                        return i(t)
                    }
                })
            },
            9872: function(t, e, n) {
                var r = n(1693),
                    i = n(2275),
                    o = n(6282),
                    a = n(4676),
                    s = n(2559);
                r(r.S, "Object", {
                    getOwnPropertyDescriptors: function(t) {
                        for (var e, n, r = o(t), u = a.f, c = i(r), l = {}, f = 0; c.length > f;) void 0 !== (n = u(r, e = c[f++])) && s(l, e, n);
                        return l
                    }
                })
            },
            8987: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6040),
                    o = n(3825),
                    a = n(8539),
                    s = n(4676).f;
                n(3144) && r(r.P + n(2296), "Object", {
                    __lookupGetter__: function(t) {
                        var e, n = i(this),
                            r = o(t, !0);
                        do {
                            if (e = s(n, r)) return e.get
                        } while (n = a(n))
                    }
                })
            },
            6605: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6040),
                    o = n(3825),
                    a = n(8539),
                    s = n(4676).f;
                n(3144) && r(r.P + n(2296), "Object", {
                    __lookupSetter__: function(t) {
                        var e, n = i(this),
                            r = o(t, !0);
                        do {
                            if (e = s(n, r)) return e.set
                        } while (n = a(n))
                    }
                })
            },
            2094: function(t, e, n) {
                var r = n(1693),
                    i = n(2133)(!1);
                r(r.S, "Object", {
                    values: function(t) {
                        return i(t)
                    }
                })
            },
            1071: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(4405),
                    o = n(8080),
                    a = n(2583)(),
                    s = n(4410)("observable"),
                    u = n(8347),
                    c = n(5075),
                    l = n(269),
                    f = n(3227),
                    h = n(4461),
                    p = n(4036),
                    d = p.RETURN,
                    v = function(t) {
                        return null == t ? void 0 : u(t)
                    },
                    y = function(t) {
                        var e = t._c;
                        e && (t._c = void 0, e())
                    },
                    g = function(t) {
                        return void 0 === t._o
                    },
                    m = function(t) {
                        g(t) || (t._o = void 0, y(t))
                    },
                    _ = function(t, e) {
                        c(t), this._c = void 0, this._o = t, t = new b(this);
                        try {
                            var n = e(t),
                                r = n;
                            null != n && ("function" == typeof n.unsubscribe ? n = function() {
                                r.unsubscribe()
                            } : u(n), this._c = n)
                        } catch (e) {
                            return void t.error(e)
                        }
                        g(this) && y(this)
                    };
                _.prototype = f({}, {
                    unsubscribe: function() {
                        m(this)
                    }
                });
                var b = function(t) {
                    this._s = t
                };
                b.prototype = f({}, {
                    next: function(t) {
                        var e = this._s;
                        if (!g(e)) {
                            var n = e._o;
                            try {
                                var r = v(n.next);
                                if (r) return r.call(n, t)
                            } catch (t) {
                                try {
                                    m(e)
                                } finally {
                                    throw t
                                }
                            }
                        }
                    },
                    error: function(t) {
                        var e = this._s;
                        if (g(e)) throw t;
                        var n = e._o;
                        e._o = void 0;
                        try {
                            var r = v(n.error);
                            if (!r) throw t;
                            t = r.call(n, t)
                        } catch (t) {
                            try {
                                y(e)
                            } finally {
                                throw t
                            }
                        }
                        return y(e), t
                    },
                    complete: function(t) {
                        var e = this._s;
                        if (!g(e)) {
                            var n = e._o;
                            e._o = void 0;
                            try {
                                var r = v(n.complete);
                                t = r ? r.call(n, t) : void 0
                            } catch (t) {
                                try {
                                    y(e)
                                } finally {
                                    throw t
                                }
                            }
                            return y(e), t
                        }
                    }
                });
                var w = function(t) {
                    l(this, w, "Observable", "_f")._f = u(t)
                };
                f(w.prototype, {
                    subscribe: function(t) {
                        return new _(t, this._f)
                    },
                    forEach: function(t) {
                        var e = this;
                        return new(o.Promise || i.Promise)((function(n, r) {
                            u(t);
                            var i = e.subscribe({
                                next: function(e) {
                                    try {
                                        return t(e)
                                    } catch (t) {
                                        r(t), i.unsubscribe()
                                    }
                                },
                                error: r,
                                complete: n
                            })
                        }))
                    }
                }), f(w, {
                    from: function(t) {
                        var e = "function" == typeof this ? this : w,
                            n = v(c(t)[s]);
                        if (n) {
                            var r = c(n.call(t));
                            return r.constructor === e ? r : new e((function(t) {
                                return r.subscribe(t)
                            }))
                        }
                        return new e((function(e) {
                            var n = !1;
                            return a((function() {
                                    if (!n) {
                                        try {
                                            if (p(t, !1, (function(t) {
                                                    if (e.next(t), n) return d
                                                })) === d) return
                                        } catch (t) {
                                            if (n) throw t;
                                            return void e.error(t)
                                        }
                                        e.complete()
                                    }
                                })),
                                function() {
                                    n = !0
                                }
                        }))
                    },
                    of: function() {
                        for (var t = 0, e = arguments.length, n = new Array(e); t < e;) n[t] = arguments[t++];
                        return new("function" == typeof this ? this : w)((function(t) {
                            var e = !1;
                            return a((function() {
                                    if (!e) {
                                        for (var r = 0; r < n.length; ++r)
                                            if (t.next(n[r]), e) return;
                                        t.complete()
                                    }
                                })),
                                function() {
                                    e = !0
                                }
                        }))
                    }
                }), h(w.prototype, s, (function() {
                    return this
                })), r(r.G, {
                    Observable: w
                }), n(2373)("Observable")
            },
            7752: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(8080),
                    o = n(4405),
                    a = n(3611),
                    s = n(9894);
                r(r.P + r.R, "Promise", {
                    finally: function(t) {
                        var e = a(this, i.Promise || o.Promise),
                            n = "function" == typeof t;
                        return this.then(n ? function(n) {
                            return s(e, t()).then((function() {
                                return n
                            }))
                        } : t, n ? function(n) {
                            return s(e, t()).then((function() {
                                throw n
                            }))
                        } : t)
                    }
                })
            },
            4243: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(2219),
                    o = n(4552);
                r(r.S, "Promise", {
                    try: function(t) {
                        var e = i.f(this),
                            n = o(t);
                        return (n.e ? e.reject : e.resolve)(n.v), e.promise
                    }
                })
            },
            7551: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = r.key,
                    a = r.set;
                r.exp({
                    defineMetadata: function(t, e, n, r) {
                        a(t, e, i(n), o(r))
                    }
                })
            },
            6157: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = r.key,
                    a = r.map,
                    s = r.store;
                r.exp({
                    deleteMetadata: function(t, e) {
                        var n = arguments.length < 3 ? void 0 : o(arguments[2]),
                            r = a(i(e), n, !1);
                        if (void 0 === r || !r.delete(t)) return !1;
                        if (r.size) return !0;
                        var u = s.get(e);
                        return u.delete(n), !!u.size || s.delete(e)
                    }
                })
            },
            9493: function(t, e, n) {
                var r = n(9594),
                    i = n(9315),
                    o = n(380),
                    a = n(5075),
                    s = n(8539),
                    u = o.keys,
                    c = o.key,
                    l = function(t, e) {
                        var n = u(t, e),
                            o = s(t);
                        if (null === o) return n;
                        var a = l(o, e);
                        return a.length ? n.length ? i(new r(n.concat(a))) : a : n
                    };
                o.exp({
                    getMetadataKeys: function(t) {
                        return l(a(t), arguments.length < 2 ? void 0 : c(arguments[1]))
                    }
                })
            },
            929: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = n(8539),
                    a = r.has,
                    s = r.get,
                    u = r.key,
                    c = function(t, e, n) {
                        if (a(t, e, n)) return s(t, e, n);
                        var r = o(e);
                        return null !== r ? c(t, r, n) : void 0
                    };
                r.exp({
                    getMetadata: function(t, e) {
                        return c(t, i(e), arguments.length < 3 ? void 0 : u(arguments[2]))
                    }
                })
            },
            314: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = r.keys,
                    a = r.key;
                r.exp({
                    getOwnMetadataKeys: function(t) {
                        return o(i(t), arguments.length < 2 ? void 0 : a(arguments[1]))
                    }
                })
            },
            3440: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = r.get,
                    a = r.key;
                r.exp({
                    getOwnMetadata: function(t, e) {
                        return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]))
                    }
                })
            },
            9352: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = n(8539),
                    a = r.has,
                    s = r.key,
                    u = function(t, e, n) {
                        if (a(t, e, n)) return !0;
                        var r = o(e);
                        return null !== r && u(t, r, n)
                    };
                r.exp({
                    hasMetadata: function(t, e) {
                        return u(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]))
                    }
                })
            },
            8285: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = r.has,
                    a = r.key;
                r.exp({
                    hasOwnMetadata: function(t, e) {
                        return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]))
                    }
                })
            },
            2541: function(t, e, n) {
                var r = n(380),
                    i = n(5075),
                    o = n(8347),
                    a = r.key,
                    s = r.set;
                r.exp({
                    metadata: function(t, e) {
                        return function(n, r) {
                            s(t, e, (void 0 !== r ? i : o)(n), a(r))
                        }
                    }
                })
            },
            8906: function(t, e, n) {
                n(578)("Set")
            },
            5127: function(t, e, n) {
                n(147)("Set")
            },
            7225: function(t, e, n) {
                var r = n(1693);
                r(r.P + r.R, "Set", {
                    toJSON: n(2935)("Set")
                })
            },
            5747: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(5454)(!0),
                    o = n(496)((function() {
                        return "𠮷" !== "𠮷".at(0)
                    }));
                r(r.P + r.F * o, "String", {
                    at: function(t) {
                        return i(this, t)
                    }
                })
            },
            5707: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(1083),
                    o = n(5263),
                    a = n(939),
                    s = n(5660),
                    u = RegExp.prototype,
                    c = function(t, e) {
                        this._r = t, this._s = e
                    };
                n(9614)(c, "RegExp String", (function() {
                    var t = this._r.exec(this._s);
                    return {
                        value: t,
                        done: null === t
                    }
                })), r(r.P, "String", {
                    matchAll: function(t) {
                        if (i(this), !a(t)) throw TypeError(t + " is not a regexp!");
                        var e = String(this),
                            n = "flags" in u ? String(t.flags) : s.call(t),
                            r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
                        return r.lastIndex = o(t.lastIndex), new c(r, e)
                    }
                })
            },
            1409: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6687),
                    o = n(7860),
                    a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
                r(r.P + r.F * a, "String", {
                    padEnd: function(t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
                    }
                })
            },
            304: function(t, e, n) {
                "use strict";
                var r = n(1693),
                    i = n(6687),
                    o = n(7860),
                    a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
                r(r.P + r.F * a, "String", {
                    padStart: function(t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
                    }
                })
            },
            7066: function(t, e, n) {
                "use strict";
                n(5480)("trimLeft", (function(t) {
                    return function() {
                        return t(this, 1)
                    }
                }), "trimStart")
            },
            3255: function(t, e, n) {
                "use strict";
                n(5480)("trimRight", (function(t) {
                    return function() {
                        return t(this, 2)
                    }
                }), "trimEnd")
            },
            4757: function(t, e, n) {
                n(4519)("asyncIterator")
            },
            7414: function(t, e, n) {
                n(4519)("observable")
            },
            1178: function(t, e, n) {
                var r = n(1693);
                r(r.S, "System", {
                    global: n(4405)
                })
            },
            6006: function(t, e, n) {
                n(578)("WeakMap")
            },
            9676: function(t, e, n) {
                n(147)("WeakMap")
            },
            1743: function(t, e, n) {
                n(578)("WeakSet")
            },
            9026: function(t, e, n) {
                n(147)("WeakSet")
            },
            9635: function(t, e, n) {
                for (var r = n(6172), i = n(1126), o = n(9593), a = n(4405), s = n(4461), u = n(7985), c = n(4410), l = c("iterator"), f = c("toStringTag"), h = u.Array, p = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1
                    }, d = i(p), v = 0; v < d.length; v++) {
                    var y, g = d[v],
                        m = p[g],
                        _ = a[g],
                        b = _ && _.prototype;
                    if (b && (b[l] || s(b, l, h), b[f] || s(b, f, g), u[g] = h, m))
                        for (y in r) b[y] || o(b, y, r[y], !0)
                }
            },
            7761: function(t, e, n) {
                var r = n(1693),
                    i = n(1597);
                r(r.G + r.B, {
                    setImmediate: i.set,
                    clearImmediate: i.clear
                })
            },
            9736: function(t, e, n) {
                var r = n(4405),
                    i = n(1693),
                    o = n(7860),
                    a = [].slice,
                    s = /MSIE .\./.test(o),
                    u = function(t) {
                        return function(e, n) {
                            var r = arguments.length > 2,
                                i = !!r && a.call(arguments, 2);
                            return t(r ? function() {
                                ("function" == typeof e ? e : Function(e)).apply(this, i)
                            } : e, n)
                        }
                    };
                i(i.G + i.B + i.F * s, {
                    setTimeout: u(r.setTimeout),
                    setInterval: u(r.setInterval)
                })
            },
            7931: function(t, e, n) {
                n(107), n(7031), n(8892), n(3073), n(476), n(7771), n(950), n(8899), n(230), n(585), n(5695), n(1263), n(2875), n(2395), n(2680), n(4177), n(6548), n(6268), n(7442), n(6278), n(7998), n(5291), n(4212), n(5434), n(7967), n(3552), n(4412), n(7993), n(1755), n(5390), n(352), n(526), n(708), n(2360), n(5114), n(6367), n(7345), n(9471), n(5890), n(8299), n(9286), n(8240), n(1050), n(8246), n(9349), n(5159), n(3158), n(7521), n(2565), n(8337), n(8582), n(2310), n(3684), n(6373), n(2067), n(1872), n(730), n(3948), n(4487), n(2778), n(1390), n(3583), n(4234), n(6853), n(5165), n(4050), n(7868), n(1191), n(5220), n(1644), n(4609), n(1627), n(8942), n(8325), n(2330), n(6665), n(2943), n(8616), n(1002), n(2550), n(9731), n(745), n(5956), n(6149), n(2106), n(9946), n(2369), n(8931), n(4135), n(6075), n(9662), n(3565), n(9209), n(2733), n(9440), n(5588), n(6233), n(5294), n(5324), n(6172), n(1544), n(7515), n(223), n(5155), n(4675), n(1983), n(6285), n(2467), n(2229), n(9164), n(9594), n(6189), n(6937), n(7955), n(4879), n(5275), n(3411), n(9163), n(157), n(2099), n(2634), n(3463), n(7117), n(1370), n(9757), n(8545), n(3451), n(3735), n(6012), n(9849), n(3806), n(9063), n(1111), n(2413), n(7098), n(2294), n(9920), n(6938), n(3605), n(3570), n(1625), n(5747), n(304), n(1409), n(7066), n(3255), n(5707), n(4757), n(7414), n(9872), n(2094), n(3788), n(4255), n(1346), n(8987), n(6605), n(5745), n(7225), n(8920), n(5127), n(9676), n(9026), n(5865), n(8906), n(6006), n(1743), n(3499), n(1178), n(826), n(3588), n(4607), n(2641), n(5657), n(9252), n(9295), n(3548), n(6577), n(5914), n(4100), n(7151), n(598), n(7752), n(4243), n(7551), n(6157), n(929), n(9493), n(3440), n(314), n(9352), n(8285), n(2541), n(8553), n(1071), n(9736), n(7761), n(9635), t.exports = n(8080)
            },
            3746: function() {
                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, e) {
                    e = e || window;
                    for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
                })
            },
            4534: function(t, e, n) {
                var r = n(8865),
                    i = n(8128),
                    o = function(t, e) {
                        this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, r.apply(this, arguments)
                    };
                (o.prototype = new r).constructor = o, o.prototype._pathString = function(t) {
                    var e = t.strokeWidth;
                    t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
                    var n = 50 - e / 2;
                    return i.render(this._pathTemplate, {
                        radius: n,
                        "2radius": 2 * n
                    })
                }, o.prototype._trailString = function(t) {
                    return this._pathString(t)
                }, t.exports = o
            },
            4688: function(t, e, n) {
                var r = n(8865),
                    i = n(8128),
                    o = function(t, e) {
                        this._pathTemplate = "M 0,{center} L 100,{center}", r.apply(this, arguments)
                    };
                (o.prototype = new r).constructor = o, o.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth), t.setAttribute("preserveAspectRatio", "none")
                }, o.prototype._pathString = function(t) {
                    return i.render(this._pathTemplate, {
                        center: t.strokeWidth / 2
                    })
                }, o.prototype._trailString = function(t) {
                    return this._pathString(t)
                }, t.exports = o
            },
            2086: function(t, e, n) {
                t.exports = {
                    Line: n(4688),
                    Circle: n(4534),
                    SemiCircle: n(9157),
                    Square: n(8681),
                    Path: n(9888),
                    Shape: n(8865),
                    utils: n(8128)
                }
            },
            9888: function(t, e, n) {
                var r = n(4350),
                    i = n(8128),
                    o = r.Tweenable,
                    a = {
                        easeIn: "easeInCubic",
                        easeOut: "easeOutCubic",
                        easeInOut: "easeInOutCubic"
                    },
                    s = function t(e, n) {
                        if (!(this instanceof t)) throw new Error("Constructor was called without new keyword");
                        var r;
                        n = i.extend({
                            delay: 0,
                            duration: 800,
                            easing: "linear",
                            from: {},
                            to: {},
                            step: function() {}
                        }, n), r = i.isString(e) ? document.querySelector(e) : e, this.path = r, this._opts = n, this._tweenable = null;
                        var o = this.path.getTotalLength();
                        this.path.style.strokeDasharray = o + " " + o, this.set(0)
                    };
                s.prototype.value = function() {
                    var t = this._getComputedDashOffset(),
                        e = this.path.getTotalLength();
                    return parseFloat((1 - t / e).toFixed(6), 10)
                }, s.prototype.set = function(t) {
                    this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(t);
                    var e = this._opts.step;
                    if (i.isFunction(e)) {
                        var n = this._easing(this._opts.easing);
                        e(this._calculateTo(t, n), this._opts.shape || this, this._opts.attachment)
                    }
                }, s.prototype.stop = function() {
                    this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
                }, s.prototype.animate = function(t, e, n) {
                    e = e || {}, i.isFunction(e) && (n = e, e = {});
                    var r = i.extend({}, e),
                        a = i.extend({}, this._opts);
                    e = i.extend(a, e);
                    var s = this._easing(e.easing),
                        u = this._resolveFromAndTo(t, s, r);
                    this.stop(), this.path.getBoundingClientRect();
                    var c = this._getComputedDashOffset(),
                        l = this._progressToOffset(t),
                        f = this;
                    this._tweenable = new o, this._tweenable.tween({
                        from: i.extend({
                            offset: c
                        }, u.from),
                        to: i.extend({
                            offset: l
                        }, u.to),
                        duration: e.duration,
                        delay: e.delay,
                        easing: s,
                        step: function(t) {
                            f.path.style.strokeDashoffset = t.offset;
                            var n = e.shape || f;
                            e.step(t, n, e.attachment)
                        }
                    }).then((function(t) {
                        i.isFunction(n) && n()
                    }))
                }, s.prototype._getComputedDashOffset = function() {
                    var t = window.getComputedStyle(this.path, null);
                    return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10)
                }, s.prototype._progressToOffset = function(t) {
                    var e = this.path.getTotalLength();
                    return e - t * e
                }, s.prototype._resolveFromAndTo = function(t, e, n) {
                    return n.from && n.to ? {
                        from: n.from,
                        to: n.to
                    } : {
                        from: this._calculateFrom(e),
                        to: this._calculateTo(t, e)
                    }
                }, s.prototype._calculateFrom = function(t) {
                    return r.interpolate(this._opts.from, this._opts.to, this.value(), t)
                }, s.prototype._calculateTo = function(t, e) {
                    return r.interpolate(this._opts.from, this._opts.to, t, e)
                }, s.prototype._stopTween = function() {
                    null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
                }, s.prototype._easing = function(t) {
                    return a.hasOwnProperty(t) ? a[t] : t
                }, t.exports = s
            },
            9157: function(t, e, n) {
                var r = n(8865),
                    i = n(4534),
                    o = n(8128),
                    a = function(t, e) {
                        this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, r.apply(this, arguments)
                    };
                (a.prototype = new r).constructor = a, a.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 50")
                }, a.prototype._initializeTextContainer = function(t, e, n) {
                    t.text.style && (n.style.top = "auto", n.style.bottom = "0", t.text.alignToBottom ? o.setStyle(n, "transform", "translate(-50%, 0)") : o.setStyle(n, "transform", "translate(-50%, 50%)"))
                }, a.prototype._pathString = i.prototype._pathString, a.prototype._trailString = i.prototype._trailString, t.exports = a
            },
            8865: function(t, e, n) {
                var r = n(9888),
                    i = n(8128),
                    o = "Object is destroyed",
                    a = function t(e, n) {
                        if (!(this instanceof t)) throw new Error("Constructor was called without new keyword");
                        if (0 !== arguments.length) {
                            this._opts = i.extend({
                                color: "#555",
                                strokeWidth: 1,
                                trailColor: null,
                                trailWidth: null,
                                fill: null,
                                text: {
                                    style: {
                                        color: null,
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        padding: 0,
                                        margin: 0,
                                        transform: {
                                            prefix: !0,
                                            value: "translate(-50%, -50%)"
                                        }
                                    },
                                    autoStyleContainer: !0,
                                    alignToBottom: !0,
                                    value: null,
                                    className: "progressbar-text"
                                },
                                svgStyle: {
                                    display: "block",
                                    width: "100%"
                                },
                                warnings: !1
                            }, n, !0), i.isObject(n) && void 0 !== n.svgStyle && (this._opts.svgStyle = n.svgStyle), i.isObject(n) && i.isObject(n.text) && void 0 !== n.text.style && (this._opts.text.style = n.text.style);
                            var o, a = this._createSvgView(this._opts);
                            if (!(o = i.isString(e) ? document.querySelector(e) : e)) throw new Error("Container does not exist: " + e);
                            this._container = o, this._container.appendChild(a.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && i.setStyles(a.svg, this._opts.svgStyle), this.svg = a.svg, this.path = a.path, this.trail = a.trail, this.text = null;
                            var s = i.extend({
                                attachment: void 0,
                                shape: this
                            }, this._opts);
                            this._progressPath = new r(a.path, s), i.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                        }
                    };
                a.prototype.animate = function(t, e, n) {
                    if (null === this._progressPath) throw new Error(o);
                    this._progressPath.animate(t, e, n)
                }, a.prototype.stop = function() {
                    if (null === this._progressPath) throw new Error(o);
                    void 0 !== this._progressPath && this._progressPath.stop()
                }, a.prototype.pause = function() {
                    if (null === this._progressPath) throw new Error(o);
                    void 0 !== this._progressPath && this._progressPath._tweenable && this._progressPath._tweenable.pause()
                }, a.prototype.resume = function() {
                    if (null === this._progressPath) throw new Error(o);
                    void 0 !== this._progressPath && this._progressPath._tweenable && this._progressPath._tweenable.resume()
                }, a.prototype.destroy = function() {
                    if (null === this._progressPath) throw new Error(o);
                    this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
                }, a.prototype.set = function(t) {
                    if (null === this._progressPath) throw new Error(o);
                    this._progressPath.set(t)
                }, a.prototype.value = function() {
                    if (null === this._progressPath) throw new Error(o);
                    return void 0 === this._progressPath ? 0 : this._progressPath.value()
                }, a.prototype.setText = function(t) {
                    if (null === this._progressPath) throw new Error(o);
                    null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), i.isObject(t) ? (i.removeChildren(this.text), this.text.appendChild(t)) : this.text.innerHTML = t
                }, a.prototype._createSvgView = function(t) {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this._initializeSvg(e, t);
                    var n = null;
                    (t.trailColor || t.trailWidth) && (n = this._createTrail(t), e.appendChild(n));
                    var r = this._createPath(t);
                    return e.appendChild(r), {
                        svg: e,
                        path: r,
                        trail: n
                    }
                }, a.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 100")
                }, a.prototype._createPath = function(t) {
                    var e = this._pathString(t);
                    return this._createPathElement(e, t)
                }, a.prototype._createTrail = function(t) {
                    var e = this._trailString(t),
                        n = i.extend({}, t);
                    return n.trailColor || (n.trailColor = "#eee"), n.trailWidth || (n.trailWidth = n.strokeWidth), n.color = n.trailColor, n.strokeWidth = n.trailWidth, n.fill = null, this._createPathElement(e, n)
                }, a.prototype._createPathElement = function(t, e) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return n.setAttribute("d", t), n.setAttribute("stroke", e.color), n.setAttribute("stroke-width", e.strokeWidth), e.fill ? n.setAttribute("fill", e.fill) : n.setAttribute("fill-opacity", "0"), n
                }, a.prototype._createTextContainer = function(t, e) {
                    var n = document.createElement("div");
                    n.className = t.text.className;
                    var r = t.text.style;
                    return r && (t.text.autoStyleContainer && (e.style.position = "relative"), i.setStyles(n, r), r.color || (n.style.color = t.color)), this._initializeTextContainer(t, e, n), n
                }, a.prototype._initializeTextContainer = function(t, e, n) {}, a.prototype._pathString = function(t) {
                    throw new Error("Override this function for each progress bar")
                }, a.prototype._trailString = function(t) {
                    throw new Error("Override this function for each progress bar")
                }, a.prototype._warnContainerAspectRatio = function(t) {
                    if (this.containerAspectRatio) {
                        var e = window.getComputedStyle(t, null),
                            n = parseFloat(e.getPropertyValue("width"), 10),
                            r = parseFloat(e.getPropertyValue("height"), 10);
                        i.floatEquals(this.containerAspectRatio, n / r) || (console.warn("Incorrect aspect ratio of container", "#" + t.id, "detected:", e.getPropertyValue("width") + "(width)", "/", e.getPropertyValue("height") + "(height)", "=", n / r), console.warn("Aspect ratio of should be", this.containerAspectRatio))
                    }
                }, t.exports = a
            },
            8681: function(t, e, n) {
                var r = n(8865),
                    i = n(8128),
                    o = function(t, e) {
                        this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}", this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}", r.apply(this, arguments)
                    };
                (o.prototype = new r).constructor = o, o.prototype._pathString = function(t) {
                    var e = 100 - t.strokeWidth / 2;
                    return i.render(this._pathTemplate, {
                        width: e,
                        strokeWidth: t.strokeWidth,
                        halfOfStrokeWidth: t.strokeWidth / 2
                    })
                }, o.prototype._trailString = function(t) {
                    var e = 100 - t.strokeWidth / 2;
                    return i.render(this._trailTemplate, {
                        width: e,
                        strokeWidth: t.strokeWidth,
                        halfOfStrokeWidth: t.strokeWidth / 2,
                        startMargin: t.strokeWidth / 2 - t.trailWidth / 2
                    })
                }, t.exports = o
            },
            8128: function(t) {
                var e = "Webkit Moz O ms".split(" ");

                function n(t, n, i) {
                    for (var o = t.style, a = 0; a < e.length; ++a) o[e[a] + r(n)] = i;
                    o[n] = i
                }

                function r(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                function i(t) {
                    return ! function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }(t) && "object" == typeof t && !!t
                }

                function o(t, e) {
                    for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
                }
                t.exports = {
                    extend: function t(e, n, r) {
                        for (var o in e = e || {}, r = r || !1, n = n || {})
                            if (n.hasOwnProperty(o)) {
                                var a = e[o],
                                    s = n[o];
                                r && i(a) && i(s) ? e[o] = t(a, s, r) : e[o] = s
                            }
                        return e
                    },
                    render: function(t, e) {
                        var n = t;
                        for (var r in e)
                            if (e.hasOwnProperty(r)) {
                                var i = e[r],
                                    o = new RegExp("\\{" + r + "\\}", "g");
                                n = n.replace(o, i)
                            }
                        return n
                    },
                    setStyle: n,
                    setStyles: function(t, e) {
                        o(e, (function(e, r) {
                            null != e && (i(e) && !0 === e.prefix ? n(t, r, e.value) : t.style[r] = e)
                        }))
                    },
                    capitalize: r,
                    isString: function(t) {
                        return "string" == typeof t || t instanceof String
                    },
                    isFunction: function(t) {
                        return "function" == typeof t
                    },
                    isObject: i,
                    forEachObject: o,
                    floatEquals: function(t, e) {
                        return Math.abs(t - e) < .001
                    },
                    removeChildren: function(t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }
                }
            },
            5666: function(t, e, n) {
                ! function(e) {
                    "use strict";
                    var n, r = Object.prototype,
                        i = r.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        a = o.iterator || "@@iterator",
                        s = o.asyncIterator || "@@asyncIterator",
                        u = o.toStringTag || "@@toStringTag",
                        c = e.regeneratorRuntime;
                    if (c) t.exports = c;
                    else {
                        (c = e.regeneratorRuntime = t.exports).wrap = _;
                        var l = "suspendedStart",
                            f = "suspendedYield",
                            h = "executing",
                            p = "completed",
                            d = {},
                            v = {};
                        v[a] = function() {
                            return this
                        };
                        var y = Object.getPrototypeOf,
                            g = y && y(y(A([])));
                        g && g !== r && i.call(g, a) && (v = g);
                        var m = E.prototype = w.prototype = Object.create(v);
                        S.prototype = m.constructor = E, E.constructor = S, E[u] = S.displayName = "GeneratorFunction", c.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === S || "GeneratorFunction" === (e.displayName || e.name))
                        }, c.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(m), t
                        }, c.awrap = function(t) {
                            return {
                                __await: t
                            }
                        }, x(I.prototype), I.prototype[s] = function() {
                            return this
                        }, c.AsyncIterator = I, c.async = function(t, e, n, r) {
                            var i = new I(_(t, e, n, r));
                            return c.isGeneratorFunction(e) ? i : i.next().then((function(t) {
                                return t.done ? t.value : i.next()
                            }))
                        }, x(m), m[u] = "Generator", m[a] = function() {
                            return this
                        }, m.toString = function() {
                            return "[object Generator]"
                        }, c.keys = function(t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return e.reverse(),
                                function n() {
                                    for (; e.length;) {
                                        var r = e.pop();
                                        if (r in t) return n.value = r, n.done = !1, n
                                    }
                                    return n.done = !0, n
                                }
                        }, c.values = A, k.prototype = {
                            constructor: k,
                            reset: function(t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(P), !t)
                                    for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var e = this;

                                function r(r, i) {
                                    return s.type = "throw", s.arg = t, e.next = r, i && (e.method = "next", e.arg = n), !!i
                                }
                                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                    var a = this.tryEntries[o],
                                        s = a.completion;
                                    if ("root" === a.tryLoc) return r("end");
                                    if (a.tryLoc <= this.prev) {
                                        var u = i.call(a, "catchLoc"),
                                            c = i.call(a, "finallyLoc");
                                        if (u && c) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        } else if (u) {
                                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var r = this.tryEntries[n];
                                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                        var o = r;
                                        break
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                var a = o ? o.completion : {};
                                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), P(n), d
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var r = n.completion;
                                        if ("throw" === r.type) {
                                            var i = r.arg;
                                            P(n)
                                        }
                                        return i
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, r) {
                                return this.delegate = {
                                    iterator: A(t),
                                    resultName: e,
                                    nextLoc: r
                                }, "next" === this.method && (this.arg = n), d
                            }
                        }
                    }

                    function _(t, e, n, r) {
                        var i = e && e.prototype instanceof w ? e : w,
                            o = Object.create(i.prototype),
                            a = new k(r || []);
                        return o._invoke = function(t, e, n) {
                            var r = l;
                            return function(i, o) {
                                if (r === h) throw new Error("Generator is already running");
                                if (r === p) {
                                    if ("throw" === i) throw o;
                                    return N()
                                }
                                for (n.method = i, n.arg = o;;) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = O(a, n);
                                        if (s) {
                                            if (s === d) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === l) throw r = p, n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = h;
                                    var u = b(t, e, n);
                                    if ("normal" === u.type) {
                                        if (r = n.done ? p : f, u.arg === d) continue;
                                        return {
                                            value: u.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === u.type && (r = p, n.method = "throw", n.arg = u.arg)
                                }
                            }
                        }(t, n, a), o
                    }

                    function b(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }

                    function w() {}

                    function S() {}

                    function E() {}

                    function x(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            t[e] = function(t) {
                                return this._invoke(e, t)
                            }
                        }))
                    }

                    function I(t) {
                        function n(e, r, o, a) {
                            var s = b(t[e], t, r);
                            if ("throw" !== s.type) {
                                var u = s.arg,
                                    c = u.value;
                                return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then((function(t) {
                                    n("next", t, o, a)
                                }), (function(t) {
                                    n("throw", t, o, a)
                                })) : Promise.resolve(c).then((function(t) {
                                    u.value = t, o(u)
                                }), a)
                            }
                            a(s.arg)
                        }
                        var r;
                        "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n)), this._invoke = function(t, e) {
                            function i() {
                                return new Promise((function(r, i) {
                                    n(t, e, r, i)
                                }))
                            }
                            return r = r ? r.then(i, i) : i()
                        }
                    }

                    function O(t, e) {
                        var r = t.iterator[e.method];
                        if (r === n) {
                            if (e.delegate = null, "throw" === e.method) {
                                if (t.iterator.return && (e.method = "return", e.arg = n, O(t, e), "throw" === e.method)) return d;
                                e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return d
                        }
                        var i = b(r, t.iterator, e.arg);
                        if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, d;
                        var o = i.arg;
                        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, d) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
                    }

                    function T(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function P(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function k(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], t.forEach(T, this), this.reset(!0)
                    }

                    function A(t) {
                        if (t) {
                            var e = t[a];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1,
                                    o = function e() {
                                        for (; ++r < t.length;)
                                            if (i.call(t, r)) return e.value = t[r], e.done = !1, e;
                                        return e.value = n, e.done = !0, e
                                    };
                                return o.next = o
                            }
                        }
                        return {
                            next: N
                        }
                    }

                    function N() {
                        return {
                            value: n,
                            done: !0
                        }
                    }
                }("object" == typeof n.g ? n.g : "object" == typeof window ? window : "object" == typeof self ? self : this)
            },
            4350: function(t) {
                self,
                t.exports = function() {
                    "use strict";
                    var t = {
                            720: function(t, e, n) {
                                n.r(e), n.d(e, {
                                    Scene: function() {
                                        return $t
                                    },
                                    Tweenable: function() {
                                        return dt
                                    },
                                    interpolate: function() {
                                        return Gt
                                    },
                                    processTweens: function() {
                                        return ct
                                    },
                                    setBezierFunction: function() {
                                        return Yt
                                    },
                                    tween: function() {
                                        return vt
                                    },
                                    unsetBezierFunction: function() {
                                        return Qt
                                    }
                                });
                                var r = {};
                                n.r(r), n.d(r, {
                                    bounce: function() {
                                        return q
                                    },
                                    bouncePast: function() {
                                        return j
                                    },
                                    easeFrom: function() {
                                        return F
                                    },
                                    easeFromTo: function() {
                                        return D
                                    },
                                    easeInBack: function() {
                                        return P
                                    },
                                    easeInCirc: function() {
                                        return x
                                    },
                                    easeInCubic: function() {
                                        return c
                                    },
                                    easeInExpo: function() {
                                        return w
                                    },
                                    easeInOutBack: function() {
                                        return A
                                    },
                                    easeInOutCirc: function() {
                                        return O
                                    },
                                    easeInOutCubic: function() {
                                        return f
                                    },
                                    easeInOutExpo: function() {
                                        return E
                                    },
                                    easeInOutQuad: function() {
                                        return u
                                    },
                                    easeInOutQuart: function() {
                                        return d
                                    },
                                    easeInOutQuint: function() {
                                        return g
                                    },
                                    easeInOutSine: function() {
                                        return b
                                    },
                                    easeInQuad: function() {
                                        return a
                                    },
                                    easeInQuart: function() {
                                        return h
                                    },
                                    easeInQuint: function() {
                                        return v
                                    },
                                    easeInSine: function() {
                                        return m
                                    },
                                    easeOutBack: function() {
                                        return k
                                    },
                                    easeOutBounce: function() {
                                        return T
                                    },
                                    easeOutCirc: function() {
                                        return I
                                    },
                                    easeOutCubic: function() {
                                        return l
                                    },
                                    easeOutExpo: function() {
                                        return S
                                    },
                                    easeOutQuad: function() {
                                        return s
                                    },
                                    easeOutQuart: function() {
                                        return p
                                    },
                                    easeOutQuint: function() {
                                        return y
                                    },
                                    easeOutSine: function() {
                                        return _
                                    },
                                    easeTo: function() {
                                        return L
                                    },
                                    elastic: function() {
                                        return N
                                    },
                                    linear: function() {
                                        return o
                                    },
                                    swingFrom: function() {
                                        return M
                                    },
                                    swingFromTo: function() {
                                        return C
                                    },
                                    swingTo: function() {
                                        return R
                                    }
                                });
                                var i = {};
                                n.r(i), n.d(i, {
                                    afterTween: function() {
                                        return Ft
                                    },
                                    beforeTween: function() {
                                        return Dt
                                    },
                                    doesApply: function() {
                                        return qt
                                    },
                                    tweenCreated: function() {
                                        return jt
                                    }
                                });
                                var o = function(t) {
                                        return t
                                    },
                                    a = function(t) {
                                        return Math.pow(t, 2)
                                    },
                                    s = function(t) {
                                        return -(Math.pow(t - 1, 2) - 1)
                                    },
                                    u = function(t) {
                                        return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
                                    },
                                    c = function(t) {
                                        return Math.pow(t, 3)
                                    },
                                    l = function(t) {
                                        return Math.pow(t - 1, 3) + 1
                                    },
                                    f = function(t) {
                                        return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                                    },
                                    h = function(t) {
                                        return Math.pow(t, 4)
                                    },
                                    p = function(t) {
                                        return -(Math.pow(t - 1, 4) - 1)
                                    },
                                    d = function(t) {
                                        return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                                    },
                                    v = function(t) {
                                        return Math.pow(t, 5)
                                    },
                                    y = function(t) {
                                        return Math.pow(t - 1, 5) + 1
                                    },
                                    g = function(t) {
                                        return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                                    },
                                    m = function(t) {
                                        return 1 - Math.cos(t * (Math.PI / 2))
                                    },
                                    _ = function(t) {
                                        return Math.sin(t * (Math.PI / 2))
                                    },
                                    b = function(t) {
                                        return -.5 * (Math.cos(Math.PI * t) - 1)
                                    },
                                    w = function(t) {
                                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                                    },
                                    S = function(t) {
                                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                                    },
                                    E = function(t) {
                                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                                    },
                                    x = function(t) {
                                        return -(Math.sqrt(1 - t * t) - 1)
                                    },
                                    I = function(t) {
                                        return Math.sqrt(1 - Math.pow(t - 1, 2))
                                    },
                                    O = function(t) {
                                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                                    },
                                    T = function(t) {
                                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                    },
                                    P = function(t) {
                                        var e = 1.70158;
                                        return t * t * ((e + 1) * t - e)
                                    },
                                    k = function(t) {
                                        var e = 1.70158;
                                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                                    },
                                    A = function(t) {
                                        var e = 1.70158;
                                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                                    },
                                    N = function(t) {
                                        return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                                    },
                                    C = function(t) {
                                        var e = 1.70158;
                                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                                    },
                                    M = function(t) {
                                        var e = 1.70158;
                                        return t * t * ((e + 1) * t - e)
                                    },
                                    R = function(t) {
                                        var e = 1.70158;
                                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                                    },
                                    q = function(t) {
                                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                    },
                                    j = function(t) {
                                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                                    },
                                    D = function(t) {
                                        return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                                    },
                                    F = function(t) {
                                        return Math.pow(t, 4)
                                    },
                                    L = function(t) {
                                        return Math.pow(t, .25)
                                    };

                                function B(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }

                                function U(t) {
                                    return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                        return typeof t
                                    } : function(t) {
                                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                    })(t)
                                }

                                function z(t, e) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(t);
                                        e && (r = r.filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))), n.push.apply(n, r)
                                    }
                                    return n
                                }

                                function W(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? z(Object(n), !0).forEach((function(e) {
                                            G(t, e, n[e])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                        }))
                                    }
                                    return t
                                }

                                function G(t, e, n) {
                                    return e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n, t
                                }
                                var V, K, H, X = "linear",
                                    $ = "undefined" != typeof window ? window : n.g,
                                    Y = "afterTween",
                                    Q = "afterTweenEnd",
                                    J = "beforeTween",
                                    Z = "tweenCreated",
                                    tt = "function",
                                    et = "string",
                                    nt = $.requestAnimationFrame || $.webkitRequestAnimationFrame || $.oRequestAnimationFrame || $.msRequestAnimationFrame || $.mozCancelRequestAnimationFrame && $.mozRequestAnimationFrame || setTimeout,
                                    rt = function() {},
                                    it = null,
                                    ot = null,
                                    at = W({}, r),
                                    st = function(t, e, n, r, i, o, a) {
                                        var s, u, c, l = t < o ? 0 : (t - o) / i,
                                            f = !1;
                                        for (var h in a && a.call && (f = !0, s = a(l)), e) f || (s = ((u = a[h]).call ? u : at[u])(l)), c = n[h], e[h] = c + (r[h] - c) * s;
                                        return e
                                    },
                                    ut = function(t, e) {
                                        var n = t._timestamp,
                                            r = t._currentState,
                                            i = t._delay;
                                        if (!(e < n + i)) {
                                            var o = t._duration,
                                                a = t._targetState,
                                                s = n + i + o,
                                                u = e > s ? s : e,
                                                c = u >= s,
                                                l = o - (s - u),
                                                f = t._filters.length > 0;
                                            if (c) return t._render(a, t._data, l), t.stop(!0);
                                            f && t._applyFilter(J), u < n + i ? n = o = u = 1 : n += i, st(u, r, t._originalState, a, o, n, t._easing), f && t._applyFilter(Y), t._render(r, t._data, l)
                                        }
                                    },
                                    ct = function() {
                                        for (var t, e = dt.now(), n = it; n;) t = n._next, ut(n, e), n = t
                                    },
                                    lt = Date.now || function() {
                                        return +new Date
                                    },
                                    ft = function(t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X,
                                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                            r = U(e);
                                        if (at[e]) return at[e];
                                        if (r === et || r === tt)
                                            for (var i in t) n[i] = e;
                                        else
                                            for (var o in t) n[o] = e[o] || X;
                                        return n
                                    },
                                    ht = function(t) {
                                        t === it ? (it = t._next) ? it._previous = null : ot = null : t === ot ? (ot = t._previous) ? ot._next = null : it = null : (K = t._previous, H = t._next, K._next = H, H._previous = K), t._previous = t._next = null
                                    },
                                    pt = "function" == typeof Promise ? Promise : null,
                                    dt = function() {
                                        function t() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                                            B(this, t), this._config = {}, this._data = {}, this._delay = 0, this._filters = [], this._next = null, this._previous = null, this._timestamp = null, this._resolve = null, this._reject = null, this._currentState = e || {}, this._originalState = {}, this._targetState = {}, this._start = rt, this._render = rt, this._promiseCtor = pt, n && this.setConfig(n)
                                        }
                                        var e;
                                        return (e = [{
                                            key: "_applyFilter",
                                            value: function(t) {
                                                for (var e = this._filters.length; e > 0; e--) {
                                                    var n = this._filters[e - e][t];
                                                    n && n(this)
                                                }
                                            }
                                        }, {
                                            key: "tween",
                                            value: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                                                return this._isPlaying && this.stop(), !e && this._config || this.setConfig(e), this._pausedAtTime = null, this._timestamp = t.now(), this._start(this.get(), this._data), this._delay && this._render(this._currentState, this._data, 0), this._resume(this._timestamp)
                                            }
                                        }, {
                                            key: "setConfig",
                                            value: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    n = this._config;
                                                for (var r in e) n[r] = e[r];
                                                var i = n.promise,
                                                    o = void 0 === i ? this._promiseCtor : i,
                                                    a = n.start,
                                                    s = void 0 === a ? rt : a,
                                                    u = n.finish,
                                                    c = n.render,
                                                    l = void 0 === c ? this._config.step || rt : c,
                                                    f = n.step,
                                                    h = void 0 === f ? rt : f;
                                                this._data = n.data || n.attachment || this._data, this._isPlaying = !1, this._pausedAtTime = null, this._scheduleId = null, this._delay = e.delay || 0, this._start = s, this._render = l || h, this._duration = n.duration || 500, this._promiseCtor = o, u && (this._resolve = u);
                                                var p = e.from,
                                                    d = e.to,
                                                    v = void 0 === d ? {} : d,
                                                    y = this._currentState,
                                                    g = this._originalState,
                                                    m = this._targetState;
                                                for (var _ in p) y[_] = p[_];
                                                var b = !1;
                                                for (var w in y) {
                                                    var S = y[w];
                                                    b || U(S) !== et || (b = !0), g[w] = S, m[w] = v.hasOwnProperty(w) ? v[w] : S
                                                }
                                                if (this._easing = ft(this._currentState, n.easing, this._easing), this._filters.length = 0, b) {
                                                    for (var E in t.filters) t.filters[E].doesApply(this) && this._filters.push(t.filters[E]);
                                                    this._applyFilter(Z)
                                                }
                                                return this
                                            }
                                        }, {
                                            key: "then",
                                            value: function(t, e) {
                                                var n = this;
                                                return this._promise = new this._promiseCtor((function(t, e) {
                                                    n._resolve = t, n._reject = e
                                                })), this._promise.then(t, e)
                                            }
                                        }, {
                                            key: "catch",
                                            value: function(t) {
                                                return this.then().catch(t)
                                            }
                                        }, {
                                            key: "get",
                                            value: function() {
                                                return W({}, this._currentState)
                                            }
                                        }, {
                                            key: "set",
                                            value: function(t) {
                                                this._currentState = t
                                            }
                                        }, {
                                            key: "pause",
                                            value: function() {
                                                if (this._isPlaying) return this._pausedAtTime = t.now(), this._isPlaying = !1, ht(this), this
                                            }
                                        }, {
                                            key: "resume",
                                            value: function() {
                                                return this._resume()
                                            }
                                        }, {
                                            key: "_resume",
                                            value: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.now();
                                                return null === this._timestamp ? this.tween() : this._isPlaying ? this._promise : (this._pausedAtTime && (this._timestamp += e - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = !0, null === it ? (it = this, ot = this) : (this._previous = ot, ot._next = this, ot = this), this)
                                            }
                                        }, {
                                            key: "seek",
                                            value: function(e) {
                                                e = Math.max(e, 0);
                                                var n = t.now();
                                                return this._timestamp + e === 0 || (this._timestamp = n - e, ut(this, n)), this
                                            }
                                        }, {
                                            key: "stop",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                                if (!this._isPlaying) return this;
                                                this._isPlaying = !1, ht(this);
                                                var e = this._filters.length > 0;
                                                t && (e && this._applyFilter(J), st(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), e && (this._applyFilter(Y), this._applyFilter(Q))), this._resolve && this._resolve({
                                                    data: this._data,
                                                    state: this._currentState,
                                                    tweenable: this
                                                }), this._resolve = null, this._reject = null;
                                                var n = this._currentState,
                                                    r = this._originalState,
                                                    i = this._targetState;
                                                for (var o in n) r[o] = i[o] = n[o];
                                                return this
                                            }
                                        }, {
                                            key: "cancel",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                                    e = this._currentState,
                                                    n = this._data;
                                                return this._isPlaying ? (this._reject && this._reject({
                                                    data: n,
                                                    state: e,
                                                    tweenable: this
                                                }), this._resolve = null, this._reject = null, this.stop(t)) : this
                                            }
                                        }, {
                                            key: "isPlaying",
                                            value: function() {
                                                return this._isPlaying
                                            }
                                        }, {
                                            key: "setScheduleFunction",
                                            value: function(e) {
                                                t.setScheduleFunction(e)
                                            }
                                        }, {
                                            key: "data",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                                return t && (this._data = W({}, t)), this._data
                                            }
                                        }, {
                                            key: "dispose",
                                            value: function() {
                                                for (var t in this) delete this[t]
                                            }
                                        }]) && function(t, e) {
                                            for (var n = 0; n < e.length; n++) {
                                                var r = e[n];
                                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                            }
                                        }(t.prototype, e), t
                                    }();

                                function vt() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        e = new dt;
                                    return e.tween(t), e.tweenable = e, e
                                }
                                G(dt, "now", (function() {
                                        return V
                                    })), dt.setScheduleFunction = function(t) {
                                        return nt = t
                                    }, dt.formulas = at, dt.filters = {},
                                    function t() {
                                        V = lt(), nt.call($, t, 16.666666666666668), ct()
                                    }();
                                var yt, gt, mt = /(\d|-|\.)/,
                                    _t = /([^\-0-9.]+)/g,
                                    bt = /[0-9.-]+/g,
                                    wt = (yt = bt.source, gt = /,\s*/.source, new RegExp("rgb\\(".concat(yt).concat(gt).concat(yt).concat(gt).concat(yt, "\\)"), "g")),
                                    St = /^.*\(/,
                                    Et = /#([0-9]|[a-f]){3,6}/gi,
                                    xt = "VAL",
                                    It = function(t, e) {
                                        return t.map((function(t, n) {
                                            return "_".concat(e, "_").concat(n)
                                        }))
                                    };

                                function Ot(t) {
                                    return parseInt(t, 16)
                                }
                                var Tt = function(t) {
                                        return "rgb(".concat((e = t, 3 === (e = e.replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]), [Ot(e.substr(0, 2)), Ot(e.substr(2, 2)), Ot(e.substr(4, 2))]).join(","), ")");
                                        var e
                                    },
                                    Pt = function(t, e, n) {
                                        var r = e.match(t),
                                            i = e.replace(t, xt);
                                        return r && r.forEach((function(t) {
                                            return i = i.replace(xt, n(t))
                                        })), i
                                    },
                                    kt = function(t) {
                                        for (var e in t) {
                                            var n = t[e];
                                            "string" == typeof n && n.match(Et) && (t[e] = Pt(Et, n, Tt))
                                        }
                                    },
                                    At = function(t) {
                                        var e = t.match(bt).map(Math.floor),
                                            n = t.match(St)[0];
                                        return "".concat(n).concat(e.join(","), ")")
                                    },
                                    Nt = function(t) {
                                        return t.match(bt)
                                    },
                                    Ct = function(t, e) {
                                        var n = {};
                                        return e.forEach((function(e) {
                                            n[e] = t[e], delete t[e]
                                        })), n
                                    },
                                    Mt = function(t, e) {
                                        return e.map((function(e) {
                                            return t[e]
                                        }))
                                    },
                                    Rt = function(t, e) {
                                        return e.forEach((function(e) {
                                            return t = t.replace(xt, +e.toFixed(4))
                                        })), t
                                    },
                                    qt = function(t) {
                                        for (var e in t._currentState)
                                            if ("string" == typeof t._currentState[e]) return !0;
                                        return !1
                                    };

                                function jt(t) {
                                    var e = t._currentState;
                                    [e, t._originalState, t._targetState].forEach(kt), t._tokenData = function(t) {
                                        var e, n, r = {};
                                        for (var i in t) {
                                            var o = t[i];
                                            "string" == typeof o && (r[i] = {
                                                formatString: (e = o, n = void 0, n = e.match(_t), n ? (1 === n.length || e.charAt(0).match(mt)) && n.unshift("") : n = ["", ""], n.join(xt)),
                                                chunkNames: It(Nt(o), i)
                                            })
                                        }
                                        return r
                                    }(e)
                                }

                                function Dt(t) {
                                    var e = t._currentState,
                                        n = t._originalState,
                                        r = t._targetState,
                                        i = t._easing,
                                        o = t._tokenData;
                                    ! function(t, e) {
                                        var n = function(n) {
                                            var r = e[n].chunkNames,
                                                i = t[n];
                                            if ("string" == typeof i) {
                                                var o = i.split(" "),
                                                    a = o[o.length - 1];
                                                r.forEach((function(e, n) {
                                                    return t[e] = o[n] || a
                                                }))
                                            } else r.forEach((function(e) {
                                                return t[e] = i
                                            }));
                                            delete t[n]
                                        };
                                        for (var r in e) n(r)
                                    }(i, o), [e, n, r].forEach((function(t) {
                                        return function(t, e) {
                                            var n = function(n) {
                                                Nt(t[n]).forEach((function(r, i) {
                                                    return t[e[n].chunkNames[i]] = +r
                                                })), delete t[n]
                                            };
                                            for (var r in e) n(r)
                                        }(t, o)
                                    }))
                                }

                                function Ft(t) {
                                    var e = t._currentState,
                                        n = t._originalState,
                                        r = t._targetState,
                                        i = t._easing,
                                        o = t._tokenData;
                                    [e, n, r].forEach((function(t) {
                                            return function(t, e) {
                                                for (var n in e) {
                                                    var r = e[n],
                                                        i = r.chunkNames,
                                                        o = r.formatString,
                                                        a = Rt(o, Mt(Ct(t, i), i));
                                                    t[n] = Pt(wt, a, At)
                                                }
                                            }(t, o)
                                        })),
                                        function(t, e) {
                                            for (var n in e) {
                                                var r = e[n].chunkNames,
                                                    i = t[r[0]];
                                                t[n] = "string" == typeof i ? r.map((function(e) {
                                                    var n = t[e];
                                                    return delete t[e], n
                                                })).join(" ") : i
                                            }
                                        }(i, o)
                                }

                                function Lt(t, e) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(t);
                                        e && (r = r.filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                        }))), n.push.apply(n, r)
                                    }
                                    return n
                                }

                                function Bt(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? Lt(Object(n), !0).forEach((function(e) {
                                            Ut(t, e, n[e])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                        }))
                                    }
                                    return t
                                }

                                function Ut(t, e, n) {
                                    return e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n, t
                                }
                                var zt = new dt,
                                    Wt = dt.filters,
                                    Gt = function(t, e, n, r) {
                                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                            o = Bt({}, t),
                                            a = ft(t, r);
                                        for (var s in zt._filters.length = 0, zt.set({}), zt._currentState = o, zt._originalState = t, zt._targetState = e, zt._easing = a, Wt) Wt[s].doesApply(zt) && zt._filters.push(Wt[s]);
                                        zt._applyFilter("tweenCreated"), zt._applyFilter("beforeTween");
                                        var u = st(n, o, t, e, 1, i, a);
                                        return zt._applyFilter("afterTween"), u
                                    };

                                function Vt(t, e) {
                                    (null == e || e > t.length) && (e = t.length);
                                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                                    return r
                                }

                                function Kt(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }

                                function Ht(t, e) {
                                    var n = e.get(t);
                                    if (!n) throw new TypeError("attempted to get private field on non-instance");
                                    return n.get ? n.get.call(t) : n.value
                                }
                                var Xt = new WeakMap,
                                    $t = function() {
                                        function t() {
                                            Kt(this, t), Xt.set(this, {
                                                writable: !0,
                                                value: []
                                            });
                                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                            n.forEach(this.add.bind(this))
                                        }
                                        var e;
                                        return (e = [{
                                            key: "add",
                                            value: function(t) {
                                                return Ht(this, Xt).push(t), t
                                            }
                                        }, {
                                            key: "remove",
                                            value: function(t) {
                                                var e = Ht(this, Xt).indexOf(t);
                                                return ~e && Ht(this, Xt).splice(e, 1), t
                                            }
                                        }, {
                                            key: "empty",
                                            value: function() {
                                                return this.tweenables.map(this.remove.bind(this))
                                            }
                                        }, {
                                            key: "isPlaying",
                                            value: function() {
                                                return Ht(this, Xt).some((function(t) {
                                                    return t.isPlaying()
                                                }))
                                            }
                                        }, {
                                            key: "play",
                                            value: function() {
                                                return Ht(this, Xt).forEach((function(t) {
                                                    return t.tween()
                                                })), this
                                            }
                                        }, {
                                            key: "pause",
                                            value: function() {
                                                return Ht(this, Xt).forEach((function(t) {
                                                    return t.pause()
                                                })), this
                                            }
                                        }, {
                                            key: "resume",
                                            value: function() {
                                                return Ht(this, Xt).forEach((function(t) {
                                                    return t.resume()
                                                })), this
                                            }
                                        }, {
                                            key: "stop",
                                            value: function(t) {
                                                return Ht(this, Xt).forEach((function(e) {
                                                    return e.stop(t)
                                                })), this
                                            }
                                        }, {
                                            key: "tweenables",
                                            get: function() {
                                                return function(t) {
                                                    if (Array.isArray(t)) return Vt(t)
                                                }(t = Ht(this, Xt)) || function(t) {
                                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                                                }(t) || function(t, e) {
                                                    if (t) {
                                                        if ("string" == typeof t) return Vt(t, e);
                                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vt(t, e) : void 0
                                                    }
                                                }(t) || function() {
                                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                }();
                                                var t
                                            }
                                        }, {
                                            key: "promises",
                                            get: function() {
                                                return Ht(this, Xt).map((function(t) {
                                                    return t.then()
                                                }))
                                            }
                                        }]) && function(t, e) {
                                            for (var n = 0; n < e.length; n++) {
                                                var r = e[n];
                                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                            }
                                        }(t.prototype, e), t
                                    }(),
                                    Yt = function(t, e, n, r, i) {
                                        var o = function(t, e, n, r) {
                                            return function(i) {
                                                return l = 0, f = 0, h = 0, p = function(t) {
                                                        return ((l * t + f) * t + h) * t
                                                    }, d = function(t) {
                                                        return (3 * l * t + 2 * f) * t + h
                                                    }, v = function(t) {
                                                        return t >= 0 ? t : 0 - t
                                                    }, l = 1 - (h = 3 * (o = t)) - (f = 3 * (n - o) - h), s = 1 - (c = 3 * (a = e)) - (u = 3 * (r - a) - c),
                                                    function(t) {
                                                        return ((s * t + u) * t + c) * t
                                                    }(function(t, e) {
                                                        var n, r, i, o, a, s;
                                                        for (i = t, s = 0; s < 8; s++) {
                                                            if (o = p(i) - t, v(o) < .005) return i;
                                                            if (a = d(i), v(a) < 1e-6) break;
                                                            i -= o / a
                                                        }
                                                        if ((i = t) < (n = 0)) return n;
                                                        if (i > (r = 1)) return r;
                                                        for (; n < r;) {
                                                            if (o = p(i), v(o - t) < .005) return i;
                                                            t > o ? n = i : r = i, i = .5 * (r - n) + n
                                                        }
                                                        return i
                                                    }(i));
                                                var o, a, s, u, c, l, f, h, p, d, v
                                            }
                                        }(e, n, r, i);
                                        return o.displayName = t, o.x1 = e, o.y1 = n, o.x2 = r, o.y2 = i, dt.formulas[t] = o
                                    },
                                    Qt = function(t) {
                                        return delete dt.formulas[t]
                                    };
                                dt.filters.token = i
                            }
                        },
                        e = {};

                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var i = e[r] = {
                            exports: {}
                        };
                        return t[r](i, i.exports, n), i.exports
                    }
                    return n.d = function(t, e) {
                        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                            enumerable: !0,
                            get: e[r]
                        })
                    }, n.g = function() {
                        if ("object" == typeof globalThis) return globalThis;
                        try {
                            return this || new Function("return this")()
                        } catch (t) {
                            if ("object" == typeof window) return window
                        }
                    }(), n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, n(720)
                }()
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, {
                a: e
            }), e
        }, n.d = function(t, e) {
            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";
            n(6124), n(3746);
            var t = n(6791),
                e = n.n(t);
            e().getInstance().init(window.pet_config.amplitude_key), window.amplitudeInstance = e().getInstance();
            var r = e().getInstance();
            document.addEventListener("DOMContentLoaded", (() => {
                var t = document.querySelectorAll(".hamburger-close"),
                    e = document.getElementById("overlay");
                t.forEach((t => {
                    t.addEventListener("click", (() => {
                        e.classList.toggle("open"), document.querySelector("body").classList.toggle("overflow"), n()
                    }))
                }));
                var n = () => {
                    var t = !1;
                    return () => {
                        t || (r.logEvent("Burger"), t = !0)
                    }
                }
            })), n(2490), n(525);
            var i = n(2086),
                o = n.n(i),
                a = {};
            ! function t(e, n, r, i) {
                var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL);

                function a() {}

                function s(t) {
                    var r = n.exports.Promise,
                        i = void 0 !== r ? r : e.Promise;
                    return "function" == typeof i ? new i(t) : (t(a, a), null)
                }
                var u, c, l, f, h, p, d, v, y = (l = Math.floor(1e3 / 60), f = {}, h = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (u = function(t) {
                        var e = Math.random();
                        return f[e] = requestAnimationFrame((function n(r) {
                            h === r || h + l - 1 < r ? (h = r, delete f[e], t()) : f[e] = requestAnimationFrame(n)
                        })), e
                    }, c = function(t) {
                        f[t] && cancelAnimationFrame(f[t])
                    }) : (u = function(t) {
                        return setTimeout(t, l)
                    }, c = function(t) {
                        return clearTimeout(t)
                    }), {
                        frame: u,
                        cancel: c
                    }),
                    g = (v = {}, function() {
                        if (p) return p;
                        if (!r && o) {
                            var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                            try {
                                p = new Worker(URL.createObjectURL(new Blob([e])))
                            } catch (t) {
                                return void 0 !== typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t), null
                            }! function(t) {
                                function e(e, n) {
                                    t.postMessage({
                                        options: e || {},
                                        callback: n
                                    })
                                }
                                t.init = function(e) {
                                    var n = e.transferControlToOffscreen();
                                    t.postMessage({
                                        canvas: n
                                    }, [n])
                                }, t.fire = function(n, r, i) {
                                    if (d) return e(n, null), d;
                                    var o = Math.random().toString(36).slice(2);
                                    return d = s((function(r) {
                                        function a(e) {
                                            e.data.callback === o && (delete v[o], t.removeEventListener("message", a), d = null, i(), r())
                                        }
                                        t.addEventListener("message", a), e(n, o), v[o] = a.bind(null, {
                                            data: {
                                                callback: o
                                            }
                                        })
                                    }))
                                }, t.reset = function() {
                                    for (var e in t.postMessage({
                                            reset: !0
                                        }), v) v[e](), delete v[e]
                                }
                            }(p)
                        }
                        return p
                    }),
                    m = {
                        particleCount: 50,
                        angle: 90,
                        spread: 45,
                        startVelocity: 45,
                        decay: .9,
                        gravity: 1,
                        drift: 0,
                        ticks: 200,
                        x: .5,
                        y: .5,
                        shapes: ["square", "circle"],
                        zIndex: 100,
                        colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                        disableForReducedMotion: !1,
                        scalar: 1
                    };

                function _(t, e, n) {
                    return function(t, e) {
                        return e ? e(t) : t
                    }(t && null != t[e] ? t[e] : m[e], n)
                }

                function b(t) {
                    return t < 0 ? 0 : Math.floor(t)
                }

                function w(t) {
                    return parseInt(t, 16)
                }

                function S(t) {
                    return t.map(E)
                }

                function E(t) {
                    var e = String(t).replace(/[^0-9a-f]/gi, "");
                    return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
                        r: w(e.substring(0, 2)),
                        g: w(e.substring(2, 4)),
                        b: w(e.substring(4, 6))
                    }
                }

                function x(t) {
                    t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight
                }

                function I(t) {
                    var e = t.getBoundingClientRect();
                    t.width = e.width, t.height = e.height
                }

                function O(t, n) {
                    var a, u = !t,
                        c = !!_(n || {}, "resize"),
                        l = _(n, "disableForReducedMotion", Boolean),
                        f = o && _(n || {}, "useWorker") ? g() : null,
                        h = u ? x : I,
                        p = !(!t || !f || !t.__confetti_initialized),
                        d = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

                    function v(e, n, o) {
                        for (var u, c, l, f, p = _(e, "particleCount", b), d = _(e, "angle", Number), v = _(e, "spread", Number), g = _(e, "startVelocity", Number), m = _(e, "decay", Number), w = _(e, "gravity", Number), E = _(e, "drift", Number), x = _(e, "colors", S), I = _(e, "ticks", Number), O = _(e, "shapes"), T = _(e, "scalar"), P = function(t) {
                                var e = _(t, "origin", Object);
                                return e.x = _(e, "x", Number), e.y = _(e, "y", Number), e
                            }(e), k = p, A = [], N = t.width * P.x, C = t.height * P.y; k--;) A.push((void 0, void 0, c = (u = {
                            x: N,
                            y: C,
                            angle: d,
                            spread: v,
                            startVelocity: g,
                            color: x[k % x.length],
                            shape: O[(0, f = O.length, Math.floor(Math.random() * (f - 0)) + 0)],
                            ticks: I,
                            decay: m,
                            gravity: w,
                            drift: E,
                            scalar: T
                        }).angle * (Math.PI / 180), l = u.spread * (Math.PI / 180), {
                            x: u.x,
                            y: u.y,
                            wobble: 10 * Math.random(),
                            velocity: .5 * u.startVelocity + Math.random() * u.startVelocity,
                            angle2D: -c + (.5 * l - Math.random() * l),
                            tiltAngle: Math.random() * Math.PI,
                            color: u.color,
                            shape: u.shape,
                            tick: 0,
                            totalTicks: u.ticks,
                            decay: u.decay,
                            drift: u.drift,
                            random: Math.random() + 5,
                            tiltSin: 0,
                            tiltCos: 0,
                            wobbleX: 0,
                            wobbleY: 0,
                            gravity: 3 * u.gravity,
                            ovalScalar: .6,
                            scalar: u.scalar
                        }));
                        return a ? a.addFettis(A) : (a = function(t, e, n, o, a) {
                                var u, c, l = e.slice(),
                                    f = t.getContext("2d"),
                                    h = s((function(e) {
                                            function s() {
                                                u = c = null, f.clearRect(0, 0, o.width, o.height), a(), e()
                                            }
                                            u = y.frame((function e() {
                                                    !r || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), f.clearRect(0, 0, o.width, o.height), l = l.filter((function(t) {
                                                            return function(t, e) {
                                                                e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += .1, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 5, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble);
                                                                var n = e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,a=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-r)*e.ovalScalar,Math.abs(a-i)*e.ovalScalar,Math.PI/
                                                                10 * e.wobble, 0, 2 * Math.PI): function(t, e, n, r, i, o, a, s, u) {
                                                                t.save(), t.translate(e, n), t.rotate(o), t.scale(r, i), t.arc(0, 0, 1, 0, s, void 0), t.restore()
                                                            }(t, e.x, e.y, Math.abs(o - r) * e.ovalScalar, Math.abs(a - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI): (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(a)), t.lineTo(Math.floor(r), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks
                                                        }(f, t)
                                                    })), l.length ? u = y.frame(e) : s()
                                            })), c = s
                                    }));
                            return {
                                addFettis: function(t) {
                                    return l = l.concat(t), h
                                },
                                canvas: t,
                                promise: h,
                                reset: function() {
                                    u && y.cancel(u), c && c()
                                }
                            }
                        }(t, A, h, n, o)).promise
                }

                function m(n) {
                    var r = l || _(n, "disableForReducedMotion", Boolean),
                        i = _(n, "zIndex", Number);
                    if (r && d) return s((function(t) {
                        t()
                    }));
                    u && a ? t = a.canvas : u && !t && (t = function(t) {
                        var e = document.createElement("canvas");
                        return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e
                    }(i), document.body.appendChild(t)), c && !p && h(t);
                    var o = {
                        width: t.width,
                        height: t.height
                    };

                    function y() {
                        if (f) {
                            var e = {
                                getBoundingClientRect: function() {
                                    if (!u) return t.getBoundingClientRect()
                                }
                            };
                            return h(e), void f.postMessage({
                                resize: {
                                    width: e.width,
                                    height: e.height
                                }
                            })
                        }
                        o.width = o.height = null
                    }

                    function g() {
                        a = null, c && e.removeEventListener("resize", y), u && t && (document.body.removeChild(t), t = null, p = !1)
                    }
                    return f && !p && f.init(t), p = !0, f && (t.__confetti_initialized = !0), c && e.addEventListener("resize", y, !1), f ? f.fire(n, o, g) : v(n, o, g)
                }
                return m.reset = function() {
                    f && f.reset(), a && a.reset()
                }, m
            }
            n.exports = O(null, {
                useWorker: !0,
                resize: !0
            }), n.exports.create = O
        }(function() {
            return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {}
        }(), a, !1);
    var s = a.exports,
        u = (a.exports.create, {
            saveQuizResponses(t) {
                localStorage.setItem("quizResponses", JSON.stringify(t))
            },
            getQuizResponses() {
                var t = localStorage.getItem("quizResponses");
                return JSON.parse(t)
            }
        }),
        c = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== c && c,
        l = "URLSearchParams" in c,
        f = "Symbol" in c && "iterator" in Symbol,
        h = "FileReader" in c && "Blob" in c && function() {
            try {
                return new Blob, !0
            } catch (t) {
                return !1
            }
        }(),
        p = "FormData" in c,
        d = "ArrayBuffer" in c;
    if (d) var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        y = ArrayBuffer.isView || function(t) {
            return t && v.indexOf(Object.prototype.toString.call(t)) > -1
        };

    function g(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
        return t.toLowerCase()
    }

    function m(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function _(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return f && (e[Symbol.iterator] = function() {
            return e
        }), e
    }

    function b(t) {
        this.map = {}, t instanceof b ? t.forEach((function(t, e) {
            this.append(e, t)
        }), this) : Array.isArray(t) ? t.forEach((function(t) {
            this.append(t[0], t[1])
        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
            this.append(e, t[e])
        }), this)
    }

    function w(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function S(t) {
        return new Promise((function(e, n) {
            t.onload = function() {
                e(t.result)
            }, t.onerror = function() {
                n(t.error)
            }
        }))
    }

    function E(t) {
        var e = new FileReader,
            n = S(e);
        return e.readAsArrayBuffer(t), n
    }

    function x(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function I() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            var e;
            this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : h && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : p && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : l && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : d && h && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = x(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : d && (ArrayBuffer.prototype.isPrototypeOf(t) || y(t)) ? this._bodyArrayBuffer = x(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, h && (this.blob = function() {
            var t = w(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? w(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(E)
        }), this.text = function() {
            var t, e, n, r = w(this);
            if (r) return r;
            if (this._bodyBlob) return t = this._bodyBlob, n = S(e = new FileReader), e.readAsText(t), n;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, p && (this.formData = function() {
            return this.text().then(P)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    b.prototype.append = function(t, e) {
        t = g(t), e = m(e);
        var n = this.map[t];
        this.map[t] = n ? n + ", " + e : e
    }, b.prototype.delete = function(t) {
        delete this.map[g(t)]
    }, b.prototype.get = function(t) {
        return t = g(t), this.has(t) ? this.map[t] : null
    }, b.prototype.has = function(t) {
        return this.map.hasOwnProperty(g(t))
    }, b.prototype.set = function(t, e) {
        this.map[g(t)] = m(e)
    }, b.prototype.forEach = function(t, e) {
        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
    }, b.prototype.keys = function() {
        var t = [];
        return this.forEach((function(e, n) {
            t.push(n)
        })), _(t)
    }, b.prototype.values = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e)
        })), _(t)
    }, b.prototype.entries = function() {
        var t = [];
        return this.forEach((function(e, n) {
            t.push([n, e])
        })), _(t)
    }, f && (b.prototype[Symbol.iterator] = b.prototype.entries);
    var O = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function T(t, e) {
        if (!(this instanceof T)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, r, i = (e = e || {}).body;
        if (t instanceof T) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new b(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new b(e.headers)), this.method = (r = (n = e.method || this.method || "GET").toUpperCase(), O.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
            var o = /([?&])_=[^&]*/;
            o.test(this.url) ? this.url = this.url.replace(o, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
        }
    }

    function P(t) {
        var e = new FormData;
        return t.trim().split("&").forEach((function(t) {
            if (t) {
                var n = t.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    i = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(i))
            }
        })), e
    }

    function k(t, e) {
        if (!(this instanceof k)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === e.statusText ? "" : "" + e.statusText, this.headers = new b(e.headers), this.url = e.url || "", this._initBody(t)
    }
    T.prototype.clone = function() {
        return new T(this, {
            body: this._bodyInit
        })
    }, I.call(T.prototype), I.call(k.prototype), k.prototype.clone = function() {
        return new k(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new b(this.headers),
            url: this.url
        })
    }, k.error = function() {
        var t = new k(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t
    };
    var A = [301, 302, 303, 307, 308];
    k.redirect = function(t, e) {
        if (-1 === A.indexOf(e)) throw new RangeError("Invalid status code");
        return new k(null, {
            status: e,
            headers: {
                location: t
            }
        })
    };
    var N = c.DOMException;
    try {
        new N
    } catch (t) {
        (N = function(t, e) {
            this.message = t, this.name = e;
            var n = Error(t);
            this.stack = n.stack
        }).prototype = Object.create(Error.prototype), N.prototype.constructor = N
    }

    function C(t, e) {
        return new Promise((function(n, r) {
            var i = new T(t, e);
            if (i.signal && i.signal.aborted) return r(new N("Aborted", "AbortError"));
            var o = new XMLHttpRequest;

            function a() {
                o.abort()
            }
            o.onload = function() {
                var t, e, r = {
                    status: o.status,
                    statusText: o.statusText,
                    headers: (t = o.getAllResponseHeaders() || "", e = new b, t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(t) {
                        return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                    })).forEach((function(t) {
                        var n = t.split(":"),
                            r = n.shift().trim();
                        if (r) {
                            var i = n.join(":").trim();
                            e.append(r, i)
                        }
                    })), e)
                };
                r.url = "responseURL" in o ? o.responseURL : r.headers.get("X-Request-URL");
                var i = "response" in o ? o.response : o.responseText;
                setTimeout((function() {
                    n(new k(i, r))
                }), 0)
            }, o.onerror = function() {
                setTimeout((function() {
                    r(new TypeError("Network request failed"))
                }), 0)
            }, o.ontimeout = function() {
                setTimeout((function() {
                    r(new TypeError("Network request failed"))
                }), 0)
            }, o.onabort = function() {
                setTimeout((function() {
                    r(new N("Aborted", "AbortError"))
                }), 0)
            }, o.open(i.method, function(t) {
                try {
                    return "" === t && c.location.href ? c.location.href : t
                } catch (e) {
                    return t
                }
            }(i.url), !0), "include" === i.credentials ? o.withCredentials = !0 : "omit" === i.credentials && (o.withCredentials = !1), "responseType" in o && (h ? o.responseType = "blob" : d && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (o.responseType = "arraybuffer")), !e || "object" != typeof e.headers || e.headers instanceof b ? i.headers.forEach((function(t, e) {
                o.setRequestHeader(e, t)
            })) : Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                o.setRequestHeader(t, m(e.headers[t]))
            })), i.signal && (i.signal.addEventListener("abort", a), o.onreadystatechange = function() {
                4 === o.readyState && i.signal.removeEventListener("abort", a)
            }), o.send(void 0 === i._bodyInit ? null : i._bodyInit)
        }))
    }

    function M(t, e, n, r, i, o, a) {
        try {
            var s = t[o](a),
                u = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
    }

    function R(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise((function(r, i) {
                var o = t.apply(e, n);

                function a(t) {
                    M(o, r, i, a, s, "next", t)
                }

                function s(t) {
                    M(o, r, i, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }

    function q(t, e) {
        return j.apply(this, arguments)
    }

    function j() {
        return j = R((function*(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "USD";
            if (t && window.enableFbTracking) {
                var i = {},
                    o = {
                        value: n,
                        currency: r
                    },
                    a = ["Email", "InitiateCheckout", "AddPaymentInfo", "Purchase", "Subscribe", "Lead"];
                a.includes(t) && (i = yield D(t, e, n, r)), fbq("track", t, o, i)
            }
        })), j.apply(this, arguments)
    }

    function D(t, e, n, r) {
        return F.apply(this, arguments)
    }

    function F() {
        return (F = R((function*(t, e, n, r) {
            if (!e) return {};
            var i = {},
                o = {
                    eventName: t,
                    currency: r,
                    eventValue: n
                },
                a = new URLSearchParams(window.location.search);
            a.has("utm_content") && (o.utmContent = a.get("utm_content")), o.queryParams = a.toString();
            try {
                var s = yield fetch("/api/v1/user/log-user-event/".concat(e), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(o)
                }), u = yield s.json();
                201 === s.status && (i = {
                    eventID: u.event_id
                })
            } catch (t) {
                console.error("TODO".concat(t))
            }
            return i
        }))).apply(this, arguments)
    }

    function L(t, e, n, r, i, o, a) {
        try {
            var s = t[o](a),
                u = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
    }

    function B(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise((function(r, i) {
                var o = t.apply(e, n);

                function a(t) {
                    L(o, r, i, a, s, "next", t)
                }

                function s(t) {
                    L(o, r, i, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }

    function U(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function z(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? U(Object(n), !0).forEach((function(e) {
                W(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function W(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    C.polyfill = !0, c.fetch || (c.fetch = C, c.Headers = b, c.Request = T, c.Response = k), void 0 === window.enableFbTracking && (window.enableFbTracking = !0), document.addEventListener("DOMContentLoaded", (() => {
        var t, e = document.getElementsByClassName("quiz__multiple-item"),
            n = document.querySelectorAll(".js-btn"),
            i = document.querySelectorAll(".quiz__inputs-text"),
            a = document.getElementById("quizContainer"),
            c = document.getElementById("backBtn"),
            l = document.getElementById("headerStep"),
            f = document.getElementById("email"),
            h = document.getElementById("email-submit"),
            p = document.querySelector('input.quiz__datalist-items[name="breeds"]'),
            d = document.querySelectorAll('[name="dog-breed-radio"]'),
            v = new(o().Line)("#progBar", {
                strokeWidth: 1,
                easing: "easeOut",
                duration: 1e3,
                color: "#FF5E4F",
                trailColor: "#E7DEDE",
                trailWidth: 1,
                svgStyle: {
                    strokeLinecap: "round"
                }
            }),
            y = document.querySelectorAll(".quiz__index").length - 1,
            g = document.querySelector(".dog-name-submit"),
            m = document.querySelectorAll(".dog-name"),
            _ = document.getElementById("dataInput"),
            b = document.getElementsByClassName("quiz__multiple-checkbox"),
            w = new r.Identify,
            S = document.querySelectorAll(".quiz__believe-btn"),
            E = {
                obedience: [],
                tricks: [],
                anxietyLevel: [],
                stressLevel: [],
                dogName: "",
                problems: [],
                gender: [],
                breed: [],
                health: {
                    age: "",
                    bodyType: "",
                    dogActivity: "",
                    appetite: "",
                    poopColor: "",
                    poopConsistancy: "",
                    urineColor: "",
                    symptoms: []
                }
            };

        function x() {
            u.saveQuizResponses(E), q("FinishQuiz"), r.logEvent("Quiz passed")
        }

        function I(t) {
            var e = t.querySelectorAll(".quiz__index-active .quiz__active");
            if (e) return Array.prototype.map.call(e, (t => t.getAttribute("data-question-value")))
        }

        function O(t) {
            var e = t.querySelector("#dataInput");
            if (e && e.value) return e.value;
            var n = t.querySelector('[name="dog-breed-radio"]:checked');
            return n && n.getAttribute("data-question-value")
        }

        function T() {
            return document.getElementById("inputText").value
        }

        function P(t) {
            var e = t.querySelectorAll(".quiz__multiple .quiz__multiple-checkbox:checked");
            return Array.prototype.map.call(e, (t => t.getAttribute("data-question-value")))
        }

        function k(t) {
            var e = t.querySelectorAll(".quiz__index-active .quiz__active");
            if (e) return Array.prototype.map.call(e, (t => t.getAttribute("data-one-choice")))
        }

        function A(t) {
            var e = document.querySelector("#block".concat(t)),
                n = document.querySelector("#block".concat(t + 1)),
                i = document.querySelectorAll(".quiz__intro");
            if (null !== n) {
                (function() {
                    var t = document.querySelector(".quiz__index-active .amplitude-analytic");
                    if (t) {
                        var e;
                        switch (t.getAttribute("data-type")) {
                            case "one-answer":
                                e = I(t), "Goal priority" === t.getAttribute("data-question") && (document.getElementById("currentlyDoing").innerHTML = String(I(t)).toLowerCase());
                                break;
                            case "breed-select":
                                e = O(t), E.breed = O(t);
                                break;
                            case "dog-name":
                                e = T(), E.dogName = T();
                                break;
                            case "gender":
                                e = O(t), E.gender = O(t);
                                break;
                            case "multiple-checkbox":
                                e = function(t) {
                                    var e = t.querySelectorAll(".quiz__multiple .quiz__multiple-checkbox:checked");
                                    return Array.prototype.map.call(e, (t => t.getAttribute("data-question-value")))
                                }(t).join(", ");
                                break;
                            case "range-slider":
                                e = document.querySelector(".quiz__index-active .amplitude-analytic").querySelector(".rangeSlider").value;
                                break;
                            default:
                                throw new Error("Unknown data type")
                        }
                        e || (e = "None");
                        var n = t.getAttribute("data-question");
                        w.set(n, e.toString()), r.identify(w)
                    }
                })(),
                function() {
                    var t = document.querySelectorAll(".quiz__index-active"),
                        e = t[0].querySelector("[data-selector]");
                    if (e) {
                        var n, r = t[0].querySelector("[data-response-type]").getAttribute("data-response-type");
                        switch (e.getAttribute("data-selector")) {
                            case "one-choice":
                                if (n = k(e), "stress" === r) E.stressLevel = E.stressLevel.concat(n);
                                else if ("anxiety" === r) E.anxietyLevel = E.anxietyLevel.concat(n);
                                else if ("gender" === r) {
                                    var i = document.querySelector(".quiz__active").getAttribute("data-question-value");
                                    localStorage.setItem("DogGender", i), E.gender = E.gender.concat(n)
                                }
                                break;
                            case "range-choice":
                                var o = document.getElementsByClassName("quiz__index-active")[0].querySelector('input[type="range"]').value;
                                "obedience" === r ? E.obedience.push(o) : "urineColor" === r && (E.health.urineColor = o);
                                break;
                            case "multi-choice":
                                n = P(e), "problems" === r ? E.problems = E.problems.concat(n) : "tricks" === r && (E.tricks = E.tricks.concat(n));
                                break;
                            case "delete-selected-answers":
                                n = P(e),
                                    function() {
                                        var t, e = document.querySelector(".quiz__index-active").querySelector("[data-selector-remove]");
                                        if (null !== e) switch (t = P(e), e.getAttribute("data-selector-remove")) {
                                            case "Removed Commands":
                                                localStorage.setItem("Removed Commands", t), document.querySelectorAll(".quiz__multiple-item .quiz__multiple-checkbox").forEach((t => {
                                                    !0 === localStorage.getItem("Removed Commands").includes(t.getAttribute("data-question-value")) && setTimeout((() => {
                                                        t.closest(".quiz__multiple-item").classList.add("hidden")
                                                    }), 500)
                                                }));
                                                break;
                                            case "Removed Behavioral":
                                                localStorage.setItem("Removed Behavioral", t), document.querySelectorAll(".quiz__multiple-item .quiz__multiple-checkbox").forEach((t => {
                                                    !0 === localStorage.getItem("Removed Behavioral").includes(t.getAttribute("data-question-value")) && setTimeout((() => {
                                                        t.closest(".quiz__multiple-item").classList.add("hidden")
                                                    }), 500)
                                                }))
                                        }
                                    }();
                                break;
                            case "get-dog-name":
                                n = k(e), "getDogName" === r && (E.dogName = E.dogName.concat(n));
                                break;
                            default:
                                throw new Error("Unknown data type")
                        }
                    }
                }(), document.querySelectorAll(".hisHerName").forEach((t => {
                    t.innerText = document.querySelectorAll(".hisHerName").innerText = localStorage.getItem("DogGender")
                })), m.forEach((t => {
                    null !== localStorage.getItem("name") && (t.classList.add("dog-name-classic"), t.classList.add("dog-name-apostrophe"))
                })), r.logEvent("Quiz question answered", {
                    question: t
                });
                var o = parseInt(n.getAttribute("data-id"), 10),
                    a = o / y;
                setTimeout((() => {
                    if (l.innerText = "".concat(o, "/").concat(y), v.animate(a), window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), void 0 !== n.getAttribute("data-intro") && (document.querySelector(".quiz").style.setProperty("overflow", "inherit"), document.querySelector(".quiz").style.setProperty("position", "inherit"), c.style.setProperty("display", "flex"), document.querySelector("#progBar").style.setProperty("display", "block"), document.querySelector(".header-quiz__step-small").style.setProperty("display", "flex"), document.querySelector(".header-quiz__wrapper").style.setProperty("margin", "0 auto"), document.querySelector(".header-quiz__logo").style.setProperty("margin", "0 0 0 -30px "), document.querySelector(".header-quiz__inner-bg").style.setProperty("background", "#ffffff"), document.querySelector(".hamburger").style.setProperty("display", "flex")), n.getAttribute("data-bg") ? (document.querySelector(".quiz").style.setProperty("background", "#ffffff"), document.querySelector(".quiz__body").style.setProperty("background", "#ffffff")) : document.querySelector(".quiz__body").style.setProperty("background", "#FFF6EE"), "result" === n.getAttribute("data-result")) {
                        x(), N();
                        var t = document.getElementById("resultStepOne"),
                            u = document.getElementById("resultStepTwo");
                        e.classList.remove("quiz__index-active"), n.classList.add("quiz__index-active"), u.style.setProperty("display", "none"), n.classList.add("quiz__result-active"), c.style.setProperty("display", "none"), document.querySelector("#progBar").style.setProperty("display", "none"), document.querySelector(".header-quiz__step-small").style.setProperty("display", "none"), document.querySelector(".header-quiz__wrapper").style.setProperty("margin", "16px auto 16px"), document.querySelector(".header-quiz__logo").style.setProperty("margin", "0 auto "), document.querySelector(".header-quiz__inner-bg").style.setProperty("background", "none"), document.querySelector(".hamburger").style.setProperty("display", "none"), document.querySelector(".quiz__loading-list").style.setProperty("display", "block"), setTimeout((() => {
                            var e;
                            r.logEvent("Email view"), t.style.setProperty("display", "none"), u.style.setProperty("display", "block"), window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }), e = {
                                spread: 115,
                                startVelocity: 60,
                                ticks: 800
                            }, s(z(z(z({}, {
                                origin: {
                                    y: 1
                                }
                            }), e), {}, {
                                particleCount: Math.floor(600)
                            }))
                        }), 9900)
                    } else if ("painfull" === n.getAttribute("data-result")) {
                        x(), N();
                        var f = document.getElementById("resultStepOne"),
                            h = document.getElementById("resultStepTwo"),
                            p = document.getElementById("resultStepThree"),
                            d = document.getElementById("forecastBasedBtn");
                        e.classList.remove("quiz__index-active"), n.classList.add("quiz__index-active"), h.style.setProperty("display", "none"), n.classList.add("quiz__result-active"), c.style.setProperty("display", "none"), document.querySelector("#progBar").style.setProperty("display", "none"), document.querySelector(".header-quiz__step-small").style.setProperty("display", "none"), document.querySelector(".header-quiz__wrapper").style.setProperty("margin", "16px auto 16px"), document.querySelector(".header-quiz__logo").style.setProperty("margin", "0 auto "), document.querySelector(".header-quiz__inner-bg").style.setProperty("background", "none"), document.querySelector(".hamburger").style.setProperty("display", "none"), document.querySelector(".quiz__loading-list").style.setProperty("display", "block"), setTimeout((() => {
                            var t;
                            f.style.setProperty("display", "none"), h.style.setProperty("display", "block"), window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }), t = {
                                spread: 115,
                                startVelocity: 60,
                                ticks: 800
                            }, s(z(z(z({}, {
                                origin: {
                                    y: 1
                                }
                            }), t), {}, {
                                particleCount: Math.floor(600)
                            }))
                        }), 9900), d.addEventListener("click", (() => {
                            h.style.setProperty("display", "none"), p.style.setProperty("display", "block"), r.logEvent("Email view")
                        }))
                    } else e.classList.remove("quiz__index-active"), n.classList.add("quiz__index-active"), 1 !== o && c.style.setProperty("opacity", "1"), i.forEach((t => {
                        "1" !== t.getAttribute("data-id") && setTimeout((() => {
                            t.remove()
                        }), 50)
                    })), document.querySelector(".quiz-footer") && document.querySelector(".quiz-footer").style.setProperty("display", "none")
                }), 300)
            }
        }

        function N() {
            var t = new(o().Circle)("#circleBar", {
                color: "#000",
                strokeWidth: 12,
                trailWidth: 4,
                easing: "easeInOut",
                duration: 2e3,
                text: {
                    autoStyleContainer: !0,
                    className: "progressbar__text",
                    style: {}
                },
                from: {
                    color: "#27B935"
                },
                to: {
                    color: "#38DF4B"
                },
                step(t, e) {
                    e.path.setAttribute("stroke", t.color), e.path.setAttribute("stroke-width", "4px"), e.path.setAttribute("stroke-linecap", "round");
                    var n = "".concat(Math.round(100 * e.value()), "%");
                    0 === n ? e.setText("") : e.setText(n)
                }
            });
            t.animate(.38), setTimeout((() => {
                document.getElementById("Analyzing").classList.add("done"), document.getElementById("Analyzing_text").classList.add("done")
            }), 500), setTimeout((() => {
                document.getElementById("Implementing").classList.add("done"), document.getElementById("Implementing_text").classList.add("done")
            }), 2e3), setTimeout((() => {
                document.getElementById("Selecting").classList.add("done"), document.getElementById("Selecting_text").classList.add("done"), t.animate(.55)
            }), 4e3), setTimeout((() => {
                t.animate(.79), document.getElementById("Picking").classList.add("done"), document.getElementById("Picking_text").classList.add("done")
            }), 6500), setTimeout((() => {
                t.animate(.99)
            }), 8e3), setTimeout((() => {
                document.getElementById("Creating").classList.add("done"), document.getElementById("Creating_text").classList.add("done")
            }), 9e3), r.logEvent("Magic view")
        }
        document.querySelector(".quiz__index").getAttribute("data-intro") && (document.querySelector(".quiz").style.setProperty("background", "#ffffff"), document.querySelector(".quiz").style.setProperty("overflow", "hidden"), document.querySelector(".quiz").style.setProperty("position", "relative"), c.style.setProperty("display", "none"), document.querySelector("#progBar").style.setProperty("display", "none"), document.querySelector(".header-quiz__step-small").style.setProperty("display", "none"), document.querySelector(".header-quiz__wrapper").style.setProperty("margin", "16px auto 16px"), document.querySelector(".header-quiz__logo").style.setProperty("margin", "0 auto "), document.querySelector(".header-quiz__inner-bg").style.setProperty("background", "none"), document.querySelector(".hamburger").style.setProperty("display", "none")), window.location.href.indexOf("skip-quiz") > -1 || window.location.href.indexOf("flow=rem") > -1 ? (document.querySelector(".skipQuiz").classList.add("quiz__index-active"), document.getElementById("resultStepOne").style.setProperty("display", "none"), document.getElementById("resultStepTwo").style.setProperty("display", "block"), document.querySelector("#progBar").style.setProperty("display", "none"), document.querySelector(".header-quiz__step-small").style.setProperty("display", "none"), document.querySelector(".header-quiz__wrapper").style.setProperty("margin", "16px auto 16px"), document.querySelector(".header-quiz__logo").style.setProperty("margin", "0 auto "), document.querySelector(".header-quiz__inner-bg").style.setProperty("background", "none"), document.querySelector(".hamburger").style.setProperty("display", "none"), c.style.setProperty("display", "none")) : (document.getElementById("block1").classList.add("quiz__index-active"), c.style.setProperty("opacity", "0")), document.querySelectorAll(".js-btn").forEach((t => {
                t.addEventListener("click", (() => {
                    var e = t.closest(".quiz__index").getElementsByClassName("quiz__active");
                    e.length > 0 && e[0].classList.remove("quiz__active"), t.classList.add("quiz__active")
                }))
            })),
            function() {
                for (var t = function(t) {
                        b[t] !== b[t].checked && b[t].addEventListener("click", (() => {
                            e[t].classList.toggle("quiz__multiple-checked")
                        }))
                    }, n = 0; n < e.length; n += 1) t(n)
            }(), document.getElementById("headerStep").innerText = "1/".concat(y),
            function() {
                var t = window.location.search;

                function e(t) {
                    var e = window.location.search;
                    return (e = e.match(new RegExp("".concat(t, "=([^&=]+)")))) ? e[1] : "none"
                }
                var n, i, o = (new r.Identify).set("quiz_url", window.location.pathname).set("source", -1 !== t.indexOf("fbclid=") ? "fb" : "none").set("test", -1 !== t.indexOf("test=creative") ? "creative" : "none").set("visit_params", t.replace("?", "")).set("campaign", -1 !== t.indexOf("utm_campaign=") ? e("utm_campaign") : "none").set("adset", -1 !== t.indexOf("utm_content=") ? e("utm_content") : "none").set("ad", -1 !== t.indexOf("ad.id") ? e("ad.id") : "none").set("campaign_name", -1 !== t.indexOf("campaign_name") ? e("campaign_name") : "none").set("adset_name", -1 !== t.indexOf("adset_name") ? e("adset_name") : "none").set("ad_name", -1 !== t.indexOf("ad_name") ? e("ad_name") : "none");
                if (-1 !== window.location.href.indexOf("quiz9")) {
                    var a = (new r.Identify).set("verify_email_split", window.verifyEmailSplit).set("intro_video", window.introVideo).set("upg_split", window.upgSplit).set("clickable_text", window.clickableText).set("multioffer", window.multioffer).set("zd-widget", window.zdWidget).set("apple_google_pay", window.appleGooglePaySplit);
                    r.identify(a)
                } - 1 === window.location.href.indexOf("quizPuppy") && (r.identify(o), -1 === t.indexOf("flow=rem") ? r.logEvent("Quiz view") : r.logEvent("Email view")), l.style.setProperty("display", "none"), n = document.querySelector(".puppyDog"), i = document.querySelector(".adultDog"), null === n && null === i || (n.addEventListener("click", (() => {
                    r.logEvent("Quiz question answered", {
                        question: 0
                    }), r.logEvent("Puppy Dog Funnel"), localStorage.setItem("PuppyDog", "ok")
                })), i.addEventListener("click", (() => {
                    r.logEvent("Adult Dog Funnel")
                })))
            }(), t = ["#FDEDB6", "#FDEDB6", "#FFE081", "#FFD54F", "#FFB200", "#FF8E01", "#FF6F00", "#E64A1A"], document.querySelectorAll(".range-health").forEach((e => {
                var n = e.closest(".quiz__index").querySelector(".quiz__range-value");
                e.addEventListener("input", (() => {
                    var r = e.value;
                    n.innerHTML = r, n.style.setProperty("fill", t[r]), n.style.setProperty("transition", "0.2s ease"), e.parentNode.style.setProperty("--value", r), e.parentNode.style.setProperty("--text-value", r), e.classList.remove("quiz__range-disabled-tooltip")
                }))
            })),
            function() {
                var t = ["#FC2C27", "#FF443F", "#FF623A", "#FF8334", "#FFA62E", "#FFC629", "#E6D52B", "#BDD733", "#92DA3B", "#6ADC42", "#38DF4B"];
                document.querySelectorAll(".range-default").forEach((e => {
                    var n = e.value,
                        r = e.closest(".quiz__index").querySelector(".quiz__range-value");
                    r.innerText = n, r.parentNode.style.setProperty("color", t[n]), e.addEventListener("input", (() => {
                        var n = e.value;
                        r.innerHTML = n, r.parentNode.style.setProperty("color", t[n]), e.parentNode.style.setProperty("--value", n), e.parentNode.style.setProperty("--text-value", n), e.classList.remove("quiz__range-disabled-tooltip"), r.classList.remove("quiz__range-disabled-value")
                    }))
                }))
            }(), -1 !== window.location.search.includes("Behavior", "behavior") && 2 === window.splitGroupBehaviorFunnel && l.classList.add("hidden"), document.querySelectorAll(".quiz__error-btn").forEach((t => {
                t.addEventListener("click", (() => {
                    document.querySelector(".quiz__index-active").closest(".quiz__index-active").querySelector(".quiz__error-message").classList.add("active")
                }))
            })), n[0].addEventListener("click", (() => {
                q("StartQuiz")
            })), i.forEach((t => {
                t.addEventListener("input", (() => {
                    document.querySelector(".quiz__index-active").querySelector(".quiz__btn").disabled = t.value.length <= 0
                }))
            })), null == g || g.addEventListener("click", (() => {
                var t = document.getElementById("inputText").value;
                localStorage.setItem("name", t),
                    function() {
                        for (var t = localStorage.getItem("name"), e = 0; e < m.length; e += 1) m[e].innerHTML = t
                    }()
            })), c.addEventListener("click", (() => {
                var t = document.querySelector(".quiz__index-active").getAttribute("data-id");
                ! function(t) {
                    if (!(t < 2)) {
                        2 === t && c.style.setProperty("opacity", "0");
                        var e = document.querySelector("#block".concat(t)),
                            n = document.querySelector("#block".concat(t - 1)),
                            r = n.getAttribute("data-id");
                        setTimeout((() => {
                            e.classList.remove("quiz__index-active"), n.classList.add("quiz__index-active"), l.innerText = "".concat(r, "/").concat(y), v.animate(r / y)
                        }), 1e3)
                    }
                }(parseInt(t, 10))
            })), n.forEach((t => {
                t.addEventListener("click", (t => {
                    var e = t.currentTarget.getAttribute("id");
                    A(parseInt(e, 10))
                }))
            })), a.addEventListener("input", (() => {
                ! function() {
                    var t = document.getElementsByClassName("quiz__index-active"),
                        e = t[0].getElementsByClassName("quiz__select-items"),
                        n = t[0].querySelector(".quiz__btn");
                    if (0 !== e.length) {
                        for (var r = 0; r < e.length; r += 1)
                            if (0 === e[r].selectedIndex) return void(n.disabled = !0);
                        n.disabled = !1
                    }
                }()
            })), i.forEach((t => {
                t.addEventListener("input", (() => {
                    document.querySelector(".quiz__index-active").querySelector(".quiz__btn").disabled = "" === t.value
                }))
            })), null == p || p.addEventListener("input", (() => {
                d.forEach((t => {
                    t.checked = !1
                }))
            })), d.forEach((t => {
                t.addEventListener("change", (() => {
                    document.querySelector(".quiz__index-active").querySelector(".quiz__btn").disabled = !1, p.value = ""
                }))
            })), h.addEventListener("click", B((function*() {
                var t = document.getElementById("emailLoader"),
                    e = document.getElementById("emailText"),
                    n = f && f.value.trim(),
                    i = new URL(window.location.origin + window.quizConfig.userCreateUrl + window.location.search);
                E.breed.length > 0 && i.searchParams.append("breed", String(E.breed.split(" ").join("")));
                try {
                    t.style.setProperty("display", "flex"), h.style.setProperty("display", "none");
                    var o = yield fetch(i, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: n
                        })
                    }), a = yield o.json();
                    200 === o.status ? (q("Email", a.uuid), r.logEvent("created" === a.status ? "Email submit" : "Email Second Submit"), function(t, e) {
                        var n = new URL("".concat(document.location.origin).concat(t, "/").concat(e).concat(document.location.search));
                        if (E.breed.length > 0) {
                            var r = String(E.breed.split(" ").join(""));
                            n.searchParams.append("breed", r)
                        }
                        document.location.replace(n)
                    }(window.quizConfig.landingUrlPath, a.uuid)) : "error" === a.status && null !== a.message && (setTimeout((() => {
                        e.innerText = a.message, e.classList.add("quiz__result-label-error"), f.classList.add("quiz__email-error"), h.style.setProperty("display", "flex"), t.style.setProperty("display", "none")
                    }), 1e3), f.oninput = () => {
                        f.classList.remove("quiz__email-error"), f.style.setProperty("border", "1px solid #EE6B63")
                    }, a.amplitudeEvent && r.logEvent("EmailVerificationFailed", {
                        email: n,
                        context: a.context.remarks
                    }))
                } catch (t) {
                    console.error(t), e.innerText = "Sorry. Something went wrong. Try again later"
                }
            }))), null !== g && g.addEventListener("click", (() => {
                var t = document.getElementById("inputText").value;
                localStorage.setItem("name", t)
            })), null !== _ && _.addEventListener("input", (() => {
                var t = document.getElementsByClassName("quiz__index-active")[0].querySelector(".quiz__btn");
                !1 !== _.value && (t.disabled = !1), "" === _.value && (t.disabled = !0)
            })), null !== S && S.forEach((t => {
                t.addEventListener("click", (() => {
                    var t = document.getElementById("quizMyths"),
                        e = document.getElementById("quizBelieveYes"),
                        n = document.getElementById("quizBelieveNo");
                    t.classList.add("active"), e.classList.add("active"), n.disabled = !0
                }))
            })), document.querySelector(".quiz__index-active").querySelectorAll(".js-btn").forEach((t => {
                t.addEventListener("click", (() => {
                    q("StartQuiz")
                }))
            }))
    }))
}()
}();