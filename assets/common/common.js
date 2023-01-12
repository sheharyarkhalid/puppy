! function() {
    "use strict";
    var t = {
            659: function(t, e, n) {
                n.d(e, {
                    Gd: function() {
                        return h
                    },
                    cu: function() {
                        return p
                    }
                });
                var r = n(844),
                    i = n(170),
                    s = n(343),
                    o = n(235),
                    a = n(176),
                    c = n(350),
                    u = n(15);
                const _ = 100;
                class d {
                    __init() {
                        this._stack = [{}]
                    }
                    constructor(t, e = new c.s, n = 4) {
                        this._version = n, d.prototype.__init.call(this), this.getStackTop().scope = e, t && this.bindClient(t)
                    }
                    isOlderThan(t) {
                        return this._version < t
                    }
                    bindClient(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }
                    pushScope() {
                        const t = c.s.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }
                    popScope() {
                        return !(this.getStack().length <= 1 || !this.getStack().pop())
                    }
                    withScope(t) {
                        const e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }
                    getClient() {
                        return this.getStackTop().client
                    }
                    getScope() {
                        return this.getStackTop().scope
                    }
                    getStack() {
                        return this._stack
                    }
                    getStackTop() {
                        return this._stack[this._stack.length - 1]
                    }
                    captureException(t, e) {
                        const n = this._lastEventId = e && e.event_id ? e.event_id : (0, r.DM)(),
                            i = new Error("Sentry syntheticException");
                        return this._withClient(((r, s) => {
                            r.captureException(t, {
                                originalException: t,
                                syntheticException: i,
                                ...e,
                                event_id: n
                            }, s)
                        })), n
                    }
                    captureMessage(t, e, n) {
                        const i = this._lastEventId = n && n.event_id ? n.event_id : (0, r.DM)(),
                            s = new Error(t);
                        return this._withClient(((r, o) => {
                            r.captureMessage(t, e, {
                                originalException: t,
                                syntheticException: s,
                                ...n,
                                event_id: i
                            }, o)
                        })), i
                    }
                    captureEvent(t, e) {
                        const n = e && e.event_id ? e.event_id : (0, r.DM)();
                        return t.type || (this._lastEventId = n), this._withClient(((r, i) => {
                            r.captureEvent(t, { ...e,
                                event_id: n
                            }, i)
                        })), n
                    }
                    lastEventId() {
                        return this._lastEventId
                    }
                    addBreadcrumb(t, e) {
                        const {
                            scope: n,
                            client: r
                        } = this.getStackTop();
                        if (!n || !r) return;
                        const {
                            beforeBreadcrumb: o = null,
                            maxBreadcrumbs: a = _
                        } = r.getOptions && r.getOptions() || {};
                        if (a <= 0) return;
                        const c = {
                                timestamp: (0, i.yW)(),
                                ...t
                            },
                            u = o ? (0, s.Cf)((() => o(c, e))) : c;
                        null !== u && n.addBreadcrumb(u, a)
                    }
                    setUser(t) {
                        const e = this.getScope();
                        e && e.setUser(t)
                    }
                    setTags(t) {
                        const e = this.getScope();
                        e && e.setTags(t)
                    }
                    setExtras(t) {
                        const e = this.getScope();
                        e && e.setExtras(t)
                    }
                    setTag(t, e) {
                        const n = this.getScope();
                        n && n.setTag(t, e)
                    }
                    setExtra(t, e) {
                        const n = this.getScope();
                        n && n.setExtra(t, e)
                    }
                    setContext(t, e) {
                        const n = this.getScope();
                        n && n.setContext(t, e)
                    }
                    configureScope(t) {
                        const {
                            scope: e,
                            client: n
                        } = this.getStackTop();
                        e && n && t(e)
                    }
                    run(t) {
                        const e = l(this);
                        try {
                            t(this)
                        } finally {
                            l(e)
                        }
                    }
                    getIntegration(t) {
                        const e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (e) {
                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
                        }
                    }
                    startTransaction(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }
                    traceHeaders() {
                        return this._callExtensionMethod("traceHeaders")
                    }
                    captureSession(t = !1) {
                        if (t) return this.endSession();
                        this._sendSessionUpdate()
                    }
                    endSession() {
                        const t = this.getStackTop(),
                            e = t && t.scope,
                            n = e && e.getSession();
                        n && (0, u.RJ)(n), this._sendSessionUpdate(), e && e.setSession()
                    }
                    startSession(t) {
                        const {
                            scope: e,
                            client: n
                        } = this.getStackTop(), {
                            release: r,
                            environment: i
                        } = n && n.getOptions() || {}, {
                            userAgent: s
                        } = o.n2.navigator || {}, a = (0, u.Hv)({
                            release: r,
                            environment: i,
                            ...e && {
                                user: e.getUser()
                            },
                            ...s && {
                                userAgent: s
                            },
                            ...t
                        });
                        if (e) {
                            const t = e.getSession && e.getSession();
                            t && "ok" === t.status && (0, u.CT)(t, {
                                status: "exited"
                            }), this.endSession(), e.setSession(a)
                        }
                        return a
                    }
                    shouldSendDefaultPii() {
                        const t = this.getClient(),
                            e = t && t.getOptions();
                        return Boolean(e && e.sendDefaultPii)
                    }
                    _sendSessionUpdate() {
                        const {
                            scope: t,
                            client: e
                        } = this.getStackTop();
                        if (!t) return;
                        const n = t.getSession();
                        n && e && e.captureSession && e.captureSession(n)
                    }
                    _withClient(t) {
                        const {
                            scope: e,
                            client: n
                        } = this.getStackTop();
                        n && t(n, e)
                    }
                    _callExtensionMethod(t, ...e) {
                        const n = p().__SENTRY__;
                        if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Extension method ${t} couldn't be found, doing nothing.`)
                    }
                }

                function p() {
                    return o.n2.__SENTRY__ = o.n2.__SENTRY__ || {
                        extensions: {},
                        hub: void 0
                    }, o.n2
                }

                function l(t) {
                    const e = p(),
                        n = g(e);
                    return m(e, t), n
                }

                function h() {
                    const t = p();
                    return f(t) && !g(t).isOlderThan(4) || m(t, new d), (0, a.KV)() ? function(t) {
                        try {
                            const e = p().__SENTRY__,
                                n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                            if (!n) return g(t);
                            if (!f(n) || g(n).isOlderThan(4)) {
                                const e = g(t).getStackTop();
                                m(n, new d(e.client, c.s.clone(e.scope)))
                            }
                            return g(n)
                        } catch (e) {
                            return g(t)
                        }
                    }(t) : g(t)
                }

                function f(t) {
                    return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
                }

                function g(t) {
                    return (0, o.YO)("hub", (() => new d), t)
                }

                function m(t, e) {
                    return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
                }
            },
            350: function(t, e, n) {
                n.d(e, {
                    s: function() {
                        return _
                    },
                    c: function() {
                        return p
                    }
                });
                var r = n(597),
                    i = n(170),
                    s = n(893),
                    o = n(343),
                    a = n(844),
                    c = n(235),
                    u = n(15);
                class _ {
                    constructor() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                    }
                    static clone(t) {
                        const e = new _;
                        return t && (e._breadcrumbs = [...t._breadcrumbs], e._tags = { ...t._tags
                        }, e._extra = { ...t._extra
                        }, e._contexts = { ...t._contexts
                        }, e._user = t._user, e._level = t._level, e._span = t._span, e._session = t._session, e._transactionName = t._transactionName, e._fingerprint = t._fingerprint, e._eventProcessors = [...t._eventProcessors], e._requestSession = t._requestSession, e._attachments = [...t._attachments], e._sdkProcessingMetadata = { ...t._sdkProcessingMetadata
                        }), e
                    }
                    addScopeListener(t) {
                        this._scopeListeners.push(t)
                    }
                    addEventProcessor(t) {
                        return this._eventProcessors.push(t), this
                    }
                    setUser(t) {
                        return this._user = t || {}, this._session && (0, u.CT)(this._session, {
                            user: t
                        }), this._notifyScopeListeners(), this
                    }
                    getUser() {
                        return this._user
                    }
                    getRequestSession() {
                        return this._requestSession
                    }
                    setRequestSession(t) {
                        return this._requestSession = t, this
                    }
                    setTags(t) {
                        return this._tags = { ...this._tags,
                            ...t
                        }, this._notifyScopeListeners(), this
                    }
                    setTag(t, e) {
                        return this._tags = { ...this._tags,
                            [t]: e
                        }, this._notifyScopeListeners(), this
                    }
                    setExtras(t) {
                        return this._extra = { ...this._extra,
                            ...t
                        }, this._notifyScopeListeners(), this
                    }
                    setExtra(t, e) {
                        return this._extra = { ...this._extra,
                            [t]: e
                        }, this._notifyScopeListeners(), this
                    }
                    setFingerprint(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }
                    setLevel(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }
                    setTransactionName(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }
                    setContext(t, e) {
                        return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
                    }
                    setSpan(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }
                    getSpan() {
                        return this._span
                    }
                    getTransaction() {
                        const t = this.getSpan();
                        return t && t.transaction
                    }
                    setSession(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }
                    getSession() {
                        return this._session
                    }
                    update(t) {
                        if (!t) return this;
                        if ("function" == typeof t) {
                            const e = t(this);
                            return e instanceof _ ? e : this
                        }
                        return t instanceof _ ? (this._tags = { ...this._tags,
                            ...t._tags
                        }, this._extra = { ...this._extra,
                            ...t._extra
                        }, this._contexts = { ...this._contexts,
                            ...t._contexts
                        }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : (0, r.PO)(t) && (t = t, this._tags = { ...this._tags,
                            ...t.tags
                        }, this._extra = { ...this._extra,
                            ...t.extra
                        }, this._contexts = { ...this._contexts,
                            ...t.contexts
                        }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
                    }
                    clear() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
                    }
                    addBreadcrumb(t, e) {
                        const n = "number" == typeof e ? e : 100;
                        if (n <= 0) return this;
                        const r = {
                            timestamp: (0, i.yW)(),
                            ...t
                        };
                        return this._breadcrumbs = [...this._breadcrumbs, r].slice(-n), this._notifyScopeListeners(), this
                    }
                    getLastBreadcrumb() {
                        return this._breadcrumbs[this._breadcrumbs.length - 1]
                    }
                    clearBreadcrumbs() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }
                    addAttachment(t) {
                        return this._attachments.push(t), this
                    }
                    getAttachments() {
                        return this._attachments
                    }
                    clearAttachments() {
                        return this._attachments = [], this
                    }
                    applyToEvent(t, e = {}) {
                        if (this._extra && Object.keys(this._extra).length && (t.extra = { ...this._extra,
                                ...t.extra
                            }), this._tags && Object.keys(this._tags).length && (t.tags = { ...this._tags,
                                ...t.tags
                            }), this._user && Object.keys(this._user).length && (t.user = { ...this._user,
                                ...t.user
                            }), this._contexts && Object.keys(this._contexts).length && (t.contexts = { ...this._contexts,
                                ...t.contexts
                            }), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = {
                                trace: this._span.getTraceContext(),
                                ...t.contexts
                            };
                            const e = this._span.transaction && this._span.transaction.name;
                            e && (t.tags = {
                                transaction: e,
                                ...t.tags
                            })
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata,
                            ...this._sdkProcessingMetadata
                        }, this._notifyEventProcessors([...d(), ...this._eventProcessors], t, e)
                    }
                    setSDKProcessingMetadata(t) {
                        return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata,
                            ...t
                        }, this
                    }
                    _notifyEventProcessors(t, e, n, i = 0) {
                        return new s.cW(((s, a) => {
                            const c = t[i];
                            if (null === e || "function" != typeof c) s(e);
                            else {
                                const u = c({ ...e
                                }, n);
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === u && o.kg.log(`Event processor "${c.id}" dropped event`), (0, r.J8)(u) ? u.then((e => this._notifyEventProcessors(t, e, n, i + 1).then(s))).then(null, a) : this._notifyEventProcessors(t, u, n, i + 1).then(s).then(null, a)
                            }
                        }))
                    }
                    _notifyScopeListeners() {
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t => {
                            t(this)
                        })), this._notifyingListeners = !1)
                    }
                    _applyFingerprint(t) {
                        t.fingerprint = t.fingerprint ? (0, a.lE)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }
                }

                function d() {
                    return (0, c.YO)("globalEventProcessors", (() => []))
                }

                function p(t) {
                    d().push(t)
                }
            },
            15: function(t, e, n) {
                n.d(e, {
                    RJ: function() {
                        return c
                    },
                    Hv: function() {
                        return o
                    },
                    CT: function() {
                        return a
                    }
                });
                var r = n(170),
                    i = n(844),
                    s = n(535);

                function o(t) {
                    const e = (0, r.ph)(),
                        n = {
                            sid: (0, i.DM)(),
                            init: !0,
                            timestamp: e,
                            started: e,
                            duration: 0,
                            status: "ok",
                            errors: 0,
                            ignoreDuration: !1,
                            toJSON: () => function(t) {
                                return (0, s.Jr)({
                                    sid: `${t.sid}`,
                                    init: t.init,
                                    started: new Date(1e3 * t.started).toISOString(),
                                    timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                    status: t.status,
                                    errors: t.errors,
                                    did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                                    duration: t.duration,
                                    attrs: {
                                        release: t.release,
                                        environment: t.environment,
                                        ip_address: t.ipAddress,
                                        user_agent: t.userAgent
                                    }
                                })
                            }(n)
                        };
                    return t && a(n, t), n
                }

                function a(t, e = {}) {
                    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.ph)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                    else if ("number" == typeof e.duration) t.duration = e.duration;
                    else {
                        const e = t.timestamp - t.started;
                        t.duration = e >= 0 ? e : 0
                    }
                    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
                }

                function c(t, e) {
                    let n = {};
                    e ? n = {
                        status: e
                    } : "ok" === t.status && (n = {
                        status: "exited"
                    }), a(t, n)
                }
            },
            790: function(t, e, n) {
                n.d(e, {
                    ro: function() {
                        return g
                    },
                    lb: function() {
                        return f
                    }
                });
                var r = n(659),
                    i = n(343),
                    s = n(597),
                    o = n(176),
                    a = n(732),
                    c = n(233);

                function u() {
                    const t = (0, c.x1)();
                    if (t) {
                        const e = "internal_error";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
                    }
                }
                var _ = n(458),
                    d = n(391);

                function p() {
                    const t = this.getScope();
                    if (t) {
                        const e = t.getSpan();
                        if (e) return {
                            "sentry-trace": e.toTraceparent()
                        }
                    }
                    return {}
                }

                function l(t, e, n) {
                    if (!(0, c.zu)(e)) return t.sampled = !1, t;
                    if (void 0 !== t.sampled) return t.setMetadata({
                        sampleRate: Number(t.sampled)
                    }), t;
                    let r;
                    return "function" == typeof e.tracesSampler ? (r = e.tracesSampler(n), t.setMetadata({
                        sampleRate: Number(r)
                    })) : void 0 !== n.parentSampled ? r = n.parentSampled : (r = e.tracesSampleRate, t.setMetadata({
                        sampleRate: Number(r)
                    })), o = r, ((0, s.i2)(o) || "number" != typeof o && "boolean" != typeof o ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 0) : !(o < 0 || o > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${o}.`), 0)) ? r ? (t.sampled = Math.random() < r, t.sampled ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), t)) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t);
                    var o
                }

                function h(t, e) {
                    const n = this.getClient(),
                        r = n && n.getOptions() || {},
                        s = r.instrumenter || "sentry",
                        o = t.instrumenter || "sentry";
                    s !== o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${s}\` instrumenter.\nThe transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`), t.sampled = !1);
                    let a = new d.Y(t, this);
                    return a = l(a, r, {
                        parentSampled: t.parentSampled,
                        transactionContext: t,
                        ...e
                    }), a.sampled && a.initSpanRecorder(r._experiments && r._experiments.maxSpans), a
                }

                function f(t, e, n, r, i, s, o) {
                    const a = t.getClient(),
                        c = a && a.getOptions() || {};
                    let u = new _.io(e, t, n, r, o, i);
                    return u = l(u, c, {
                        parentSampled: e.parentSampled,
                        transactionContext: e,
                        ...s
                    }), u.sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans), u
                }

                function g() {
                    ! function() {
                        const t = (0, r.cu)();
                        t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = h), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = p))
                    }(), (0, o.KV)() && function() {
                        const e = (0, r.cu)();
                        if (!e.__SENTRY__) return;
                        const n = {
                                mongodb: () => new((0, o.l$)(t, "./integrations/node/mongo").Mongo),
                                mongoose: () => new((0, o.l$)(t, "./integrations/node/mongo").Mongo)({
                                    mongoose: !0
                                }),
                                mysql: () => new((0, o.l$)(t, "./integrations/node/mysql").Mysql),
                                pg: () => new((0, o.l$)(t, "./integrations/node/postgres").Postgres)
                            },
                            i = Object.keys(n).filter((t => !!(0, o.$y)(t))).map((t => {
                                try {
                                    return n[t]()
                                } catch (t) {
                                    return
                                }
                            })).filter((t => t));
                        i.length > 0 && (e.__SENTRY__.integrations = [...e.__SENTRY__.integrations || [], ...i])
                    }(), (0, a.o)("error", u), (0, a.o)("unhandledrejection", u)
                }
                t = n.hmd(t)
            },
            458: function(t, e, n) {
                n.d(e, {
                    mg: function() {
                        return c
                    },
                    hd: function() {
                        return u
                    },
                    nT: function() {
                        return a
                    },
                    io: function() {
                        return d
                    }
                });
                var r = n(170),
                    i = n(343),
                    s = n(334),
                    o = n(391);
                const a = 1e3,
                    c = 3e4,
                    u = 5e3;
                class _ extends s.gB {
                    constructor(t, e, n, r) {
                        super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
                    }
                    add(t) {
                        t.spanId !== this.transactionSpanId && (t.finish = e => {
                            t.endTimestamp = "number" == typeof e ? e : (0, r._I)(), this._popActivity(t.spanId)
                        }, void 0 === t.endTimestamp && this._pushActivity(t.spanId)), super.add(t)
                    }
                }
                class d extends o.Y {
                    __init() {
                        this.activities = {}
                    }
                    __init2() {
                        this._heartbeatCounter = 0
                    }
                    __init3() {
                        this._finished = !1
                    }
                    __init4() {
                        this._beforeFinishCallbacks = []
                    }
                    constructor(t, e, n = a, r = c, s = u, o = !1) {
                        super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = r, this._heartbeatInterval = s, this._onScope = o, d.prototype.__init.call(this), d.prototype.__init2.call(this), d.prototype.__init3.call(this), d.prototype.__init4.call(this), o && (p(e), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), e.configureScope((t => t.setSpan(this)))), this._startIdleTimeout(), setTimeout((() => {
                            this._finished || (this.setStatus("deadline_exceeded"), this.finish())
                        }), this._finalTimeout)
                    }
                    finish(t = (0, r._I)()) {
                        if (this._finished = !0, this.activities = {}, this.spanRecorder) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
                            for (const e of this._beforeFinishCallbacks) e(this, t);
                            this.spanRecorder.spans = this.spanRecorder.spans.filter((e => {
                                if (e.spanId === this.spanId) return !0;
                                e.endTimestamp || (e.endTimestamp = t, e.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                                const n = e.startTimestamp < t;
                                return n || ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)), n
                            })), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] flushing IdleTransaction")
                        } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] No active IdleTransaction");
                        return this._onScope && p(this._idleHub), super.finish(t)
                    }
                    registerBeforeFinishCallback(t) {
                        this._beforeFinishCallbacks.push(t)
                    }
                    initSpanRecorder(t) {
                        if (!this.spanRecorder) {
                            const e = t => {
                                    this._finished || this._pushActivity(t)
                                },
                                n = t => {
                                    this._finished || this._popActivity(t)
                                };
                            this.spanRecorder = new _(e, n, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("Starting heartbeat"), this._pingHeartbeat()
                        }
                        this.spanRecorder.add(this)
                    }
                    _cancelIdleTimeout() {
                        this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0)
                    }
                    _startIdleTimeout(t) {
                        this._cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
                            this._finished || 0 !== Object.keys(this.activities).length || this.finish(t)
                        }), this._idleTimeout)
                    }
                    _pushActivity(t) {
                        this._cancelIdleTimeout(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
                    }
                    _popActivity(t) {
                        if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] popActivity ${t}`), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                            const t = (0, r._I)() + this._idleTimeout / 1e3;
                            this._startIdleTimeout(t)
                        }
                    }
                    _beat() {
                        if (this._finished) return;
                        const t = Object.keys(this.activities).join("");
                        t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this.finish()) : this._pingHeartbeat()
                    }
                    _pingHeartbeat() {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout((() => {
                            this._beat()
                        }), this._heartbeatInterval)
                    }
                }

                function p(t) {
                    const e = t.getScope();
                    e && e.getTransaction() && e.setSpan(void 0)
                }
            },
            334: function(t, e, n) {
                n.d(e, {
                    Dr: function() {
                        return u
                    },
                    gB: function() {
                        return c
                    }
                });
                var r = n(375),
                    i = n(844),
                    s = n(170),
                    o = n(343),
                    a = n(535);
                class c {
                    __init() {
                        this.spans = []
                    }
                    constructor(t = 1e3) {
                        c.prototype.__init.call(this), this._maxlen = t
                    }
                    add(t) {
                        this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
                    }
                }
                class u {
                    __init2() {
                        this.traceId = (0, i.DM)()
                    }
                    __init3() {
                        this.spanId = (0, i.DM)().substring(16)
                    }
                    __init4() {
                        this.startTimestamp = (0, s._I)()
                    }
                    __init5() {
                        this.tags = {}
                    }
                    __init6() {
                        this.data = {}
                    }
                    __init7() {
                        this.instrumenter = "sentry"
                    }
                    constructor(t) {
                        if (u.prototype.__init2.call(this), u.prototype.__init3.call(this), u.prototype.__init4.call(this), u.prototype.__init5.call(this), u.prototype.__init6.call(this), u.prototype.__init7.call(this), !t) return this;
                        t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp), t.instrumenter && (this.instrumenter = t.instrumenter)
                    }
                    startChild(t) {
                        const e = new u({ ...t,
                            parentSpanId: this.spanId,
                            sampled: this.sampled,
                            traceId: this.traceId
                        });
                        if (e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e), e.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                            const n = `[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`;
                            e.transaction.metadata.spanMetadata[e.spanId] = {
                                logMessage: n
                            }, o.kg.log(n)
                        }
                        return e
                    }
                    setTag(t, e) {
                        return this.tags = { ...this.tags,
                            [t]: e
                        }, this
                    }
                    setData(t, e) {
                        return this.data = { ...this.data,
                            [t]: e
                        }, this
                    }
                    setStatus(t) {
                        return this.status = t, this
                    }
                    setHttpStatus(t) {
                        this.setTag("http.status_code", String(t));
                        const e = function(t) {
                            if (t < 400 && t >= 100) return "ok";
                            if (t >= 400 && t < 500) switch (t) {
                                case 401:
                                    return "unauthenticated";
                                case 403:
                                    return "permission_denied";
                                case 404:
                                    return "not_found";
                                case 409:
                                    return "already_exists";
                                case 413:
                                    return "failed_precondition";
                                case 429:
                                    return "resource_exhausted";
                                default:
                                    return "invalid_argument"
                            }
                            if (t >= 500 && t < 600) switch (t) {
                                case 501:
                                    return "unimplemented";
                                case 503:
                                    return "unavailable";
                                case 504:
                                    return "deadline_exceeded";
                                default:
                                    return "internal_error"
                            }
                            return "unknown_error"
                        }(t);
                        return "unknown_error" !== e && this.setStatus(e), this
                    }
                    isSuccess() {
                        return "ok" === this.status
                    }
                    finish(t) {
                        if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                            const {
                                logMessage: t
                            } = this.transaction.metadata.spanMetadata[this.spanId];
                            t && o.kg.log(t.replace("Starting", "Finishing"))
                        }
                        this.endTimestamp = "number" == typeof t ? t : (0, s._I)()
                    }
                    toTraceparent() {
                        let t = "";
                        return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"), `${this.traceId}-${this.spanId}${t}`
                    }
                    toContext() {
                        return (0, a.Jr)({
                            data: this.data,
                            description: this.description,
                            endTimestamp: this.endTimestamp,
                            op: this.op,
                            parentSpanId: this.parentSpanId,
                            sampled: this.sampled,
                            spanId: this.spanId,
                            startTimestamp: this.startTimestamp,
                            status: this.status,
                            tags: this.tags,
                            traceId: this.traceId
                        })
                    }
                    updateWithContext(t) {
                        return this.data = (0, r.h)(t.data, (() => ({}))), this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = (0, r.h)(t.spanId, (() => this.spanId)), this.startTimestamp = (0, r.h)(t.startTimestamp, (() => this.startTimestamp)), this.status = t.status, this.tags = (0, r.h)(t.tags, (() => ({}))), this.traceId = (0, r.h)(t.traceId, (() => this.traceId)), this
                    }
                    getTraceContext() {
                        return (0, a.Jr)({
                            data: Object.keys(this.data).length > 0 ? this.data : void 0,
                            description: this.description,
                            op: this.op,
                            parent_span_id: this.parentSpanId,
                            span_id: this.spanId,
                            status: this.status,
                            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                            trace_id: this.traceId
                        })
                    }
                    toJSON() {
                        return (0, a.Jr)({
                            data: Object.keys(this.data).length > 0 ? this.data : void 0,
                            description: this.description,
                            op: this.op,
                            parent_span_id: this.parentSpanId,
                            span_id: this.spanId,
                            start_timestamp: this.startTimestamp,
                            status: this.status,
                            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                            timestamp: this.endTimestamp,
                            trace_id: this.traceId
                        })
                    }
                }
            },
            391: function(t, e, n) {
                n.d(e, {
                    Y: function() {
                        return u
                    }
                });
                var r = n(375),
                    i = n(659),
                    s = n(170),
                    o = n(343),
                    a = n(535),
                    c = n(334);
                class u extends c.Dr {
                    __init() {
                        this._measurements = {}
                    }
                    __init2() {
                        this._contexts = {}
                    }
                    __init3() {
                        this._frozenDynamicSamplingContext = void 0
                    }
                    constructor(t, e) {
                        super(t), u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), this._hub = e || (0, i.Gd)(), this._name = t.name || "", this.metadata = {
                            source: "custom",
                            ...t.metadata,
                            spanMetadata: {},
                            changes: [],
                            propagations: 0
                        }, this._trimEnd = t.trimEnd, this.transaction = this;
                        const n = this.metadata.dynamicSamplingContext;
                        n && (this._frozenDynamicSamplingContext = { ...n
                        })
                    }
                    get name() {
                        return this._name
                    }
                    set name(t) {
                        this.setName(t)
                    }
                    setName(t, e = "custom") {
                        t === this.name && e === this.metadata.source || this.metadata.changes.push({
                            source: this.metadata.source,
                            timestamp: (0, s.ph)(),
                            propagations: this.metadata.propagations
                        }), this._name = t, this.metadata.source = e
                    }
                    initSpanRecorder(t = 1e3) {
                        this.spanRecorder || (this.spanRecorder = new c.gB(t)), this.spanRecorder.add(this)
                    }
                    setContext(t, e) {
                        null === e ? delete this._contexts[t] : this._contexts[t] = e
                    }
                    setMeasurement(t, e, n = "") {
                        this._measurements[t] = {
                            value: e,
                            unit: n
                        }
                    }
                    setMetadata(t) {
                        this.metadata = { ...this.metadata,
                            ...t
                        }
                    }
                    finish(t) {
                        if (void 0 !== this.endTimestamp) return;
                        if (this.name || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t), !0 !== this.sampled) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
                            const t = this._hub.getClient();
                            return void(t && t.recordDroppedEvent("sample_rate", "transaction"))
                        }
                        const e = this.spanRecorder ? this.spanRecorder.spans.filter((t => t !== this && t.endTimestamp)) : [];
                        this._trimEnd && e.length > 0 && (this.endTimestamp = e.reduce(((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t)).endTimestamp);
                        const n = this.metadata,
                            r = {
                                contexts: { ...this._contexts,
                                    trace: this.getTraceContext()
                                },
                                spans: e,
                                start_timestamp: this.startTimestamp,
                                tags: this.tags,
                                timestamp: this.endTimestamp,
                                transaction: this.name,
                                type: "transaction",
                                sdkProcessingMetadata: { ...n,
                                    dynamicSamplingContext: this.getDynamicSamplingContext()
                                },
                                ...n.source && {
                                    transaction_info: {
                                        source: n.source,
                                        changes: n.changes,
                                        propagations: n.propagations
                                    }
                                }
                            };
                        return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), r.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(r)
                    }
                    toContext() {
                        const t = super.toContext();
                        return (0, a.Jr)({ ...t,
                            name: this.name,
                            trimEnd: this._trimEnd
                        })
                    }
                    updateWithContext(t) {
                        return super.updateWithContext(t), this.name = (0, r.h)(t.name, (() => "")), this._trimEnd = t.trimEnd, this
                    }
                    getDynamicSamplingContext() {
                        if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                        const t = this._hub || (0, i.Gd)(),
                            e = t && t.getClient();
                        if (!e) return {};
                        const {
                            environment: n,
                            release: r
                        } = e.getOptions() || {}, {
                            publicKey: s
                        } = e.getDsn() || {}, o = this.metadata.sampleRate, c = void 0 !== o ? o.toString() : void 0, u = t.getScope(), {
                            segment: _
                        } = u && u.getUser() || {}, d = this.metadata.source, p = d && "url" !== d ? this.name : void 0;
                        return (0, a.Jr)({
                            environment: n,
                            release: r,
                            transaction: p,
                            user_segment: _,
                            public_key: s,
                            trace_id: this.traceId,
                            sample_rate: c
                        })
                    }
                }
            },
            233: function(t, e, n) {
                n.d(e, {
                    x1: function() {
                        return s
                    },
                    zu: function() {
                        return i
                    },
                    XL: function() {
                        return o
                    }
                });
                var r = n(659);

                function i(t) {
                    const e = (0, r.Gd)().getClient(),
                        n = t || e && e.getOptions();
                    return !!n && ("tracesSampleRate" in n || "tracesSampler" in n)
                }

                function s(t) {
                    const e = (t || (0, r.Gd)()).getScope();
                    return e && e.getTransaction()
                }

                function o(t) {
                    return t / 1e3
                }
            },
            464: function(t, e, n) {
                n.d(e, {
                    qT: function() {
                        return c
                    },
                    l4: function() {
                        return a
                    },
                    Rt: function() {
                        return s
                    }
                });
                var r = n(597);
                const i = (0, n(235).Rf)();

                function s(t, e = {}) {
                    try {
                        let n = t;
                        const r = 5,
                            i = [];
                        let s = 0,
                            a = 0;
                        const c = " > ",
                            u = c.length;
                        let _;
                        const d = Array.isArray(e) ? e : e.keyAttrs,
                            p = !Array.isArray(e) && e.maxStringLength || 80;
                        for (; n && s++ < r && (_ = o(n, d), !("html" === _ || s > 1 && a + i.length * u + _.length >= p));) i.push(_), a += _.length, n = n.parentNode;
                        return i.reverse().join(c)
                    } catch (t) {
                        return "<unknown>"
                    }
                }

                function o(t, e) {
                    const n = t,
                        i = [];
                    let s, o, a, c, u;
                    if (!n || !n.tagName) return "";
                    i.push(n.tagName.toLowerCase());
                    const _ = e && e.length ? e.filter((t => n.getAttribute(t))).map((t => [t, n.getAttribute(t)])) : null;
                    if (_ && _.length) _.forEach((t => {
                        i.push(`[${t[0]}="${t[1]}"]`)
                    }));
                    else if (n.id && i.push(`#${n.id}`), s = n.className, s && (0, r.HD)(s))
                        for (o = s.split(/\s+/), u = 0; u < o.length; u++) i.push(`.${o[u]}`);
                    const d = ["type", "name", "title", "alt"];
                    for (u = 0; u < d.length; u++) a = d[u], c = n.getAttribute(a), c && i.push(`[${a}="${c}"]`);
                    return i.join("")
                }

                function a() {
                    try {
                        return i.document.location.href
                    } catch (t) {
                        return ""
                    }
                }

                function c(t) {
                    return i.document && i.document.querySelector ? i.document.querySelector(t) : null
                }
            },
            375: function(t, e, n) {
                function r(t, e) {
                    return null != t ? t : e()
                }
                n.d(e, {
                    h: function() {
                        return r
                    }
                })
            },
            732: function(t, e, n) {
                n.d(e, {
                    o: function() {
                        return d
                    }
                });
                var r = n(597),
                    i = n(343),
                    s = n(535),
                    o = n(360),
                    a = n(823);
                const c = (0, n(235).Rf)(),
                    u = {},
                    _ = {};

                function d(t, e) {
                    u[t] = u[t] || [], u[t].push(e),
                        function(t) {
                            if (!_[t]) switch (_[t] = !0, t) {
                                case "console":
                                    "console" in c && i.RU.forEach((function(t) {
                                        t in c.console && (0, s.hl)(c.console, t, (function(e) {
                                            return function(...n) {
                                                p("console", {
                                                    args: n,
                                                    level: t
                                                }), e && e.apply(c.console, n)
                                            }
                                        }))
                                    }));
                                    break;
                                case "dom":
                                    ! function() {
                                        if (!("document" in c)) return;
                                        const t = p.bind(null, "dom"),
                                            e = y(t, !0);
                                        c.document.addEventListener("click", e, !1), c.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((e => {
                                            const n = c[e] && c[e].prototype;
                                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, s.hl)(n, "addEventListener", (function(e) {
                                                return function(n, r, i) {
                                                    if ("click" === n || "keypress" == n) try {
                                                        const r = this,
                                                            s = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                                                            o = s[n] = s[n] || {
                                                                refCount: 0
                                                            };
                                                        if (!o.handler) {
                                                            const r = y(t);
                                                            o.handler = r, e.call(this, n, r, i)
                                                        }
                                                        o.refCount++
                                                    } catch (t) {}
                                                    return e.call(this, n, r, i)
                                                }
                                            })), (0, s.hl)(n, "removeEventListener", (function(t) {
                                                return function(e, n, r) {
                                                    if ("click" === e || "keypress" == e) try {
                                                        const n = this,
                                                            i = n.__sentry_instrumentation_handlers__ || {},
                                                            s = i[e];
                                                        s && (s.refCount--, s.refCount <= 0 && (t.call(this, e, s.handler, r), s.handler = void 0, delete i[e]), 0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__)
                                                    } catch (t) {}
                                                    return t.call(this, e, n, r)
                                                }
                                            })))
                                        }))
                                    }();
                                    break;
                                case "xhr":
                                    ! function() {
                                        if (!("XMLHttpRequest" in c)) return;
                                        const t = XMLHttpRequest.prototype;
                                        (0, s.hl)(t, "open", (function(t) {
                                            return function(...e) {
                                                const n = this,
                                                    i = e[1],
                                                    o = n.__sentry_xhr__ = {
                                                        method: (0, r.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                                                        url: e[1]
                                                    };
                                                (0, r.HD)(i) && "POST" === o.method && i.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                                                const a = function() {
                                                    if (4 === n.readyState) {
                                                        try {
                                                            o.status_code = n.status
                                                        } catch (t) {}
                                                        p("xhr", {
                                                            args: e,
                                                            endTimestamp: Date.now(),
                                                            startTimestamp: Date.now(),
                                                            xhr: n
                                                        })
                                                    }
                                                };
                                                return "onreadystatechange" in n && "function" == typeof n.onreadystatechange ? (0, s.hl)(n, "onreadystatechange", (function(t) {
                                                    return function(...e) {
                                                        return a(), t.apply(n, e)
                                                    }
                                                })) : n.addEventListener("readystatechange", a), t.apply(n, e)
                                            }
                                        })), (0, s.hl)(t, "send", (function(t) {
                                            return function(...e) {
                                                return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]), p("xhr", {
                                                    args: e,
                                                    startTimestamp: Date.now(),
                                                    xhr: this
                                                }), t.apply(this, e)
                                            }
                                        }))
                                    }();
                                    break;
                                case "fetch":
                                    (0, a.t$)() && (0, s.hl)(c, "fetch", (function(t) {
                                        return function(...e) {
                                            const n = {
                                                args: e,
                                                fetchData: {
                                                    method: l(e),
                                                    url: h(e)
                                                },
                                                startTimestamp: Date.now()
                                            };
                                            return p("fetch", { ...n
                                            }), t.apply(c, e).then((t => (p("fetch", { ...n,
                                                endTimestamp: Date.now(),
                                                response: t
                                            }), t)), (t => {
                                                throw p("fetch", { ...n,
                                                    endTimestamp: Date.now(),
                                                    error: t
                                                }), t
                                            }))
                                        }
                                    }));
                                    break;
                                case "history":
                                    ! function() {
                                        if (!(0, a.Bf)()) return;
                                        const t = c.onpopstate;

                                        function e(t) {
                                            return function(...e) {
                                                const n = e.length > 2 ? e[2] : void 0;
                                                if (n) {
                                                    const t = f,
                                                        e = String(n);
                                                    f = e, p("history", {
                                                        from: t,
                                                        to: e
                                                    })
                                                }
                                                return t.apply(this, e)
                                            }
                                        }
                                        c.onpopstate = function(...e) {
                                            const n = c.location.href,
                                                r = f;
                                            if (f = n, p("history", {
                                                    from: r,
                                                    to: n
                                                }), t) try {
                                                return t.apply(this, e)
                                            } catch (t) {}
                                        }, (0, s.hl)(c.history, "pushState", e), (0, s.hl)(c.history, "replaceState", e)
                                    }();
                                    break;
                                case "error":
                                    E = c.onerror, c.onerror = function(t, e, n, r, i) {
                                        return p("error", {
                                            column: r,
                                            error: i,
                                            line: n,
                                            msg: t,
                                            url: e
                                        }), !!E && E.apply(this, arguments)
                                    };
                                    break;
                                case "unhandledrejection":
                                    v = c.onunhandledrejection, c.onunhandledrejection = function(t) {
                                        return p("unhandledrejection", t), !v || v.apply(this, arguments)
                                    };
                                    break;
                                default:
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("unknown instrumentation type:", t)
                            }
                        }(t)
                }

                function p(t, e) {
                    if (t && u[t])
                        for (const n of u[t] || []) try {
                            n(e)
                        } catch (e) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0,o.$P)(n)}\nError:`, e)
                        }
                }

                function l(t = []) {
                    return "Request" in c && (0, r.V9)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
                }

                function h(t = []) {
                    return "string" == typeof t[0] ? t[0] : "Request" in c && (0, r.V9)(t[0], Request) ? t[0].url : String(t[0])
                }
                let f, g, m;

                function y(t, e = !1) {
                    return n => {
                        if (!n || m === n) return;
                        if (function(t) {
                                if ("keypress" !== t.type) return !1;
                                try {
                                    const e = t.target;
                                    if (!e || !e.tagName) return !0;
                                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                                } catch (t) {}
                                return !0
                            }(n)) return;
                        const r = "keypress" === n.type ? "input" : n.type;
                        (void 0 === g || function(t, e) {
                            if (!t) return !0;
                            if (t.type !== e.type) return !0;
                            try {
                                if (t.target !== e.target) return !0
                            } catch (t) {}
                            return !1
                        }(m, n)) && (t({
                            event: n,
                            name: r,
                            global: e
                        }), m = n), clearTimeout(g), g = c.setTimeout((() => {
                            g = void 0
                        }), 1e3)
                    }
                }
                let E = null,
                    v = null
            },
            597: function(t, e, n) {
                n.d(e, {
                    TX: function() {
                        return a
                    },
                    fm: function() {
                        return c
                    },
                    kK: function() {
                        return l
                    },
                    VZ: function() {
                        return i
                    },
                    VW: function() {
                        return o
                    },
                    cO: function() {
                        return p
                    },
                    V9: function() {
                        return y
                    },
                    i2: function() {
                        return m
                    },
                    PO: function() {
                        return d
                    },
                    pt: function() {
                        return _
                    },
                    Kj: function() {
                        return h
                    },
                    HD: function() {
                        return u
                    },
                    Cy: function() {
                        return g
                    },
                    J8: function() {
                        return f
                    }
                });
                const r = Object.prototype.toString;

                function i(t) {
                    switch (r.call(t)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMException]":
                            return !0;
                        default:
                            return y(t, Error)
                    }
                }

                function s(t, e) {
                    return r.call(t) === `[object ${e}]`
                }

                function o(t) {
                    return s(t, "ErrorEvent")
                }

                function a(t) {
                    return s(t, "DOMError")
                }

                function c(t) {
                    return s(t, "DOMException")
                }

                function u(t) {
                    return s(t, "String")
                }

                function _(t) {
                    return null === t || "object" != typeof t && "function" != typeof t
                }

                function d(t) {
                    return s(t, "Object")
                }

                function p(t) {
                    return "undefined" != typeof Event && y(t, Event)
                }

                function l(t) {
                    return "undefined" != typeof Element && y(t, Element)
                }

                function h(t) {
                    return s(t, "RegExp")
                }

                function f(t) {
                    return Boolean(t && t.then && "function" == typeof t.then)
                }

                function g(t) {
                    return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
                }

                function m(t) {
                    return "number" == typeof t && t != t
                }

                function y(t, e) {
                    try {
                        return t instanceof e
                    } catch (t) {
                        return !1
                    }
                }
            },
            343: function(t, e, n) {
                n.d(e, {
                    RU: function() {
                        return i
                    },
                    Cf: function() {
                        return s
                    },
                    kg: function() {
                        return a
                    }
                });
                var r = n(235);
                const i = ["debug", "info", "warn", "error", "log", "assert", "trace"];

                function s(t) {
                    if (!("console" in r.n2)) return t();
                    const e = r.n2.console,
                        n = {};
                    i.forEach((t => {
                        const r = e[t] && e[t].__sentry_original__;
                        t in e && r && (n[t] = e[t], e[t] = r)
                    }));
                    try {
                        return t()
                    } finally {
                        Object.keys(n).forEach((t => {
                            e[t] = n[t]
                        }))
                    }
                }

                function o() {
                    let t = !1;
                    const e = {
                        enable: () => {
                            t = !0
                        },
                        disable: () => {
                            t = !1
                        }
                    };
                    return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? i.forEach((n => {
                        e[n] = (...e) => {
                            t && s((() => {
                                r.n2.console[n](`Sentry Logger [${n}]:`, ...e)
                            }))
                        }
                    })) : i.forEach((t => {
                        e[t] = () => {}
                    })), e
                }
                let a;
                a = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, r.YO)("logger", o) : o()
            },
            844: function(t, e, n) {
                n.d(e, {
                    EG: function() {
                        return u
                    },
                    Db: function() {
                        return c
                    },
                    lE: function() {
                        return d
                    },
                    YO: function() {
                        return _
                    },
                    jH: function() {
                        return a
                    },
                    DM: function() {
                        return s
                    }
                });
                var r = n(535),
                    i = n(235);

                function s() {
                    const t = i.n2,
                        e = t.crypto || t.msCrypto;
                    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                    const n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
                    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t => (t ^ (15 & n()) >> t / 4).toString(16)))
                }

                function o(t) {
                    return t.exception && t.exception.values ? t.exception.values[0] : void 0
                }

                function a(t) {
                    const {
                        message: e,
                        event_id: n
                    } = t;
                    if (e) return e;
                    const r = o(t);
                    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
                }

                function c(t, e, n) {
                    const r = t.exception = t.exception || {},
                        i = r.values = r.values || [],
                        s = i[0] = i[0] || {};
                    s.value || (s.value = e || ""), s.type || (s.type = n || "Error")
                }

                function u(t, e) {
                    const n = o(t);
                    if (!n) return;
                    const r = n.mechanism;
                    if (n.mechanism = {
                            type: "generic",
                            handled: !0,
                            ...r,
                            ...e
                        }, e && "data" in e) {
                        const t = { ...r && r.data,
                            ...e.data
                        };
                        n.mechanism.data = t
                    }
                }

                function _(t) {
                    if (t && t.__sentry_captured__) return !0;
                    try {
                        (0, r.xp)(t, "__sentry_captured__", !0)
                    } catch (t) {}
                    return !1
                }

                function d(t) {
                    return Array.isArray(t) ? t : [t]
                }
            },
            176: function(t, e, n) {
                function r() {
                    return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
                }

                function i(t, e) {
                    return t.require(e)
                }

                function s(e) {
                    let n;
                    try {
                        n = i(t, e)
                    } catch (t) {}
                    try {
                        const {
                            cwd: r
                        } = i(t, "process");
                        n = i(t, `${r()}/node_modules/${e}`)
                    } catch (t) {}
                    return n
                }
                n.d(e, {
                    l$: function() {
                        return i
                    },
                    KV: function() {
                        return r
                    },
                    $y: function() {
                        return s
                    }
                }), t = n.hmd(t)
            },
            535: function(t, e, n) {
                n.d(e, {
                    xp: function() {
                        return a
                    },
                    Sh: function() {
                        return d
                    },
                    Jr: function() {
                        return f
                    },
                    zf: function() {
                        return h
                    },
                    hl: function() {
                        return o
                    },
                    HK: function() {
                        return u
                    },
                    $Q: function() {
                        return c
                    },
                    _j: function() {
                        return _
                    }
                });
                var r = n(464),
                    i = n(597),
                    s = n(321);

                function o(t, e, n) {
                    if (!(e in t)) return;
                    const r = t[e],
                        i = n(r);
                    if ("function" == typeof i) try {
                        c(i, r)
                    } catch (t) {}
                    t[e] = i
                }

                function a(t, e, n) {
                    Object.defineProperty(t, e, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                }

                function c(t, e) {
                    const n = e.prototype || {};
                    t.prototype = e.prototype = n, a(t, "__sentry_original__", e)
                }

                function u(t) {
                    return t.__sentry_original__
                }

                function _(t) {
                    return Object.keys(t).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")
                }

                function d(t) {
                    if ((0, i.VZ)(t)) return {
                        message: t.message,
                        name: t.name,
                        stack: t.stack,
                        ...l(t)
                    };
                    if ((0, i.cO)(t)) {
                        const e = {
                            type: t.type,
                            target: p(t.target),
                            currentTarget: p(t.currentTarget),
                            ...l(t)
                        };
                        return "undefined" != typeof CustomEvent && (0, i.V9)(t, CustomEvent) && (e.detail = t.detail), e
                    }
                    return t
                }

                function p(t) {
                    try {
                        return (0, i.kK)(t) ? (0, r.Rt)(t) : Object.prototype.toString.call(t)
                    } catch (t) {
                        return "<unknown>"
                    }
                }

                function l(t) {
                    if ("object" == typeof t && null !== t) {
                        const e = {};
                        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }
                    return {}
                }

                function h(t, e = 40) {
                    const n = Object.keys(d(t));
                    if (n.sort(), !n.length) return "[object has no keys]";
                    if (n[0].length >= e) return (0, s.$G)(n[0], e);
                    for (let t = n.length; t > 0; t--) {
                        const r = n.slice(0, t).join(", ");
                        if (!(r.length > e)) return t === n.length ? r : (0, s.$G)(r, e)
                    }
                    return ""
                }

                function f(t) {
                    return g(t, new Map)
                }

                function g(t, e) {
                    if ((0, i.PO)(t)) {
                        const n = e.get(t);
                        if (void 0 !== n) return n;
                        const r = {};
                        e.set(t, r);
                        for (const n of Object.keys(t)) void 0 !== t[n] && (r[n] = g(t[n], e));
                        return r
                    }
                    if (Array.isArray(t)) {
                        const n = e.get(t);
                        if (void 0 !== n) return n;
                        const r = [];
                        return e.set(t, r), t.forEach((t => {
                            r.push(g(t, e))
                        })), r
                    }
                    return t
                }
            },
            360: function(t, e, n) {
                function r(...t) {
                    const e = t.sort(((t, e) => t[0] - e[0])).map((t => t[1]));
                    return (t, n = 0) => {
                        const r = [];
                        for (const i of t.split("\n").slice(n)) {
                            if (i.length > 1024) continue;
                            const t = i.replace(/\(error: (.*)\)/, "$1");
                            for (const n of e) {
                                const e = n(t);
                                if (e) {
                                    r.push(e);
                                    break
                                }
                            }
                        }
                        return function(t) {
                            if (!t.length) return [];
                            let e = t;
                            const n = e[0].function || "",
                                r = e[e.length - 1].function || "";
                            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, 50).map((t => ({ ...t,
                                filename: t.filename || e[0].filename,
                                function: t.function || "?"
                            }))).reverse()
                        }(r)
                    }
                }

                function i(t) {
                    return Array.isArray(t) ? r(...t) : t
                }
                n.d(e, {
                    pE: function() {
                        return r
                    },
                    $P: function() {
                        return o
                    },
                    Sq: function() {
                        return i
                    }
                });
                const s = "<anonymous>";

                function o(t) {
                    try {
                        return t && "function" == typeof t && t.name || s
                    } catch (t) {
                        return s
                    }
                }
            },
            321: function(t, e, n) {
                n.d(e, {
                    nK: function() {
                        return s
                    },
                    U0: function() {
                        return o
                    },
                    $G: function() {
                        return i
                    }
                });
                var r = n(597);

                function i(t, e = 0) {
                    return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.substr(0,e)}...`
                }

                function s(t, e) {
                    if (!Array.isArray(t)) return "";
                    const n = [];
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e];
                        try {
                            n.push(String(r))
                        } catch (t) {
                            n.push("[value cannot be serialized]")
                        }
                    }
                    return n.join(e)
                }

                function o(t, e = [], n = !1) {
                    return e.some((e => function(t, e, n = !1) {
                        return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
                    }(t, e, n)))
                }
            },
            823: function(t, e, n) {
                n.d(e, {
                    Du: function() {
                        return o
                    },
                    Ak: function() {
                        return s
                    },
                    Bf: function() {
                        return c
                    },
                    t$: function() {
                        return a
                    }
                });
                var r = n(343);
                const i = (0, n(235).Rf)();

                function s() {
                    if (!("fetch" in i)) return !1;
                    try {
                        return new Headers, new Request("http://www.example.com"), new Response, !0
                    } catch (t) {
                        return !1
                    }
                }

                function o(t) {
                    return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
                }

                function a() {
                    if (!s()) return !1;
                    if (o(i.fetch)) return !0;
                    let t = !1;
                    const e = i.document;
                    if (e && "function" == typeof e.createElement) try {
                        const n = e.createElement("iframe");
                        n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = o(n.contentWindow.fetch)), e.head.removeChild(n)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                    }
                    return t
                }

                function c() {
                    const t = i.chrome,
                        e = t && t.app && t.app.runtime,
                        n = "history" in i && !!i.history.pushState && !!i.history.replaceState;
                    return !e && n
                }
            },
            893: function(t, e, n) {
                n.d(e, {
                    cW: function() {
                        return a
                    },
                    $2: function() {
                        return o
                    },
                    WD: function() {
                        return s
                    }
                });
                var r, i = n(597);

                function s(t) {
                    return new a((e => {
                        e(t)
                    }))
                }

                function o(t) {
                    return new a(((e, n) => {
                        n(t)
                    }))
                }! function(t) {
                    t[t.PENDING = 0] = "PENDING", t[t.RESOLVED = 1] = "RESOLVED", t[t.REJECTED = 2] = "REJECTED"
                }(r || (r = {}));
                class a {
                    __init() {
                        this._state = r.PENDING
                    }
                    __init2() {
                        this._handlers = []
                    }
                    constructor(t) {
                        a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), a.prototype.__init5.call(this), a.prototype.__init6.call(this);
                        try {
                            t(this._resolve, this._reject)
                        } catch (t) {
                            this._reject(t)
                        }
                    }
                    then(t, e) {
                        return new a(((n, r) => {
                            this._handlers.push([!1, e => {
                                if (t) try {
                                    n(t(e))
                                } catch (t) {
                                    r(t)
                                } else n(e)
                            }, t => {
                                if (e) try {
                                    n(e(t))
                                } catch (t) {
                                    r(t)
                                } else r(t)
                            }]), this._executeHandlers()
                        }))
                    } catch (t) {
                        return this.then((t => t), t)
                    } finally(t) {
                        return new a(((e, n) => {
                            let r, i;
                            return this.then((e => {
                                i = !1, r = e, t && t()
                            }), (e => {
                                i = !0, r = e, t && t()
                            })).then((() => {
                                i ? n(r) : e(r)
                            }))
                        }))
                    }
                    __init3() {
                        this._resolve = t => {
                            this._setResult(r.RESOLVED, t)
                        }
                    }
                    __init4() {
                        this._reject = t => {
                            this._setResult(r.REJECTED, t)
                        }
                    }
                    __init5() {
                        this._setResult = (t, e) => {
                            this._state === r.PENDING && ((0, i.J8)(e) ? e.then(this._resolve, this._reject) : (this._state = t, this._value = e, this._executeHandlers()))
                        }
                    }
                    __init6() {
                        this._executeHandlers = () => {
                            if (this._state === r.PENDING) return;
                            const t = this._handlers.slice();
                            this._handlers = [], t.forEach((t => {
                                t[0] || (this._state === r.RESOLVED && t[1](this._value), this._state === r.REJECTED && t[2](this._value), t[0] = !0)
                            }))
                        }
                    }
                }
            },
            170: function(t, e, n) {
                n.d(e, {
                    Z1: function() {
                        return l
                    },
                    yW: function() {
                        return u
                    },
                    ph: function() {
                        return _
                    },
                    _I: function() {
                        return d
                    }
                });
                var r = n(176),
                    i = n(235);
                t = n.hmd(t);
                const s = (0, i.Rf)(),
                    o = {
                        nowSeconds: () => Date.now() / 1e3
                    },
                    a = (0, r.KV)() ? function() {
                        try {
                            return (0, r.l$)(t, "perf_hooks").performance
                        } catch (t) {
                            return
                        }
                    }() : function() {
                        const {
                            performance: t
                        } = s;
                        if (t && t.now) return {
                            now: () => t.now(),
                            timeOrigin: Date.now() - t.now()
                        }
                    }(),
                    c = void 0 === a ? o : {
                        nowSeconds: () => (a.timeOrigin + a.now()) / 1e3
                    },
                    u = o.nowSeconds.bind(o),
                    _ = c.nowSeconds.bind(c),
                    d = _;
                let p;
                const l = (() => {
                    const {
                        performance: t
                    } = s;
                    if (!t || !t.now) return void(p = "none");
                    const e = 36e5,
                        n = t.now(),
                        r = Date.now(),
                        i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
                        o = i < e,
                        a = t.timing && t.timing.navigationStart,
                        c = "number" == typeof a ? Math.abs(a + n - r) : e;
                    return o || c < e ? i <= c ? (p = "timeOrigin", t.timeOrigin) : (p = "navigationStart", a) : (p = "dateNow", r)
                })()
            },
            235: function(t, e, n) {
                function r(t) {
                    return t && t.Math == Math ? t : void 0
                }
                n.d(e, {
                    n2: function() {
                        return i
                    },
                    Rf: function() {
                        return s
                    },
                    YO: function() {
                        return o
                    }
                });
                const i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
                    return this
                }() || {};

                function s() {
                    return i
                }

                function o(t, e, n) {
                    const r = n || i,
                        s = r.__SENTRY__ = r.__SENTRY__ || {};
                    return s[t] || (s[t] = e())
                }
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var s = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r](s, s.exports, n), s.loaded = !0, s.exports
    }
    n.d = function(t, e) {
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
        }(), n.hmd = function(t) {
            return (t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
                enumerable: !0,
                set: function() {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
                }
            }), t
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            var t = n(844),
                e = n(343),
                r = n(659),
                i = n(350);
            const s = [];

            function o(e) {
                const n = e.defaultIntegrations || [],
                    r = e.integrations;
                let i;
                n.forEach((t => {
                    t.isDefaultInstance = !0
                })), i = Array.isArray(r) ? [...n, ...r] : "function" == typeof r ? (0, t.lE)(r(n)) : n;
                const s = function(t) {
                        const e = {};
                        return t.forEach((t => {
                            const {
                                name: n
                            } = t, r = e[n];
                            r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                        })), Object.values(e)
                    }(i),
                    o = s.findIndex((t => "Debug" === t.name));
                if (-1 !== o) {
                    const [t] = s.splice(o, 1);
                    s.push(t)
                }
                return s
            }

            function a(t, n) {
                n[t.name] = t, -1 === s.indexOf(t.name) && (t.setupOnce(i.c, r.Gd), s.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`Integration installed: ${t.name}`))
            }
            var c = n(321);
            const u = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
            class _ {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                __init() {
                    this.name = _.id
                }
                constructor(t = {}) {
                    this._options = t, _.prototype.__init.call(this)
                }
                setupOnce(n, r) {
                    const i = n => {
                        const i = r();
                        if (i) {
                            const r = i.getIntegration(_);
                            if (r) {
                                const s = i.getClient(),
                                    o = s ? s.getOptions() : {},
                                    a = function(t = {}, e = {}) {
                                        return {
                                            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...u],
                                            ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                        }
                                    }(r._options, o);
                                return function(n, r) {
                                    return r.ignoreInternal && function(t) {
                                        try {
                                            return "SentryError" === t.exception.values[0].type
                                        } catch (t) {}
                                        return !1
                                    }(n) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,t.jH)(n)}`), !0) : function(n, r) {
                                        return !(!r || !r.length) && function(n) {
                                            if (n.message) return [n.message];
                                            if (n.exception) try {
                                                const {
                                                    type: t = "",
                                                    value: e = ""
                                                } = n.exception.values && n.exception.values[0] || {};
                                                return [`${e}`, `${t}: ${e}`]
                                            } catch (r) {
                                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error(`Cannot extract message for event ${(0,t.jH)(n)}`), []
                                            }
                                            return []
                                        }(n).some((t => (0, c.U0)(t, r)))
                                    }(n, r.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,t.jH)(n)}`), !0) : function(t, e) {
                                        if (!e || !e.length) return !1;
                                        const n = d(t);
                                        return !!n && (0, c.U0)(n, e)
                                    }(n, r.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,t.jH)(n)}.\nUrl: ${d(n)}`), !0) : ! function(t, e) {
                                        if (!e || !e.length) return !0;
                                        const n = d(t);
                                        return !n || (0, c.U0)(n, e)
                                    }(n, r.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,t.jH)(n)}.\nUrl: ${d(n)}`), !0)
                                }(n, a) ? null : n
                            }
                        }
                        return n
                    };
                    i.id = this.name, n(i)
                }
            }

            function d(n) {
                try {
                    let t;
                    try {
                        t = n.exception.values[0].stacktrace.frames
                    } catch (t) {}
                    return t ? function(t = []) {
                        for (let e = t.length - 1; e >= 0; e--) {
                            const n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(t) : null
                } catch (r) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error(`Cannot extract url for event ${(0,t.jH)(n)}`), null
                }
            }
            _.__initStatic();
            var p = n(535);
            let l;
            class h {
                constructor() {
                    h.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "FunctionToString"
                }
                __init() {
                    this.name = h.id
                }
                setupOnce() {
                    l = Function.prototype.toString, Function.prototype.toString = function(...t) {
                        const e = (0, p.HK)(this) || this;
                        return l.apply(e, t)
                    }
                }
            }
            h.__initStatic();
            var f = n(360),
                g = n(823),
                m = n(732);

            function y(t) {
                let e, n = t[0],
                    r = 1;
                for (; r < t.length;) {
                    const i = t[r],
                        s = t[r + 1];
                    if (r += 2, ("optionalAccess" === i || "optionalCall" === i) && null == n) return;
                    "access" === i || "optionalAccess" === i ? (e = n, n = s(n)) : "call" !== i && "optionalCall" !== i || (n = s(((...t) => n.call(e, ...t))), e = void 0)
                }
                return n
            }
            class E extends Error {
                constructor(t, e = "warn") {
                    super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
                }
            }
            const v = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

            function S(t, e = !1) {
                const {
                    host: n,
                    path: r,
                    pass: i,
                    port: s,
                    projectId: o,
                    protocol: a,
                    publicKey: c
                } = t;
                return `${a}://${c}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`
            }

            function T(t) {
                return {
                    protocol: t.protocol,
                    publicKey: t.publicKey || "",
                    pass: t.pass || "",
                    host: t.host,
                    port: t.port || "",
                    path: t.path || "",
                    projectId: t.projectId
                }
            }
            var b = n(597),
                R = n(893);

            function D(t, e = 1 / 0, n = 1 / 0) {
                try {
                    return k("", t, e, n)
                } catch (t) {
                    return {
                        ERROR: `**non-serializable** (${t})`
                    }
                }
            }

            function x(t, e = 3, n = 102400) {
                const r = D(t, e);
                return i = r,
                    function(t) {
                        return ~-encodeURI(t).split(/%..|./).length
                    }(JSON.stringify(i)) > n ? x(t, e - 1, n) : r;
                var i
            }

            function k(t, e, r = 1 / 0, i = 1 / 0, s = function() {
                const t = "function" == typeof WeakSet,
                    e = t ? new WeakSet : [];
                return [function(n) {
                    if (t) return !!e.has(n) || (e.add(n), !1);
                    for (let t = 0; t < e.length; t++)
                        if (e[t] === n) return !0;
                    return e.push(n), !1
                }, function(n) {
                    if (t) e.delete(n);
                    else
                        for (let t = 0; t < e.length; t++)
                            if (e[t] === n) {
                                e.splice(t, 1);
                                break
                            }
                }]
            }()) {
                const [o, a] = s;
                if (null === e || ["number", "boolean", "string"].includes(typeof e) && !(0, b.i2)(e)) return e;
                const c = function(t, e) {
                    try {
                        return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== n.g && e === n.g ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : (0, b.Cy)(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? `[Function: ${(0,f.$P)(e)}]` : "symbol" == typeof e ? `[${String(e)}]` : "bigint" == typeof e ? `[BigInt: ${String(e)}]` : `[object ${Object.getPrototypeOf(e).constructor.name}]`
                    } catch (t) {
                        return `**non-serializable** (${t})`
                    }
                }(t, e);
                if (!c.startsWith("[object ")) return c;
                if (e.__sentry_skip_normalization__) return e;
                if (0 === r) return c.replace("object ", "");
                if (o(e)) return "[Circular ~]";
                const u = e;
                if (u && "function" == typeof u.toJSON) try {
                    return k("", u.toJSON(), r - 1, i, s)
                } catch (t) {}
                const _ = Array.isArray(e) ? [] : {};
                let d = 0;
                const l = (0, p.Sh)(e);
                for (const t in l) {
                    if (!Object.prototype.hasOwnProperty.call(l, t)) continue;
                    if (d >= i) {
                        _[t] = "[MaxProperties ~]";
                        break
                    }
                    const e = l[t];
                    _[t] = k(t, e, r - 1, i, s), d++
                }
                return a(e), _
            }

            function N(t, e = []) {
                return [t, e]
            }

            function w(t, e) {
                const [n, r] = t;
                return [n, [...r, e]]
            }

            function U(t, e) {
                t[1].forEach((t => {
                    const n = t[0].type;
                    e(t, n)
                }))
            }

            function B(t, e) {
                return (e || new TextEncoder).encode(t)
            }

            function G(t, e) {
                const [n, r] = t;
                let i = JSON.stringify(n);

                function s(t) {
                    "string" == typeof i ? i = "string" == typeof t ? i + t : [B(i, e), t] : i.push("string" == typeof t ? B(t, e) : t)
                }
                for (const t of r) {
                    const [e, n] = t;
                    if (s(`\n${JSON.stringify(e)}\n`), "string" == typeof n || n instanceof Uint8Array) s(n);
                    else {
                        let t;
                        try {
                            t = JSON.stringify(n)
                        } catch (e) {
                            t = JSON.stringify(D(n))
                        }
                        s(t)
                    }
                }
                return "string" == typeof i ? i : function(t) {
                    const e = t.reduce(((t, e) => t + e.length), 0),
                        n = new Uint8Array(e);
                    let r = 0;
                    for (const e of t) n.set(e, r), r += e.length;
                    return n
                }(i)
            }

            function Y(t, e) {
                const n = "string" == typeof t.data ? B(t.data, e) : t.data;
                return [(0, p.Jr)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType
                }), n]
            }
            const $ = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                replay_event: "replay_event",
                replay_recording: "replay_recording"
            };

            function O(t) {
                return $[t]
            }

            function I(t) {
                if (!t || !t.sdk) return;
                const {
                    name: e,
                    version: n
                } = t.sdk;
                return {
                    name: e,
                    version: n
                }
            }

            function C(t, e = {}) {
                const n = "string" == typeof e ? e : e.tunnel,
                    r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
                return n || `${function(t){return`${function(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){return(0,p._j)({sentry_key:t.publicKey,sentry_version:"7",...e&&{sentry_client:`${e.name}/${e.version}`}})}(t,r)}`
            }
            var j = n(15),
                L = n(170);
            const A = "Not capturing exception because it's already been captured.";
            class P {
                __init() {
                    this._integrations = {}
                }
                __init2() {
                    this._integrationsInitialized = !1
                }
                __init3() {
                    this._numProcessing = 0
                }
                __init4() {
                    this._outcomes = {}
                }
                constructor(t) {
                    if (P.prototype.__init.call(this), P.prototype.__init2.call(this), P.prototype.__init3.call(this), P.prototype.__init4.call(this), this._options = t, t.dsn) {
                        this._dsn = function(t) {
                            const e = "string" == typeof t ? function(t) {
                                const e = v.exec(t);
                                if (!e) throw new E(`Invalid Sentry Dsn: ${t}`);
                                const [n, r, i = "", s, o = "", a] = e.slice(1);
                                let c = "",
                                    u = a;
                                const _ = u.split("/");
                                if (_.length > 1 && (c = _.slice(0, -1).join("/"), u = _.pop()), u) {
                                    const t = u.match(/^\d+/);
                                    t && (u = t[0])
                                }
                                return T({
                                    host: s,
                                    pass: i,
                                    path: c,
                                    projectId: u,
                                    port: o,
                                    protocol: n,
                                    publicKey: r
                                })
                            }(t) : T(t);
                            return function(t) {
                                if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return;
                                const {
                                    port: e,
                                    projectId: n,
                                    protocol: r
                                } = t;
                                if (["protocol", "publicKey", "host", "projectId"].forEach((e => {
                                        if (!t[e]) throw new E(`Invalid Sentry Dsn: ${e} missing`)
                                    })), !n.match(/^\d+$/)) throw new E(`Invalid Sentry Dsn: Invalid projectId ${n}`);
                                if (! function(t) {
                                        return "http" === t || "https" === t
                                    }(r)) throw new E(`Invalid Sentry Dsn: Invalid protocol ${r}`);
                                if (e && isNaN(parseInt(e, 10))) throw new E(`Invalid Sentry Dsn: Invalid port ${e}`)
                            }(e), e
                        }(t.dsn);
                        const e = C(this._dsn, t);
                        this._transport = t.transport({
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...t.transportOptions,
                            url: e
                        })
                    } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("No DSN provided, client will not do anything.")
                }
                captureException(n, r, i) {
                    if ((0, t.YO)(n)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(A));
                    let s = r && r.event_id;
                    return this._process(this.eventFromException(n, r).then((t => this._captureEvent(t, r, i))).then((t => {
                        s = t
                    }))), s
                }
                captureMessage(t, e, n, r) {
                    let i = n && n.event_id;
                    const s = (0, b.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                    return this._process(s.then((t => this._captureEvent(t, n, r))).then((t => {
                        i = t
                    }))), i
                }
                captureEvent(n, r, i) {
                    if (r && r.originalException && (0, t.YO)(r.originalException)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(A));
                    let s = r && r.event_id;
                    return this._process(this._captureEvent(n, r, i).then((t => {
                        s = t
                    }))), s
                }
                captureSession(t) {
                    this._isEnabled() ? "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, j.CT)(t, {
                        init: !1
                    })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("SDK not enabled, will not capture session.")
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(t) {
                    const e = this._transport;
                    return e ? this._isClientDoneProcessing(t).then((n => e.flush(t).then((t => n && t)))) : (0, R.WD)(!0)
                }
                close(t) {
                    return this.flush(t).then((t => (this.getOptions().enabled = !1, t)))
                }
                setupIntegrations() {
                    this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(t) {
                        const e = {};
                        return t.forEach((t => {
                            a(t, e)
                        })), e
                    }(this._options.integrations), this._integrationsInitialized = !0)
                }
                getIntegrationById(t) {
                    return this._integrations[t]
                }
                getIntegration(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (n) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
                    }
                }
                addIntegration(t) {
                    a(t, this._integrations)
                }
                sendEvent(t, e = {}) {
                    if (this._dsn) {
                        let n = function(t, e, n, r) {
                            const i = I(n),
                                s = t.type && "replay_event" !== t.type ? t.type : "event";
                            ! function(t, e) {
                                e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
                            }(t, n && n.sdk);
                            const o = function(t, e, n, r) {
                                const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
                                return {
                                    event_id: t.event_id,
                                    sent_at: (new Date).toISOString(),
                                    ...e && {
                                        sdk: e
                                    },
                                    ...!!n && {
                                        dsn: S(r)
                                    },
                                    ..."transaction" === t.type && i && {
                                        trace: (0, p.Jr)({ ...i
                                        })
                                    }
                                }
                            }(t, i, r, e);
                            return delete t.sdkProcessingMetadata, N(o, [
                                [{
                                    type: s
                                }, t]
                            ])
                        }(t, this._dsn, this._options._metadata, this._options.tunnel);
                        for (const t of e.attachments || []) n = w(n, Y(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                        this._sendEnvelope(n)
                    }
                }
                sendSession(t) {
                    if (this._dsn) {
                        const e = function(t, e, n, r) {
                            const i = I(n);
                            return N({
                                sent_at: (new Date).toISOString(),
                                ...i && {
                                    sdk: i
                                },
                                ...!!r && {
                                    dsn: S(e)
                                }
                            }, ["aggregates" in t ? [{
                                type: "sessions"
                            }, t] : [{
                                type: "session"
                            }, t]])
                        }(t, this._dsn, this._options._metadata, this._options.tunnel);
                        this._sendEnvelope(e)
                    }
                }
                recordDroppedEvent(t, n, r) {
                    if (this._options.sendClientReports) {
                        const r = `${t}:${n}`;
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`Adding outcome: "${r}"`), this._outcomes[r] = this._outcomes[r] + 1 || 1
                    }
                }
                _updateSessionFromEvent(t, e) {
                    let n = !1,
                        r = !1;
                    const i = e.exception && e.exception.values;
                    if (i) {
                        r = !0;
                        for (const t of i) {
                            const e = t.mechanism;
                            if (e && !1 === e.handled) {
                                n = !0;
                                break
                            }
                        }
                    }
                    const s = "ok" === t.status;
                    (s && 0 === t.errors || s && n) && ((0, j.CT)(t, { ...n && {
                            status: "crashed"
                        },
                        errors: t.errors || Number(r || n)
                    }), this.captureSession(t))
                }
                _isClientDoneProcessing(t) {
                    return new R.cW((e => {
                        let n = 0;
                        const r = setInterval((() => {
                            0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), e(!1)))
                        }), 1)
                    }))
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }
                _prepareEvent(e, n, r) {
                    return function(e, n, r, s) {
                        const {
                            normalizeDepth: o = 3,
                            normalizeMaxBreadth: a = 1e3
                        } = e, u = { ...n,
                            event_id: n.event_id || r.event_id || (0, t.DM)(),
                            timestamp: n.timestamp || (0, L.yW)()
                        };
                        ! function(t, e) {
                            const {
                                environment: n,
                                release: r,
                                dist: i,
                                maxValueLength: s = 250
                            } = e;
                            "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = (0, c.$G)(t.message, s));
                            const o = t.exception && t.exception.values && t.exception.values[0];
                            o && o.value && (o.value = (0, c.$G)(o.value, s));
                            const a = t.request;
                            a && a.url && (a.url = (0, c.$G)(a.url, s))
                        }(u, e),
                        function(t, e) {
                            e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                        }(u, e.integrations.map((t => t.name)));
                        let _ = s;
                        r.captureContext && (_ = i.s.clone(_).update(r.captureContext));
                        let d = (0, R.WD)(u);
                        if (_) {
                            if (_.getAttachments) {
                                const t = [...r.attachments || [], ..._.getAttachments()];
                                t.length && (r.attachments = t)
                            }
                            d = _.applyToEvent(u, r)
                        }
                        return d.then((t => "number" == typeof o && o > 0 ? function(t, e, n) {
                            if (!t) return null;
                            const r = { ...t,
                                ...t.breadcrumbs && {
                                    breadcrumbs: t.breadcrumbs.map((t => ({ ...t,
                                        ...t.data && {
                                            data: D(t.data, e, n)
                                        }
                                    })))
                                },
                                ...t.user && {
                                    user: D(t.user, e, n)
                                },
                                ...t.contexts && {
                                    contexts: D(t.contexts, e, n)
                                },
                                ...t.extra && {
                                    extra: D(t.extra, e, n)
                                }
                            };
                            return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = D(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map((t => (t.data && (t.data = D(t.data, e, n)), t)))), r
                        }(t, o, a) : t))
                    }(this.getOptions(), e, n, r)
                }
                _captureEvent(t, n = {}, r) {
                    return this._processEvent(t, n, r).then((t => t.event_id), (t => {
                        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            const n = t;
                            "log" === n.logLevel ? e.kg.log(n.message) : e.kg.warn(n)
                        }
                    }))
                }
                _processEvent(t, e, n) {
                    const r = this.getOptions(),
                        {
                            sampleRate: i
                        } = r;
                    if (!this._isEnabled()) return (0, R.$2)(new E("SDK not enabled, will not capture event.", "log"));
                    const s = H(t),
                        o = M(t),
                        a = t.type || "error",
                        c = `before send for type \`${a}\``;
                    return o && "number" == typeof i && Math.random() > i ? (this.recordDroppedEvent("sample_rate", "error", t), (0, R.$2)(new E(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"))) : this._prepareEvent(t, e, n).then((n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", a, t), new E("An event processor returned `null`, will not send event.", "log");
                        if (e.data && !0 === e.data.__sentry__) return n;
                        const i = function(t, e, n) {
                            const {
                                beforeSend: r,
                                beforeSendTransaction: i
                            } = t;
                            return M(e) && r ? r(e, n) : H(e) && i ? i(e, n) : e
                        }(r, n, e);
                        return function(t, e) {
                            const n = `${e} must return \`null\` or a valid event.`;
                            if ((0, b.J8)(t)) return t.then((t => {
                                if (!(0, b.PO)(t) && null !== t) throw new E(n);
                                return t
                            }), (t => {
                                throw new E(`${e} rejected with ${t}`)
                            }));
                            if (!(0, b.PO)(t) && null !== t) throw new E(n);
                            return t
                        }(i, c)
                    })).then((r => {
                        if (null === r) throw this.recordDroppedEvent("before_send", t.type || "error", t), new E(`${c} returned \`null\`, will not send event.`, "log");
                        const i = n && n.getSession();
                        !s && i && this._updateSessionFromEvent(i, r);
                        const o = r.transaction_info;
                        if (s && o && r.transaction !== t.transaction) {
                            const t = "custom";
                            r.transaction_info = { ...o,
                                source: t,
                                changes: [...o.changes, {
                                    source: t,
                                    timestamp: r.timestamp,
                                    propagations: o.propagations
                                }]
                            }
                        }
                        return this.sendEvent(r, e), r
                    })).then(null, (t => {
                        if (t instanceof E) throw t;
                        throw this.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new E(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
                    }))
                }
                _process(t) {
                    this._numProcessing++, t.then((t => (this._numProcessing--, t)), (t => (this._numProcessing--, t)))
                }
                _sendEnvelope(t) {
                    this._transport && this._dsn ? this._transport.send(t).then(null, (t => {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error("Error while sending event:", t)
                    })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error("Transport disabled")
                }
                _clearOutcomes() {
                    const t = this._outcomes;
                    return this._outcomes = {}, Object.keys(t).map((e => {
                        const [n, r] = e.split(":");
                        return {
                            reason: n,
                            category: r,
                            quantity: t[e]
                        }
                    }))
                }
            }

            function M(t) {
                return void 0 === t.type
            }

            function H(t) {
                return "transaction" === t.type
            }
            const q = "7.30.0";

            function F(t, e) {
                const n = z(t, e),
                    r = {
                        type: e && e.name,
                        value: J(e)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function W(t, e) {
                return {
                    exception: {
                        values: [F(t, e)]
                    }
                }
            }

            function z(t, e) {
                const n = e.stacktrace || e.stack || "",
                    r = function(t) {
                        if (t) {
                            if ("number" == typeof t.framesToPop) return t.framesToPop;
                            if (X.test(t.message)) return 1
                        }
                        return 0
                    }(e);
                try {
                    return t(n, r)
                } catch (t) {}
                return []
            }
            const X = /Minified React error #\d+;/i;

            function J(t) {
                const e = t && t.message;
                return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
            }

            function V(e, n, i, s, o) {
                let a;
                if ((0, b.VW)(n) && n.error) return W(e, n.error);
                if ((0, b.TX)(n) || (0, b.fm)(n)) {
                    const r = n;
                    if ("stack" in n) a = W(e, n);
                    else {
                        const n = r.name || ((0, b.TX)(r) ? "DOMError" : "DOMException"),
                            o = r.message ? `${n}: ${r.message}` : n;
                        a = K(e, o, i, s), (0, t.Db)(a, o)
                    }
                    return "code" in r && (a.tags = { ...a.tags,
                        "DOMException.code": `${r.code}`
                    }), a
                }
                return (0, b.VZ)(n) ? W(e, n) : (0, b.PO)(n) || (0, b.cO)(n) ? (a = function(t, e, n, i) {
                    const s = (0, r.Gd)().getClient(),
                        o = s && s.getOptions().normalizeDepth,
                        a = {
                            exception: {
                                values: [{
                                    type: (0, b.cO)(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
                                    value: `Non-Error ${i?"promise rejection":"exception"} captured with keys: ${(0,p.zf)(e)}`
                                }]
                            },
                            extra: {
                                __serialized__: x(e, o)
                            }
                        };
                    if (n) {
                        const e = z(t, n);
                        e.length && (a.exception.values[0].stacktrace = {
                            frames: e
                        })
                    }
                    return a
                }(e, n, i, o), (0, t.EG)(a, {
                    synthetic: !0
                }), a) : (a = K(e, n, i, s), (0, t.Db)(a, `${n}`, void 0), (0, t.EG)(a, {
                    synthetic: !0
                }), a)
            }

            function K(t, e, n, r) {
                const i = {
                    message: e
                };
                if (r && n) {
                    const r = z(t, n);
                    r.length && (i.exception = {
                        values: [{
                            value: e,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    })
                }
                return i
            }

            function Z(t, e) {
                return (0, r.Gd)().captureException(t, {
                    captureContext: e
                })
            }

            function Q(t) {
                (0, r.Gd)().withScope(t)
            }
            var tt = n(235);
            const et = tt.n2;
            let nt = 0;

            function rt() {
                return nt > 0
            }

            function it() {
                nt++, setTimeout((() => {
                    nt--
                }))
            }

            function st(e, n = {}, r) {
                if ("function" != typeof e) return e;
                try {
                    const t = e.__sentry_wrapped__;
                    if (t) return t;
                    if ((0, p.HK)(e)) return e
                } catch (t) {
                    return e
                }
                const i = function() {
                    const i = Array.prototype.slice.call(arguments);
                    try {
                        r && "function" == typeof r && r.apply(this, arguments);
                        const t = i.map((t => st(t, n)));
                        return e.apply(this, t)
                    } catch (e) {
                        throw it(), Q((r => {
                            r.addEventProcessor((e => (n.mechanism && ((0, t.Db)(e, void 0, void 0), (0, t.EG)(e, n.mechanism)), e.extra = { ...e.extra,
                                arguments: i
                            }, e))), Z(e)
                        })), e
                    }
                };
                try {
                    for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (i[t] = e[t])
                } catch (t) {}(0, p.$Q)(i, e), (0, p.xp)(e, "__sentry_wrapped__", i);
                try {
                    Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
                        get: () => e.name
                    })
                } catch (t) {}
                return i
            }
            var ot = n(464);
            const at = ["fatal", "error", "warning", "log", "info", "debug"];

            function ct(t) {
                if (!t) return {};
                const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                const n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    relative: e[5] + n + r
                }
            }
            const ut = "Breadcrumbs";
            class _t {
                static __initStatic() {
                    this.id = ut
                }
                __init() {
                    this.name = _t.id
                }
                constructor(t) {
                    _t.prototype.__init.call(this), this.options = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...t
                    }
                }
                setupOnce() {
                    var t;
                    this.options.console && (0, m.o)("console", dt), this.options.dom && (0, m.o)("dom", (t = this.options.dom, function(n) {
                        let i, s = "object" == typeof t ? t.serializeAttribute : void 0,
                            o = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                        o && o > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" == typeof s && (s = [s]);
                        try {
                            i = n.event.target ? (0, ot.Rt)(n.event.target, {
                                keyAttrs: s,
                                maxStringLength: o
                            }) : (0, ot.Rt)(n.event, {
                                keyAttrs: s,
                                maxStringLength: o
                            })
                        } catch (t) {
                            i = "<unknown>"
                        }
                        0 !== i.length && (0, r.Gd)().addBreadcrumb({
                            category: `ui.${n.name}`,
                            message: i
                        }, {
                            event: n.event,
                            name: n.name,
                            global: n.global
                        })
                    })), this.options.xhr && (0, m.o)("xhr", pt), this.options.fetch && (0, m.o)("fetch", lt), this.options.history && (0, m.o)("history", ht)
                }
                addSentryBreadcrumb(e) {
                    this.options.sentry && (0, r.Gd)().addBreadcrumb({
                        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                        event_id: e.event_id,
                        level: e.level,
                        message: (0, t.jH)(e)
                    }, {
                        event: e
                    })
                }
            }

            function dt(t) {
                for (let e = 0; e < t.args.length; e++)
                    if ("ref=Ref<" === t.args[e]) {
                        t.args[e + 1] = "viewRef";
                        break
                    }
                const e = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: (n = t.level, "warn" === n ? "warning" : at.includes(n) ? n : "log"),
                    message: (0, c.nK)(t.args, " ")
                };
                var n;
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    e.message = `Assertion failed: ${(0,c.nK)(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
                }(0, r.Gd)().addBreadcrumb(e, {
                    input: t.args,
                    level: t.level
                })
            }

            function pt(t) {
                if (t.endTimestamp) {
                    if (t.xhr.__sentry_own_request__) return;
                    const {
                        method: e,
                        url: n,
                        status_code: i,
                        body: s
                    } = t.xhr.__sentry_xhr__ || {};
                    (0, r.Gd)().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: e,
                            url: n,
                            status_code: i
                        },
                        type: "http"
                    }, {
                        xhr: t.xhr,
                        input: s
                    })
                }
            }

            function lt(t) {
                t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? (0, r.Gd)().addBreadcrumb({
                    category: "fetch",
                    data: t.fetchData,
                    level: "error",
                    type: "http"
                }, {
                    data: t.error,
                    input: t.args
                }) : (0, r.Gd)().addBreadcrumb({
                    category: "fetch",
                    data: { ...t.fetchData,
                        status_code: t.response.status
                    },
                    type: "http"
                }, {
                    input: t.args,
                    response: t.response
                })))
            }

            function ht(t) {
                let e = t.from,
                    n = t.to;
                const i = ct(et.location.href);
                let s = ct(e);
                const o = ct(n);
                s.path || (s = i), i.protocol === o.protocol && i.host === o.host && (n = o.relative), i.protocol === s.protocol && i.host === s.host && (e = s.relative), (0, r.Gd)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
            }
            _t.__initStatic();
            class ft extends P {
                constructor(t) {
                    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: "npm:@sentry/browser",
                            version: q
                        }],
                        version: q
                    }, super(t), t.sendClientReports && et.document && et.document.addEventListener("visibilitychange", (() => {
                        "hidden" === et.document.visibilityState && this._flushOutcomes()
                    }))
                }
                eventFromException(e, n) {
                    return function(e, n, r, i) {
                        const s = V(e, n, r && r.syntheticException || void 0, i);
                        return (0, t.EG)(s), s.level = "error", r && r.event_id && (s.event_id = r.event_id), (0, R.WD)(s)
                    }(this._options.stackParser, e, n, this._options.attachStacktrace)
                }
                eventFromMessage(t, e = "info", n) {
                    return function(t, e, n = "info", r, i) {
                        const s = K(t, e, r && r.syntheticException || void 0, i);
                        return s.level = n, r && r.event_id && (s.event_id = r.event_id), (0, R.WD)(s)
                    }(this._options.stackParser, t, e, n, this._options.attachStacktrace)
                }
                sendEvent(t, e) {
                    y([this.getIntegrationById(ut), "optionalAccess", t => t.addSentryBreadcrumb, "optionalCall", e => e(t)]), super.sendEvent(t, e)
                }
                _prepareEvent(t, e, n) {
                    return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
                }
                _flushOutcomes() {
                    const t = this._clearOutcomes();
                    if (0 === t.length) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("No outcomes to send"));
                    if (!this._dsn) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("No dsn provided, will not send outcomes"));
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("Sending outcomes:", t);
                    const n = C(this._dsn, this._options),
                        r = (i = t, N((s = this._options.tunnel && S(this._dsn)) ? {
                            dsn: s
                        } : {}, [
                            [{
                                type: "client_report"
                            }, {
                                timestamp: (0, L.yW)(),
                                discarded_events: i
                            }]
                        ]));
                    var i, s;
                    try {
                        "[object Navigator]" === Object.prototype.toString.call(et && et.navigator) && "function" == typeof et.navigator.sendBeacon && !this._options.transportOptions ? et.navigator.sendBeacon.bind(et.navigator)(n, G(r)) : this._sendEnvelope(r)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error(t)
                    }
                }
            }
            const gt = "?";

            function mt(t, e, n, r) {
                const i = {
                    filename: t,
                    function: e,
                    in_app: !0
                };
                return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
            }
            const yt = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                Et = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                vt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                St = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                Tt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                bt = [
                    [30, t => {
                        const e = yt.exec(t);
                        if (e) {
                            if (e[2] && 0 === e[2].indexOf("eval")) {
                                const t = Et.exec(e[2]);
                                t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                            }
                            const [t, n] = Dt(e[1] || gt, e[2]);
                            return mt(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                        }
                    }],
                    [50, t => {
                        const e = vt.exec(t);
                        if (e) {
                            if (e[3] && e[3].indexOf(" > eval") > -1) {
                                const t = St.exec(e[3]);
                                t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                            }
                            let t = e[3],
                                n = e[1] || gt;
                            return [n, t] = Dt(n, t), mt(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                        }
                    }],
                    [40, t => {
                        const e = Tt.exec(t);
                        return e ? mt(e[2], e[1] || gt, +e[3], e[4] ? +e[4] : void 0) : void 0
                    }]
                ],
                Rt = (0, f.pE)(...bt),
                Dt = (t, e) => {
                    const n = -1 !== t.indexOf("safari-extension"),
                        r = -1 !== t.indexOf("safari-web-extension");
                    return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : gt, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
                },
                xt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            class kt {
                static __initStatic() {
                    this.id = "TryCatch"
                }
                __init() {
                    this.name = kt.id
                }
                constructor(t) {
                    kt.prototype.__init.call(this), this._options = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        ...t
                    }
                }
                setupOnce() {
                    this._options.setTimeout && (0, p.hl)(et, "setTimeout", Nt), this._options.setInterval && (0, p.hl)(et, "setInterval", Nt), this._options.requestAnimationFrame && (0, p.hl)(et, "requestAnimationFrame", wt), this._options.XMLHttpRequest && "XMLHttpRequest" in et && (0, p.hl)(XMLHttpRequest.prototype, "send", Ut);
                    const t = this._options.eventTarget;
                    t && (Array.isArray(t) ? t : xt).forEach(Bt)
                }
            }

            function Nt(t) {
                return function(...e) {
                    const n = e[0];
                    return e[0] = st(n, {
                        mechanism: {
                            data: {
                                function: (0, f.$P)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }

            function wt(t) {
                return function(e) {
                    return t.apply(this, [st(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, f.$P)(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    })])
                }
            }

            function Ut(t) {
                return function(...e) {
                    const n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t => {
                        t in n && "function" == typeof n[t] && (0, p.hl)(n, t, (function(e) {
                            const n = {
                                    mechanism: {
                                        data: {
                                            function: t,
                                            handler: (0, f.$P)(e)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                },
                                r = (0, p.HK)(e);
                            return r && (n.mechanism.data.handler = (0, f.$P)(r)), st(e, n)
                        }))
                    })), t.apply(this, e)
                }
            }

            function Bt(t) {
                const e = et,
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, p.hl)(n, "addEventListener", (function(e) {
                    return function(n, r, i) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = st(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, f.$P)(r),
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (t) {}
                        return e.apply(this, [n, st(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, f.$P)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), i])
                    }
                })), (0, p.hl)(n, "removeEventListener", (function(t) {
                    return function(e, n, r) {
                        const i = n;
                        try {
                            const n = i && i.__sentry_wrapped__;
                            n && t.call(this, e, n, r)
                        } catch (t) {}
                        return t.call(this, e, i, r)
                    }
                })))
            }
            kt.__initStatic();
            class Gt {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                __init() {
                    this.name = Gt.id
                }
                __init2() {
                    this._installFunc = {
                        onerror: Yt,
                        onunhandledrejection: $t
                    }
                }
                constructor(t) {
                    Gt.prototype.__init.call(this), Gt.prototype.__init2.call(this), this._options = {
                        onerror: !0,
                        onunhandledrejection: !0,
                        ...t
                    }
                }
                setupOnce() {
                    Error.stackTraceLimit = 50;
                    const t = this._options;
                    for (const r in t) {
                        const i = this._installFunc[r];
                        i && t[r] && (n = r, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`Global Handler attached: ${n}`), i(), this._installFunc[r] = void 0)
                    }
                    var n
                }
            }

            function Yt() {
                (0, m.o)("error", (t => {
                    const [e, n, r] = Ct();
                    if (!e.getIntegration(Gt)) return;
                    const {
                        msg: i,
                        url: s,
                        line: o,
                        column: a,
                        error: c
                    } = t;
                    if (rt() || c && c.__sentry_own_request__) return;
                    const u = void 0 === c && (0, b.HD)(i) ? function(t, e, n, r) {
                        let i = (0, b.VW)(t) ? t.message : t,
                            s = "Error";
                        const o = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        return o && (s = o[1], i = o[2]), Ot({
                            exception: {
                                values: [{
                                    type: s,
                                    value: i
                                }]
                            }
                        }, e, n, r)
                    }(i, s, o, a) : Ot(V(n, c || i, void 0, r, !1), s, o, a);
                    u.level = "error", It(e, c, u, "onerror")
                }))
            }

            function $t() {
                (0, m.o)("unhandledrejection", (t => {
                    const [e, n, r] = Ct();
                    if (!e.getIntegration(Gt)) return;
                    let i = t;
                    try {
                        "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
                    } catch (t) {}
                    if (rt() || i && i.__sentry_own_request__) return !0;
                    const s = (0, b.pt)(i) ? {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: `Non-Error promise rejection captured with value: ${String(i)}`
                            }]
                        }
                    } : V(n, i, void 0, r, !0);
                    s.level = "error", It(e, i, s, "onunhandledrejection")
                }))
            }

            function Ot(t, e, n, r) {
                const i = t.exception = t.exception || {},
                    s = i.values = i.values || [],
                    o = s[0] = s[0] || {},
                    a = o.stacktrace = o.stacktrace || {},
                    c = a.frames = a.frames || [],
                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                    _ = isNaN(parseInt(n, 10)) ? void 0 : n,
                    d = (0, b.HD)(e) && e.length > 0 ? e : (0, ot.l4)();
                return 0 === c.length && c.push({
                    colno: u,
                    filename: d,
                    function: "?",
                    in_app: !0,
                    lineno: _
                }), t
            }

            function It(e, n, r, i) {
                (0, t.EG)(r, {
                    handled: !1,
                    type: i
                }), e.captureEvent(r, {
                    originalException: n
                })
            }

            function Ct() {
                const t = (0, r.Gd)(),
                    e = t.getClient(),
                    n = e && e.getOptions() || {
                        stackParser: () => [],
                        attachStacktrace: !1
                    };
                return [t, n.stackParser, n.attachStacktrace]
            }
            Gt.__initStatic();
            class jt {
                static __initStatic() {
                    this.id = "LinkedErrors"
                }
                __init() {
                    this.name = jt.id
                }
                constructor(t = {}) {
                    jt.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
                }
                setupOnce() {
                    const t = (0, r.Gd)().getClient();
                    t && (0, i.c)(((e, n) => {
                        const i = (0, r.Gd)().getIntegration(jt);
                        return i ? function(t, e, n, r, i) {
                            if (!(r.exception && r.exception.values && i && (0, b.V9)(i.originalException, Error))) return r;
                            const s = Lt(t, n, i.originalException, e);
                            return r.exception.values = [...s, ...r.exception.values], r
                        }(t.getOptions().stackParser, i._key, i._limit, e, n) : e
                    }))
                }
            }

            function Lt(t, e, n, r, i = []) {
                if (!(0, b.V9)(n[r], Error) || i.length + 1 >= e) return i;
                const s = F(t, n[r]);
                return Lt(t, e, n[r], r, [s, ...i])
            }
            jt.__initStatic();
            class At {
                constructor() {
                    At.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "Dedupe"
                }
                __init() {
                    this.name = At.id
                }
                setupOnce(t, n) {
                    const r = t => {
                        const r = n().getIntegration(At);
                        if (r) {
                            try {
                                if (function(t, e) {
                                        return !!e && (!! function(t, e) {
                                            const n = t.message,
                                                r = e.message;
                                            return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!Mt(t, e) && !!Pt(t, e))))
                                        }(t, e) || !! function(t, e) {
                                            const n = Ht(e),
                                                r = Ht(t);
                                            return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!Mt(t, e) && !!Pt(t, e)))
                                        }(t, e))
                                    }(t, r._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (e) {
                                return r._previousEvent = t
                            }
                            return r._previousEvent = t
                        }
                        return t
                    };
                    r.id = this.name, t(r)
                }
            }

            function Pt(t, e) {
                let n = qt(t),
                    r = qt(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, r = r, r.length !== n.length) return !1;
                for (let t = 0; t < r.length; t++) {
                    const e = r[t],
                        i = n[t];
                    if (e.filename !== i.filename || e.lineno !== i.lineno || e.colno !== i.colno || e.function !== i.function) return !1
                }
                return !0
            }

            function Mt(t, e) {
                let n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }

            function Ht(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function qt(t) {
                const e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
            }
            At.__initStatic();
            class Ft {
                constructor() {
                    Ft.prototype.__init.call(this)
                }
                static __initStatic() {
                    this.id = "HttpContext"
                }
                __init() {
                    this.name = Ft.id
                }
                setupOnce() {
                    (0, i.c)((t => {
                        if ((0, r.Gd)().getIntegration(Ft)) {
                            if (!et.navigator && !et.location && !et.document) return t;
                            const e = t.request && t.request.url || et.location && et.location.href,
                                {
                                    referrer: n
                                } = et.document || {},
                                {
                                    userAgent: r
                                } = et.navigator || {},
                                i = { ...t.request && t.request.headers,
                                    ...n && {
                                        Referer: n
                                    },
                                    ...r && {
                                        "User-Agent": r
                                    }
                                },
                                s = { ...t.request,
                                    ...e && {
                                        url: e
                                    },
                                    headers: i
                                };
                            return { ...t,
                                request: s
                            }
                        }
                        return t
                    }))
                }
            }

            function Wt(t, n, r = function(t) {
                const e = [];

                function n(t) {
                    return e.splice(e.indexOf(t), 1)[0]
                }
                return {
                    $: e,
                    add: function(r) {
                        if (!(void 0 === t || e.length < t)) return (0, R.$2)(new E("Not adding Promise because buffer limit was reached."));
                        const i = r();
                        return -1 === e.indexOf(i) && e.push(i), i.then((() => n(i))).then(null, (() => n(i).then(null, (() => {})))), i
                    },
                    drain: function(t) {
                        return new R.cW(((n, r) => {
                            let i = e.length;
                            if (!i) return n(!0);
                            const s = setTimeout((() => {
                                t && t > 0 && n(!1)
                            }), t);
                            e.forEach((t => {
                                (0, R.WD)(t).then((() => {
                                    --i || (clearTimeout(s), n(!0))
                                }), r)
                            }))
                        }))
                    }
                }
            }(t.bufferSize || 30)) {
                let i = {};
                return {
                    send: function(s) {
                        const o = [];
                        if (U(s, ((e, n) => {
                                const r = O(n);
                                if (function(t, e, n = Date.now()) {
                                        return function(t, e) {
                                            return t[e] || t.all || 0
                                        }(t, e) > n
                                    }(i, r)) {
                                    const i = zt(e, n);
                                    t.recordDroppedEvent("ratelimit_backoff", r, i)
                                } else o.push(e)
                            })), 0 === o.length) return (0, R.WD)();
                        const a = N(s[0], o),
                            c = e => {
                                U(a, ((n, r) => {
                                    const i = zt(n, r);
                                    t.recordDroppedEvent(e, O(r), i)
                                }))
                            };
                        return r.add((() => n({
                            body: G(a, t.textEncoder)
                        }).then((t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), i = function(t, {
                            statusCode: e,
                            headers: n
                        }, r = Date.now()) {
                            const i = { ...t
                                },
                                s = n && n["x-sentry-rate-limits"],
                                o = n && n["retry-after"];
                            if (s)
                                for (const t of s.trim().split(",")) {
                                    const [e, n] = t.split(":", 2), s = parseInt(e, 10), o = 1e3 * (isNaN(s) ? 60 : s);
                                    if (n)
                                        for (const t of n.split(";")) i[t] = r + o;
                                    else i.all = r + o
                                } else o ? i.all = r + function(t, e = Date.now()) {
                                    const n = parseInt(`${t}`, 10);
                                    if (!isNaN(n)) return 1e3 * n;
                                    const r = Date.parse(`${t}`);
                                    return isNaN(r) ? 6e4 : r - e
                                }(o, r) : 429 === e && (i.all = r + 6e4);
                            return i
                        }(i, t), t)), (t => {
                            throw c("network_error"), t
                        })))).then((t => t), (t => {
                            if (t instanceof E) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error("Skipped sending event because buffer is full."), c("queue_overflow"), (0, R.WD)();
                            throw t
                        }))
                    },
                    flush: t => r.drain(t)
                }
            }

            function zt(t, e) {
                if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
            }
            let Xt;

            function Jt(t, n = function() {
                if (Xt) return Xt;
                if ((0, g.Du)(et.fetch)) return Xt = et.fetch.bind(et);
                const t = et.document;
                let n = et.fetch;
                if (t && "function" == typeof t.createElement) try {
                    const e = t.createElement("iframe");
                    e.hidden = !0, t.head.appendChild(e);
                    const r = e.contentWindow;
                    r && r.fetch && (n = r.fetch), t.head.removeChild(e)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return Xt = n.bind(et)
            }()) {
                return Wt(t, (function(e) {
                    const r = {
                        body: e.body,
                        method: "POST",
                        referrerPolicy: "origin",
                        headers: t.headers,
                        keepalive: e.body.length <= 65536,
                        ...t.fetchOptions
                    };
                    try {
                        return n(t.url, r).then((t => ({
                            statusCode: t.status,
                            headers: {
                                "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": t.headers.get("Retry-After")
                            }
                        })))
                    } catch (t) {
                        return Xt = void 0, (0, R.$2)(t)
                    }
                }))
            }

            function Vt(t) {
                return Wt(t, (function(e) {
                    return new R.cW(((n, r) => {
                        const i = new XMLHttpRequest;
                        i.onerror = r, i.onreadystatechange = () => {
                            4 === i.readyState && n({
                                statusCode: i.status,
                                headers: {
                                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": i.getResponseHeader("Retry-After")
                                }
                            })
                        }, i.open("POST", t.url);
                        for (const e in t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && i.setRequestHeader(e, t.headers[e]);
                        i.send(e.body)
                    }))
                }))
            }
            Ft.__initStatic();
            const Kt = [new _, new h, new kt, new _t, new Gt, new jt, new At, new Ft];

            function Zt(t) {
                t.startSession({
                    ignoreDuration: !0
                }), t.captureSession()
            }
            var Qt = n(790),
                te = n(375);
            const ee = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"),
                ne = "baggage",
                re = /^sentry-/;

            function ie(t) {
                return function(t) {
                    if (0 !== Object.keys(t).length) return Object.entries(t).reduce(((t, [n, r], i) => {
                        const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
                            o = 0 === i ? s : `${t},${s}`;
                        return o.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`), t) : o
                    }), "")
                }(Object.entries(t).reduce(((t, [e, n]) => (n && (t[`sentry-${e}`] = n), t)), {}))
            }

            function se(t) {
                return t.split(",").map((t => t.split("=").map((t => decodeURIComponent(t.trim()))))).reduce(((t, [e, n]) => (t[e] = n, t)), {})
            }
            var oe = n(458),
                ae = n(233);
            const ce = tt.n2,
                ue = (t, e, n) => {
                    let r, i;
                    return s => {
                        e.value >= 0 && (s || n) && (i = e.value - (r || 0), (i || void 0 === r) && (r = e.value, e.delta = i, t(e)))
                    }
                },
                _e = () => ce.__WEB_VITALS_POLYFILL__ ? ce.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
                    const t = ce.performance.timing,
                        e = ce.performance.navigation.type,
                        n = {
                            entryType: "navigation",
                            startTime: 0,
                            type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                        };
                    for (const e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
                    return n
                })()) : ce.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
                de = () => {
                    const t = _e();
                    return t && t.activationStart || 0
                },
                pe = (t, e) => {
                    const n = _e();
                    let r = "navigate";
                    return n && (r = ce.document.prerendering || de() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
                        navigationType: r
                    }
                },
                le = (t, e, n) => {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            const r = new PerformanceObserver((t => {
                                e(t.getEntries())
                            }));
                            return r.observe(Object.assign({
                                type: t,
                                buffered: !0
                            }, n || {})), r
                        }
                    } catch (t) {}
                },
                he = (t, e) => {
                    const n = r => {
                        "pagehide" !== r.type && "hidden" !== ce.document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                };
            let fe = -1;
            const ge = () => (fe < 0 && (fe = "hidden" !== ce.document.visibilityState || ce.document.prerendering ? 1 / 0 : 0, he((({
                    timeStamp: t
                }) => {
                    fe = t
                }), !0)), {
                    get firstHiddenTime() {
                        return fe
                    }
                }),
                me = {};

            function ye(t) {
                return "number" == typeof t && isFinite(t)
            }

            function Ee(t, {
                startTimestamp: e,
                ...n
            }) {
                return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
                    startTimestamp: e,
                    ...n
                })
            }

            function ve() {
                return ce && ce.addEventListener && ce.performance
            }
            let Se, Te, be = 0,
                Re = {};

            function De() {
                const t = ve();
                t && L.Z1 && (t.mark && ce.performance.mark("sentry-tracing-init"), (t => {
                    const n = pe("CLS", 0);
                    let r, i = 0,
                        s = [];
                    const o = t => {
                            t.forEach((t => {
                                if (!t.hadRecentInput) {
                                    const e = s[0],
                                        o = s[s.length - 1];
                                    i && 0 !== s.length && t.startTime - o.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (i += t.value, s.push(t)) : (i = t.value, s = [t]), i > n.value && (n.value = i, n.entries = s, r && r())
                                }
                            }))
                        },
                        a = le("layout-shift", o);
                    a && (r = ue((t => {
                        const n = t.entries.pop();
                        n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding CLS"), Re.cls = {
                            value: t.value,
                            unit: ""
                        }, Te = n)
                    }), n), he((() => {
                        o(a.takeRecords()), r(!0)
                    })))
                })(), (t => {
                    const n = ge(),
                        r = pe("LCP");
                    let i;
                    const s = t => {
                            const e = t[t.length - 1];
                            if (e) {
                                const t = Math.max(e.startTime - de(), 0);
                                t < n.firstHiddenTime && (r.value = t, r.entries = [e], i())
                            }
                        },
                        o = le("largest-contentful-paint", s);
                    if (o) {
                        i = ue((t => {
                            const n = t.entries.pop();
                            n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding LCP"), Re.lcp = {
                                value: t.value,
                                unit: "millisecond"
                            }, Se = n)
                        }), r);
                        const t = () => {
                            me[r.id] || (s(o.takeRecords()), o.disconnect(), me[r.id] = !0, i(!0))
                        };
                        ["keydown", "click"].forEach((e => {
                            addEventListener(e, t, {
                                once: !0,
                                capture: !0
                            })
                        })), he(t, !0)
                    }
                })(), (t => {
                    const n = ge(),
                        r = pe("FID");
                    let i;
                    const s = t => {
                            t.startTime < n.firstHiddenTime && (r.value = t.processingStart - t.startTime, r.entries.push(t), i(!0))
                        },
                        o = t => {
                            t.forEach(s)
                        },
                        a = le("first-input", o);
                    i = ue((t => {
                        const n = t.entries.pop();
                        if (!n) return;
                        const r = (0, ae.XL)(L.Z1),
                            i = (0, ae.XL)(n.startTime);
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding FID"), Re.fid = {
                            value: t.value,
                            unit: "millisecond"
                        }, Re["mark.fid"] = {
                            value: r + i,
                            unit: "second"
                        }
                    }), r), a && he((() => {
                        o(a.takeRecords()), a.disconnect()
                    }), !0)
                })())
            }

            function xe(t, e, n, r, i, s) {
                const o = s ? e[s] : e[`${n}End`],
                    a = e[`${n}Start`];
                a && o && Ee(t, {
                    op: "browser",
                    description: (0, te.h)(i, (() => n)),
                    startTimestamp: r + (0, ae.XL)(a),
                    endTimestamp: r + (0, ae.XL)(o)
                })
            }
            const ke = ["localhost", /^\//],
                Ne = {
                    traceFetch: !0,
                    traceXHR: !0,
                    tracingOrigins: ke,
                    tracePropagationTargets: ke
                };
            const we = {
                idleTimeout: oe.nT,
                finalTimeout: oe.mg,
                heartbeatInterval: oe.hd,
                markBackgroundTransactions: !0,
                routingInstrumentation: function(t, n = !0, r = !0) {
                    if (!ce || !ce.location) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("Could not initialize routing instrumentation due to invalid location"));
                    let i, s = ce.location.href;
                    n && (i = t({
                        name: ce.location.pathname,
                        op: "pageload",
                        metadata: {
                            source: "url"
                        }
                    })), r && (0, m.o)("history", (({
                        to: n,
                        from: r
                    }) => {
                        void 0 === r && s && -1 !== s.indexOf(n) ? s = void 0 : r !== n && (s = void 0, i && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`[Tracing] Finishing current transaction with op: ${i.op}`), i.finish()), i = t({
                            name: ce.location.pathname,
                            op: "navigation",
                            metadata: {
                                source: "url"
                            }
                        }))
                    }))
                },
                startTransactionOnLocationChange: !0,
                startTransactionOnPageLoad: !0,
                _experiments: {
                    enableLongTask: !0,
                    enableInteractions: !1
                },
                ...Ne
            };
            class Ue {
                __init() {
                    this.name = "BrowserTracing"
                }
                constructor(t) {
                    Ue.prototype.__init.call(this), this.options = { ...we,
                        ...t
                    }, t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), De(), y([this, "access", t => t.options, "access", t => t._experiments, "optionalAccess", t => t.enableLongTask]) && le("longtask", (t => {
                        for (const e of t) {
                            const t = (0, ae.x1)();
                            if (!t) return;
                            const n = (0, ae.XL)(L.Z1 + e.startTime),
                                r = (0, ae.XL)(e.duration);
                            t.startChild({
                                description: "Main UI thread blocked",
                                op: "ui.long-task",
                                startTimestamp: n,
                                endTimestamp: n + r
                            })
                        }
                    }))
                }
                setupOnce(t, n) {
                    this._getCurrentHub = n;
                    const {
                        routingInstrumentation: r,
                        startTransactionOnLocationChange: i,
                        startTransactionOnPageLoad: s,
                        markBackgroundTransactions: o,
                        traceFetch: a,
                        traceXHR: u,
                        tracePropagationTargets: _,
                        shouldCreateSpanForRequest: d,
                        _experiments: p
                    } = this.options;
                    r((t => this._createRouteTransaction(t)), s, i), o && (ce && ce.document ? ce.document.addEventListener("visibilitychange", (() => {
                            const t = (0, ae.x1)();
                            if (ce.document.hidden && t) {
                                const n = "cancelled";
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${t.op}`), t.status || t.setStatus(n), t.setTag("visibilitychange", "document.hidden"), t.finish()
                            }
                        })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")), y([p, "optionalAccess", t => t.enableInteractions]) && this._registerInteractionListener(),
                        function(t) {
                            const {
                                traceFetch: e,
                                traceXHR: n,
                                tracePropagationTargets: r,
                                tracingOrigins: i,
                                shouldCreateSpanForRequest: s
                            } = {
                                traceFetch: Ne.traceFetch,
                                traceXHR: Ne.traceXHR,
                                ...t
                            }, o = "function" == typeof s ? s : t => !0, a = t => function(t, e) {
                                return (0, c.U0)(t, e || ke)
                            }(t, r || i), u = {};
                            e && (0, m.o)("fetch", (t => {
                                ! function(t, e, n, r) {
                                    if (!(0, ae.zu)() || !t.fetchData || !e(t.fetchData.url)) return;
                                    if (t.endTimestamp) {
                                        const e = t.fetchData.__span;
                                        if (!e) return;
                                        const n = r[e];
                                        return void(n && (t.response ? n.setHttpStatus(t.response.status) : t.error && n.setStatus("internal_error"), n.finish(), delete r[e]))
                                    }
                                    const i = (0, ae.x1)();
                                    if (i) {
                                        const e = i.startChild({
                                            data: { ...t.fetchData,
                                                type: "fetch"
                                            },
                                            description: `${t.fetchData.method} ${t.fetchData.url}`,
                                            op: "http.client"
                                        });
                                        t.fetchData.__span = e.spanId, r[e.spanId] = e;
                                        const s = t.args[0];
                                        t.args[1] = t.args[1] || {};
                                        const o = t.args[1];
                                        n(t.fetchData.url) && (o.headers = function(t, e, n, r) {
                                            const i = ie(e),
                                                s = n.toTraceparent(),
                                                o = "undefined" != typeof Request && (0, b.V9)(t, Request) ? t.headers : r.headers;
                                            if (o) {
                                                if ("undefined" != typeof Headers && (0, b.V9)(o, Headers)) {
                                                    const t = new Headers(o);
                                                    return t.append("sentry-trace", s), i && t.append(ne, i), t
                                                }
                                                if (Array.isArray(o)) {
                                                    const t = [...o, ["sentry-trace", s]];
                                                    return i && t.push([ne, i]), t
                                                } {
                                                    const t = "baggage" in o ? o.baggage : void 0,
                                                        e = [];
                                                    return Array.isArray(t) ? e.push(...t) : t && e.push(t), i && e.push(i), { ...o,
                                                        "sentry-trace": s,
                                                        baggage: e.length > 0 ? e.join(",") : void 0
                                                    }
                                                }
                                            }
                                            return {
                                                "sentry-trace": s,
                                                baggage: i
                                            }
                                        }(s, i.getDynamicSamplingContext(), e, o), i.metadata.propagations++)
                                    }
                                }(t, o, a, u)
                            })), n && (0, m.o)("xhr", (t => {
                                ! function(t, e, n, r) {
                                    if (!(0, ae.zu)() || t.xhr && t.xhr.__sentry_own_request__ || !(t.xhr && t.xhr.__sentry_xhr__ && e(t.xhr.__sentry_xhr__.url))) return;
                                    const i = t.xhr.__sentry_xhr__;
                                    if (t.endTimestamp) {
                                        const e = t.xhr.__sentry_xhr_span_id__;
                                        if (!e) return;
                                        const n = r[e];
                                        return void(n && (n.setHttpStatus(i.status_code), n.finish(), delete r[e]))
                                    }
                                    const s = (0, ae.x1)();
                                    if (s) {
                                        const e = s.startChild({
                                            data: { ...i.data,
                                                type: "xhr",
                                                method: i.method,
                                                url: i.url
                                            },
                                            description: `${i.method} ${i.url}`,
                                            op: "http.client"
                                        });
                                        if (t.xhr.__sentry_xhr_span_id__ = e.spanId, r[t.xhr.__sentry_xhr_span_id__] = e, t.xhr.setRequestHeader && n(t.xhr.__sentry_xhr__.url)) try {
                                            t.xhr.setRequestHeader("sentry-trace", e.toTraceparent());
                                            const n = ie(s.getDynamicSamplingContext());
                                            n && t.xhr.setRequestHeader(ne, n), s.metadata.propagations++
                                        } catch (t) {}
                                    }
                                }(t, o, a, u)
                            }))
                        }({
                            traceFetch: a,
                            traceXHR: u,
                            tracePropagationTargets: _,
                            shouldCreateSpanForRequest: d
                        })
                }
                _createRouteTransaction(t) {
                    if (!this._getCurrentHub) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
                    const {
                        beforeNavigate: n,
                        idleTimeout: r,
                        finalTimeout: i,
                        heartbeatInterval: s
                    } = this.options, o = "pageload" === t.op, a = o ? Be("sentry-trace") : null, c = o ? Be("baggage") : null, u = a ? function(t) {
                        const e = t.match(ee);
                        if (!t || !e) return;
                        let n;
                        return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
                            traceId: e[1],
                            parentSampled: n,
                            parentSpanId: e[2]
                        }
                    }(a) : void 0, _ = c ? function(t) {
                        if (!(0, b.HD)(t) && !Array.isArray(t)) return;
                        let e = {};
                        if (Array.isArray(t)) e = t.reduce(((t, e) => ({ ...t,
                            ...se(e)
                        })), {});
                        else {
                            if (!t) return;
                            e = se(t)
                        }
                        const n = Object.entries(e).reduce(((t, [e, n]) => (e.match(re) && (t[e.slice("sentry-".length)] = n), t)), {});
                        return Object.keys(n).length > 0 ? n : void 0
                    }(c) : void 0, d = { ...t,
                        ...u,
                        metadata: { ...t.metadata,
                            dynamicSamplingContext: u && !_ ? {} : _
                        },
                        trimEnd: !0
                    }, p = "function" == typeof n ? n(d) : d, l = void 0 === p ? { ...d,
                        sampled: !1
                    } : p;
                    l.metadata = l.name !== d.name ? { ...l.metadata,
                        source: "custom"
                    } : l.metadata, this._latestRouteName = l.name, this._latestRouteSource = y([l, "access", t => t.metadata, "optionalAccess", t => t.source]), !1 === l.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`[Tracing] Will not send ${l.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`[Tracing] Starting ${l.op} transaction on scope`);
                    const h = this._getCurrentHub(),
                        {
                            location: f
                        } = ce,
                        g = (0, Qt.lb)(h, l, r, i, !0, {
                            location: f
                        }, s);
                    return g.registerBeforeFinishCallback((t => {
                        ! function(t) {
                            const n = ve();
                            if (!n || !ce.performance.getEntries || !L.Z1) return;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Tracing] Adding & adjusting spans using Performance API");
                            const r = (0, ae.XL)(L.Z1),
                                i = n.getEntries();
                            let s, o;
                            if (i.slice(be).forEach((n => {
                                    const i = (0, ae.XL)(n.startTime),
                                        a = (0, ae.XL)(n.duration);
                                    if (!("navigation" === t.op && r + i < t.startTimestamp)) switch (n.entryType) {
                                        case "navigation":
                                            ! function(t, e, n) {
                                                ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                                        xe(t, e, r, n)
                                                    })), xe(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), xe(t, e, "fetch", n, "cache", "domainLookupStart"), xe(t, e, "domainLookup", n, "DNS"),
                                                    function(t, e, n) {
                                                        Ee(t, {
                                                            op: "browser",
                                                            description: "request",
                                                            startTimestamp: n + (0, ae.XL)(e.requestStart),
                                                            endTimestamp: n + (0, ae.XL)(e.responseEnd)
                                                        }), Ee(t, {
                                                            op: "browser",
                                                            description: "response",
                                                            startTimestamp: n + (0, ae.XL)(e.responseStart),
                                                            endTimestamp: n + (0, ae.XL)(e.responseEnd)
                                                        })
                                                    }(t, e, n)
                                            }(t, n, r), s = r + (0, ae.XL)(n.responseStart), o = r + (0, ae.XL)(n.requestStart);
                                            break;
                                        case "mark":
                                        case "paint":
                                        case "measure":
                                            {! function(t, e, n, r, i) {
                                                    const s = i + n,
                                                        o = s + r;
                                                    Ee(t, {
                                                        description: e.name,
                                                        endTimestamp: o,
                                                        op: e.entryType,
                                                        startTimestamp: s
                                                    })
                                                }(t, n, i, a, r);
                                                const s = ge(),
                                                    o = n.startTime < s.firstHiddenTime;
                                                "first-paint" === n.name && o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding FP"), Re.fp = {
                                                    value: n.startTime,
                                                    unit: "millisecond"
                                                }),
                                                "first-contentful-paint" === n.name && o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding FCP"), Re.fcp = {
                                                    value: n.startTime,
                                                    unit: "millisecond"
                                                });
                                                break
                                            }
                                        case "resource":
                                            {
                                                const e = n.name.replace(ce.location.origin, "");! function(t, e, n, r, i, s) {
                                                    if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                                                    const o = {};
                                                    "transferSize" in e && (o["Transfer Size"] = e.transferSize), "encodedBodySize" in e && (o["Encoded Body Size"] = e.encodedBodySize), "decodedBodySize" in e && (o["Decoded Body Size"] = e.decodedBodySize);
                                                    const a = s + r;
                                                    Ee(t, {
                                                        description: n,
                                                        endTimestamp: a + i,
                                                        op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                                        startTimestamp: a,
                                                        data: o
                                                    })
                                                }(t, n, e, i, a, r);
                                                break
                                            }
                                    }
                                })), be = Math.max(i.length - 1, 0), function(t) {
                                    const e = ce.navigator;
                                    if (!e) return;
                                    const n = e.connection;
                                    n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), ye(n.rtt) && (Re["connection.rtt"] = {
                                        value: n.rtt,
                                        unit: "millisecond"
                                    })), ye(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), ye(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                                }(t), "pageload" === t.op) {
                                "number" == typeof s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding TTFB"), Re.ttfb = {
                                    value: 1e3 * (s - t.startTimestamp),
                                    unit: "millisecond"
                                }, "number" == typeof o && o <= s && (Re["ttfb.requestTime"] = {
                                    value: 1e3 * (s - o),
                                    unit: "millisecond"
                                })), ["fcp", "fp", "lcp"].forEach((n => {
                                    if (!Re[n] || r >= t.startTimestamp) return;
                                    const i = Re[n].value,
                                        s = r + (0, ae.XL)(i),
                                        o = Math.abs(1e3 * (s - t.startTimestamp)),
                                        a = o - i;
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log(`[Measurements] Normalized ${n} from ${i} to ${o} (${a})`), Re[n].value = o
                                }));
                                const n = Re["mark.fid"];
                                n && Re.fid && (Ee(t, {
                                        description: "first input delay",
                                        endTimestamp: n.value + (0, ae.XL)(Re.fid.value),
                                        op: "ui.action",
                                        startTimestamp: n.value
                                    }), delete Re["mark.fid"]), "fcp" in Re || delete Re.cls, Object.keys(Re).forEach((e => {
                                        t.setMeasurement(e, Re[e].value, Re[e].unit)
                                    })),
                                    function(t) {
                                        Se && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding LCP Data"), Se.element && t.setTag("lcp.element", (0, ot.Rt)(Se.element)), Se.id && t.setTag("lcp.id", Se.id), Se.url && t.setTag("lcp.url", Se.url.trim().slice(0, 200)), t.setTag("lcp.size", Se.size)), Te && Te.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.log("[Measurements] Adding CLS Data"), Te.sources.forEach(((e, n) => t.setTag(`cls.source.${n+1}`, (0, ot.Rt)(e.node)))))
                                    }(t)
                            }
                            Se = void 0, Te = void 0, Re = {}
                        }(t)
                    })), g
                }
                _registerInteractionListener() {
                    let t;
                    const n = () => {
                        const {
                            idleTimeout: n,
                            finalTimeout: r,
                            heartbeatInterval: i
                        } = this.options, s = "ui.action.click";
                        if (t && (t.finish(), t = void 0), !this._getCurrentHub) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`));
                        if (!this._latestRouteName) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`));
                        const o = this._getCurrentHub(),
                            {
                                location: a
                            } = ce,
                            c = {
                                name: this._latestRouteName,
                                op: s,
                                trimEnd: !0,
                                metadata: {
                                    source: (0, te.h)(this._latestRouteSource, (() => "url"))
                                }
                            };
                        t = (0, Qt.lb)(o, c, n, r, !0, {
                            location: a
                        }, i)
                    };
                    ["click"].forEach((t => {
                        addEventListener(t, n, {
                            once: !1,
                            capture: !0
                        })
                    }))
                }
            }

            function Be(t) {
                const e = (0, ot.qT)(`meta[name=${t}]`);
                return e ? e.getAttribute("content") : null
            }("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (0, Qt.ro)();
            class Ge {
                static __initStatic() {
                    this.id = "ExtraErrorData"
                }
                __init() {
                    this.name = Ge.id
                }
                constructor(t) {
                    Ge.prototype.__init.call(this), this._options = {
                        depth: 3,
                        ...t
                    }
                }
                setupOnce(t, e) {
                    t(((t, n) => {
                        const r = e().getIntegration(Ge);
                        return r ? r.enhanceEventWithErrorData(t, n) : t
                    }))
                }
                enhanceEventWithErrorData(t, e = {}) {
                    if (!e.originalException || !(0, b.VZ)(e.originalException)) return t;
                    const n = e.originalException.name || e.originalException.constructor.name,
                        r = this._extractErrorData(e.originalException);
                    if (r) {
                        const e = { ...t.contexts
                            },
                            i = D(r, this._options.depth);
                        return (0, b.PO)(i) && ((0, p.xp)(i, "__sentry_skip_normalization__", !0), e[n] = i), { ...t,
                            contexts: e
                        }
                    }
                    return t
                }
                _extractErrorData(t) {
                    try {
                        const e = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                            n = {};
                        for (const r of Object.keys(t)) {
                            if (-1 !== e.indexOf(r)) continue;
                            const i = t[r];
                            n[r] = (0, b.VZ)(i) ? i.toString() : i
                        }
                        if ("function" == typeof t.toJSON) {
                            const e = t.toJSON();
                            for (const t of Object.keys(e)) {
                                const r = e[t];
                                n[t] = (0, b.VZ)(r) ? r.toString() : r
                            }
                        }
                        return n
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.error("Unable to extract extra data from the Error object:", t)
                    }
                    return null
                }
            }
            Ge.__initStatic(),
                function(t = {}) {
                    void 0 === t.defaultIntegrations && (t.defaultIntegrations = Kt), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), et.SENTRY_RELEASE && et.SENTRY_RELEASE.id && (t.release = et.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
                    const n = { ...t,
                        stackParser: (0, f.Sq)(t.stackParser || Rt),
                        integrations: o(t),
                        transport: t.transport || ((0, g.Ak)() ? Jt : Vt)
                    };
                    ! function(t, n) {
                        !0 === n.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? e.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                        const i = (0, r.Gd)(),
                            s = i.getScope();
                        s && s.update(n.initialScope);
                        const o = new t(n);
                        i.bindClient(o)
                    }(ft, n), t.autoSessionTracking && function() {
                        if (void 0 === et.document) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                        const t = (0, r.Gd)();
                        t.captureSession && (Zt(t), (0, m.o)("history", (({
                            from: t,
                            to: e
                        }) => {
                            void 0 !== t && t !== e && Zt((0, r.Gd)())
                        })))
                    }()
                }({
                    dsn: window.pet_config.sentry_dsn_frontend,
                    integrations: [new Ue, new Ge],
                    tracesSampleRate: .01,
                    allowUrls: [/https?:\/\/(?:www\.)?doggy-plan\.com/]
                }),
                function() {
                    const t = window.location.search;
                    if (t.includes("mail_id"))
                        for (const [e, n] of new URLSearchParams(t)) "mail_id" === e && window.localStorage.setItem("utm_mail_id", n)
                }()
        }()
}();