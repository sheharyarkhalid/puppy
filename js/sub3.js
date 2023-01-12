! function() {
    var e, t, n = {
            6791: function(e, t, n) {
                e.exports = function() {
                    "use strict";

                    function e(t) {
                        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }, e(t)
                    }

                    function t(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    function o(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function r(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), r.forEach((function(t) {
                                o(e, t, n[t])
                            }))
                        }
                        return e
                    }

                    function i(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }
                    var s, a, u, c;

                    function l() {
                        return "object" == typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
                    }(function(e) {
                        e.IDENTIFY = "$identify"
                    })(s || (s = {})),
                    function(e) {
                        e.SET = "$set", e.SET_ONCE = "$setOnce", e.ADD = "$add", e.APPEND = "$append", e.PREPEND = "$prepend", e.REMOVE = "$remove", e.PREINSERT = "$preinsert", e.POSTINSERT = "$postinsert", e.UNSET = "$unset", e.CLEAR_ALL = "$clearAll"
                    }(a || (a = {})),
                    function(e) {
                        e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Warn = 2] = "Warn", e[e.Verbose = 3] = "Verbose"
                    }(u || (u = {})),
                    function(e) {
                        e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.PayloadTooLarge = "payload_too_large", e.Invalid = "invalid", e.Failed = "failed"
                    }(c || (c = {})),
                    function(e) {
                        e.fromHttpCode = function(t) {
                            return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : 413 === t ? e.PayloadTooLarge : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
                        }
                    }(c || (c = {})), c.Skipped;
                    var p, d = {},
                        f = ((p = function() {
                            return "object" == typeof process && void 0 !== (null === (e = null === process || void 0 === process ? void 0 : process.versions) || void 0 === e ? void 0 : e.node) ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : d;
                            var e
                        }()).__AMPLITUDE__ = p.__AMPLITUDE__ || {}, p.__AMPLITUDE__),
                        h = "Amplitude Logger ",
                        y = function() {
                            function e() {
                                this._logLevel = 0
                            }
                            return e.prototype.disable = function() {
                                this._logLevel = 0
                            }, e.prototype.enable = function(e) {
                                void 0 === e && (e = u.Warn), this._logLevel = e
                            }, e.prototype.log = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this._logLevel < u.Verbose || n.g.console.log(h + "[Log]: " + e.join(" "))
                            }, e.prototype.warn = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this._logLevel < u.Warn || n.g.console.warn(h + "[Warn]: " + e.join(" "))
                            }, e.prototype.error = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this._logLevel < u.Error || n.g.console.error(h + "[Error]: " + e.join(" "))
                            }, e
                        }(),
                        m = (f.logger || (f.logger = new y), {
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
                        v = function(e) {
                            for (var t = "", n = 0; n < e.length; n++) {
                                var o = e.charCodeAt(n);
                                o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128))
                            }
                            return t
                        },
                        g = function(e) {
                            for (var t = "", n = 0, o = 0, r = 0, i = 0; n < e.length;)(o = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(o), n++) : o > 191 && o < 224 ? (r = e.charCodeAt(n + 1), t += String.fromCharCode((31 & o) << 6 | 63 & r), n += 2) : (r = e.charCodeAt(n + 1), i = e.charCodeAt(n + 2), t += String.fromCharCode((15 & o) << 12 | (63 & r) << 6 | 63 & i), n += 3);
                            return t
                        },
                        _ = {
                            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            encode: function(e) {
                                try {
                                    if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                                } catch (e) {}
                                return _._encode(e)
                            },
                            _encode: function(e) {
                                var t, n, o, r, i, s, a, u = "",
                                    c = 0;
                                for (e = v(e); c < e.length;) r = (t = e.charCodeAt(c++)) >> 2, i = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, s = (15 & n) << 2 | (o = e.charCodeAt(c++)) >> 6, a = 63 & o, isNaN(n) ? s = a = 64 : isNaN(o) && (a = 64), u = u + _._keyStr.charAt(r) + _._keyStr.charAt(i) + _._keyStr.charAt(s) + _._keyStr.charAt(a);
                                return u
                            },
                            decode: function(e) {
                                try {
                                    if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                                } catch (e) {}
                                return _._decode(e)
                            },
                            _decode: function(e) {
                                var t, n, o, r, i, s, a = "",
                                    u = 0;
                                for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length;) t = _._keyStr.indexOf(e.charAt(u++)) << 2 | (r = _._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & r) << 4 | (i = _._keyStr.indexOf(e.charAt(u++))) >> 2, o = (3 & i) << 6 | (s = _._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== i && (a += String.fromCharCode(n)), 64 !== s && (a += String.fromCharCode(o));
                                return g(a)
                            }
                        },
                        b = Object.prototype.toString;

                    function w(t) {
                        switch (b.call(t)) {
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
                        return null === t ? "null" : void 0 === t ? "undefined" : t != t ? "nan" : t && 1 === t.nodeType ? "element" : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(t) ? "buffer" : e(t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
                    }
                    var E, I = {
                            DISABLE: 0,
                            ERROR: 1,
                            WARN: 2,
                            INFO: 3
                        },
                        S = I.WARN,
                        T = {
                            error: function(e) {
                                S >= I.ERROR && O(e)
                            },
                            warn: function(e) {
                                S >= I.WARN && O(e)
                            },
                            info: function(e) {
                                S >= I.INFO && O(e)
                            }
                        },
                        O = function(e) {
                            try {
                                console.log("[Amplitude] " + e)
                            } catch (e) {}
                        },
                        k = function(e) {
                            return "string" === w(e) && e.length > m.MAX_STRING_LENGTH ? e.substring(0, m.MAX_STRING_LENGTH) : e
                        },
                        N = function(e, t, n) {
                            return w(e) === n || (T.error("Invalid " + t + " input type. Expected " + n + " but received " + w(e)), !1)
                        },
                        A = function(e) {
                            var t = w(e);
                            if ("object" !== t) return T.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            if (Object.keys(e).length > m.MAX_PROPERTY_KEYS) return T.error("Error: too many properties (more than 1000), ignoring"), {};
                            var n = {};
                            for (var o in e)
                                if (Object.prototype.hasOwnProperty.call(e, o)) {
                                    var r = o,
                                        i = w(r);
                                    "string" !== i && (r = String(r), T.warn("WARNING: Non-string property key, received type " + i + ', coercing to string "' + r + '"'));
                                    var s = x(r, e[o]);
                                    null !== s && (n[r] = s)
                                }
                            return n
                        },
                        P = ["nan", "function", "arguments", "regexp", "element"],
                        x = function e(t, n) {
                            var o = w(n);
                            if (-1 !== P.indexOf(o)) T.warn('WARNING: Property key "' + t + '" with invalid value type ' + o + ", ignoring"), n = null;
                            else if ("undefined" === o) n = null;
                            else if ("error" === o) n = String(n), T.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
                            else if ("array" === o) {
                                for (var r = [], i = 0; i < n.length; i++) {
                                    var s = n[i],
                                        a = w(s);
                                    "array" !== a ? "object" === a ? r.push(A(s)) : r.push(e(t, s)) : T.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping")
                                }
                                n = r
                            } else "object" === o && (n = A(n));
                            return n
                        },
                        C = function(e, t) {
                            var n = w(t);
                            if ("string" === n) return t;
                            if ("date" === n || "number" === n || "boolean" === n) return t = String(t), T.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
                            if ("array" === n) {
                                for (var o = [], r = 0; r < t.length; r++) {
                                    var i = t[r],
                                        s = w(i);
                                    "array" !== s && "object" !== s ? "string" === s ? o.push(i) : "date" !== s && "number" !== s && "boolean" !== s || (i = String(i), T.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + i + '"'), o.push(i)) : T.warn("WARNING: Skipping nested " + s + " in array groupName")
                                }
                                return o
                            }
                            T.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                        },
                        R = function(e) {
                            Object.prototype.hasOwnProperty.call(I, e) && (S = I[e])
                        },
                        D = T,
                        U = function(e) {
                            return !e || 0 === e.length
                        },
                        q = function(e, t) {
                            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                            return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                        },
                        L = function e(t) {
                            if ("array" === w(t))
                                for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
                            else if ("object" === w(t))
                                for (var o in t) o in t && (t[o] = e(t[o]));
                            else t = k(t);
                            return t
                        },
                        j = function(e) {
                            var t = w(e);
                            if ("object" !== t) return T.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            var n = {};
                            for (var o in e)
                                if (Object.prototype.hasOwnProperty.call(e, o)) {
                                    var r = o,
                                        i = w(r);
                                    "string" !== i && (r = String(r), T.warn("WARNING: Non-string groupType, received type " + i + ', coercing to string "' + r + '"'));
                                    var s = C(r, e[o]);
                                    null !== s && (n[r] = s)
                                }
                            return n
                        },
                        M = N,
                        B = A,
                        F = function(e) {
                            return !(!N(e, "deviceId", "string") || e.includes(".") && (T.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(e, '"')), 1))
                        },
                        V = function(e) {
                            return !(!N(e, "transport", "string") || (e !== m.TRANSPORT_HTTP && e !== m.TRANSPORT_BEACON ? (T.error("transport value must be one of '".concat(m.TRANSPORT_BEACON, "' or '").concat(m.TRANSPORT_HTTP, "'")), 1) : e !== m.TRANSPORT_HTTP && !navigator.sendBeacon && (T.error("browser does not support sendBeacon, so transport must be HTTP"), 1)))
                        },
                        G = function() {
                            return window.location
                        },
                        K = function() {
                            for (var e = "", t = 0; t < 22; ++t) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
                            return e
                        },
                        z = function(e) {
                            try {
                                for (var t = document.cookie.split(";"), n = null, o = 0; o < t.length; o++) {
                                    for (var r = t[o];
                                        " " === r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(e)) {
                                        n = r.substring(e.length, r.length);
                                        break
                                    }
                                }
                                return n
                            } catch (e) {
                                return null
                            }
                        },
                        H = function(e, t, n) {
                            var o = null !== t ? n.expirationDays : -1;
                            if (o) {
                                var r = new Date;
                                r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), o = r
                            }
                            var i = e + "=" + t;
                            o && (i += "; expires=" + o.toUTCString()), i += "; path=/", n.domain && (i += "; domain=" + n.domain), n.secure && (i += "; Secure"), n.sameSite && (i += "; SameSite=" + n.sameSite), document.cookie = i
                        },
                        $ = function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = t.split(".")[m.LAST_EVENT_TIME_INDEX];
                            return n && (e = parseInt(n, 32)), e || (D.warn("unable to parse malformed cookie: ".concat(t)), 0)
                        },
                        X = H,
                        Z = z,
                        Q = function(e) {
                            try {
                                var t = document.cookie.split(";").map((function(e) {
                                        return e.trimStart()
                                    })),
                                    n = [],
                                    o = !0,
                                    r = !1,
                                    i = void 0;
                                try {
                                    for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done); o = !0) {
                                        for (var u = s.value;
                                            " " === u.charAt(0);) u = u.substring(1);
                                        0 === u.indexOf(e) && n.push(u.substring(e.length))
                                    }
                                } catch (e) {
                                    r = !0, i = e
                                } finally {
                                    try {
                                        o || null == a.return || a.return()
                                    } finally {
                                        if (r) throw i
                                    }
                                }
                                return n
                            } catch (e) {
                                return []
                            }
                        },
                        W = function(e) {
                            return i(e).sort((function(e, t) {
                                var n = $(e);
                                return $(t) - n
                            }))
                        },
                        Y = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = m.COOKIE_TEST_PREFIX + K(),
                                n = !1;
                            try {
                                var o = String(new Date);
                                H(t, o, e), D.info("Testing if cookies available"), n = z(t + "=") === o
                            } catch (e) {
                                D.warn('Error thrown when checking for cookies. Reason: "'.concat(e, '"'))
                            } finally {
                                D.info("Cleaning up cookies availability test"), H(t, null, e)
                            }
                            return n
                        },
                        J = function(e) {
                            var t = document.createElement("a");
                            return t.href = e, t.hostname || location.hostname
                        },
                        ee = function(e) {
                            for (var t = J(e).split("."), n = [], o = "_tldtest_" + K(), r = t.length - 2; r >= 0; --r) n.push(t.slice(r).join("."));
                            for (var i = 0; i < n.length; ++i) {
                                var s = n[i],
                                    a = {
                                        domain: "." + s
                                    };
                                if (X(o, 1, a), Z(o)) return X(o, null, a), s
                            }
                            return ""
                        },
                        te = {
                            expirationDays: void 0,
                            domain: void 0
                        },
                        ne = function(e) {
                            var t = "";
                            return te.domain && (t = "." === te.domain.charAt(0) ? te.domain.substring(1) : te.domain), e + t
                        },
                        oe = function(e) {
                            var t = ne(e) + "=",
                                n = Z(t);
                            try {
                                if (n) return JSON.parse(_.decode(n))
                            } catch (e) {
                                return null
                            }
                            return null
                        },
                        re = function(e, t) {
                            try {
                                return X(ne(e), _.encode(JSON.stringify(t)), te), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        ie = function(e) {
                            try {
                                return X(ne(e), null, te), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        se = {
                            reset: function() {
                                te = {
                                    expirationDays: void 0,
                                    domain: void 0
                                }
                            },
                            options: function(e) {
                                if (0 === arguments.length) return te;
                                e = e || {}, te.expirationDays = e.expirationDays, te.secure = e.secure, te.sameSite = e.sameSite;
                                var t = U(e.domain) ? "." + ee(G().href) : e.domain,
                                    n = Math.random();
                                te.domain = t, re("amplitude_test", n);
                                var o = oe("amplitude_test");
                                return o && o === n || (t = null), ie("amplitude_test"), te.domain = t, te
                            },
                            get: oe,
                            set: re,
                            remove: ie,
                            setRaw: function(e, t) {
                                try {
                                    return X(ne(e), t, te), !0
                                } catch (e) {
                                    return !1
                                }
                            },
                            getRaw: function(e) {
                                var t = ne(e) + "=";
                                return Z(t)
                            }
                        };
                    if (function() {
                            var e, t = new Date;
                            try {
                                return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
                            } catch (e) {}
                            return !1
                        }()) E = window.localStorage;
                    else if (window.globalStorage) try {
                        E = window.globalStorage[window.location.hostname]
                    } catch (e) {} else if ("undefined" != typeof document) {
                        var ae = document.createElement("div"),
                            ue = "localStorage";
                        ae.style.display = "none", document.getElementsByTagName("head")[0].appendChild(ae), ae.addBehavior && (ae.addBehavior("#default#userdata"), E = {
                            length: 0,
                            setItem: function(e, t) {
                                ae.load(ue), ae.getAttribute(e) || this.length++, ae.setAttribute(e, t), ae.save(ue)
                            },
                            getItem: function(e) {
                                return ae.load(ue), ae.getAttribute(e)
                            },
                            removeItem: function(e) {
                                ae.load(ue), ae.getAttribute(e) && this.length--, ae.removeAttribute(e), ae.save(ue)
                            },
                            clear: function() {
                                ae.load(ue);
                                for (var e, t = 0; e = ae.XMLDocument.documentElement.attributes[t++];) ae.removeAttribute(e.name);
                                ae.save(ue), this.length = 0
                            },
                            key: function(e) {
                                return ae.load(ue), ae.XMLDocument.documentElement.attributes[e]
                            }
                        }, ae.load(ue), E.length = ae.XMLDocument.documentElement.attributes.length)
                    }
                    E || (E = {
                        length: 0,
                        setItem: function(e, t) {},
                        getItem: function(e) {},
                        removeItem: function(e) {},
                        clear: function() {},
                        key: function(e) {}
                    });
                    var ce, le = E,
                        pe = function() {
                            this.storage = null
                        };
                    pe.prototype.getStorage = function() {
                        if (null !== this.storage) return this.storage;
                        if (Y()) this.storage = se;
                        else {
                            var e = "amp_cookiestore_";
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
                                options: function(e) {
                                    return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window && window.location && window.location.hostname, this._options.secure = e.secure || !1)
                                },
                                get: function(t) {
                                    try {
                                        return JSON.parse(le.getItem(e + t))
                                    } catch (e) {}
                                    return null
                                },
                                set: function(t, n) {
                                    try {
                                        return le.setItem(e + t, JSON.stringify(n)), !0
                                    } catch (e) {}
                                    return !1
                                },
                                remove: function(t) {
                                    try {
                                        le.removeItem(e + t)
                                    } catch (e) {
                                        return !1
                                    }
                                }
                            }
                        }
                        return this.storage
                    };
                    var de = (o(ce = {}, m.STORAGE_COOKIES, !0), o(ce, m.STORAGE_NONE, !0), o(ce, m.STORAGE_LOCAL, !0), o(ce, m.STORAGE_SESSION, !0), ce),
                        fe = function() {
                            function e(t) {
                                var n = t.storageKey,
                                    o = t.disableCookies,
                                    r = t.domain,
                                    i = t.secure,
                                    s = t.sameSite,
                                    a = t.expirationDays,
                                    u = t.storage;
                                (function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                })(this, e), this.storageKey = n, this.domain = r, this.secure = i, this.sameSite = s, this.expirationDays = a, this.cookieDomain = "";
                                var c = ee(G().href);
                                if (this.cookieDomain = r || (c ? "." + c : null), de[u]) this.storage = u;
                                else {
                                    var l = o || !Y({
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    });
                                    this.storage = l ? m.STORAGE_LOCAL : m.STORAGE_COOKIES
                                }
                            }
                            return n = e, (o = [{
                                key: "getCookieStorageKey",
                                value: function() {
                                    if (!this.domain) return this.storageKey;
                                    var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                                    return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                                }
                            }, {
                                key: "save",
                                value: function(e) {
                                    var t = e.deviceId,
                                        n = e.userId,
                                        o = e.optOut,
                                        r = e.sessionId,
                                        i = e.lastEventTime,
                                        s = e.eventId,
                                        a = e.identifyId,
                                        u = e.sequenceNumber;
                                    if (this.storage !== m.STORAGE_NONE) {
                                        var c = [t, _.encode(n || ""), o ? "1" : "", r ? r.toString(32) : "0", i ? i.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                                        switch (this.storage) {
                                            case m.STORAGE_SESSION:
                                                window.sessionStorage && window.sessionStorage.setItem(this.storageKey, c);
                                                break;
                                            case m.STORAGE_LOCAL:
                                                le.setItem(this.storageKey, c);
                                                break;
                                            case m.STORAGE_COOKIES:
                                                this.saveCookie(c)
                                        }
                                    }
                                }
                            }, {
                                key: "saveCookie",
                                value: function(e) {
                                    X(this.getCookieStorageKey(), e, {
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    })
                                }
                            }, {
                                key: "load",
                                value: function() {
                                    var e, t = this;
                                    if (this.storage === m.STORAGE_COOKIES) {
                                        var n = this.getCookieStorageKey() + "=",
                                            o = Q(n);
                                        if (0 === o.length || 1 === o.length) e = o[0];
                                        else {
                                            var r = W(o)[0];
                                            o.forEach((function() {
                                                return X(t.getCookieStorageKey(), null, {})
                                            })), this.saveCookie(r), e = Z(n)
                                        }
                                    }
                                    if (e || (e = le.getItem(this.storageKey)), !e) try {
                                        e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey)
                                    } catch (e) {
                                        D.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                                    }
                                    if (!e) return null;
                                    var i = e.split("."),
                                        s = null;
                                    if (i[m.USER_ID_INDEX]) try {
                                        s = _.decode(i[m.USER_ID_INDEX])
                                    } catch (e) {
                                        s = null
                                    }
                                    return {
                                        deviceId: i[m.DEVICE_ID_INDEX],
                                        userId: s,
                                        optOut: "1" === i[m.OPT_OUT_INDEX],
                                        sessionId: parseInt(i[m.SESSION_ID_INDEX], 32),
                                        lastEventTime: parseInt(i[m.LAST_EVENT_TIME_INDEX], 32),
                                        eventId: parseInt(i[m.EVENT_ID_INDEX], 32),
                                        identifyId: parseInt(i[m.IDENTIFY_ID_INDEX], 32),
                                        sequenceNumber: parseInt(i[m.SEQUENCE_NUMBER_INDEX], 32)
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    var e;
                                    if (this.storage === m.STORAGE_COOKIES && (e = Z(this.getCookieStorageKey() + "="), X(this.getCookieStorageKey(), null, {
                                            domain: this.cookieDomain,
                                            secure: this.secure,
                                            sameSite: this.sameSite,
                                            expirationDays: 0
                                        })), e || (e = le.getItem(this.storageKey), le.clear()), !e) try {
                                        e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey), window.sessionStorage.clear()
                                    } catch (e) {
                                        D.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                                    }
                                    return !!e
                                }
                            }]) && t(n.prototype, o), r && t(n, r), e;
                            var n, o, r
                        }(),
                        he = "$clearAll",
                        ye = function() {
                            this.userPropertiesOperations = {}, this.properties = []
                        };
                    ye.prototype.add = function(e, t) {
                        return "number" === w(t) || "string" === w(t) ? this._addOperation("$add", e, t) : D.error("Unsupported type for value: " + w(t) + ", expecting number or string"), this
                    }, ye.prototype.append = function(e, t) {
                        return this._addOperation("$append", e, t), this
                    }, ye.prototype.clearAll = function() {
                        return Object.keys(this.userPropertiesOperations).length > 0 ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, he) || D.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations.$clearAll = "-", this)
                    }, ye.prototype.prepend = function(e, t) {
                        return this._addOperation("$prepend", e, t), this
                    }, ye.prototype.set = function(e, t) {
                        return this._addOperation("$set", e, t), this
                    }, ye.prototype.setOnce = function(e, t) {
                        return this._addOperation("$setOnce", e, t), this
                    }, ye.prototype.unset = function(e) {
                        return this._addOperation("$unset", e, "-"), this
                    }, ye.prototype.preInsert = function(e, t) {
                        return this._addOperation("$preInsert", e, t), this
                    }, ye.prototype.postInsert = function(e, t) {
                        return this._addOperation("$postInsert", e, t), this
                    }, ye.prototype.remove = function(e, t) {
                        return this._addOperation("$remove", e, t), this
                    }, ye.prototype._addOperation = function(e, t, n) {
                        Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, he) ? D.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)) : D.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
                    };
                    var me = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

                    function ve(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }
                    var ge = ve((function(e) {
                            ! function(t) {
                                function n(e, t) {
                                    var n = (65535 & e) + (65535 & t);
                                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                                }

                                function o(e, t, o, r, i, s) {
                                    return n((a = n(n(t, e), n(r, s))) << (u = i) | a >>> 32 - u, o);
                                    var a, u
                                }

                                function r(e, t, n, r, i, s, a) {
                                    return o(t & n | ~t & r, e, t, i, s, a)
                                }

                                function i(e, t, n, r, i, s, a) {
                                    return o(t & r | n & ~r, e, t, i, s, a)
                                }

                                function s(e, t, n, r, i, s, a) {
                                    return o(t ^ n ^ r, e, t, i, s, a)
                                }

                                function a(e, t, n, r, i, s, a) {
                                    return o(n ^ (t | ~r), e, t, i, s, a)
                                }

                                function u(e, t) {
                                    var o, u, c, l, p;
                                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                    var d = 1732584193,
                                        f = -271733879,
                                        h = -1732584194,
                                        y = 271733878;
                                    for (o = 0; o < e.length; o += 16) u = d, c = f, l = h, p = y, d = r(d, f, h, y, e[o], 7, -680876936), y = r(y, d, f, h, e[o + 1], 12, -389564586), h = r(h, y, d, f, e[o + 2], 17, 606105819), f = r(f, h, y, d, e[o + 3], 22, -1044525330), d = r(d, f, h, y, e[o + 4], 7, -176418897), y = r(y, d, f, h, e[o + 5], 12, 1200080426), h = r(h, y, d, f, e[o + 6], 17, -1473231341), f = r(f, h, y, d, e[o + 7], 22, -45705983), d = r(d, f, h, y, e[o + 8], 7, 1770035416), y = r(y, d, f, h, e[o + 9], 12, -1958414417), h = r(h, y, d, f, e[o + 10], 17, -42063), f = r(f, h, y, d, e[o + 11], 22, -1990404162), d = r(d, f, h, y, e[o + 12], 7, 1804603682), y = r(y, d, f, h, e[o + 13], 12, -40341101), h = r(h, y, d, f, e[o + 14], 17, -1502002290), d = i(d, f = r(f, h, y, d, e[o + 15], 22, 1236535329), h, y, e[o + 1], 5, -165796510), y = i(y, d, f, h, e[o + 6], 9, -1069501632), h = i(h, y, d, f, e[o + 11], 14, 643717713), f = i(f, h, y, d, e[o], 20, -373897302), d = i(d, f, h, y, e[o + 5], 5, -701558691), y = i(y, d, f, h, e[o + 10], 9, 38016083), h = i(h, y, d, f, e[o + 15], 14, -660478335), f = i(f, h, y, d, e[o + 4], 20, -405537848), d = i(d, f, h, y, e[o + 9], 5, 568446438), y = i(y, d, f, h, e[o + 14], 9, -1019803690), h = i(h, y, d, f, e[o + 3], 14, -187363961), f = i(f, h, y, d, e[o + 8], 20, 1163531501), d = i(d, f, h, y, e[o + 13], 5, -1444681467), y = i(y, d, f, h, e[o + 2], 9, -51403784), h = i(h, y, d, f, e[o + 7], 14, 1735328473), d = s(d, f = i(f, h, y, d, e[o + 12], 20, -1926607734), h, y, e[o + 5], 4, -378558), y = s(y, d, f, h, e[o + 8], 11, -2022574463), h = s(h, y, d, f, e[o + 11], 16, 1839030562), f = s(f, h, y, d, e[o + 14], 23, -35309556), d = s(d, f, h, y, e[o + 1], 4, -1530992060), y = s(y, d, f, h, e[o + 4], 11, 1272893353), h = s(h, y, d, f, e[o + 7], 16, -155497632), f = s(f, h, y, d, e[o + 10], 23, -1094730640), d = s(d, f, h, y, e[o + 13], 4, 681279174), y = s(y, d, f, h, e[o], 11, -358537222), h = s(h, y, d, f, e[o + 3], 16, -722521979), f = s(f, h, y, d, e[o + 6], 23, 76029189), d = s(d, f, h, y, e[o + 9], 4, -640364487), y = s(y, d, f, h, e[o + 12], 11, -421815835), h = s(h, y, d, f, e[o + 15], 16, 530742520), d = a(d, f = s(f, h, y, d, e[o + 2], 23, -995338651), h, y, e[o], 6, -198630844), y = a(y, d, f, h, e[o + 7], 10, 1126891415), h = a(h, y, d, f, e[o + 14], 15, -1416354905), f = a(f, h, y, d, e[o + 5], 21, -57434055), d = a(d, f, h, y, e[o + 12], 6, 1700485571), y = a(y, d, f, h, e[o + 3], 10, -1894986606), h = a(h, y, d, f, e[o + 10], 15, -1051523), f = a(f, h, y, d, e[o + 1], 21, -2054922799), d = a(d, f, h, y, e[o + 8], 6, 1873313359), y = a(y, d, f, h, e[o + 15], 10, -30611744), h = a(h, y, d, f, e[o + 6], 15, -1560198380), f = a(f, h, y, d, e[o + 13], 21, 1309151649), d = a(d, f, h, y, e[o + 4], 6, -145523070), y = a(y, d, f, h, e[o + 11], 10, -1120210379), h = a(h, y, d, f, e[o + 2], 15, 718787259), f = a(f, h, y, d, e[o + 9], 21, -343485551), d = n(d, u), f = n(f, c), h = n(h, l), y = n(y, p);
                                    return [d, f, h, y]
                                }

                                function c(e) {
                                    var t, n = "",
                                        o = 32 * e.length;
                                    for (t = 0; t < o; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                                    return n
                                }

                                function l(e) {
                                    var t, n = [];
                                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                                    var o = 8 * e.length;
                                    for (t = 0; t < o; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                    return n
                                }

                                function p(e) {
                                    var t, n, o = "0123456789abcdef",
                                        r = "";
                                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
                                    return r
                                }

                                function d(e) {
                                    return unescape(encodeURIComponent(e))
                                }

                                function f(e) {
                                    return function(e) {
                                        return c(u(l(e), 8 * e.length))
                                    }(d(e))
                                }

                                function h(e, t) {
                                    return function(e, t) {
                                        var n, o, r = l(e),
                                            i = [],
                                            s = [];
                                        for (i[15] = s[15] = void 0, r.length > 16 && (r = u(r, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ r[n], s[n] = 1549556828 ^ r[n];
                                        return o = u(i.concat(l(t)), 512 + 8 * t.length), c(u(s.concat(o), 640))
                                    }(d(e), d(t))
                                }

                                function y(e, t, n) {
                                    return t ? n ? h(t, e) : p(h(t, e)) : n ? f(e) : p(f(e))
                                }
                                e.exports ? e.exports = y : t.md5 = y
                            }(me)
                        })),
                        _e = Object.getOwnPropertySymbols,
                        be = Object.prototype.hasOwnProperty,
                        we = Object.prototype.propertyIsEnumerable;

                    function Ee(e) {
                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var Ie = function() {
                            try {
                                if (!Object.assign) return !1;
                                var e = new String("abc");
                                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                                if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                        return t[e]
                                    })).join("")) return !1;
                                var o = {};
                                return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                    o[e] = e
                                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
                            } catch (e) {
                                return !1
                            }
                        }() ? Object.assign : function(e, t) {
                            for (var n, o, r = Ee(e), i = 1; i < arguments.length; i++) {
                                for (var s in n = Object(arguments[i])) be.call(n, s) && (r[s] = n[s]);
                                if (_e) {
                                    o = _e(n);
                                    for (var a = 0; a < o.length; a++) we.call(n, o[a]) && (r[o[a]] = n[o[a]])
                                }
                            }
                            return r
                        },
                        Se = "%[a-f0-9]{2}";
                    new RegExp(Se, "gi"), new RegExp("(" + Se + ")+", "gi");

                    function Te(e, t) {
                        return t.encode ? t.strict ? encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        })) : encodeURIComponent(e) : e
                    }
                    var Oe = function(e, t) {
                            !1 === (t = Ie({
                                encode: !0,
                                strict: !0,
                                arrayFormat: "none"
                            }, t)).sort && (t.sort = function() {});
                            var n = function(e) {
                                switch (e.arrayFormat) {
                                    case "index":
                                        return function(t, n, o) {
                                            return null === n ? [Te(t, e), "[", o, "]"].join("") : [Te(t, e), "[", Te(o, e), "]=", Te(n, e)].join("")
                                        };
                                    case "bracket":
                                        return function(t, n) {
                                            return null === n ? Te(t, e) : [Te(t, e), "[]=", Te(n, e)].join("")
                                        };
                                    default:
                                        return function(t, n) {
                                            return null === n ? Te(t, e) : [Te(t, e), "=", Te(n, e)].join("")
                                        }
                                }
                            }(t);
                            return e ? Object.keys(e).sort(t.sort).map((function(o) {
                                var r = e[o];
                                if (void 0 === r) return "";
                                if (null === r) return Te(o, t);
                                if (Array.isArray(r)) {
                                    var i = [];
                                    return r.slice().forEach((function(e) {
                                        void 0 !== e && i.push(n(o, e, i.length))
                                    })), i.join("&")
                                }
                                return Te(o, t) + "=" + Te(r, t)
                            })).filter((function(e) {
                                return e.length > 0
                            })).join("&") : ""
                        },
                        ke = function(e, t, n) {
                            this.url = e, this.data = t || {}, this.headers = n
                        };
                    ke.prototype.send = function(e) {
                        if (window.XDomainRequest) {
                            var t = new window.XDomainRequest;
                            t.open("POST", this.url, !0), t.onload = function() {
                                e(200, t.responseText)
                            }, t.onerror = function() {
                                "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                            }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(Oe(this.data))
                        } else {
                            var n = new XMLHttpRequest;
                            n.open("POST", this.url, !0), n.onreadystatechange = function() {
                                    4 === n.readyState && e(n.status, n.responseText)
                                },
                                function(e, t) {
                                    for (var n in t) e.setRequestHeader(n, t[n])
                                }(n, this.headers), n.send(Oe(this.data))
                        }
                    };
                    var Ne = function() {
                        this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                    };
                    Ne.prototype.setProductId = function(e) {
                        return "string" !== w(e) ? D.error("Unsupported type for productId: " + w(e) + ", expecting string") : U(e) ? D.error("Invalid empty productId") : this._productId = e, this
                    }, Ne.prototype.setQuantity = function(e) {
                        return "number" !== w(e) ? D.error("Unsupported type for quantity: " + w(e) + ", expecting number") : this._quantity = parseInt(e), this
                    }, Ne.prototype.setPrice = function(e) {
                        return "number" !== w(e) ? D.error("Unsupported type for price: " + w(e) + ", expecting number") : this._price = e, this
                    }, Ne.prototype.setRevenueType = function(e) {
                        return "string" !== w(e) ? D.error("Unsupported type for revenueType: " + w(e) + ", expecting string") : this._revenueType = e, this
                    }, Ne.prototype.setEventProperties = function(e) {
                        return "object" !== w(e) ? D.error("Unsupported type for eventProperties: " + w(e) + ", expecting object") : this._properties = B(e), this
                    }, Ne.prototype._isValidRevenue = function() {
                        return "number" === w(this._price) || (D.error("Invalid revenue, need to set price field"), !1)
                    }, Ne.prototype._toJSONObject = function() {
                        var e = "object" === w(this._properties) ? this._properties : {};
                        return null !== this._productId && (e[m.REVENUE_PRODUCT_ID] = this._productId), null !== this._quantity && (e[m.REVENUE_QUANTITY] = this._quantity), null !== this._price && (e[m.REVENUE_PRICE] = this._price), null !== this._revenueType && (e[m.REVENUE_REVENUE_TYPE] = this._revenueType), e
                    };
                    var Ae = ve((function(e, t) {
                            ! function(n, o) {
                                var r = "function",
                                    i = "undefined",
                                    s = "object",
                                    a = "string",
                                    u = "model",
                                    c = "name",
                                    l = "type",
                                    p = "vendor",
                                    d = "version",
                                    f = "architecture",
                                    h = "console",
                                    y = "mobile",
                                    m = "tablet",
                                    v = "smarttv",
                                    g = "wearable",
                                    _ = "embedded",
                                    b = "Amazon",
                                    w = "Apple",
                                    E = "ASUS",
                                    I = "BlackBerry",
                                    S = "Firefox",
                                    T = "Google",
                                    O = "Huawei",
                                    k = "LG",
                                    N = "Microsoft",
                                    A = "Motorola",
                                    P = "Opera",
                                    x = "Samsung",
                                    C = "Sony",
                                    R = "Xiaomi",
                                    D = "Zebra",
                                    U = function(e) {
                                        var t = {};
                                        for (var n in e) t[e[n].toUpperCase()] = e[n];
                                        return t
                                    },
                                    q = function(e, t) {
                                        return typeof e === a && -1 !== L(t).indexOf(L(e))
                                    },
                                    L = function(e) {
                                        return e.toLowerCase()
                                    },
                                    j = function(e, t) {
                                        if (typeof e === a) return e = e.replace(/^\s+|\s+$/g, ""), typeof t === i ? e : e.substring(0, 255)
                                    },
                                    M = function(e, t) {
                                        for (var n, i, a, u, c, l, p = 0; p < t.length && !c;) {
                                            var d = t[p],
                                                f = t[p + 1];
                                            for (n = i = 0; n < d.length && !c;)
                                                if (c = d[n++].exec(e))
                                                    for (a = 0; a < f.length; a++) l = c[++i], typeof(u = f[a]) === s && u.length > 0 ? 2 == u.length ? typeof u[1] == r ? this[u[0]] = u[1].call(this, l) : this[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== r || u[1].exec && u[1].test ? this[u[0]] = l ? l.replace(u[1], u[2]) : o : this[u[0]] = l ? u[1].call(this, l, u[2]) : o : 4 == u.length && (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : o) : this[u] = l || o;
                                            p += 2
                                        }
                                    },
                                    B = function(e, t) {
                                        for (var n in t)
                                            if (typeof t[n] === s && t[n].length > 0) {
                                                for (var r = 0; r < t[n].length; r++)
                                                    if (q(t[n][r], e)) return "?" === n ? o : n
                                            } else if (q(t[n], e)) return "?" === n ? o : n;
                                        return e
                                    },
                                    F = {
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
                                    V = {
                                        browser: [
                                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                            [d, [c, "Chrome"]],
                                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                            [d, [c, "Edge"]],
                                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                            [c, d],
                                            [/opios[\/ ]+([\w\.]+)/i],
                                            [d, [c, "Opera Mini"]],
                                            [/\bopr\/([\w\.]+)/i],
                                            [d, [c, P]],
                                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                            [c, d],
                                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                            [d, [c, "UCBrowser"]],
                                            [/\bqbcore\/([\w\.]+)/i],
                                            [d, [c, "WeChat(Win) Desktop"]],
                                            [/micromessenger\/([\w\.]+)/i],
                                            [d, [c, "WeChat"]],
                                            [/konqueror\/([\w\.]+)/i],
                                            [d, [c, "Konqueror"]],
                                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                            [d, [c, "IE"]],
                                            [/yabrowser\/([\w\.]+)/i],
                                            [d, [c, "Yandex"]],
                                            [/(avast|avg)\/([\w\.]+)/i],
                                            [
                                                [c, /(.+)/, "$1 Secure Browser"], d
                                            ],
                                            [/\bfocus\/([\w\.]+)/i],
                                            [d, [c, "Firefox Focus"]],
                                            [/\bopt\/([\w\.]+)/i],
                                            [d, [c, "Opera Touch"]],
                                            [/coc_coc\w+\/([\w\.]+)/i],
                                            [d, [c, "Coc Coc"]],
                                            [/dolfin\/([\w\.]+)/i],
                                            [d, [c, "Dolphin"]],
                                            [/coast\/([\w\.]+)/i],
                                            [d, [c, "Opera Coast"]],
                                            [/miuibrowser\/([\w\.]+)/i],
                                            [d, [c, "MIUI Browser"]],
                                            [/fxios\/([-\w\.]+)/i],
                                            [d, [c, S]],
                                            [/\bqihu|(qi?ho?o?|360)browser/i],
                                            [
                                                [c, "360 Browser"]
                                            ],
                                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                            [
                                                [c, /(.+)/, "$1 Browser"], d
                                            ],
                                            [/(comodo_dragon)\/([\w\.]+)/i],
                                            [
                                                [c, /_/g, " "], d
                                            ],
                                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                            [c, d],
                                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                            [c],
                                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                            [
                                                [c, "Facebook"], d
                                            ],
                                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                            [c, d],
                                            [/\bgsa\/([\w\.]+) .*safari\//i],
                                            [d, [c, "GSA"]],
                                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                                            [d, [c, "Chrome Headless"]],
                                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                                            [
                                                [c, "Chrome WebView"], d
                                            ],
                                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                            [d, [c, "Android Browser"]],
                                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                            [c, d],
                                            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                            [d, [c, "Mobile Safari"]],
                                            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                            [d, c],
                                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                            [c, [d, B, {
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
                                            [c, d],
                                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                            [
                                                [c, "Netscape"], d
                                            ],
                                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                            [d, [c, "Firefox Reality"]],
                                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                            [c, d]
                                        ],
                                        cpu: [
                                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                            [
                                                [f, "amd64"]
                                            ],
                                            [/(ia32(?=;))/i],
                                            [
                                                [f, L]
                                            ],
                                            [/((?:i[346]|x)86)[;\)]/i],
                                            [
                                                [f, "ia32"]
                                            ],
                                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                            [
                                                [f, "arm64"]
                                            ],
                                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                            [
                                                [f, "armhf"]
                                            ],
                                            [/windows (ce|mobile); ppc;/i],
                                            [
                                                [f, "arm"]
                                            ],
                                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                            [
                                                [f, /ower/, "", L]
                                            ],
                                            [/(sun4\w)[;\)]/i],
                                            [
                                                [f, "sparc"]
                                            ],
                                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                            [
                                                [f, L]
                                            ]
                                        ],
                                        device: [
                                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                            [u, [p, x],
                                                [l, m]
                                            ],
                                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                            [u, [p, x],
                                                [l, y]
                                            ],
                                            [/((ipod|iphone)\d+,\d+)/i],
                                            [u, [p, w],
                                                [l, y]
                                            ],
                                            [/(ipad\d+,\d+)/i],
                                            [u, [p, w],
                                                [l, m]
                                            ],
                                            [/\((ip(?:hone|od)[\w ]*);/i],
                                            [u, [p, w],
                                                [l, y]
                                            ],
                                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                            [u, [p, w],
                                                [l, m]
                                            ],
                                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                            [u, [p, O],
                                                [l, m]
                                            ],
                                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                                            [u, [p, O],
                                                [l, y]
                                            ],
                                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                            [
                                                [u, /_/g, " "],
                                                [p, R],
                                                [l, y]
                                            ],
                                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                            [
                                                [u, /_/g, " "],
                                                [p, R],
                                                [l, m]
                                            ],
                                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                                            [u, [p, "OPPO"],
                                                [l, y]
                                            ],
                                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                            [u, [p, "Vivo"],
                                                [l, y]
                                            ],
                                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                            [u, [p, "Realme"],
                                                [l, y]
                                            ],
                                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                            [u, [p, A],
                                                [l, y]
                                            ],
                                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                            [u, [p, A],
                                                [l, m]
                                            ],
                                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                            [u, [p, k],
                                                [l, m]
                                            ],
                                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                            [u, [p, k],
                                                [l, y]
                                            ],
                                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                            [u, [p, "Lenovo"],
                                                [l, m]
                                            ],
                                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                            [
                                                [u, /_/g, " "],
                                                [p, "Nokia"],
                                                [l, y]
                                            ],
                                            [/(pixel c)\b/i],
                                            [u, [p, T],
                                                [l, m]
                                            ],
                                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                            [u, [p, T],
                                                [l, y]
                                            ],
                                            [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                            [u, [p, C],
                                                [l, y]
                                            ],
                                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                            [
                                                [u, "Xperia Tablet"],
                                                [p, C],
                                                [l, m]
                                            ],
                                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                            [u, [p, "OnePlus"],
                                                [l, y]
                                            ],
                                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                            [u, [p, b],
                                                [l, m]
                                            ],
                                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                            [
                                                [u, /(.+)/g, "Fire Phone $1"],
                                                [p, b],
                                                [l, y]
                                            ],
                                            [/(playbook);[-\w\),; ]+(rim)/i],
                                            [u, p, [l, m]],
                                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                            [u, [p, I],
                                                [l, y]
                                            ],
                                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                            [u, [p, E],
                                                [l, m]
                                            ],
                                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                            [u, [p, E],
                                                [l, y]
                                            ],
                                            [/(nexus 9)/i],
                                            [u, [p, "HTC"],
                                                [l, m]
                                            ],
                                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                                            [p, [u, /_/g, " "],
                                                [l, y]
                                            ],
                                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                            [u, [p, "Acer"],
                                                [l, m]
                                            ],
                                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                            [u, [p, "Meizu"],
                                                [l, y]
                                            ],
                                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                            [u, [p, "Sharp"],
                                                [l, y]
                                            ],
                                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                            [p, u, [l, y]],
                                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                            [p, u, [l, m]],
                                            [/(surface duo)/i],
                                            [u, [p, N],
                                                [l, m]
                                            ],
                                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                            [u, [p, "Fairphone"],
                                                [l, y]
                                            ],
                                            [/(u304aa)/i],
                                            [u, [p, "AT&T"],
                                                [l, y]
                                            ],
                                            [/\bsie-(\w*)/i],
                                            [u, [p, "Siemens"],
                                                [l, y]
                                            ],
                                            [/\b(rct\w+) b/i],
                                            [u, [p, "RCA"],
                                                [l, m]
                                            ],
                                            [/\b(venue[\d ]{2,7}) b/i],
                                            [u, [p, "Dell"],
                                                [l, m]
                                            ],
                                            [/\b(q(?:mv|ta)\w+) b/i],
                                            [u, [p, "Verizon"],
                                                [l, m]
                                            ],
                                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                            [u, [p, "Barnes & Noble"],
                                                [l, m]
                                            ],
                                            [/\b(tm\d{3}\w+) b/i],
                                            [u, [p, "NuVision"],
                                                [l, m]
                                            ],
                                            [/\b(k88) b/i],
                                            [u, [p, "ZTE"],
                                                [l, m]
                                            ],
                                            [/\b(nx\d{3}j) b/i],
                                            [u, [p, "ZTE"],
                                                [l, y]
                                            ],
                                            [/\b(gen\d{3}) b.+49h/i],
                                            [u, [p, "Swiss"],
                                                [l, y]
                                            ],
                                            [/\b(zur\d{3}) b/i],
                                            [u, [p, "Swiss"],
                                                [l, m]
                                            ],
                                            [/\b((zeki)?tb.*\b) b/i],
                                            [u, [p, "Zeki"],
                                                [l, m]
                                            ],
                                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                            [
                                                [p, "Dragon Touch"], u, [l, m]
                                            ],
                                            [/\b(ns-?\w{0,9}) b/i],
                                            [u, [p, "Insignia"],
                                                [l, m]
                                            ],
                                            [/\b((nxa|next)-?\w{0,9}) b/i],
                                            [u, [p, "NextBook"],
                                                [l, m]
                                            ],
                                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                            [
                                                [p, "Voice"], u, [l, y]
                                            ],
                                            [/\b(lvtel\-)?(v1[12]) b/i],
                                            [
                                                [p, "LvTel"], u, [l, y]
                                            ],
                                            [/\b(ph-1) /i],
                                            [u, [p, "Essential"],
                                                [l, y]
                                            ],
                                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                            [u, [p, "Envizen"],
                                                [l, m]
                                            ],
                                            [/\b(trio[-\w\. ]+) b/i],
                                            [u, [p, "MachSpeed"],
                                                [l, m]
                                            ],
                                            [/\btu_(1491) b/i],
                                            [u, [p, "Rotor"],
                                                [l, m]
                                            ],
                                            [/(shield[\w ]+) b/i],
                                            [u, [p, "Nvidia"],
                                                [l, m]
                                            ],
                                            [/(sprint) (\w+)/i],
                                            [p, u, [l, y]],
                                            [/(kin\.[onetw]{3})/i],
                                            [
                                                [u, /\./g, " "],
                                                [p, N],
                                                [l, y]
                                            ],
                                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                            [u, [p, D],
                                                [l, m]
                                            ],
                                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                            [u, [p, D],
                                                [l, y]
                                            ],
                                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                            [p, u, [l, h]],
                                            [/droid.+; (shield) bui/i],
                                            [u, [p, "Nvidia"],
                                                [l, h]
                                            ],
                                            [/(playstation [345portablevi]+)/i],
                                            [u, [p, C],
                                                [l, h]
                                            ],
                                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                            [u, [p, N],
                                                [l, h]
                                            ],
                                            [/smart-tv.+(samsung)/i],
                                            [p, [l, v]],
                                            [/hbbtv.+maple;(\d+)/i],
                                            [
                                                [u, /^/, "SmartTV"],
                                                [p, x],
                                                [l, v]
                                            ],
                                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                            [
                                                [p, k],
                                                [l, v]
                                            ],
                                            [/(apple) ?tv/i],
                                            [p, [u, "Apple TV"],
                                                [l, v]
                                            ],
                                            [/crkey/i],
                                            [
                                                [u, "Chromecast"],
                                                [p, T],
                                                [l, v]
                                            ],
                                            [/droid.+aft(\w)( bui|\))/i],
                                            [u, [p, b],
                                                [l, v]
                                            ],
                                            [/\(dtv[\);].+(aquos)/i],
                                            [u, [p, "Sharp"],
                                                [l, v]
                                            ],
                                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                            [
                                                [p, j],
                                                [u, j],
                                                [l, v]
                                            ],
                                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                            [
                                                [l, v]
                                            ],
                                            [/((pebble))app/i],
                                            [p, u, [l, g]],
                                            [/droid.+; (glass) \d/i],
                                            [u, [p, T],
                                                [l, g]
                                            ],
                                            [/droid.+; (wt63?0{2,3})\)/i],
                                            [u, [p, D],
                                                [l, g]
                                            ],
                                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                            [p, [l, _]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                            [u, [l, y]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                            [u, [l, m]],
                                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                            [
                                                [l, m]
                                            ],
                                            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                            [
                                                [l, y]
                                            ],
                                            [/(android[-\w\. ]{0,9});.+buil/i],
                                            [u, [p, "Generic"]]
                                        ],
                                        engine: [
                                            [/windows.+ edge\/([\w\.]+)/i],
                                            [d, [c, "EdgeHTML"]],
                                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                            [d, [c, "Blink"]],
                                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                            [c, d],
                                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                            [d, c]
                                        ],
                                        os: [
                                            [/microsoft (windows) (vista|xp)/i],
                                            [c, d],
                                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                            [c, [d, B, F]],
                                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                            [
                                                [c, "Windows"],
                                                [d, B, F]
                                            ],
                                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                            [
                                                [d, /_/g, "."],
                                                [c, "iOS"]
                                            ],
                                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                            [
                                                [c, "Mac OS"],
                                                [d, /_/g, "."]
                                            ],
                                            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                            [d, c],
                                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                            [c, d],
                                            [/\(bb(10);/i],
                                            [d, [c, I]],
                                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                            [d, [c, "Symbian"]],
                                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                            [d, [c, "Firefox OS"]],
                                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                            [d, [c, "webOS"]],
                                            [/crkey\/([\d\.]+)/i],
                                            [d, [c, "Chromecast"]],
                                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                                            [
                                                [c, "Chromium OS"], d
                                            ],
                                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                            [c, d],
                                            [/(sunos) ?([\w\.\d]*)/i],
                                            [
                                                [c, "Solaris"], d
                                            ],
                                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                            [c, d]
                                        ]
                                    },
                                    G = function(e, t) {
                                        if (typeof e === s && (t = e, e = o), !(this instanceof G)) return new G(e, t).getResult();
                                        var r = e || (typeof n !== i && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                                            u = t ? function(e, t) {
                                                var n = {};
                                                for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                                                return n
                                            }(V, t) : V;
                                        return this.getBrowser = function() {
                                            var e = {};
                                            return e.name = o, e.version = o, M.call(e, r, u.browser), e.major = function(e) {
                                                return typeof e === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : o
                                            }(e.version), e
                                        }, this.getCPU = function() {
                                            var e = {};
                                            return e.architecture = o, M.call(e, r, u.cpu), e
                                        }, this.getDevice = function() {
                                            var e = {};
                                            return e.vendor = o, e.model = o, e.type = o, M.call(e, r, u.device), e
                                        }, this.getEngine = function() {
                                            var e = {};
                                            return e.name = o, e.version = o, M.call(e, r, u.engine), e
                                        }, this.getOS = function() {
                                            var e = {};
                                            return e.name = o, e.version = o, M.call(e, r, u.os), e
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
                                            return r
                                        }, this.setUA = function(e) {
                                            return r = typeof e === a && e.length > 255 ? j(e, 255) : e, this
                                        }, this.setUA(r), this
                                    };
                                G.VERSION = "0.7.28", G.BROWSER = U([c, d, "major"]), G.CPU = U([f]), G.DEVICE = U([u, p, l, h, y, v, m, g, _]), G.ENGINE = G.OS = U([c, d]), e.exports && (t = e.exports = G), t.UAParser = G;
                                var K = typeof n !== i && (n.jQuery || n.Zepto);
                                if (K && !K.ua) {
                                    var z = new G;
                                    K.ua = z.getResult(), K.ua.get = function() {
                                        return z.getUA()
                                    }, K.ua.set = function(e) {
                                        z.setUA(e);
                                        var t = z.getResult();
                                        for (var n in t) K.ua[n] = t[n]
                                    }
                                }
                            }("object" == typeof window ? window : me)
                        })),
                        Pe = (Ae.UAParser, function e(t) {
                            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                        }),
                        xe = "8.8.0",
                        Ce = {
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
                            storage: m.STORAGE_DEFAULT,
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
                            transport: m.TRANSPORT_HTTP,
                            unsetParamsReferrerOnNewSession: !1,
                            unsentKey: "amplitude_unsent",
                            unsentIdentifyKey: "amplitude_unsent_identify",
                            uploadBatchSize: 100,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Cross-Origin-Resource-Policy": "cross-origin"
                            }
                        },
                        Re = function(e) {
                            l() || D.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = U(e) ? m.DEFAULT_INSTANCE : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new Ae(navigator.userAgent).getResult(), this.options = r({}, Ce, {
                                trackingOptions: r({}, Ce.trackingOptions)
                            }), this.cookieStorage = (new pe).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInit = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._userAgent = navigator && navigator.userAgent || null
                        };
                    Re.prototype.Identify = ye, Re.prototype.Revenue = Ne, Re.prototype.init = function(e, t, n, o) {
                        var r = this;
                        if ("string" !== w(e) || U(e)) D.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                        else try {
                            Ue(this.options, n), l() && void 0 !== window.Prototype && Array.prototype.toJSON && (function() {
                                var e;
                                if (l()) {
                                    var t = window,
                                        n = Array;
                                    if (void 0 !== t.Prototype && void 0 !== (null === (e = n.prototype) || void 0 === e ? void 0 : e.toJSON)) return delete n.prototype.toJSON, !0
                                }
                            }(), D.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== Ce.cookieName && D.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === m.DEFAULT_INSTANCE ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = m.COOKIE_PREFIX + "_" + this._storageSuffixV5, this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie
                            }), this._metadataStorage = new fe({
                                storageKey: this._cookieName,
                                disableCookies: this.options.disableCookies,
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie,
                                storage: this.options.storage
                            });
                            var i = !!this.cookieStorage.get(this._oldCookiename),
                                s = !!this._metadataStorage.load();
                            this._useOldCookie = !s && i && !this.options.cookieForceUpgrade;
                            var a = s || i;
                            if (this.options.domain = this.cookieStorage.options().domain, this.options.deferInitialization && !a) return void this._deferInitialization(e, t, n, o);
                            "string" === w(this.options.logLevel) && R(this.options.logLevel);
                            var u = Ke(this);
                            this._apiPropertiesTrackingOptions = Object.keys(u).length > 0 ? {
                                tracking_options: u
                            } : {}, this.options.cookieForceUpgrade && i && (s || Le(this), this.cookieStorage.remove(this._oldCookiename)), qe(this), this._pendingReadStorage = !0;
                            this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map((function(e) {
                                    return {
                                        event: e
                                    }
                                })).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map((function(e) {
                                    return {
                                        event: e
                                    }
                                })).concat(this._unsentIdentifys)),
                                function(e) {
                                    n && n.deviceId && !F(n.deviceId) && (D.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(n.deviceId, '"')), delete n.deviceId), r.options.deviceId = r._getInitialDeviceId(n && n.deviceId, e), r.options.userId = "string" === w(t) && !U(t) && t || "number" === w(t) && t.toString() || r.options.userId || null;
                                    var o = (new Date).getTime();
                                    (!r._sessionId || !r._lastEventTime || o - r._lastEventTime > r.options.sessionTimeout) && (r.options.unsetParamsReferrerOnNewSession && r._unsetUTMParams(), r._newSession = !0, r._sessionId = o, r.options.saveParamsReferrerOncePerSession && r._trackParamsAndReferrer()), r.options.saveParamsReferrerOncePerSession || r._trackParamsAndReferrer(), r.options.saveEvents && (De(r._unsentEvents), De(r._unsentIdentifys)), r._lastEventTime = o, Me(r), r._pendingReadStorage = !1, r._sendEventsIfReady();
                                    for (var i = 0; i < r._onInit.length; i++) r._onInit[i](r);
                                    r._onInit = [], r._isInitialized = !0
                                }(), this.runQueuedFunctions(), "function" === w(o) && o(this);
                            var c = this.options.onExitPage;
                            if ("function" === w(c) && !this.pageHandlersAdded) {
                                this.pageHandlersAdded = !0;
                                window.addEventListener("pagehide", (function() {
                                    var e;
                                    e = r.options.transport, r.setTransport(m.TRANSPORT_BEACON), c(), r.setTransport(e)
                                }), !1)
                            }
                        } catch (e) {
                            D.error(e), "function" === w(n.onError) && n.onError(e)
                        }
                    }, Re.prototype.deleteLowerLevelDomainCookies = function() {
                        var e = J(),
                            t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
                        if (t && e !== t && new RegExp(t + "$").test(e)) {
                            for (var n = e.split("."), o = t.split("."), r = n.length; r > o.length; --r) {
                                var i = n.slice(n.length - r).join(".");
                                X(this._cookieName, null, {
                                    domain: "." + i
                                })
                            }
                            X(this._cookieName, null, {})
                        }
                    }, Re.prototype._getInitialDeviceId = function(e, t) {
                        if (e) return e;
                        if (this.options.deviceIdFromUrlParam) {
                            var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
                            if (n) return n
                        }
                        return this.options.deviceId ? this.options.deviceId : t || K()
                    };
                    var De = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t].event.user_properties,
                                o = e[t].event.event_properties,
                                r = e[t].event.groups;
                            e[t].event.user_properties = B(n), e[t].event.event_properties = B(o), e[t].event.groups = j(r)
                        }
                    };
                    Re.prototype._trackParamsAndReferrer = function() {
                        var e, t, n, o;
                        if (this.options.includeUtm && (e = this._initUtmData()), this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (o = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent) {
                            var i = r({}, e, t, n, o);
                            Object.keys(i).length > 0 && this.logEvent(m.ATTRIBUTION_EVENT, i)
                        }
                    };
                    var Ue = function e(t, n) {
                        if ("object" === w(n)) {
                            var o = new Set(["headers"]),
                                i = function(o) {
                                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                                        var r = n[o],
                                            i = w(t[o]);
                                        ("transport" !== o || V(r)) && M(r, o + " option", i) && ("boolean" === i ? t[o] = !!r : "string" === i && !U(r) || "number" === i && r > 0 || "function" === i ? t[o] = r : "object" === i && e(t[o], r))
                                    }
                                };
                            for (var s in n) o.has(s) ? t[s] = r({}, t[s], n[s]) : Object.prototype.hasOwnProperty.call(n, s) && i(s)
                        }
                    };
                    Re.prototype.runQueuedFunctions = function() {
                        var e = this._q;
                        this._q = [];
                        for (var t = 0; t < e.length; t++) {
                            var n = this[e[t][0]];
                            "function" === w(n) && n.apply(this, e[t].slice(1))
                        }
                    }, Re.prototype._apiKeySet = function(e) {
                        return !U(this.options.apiKey) || (D.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
                    }, Re.prototype._loadSavedUnsentEvents = function(e) {
                        var t = this._getFromStorage(le, e),
                            n = this._parseSavedUnsentEventsString(t, e);
                        return this._setInStorage(le, e, JSON.stringify(n)), n
                    }, Re.prototype._parseSavedUnsentEventsString = function(e, t) {
                        if (U(e)) return [];
                        if ("string" === w(e)) try {
                            var n = JSON.parse(e);
                            if ("array" === w(n)) return n
                        } catch (e) {}
                        return D.error("Unable to load " + t + " events. Restart with a new empty queue."), []
                    }, Re.prototype.isNewSession = function() {
                        return this._newSession
                    }, Re.prototype.onInit = function(e) {
                        this._isInitialized ? e(this) : this._onInit.push(e)
                    }, Re.prototype.getSessionId = function() {
                        return this._sessionId
                    }, Re.prototype.nextEventId = function() {
                        return this._eventId++, this._eventId
                    }, Re.prototype.nextIdentifyId = function() {
                        return this._identifyId++, this._identifyId
                    }, Re.prototype.nextSequenceNumber = function() {
                        return this._sequenceNumber++, this._sequenceNumber
                    }, Re.prototype._unsentCount = function() {
                        return this._unsentEvents.length + this._unsentIdentifys.length
                    }, Re.prototype._sendEventsIfReady = function() {
                        return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === m.TRANSPORT_BEACON ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                            this._updateScheduled = !1, this.sendEvents()
                        }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(), !0))
                    }, Re.prototype.clearStorage = function() {
                        return this._metadataStorage.clear()
                    }, Re.prototype._getFromStorage = function(e, t) {
                        return e.getItem(t + this._storageSuffix)
                    }, Re.prototype._setInStorage = function(e, t, n) {
                        e.setItem(t + this._storageSuffix, n)
                    };
                    var qe = function(e) {
                            if (e._useOldCookie) {
                                var t = e.cookieStorage.get(e._oldCookiename);
                                "object" !== w(t) || je(e, t)
                            } else {
                                var n = e._metadataStorage.load();
                                "object" === w(n) && je(e, n)
                            }
                        },
                        Le = function(e) {
                            var t = e.cookieStorage.get(e._oldCookiename);
                            "object" === w(t) && (je(e, t), Me(e))
                        },
                        je = function(e, t) {
                            t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
                        },
                        Me = function(e) {
                            var t = {
                                deviceId: e.options.deviceId,
                                userId: e.options.userId,
                                optOut: e.options.optOut,
                                sessionId: e._sessionId,
                                lastEventTime: e._lastEventTime,
                                eventId: e._eventId,
                                identifyId: e._identifyId,
                                sequenceNumber: e._sequenceNumber
                            };
                            e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
                        };
                    Re.prototype._initUtmData = function(e, t) {
                        e = e || this._getUrlParams(), t = t || this.cookieStorage.get("__utmz");
                        var n, o, r, i, s, a, u, c, l, p, d, f = (o = e, r = (n = t) ? "?" + n.split(".").slice(-1)[0].replace(/\|/g, "&") : "", i = function(e, t, n, o) {
                            return q(e, t) || q(n, o)
                        }, s = i(m.UTM_SOURCE, o, "utmcsr", r), a = i(m.UTM_MEDIUM, o, "utmcmd", r), u = i(m.UTM_CAMPAIGN, o, "utmccn", r), c = i(m.UTM_TERM, o, "utmctr", r), l = i(m.UTM_CONTENT, o, "utmcct", r), p = {}, (d = function(e, t) {
                            U(t) || (p[e] = t)
                        })(m.UTM_SOURCE, s), d(m.UTM_MEDIUM, a), d(m.UTM_CAMPAIGN, u), d(m.UTM_TERM, c), d(m.UTM_CONTENT, l), p);
                        return Be(this, f), f
                    }, Re.prototype._unsetUTMParams = function() {
                        var e = new ye;
                        e.unset(m.REFERRER), e.unset(m.UTM_SOURCE), e.unset(m.UTM_MEDIUM), e.unset(m.UTM_CAMPAIGN), e.unset(m.UTM_TERM), e.unset(m.UTM_CONTENT), this.identify(e)
                    };
                    var Be = function(e, t) {
                        if ("object" === w(t) && 0 !== Object.keys(t).length) {
                            var n = new ye;
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n.setOnce("initial_" + o, t[o]), n.set(o, t[o]));
                            e.identify(n)
                        }
                    };
                    Re.prototype._getReferrer = function() {
                        return document.referrer
                    }, Re.prototype._getUrlParams = function() {
                        return location.search
                    }, Re.prototype._saveGclid = function(e) {
                        var t = q("gclid", e);
                        if (!U(t)) {
                            var n = {
                                gclid: t
                            };
                            return Be(this, n), n
                        }
                    }, Re.prototype._saveFbclid = function(e) {
                        var t = q("fbclid", e);
                        if (!U(t)) {
                            var n = {
                                fbclid: t
                            };
                            return Be(this, n), n
                        }
                    }, Re.prototype._getDeviceIdFromUrlParam = function(e) {
                        return q(m.AMP_DEVICE_ID_PARAM, e)
                    }, Re.prototype._getReferringDomain = function(e) {
                        if (U(e)) return null;
                        var t = e.split("/");
                        return t.length >= 3 ? t[2] : null
                    }, Re.prototype._saveReferrer = function(e) {
                        if (!U(e)) {
                            var t = {
                                referrer: e,
                                referring_domain: this._getReferringDomain(e)
                            };
                            return Be(this, t), t
                        }
                    }, Re.prototype.saveEvents = function() {
                        try {
                            var e = JSON.stringify(this._unsentEvents.map((function(e) {
                                return e.event
                            })));
                            this._setInStorage(le, this.options.unsentKey, e)
                        } catch (e) {}
                        try {
                            var t = JSON.stringify(this._unsentIdentifys.map((function(e) {
                                return e.event
                            })));
                            this._setInStorage(le, this.options.unsentIdentifyKey, t)
                        } catch (e) {}
                    }, Re.prototype.setDomain = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (M(e, "domain", "string")) try {
                            this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                secure: this.options.secureCookie,
                                domain: e,
                                sameSite: this.options.sameSiteCookie
                            }), this.options.domain = this.cookieStorage.options().domain, qe(this), Me(this)
                        } catch (e) {
                            D.error(e)
                        }
                    }, Re.prototype.setUserId = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                        try {
                            this.options.userId = null != e && "" + e || null, Me(this)
                        } catch (e) {
                            D.error(e)
                        }
                    }, Re.prototype.setGroup = function(e, t) {
                        if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setGroup()") && M(e, "groupType", "string") && !U(e)) {
                            var n = {};
                            n[e] = t;
                            var o = (new ye).set(e, t);
                            this._logEvent(m.IDENTIFY_EVENT, null, null, o.userPropertiesOperations, n, null, null, null)
                        }
                    }, Re.prototype.setOptOut = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (M(e, "enable", "boolean")) try {
                            this.options.optOut = e, Me(this)
                        } catch (e) {
                            D.error(e)
                        }
                    }, Re.prototype.setSessionId = function(e) {
                        if (M(e, "sessionId", "number")) try {
                            this._sessionId = e, Me(this)
                        } catch (e) {
                            D.error(e)
                        }
                    }, Re.prototype.resetSessionId = function() {
                        this.setSessionId((new Date).getTime())
                    }, Re.prototype.regenerateDeviceId = function() {
                        if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        this.setDeviceId(K())
                    }, Re.prototype.setDeviceId = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (F(e)) try {
                            U(e) || (this.options.deviceId = "" + e, Me(this))
                        } catch (e) {
                            D.error(e)
                        }
                    }, Re.prototype.setTransport = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
                        V(e) && (this.options.transport = e)
                    }, Re.prototype.setUserProperties = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setUserProperties()") && M(e, "userProperties", "object")) {
                            var t = L(B(e));
                            if (0 !== Object.keys(t).length) {
                                var n = new ye;
                                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.set(o, t[o]);
                                this.identify(n)
                            }
                        }
                    }, Re.prototype.clearUserProperties = function() {
                        if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("clearUserProperties()")) {
                            var e = new ye;
                            e.clearAll(), this.identify(e)
                        }
                    };
                    var Fe = function(e, t) {
                        for (var n = 0; n < t._q.length; n++) {
                            var o = e[t._q[n][0]];
                            "function" === w(o) && o.apply(e, t._q[n].slice(1))
                        }
                        return e
                    };
                    Re.prototype.identify = function(e, t, n) {
                        if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("identify()"))
                            if ("object" === w(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = Fe(new ye, e)), e instanceof ye) {
                                if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(m.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, null, t, n);
                                He(t, n, 0, "No request sent", {
                                    reason: "No user property operations"
                                })
                            } else D.error("Invalid identify input type. Expected Identify object but saw " + w(e)), He(t, n, 0, "No request sent", {
                                reason: "Invalid identify input type"
                            });
                        else He(t, n, 0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, Re.prototype.groupIdentify = function(e, t, n, r, i) {
                        if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("groupIdentify()"))
                            if (M(e, "group_type", "string") && !U(e))
                                if (null != t)
                                    if ("object" === w(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = Fe(new ye, n)), n instanceof ye) {
                                        if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(m.GROUP_IDENTIFY_EVENT, null, null, null, o({}, e, t), n.userPropertiesOperations, null, r, i);
                                        He(r, i, 0, "No request sent", {
                                            reason: "No group property operations"
                                        })
                                    } else D.error("Invalid identify input type. Expected Identify object but saw " + w(n)), He(r, i, 0, "No request sent", {
                                        reason: "Invalid identify input type"
                                    });
                        else He(r, i, 0, "No request sent", {
                            reason: "Invalid group name"
                        });
                        else He(r, i, 0, "No request sent", {
                            reason: "Invalid group type"
                        });
                        else He(r, i, 0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, Re.prototype.setVersionName = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                        M(e, "versionName", "string") && (this.options.versionName = e)
                    }, Re.prototype._logEvent = function(e, t, n, o, i, s, a, u, c) {
                        if (qe(this), e)
                            if (this.options.optOut) He(u, c, 0, "No request sent", {
                                reason: "optOut is set to true"
                            });
                            else try {
                                var l;
                                l = e === m.IDENTIFY_EVENT || e === m.GROUP_IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId();
                                var p = this.nextSequenceNumber(),
                                    d = "number" === w(a) ? a : (new Date).getTime();
                                (!this._sessionId || !this._lastEventTime || d - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = d), this._lastEventTime = d, Me(this);
                                var f = this._ua.browser.name,
                                    h = this._ua.browser.major,
                                    y = this._ua.device.model || this._ua.os.name,
                                    v = this._ua.device.vendor;
                                o = o || {};
                                var g = r({}, this._apiPropertiesTrackingOptions);
                                n = r({}, n || {}, g), t = t || {}, i = i || {}, s = s || {};
                                var _ = {
                                    device_id: this.options.deviceId,
                                    user_id: this.options.userId,
                                    timestamp: d,
                                    event_id: l,
                                    session_id: this._sessionId || -1,
                                    event_type: e,
                                    version_name: this.options.versionName || null,
                                    platform: Ge(this, "platform") ? this.options.platform : null,
                                    os_name: Ge(this, "os_name") && f || null,
                                    os_version: Ge(this, "os_version") && h || null,
                                    device_model: Ge(this, "device_model") && y || null,
                                    device_manufacturer: Ge(this, "device_manufacturer") && v || null,
                                    language: Ge(this, "language") ? this.options.language : null,
                                    api_properties: n,
                                    event_properties: L(B(t)),
                                    user_properties: L(B(o)),
                                    uuid: Pe(),
                                    library: {
                                        name: "amplitude-js",
                                        version: xe
                                    },
                                    sequence_number: p,
                                    groups: L(j(i)),
                                    group_properties: L(B(s)),
                                    user_agent: this._userAgent
                                };
                                return Ve(this) && (_.plan = {
                                    branch: this.options.plan.branch || void 0,
                                    source: this.options.plan.source || void 0,
                                    version: this.options.plan.version || void 0
                                }), e === m.IDENTIFY_EVENT || e === m.GROUP_IDENTIFY_EVENT ? (this._unsentIdentifys.push({
                                    event: _,
                                    callback: u,
                                    errorCallback: c
                                }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                                    event: _,
                                    callback: u,
                                    errorCallback: c
                                }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), l
                            } catch (e) {
                                D.error(e)
                            } else He(u, c, 0, "No request sent", {
                                reason: "Missing eventType"
                            })
                    };
                    var Ve = function(e) {
                            return e.options.plan && (e.options.plan.source || e.options.plan.branch || e.options.plan.version)
                        },
                        Ge = function(e, t) {
                            return !!e.options.trackingOptions[t]
                        },
                        Ke = function(e) {
                            for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, o = 0; o < t.length; o++) {
                                var r = t[o];
                                Ge(e, r) || (n[r] = !1)
                            }
                            return n
                        };
                    Re.prototype._limitEventsQueued = function(e) {
                        e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach((function(e) {
                            He(e.callback, e.errorCallback, 0, "No request sent", {
                                reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
                            })
                        }))
                    }, Re.prototype.logEvent = function(e, t, n, o) {
                        return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n, o)
                    }, Re.prototype.logEventWithTimestamp = function(e, t, n, o, r) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? M(e, "eventType", "string") ? U(e) ? (He(o, r, 0, "No request sent", {
                            reason: "Missing eventType"
                        }), -1) : this._logEvent(e, t, null, null, null, null, n, o, r) : (He(o, r, 0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : (He(o, r, 0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    }, Re.prototype.logEventWithGroups = function(e, t, n, o, r) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? M(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, null, o, r) : (He(event.callback, event.errorCallback, 0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : (He(event.callback, event.errorCallback, 0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    };
                    var ze = function(e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        },
                        He = function(e, t, n, o, r) {
                            "function" === w(e) && e(n, o, r), "function" === w(t) && t(n, o, r)
                        };
                    Re.prototype.logRevenueV2 = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("logRevenueV2()"))
                            if ("object" === w(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = Fe(new Ne, e)), e instanceof Ne) {
                                if (e && e._isValidRevenue()) return this.logEvent(m.REVENUE_EVENT, e._toJSONObject())
                            } else D.error("Invalid revenue input type. Expected Revenue object but saw " + w(e))
                    }, Re.prototype.logRevenue = function(e, t, n) {
                        return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && ze(e) && (void 0 === t || ze(t)) ? this._logEvent(m.REVENUE_EVENT, {}, {
                            productId: n,
                            special: "revenue_amount",
                            quantity: t || 1,
                            price: e
                        }, null, null, null, null, null) : -1
                    }, Re.prototype._logErrorsOnEvents = function(e, t, n, o) {
                        for (var r = ["_unsentEvents", "_unsentIdentifys"], i = 0; i < r.length; i++)
                            for (var s = r[i], a = "_unsentEvents" === s ? e : t, u = 0; u < this[s].length; u++) {
                                var c = this[s][u];
                                c.event.event_id <= a && c.errorCallback && c.errorCallback(n, o)
                            }
                    }, Re.prototype.removeEvents = function(e, t, n, o) {
                        $e(this, "_unsentEvents", e, n, o), $e(this, "_unsentIdentifys", t, n, o)
                    };
                    var $e = function(e, t, n, o, r) {
                        if (!(n < 0)) {
                            for (var i = [], s = 0; s < e[t].length; s++) {
                                var a = e[t][s];
                                a.event.event_id > n ? i.push(a) : a.callback && a.callback(o, r)
                            }
                            e[t] = i
                        }
                    };
                    Re.prototype.sendEvents = function() {
                        if (this._apiKeySet("sendEvents()")) {
                            if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                                reason: "Opt out is set to true"
                            });
                            else if (0 !== this._unsentCount()) {
                                if (this.options.transport !== m.TRANSPORT_BEACON) {
                                    if (this._sending) return;
                                    this._sending = !0
                                }
                                var e = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                                    t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                                    n = this._mergeEventsAndIdentifys(t),
                                    o = n.maxEventId,
                                    r = n.maxIdentifyId,
                                    i = JSON.stringify(n.eventsToSend.map((function(e) {
                                        return e.event
                                    }))),
                                    s = (new Date).getTime(),
                                    a = {
                                        client: this.options.apiKey,
                                        e: i,
                                        v: m.API_VERSION,
                                        upload_time: s,
                                        checksum: ge(m.API_VERSION + this.options.apiKey + i + s)
                                    };
                                if (this.options.transport !== m.TRANSPORT_BEACON) {
                                    var u = this;
                                    new ke(e, a, this.options.headers).send((function(e, n) {
                                        u._sending = !1;
                                        try {
                                            200 === e && "success" === n ? (u.removeEvents(o, r, e, n), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(o, r, e, n), 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(o, r, e, n), u.options.uploadBatchSize = Math.ceil(t / 2), u.sendEvents()))
                                        } catch (e) {}
                                    }))
                                } else navigator.sendBeacon(e, new URLSearchParams(a)) ? (this.removeEvents(o, r, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(o, r, 0, "")
                            }
                        } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "API key not set"
                        })
                    }, Re.prototype._mergeEventsAndIdentifys = function(e) {
                        for (var t = [], n = 0, o = -1, r = 0, i = -1; t.length < e;) {
                            var s = void 0,
                                a = r >= this._unsentIdentifys.length,
                                u = n >= this._unsentEvents.length;
                            if (u && a) {
                                D.error("Merging Events and Identifys, less events and identifys than expected");
                                break
                            }
                            a ? o = (s = this._unsentEvents[n++]).event.event_id : u ? i = (s = this._unsentIdentifys[r++]).event.event_id : !("sequence_number" in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[r].event.sequence_number ? o = (s = this._unsentEvents[n++]).event.event_id : i = (s = this._unsentIdentifys[r++]).event.event_id, t.push(s)
                        }
                        return {
                            eventsToSend: t,
                            maxEventId: o,
                            maxIdentifyId: i
                        }
                    }, Re.prototype.setGlobalUserProperties = function(e) {
                        this.setUserProperties(e)
                    }, Re.prototype.__VERSION__ = xe, Re.prototype._shouldDeferCall = function() {
                        return this._pendingReadStorage || this._initializationDeferred
                    }, Re.prototype._deferInitialization = function() {
                        this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
                    }, Re.prototype.enableTracking = function() {
                        this._initializationDeferred = !1, Me(this), this.runQueuedFunctions()
                    };
                    var Xe = function() {
                        this.options = r({}, Ce), this._q = [], this._instances = {}
                    };
                    Xe.prototype.Identify = ye, Xe.prototype.Revenue = Ne, Xe.prototype.getInstance = function(e) {
                        e = U(e) ? m.DEFAULT_INSTANCE : e.toLowerCase();
                        var t = this._instances[e];
                        return void 0 === t && (t = new Re(e), this._instances[e] = t), t
                    }, Xe.prototype.runQueuedFunctions = function() {
                        for (var e = 0; e < this._q.length; e++) {
                            var t = this[this._q[e][0]];
                            "function" === w(t) && t.apply(this, this._q[e].slice(1))
                        }
                        for (var n in this._q = [], this._instances) Object.prototype.hasOwnProperty.call(this._instances, n) && this._instances[n].runQueuedFunctions()
                    }, Xe.prototype.init = function(e, t, n, o) {
                        this.getInstance().init(e, t, n, function(e) {
                            this.options = e.options, "function" === w(o) && o(e)
                        }.bind(this))
                    }, Xe.prototype.isNewSession = function() {
                        return this.getInstance().isNewSession()
                    }, Xe.prototype.getSessionId = function() {
                        return this.getInstance().getSessionId()
                    }, Xe.prototype.nextEventId = function() {
                        return this.getInstance().nextEventId()
                    }, Xe.prototype.nextIdentifyId = function() {
                        return this.getInstance().nextIdentifyId()
                    }, Xe.prototype.nextSequenceNumber = function() {
                        return this.getInstance().nextSequenceNumber()
                    }, Xe.prototype.saveEvents = function() {
                        this.getInstance().saveEvents()
                    }, Xe.prototype.setDomain = function(e) {
                        this.getInstance().setDomain(e)
                    }, Xe.prototype.setUserId = function(e) {
                        this.getInstance().setUserId(e)
                    }, Xe.prototype.setGroup = function(e, t) {
                        this.getInstance().setGroup(e, t)
                    }, Xe.prototype.setOptOut = function(e) {
                        this.getInstance().setOptOut(e)
                    }, Xe.prototype.regenerateDeviceId = function() {
                        this.getInstance().regenerateDeviceId()
                    }, Xe.prototype.setDeviceId = function(e) {
                        this.getInstance().setDeviceId(e)
                    }, Xe.prototype.setUserProperties = function(e) {
                        this.getInstance().setUserProperties(e)
                    }, Xe.prototype.clearUserProperties = function() {
                        this.getInstance().clearUserProperties()
                    }, Xe.prototype.identify = function(e, t) {
                        this.getInstance().identify(e, t)
                    }, Xe.prototype.setVersionName = function(e) {
                        this.getInstance().setVersionName(e)
                    }, Xe.prototype.logEvent = function(e, t, n) {
                        return this.getInstance().logEvent(e, t, n)
                    }, Xe.prototype.logEventWithGroups = function(e, t, n, o) {
                        return this.getInstance().logEventWithGroups(e, t, n, o)
                    }, Xe.prototype.logRevenueV2 = function(e) {
                        return this.getInstance().logRevenueV2(e)
                    }, Xe.prototype.logRevenue = function(e, t, n) {
                        return this.getInstance().logRevenue(e, t, n)
                    }, Xe.prototype.removeEvents = function(e, t) {
                        this.getInstance().removeEvents(e, t)
                    }, Xe.prototype.sendEvents = function(e) {
                        this.getInstance().sendEvents(e)
                    }, Xe.prototype.setGlobalUserProperties = function(e) {
                        this.getInstance().setUserProperties(e)
                    }, Xe.prototype.__VERSION__ = xe;
                    var Ze = window.amplitude || {},
                        Qe = new Xe;
                    for (var We in Qe._q = Ze._q || [], Ze._iq) Object.prototype.hasOwnProperty.call(Ze._iq, We) && (Qe.getInstance(We)._q = Ze._iq[We]._q || []);
                    return Qe.runQueuedFunctions(), Qe
                }()
            },
            9675: function(e, t, n) {
                var o, r = n(6178),
                    i = n(1217),
                    s = n(2618);

                function a() {
                    document.removeEventListener("click", o, !1)
                }
                e.exports = {
                    init: function(e) {
                        a(), e = i({
                            updateUrl: !0
                        }, e), o = function(t) {
                            var n = r(t.target, e.selector || "a[href*='#']", !0);
                            n && (t.preventDefault(), history.pushState && e.updateUrl && history.pushState(null, null, n.hash || "#"), s(n.hash || "html", e))
                        }, document.addEventListener("click", o, !1)
                    },
                    destroy: a
                }
            },
            1217: function(e) {
                "use strict";

                function t(e) {
                    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = Object.assign || function(e, n) {
                    for (var o, r, i = t(e), s = 1; s < arguments.length; s++) {
                        o = arguments[s], r = Object.keys(Object(o));
                        for (var a = 0; a < r.length; a++) i[r[a]] = o[r[a]]
                    }
                    return i
                }
            },
            2438: function(e, t, n) {
                "use strict";
                n.d(t, {
                    t: function() {
                        return i
                    }
                });
                var o = n(6791),
                    r = n.n(o);
                r().getInstance().init(window.pet_config.amplitude_key), window.amplitudeInstance = r().getInstance();
                var i = () => {
                    var e = new URLSearchParams(window.location.search);
                    "mail" === e.get("source") && (r().identify((new(r().Identify)).set("mail", "yes")), e.has("mail_campaign") && r().identify((new(r().Identify)).set("mail_campaign", e.get("mail_campaign"))), e.has("utm_campaign") && r().identify((new(r().Identify)).set("campaign", e.get("utm_campaign"))), e.has("utm_content") && r().identify((new(r().Identify)).set("adset", e.get("utm_content"))), e.has("ad.id") && r().identify((new(r().Identify)).set("ad", e.get("ad.id"))), e.has("campaign_name") && r().identify((new(r().Identify)).set("campaign_name", e.get("campaign_name"))), e.has("adset_name") && r().identify((new(r().Identify)).set("adset_name", e.get("adset_name"))), e.has("ad_name") && r().identify((new(r().Identify)).set("ad_name", e.get("ad_name"))))
                };
                t.Z = r().getInstance()
            },
            233: function(e, t, n) {
                anchorScroll = n(9675), anchorScroll.init({
                    updateUrl: !0,
                    offset: 0,
                    ease: "inOutCube",
                    duration: 1e3,
                    selector: ".smooth-scroll a"
                })
            },
            8108: function() {
                document.addEventListener("DOMContentLoaded", (() => {
                    for (var e = document.getElementsByClassName("payment-page__accordion-item"), t = document.getElementsByClassName("payment-page__accordion-item-heading"), n = 0; n < t.length; n += 1) t[n].addEventListener("click", o);

                    function o() {
                        for (var t = this.parentNode.className, n = 0; n < e.length; n += 1) e[n].className = "payment-page__accordion-item closed";
                        "payment-page__accordion-item closed" === t && (this.parentNode.className = "payment-page__accordion-item open")
                    }
                }))
            },
            8409: function(e, t, n) {
                "use strict";

                function o(e, t, n, o, r, i, s) {
                    try {
                        var a = e[i](s),
                            u = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(u) : Promise.resolve(u).then(o, r)
                }

                function r(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var s = e.apply(t, n);

                            function a(e) {
                                o(s, r, i, a, u, "next", e)
                            }

                            function u(e) {
                                o(s, r, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }
                }

                function i(e, t) {
                    return s.apply(this, arguments)
                }

                function s() {
                    return s = r((function*(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "USD";
                        if (e && window.enableFbTracking) {
                            var r = {},
                                i = {
                                    value: n,
                                    currency: o
                                },
                                s = ["Email", "InitiateCheckout", "AddPaymentInfo", "Purchase", "Subscribe", "Lead"];
                            s.includes(e) && (r = yield a(e, t, n, o)), fbq("track", e, i, r)
                        }
                    })), s.apply(this, arguments)
                }

                function a(e, t, n, o) {
                    return u.apply(this, arguments)
                }

                function u() {
                    return (u = r((function*(e, t, n, o) {
                        if (!t) return {};
                        var r = {},
                            i = {
                                eventName: e,
                                currency: o,
                                eventValue: n
                            },
                            s = new URLSearchParams(window.location.search);
                        s.has("utm_content") && (i.utmContent = s.get("utm_content")), i.queryParams = s.toString();
                        try {
                            var a = yield fetch("/api/v1/user/log-user-event/".concat(t), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(i)
                            }), u = yield a.json();
                            201 === a.status && (r = {
                                eventID: u.event_id
                            })
                        } catch (e) {
                            console.error("TODO".concat(e))
                        }
                        return r
                    }))).apply(this, arguments)
                }
                n.d(t, {
                    k: function() {
                        return i
                    }
                }), n(7147), void 0 === window.enableFbTracking && (window.enableFbTracking = !0)
            },
            2316: function() {
                var e = localStorage.getItem("name"),
                    t = document.querySelectorAll(".dogName");
                if (null !== e && null !== t)
                    for (var n = 0; n < t.length; n += 1) t[n].innerText = e
            },
            875: function(e, t, n) {
                "use strict";
                n.d(t, {
                    t: function() {
                        return u
                    }
                });
                var o = n(2438),
                    r = n(8409),
                    i = n(5915);

                function s(e, t, n, o, r, i, s) {
                    try {
                        var a = e[i](s),
                            u = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(u) : Promise.resolve(u).then(o, r)
                }

                function a(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(o, r) {
                            var i = e.apply(t, n);

                            function a(e) {
                                s(i, o, r, a, u, "next", e)
                            }

                            function u(e) {
                                s(i, o, r, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }
                }
                var u, c = document.querySelector(window.paymentErrorMessageBlockSelector);

                function l(e) {
                    var t;
                    switch (e) {
                        case "3.02":
                            t = "Error occurred. Insufficient funds";
                            break;
                        case "3.03":
                            t = "Error occurred. Payment amount limit exceeded";
                            break;
                        case "3.06":
                            t = "Error occurred. Debit card is not supported";
                            break;
                        case "3.07":
                            t = "Error occurred. Card brand is not supported";
                            break;
                        case "2.06":
                            t = "Error occurred. Invalid CVV2 code";
                            break;
                        case "2.08":
                            t = "Error occurred. Invalid card number";
                            break;
                        case "2.09":
                            t = "Error occurred. Invalid expiration date";
                            break;
                        case "5.01":
                            t = "Error occurred. 3D secure verification failed";
                            break;
                        case "4.03":
                        case "3.04":
                            t = "Error occurred. Please try another card or payment method";
                            break;
                        default:
                            t = "Error occurred. Please try again or try another card/payment method"
                    }
                    c.innerHTML = t
                }

                function p(e) {
                    e.unsubscribeAll(), document.querySelector("#solid-payment-form-container").innerHTML = ""
                }

                function d() {
                    return f.apply(this, arguments)
                }

                function f() {
                    return (f = a((function*() {
                        var e = window.location.search.replace("mail_id", "utm_mail_id"),
                            t = new URL(window.location.origin + window.genMerchantData + e);
                        t.searchParams.set("paymentType", window.currentPaymentPlanInfo.type);
                        var n = yield fetch(t), o = yield n.json();
                        return "ok" !== o.status ? (c.innerHTML = "Error occurred. Please try again later", null) : o.merchant_data
                    }))).apply(this, arguments)
                }

                function h() {
                    document.getElementById("paymentPopupLoader").style.setProperty("display", "flex")
                }

                function y() {
                    document.getElementById("paymentPopupLoader").style.setProperty("display", "none")
                }

                function m(e, t) {
                    if (null !== document.querySelector(".amplitude-three-offers")) document.querySelector(".payment-page__offer-elements").querySelectorAll(".payment-page__offer-item").forEach((e => {
                        var n = {
                                Subscription_Plan_Main: e.getAttribute("data-offer-value")
                            },
                            r = {
                                Subscription_Plan_Discounted: e.getAttribute("data-offer-value")
                            };
                        e.matches(".active") && "40" === paymentFormDiscount ? o.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t, n) : e.matches(".active") && "75" === paymentFormDiscount && o.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t, r)
                    }));
                    else if ("applebtn" === e) o.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t + " Apple Pay");
                    else if ("googlebtn" === e) o.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t + " Google Pay");
                    else {
                        var n = "Selling ".concat(window.paymentFormDiscount, " ") + t;
                        n += document.getElementById("apple-pay") ? " Apple Pay" : "", o.Z.logEvent(n)
                    }
                }

                function v() {
                    var e = "60";
                    (0, r.k)("Trial"), (0, r.k)("Purchase", window.pet_config.userId, e, "EUR"), (0, r.k)("Purchase1", window.pet_config.userId, e, "EUR"), (0, r.k)("Lead", window.pet_config.userId, e, "EUR"), ttq.instance("CD3A54BC77U801874BKG").track("CompletePayment")
                }

                function g() {
                    return _.apply(this, arguments)
                }

                function _() {
                    return (_ = a((function*() {
                        h(), window.solidData.merchantData = yield d(), (u = PaymentFormSdk.init(window.solidData)).on("fail", (e => {
                            m(e.data.entity, "unsuccess"), p(u), g(), l(e.data.code)
                        })), u.on("card", (() => {
                            c.innerHTML = ""
                        })), u.on("mounted", (() => {
                            y()
                        })), u.on("submit", (() => {
                            (0, r.k)("AddPaymentInfo", window.pet_config.userId)
                        })), u.on("success", (e => {
                            m(e.data.entity, "success"), v(), (0, i.j)()
                        }))
                    }))).apply(this, arguments)
                }
                t.Z = g
            },
            5915: function(e, t, n) {
                "use strict";
                n.d(t, {
                    j: function() {
                        return p
                    }
                });
                var o = n(2438);

                function r(e, t, n, o, r, i, s) {
                    try {
                        var a = e[i](s),
                            u = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(u) : Promise.resolve(u).then(o, r)
                }

                function i(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(o, i) {
                            var s = e.apply(t, n);

                            function a(e) {
                                r(s, o, i, a, u, "next", e)
                            }

                            function u(e) {
                                r(s, o, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }
                }
                var s = document.getElementById("upsales"),
                    a = document.querySelectorAll(".next"),
                    u = document.querySelectorAll(".skip"),
                    c = [];

                function l() {
                    return (l = i((function*(e) {
                        var t = yield fetch("/api/v1/subscription-payment/upsell", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                upsells: e
                            })
                        });
                        return "same_subscription" === (yield t.json()).status && o.Z.logEvent("Upsell unsuccess subscription exists"), t
                    }))).apply(this, arguments)
                }

                function p() {
                    s.classList.add("active")
                }

                function d(e) {
                    var t = e.nextElementSibling;
                    if (null === t) return c.length > 0 && function(e) {
                        l.apply(this, arguments)
                    }(c), void
                    function(e) {
                        return f.apply(this, arguments)
                    }(c).then((() => {
                        e.classList.remove("active"), s.classList.remove("active"), document.querySelector(".thank-you-popup").classList.add("thank-you-popup__active")
                    }));
                    e.classList.remove("active"), t.classList.add("active")
                }

                function f() {
                    return (f = i((function*(e) {
                        var t = yield fetch("/api/v1/user/get-lms-sso-link"), n = yield t.json();
                        document.getElementById("thankYouPopupBtn").setAttribute("href", n.link), document.querySelector(".thank-you-popup").classList.add("thank-you-popup__active"), e.map((e => document.getElementById(e).classList.add("active")))
                    }))).apply(this, arguments)
                }
                document.addEventListener("DOMContentLoaded", (() => {
                    o.Z.identify((new o.Z.Identify).set("user_from_lms", window.fromLMS)), o.Z.logEvent("upsell_cascade_view"), document.querySelector("#upsales-container > div:first-of-type").classList.add("active")
                })), u.forEach((e => {
                    e.addEventListener("click", (e => {
                        var t = e.currentTarget.getAttribute("data-parent-id");
                        d(document.getElementById(t)), o.Z.logEvent("Skip upsell")
                    }))
                })), a.forEach((e => {
                    e.addEventListener("click", (e => {
                        var t = e.currentTarget.getAttribute("data-parent-id"),
                            n = document.getElementById(t);
                        ! function(e) {
                            var t = e.getAttribute("data-upsale");
                            c.push(t)
                        }(n),
                        function(e) {
                            var t = e.getAttribute("data-upsale");
                            if (["Get_upsell_home", "Get_upsell_aggression", "Get_upsell_barking", "Get_upsell_games", "Get_upsell_separation", "Get_upsell_hyperdog"].includes(t)) throw new Error("Unknown Event");
                            o.Z.logEvent("Get_" + t)
                        }(n), d(n)
                    }))
                }))
            },
            6178: function(e, t, n) {
                var o = n(2670);
                e.exports = function(e, t, n) {
                    for (var r = n ? e : e.parentNode; r && r !== document;) {
                        if (o(r, t)) return r;
                        r = r.parentNode
                    }
                }
            },
            2670: function(e) {
                var t = Element.prototype,
                    n = t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
                e.exports = function(e, t) {
                    if (n) return n.call(e, t);
                    for (var o = e.parentNode.querySelectorAll(t), r = 0; r < o.length; ++r)
                        if (o[r] == e) return !0;
                    return !1
                }
            },
            3746: function() {
                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
                    t = t || window;
                    for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
                })
            },
            75: function(e) {
                (function() {
                    var t, n, o, r, i, s;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now()
                    } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                        return (t() - i) / 1e6
                    }, n = process.hrtime, r = (t = function() {
                        var e;
                        return 1e9 * (e = n())[0] + e[1]
                    })(), s = 1e9 * process.uptime(), i = r - s) : Date.now ? (e.exports = function() {
                        return Date.now() - o
                    }, o = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - o
                    }, o = (new Date).getTime())
                }).call(this)
            },
            4087: function(e, t, n) {
                for (var o = n(75), r = "undefined" == typeof window ? n.g : window, i = ["moz", "webkit"], s = "AnimationFrame", a = r["request" + s], u = r["cancel" + s] || r["cancelRequest" + s], c = 0; !a && c < i.length; c++) a = r[i[c] + "Request" + s], u = r[i[c] + "Cancel" + s] || r[i[c] + "CancelRequest" + s];
                if (!a || !u) {
                    var l = 0,
                        p = 0,
                        d = [];
                    a = function(e) {
                        if (0 === d.length) {
                            var t = o(),
                                n = Math.max(0, 16.666666666666668 - (t - l));
                            l = n + t, setTimeout((function() {
                                var e = d.slice(0);
                                d.length = 0;
                                for (var t = 0; t < e.length; t++)
                                    if (!e[t].cancelled) try {
                                        e[t].callback(l)
                                    } catch (e) {
                                        setTimeout((function() {
                                            throw e
                                        }), 0)
                                    }
                            }), Math.round(n))
                        }
                        return d.push({
                            handle: ++p,
                            callback: e,
                            cancelled: !1
                        }), p
                    }, u = function(e) {
                        for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
                    }
                }
                e.exports = function(e) {
                    return a.call(r, e)
                }, e.exports.cancel = function() {
                    u.apply(r, arguments)
                }, e.exports.polyfill = function(e) {
                    e || (e = r), e.requestAnimationFrame = a, e.cancelAnimationFrame = u
                }
            },
            8081: function(e, t) {
                t.linear = function(e) {
                    return e
                }, t.inQuad = function(e) {
                    return e * e
                }, t.outQuad = function(e) {
                    return e * (2 - e)
                }, t.inOutQuad = function(e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }, t.inCube = function(e) {
                    return e * e * e
                }, t.outCube = function(e) {
                    return --e * e * e + 1
                }, t.inOutCube = function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }, t.inQuart = function(e) {
                    return e * e * e * e
                }, t.outQuart = function(e) {
                    return 1 - --e * e * e * e
                }, t.inOutQuart = function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }, t.inQuint = function(e) {
                    return e * e * e * e * e
                }, t.outQuint = function(e) {
                    return --e * e * e * e * e + 1
                }, t.inOutQuint = function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }, t.inSine = function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }, t.outSine = function(e) {
                    return Math.sin(e * Math.PI / 2)
                }, t.inOutSine = function(e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }, t.inExpo = function(e) {
                    return 0 == e ? 0 : Math.pow(1024, e - 1)
                }, t.outExpo = function(e) {
                    return 1 == e ? e : 1 - Math.pow(2, -10 * e)
                }, t.inOutExpo = function(e) {
                    return 0 == e ? 0 : 1 == e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                }, t.inCirc = function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                }, t.outCirc = function(e) {
                    return Math.sqrt(1 - --e * e)
                }, t.inOutCirc = function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }, t.inBack = function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                }, t.outBack = function(e) {
                    var t = 1.70158;
                    return --e * e * ((t + 1) * e + t) + 1
                }, t.inOutBack = function(e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }, t.inBounce = function(e) {
                    return 1 - t.outBounce(1 - e)
                }, t.outBounce = function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }, t.inOutBounce = function(e) {
                    return e < .5 ? .5 * t.inBounce(2 * e) : .5 * t.outBounce(2 * e - 1) + .5
                }, t.inElastic = function(e) {
                    var t, n = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4))
                }, t.outElastic = function(e) {
                    var t, n = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
                }, t.inOutElastic = function(e) {
                    var t, n = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * .5 + 1)
                }, t["in-quad"] = t.inQuad, t["out-quad"] = t.outQuad, t["in-out-quad"] = t.inOutQuad, t["in-cube"] = t.inCube, t["out-cube"] = t.outCube, t["in-out-cube"] = t.inOutCube, t["in-quart"] = t.inQuart, t["out-quart"] = t.outQuart, t["in-out-quart"] = t.inOutQuart, t["in-quint"] = t.inQuint, t["out-quint"] = t.outQuint, t["in-out-quint"] = t.inOutQuint, t["in-sine"] = t.inSine, t["out-sine"] = t.outSine, t["in-out-sine"] = t.inOutSine, t["in-expo"] = t.inExpo, t["out-expo"] = t.outExpo, t["in-out-expo"] = t.inOutExpo, t["in-circ"] = t.inCirc, t["out-circ"] = t.outCirc, t["in-out-circ"] = t.inOutCirc, t["in-back"] = t.inBack, t["out-back"] = t.outBack, t["in-out-back"] = t.inOutBack, t["in-bounce"] = t.inBounce, t["out-bounce"] = t.outBounce, t["in-out-bounce"] = t.inOutBounce, t["in-elastic"] = t.inElastic, t["out-elastic"] = t.outElastic, t["in-out-elastic"] = t.inOutElastic
            },
            1842: function(e) {
                function t(e) {
                    if (e) return function(e) {
                        for (var n in t.prototype) e[n] = t.prototype[n];
                        return e
                    }(e)
                }
                t.prototype.on = t.prototype.addEventListener = function(e, t) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
                }, t.prototype.once = function(e, t) {
                    function n() {
                        this.off(e, n), t.apply(this, arguments)
                    }
                    return n.fn = t, this.on(e, n), this
                }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(e, t) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                    var n, o = this._callbacks["$" + e];
                    if (!o) return this;
                    if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                    for (var r = 0; r < o.length; r++)
                        if ((n = o[r]) === t || n.fn === t) {
                            o.splice(r, 1);
                            break
                        }
                    return 0 === o.length && delete this._callbacks["$" + e], this
                }, t.prototype.emit = function(e) {
                    this._callbacks = this._callbacks || {};
                    var t = [].slice.call(arguments, 1),
                        n = this._callbacks["$" + e];
                    if (n)
                        for (var o = 0, r = (n = n.slice(0)).length; o < r; ++o) n[o].apply(this, t);
                    return this
                }, t.prototype.listeners = function(e) {
                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
                }, t.prototype.hasListeners = function(e) {
                    return !!this.listeners(e).length
                }, e.exports = t
            },
            2618: function(e, t, n) {
                var o = n(5246);
                e.exports = function(e, t) {
                    if (t = t || {}, "string" == typeof e && (e = document.querySelector(e)), e) return o(0, function(e, t, n) {
                        var o, r = document.body,
                            i = document.documentElement,
                            s = e.getBoundingClientRect(),
                            a = i.clientHeight,
                            u = Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
                        t = t || 0, o = "bottom" === n ? s.bottom - a : "middle" === n ? s.bottom - a / 2 - s.height / 2 : s.top;
                        var c = u - a;
                        return Math.min(o + t + window.pageYOffset, c)
                    }(e, t.offset, t.align), t)
                }
            },
            5246: function(e, t, n) {
                var o = n(5344),
                    r = n(4087);
                e.exports = function(e, t, n) {
                    n = n || {};
                    var i = {
                            top: window.pageYOffset || document.documentElement.scrollTop,
                            left: window.pageXOffset || document.documentElement.scrollLeft
                        },
                        s = o(i).ease(n.ease || "out-circ").to({
                            top: t,
                            left: e
                        }).duration(n.duration || 1e3);

                    function a() {
                        r(a), s.update()
                    }
                    return s.update((function(e) {
                        window.scrollTo(0 | e.left, 0 | e.top)
                    })), s.on("end", (function() {
                        a = function() {}
                    })), a(), s
                }
            },
            5344: function(e, t, n) {
                var o = n(8081);

                function r(e) {
                    if (!(this instanceof r)) return new r(e);
                    this._from = e, this.ease("linear"), this.duration(500)
                }
                n(1842)(r.prototype), r.prototype.reset = function() {
                    return this.isArray = "[object Array]" === Object.prototype.toString.call(this._from), this._curr = function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    }({}, this._from), this._done = !1, this._start = Date.now(), this
                }, r.prototype.to = function(e) {
                    return this.reset(), this._to = e, this
                }, r.prototype.duration = function(e) {
                    return this._duration = e, this
                }, r.prototype.ease = function(e) {
                    if (!(e = "function" == typeof e ? e : o[e])) throw new TypeError("invalid easing function");
                    return this._ease = e, this
                }, r.prototype.stop = function() {
                    return this.stopped = !0, this._done = !0, this.emit("stop"), this.emit("end"), this
                }, r.prototype.step = function() {
                    if (!this._done) {
                        var e = this._duration,
                            t = Date.now();
                        if (t - this._start >= e) return this._from = this._to, this._update(this._to), this._done = !0, this.emit("end"), this;
                        var n = this._from,
                            o = this._to,
                            r = this._curr,
                            i = (0, this._ease)((t - this._start) / e);
                        if (this.isArray) {
                            for (var s = 0; s < n.length; ++s) r[s] = n[s] + (o[s] - n[s]) * i;
                            return this._update(r), this
                        }
                        for (var a in n) r[a] = n[a] + (o[a] - n[a]) * i;
                        return this._update(r), this
                    }
                }, r.prototype.update = function(e) {
                    return 0 == arguments.length ? this.step() : (this._update = e, this)
                }, e.exports = r
            },
            7147: function(e, t, n) {
                "use strict";
                var o = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== o && o,
                    r = "URLSearchParams" in o,
                    i = "Symbol" in o && "iterator" in Symbol,
                    s = "FileReader" in o && "Blob" in o && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    a = "FormData" in o,
                    u = "ArrayBuffer" in o;
                if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    l = ArrayBuffer.isView || function(e) {
                        return e && c.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function p(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
                    return e.toLowerCase()
                }

                function d(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function f(e) {
                    var t = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return i && (t[Symbol.iterator] = function() {
                        return t
                    }), t
                }

                function h(e) {
                    this.map = {}, e instanceof h ? e.forEach((function(e, t) {
                        this.append(t, e)
                    }), this) : Array.isArray(e) ? e.forEach((function(e) {
                        this.append(e[0], e[1])
                    }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                        this.append(t, e[t])
                    }), this)
                }

                function y(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function m(e) {
                    return new Promise((function(t, n) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            n(e.error)
                        }
                    }))
                }

                function v(e) {
                    var t = new FileReader,
                        n = m(t);
                    return t.readAsArrayBuffer(e), n
                }

                function g(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function _() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        var t;
                        this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && s && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, s && (this.blob = function() {
                        var e = y(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? y(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(v)
                    }), this.text = function() {
                        var e, t, n, o = y(this);
                        if (o) return o;
                        if (this._bodyBlob) return e = this._bodyBlob, n = m(t = new FileReader), t.readAsText(e), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a && (this.formData = function() {
                        return this.text().then(E)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                h.prototype.append = function(e, t) {
                    e = p(e), t = d(t);
                    var n = this.map[e];
                    this.map[e] = n ? n + ", " + t : t
                }, h.prototype.delete = function(e) {
                    delete this.map[p(e)]
                }, h.prototype.get = function(e) {
                    return e = p(e), this.has(e) ? this.map[e] : null
                }, h.prototype.has = function(e) {
                    return this.map.hasOwnProperty(p(e))
                }, h.prototype.set = function(e, t) {
                    this.map[p(e)] = d(t)
                }, h.prototype.forEach = function(e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, h.prototype.keys = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(n)
                    })), f(e)
                }, h.prototype.values = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    })), f(e)
                }, h.prototype.entries = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push([n, t])
                    })), f(e)
                }, i && (h.prototype[Symbol.iterator] = h.prototype.entries);
                var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function w(e, t) {
                    if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    var n, o, r = (t = t || {}).body;
                    if (e instanceof w) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (o = (n = t.method || this.method || "GET").toUpperCase(), b.indexOf(o) > -1 ? o : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(r), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
                        var i = /([?&])_=[^&]*/;
                        i.test(this.url) ? this.url = this.url.replace(i, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                    }
                }

                function E(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach((function(e) {
                        if (e) {
                            var n = e.split("="),
                                o = n.shift().replace(/\+/g, " "),
                                r = n.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(o), decodeURIComponent(r))
                        }
                    })), t
                }

                function I(e, t) {
                    if (!(this instanceof I)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e)
                }
                w.prototype.clone = function() {
                    return new w(this, {
                        body: this._bodyInit
                    })
                }, _.call(w.prototype), _.call(I.prototype), I.prototype.clone = function() {
                    return new I(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new h(this.headers),
                        url: this.url
                    })
                }, I.error = function() {
                    var e = new I(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var S = [301, 302, 303, 307, 308];
                I.redirect = function(e, t) {
                    if (-1 === S.indexOf(t)) throw new RangeError("Invalid status code");
                    return new I(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                };
                var T = o.DOMException;
                try {
                    new T
                } catch (e) {
                    (T = function(e, t) {
                        this.message = e, this.name = t;
                        var n = Error(e);
                        this.stack = n.stack
                    }).prototype = Object.create(Error.prototype), T.prototype.constructor = T
                }

                function O(e, t) {
                    return new Promise((function(n, r) {
                        var i = new w(e, t);
                        if (i.signal && i.signal.aborted) return r(new T("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function c() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, o = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                                    return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                                })).forEach((function(e) {
                                    var n = e.split(":"),
                                        o = n.shift().trim();
                                    if (o) {
                                        var r = n.join(":").trim();
                                        t.append(o, r)
                                    }
                                })), t)
                            };
                            o.url = "responseURL" in a ? a.responseURL : o.headers.get("X-Request-URL");
                            var r = "response" in a ? a.response : a.responseText;
                            setTimeout((function() {
                                n(new I(r, o))
                            }), 0)
                        }, a.onerror = function() {
                            setTimeout((function() {
                                r(new TypeError("Network request failed"))
                            }), 0)
                        }, a.ontimeout = function() {
                            setTimeout((function() {
                                r(new TypeError("Network request failed"))
                            }), 0)
                        }, a.onabort = function() {
                            setTimeout((function() {
                                r(new T("Aborted", "AbortError"))
                            }), 0)
                        }, a.open(i.method, function(e) {
                            try {
                                return "" === e && o.location.href ? o.location.href : e
                            } catch (t) {
                                return e
                            }
                        }(i.url), !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && (s ? a.responseType = "blob" : u && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (a.responseType = "arraybuffer")), !t || "object" != typeof t.headers || t.headers instanceof h ? i.headers.forEach((function(e, t) {
                            a.setRequestHeader(t, e)
                        })) : Object.getOwnPropertyNames(t.headers).forEach((function(e) {
                            a.setRequestHeader(e, d(t.headers[e]))
                        })), i.signal && (i.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                            4 === a.readyState && i.signal.removeEventListener("abort", c)
                        }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                    }))
                }
                O.polyfill = !0, o.fetch || (o.fetch = O, o.Headers = h, o.Request = w, o.Response = I)
            },
            666: function(e) {
                ! function(t) {
                    var n = {
                        src: "https://www.youtube.com/iframe_api",
                        loading: !1,
                        loaded: !1,
                        listeners: [],
                        load: function(e) {
                            var n = this;
                            if (this.listeners.push(e), this.loaded) setTimeout((function() {
                                n.done()
                            }));
                            else if (!this.loading) {
                                this.loading = !0, t.onYouTubeIframeAPIReady = function() {
                                    n.loaded = !0, n.done()
                                };
                                var o = document.createElement("script");
                                o.type = "text/javascript", o.src = this.src, document.body.appendChild(o)
                            }
                        },
                        done: function() {
                            for (delete t.onYouTubeIframeAPIReady; this.listeners.length;) this.listeners.pop()(t.YT)
                        }
                    };
                    e.exports ? e.exports = n : t.YouTubeIframeLoader = n
                }(window)
            }
        },
        o = {};

    function r(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var i = o[e] = {
            exports: {}
        };
        return n[e].call(i.exports, i, i.exports, r), i.exports
    }
    r.m = n, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, {
                a: t
            }), t
        }, r.d = function(e, t) {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.f = {}, r.e = function(e) {
            return Promise.all(Object.keys(r.f).reduce((function(t, n) {
                return r.f[n](e, t), t
            }), []))
        }, r.u = function(e) {
            return "js/" + e + ".js"
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, e = {}, t = "doggy-plan:", r.l = function(n, o, i, s) {
            if (e[n]) e[n].push(o);
            else {
                var a, u;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                        var p = c[l];
                        if (p.getAttribute("src") == n || p.getAttribute("data-webpack") == t + i) {
                            a = p;
                            break
                        }
                    }
                a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, r.nc && a.setAttribute("nonce", r.nc), a.setAttribute("data-webpack", t + i), a.src = n), e[n] = [o];
                var d = function(t, o) {
                        a.onerror = a.onload = null, clearTimeout(f);
                        var r = e[n];
                        if (delete e[n], a.parentNode && a.parentNode.removeChild(a), r && r.forEach((function(e) {
                                return e(o)
                            })), t) return t(o)
                    },
                    f = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), u && document.head.appendChild(a)
            }
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            var e;
            r.g.importScripts && (e = r.g.location + "");
            var t = r.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var n = t.getElementsByTagName("script");
                n.length && (e = n[n.length - 1].src)
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e + "../"
        }(),
        function() {
            var e = {
                456: 0,
                595: 0
            };
            r.f.j = function(t, n) {
                var o = r.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) n.push(o[2]);
                    else {
                        var i = new Promise((function(n, r) {
                            o = e[t] = [n, r]
                        }));
                        n.push(o[2] = i);
                        var s = r.p + r.u(t),
                            a = new Error;
                        r.l(s, (function(n) {
                            if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                                var i = n && ("load" === n.type ? "missing" : n.type),
                                    s = n && n.target && n.target.src;
                                a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")", a.name = "ChunkLoadError", a.type = i, a.request = s, o[1](a)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, n) {
                    var o, i, s = n[0],
                        a = n[1],
                        u = n[2],
                        c = 0;
                    if (s.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        u && u(r)
                    }
                    for (t && t(n); c < s.length; c++) i = s[c], r.o(e, i) && e[i] && e[i][0](), e[s[c]] = 0
                },
                n = self.webpackChunkdoggy_plan = self.webpackChunkdoggy_plan || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }(),
        function() {
            "use strict";
            r(3746), r(8108);
            var e = r(2438);

            function t(e) {
                var t = e.getBoundingClientRect();
                return t.top > 0 && t.top < window.innerHeight
            }
            document.addEventListener("DOMContentLoaded", (() => {
                var t = document.querySelectorAll(".hamburger-close"),
                    n = document.getElementById("overlay");
                t.forEach((e => {
                    e.addEventListener("click", (() => {
                        n.classList.toggle("open"), document.querySelector("body").classList.toggle("overflow"), o()
                    }))
                }));
                var o = () => {
                    var t = !1;
                    return () => {
                        t || (e.Z.logEvent("Burger"), t = !0)
                    }
                }
            })), r(2316), r(233);
            var n = document.querySelector(".sticky-offer");
            n.classList.add("sticky-offer__add"), document.getElementById("stickyBtn").addEventListener("click", (() => {
                e.Z.logEvent("Get My Plan 1")
            })), window.addEventListener("scroll", (() => {
                t(document.querySelector("#viewportAnchor")) ? n.classList.remove("sticky-offer__add") : n.classList.add("sticky-offer__add")
            }));
            var o = r(8409),
                i = document.getElementById("alternativePayImg"),
                s = document.createElement("img"),
                a = new MutationObserver((e => {
                    e.forEach((e => {
                        e.addedNodes.forEach((e => {
                            e.classList.contains("gpay-card-info-container-fill-new-style") && (s.src = "https://res.cloudinary.com/dr0cx27xo/image/upload/v1671112694/dog-training/logo/google.svg", i.appendChild(s), a.disconnect()), e.classList.contains("apple-pay-button") && (s.src = "https://res.cloudinary.com/dr0cx27xo/image/upload/v1671112694/dog-training/logo/apple.svg", i.appendChild(s), a.disconnect())
                        }))
                    }))
                }));
            a.observe(document.getElementById("applePayContainer"), {
                subtree: !1,
                childList: !0
            }), a.observe(document.getElementById("googlePayContainer"), {
                subtree: !1,
                childList: !0
            }), document.addEventListener("DOMContentLoaded", (() => {
                var t = document.querySelector(".payment-popup"),
                    n = document.querySelector(".payment-popup__close"),
                    r = document.querySelector(".payment-popup__content-first"),
                    i = document.querySelector(".payment-popup__content-second"),
                    s = (document.getElementById("viewportAnchor"), document.querySelectorAll(".payment-popup__checkout-select-item")),
                    a = document.querySelector(".payment-popup__method");

                function u(n, i) {
                    n.addEventListener("click", (() => {
                        e.Z.logEvent(i), (0, o.k)("InitiateCheckout", window.pet_config.userId), ttq.instance("CD3A54BC77U801874BKG").track("InitiateCheckout"), setTimeout((() => {
                                t.classList.add("payment-popup__active"), r.classList.add("payment-popup__content-first-active")
                            }), 100),
                            function() {
                                if (document.getElementById("apple-pay")) {
                                    var t = document.querySelector(".payment-popup__apple-pay");
                                    e.Z.logEvent("Show Apple Pay"), t.classList.add("active"), t.addEventListener("click", (() => {
                                        e.Z.logEvent("Apple Pay try to pay")
                                    }))
                                } else if (document.getElementsByClassName("gpay-card-info-container")) {
                                    var n = document.querySelector(".payment-popup__google-pay");
                                    e.Z.logEvent("Show Google Pay"), n.classList.add("active"), n.addEventListener("click", (() => {
                                        e.Z.logEvent("Google Pay try to pay")
                                    }))
                                }
                            }()
                    }))
                }
                2 === window.clickableText && u(document.querySelector(".secureBtn"), "Get my plan 3"), u(document.querySelector(".popupBtn"), "Get my plan 2"), s.forEach((e => {
                    e.addEventListener("click", (() => {
                        document.querySelectorAll(".payment-popup__checkout-select .select-active").forEach((e => {
                                e.classList.remove("select-active")
                            })), document.querySelectorAll(".payment-popup__method .form-active").forEach((e => {
                                e.classList.remove("form-active")
                            })),
                            function(e) {
                                e.classList.add("select-active")
                            }(e),
                            function(e) {
                                var t = e.getAttribute("data-payment-method");
                                a.querySelector("[data-payment-method=".concat(t, "]")).classList.add("form-active")
                            }(e)
                    }))
                })), n.addEventListener("click", (() => {
                    r.classList.remove("payment-popup__content-first-active"), i.classList.add("payment-popup__content-second-active"), e.Z.logEvent("Selling closed popup")
                }))
            }));
            var u = r(5915);

            function c(e, t, n, o, r, i, s) {
                try {
                    var a = e[i](s),
                        u = a.value
                } catch (e) {
                    return void n(e)
                }
                a.done ? t(u) : Promise.resolve(u).then(o, r)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, r) {
                        var i = e.apply(t, n);

                        function s(e) {
                            c(i, o, r, s, a, "next", e)
                        }

                        function a(e) {
                            c(i, o, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function p() {
                var t;
                new MutationObserver((t => {
                    t.forEach((t => {
                        t.addedNodes.forEach((t => {
                            t.id.includes("paypal-overlay-") && (e.Z.logEvent("Purchase attempt Paypal"), T())
                        }))
                    }))
                })).observe(document.getElementsByTagName("body")[0], {
                    subtree: !1,
                    childList: !0
                }), new MutationObserver((e => {
                    e.forEach((e => {
                        e.addedNodes.forEach((e => {
                            e.id.includes("zoid-paypal-") && (O(), document.querySelector("#paypal-error-message").innerHTML = "")
                        }))
                    }))
                })).observe(document.getElementById("paypal-button"), {
                    subtree: !1,
                    childList: !0
                }), null !== (t = document.getElementById("showCardBtn")) && t.addEventListener("click", (() => {
                    e.Z.logEvent("Show card")
                }))
            }

            function d() {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = l((function*() {
                    var e = window.location.search.replace("mail_id", "utm_mail_id"),
                        t = new URL(window.location.origin + window.getPaypalTokenUrl + e);
                    t.searchParams.set("paymentType", window.currentPaymentPlanInfo.type);
                    var n = yield fetch(t), o = yield n.json();
                    return 200 === n.status && o.script_url ? o.script_url : null
                }))).apply(this, arguments)
            }

            function h(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = l((function*(e) {
                    if (!e.detail.data.error || "Unknown decline code" !== e.detail.data.error.recommended_message_for_user) {
                        var t = yield v(e.detail.data.order.order_id);
                        S(), "approved" === t ? (k(), (0, u.j)(), A("success")) : (N(), yield P(), A("unsuccess"))
                    }
                }))).apply(this, arguments)
            }

            function m() {
                (0, o.k)("AddPaymentInfo", window.pet_config.userId)
            }

            function v(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = l((function*(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = 6,
                        o = "/api/v1/subscription/order/".concat(e),
                        r = yield fetch(o);
                    if (200 === r.status) {
                        var i = yield r.json(), s = i.status;
                        if (!["new", "created", "processing"].includes(s)) return s
                    }
                    return t >= n ? null : (yield _(2e3), v(e, ++t))
                })), g.apply(this, arguments)
            }

            function _(e) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = l((function*(e) {
                    return new Promise((t => setTimeout(t, e)))
                }))).apply(this, arguments)
            }

            function w(e) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.id = "paypal-button-script", t.src = e, t.async = !0, t.defer = !0, t.dataset.btnId = "paypal-button", t.onload = "hideLoader();";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n)
            }

            function E() {
                P()
            }

            function I() {
                var e = document.getElementById("paypal-button");
                e.addEventListener("order-started-processing", m), e.addEventListener("order-processed", h), e.addEventListener("button-cancel", E)
            }

            function S() {
                var e;
                (e = document.getElementById("paypal-button")).removeEventListener("order-started-processing", m), e.removeEventListener("order-processed", h), e.removeEventListener("button-cancel", E), document.getElementById("paypal-button").innerHTML = "", document.getElementById("paypal-button-script").remove()
            }

            function T() {
                document.getElementById("paypal-button").style.setProperty("opacity", "0"), document.getElementById("paypal-loader").style.setProperty("display", "flex")
            }

            function O() {
                document.getElementById("paypal-button").style.setProperty("opacity", "1"), document.getElementById("paypal-loader").style.setProperty("display", "none")
            }

            function k() {
                var e = "60";
                (0, o.k)("Trial"), (0, o.k)("Purchase", window.pet_config.userId, e, "EUR"), (0, o.k)("Purchase1", window.pet_config.userId, e, "EUR"), (0, o.k)("Lead", window.pet_config.userId, e, "EUR"), ttq.instance("CD3A54BC77U801874BKG").track("CompletePayment")
            }

            function N() {
                document.querySelector("#paypal-error-message").innerHTML = "Something went wrong. Try another payment method."
            }

            function A(t) {
                null !== document.querySelector(".amplitude-three-offers") ? document.querySelector(".payment-page__offer-elements").querySelectorAll(".payment-page__offer-item").forEach((n => {
                    var o = {
                            Subscription_Plan_Main: n.getAttribute("data-offer-value")
                        },
                        r = {
                            Subscription_Plan_Discounted: n.getAttribute("data-offer-value")
                        };
                    n.matches(".active") && "40" === paymentFormDiscount ? e.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t + " PayPal", o) : n.matches(".active") && "75" === paymentFormDiscount && e.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t + " PayPal", r)
                })) : e.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " ") + t + " PayPal")
            }

            function P() {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = l((function*() {
                    yield C()
                }))).apply(this, arguments)
            }

            function C() {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = l((function*() {
                    var e;
                    T();
                    try {
                        e = yield d()
                    } catch (e) {
                        return void O()
                    }
                    e ? (w(e), I()) : O()
                }))).apply(this, arguments)
            }

            function D() {
                return (D = l((function*() {
                    yield C(), p()
                }))).apply(this, arguments)
            }
            var U = r(875);

            function q(e, t, n) {
                var o, r, i, s, a;
                o = document.getElementById(e), r = +new Date + 1e3 * (60 * t + n) + 500,
                    function e() {
                        var t, n = document.getElementById("countdown"),
                            u = document.querySelectorAll(".sticky-offer__timer-text"),
                            c = document.querySelector(".payment-popup");
                        (s = r - +new Date) < 1e3 ? (o.innerHTML = "00:00", n.classList.add("sticky-offer__last-chance"), u[0].style.setProperty("display", "none"), u[1].innerText = "Last Chance", !c.classList.contains("payment-popup__active") && window.location.href.indexOf("landing-7") > -1 && function() {
                            if (window.currentPaymentPlanInfo = {
                                    type: "full_trial_high_monthly",
                                    full_price: "2.99",
                                    total_price: "2.99"
                                }, document.querySelectorAll(".paymentInfo").forEach((e => {
                                    e.setAttribute("data-payment-info", '{"type": "full_trial_high_monthly", "full_price": "2.99", "total_price": "2.99"}'), e.innerText = e.innerText[0] + window.currentPaymentPlanInfo.total_price
                                })), P(), void 0 !== U.t) {
                                U.t.destroy();
                                var e = document.getElementById("popup-total-price");
                                e.innerText = e.innerText[0] + window.currentPaymentPlanInfo.total_price
                            }(0, U.Z)()
                        }()) : (a = new Date(s), (i = a.getUTCMinutes()) < 10 && (i = "0".concat(a.getUTCMinutes())), o.innerHTML = "".concat(i, ":").concat((t = a.getUTCSeconds()) <= 9 ? "0".concat(t) : t), setTimeout(e, a.getUTCMilliseconds() + 500))
                    }()
            }
            var L = Math.floor(document.getElementById("user_countdown").value / 1e3) - Math.floor((new Date).getTime() / 1e3);
            L > 0 ? q("countdown", Math.floor(L / 60), L % 60) : q("countdown", 0, 0);
            var j = {
                saveQuizResponses(e) {
                    localStorage.setItem("quizResponses", JSON.stringify(e))
                },
                getQuizResponses() {
                    var e = localStorage.getItem("quizResponses");
                    return JSON.parse(e)
                }
            };

            function M(e, t, n, o, r, i, s) {
                try {
                    var a = e[i](s),
                        u = a.value
                } catch (e) {
                    return void n(e)
                }
                a.done ? t(u) : Promise.resolve(u).then(o, r)
            }
            var B = j.getQuizResponses();
            document.addEventListener("DOMContentLoaded", (() => {
                var n, o, i, s, a, u, c = document.querySelectorAll(".paymentInfo");
                e.Z.setUserId(window.userId), u = document.getElementById("obedienceLevel"), null === localStorage.getItem("quizResponses") || "ok" === localStorage.getItem("PuppyDog") ? u.innerHTML = '<img class="total__problems-active-item" src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1644227996/dog-training/img/obedience/4.svg">' : u.innerHTML = '<img class="total__problems-active-item" src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1644227996/dog-training/img/obedience/'.concat((i = B.obedience, s = 0, a = 0, i.forEach((e => {
                        s += parseInt(e, 10), a++
                    })), Math.round(s / a)), '.svg">'),
                    function() {
                        var e, t, n = document.getElementById("problemsLevel"),
                            o = document.getElementById("problemsActivated"),
                            r = document.getElementById("problemsDisables"),
                            i = [],
                            s = [],
                            a = ["Pulling", "Separation", "Barking", "Jumping", "Destruction", "Chasing", "Toilet", "Whining", "Biting"],
                            u = ["Toilet", "Whining", "Biting"],
                            c = ["Pulling", "Separation", "Barking", "Jumping", "Destruction", "Chasing"];
                        if (null === localStorage.getItem("quizResponses")) {
                            e = "3";
                            for (var l = 0; l < u.length; l += 1) i.push('<img class="total__problems-active-item" src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1644245447/dog-training/img/problems/active/'.concat(a[l], '.svg">'));
                            for (var p = 0; p < c.length; p += 1) s.push('<img class="total__problems-active-item" src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1644245580/dog-training/img/problems/inactive/'.concat(a[p], '.svg">'));
                            o.innerHTML = i.join(""), t = s.join("")
                        } else ! function() {
                            e = B.problems.length;
                            for (var n = B.problems, r = function(e) {
                                    a = a.filter((t => t !== n[e])), i.push('<img class="total__problems-active-item" src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1644245447/dog-training/img/problems/active/'.concat(B.problems[e], '.svg">'))
                                }, u = 0; u < B.problems.length; u += 1) r(u);
                            for (var c = 0; c < a.length; c += 1) s.push('<img class="total__problems-active-item" src="https://res.cloudinary.com/dr0cx27xo/image/upload/v1644245580/dog-training/img/problems/inactive/'.concat(a[c], '.svg">'));
                            o.innerHTML = i.join(""), t = s.join("")
                        }();
                        null !== n && (n.innerText = e), null !== r && (r.innerHTML = t)
                    }(), n = document.querySelector("#popup-full-price"), o = document.querySelector("#popup-total-price"), c.forEach((e => {
                        window.currentPaymentPlanInfo = JSON.parse(e.getAttribute("data-payment-info"))
                    })), null !== n && (n.innerText = window.currencySign + window.currentPaymentPlanInfo.full_price), o.innerText = window.currencySign + window.currentPaymentPlanInfo.total_price,
                    function() {
                        D.apply(this, arguments)
                    }(), (0, U.Z)(),
                    function() {
                        var e = document.querySelectorAll(".upsale__item");

                        function t(t) {
                            e.forEach((e => {
                                e === t.currentTarget ? e.classList.add("active") : e.classList.remove("active")
                            }))
                        }
                        e.forEach((e => {
                            e.addEventListener("change", t)
                        }))
                    }(),
                    function() {
                        if (null !== localStorage.getItem("OfferText")) {
                            var e = document.querySelector(".payment-page__offer-text ");
                            e.classList.remove("smaller"), e.style.setProperty("color", "#343434")
                        }
                    }(), "ok" === localStorage.getItem("PuppyDog") && document.querySelectorAll(".adultPuppy").forEach((e => {
                        e.innerHTML = "puppy"
                    })), (0, e.t)(), e.Z.logEvent("Selling ".concat(window.paymentFormDiscount, " view")), window.addEventListener("scroll", (() => {
                        t(document.querySelector("#viewportAnchor")) && d()
                    }));
                var l, p, d = (l = !1, () => {
                    l || (e.Z.logEvent("Offer View"), l = !0)
                });
                if (2 === window.zdWidget && (p = function*() {
                        var e = yield r.e(117).then(r.bind(r, 8117));
                        document.querySelector(".popupBtn").addEventListener("click", (() => e.hideBadge()))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, o) {
                            var r = p.apply(e, t);

                            function i(e) {
                                M(r, n, o, i, s, "next", e)
                            }

                            function s(e) {
                                M(r, n, o, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    })(), 2 === window.introVideo || 3 === window.introVideo) {
                    r(666).load((e => {
                        new e.Player("iframe-video", {
                            videoId: "o1Xj_VfyNHY",
                            playerVars: {
                                rel: "0"
                            },
                            events: {
                                onStateChange: f
                            }
                        })
                    }));
                    var f = (() => {
                        var t = !1;
                        return () => {
                            t || (e.Z.logEvent("Video_play"), t = !0)
                        }
                    })()
                }
            }))
        }()
}();