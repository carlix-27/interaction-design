try {
    (() => {
        var io = Object.create;
        var wt = Object.defineProperty;
        var ao = Object.getOwnPropertyDescriptor;
        var so = Object.getOwnPropertyNames;
        var lo = Object.getPrototypeOf,
            co = Object.prototype.hasOwnProperty;
        var ye = (e, t) => () => (e && (t = e((e = 0))), t);
        var uo = (e, t) => () => (
                t || e((t = { exports: {} }).exports, t),
                t.exports
            ),
            gn = (e, t) => {
                for (var n in t) wt(e, n, { get: t[n], enumerable: !0 });
            },
            bn = (e, t, n, r) => {
                if ((t && typeof t == "object") || typeof t == "function")
                    for (let i of so(t))
                        !co.call(e, i) &&
                            i !== n &&
                            wt(e, i, {
                                get: () => t[i],
                                enumerable: !(r = ao(t, i)) || r.enumerable,
                            });
                return e;
            };
        var po = (e, t, n) => (
                (n = e != null ? io(lo(e)) : {}),
                bn(
                    t || !e || !e.__esModule
                        ? wt(n, "default", { value: e, enumerable: !0 })
                        : n,
                    e,
                )
            ),
            vn = e => bn(wt({}, "__esModule", { value: !0 }), e);
        var X = ye(() => {});
        var Q = ye(() => {});
        var Z = ye(() => {});
        var St = {};
        gn(St, {
            Children: () => fo,
            Component: () => _e,
            Fragment: () => ho,
            Profiler: () => yo,
            PureComponent: () => mo,
            StrictMode: () => go,
            Suspense: () => Wt,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => bo,
            cloneElement: () => vo,
            createContext: () => Eo,
            createElement: () => V,
            createFactory: () => Oo,
            createRef: () => wo,
            default: () => E,
            forwardRef: () => Ut,
            isValidElement: () => Ht,
            lazy: () => Gt,
            memo: () => So,
            startTransition: () => To,
            unstable_act: () => Io,
            useCallback: () => ze,
            useContext: () => Co,
            useDebugValue: () => Po,
            useDeferredValue: () => Ro,
            useEffect: () => ce,
            useId: () => xo,
            useImperativeHandle: () => _o,
            useInsertionEffect: () => Ao,
            useLayoutEffect: () => ko,
            useMemo: () => No,
            useReducer: () => jo,
            useRef: () => Mo,
            useState: () => ue,
            useSyncExternalStore: () => Lo,
            useTransition: () => Do,
            version: () => Fo,
        });
        var E,
            fo,
            _e,
            ho,
            yo,
            mo,
            go,
            Wt,
            bo,
            vo,
            Eo,
            V,
            Oo,
            wo,
            Ut,
            Ht,
            Gt,
            So,
            To,
            Io,
            ze,
            Co,
            Po,
            Ro,
            ce,
            xo,
            _o,
            Ao,
            ko,
            No,
            jo,
            Mo,
            ue,
            Lo,
            Do,
            Fo,
            Ye = ye(() => {
                X();
                Q();
                Z();
                ((E = __REACT__),
                    ({
                        Children: fo,
                        Component: _e,
                        Fragment: ho,
                        Profiler: yo,
                        PureComponent: mo,
                        StrictMode: go,
                        Suspense: Wt,
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: bo,
                        cloneElement: vo,
                        createContext: Eo,
                        createElement: V,
                        createFactory: Oo,
                        createRef: wo,
                        forwardRef: Ut,
                        isValidElement: Ht,
                        lazy: Gt,
                        memo: So,
                        startTransition: To,
                        unstable_act: Io,
                        useCallback: ze,
                        useContext: Co,
                        useDebugValue: Po,
                        useDeferredValue: Ro,
                        useEffect: ce,
                        useId: xo,
                        useImperativeHandle: _o,
                        useInsertionEffect: Ao,
                        useLayoutEffect: ko,
                        useMemo: No,
                        useReducer: jo,
                        useRef: Mo,
                        useState: ue,
                        useSyncExternalStore: Lo,
                        useTransition: Do,
                        version: Fo,
                    } = __REACT__));
            });
        var De,
            tl,
            it,
            nl,
            rl,
            ol,
            il,
            al,
            sl,
            En,
            ll,
            On,
            cl,
            Tt = ye(() => {
                X();
                Q();
                Z();
                ((De = __REACT_DOM__),
                    ({
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tl,
                        createPortal: it,
                        createRoot: nl,
                        findDOMNode: rl,
                        flushSync: ol,
                        hydrate: il,
                        hydrateRoot: al,
                        render: sl,
                        unmountComponentAtNode: En,
                        unstable_batchedUpdates: ll,
                        unstable_renderSubtreeIntoContainer: On,
                        version: cl,
                    } = __REACT_DOM__));
            });
        var dl,
            hl,
            yl,
            ml,
            gl,
            bl,
            vl,
            El,
            Ol,
            wl,
            Sl,
            Tl,
            Il,
            Cl,
            Pl,
            Rl,
            xl,
            _l,
            Al,
            kl,
            Nl,
            jl,
            Ml,
            Ll,
            Dl,
            Fl,
            wn,
            Bl,
            Wl,
            Ul,
            Hl,
            Gl,
            zl,
            Yl,
            ql,
            $l,
            Vl,
            Kl,
            Jl,
            Xl,
            Ql,
            Zl,
            ec,
            tc,
            nc,
            rc,
            oc,
            Sn,
            ic,
            ac,
            sc,
            lc,
            cc,
            uc,
            pc,
            fc,
            Tn = ye(() => {
                X();
                Q();
                Z();
                ((dl = __STORYBOOK_CORE_EVENTS__),
                    ({
                        ARGTYPES_INFO_REQUEST: hl,
                        ARGTYPES_INFO_RESPONSE: yl,
                        CHANNEL_CREATED: ml,
                        CHANNEL_WS_DISCONNECT: gl,
                        CONFIG_ERROR: bl,
                        CREATE_NEW_STORYFILE_REQUEST: vl,
                        CREATE_NEW_STORYFILE_RESPONSE: El,
                        CURRENT_STORY_WAS_SET: Ol,
                        DOCS_PREPARED: wl,
                        DOCS_RENDERED: Sl,
                        FILE_COMPONENT_SEARCH_REQUEST: Tl,
                        FILE_COMPONENT_SEARCH_RESPONSE: Il,
                        FORCE_REMOUNT: Cl,
                        FORCE_RE_RENDER: Pl,
                        GLOBALS_UPDATED: Rl,
                        NAVIGATE_URL: xl,
                        PLAY_FUNCTION_THREW_EXCEPTION: _l,
                        PRELOAD_ENTRIES: Al,
                        PREVIEW_BUILDER_PROGRESS: kl,
                        PREVIEW_KEYDOWN: Nl,
                        REGISTER_SUBSCRIPTION: jl,
                        REQUEST_WHATS_NEW_DATA: Ml,
                        RESET_STORY_ARGS: Ll,
                        RESULT_WHATS_NEW_DATA: Dl,
                        SAVE_STORY_REQUEST: Fl,
                        SAVE_STORY_RESPONSE: wn,
                        SELECT_STORY: Bl,
                        SET_CONFIG: Wl,
                        SET_CURRENT_STORY: Ul,
                        SET_FILTER: Hl,
                        SET_GLOBALS: Gl,
                        SET_INDEX: zl,
                        SET_STORIES: Yl,
                        SET_WHATS_NEW_CACHE: ql,
                        SHARED_STATE_CHANGED: $l,
                        SHARED_STATE_SET: Vl,
                        STORIES_COLLAPSE_ALL: Kl,
                        STORIES_EXPAND_ALL: Jl,
                        STORY_ARGS_UPDATED: Xl,
                        STORY_CHANGED: Ql,
                        STORY_ERRORED: Zl,
                        STORY_INDEX_INVALIDATED: ec,
                        STORY_MISSING: tc,
                        STORY_PREPARED: nc,
                        STORY_RENDERED: rc,
                        STORY_RENDER_PHASE_CHANGED: oc,
                        STORY_SPECIFIED: Sn,
                        STORY_THREW_EXCEPTION: ic,
                        STORY_UNCHANGED: ac,
                        TELEMETRY_ERROR: sc,
                        TOGGLE_WHATS_NEW_NOTIFICATIONS: lc,
                        UNHANDLED_ERRORS_WHILE_PLAYING: cc,
                        UPDATE_GLOBALS: uc,
                        UPDATE_QUERY_PARAMS: pc,
                        UPDATE_STORY_ARGS: fc,
                    } = __STORYBOOK_CORE_EVENTS__));
            });
        var zt = ye(() => {
            X();
            Q();
            Z();
            Tn();
        });
        var ou,
            iu,
            au,
            su,
            lu,
            cu,
            uu,
            pu,
            fu,
            du,
            hu,
            yu,
            mu,
            gu,
            bu,
            vu,
            Eu,
            Ou,
            wu,
            Su,
            Tu,
            Iu,
            Cu,
            Pu,
            Cn,
            Ru,
            xu,
            _u,
            Au,
            ku,
            Nu,
            ju,
            Mu,
            Lu,
            Du,
            Fu,
            Bu,
            Wu,
            Uu,
            Hu,
            Gu,
            zu,
            Yu,
            qu,
            $u,
            Pn,
            Vu,
            Ku,
            Ju,
            Xu,
            Qu,
            Zu,
            ep,
            tp,
            np,
            rp,
            op,
            ip,
            ap,
            sp,
            lp,
            cp,
            up,
            pp,
            fp,
            dp,
            hp,
            yp,
            mp,
            Rn = ye(() => {
                X();
                Q();
                Z();
                ((ou = __STORYBOOK_COMPONENTS__),
                    ({
                        A: iu,
                        ActionBar: au,
                        AddonPanel: su,
                        Badge: lu,
                        Bar: cu,
                        Blockquote: uu,
                        Button: pu,
                        ClipboardCode: fu,
                        Code: du,
                        DL: hu,
                        Div: yu,
                        DocumentWrapper: mu,
                        EmptyTabContent: gu,
                        ErrorFormatter: bu,
                        FlexBar: vu,
                        Form: Eu,
                        H1: Ou,
                        H2: wu,
                        H3: Su,
                        H4: Tu,
                        H5: Iu,
                        H6: Cu,
                        HR: Pu,
                        IconButton: Cn,
                        IconButtonSkeleton: Ru,
                        Icons: xu,
                        Img: _u,
                        LI: Au,
                        Link: ku,
                        ListItem: Nu,
                        Loader: ju,
                        Modal: Mu,
                        OL: Lu,
                        P: Du,
                        Placeholder: Fu,
                        Pre: Bu,
                        ResetWrapper: Wu,
                        ScrollArea: Uu,
                        Separator: Hu,
                        Spaced: Gu,
                        Span: zu,
                        StorybookIcon: Yu,
                        StorybookLogo: qu,
                        Symbols: $u,
                        SyntaxHighlighter: Pn,
                        TT: Vu,
                        TabBar: Ku,
                        TabButton: Ju,
                        TabWrapper: Xu,
                        Table: Qu,
                        Tabs: Zu,
                        TabsState: ep,
                        TooltipLinkList: tp,
                        TooltipMessage: np,
                        TooltipNote: rp,
                        UL: op,
                        WithTooltip: ip,
                        WithTooltipPure: ap,
                        Zoom: sp,
                        codeCommon: lp,
                        components: cp,
                        createCopyToClipboardFunction: up,
                        getStoryHref: pp,
                        icons: fp,
                        interleaveSeparators: dp,
                        nameSpaceClassNames: hp,
                        resetComponents: yp,
                        withReset: mp,
                    } = __STORYBOOK_COMPONENTS__));
            });
        var Op,
            wp,
            Sp,
            Tp,
            Yt,
            Ip,
            It,
            qt,
            Cp,
            Pp,
            Rp,
            xp,
            _p,
            Ap,
            kp,
            Np,
            jp,
            Mp,
            at,
            Lp,
            re,
            xn,
            Dp,
            _n,
            Fp,
            An = ye(() => {
                X();
                Q();
                Z();
                ((Op = __STORYBOOK_THEMING__),
                    ({
                        CacheProvider: wp,
                        ClassNames: Sp,
                        Global: Tp,
                        ThemeProvider: Yt,
                        background: Ip,
                        color: It,
                        convert: qt,
                        create: Cp,
                        createCache: Pp,
                        createGlobal: Rp,
                        createReset: xp,
                        css: _p,
                        darken: Ap,
                        ensure: kp,
                        ignoreSsrWarning: Np,
                        isPropValid: jp,
                        jsx: Mp,
                        keyframes: at,
                        lighten: Lp,
                        styled: re,
                        themes: xn,
                        typography: Dp,
                        useTheme: _n,
                        withTheme: Fp,
                    } = __STORYBOOK_THEMING__));
            });
        var kn = uo((st, $t) => {
            X();
            Q();
            Z();
            (function (e, t) {
                typeof st == "object" && typeof $t == "object"
                    ? ($t.exports = t((Ye(), vn(St))))
                    : typeof define == "function" && define.amd
                      ? define(["react"], t)
                      : typeof st == "object"
                        ? (st.ReactConfetti = t((Ye(), vn(St))))
                        : (e.ReactConfetti = t(e.React));
            })(typeof self < "u" ? self : st, function (e) {
                return (function (t) {
                    var n = {};
                    function r(i) {
                        if (n[i]) return n[i].exports;
                        var o = (n[i] = { i, l: !1, exports: {} });
                        return (
                            t[i].call(o.exports, o, o.exports, r),
                            (o.l = !0),
                            o.exports
                        );
                    }
                    return (
                        (r.m = t),
                        (r.c = n),
                        (r.d = function (i, o, a) {
                            r.o(i, o) ||
                                Object.defineProperty(i, o, {
                                    enumerable: !0,
                                    get: a,
                                });
                        }),
                        (r.r = function (i) {
                            (typeof Symbol < "u" &&
                                Symbol.toStringTag &&
                                Object.defineProperty(i, Symbol.toStringTag, {
                                    value: "Module",
                                }),
                                Object.defineProperty(i, "__esModule", {
                                    value: !0,
                                }));
                        }),
                        (r.t = function (i, o) {
                            if (
                                (1 & o && (i = r(i)),
                                8 & o ||
                                    (4 & o &&
                                        typeof i == "object" &&
                                        i &&
                                        i.__esModule))
                            )
                                return i;
                            var a = Object.create(null);
                            if (
                                (r.r(a),
                                Object.defineProperty(a, "default", {
                                    enumerable: !0,
                                    value: i,
                                }),
                                2 & o && typeof i != "string")
                            )
                                for (var s in i)
                                    r.d(
                                        a,
                                        s,
                                        function (l) {
                                            return i[l];
                                        }.bind(null, s),
                                    );
                            return a;
                        }),
                        (r.n = function (i) {
                            var o =
                                i && i.__esModule
                                    ? function () {
                                          return i.default;
                                      }
                                    : function () {
                                          return i;
                                      };
                            return (r.d(o, "a", o), o);
                        }),
                        (r.o = function (i, o) {
                            return Object.prototype.hasOwnProperty.call(i, o);
                        }),
                        (r.p = ""),
                        r((r.s = 2))
                    );
                })([
                    function (t, n) {
                        t.exports = e;
                    },
                    function (t, n, r) {
                        "use strict";
                        var i = {
                            linear: function (o, a, s, l) {
                                return ((s - a) * o) / l + a;
                            },
                            easeInQuad: function (o, a, s, l) {
                                return (s - a) * (o /= l) * o + a;
                            },
                            easeOutQuad: function (o, a, s, l) {
                                return -(s - a) * (o /= l) * (o - 2) + a;
                            },
                            easeInOutQuad: function (o, a, s, l) {
                                var c = s - a;
                                return (o /= l / 2) < 1
                                    ? (c / 2) * o * o + a
                                    : (-c / 2) * (--o * (o - 2) - 1) + a;
                            },
                            easeInCubic: function (o, a, s, l) {
                                return (s - a) * (o /= l) * o * o + a;
                            },
                            easeOutCubic: function (o, a, s, l) {
                                return (
                                    (s - a) * ((o = o / l - 1) * o * o + 1) + a
                                );
                            },
                            easeInOutCubic: function (o, a, s, l) {
                                var c = s - a;
                                return (o /= l / 2) < 1
                                    ? (c / 2) * o * o * o + a
                                    : (c / 2) * ((o -= 2) * o * o + 2) + a;
                            },
                            easeInQuart: function (o, a, s, l) {
                                return (s - a) * (o /= l) * o * o * o + a;
                            },
                            easeOutQuart: function (o, a, s, l) {
                                return (
                                    -(s - a) *
                                        ((o = o / l - 1) * o * o * o - 1) +
                                    a
                                );
                            },
                            easeInOutQuart: function (o, a, s, l) {
                                var c = s - a;
                                return (o /= l / 2) < 1
                                    ? (c / 2) * o * o * o * o + a
                                    : (-c / 2) * ((o -= 2) * o * o * o - 2) + a;
                            },
                            easeInQuint: function (o, a, s, l) {
                                return (s - a) * (o /= l) * o * o * o * o + a;
                            },
                            easeOutQuint: function (o, a, s, l) {
                                return (
                                    (s - a) *
                                        ((o = o / l - 1) * o * o * o * o + 1) +
                                    a
                                );
                            },
                            easeInOutQuint: function (o, a, s, l) {
                                var c = s - a;
                                return (o /= l / 2) < 1
                                    ? (c / 2) * o * o * o * o * o + a
                                    : (c / 2) * ((o -= 2) * o * o * o * o + 2) +
                                          a;
                            },
                            easeInSine: function (o, a, s, l) {
                                var c = s - a;
                                return (
                                    -c * Math.cos((o / l) * (Math.PI / 2)) +
                                    c +
                                    a
                                );
                            },
                            easeOutSine: function (o, a, s, l) {
                                return (
                                    (s - a) *
                                        Math.sin((o / l) * (Math.PI / 2)) +
                                    a
                                );
                            },
                            easeInOutSine: function (o, a, s, l) {
                                return (
                                    (-(s - a) / 2) *
                                        (Math.cos((Math.PI * o) / l) - 1) +
                                    a
                                );
                            },
                            easeInExpo: function (o, a, s, l) {
                                return o == 0
                                    ? a
                                    : (s - a) * Math.pow(2, 10 * (o / l - 1)) +
                                          a;
                            },
                            easeOutExpo: function (o, a, s, l) {
                                var c = s - a;
                                return o == l
                                    ? a + c
                                    : c * (1 - Math.pow(2, (-10 * o) / l)) + a;
                            },
                            easeInOutExpo: function (o, a, s, l) {
                                var c = s - a;
                                return o === 0
                                    ? a
                                    : o === l
                                      ? a + c
                                      : (o /= l / 2) < 1
                                        ? (c / 2) * Math.pow(2, 10 * (o - 1)) +
                                          a
                                        : (c / 2) *
                                              (2 - Math.pow(2, -10 * --o)) +
                                          a;
                            },
                            easeInCirc: function (o, a, s, l) {
                                return (
                                    -(s - a) *
                                        (Math.sqrt(1 - (o /= l) * o) - 1) +
                                    a
                                );
                            },
                            easeOutCirc: function (o, a, s, l) {
                                return (
                                    (s - a) *
                                        Math.sqrt(1 - (o = o / l - 1) * o) +
                                    a
                                );
                            },
                            easeInOutCirc: function (o, a, s, l) {
                                var c = s - a;
                                return (o /= l / 2) < 1
                                    ? (-c / 2) * (Math.sqrt(1 - o * o) - 1) + a
                                    : (c / 2) *
                                          (Math.sqrt(1 - (o -= 2) * o) + 1) +
                                          a;
                            },
                            easeInElastic: function (o, a, s, l) {
                                var c,
                                    p,
                                    u,
                                    f = s - a;
                                return (
                                    (u = 1.70158),
                                    o === 0
                                        ? a
                                        : (o /= l) == 1
                                          ? a + f
                                          : ((p = 0) || (p = 0.3 * l),
                                            (c = f) < Math.abs(f)
                                                ? ((c = f), (u = p / 4))
                                                : (u =
                                                      (p / (2 * Math.PI)) *
                                                      Math.asin(f / c)),
                                            -c *
                                                Math.pow(2, 10 * (o -= 1)) *
                                                Math.sin(
                                                    ((o * l - u) *
                                                        (2 * Math.PI)) /
                                                        p,
                                                ) +
                                                a)
                                );
                            },
                            easeOutElastic: function (o, a, s, l) {
                                var c,
                                    p,
                                    u,
                                    f = s - a;
                                return (
                                    (u = 1.70158),
                                    o === 0
                                        ? a
                                        : (o /= l) == 1
                                          ? a + f
                                          : ((p = 0) || (p = 0.3 * l),
                                            (c = f) < Math.abs(f)
                                                ? ((c = f), (u = p / 4))
                                                : (u =
                                                      (p / (2 * Math.PI)) *
                                                      Math.asin(f / c)),
                                            c *
                                                Math.pow(2, -10 * o) *
                                                Math.sin(
                                                    ((o * l - u) *
                                                        (2 * Math.PI)) /
                                                        p,
                                                ) +
                                                f +
                                                a)
                                );
                            },
                            easeInOutElastic: function (o, a, s, l) {
                                var c,
                                    p,
                                    u,
                                    f = s - a;
                                return (
                                    (u = 1.70158),
                                    o === 0
                                        ? a
                                        : (o /= l / 2) == 2
                                          ? a + f
                                          : ((p = 0) ||
                                                (p = l * 0.44999999999999996),
                                            (c = f) < Math.abs(f)
                                                ? ((c = f), (u = p / 4))
                                                : (u =
                                                      (p / (2 * Math.PI)) *
                                                      Math.asin(f / c)),
                                            o < 1
                                                ? c *
                                                      Math.pow(
                                                          2,
                                                          10 * (o -= 1),
                                                      ) *
                                                      Math.sin(
                                                          ((o * l - u) *
                                                              (2 * Math.PI)) /
                                                              p,
                                                      ) *
                                                      -0.5 +
                                                  a
                                                : c *
                                                      Math.pow(
                                                          2,
                                                          -10 * (o -= 1),
                                                      ) *
                                                      Math.sin(
                                                          ((o * l - u) *
                                                              (2 * Math.PI)) /
                                                              p,
                                                      ) *
                                                      0.5 +
                                                  f +
                                                  a)
                                );
                            },
                            easeInBack: function (o, a, s, l, c) {
                                return (
                                    c === void 0 && (c = 1.70158),
                                    (s - a) * (o /= l) * o * ((c + 1) * o - c) +
                                        a
                                );
                            },
                            easeOutBack: function (o, a, s, l, c) {
                                return (
                                    c === void 0 && (c = 1.70158),
                                    (s - a) *
                                        ((o = o / l - 1) *
                                            o *
                                            ((c + 1) * o + c) +
                                            1) +
                                        a
                                );
                            },
                            easeInOutBack: function (o, a, s, l, c) {
                                var p = s - a;
                                return (
                                    c === void 0 && (c = 1.70158),
                                    (o /= l / 2) < 1
                                        ? (p / 2) *
                                              (o *
                                                  o *
                                                  ((1 + (c *= 1.525)) * o -
                                                      c)) +
                                          a
                                        : (p / 2) *
                                              ((o -= 2) *
                                                  o *
                                                  ((1 + (c *= 1.525)) * o + c) +
                                                  2) +
                                          a
                                );
                            },
                            easeInBounce: function (o, a, s, l) {
                                var c = s - a;
                                return c - i.easeOutBounce(l - o, 0, c, l) + a;
                            },
                            easeOutBounce: function (o, a, s, l) {
                                var c = s - a;
                                return (o /= l) < 0.36363636363636365
                                    ? c * (7.5625 * o * o) + a
                                    : o < 0.7272727272727273
                                      ? c *
                                            (7.5625 *
                                                (o -= 0.5454545454545454) *
                                                o +
                                                0.75) +
                                        a
                                      : o < 0.9090909090909091
                                        ? c *
                                              (7.5625 *
                                                  (o -= 0.8181818181818182) *
                                                  o +
                                                  0.9375) +
                                          a
                                        : c *
                                              (7.5625 *
                                                  (o -= 0.9545454545454546) *
                                                  o +
                                                  0.984375) +
                                          a;
                            },
                            easeInOutBounce: function (o, a, s, l) {
                                var c = s - a;
                                return o < l / 2
                                    ? 0.5 * i.easeInBounce(2 * o, 0, c, l) + a
                                    : 0.5 *
                                          i.easeOutBounce(2 * o - l, 0, c, l) +
                                          0.5 * c +
                                          a;
                            },
                        };
                        t.exports = i;
                    },
                    function (t, n, r) {
                        t.exports = r(3);
                    },
                    function (t, n, r) {
                        "use strict";
                        (r.r(n),
                            r.d(n, "ReactConfetti", function () {
                                return G;
                            }));
                        var i,
                            o,
                            a = r(0),
                            s = r.n(a),
                            l = r(1),
                            c = r.n(l);
                        function p(d, h) {
                            return d + Math.random() * (h - d);
                        }
                        function u(d, h) {
                            for (var g = 0; g < h.length; g++) {
                                var y = h[g];
                                ((y.enumerable = y.enumerable || !1),
                                    (y.configurable = !0),
                                    "value" in y && (y.writable = !0),
                                    Object.defineProperty(d, y.key, y));
                            }
                        }
                        function f(d, h, g) {
                            return (
                                h in d
                                    ? Object.defineProperty(d, h, {
                                          value: g,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (d[h] = g),
                                d
                            );
                        }
                        ((function (d) {
                            ((d[(d.Circle = 0)] = "Circle"),
                                (d[(d.Square = 1)] = "Square"),
                                (d[(d.Strip = 2)] = "Strip"));
                        })(i || (i = {})),
                            (function (d) {
                                ((d[(d.Positive = 1)] = "Positive"),
                                    (d[(d.Negative = -1)] = "Negative"));
                            })(o || (o = {})));
                        var b = (function () {
                            function d(k, M, w, O) {
                                ((function (Dt, nt) {
                                    if (!(Dt instanceof nt))
                                        throw new TypeError(
                                            "Cannot call a class as a function",
                                        );
                                })(this, d),
                                    f(this, "context", void 0),
                                    f(this, "radius", void 0),
                                    f(this, "x", void 0),
                                    f(this, "y", void 0),
                                    f(this, "w", void 0),
                                    f(this, "h", void 0),
                                    f(this, "vx", void 0),
                                    f(this, "vy", void 0),
                                    f(this, "shape", void 0),
                                    f(this, "angle", void 0),
                                    f(this, "angularSpin", void 0),
                                    f(this, "color", void 0),
                                    f(this, "rotateY", void 0),
                                    f(this, "rotationDirection", void 0),
                                    f(this, "getOptions", void 0),
                                    (this.getOptions = M));
                                var U,
                                    z,
                                    ne = this.getOptions(),
                                    xe = ne.colors,
                                    ie = ne.initialVelocityX,
                                    Ge = ne.initialVelocityY;
                                ((this.context = k),
                                    (this.x = w),
                                    (this.y = O),
                                    (this.w = p(5, 20)),
                                    (this.h = p(5, 20)),
                                    (this.radius = p(5, 10)),
                                    (this.vx =
                                        typeof ie == "number"
                                            ? p(-ie, ie)
                                            : p(ie.min, ie.max)),
                                    (this.vy =
                                        typeof Ge == "number"
                                            ? p(-Ge, 0)
                                            : p(Ge.min, Ge.max)),
                                    (this.shape =
                                        ((U = 0),
                                        (z = 2),
                                        Math.floor(
                                            U + Math.random() * (z - U + 1),
                                        ))),
                                    (this.angle = (p(0, 360) * Math.PI) / 180),
                                    (this.angularSpin = p(-0.2, 0.2)),
                                    (this.color =
                                        xe[
                                            Math.floor(
                                                Math.random() * xe.length,
                                            )
                                        ]),
                                    (this.rotateY = p(0, 1)),
                                    (this.rotationDirection = p(0, 1)
                                        ? o.Positive
                                        : o.Negative));
                            }
                            var h, g, y;
                            return (
                                (h = d),
                                (g = [
                                    {
                                        key: "update",
                                        value: function () {
                                            var k = this.getOptions(),
                                                M = k.gravity,
                                                w = k.wind,
                                                O = k.friction,
                                                U = k.opacity,
                                                z = k.drawShape;
                                            ((this.x += this.vx),
                                                (this.y += this.vy),
                                                (this.vy += M),
                                                (this.vx += w),
                                                (this.vx *= O),
                                                (this.vy *= O),
                                                this.rotateY >= 1 &&
                                                this.rotationDirection ===
                                                    o.Positive
                                                    ? (this.rotationDirection =
                                                          o.Negative)
                                                    : this.rotateY <= -1 &&
                                                      this.rotationDirection ===
                                                          o.Negative &&
                                                      (this.rotationDirection =
                                                          o.Positive));
                                            var ne =
                                                0.1 * this.rotationDirection;
                                            if (
                                                ((this.rotateY += ne),
                                                (this.angle +=
                                                    this.angularSpin),
                                                this.context.save(),
                                                this.context.translate(
                                                    this.x,
                                                    this.y,
                                                ),
                                                this.context.rotate(this.angle),
                                                this.context.scale(
                                                    1,
                                                    this.rotateY,
                                                ),
                                                this.context.rotate(this.angle),
                                                this.context.beginPath(),
                                                (this.context.fillStyle =
                                                    this.color),
                                                (this.context.strokeStyle =
                                                    this.color),
                                                (this.context.globalAlpha = U),
                                                (this.context.lineCap =
                                                    "round"),
                                                (this.context.lineWidth = 2),
                                                z && typeof z == "function")
                                            )
                                                z.call(this, this.context);
                                            else
                                                switch (this.shape) {
                                                    case i.Circle:
                                                        (this.context.beginPath(),
                                                            this.context.arc(
                                                                0,
                                                                0,
                                                                this.radius,
                                                                0,
                                                                2 * Math.PI,
                                                            ),
                                                            this.context.fill());
                                                        break;
                                                    case i.Square:
                                                        this.context.fillRect(
                                                            -this.w / 2,
                                                            -this.h / 2,
                                                            this.w,
                                                            this.h,
                                                        );
                                                        break;
                                                    case i.Strip:
                                                        this.context.fillRect(
                                                            -this.w / 6,
                                                            -this.h / 2,
                                                            this.w / 3,
                                                            this.h,
                                                        );
                                                }
                                            (this.context.closePath(),
                                                this.context.restore());
                                        },
                                    },
                                ]) && u(h.prototype, g),
                                y && u(h, y),
                                d
                            );
                        })();
                        function m(d, h, g) {
                            return (
                                h in d
                                    ? Object.defineProperty(d, h, {
                                          value: g,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (d[h] = g),
                                d
                            );
                        }
                        var T = function d(h, g) {
                            var y = this;
                            ((function (M, w) {
                                if (!(M instanceof w))
                                    throw new TypeError(
                                        "Cannot call a class as a function",
                                    );
                            })(this, d),
                                m(this, "canvas", void 0),
                                m(this, "context", void 0),
                                m(this, "getOptions", void 0),
                                m(this, "x", 0),
                                m(this, "y", 0),
                                m(this, "w", 0),
                                m(this, "h", 0),
                                m(this, "lastNumberOfPieces", 0),
                                m(this, "tweenInitTime", Date.now()),
                                m(this, "particles", []),
                                m(this, "particlesGenerated", 0),
                                m(this, "removeParticleAt", function (M) {
                                    y.particles.splice(M, 1);
                                }),
                                m(this, "getParticle", function () {
                                    var M = p(y.x, y.w + y.x),
                                        w = p(y.y, y.h + y.y);
                                    return new b(y.context, y.getOptions, M, w);
                                }),
                                m(this, "animate", function () {
                                    var M = y.canvas,
                                        w = y.context,
                                        O = y.particlesGenerated,
                                        U = y.lastNumberOfPieces,
                                        z = y.getOptions(),
                                        ne = z.run,
                                        xe = z.recycle,
                                        ie = z.numberOfPieces,
                                        Ge = z.debug,
                                        Dt = z.tweenFunction,
                                        nt = z.tweenDuration;
                                    if (!ne) return !1;
                                    var Ft = y.particles.length,
                                        rt = xe ? Ft : O,
                                        Bt = Date.now();
                                    if (rt < ie) {
                                        U !== ie &&
                                            ((y.tweenInitTime = Bt),
                                            (y.lastNumberOfPieces = ie));
                                        for (
                                            var dn = y.tweenInitTime,
                                                oo = Dt(
                                                    Bt - dn > nt
                                                        ? nt
                                                        : Math.max(0, Bt - dn),
                                                    rt,
                                                    ie,
                                                    nt,
                                                ),
                                                hn = Math.round(oo - rt),
                                                yn = 0;
                                            yn < hn;
                                            yn++
                                        )
                                            y.particles.push(y.getParticle());
                                        y.particlesGenerated += hn;
                                    }
                                    return (
                                        Ge &&
                                            ((w.font = "12px sans-serif"),
                                            (w.fillStyle = "#333"),
                                            (w.textAlign = "right"),
                                            w.fillText(
                                                "Particles: ".concat(Ft),
                                                M.width - 10,
                                                M.height - 20,
                                            )),
                                        y.particles.forEach(function (ot, mn) {
                                            (ot.update(),
                                                (ot.y > M.height ||
                                                    ot.y < -100 ||
                                                    ot.x > M.width + 100 ||
                                                    ot.x < -100) &&
                                                    (xe && rt <= ie
                                                        ? (y.particles[mn] =
                                                              y.getParticle())
                                                        : y.removeParticleAt(
                                                              mn,
                                                          )));
                                        }),
                                        Ft > 0 || rt < ie
                                    );
                                }),
                                (this.canvas = h));
                            var k = this.canvas.getContext("2d");
                            if (!k)
                                throw new Error("Could not get canvas context");
                            ((this.context = k), (this.getOptions = g));
                        };
                        function F(d, h) {
                            var g = Object.keys(d);
                            if (Object.getOwnPropertySymbols) {
                                var y = Object.getOwnPropertySymbols(d);
                                (h &&
                                    (y = y.filter(function (k) {
                                        return Object.getOwnPropertyDescriptor(
                                            d,
                                            k,
                                        ).enumerable;
                                    })),
                                    g.push.apply(g, y));
                            }
                            return g;
                        }
                        function I(d) {
                            for (var h = 1; h < arguments.length; h++) {
                                var g =
                                    arguments[h] != null ? arguments[h] : {};
                                h % 2
                                    ? F(Object(g), !0).forEach(function (y) {
                                          v(d, y, g[y]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                            d,
                                            Object.getOwnPropertyDescriptors(g),
                                        )
                                      : F(Object(g)).forEach(function (y) {
                                            Object.defineProperty(
                                                d,
                                                y,
                                                Object.getOwnPropertyDescriptor(
                                                    g,
                                                    y,
                                                ),
                                            );
                                        });
                            }
                            return d;
                        }
                        function x(d, h) {
                            for (var g = 0; g < h.length; g++) {
                                var y = h[g];
                                ((y.enumerable = y.enumerable || !1),
                                    (y.configurable = !0),
                                    "value" in y && (y.writable = !0),
                                    Object.defineProperty(d, y.key, y));
                            }
                        }
                        function v(d, h, g) {
                            return (
                                h in d
                                    ? Object.defineProperty(d, h, {
                                          value: g,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (d[h] = g),
                                d
                            );
                        }
                        var P = {
                                width:
                                    typeof window < "u"
                                        ? window.innerWidth
                                        : 300,
                                height:
                                    typeof window < "u"
                                        ? window.innerHeight
                                        : 200,
                                numberOfPieces: 200,
                                friction: 0.99,
                                wind: 0,
                                gravity: 0.1,
                                initialVelocityX: 4,
                                initialVelocityY: 10,
                                colors: [
                                    "#f44336",
                                    "#e91e63",
                                    "#9c27b0",
                                    "#673ab7",
                                    "#3f51b5",
                                    "#2196f3",
                                    "#03a9f4",
                                    "#00bcd4",
                                    "#009688",
                                    "#4CAF50",
                                    "#8BC34A",
                                    "#CDDC39",
                                    "#FFEB3B",
                                    "#FFC107",
                                    "#FF9800",
                                    "#FF5722",
                                    "#795548",
                                ],
                                opacity: 1,
                                debug: !1,
                                tweenFunction: c.a.easeInOutQuad,
                                tweenDuration: 5e3,
                                recycle: !0,
                                run: !0,
                            },
                            R = (function () {
                                function d(k, M) {
                                    var w = this;
                                    ((function (U, z) {
                                        if (!(U instanceof z))
                                            throw new TypeError(
                                                "Cannot call a class as a function",
                                            );
                                    })(this, d),
                                        v(this, "canvas", void 0),
                                        v(this, "context", void 0),
                                        v(this, "_options", void 0),
                                        v(this, "generator", void 0),
                                        v(this, "rafId", void 0),
                                        v(
                                            this,
                                            "setOptionsWithDefaults",
                                            function (U) {
                                                var z = {
                                                    confettiSource: {
                                                        x: 0,
                                                        y: 0,
                                                        w: w.canvas.width,
                                                        h: 0,
                                                    },
                                                };
                                                ((w._options = I(
                                                    I(I({}, z), P),
                                                    U,
                                                )),
                                                    Object.assign(
                                                        w,
                                                        U.confettiSource,
                                                    ));
                                            },
                                        ),
                                        v(this, "update", function () {
                                            var U = w.options,
                                                z = U.run,
                                                ne = U.onConfettiComplete,
                                                xe = w.canvas,
                                                ie = w.context;
                                            (z &&
                                                ((ie.fillStyle = "white"),
                                                ie.clearRect(
                                                    0,
                                                    0,
                                                    xe.width,
                                                    xe.height,
                                                )),
                                                w.generator.animate()
                                                    ? (w.rafId =
                                                          requestAnimationFrame(
                                                              w.update,
                                                          ))
                                                    : (ne &&
                                                          typeof ne ==
                                                              "function" &&
                                                          w.generator
                                                              .particlesGenerated >
                                                              0 &&
                                                          ne.call(w, w),
                                                      (w._options.run = !1)));
                                        }),
                                        v(this, "reset", function () {
                                            w.generator &&
                                                w.generator.particlesGenerated >
                                                    0 &&
                                                ((w.generator.particlesGenerated = 0),
                                                (w.generator.particles = []),
                                                (w.generator.lastNumberOfPieces = 0));
                                        }),
                                        v(this, "stop", function () {
                                            ((w.options = { run: !1 }),
                                                w.rafId &&
                                                    (cancelAnimationFrame(
                                                        w.rafId,
                                                    ),
                                                    (w.rafId = void 0)));
                                        }),
                                        (this.canvas = k));
                                    var O = this.canvas.getContext("2d");
                                    if (!O)
                                        throw new Error(
                                            "Could not get canvas context",
                                        );
                                    ((this.context = O),
                                        (this.generator = new T(
                                            this.canvas,
                                            function () {
                                                return w.options;
                                            },
                                        )),
                                        (this.options = M),
                                        this.update());
                                }
                                var h, g, y;
                                return (
                                    (h = d),
                                    (g = [
                                        {
                                            key: "options",
                                            get: function () {
                                                return this._options;
                                            },
                                            set: function (k) {
                                                var M =
                                                        this._options &&
                                                        this._options.run,
                                                    w =
                                                        this._options &&
                                                        this._options.recycle;
                                                (this.setOptionsWithDefaults(k),
                                                    this.generator &&
                                                        (Object.assign(
                                                            this.generator,
                                                            this.options
                                                                .confettiSource,
                                                        ),
                                                        typeof k.recycle ==
                                                            "boolean" &&
                                                            k.recycle &&
                                                            w === !1 &&
                                                            (this.generator.lastNumberOfPieces =
                                                                this.generator.particles.length)),
                                                    typeof k.run == "boolean" &&
                                                        k.run &&
                                                        M === !1 &&
                                                        this.update());
                                            },
                                        },
                                    ]) && x(h.prototype, g),
                                    y && x(h, y),
                                    d
                                );
                            })();
                        function K(d) {
                            return (
                                (function (h) {
                                    if (Array.isArray(h)) return Re(h);
                                })(d) ||
                                (function (h) {
                                    if (
                                        typeof Symbol < "u" &&
                                        Symbol.iterator in Object(h)
                                    )
                                        return Array.from(h);
                                })(d) ||
                                Ue(d) ||
                                (function () {
                                    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                })()
                            );
                        }
                        function B(d) {
                            return (B =
                                typeof Symbol == "function" &&
                                typeof Symbol.iterator == "symbol"
                                    ? function (h) {
                                          return typeof h;
                                      }
                                    : function (h) {
                                          return h &&
                                              typeof Symbol == "function" &&
                                              h.constructor === Symbol &&
                                              h !== Symbol.prototype
                                              ? "symbol"
                                              : typeof h;
                                      })(d);
                        }
                        function te() {
                            return (te =
                                Object.assign ||
                                function (d) {
                                    for (var h = 1; h < arguments.length; h++) {
                                        var g = arguments[h];
                                        for (var y in g)
                                            Object.prototype.hasOwnProperty.call(
                                                g,
                                                y,
                                            ) && (d[y] = g[y]);
                                    }
                                    return d;
                                }).apply(this, arguments);
                        }
                        function J(d, h) {
                            var g = Object.keys(d);
                            if (Object.getOwnPropertySymbols) {
                                var y = Object.getOwnPropertySymbols(d);
                                (h &&
                                    (y = y.filter(function (k) {
                                        return Object.getOwnPropertyDescriptor(
                                            d,
                                            k,
                                        ).enumerable;
                                    })),
                                    g.push.apply(g, y));
                            }
                            return g;
                        }
                        function se(d) {
                            for (var h = 1; h < arguments.length; h++) {
                                var g =
                                    arguments[h] != null ? arguments[h] : {};
                                h % 2
                                    ? J(Object(g), !0).forEach(function (y) {
                                          we(d, y, g[y]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                            d,
                                            Object.getOwnPropertyDescriptors(g),
                                        )
                                      : J(Object(g)).forEach(function (y) {
                                            Object.defineProperty(
                                                d,
                                                y,
                                                Object.getOwnPropertyDescriptor(
                                                    g,
                                                    y,
                                                ),
                                            );
                                        });
                            }
                            return d;
                        }
                        function Ze(d, h) {
                            return (
                                (function (g) {
                                    if (Array.isArray(g)) return g;
                                })(d) ||
                                (function (g, y) {
                                    if (
                                        !(
                                            typeof Symbol > "u" ||
                                            !(Symbol.iterator in Object(g))
                                        )
                                    ) {
                                        var k = [],
                                            M = !0,
                                            w = !1,
                                            O = void 0;
                                        try {
                                            for (
                                                var U, z = g[Symbol.iterator]();
                                                !(M = (U = z.next()).done) &&
                                                (k.push(U.value),
                                                !y || k.length !== y);
                                                M = !0
                                            );
                                        } catch (ne) {
                                            ((w = !0), (O = ne));
                                        } finally {
                                            try {
                                                M ||
                                                    z.return == null ||
                                                    z.return();
                                            } finally {
                                                if (w) throw O;
                                            }
                                        }
                                        return k;
                                    }
                                })(d, h) ||
                                Ue(d, h) ||
                                (function () {
                                    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                })()
                            );
                        }
                        function Ue(d, h) {
                            if (d) {
                                if (typeof d == "string") return Re(d, h);
                                var g = Object.prototype.toString
                                    .call(d)
                                    .slice(8, -1);
                                return (
                                    g === "Object" &&
                                        d.constructor &&
                                        (g = d.constructor.name),
                                    g === "Map" || g === "Set"
                                        ? Array.from(d)
                                        : g === "Arguments" ||
                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                g,
                                            )
                                          ? Re(d, h)
                                          : void 0
                                );
                            }
                        }
                        function Re(d, h) {
                            (h == null || h > d.length) && (h = d.length);
                            for (var g = 0, y = new Array(h); g < h; g++)
                                y[g] = d[g];
                            return y;
                        }
                        function et(d, h) {
                            if (!(d instanceof h))
                                throw new TypeError(
                                    "Cannot call a class as a function",
                                );
                        }
                        function He(d, h) {
                            for (var g = 0; g < h.length; g++) {
                                var y = h[g];
                                ((y.enumerable = y.enumerable || !1),
                                    (y.configurable = !0),
                                    "value" in y && (y.writable = !0),
                                    Object.defineProperty(d, y.key, y));
                            }
                        }
                        function Ce(d, h) {
                            return (Ce =
                                Object.setPrototypeOf ||
                                function (g, y) {
                                    return ((g.__proto__ = y), g);
                                })(d, h);
                        }
                        function tt(d) {
                            var h = (function () {
                                if (
                                    typeof Reflect > "u" ||
                                    !Reflect.construct ||
                                    Reflect.construct.sham
                                )
                                    return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return (
                                        Date.prototype.toString.call(
                                            Reflect.construct(
                                                Date,
                                                [],
                                                function () {},
                                            ),
                                        ),
                                        !0
                                    );
                                } catch {
                                    return !1;
                                }
                            })();
                            return function () {
                                var g,
                                    y = Le(d);
                                if (h) {
                                    var k = Le(this).constructor;
                                    g = Reflect.construct(y, arguments, k);
                                } else g = y.apply(this, arguments);
                                return pe(this, g);
                            };
                        }
                        function pe(d, h) {
                            return !h ||
                                (B(h) !== "object" && typeof h != "function")
                                ? fe(d)
                                : h;
                        }
                        function fe(d) {
                            if (d === void 0)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called",
                                );
                            return d;
                        }
                        function Le(d) {
                            return (Le = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function (h) {
                                      return (
                                          h.__proto__ ||
                                          Object.getPrototypeOf(h)
                                      );
                                  })(d);
                        }
                        function we(d, h, g) {
                            return (
                                h in d
                                    ? Object.defineProperty(d, h, {
                                          value: g,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (d[h] = g),
                                d
                            );
                        }
                        var S = s.a.createRef(),
                            N = (function (d) {
                                (function (w, O) {
                                    if (typeof O != "function" && O !== null)
                                        throw new TypeError(
                                            "Super expression must either be null or a function",
                                        );
                                    ((w.prototype = Object.create(
                                        O && O.prototype,
                                        {
                                            constructor: {
                                                value: w,
                                                writable: !0,
                                                configurable: !0,
                                            },
                                        },
                                    )),
                                        O && Ce(w, O));
                                })(M, d);
                                var h,
                                    g,
                                    y,
                                    k = tt(M);
                                function M(w) {
                                    var O;
                                    et(this, M);
                                    for (
                                        var U = arguments.length,
                                            z = new Array(U > 1 ? U - 1 : 0),
                                            ne = 1;
                                        ne < U;
                                        ne++
                                    )
                                        z[ne - 1] = arguments[ne];
                                    return (
                                        we(
                                            fe(
                                                (O = k.call.apply(
                                                    k,
                                                    [this, w].concat(z),
                                                )),
                                            ),
                                            "canvas",
                                            s.a.createRef(),
                                        ),
                                        we(fe(O), "confetti", void 0),
                                        (O.canvas = w.canvasRef || S),
                                        O
                                    );
                                }
                                return (
                                    (h = M),
                                    (g = [
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                if (this.canvas.current) {
                                                    var w = H(this.props)[0];
                                                    this.confetti = new R(
                                                        this.canvas.current,
                                                        w,
                                                    );
                                                }
                                            },
                                        },
                                        {
                                            key: "componentDidUpdate",
                                            value: function () {
                                                var w = H(this.props)[0];
                                                this.confetti &&
                                                    (this.confetti.options = w);
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                (this.confetti &&
                                                    this.confetti.stop(),
                                                    (this.confetti = void 0));
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var w = Ze(H(this.props), 2),
                                                    O = w[0],
                                                    U = w[1],
                                                    z = se(
                                                        {
                                                            zIndex: 2,
                                                            position:
                                                                "absolute",
                                                            pointerEvents:
                                                                "none",
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                        },
                                                        U.style,
                                                    );
                                                return s.a.createElement(
                                                    "canvas",
                                                    te(
                                                        {
                                                            width: O.width,
                                                            height: O.height,
                                                            ref: this.canvas,
                                                        },
                                                        U,
                                                        { style: z },
                                                    ),
                                                );
                                            },
                                        },
                                    ]) && He(h.prototype, g),
                                    y && He(h, y),
                                    M
                                );
                            })(a.Component);
                        function H(d) {
                            var h = {},
                                g = {},
                                y = [].concat(K(Object.keys(P)), [
                                    "confettiSource",
                                    "drawShape",
                                    "onConfettiComplete",
                                ]),
                                k = ["canvasRef"];
                            for (var M in d) {
                                var w = d[M];
                                y.includes(M)
                                    ? (h[M] = w)
                                    : k.includes(M)
                                      ? (k[M] = w)
                                      : (g[M] = w);
                            }
                            return [h, g, {}];
                        }
                        (we(N, "defaultProps", se({}, P)),
                            we(N, "displayName", "ReactConfetti"));
                        var G = s.a.forwardRef(function (d, h) {
                            return s.a.createElement(
                                N,
                                te({ canvasRef: h }, d),
                            );
                        });
                        n.default = G;
                    },
                ]).default;
            });
        });
        var qp,
            $p,
            Vp,
            Kp,
            Jp,
            Xp,
            Qp,
            Zp,
            ef,
            tf,
            nf,
            rf,
            of,
            af,
            Nn,
            sf,
            lf,
            cf,
            uf,
            pf,
            ff,
            df,
            hf,
            yf,
            mf,
            gf,
            bf,
            vf,
            Ef,
            Of,
            wf,
            Sf,
            Tf,
            If,
            Cf,
            Pf,
            Rf,
            xf,
            _f,
            Af,
            kf,
            Nf,
            jf,
            Mf,
            Lf,
            Df,
            Ff,
            Bf,
            Wf,
            Uf,
            Hf,
            Gf,
            zf,
            Yf,
            qf,
            $f,
            Vf,
            Kf,
            Jf,
            Xf,
            Qf,
            jn,
            Zf,
            ed,
            td,
            nd,
            rd,
            od,
            id,
            ad,
            sd,
            ld,
            cd,
            ud,
            pd,
            fd,
            dd,
            hd,
            yd,
            md,
            gd,
            bd,
            vd,
            Ed,
            Od,
            wd,
            Sd,
            Td,
            Id,
            Cd,
            Pd,
            Rd,
            xd,
            _d,
            Ad,
            kd,
            Nd,
            jd,
            Md,
            Ld,
            Dd,
            Fd,
            Bd,
            Wd,
            Ud,
            Hd,
            Gd,
            zd,
            Yd,
            qd,
            $d,
            Vd,
            Kd,
            Jd,
            Xd,
            Qd,
            Zd,
            eh,
            th,
            nh,
            rh,
            oh,
            ih,
            ah,
            sh,
            lh,
            ch,
            uh,
            ph,
            fh,
            dh,
            hh,
            yh,
            mh,
            gh,
            bh,
            vh,
            Eh,
            Oh,
            wh,
            Sh,
            Th,
            Ih,
            Ch,
            Ph,
            Rh,
            xh,
            _h,
            Ah,
            kh,
            Nh,
            jh,
            Mh,
            Lh,
            Dh,
            Fh,
            Bh,
            Wh,
            Uh,
            Hh,
            Gh,
            zh,
            Yh,
            qh,
            $h,
            Vh,
            Kh,
            Jh,
            Xh,
            Qh,
            Zh,
            ey,
            ty,
            ny,
            ry,
            oy,
            iy,
            ay,
            sy,
            ly,
            cy,
            uy,
            py,
            fy,
            dy,
            hy,
            yy,
            my,
            gy,
            by,
            vy,
            Ey,
            Oy,
            wy,
            Sy,
            Ty,
            Iy,
            Cy,
            Py,
            Ry,
            xy,
            _y,
            Ay,
            ky,
            Ny,
            jy,
            My,
            Ly,
            Dy,
            Fy,
            By,
            Wy,
            Uy,
            Hy,
            Gy,
            zy,
            Yy,
            qy,
            $y,
            Vy,
            Ky,
            Jy,
            Xy,
            Qy,
            Zy,
            em,
            tm,
            nm,
            rm,
            om,
            im,
            am,
            sm,
            lm,
            cm,
            um,
            pm,
            Mn = ye(() => {
                X();
                Q();
                Z();
                ((qp = __STORYBOOK_ICONS__),
                    ({
                        AccessibilityAltIcon: $p,
                        AccessibilityIcon: Vp,
                        AddIcon: Kp,
                        AdminIcon: Jp,
                        AlertAltIcon: Xp,
                        AlertIcon: Qp,
                        AlignLeftIcon: Zp,
                        AlignRightIcon: ef,
                        AppleIcon: tf,
                        ArrowBottomLeftIcon: nf,
                        ArrowBottomRightIcon: rf,
                        ArrowDownIcon: of,
                        ArrowLeftIcon: af,
                        ArrowRightIcon: Nn,
                        ArrowSolidDownIcon: sf,
                        ArrowSolidLeftIcon: lf,
                        ArrowSolidRightIcon: cf,
                        ArrowSolidUpIcon: uf,
                        ArrowTopLeftIcon: pf,
                        ArrowTopRightIcon: ff,
                        ArrowUpIcon: df,
                        AzureDevOpsIcon: hf,
                        BackIcon: yf,
                        BasketIcon: mf,
                        BatchAcceptIcon: gf,
                        BatchDenyIcon: bf,
                        BeakerIcon: vf,
                        BellIcon: Ef,
                        BitbucketIcon: Of,
                        BoldIcon: wf,
                        BookIcon: Sf,
                        BookmarkHollowIcon: Tf,
                        BookmarkIcon: If,
                        BottomBarIcon: Cf,
                        BottomBarToggleIcon: Pf,
                        BoxIcon: Rf,
                        BranchIcon: xf,
                        BrowserIcon: _f,
                        ButtonIcon: Af,
                        CPUIcon: kf,
                        CalendarIcon: Nf,
                        CameraIcon: jf,
                        CategoryIcon: Mf,
                        CertificateIcon: Lf,
                        ChangedIcon: Df,
                        ChatIcon: Ff,
                        CheckIcon: Bf,
                        ChevronDownIcon: Wf,
                        ChevronLeftIcon: Uf,
                        ChevronRightIcon: Hf,
                        ChevronSmallDownIcon: Gf,
                        ChevronSmallLeftIcon: zf,
                        ChevronSmallRightIcon: Yf,
                        ChevronSmallUpIcon: qf,
                        ChevronUpIcon: $f,
                        ChromaticIcon: Vf,
                        ChromeIcon: Kf,
                        CircleHollowIcon: Jf,
                        CircleIcon: Xf,
                        ClearIcon: Qf,
                        CloseAltIcon: jn,
                        CloseIcon: Zf,
                        CloudHollowIcon: ed,
                        CloudIcon: td,
                        CogIcon: nd,
                        CollapseIcon: rd,
                        CommandIcon: od,
                        CommentAddIcon: id,
                        CommentIcon: ad,
                        CommentsIcon: sd,
                        CommitIcon: ld,
                        CompassIcon: cd,
                        ComponentDrivenIcon: ud,
                        ComponentIcon: pd,
                        ContrastIcon: fd,
                        ControlsIcon: dd,
                        CopyIcon: hd,
                        CreditIcon: yd,
                        CrossIcon: md,
                        DashboardIcon: gd,
                        DatabaseIcon: bd,
                        DeleteIcon: vd,
                        DiamondIcon: Ed,
                        DirectionIcon: Od,
                        DiscordIcon: wd,
                        DocChartIcon: Sd,
                        DocListIcon: Td,
                        DocumentIcon: Id,
                        DownloadIcon: Cd,
                        DragIcon: Pd,
                        EditIcon: Rd,
                        EllipsisIcon: xd,
                        EmailIcon: _d,
                        ExpandAltIcon: Ad,
                        ExpandIcon: kd,
                        EyeCloseIcon: Nd,
                        EyeIcon: jd,
                        FaceHappyIcon: Md,
                        FaceNeutralIcon: Ld,
                        FaceSadIcon: Dd,
                        FacebookIcon: Fd,
                        FailedIcon: Bd,
                        FastForwardIcon: Wd,
                        FigmaIcon: Ud,
                        FilterIcon: Hd,
                        FlagIcon: Gd,
                        FolderIcon: zd,
                        FormIcon: Yd,
                        GDriveIcon: qd,
                        GithubIcon: $d,
                        GitlabIcon: Vd,
                        GlobeIcon: Kd,
                        GoogleIcon: Jd,
                        GraphBarIcon: Xd,
                        GraphLineIcon: Qd,
                        GraphqlIcon: Zd,
                        GridAltIcon: eh,
                        GridIcon: th,
                        GrowIcon: nh,
                        HeartHollowIcon: rh,
                        HeartIcon: oh,
                        HomeIcon: ih,
                        HourglassIcon: ah,
                        InfoIcon: sh,
                        ItalicIcon: lh,
                        JumpToIcon: ch,
                        KeyIcon: uh,
                        LightningIcon: ph,
                        LightningOffIcon: fh,
                        LinkBrokenIcon: dh,
                        LinkIcon: hh,
                        LinkedinIcon: yh,
                        LinuxIcon: mh,
                        ListOrderedIcon: gh,
                        ListUnorderedIcon: bh,
                        LocationIcon: vh,
                        LockIcon: Eh,
                        MarkdownIcon: Oh,
                        MarkupIcon: wh,
                        MediumIcon: Sh,
                        MemoryIcon: Th,
                        MenuIcon: Ih,
                        MergeIcon: Ch,
                        MirrorIcon: Ph,
                        MobileIcon: Rh,
                        MoonIcon: xh,
                        NutIcon: _h,
                        OutboxIcon: Ah,
                        OutlineIcon: kh,
                        PaintBrushIcon: Nh,
                        PaperClipIcon: jh,
                        ParagraphIcon: Mh,
                        PassedIcon: Lh,
                        PhoneIcon: Dh,
                        PhotoDragIcon: Fh,
                        PhotoIcon: Bh,
                        PinAltIcon: Wh,
                        PinIcon: Uh,
                        PlayBackIcon: Hh,
                        PlayIcon: Gh,
                        PlayNextIcon: zh,
                        PlusIcon: Yh,
                        PointerDefaultIcon: qh,
                        PointerHandIcon: $h,
                        PowerIcon: Vh,
                        PrintIcon: Kh,
                        ProceedIcon: Jh,
                        ProfileIcon: Xh,
                        PullRequestIcon: Qh,
                        QuestionIcon: Zh,
                        RSSIcon: ey,
                        RedirectIcon: ty,
                        ReduxIcon: ny,
                        RefreshIcon: ry,
                        ReplyIcon: oy,
                        RepoIcon: iy,
                        RequestChangeIcon: ay,
                        RewindIcon: sy,
                        RulerIcon: ly,
                        SearchIcon: cy,
                        ShareAltIcon: uy,
                        ShareIcon: py,
                        ShieldIcon: fy,
                        SideBySideIcon: dy,
                        SidebarAltIcon: hy,
                        SidebarAltToggleIcon: yy,
                        SidebarIcon: my,
                        SidebarToggleIcon: gy,
                        SpeakerIcon: by,
                        StackedIcon: vy,
                        StarHollowIcon: Ey,
                        StarIcon: Oy,
                        StatusFailIcon: wy,
                        StatusPassIcon: Sy,
                        StatusWarnIcon: Ty,
                        StickerIcon: Iy,
                        StopAltIcon: Cy,
                        StopIcon: Py,
                        StorybookIcon: Ry,
                        StructureIcon: xy,
                        SubtractIcon: _y,
                        SunIcon: Ay,
                        SupportIcon: ky,
                        SwitchAltIcon: Ny,
                        SyncIcon: jy,
                        TabletIcon: My,
                        ThumbsUpIcon: Ly,
                        TimeIcon: Dy,
                        TimerIcon: Fy,
                        TransferIcon: By,
                        TrashIcon: Wy,
                        TwitterIcon: Uy,
                        TypeIcon: Hy,
                        UbuntuIcon: Gy,
                        UndoIcon: zy,
                        UnfoldIcon: Yy,
                        UnlockIcon: qy,
                        UnpinIcon: $y,
                        UploadIcon: Vy,
                        UserAddIcon: Ky,
                        UserAltIcon: Jy,
                        UserIcon: Xy,
                        UsersIcon: Qy,
                        VSCodeIcon: Zy,
                        VerifiedIcon: em,
                        VideoIcon: tm,
                        WandIcon: nm,
                        WatchIcon: rm,
                        WindowsIcon: om,
                        WrenchIcon: im,
                        XIcon: am,
                        YoutubeIcon: sm,
                        ZoomIcon: lm,
                        ZoomOutIcon: cm,
                        ZoomResetIcon: um,
                        iconList: pm,
                    } = __STORYBOOK_ICONS__));
            });
        var no = {};
        gn(no, { default: () => Gs });
        function ei({
            top: e = 0,
            left: t = 0,
            width: n = window.innerWidth,
            height: r = window.innerHeight,
            colors: i = [
                "#CA90FF",
                "#FC521F",
                "#66BF3C",
                "#FF4785",
                "#FFAE00",
                "#1EA7FD",
            ],
            ...o
        }) {
            let [a] = ue(() => {
                let s = document.createElement("div");
                return (
                    s.setAttribute("id", "confetti-container"),
                    s.setAttribute(
                        "style",
                        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;",
                    ),
                    s
                );
            });
            return (
                ce(
                    () => (
                        document.body.appendChild(a),
                        () => {
                            document.body.removeChild(a);
                        }
                    ),
                    [],
                ),
                it(
                    E.createElement(
                        Zo,
                        { top: e, left: t, width: n, height: r },
                        E.createElement(hr.default, {
                            colors: i,
                            drawShape: ni,
                            ...o,
                        }),
                    ),
                    a,
                )
            );
        }
        function ti(e, t) {
            return Math.floor(Math.random() * (t - e)) + e;
        }
        function ni(e) {
            switch (((this.shape = this.shape || ti(1, 6)), this.shape)) {
                case 2: {
                    let t = this.w / 2,
                        n = this.h / 2;
                    (e.moveTo(-t + 2, -n),
                        e.lineTo(t - 2, -n),
                        e.arcTo(t, -n, t, -n + 2, 2),
                        e.lineTo(t, n - 2),
                        e.arcTo(t, n, t - 2, n, 2),
                        e.lineTo(-t + 2, n),
                        e.arcTo(-t, n, -t, n - 2, 2),
                        e.lineTo(-t, -n + 2),
                        e.arcTo(-t, -n, -t + 2, -n, 2));
                    break;
                }
                case 3: {
                    (e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8));
                    break;
                }
                case 4: {
                    (e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8));
                    break;
                }
                case 1: {
                    e.arc(0, 0, this.radius, 0, 2 * Math.PI);
                    break;
                }
                case 5: {
                    (e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24));
                    break;
                }
                case 6: {
                    (e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0));
                    break;
                }
            }
            (e.closePath(), e.fill());
        }
        function Ln({ targetSelector: e, pulsating: t = !1 }) {
            return (
                ce(() => {
                    let n = document.querySelector(e);
                    if (n)
                        if (t) {
                            ((n.style.animation = "pulsate 3s infinite"),
                                (n.style.transformOrigin = "center"),
                                (n.style.animationTimingFunction =
                                    "ease-in-out"));
                            let r = `
        @keyframes pulsate {
          0% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
                                i = document.createElement("style");
                            ((i.id = "sb-onboarding-pulsating-effect"),
                                (i.innerHTML = r),
                                document.head.appendChild(i));
                        } else
                            n.style.boxShadow = "rgba(2,156,253,1) 0 0 2px 1px";
                    return () => {
                        let r = document.querySelector(
                            "#sb-onboarding-pulsating-effect",
                        );
                        (r && r.remove(),
                            n &&
                                ((n.style.animation = ""),
                                (n.style.boxShadow = "")));
                    };
                }, [e, t]),
                null
            );
        }
        function Er(e) {
            return t => typeof t === e;
        }
        function ai(e, t) {
            let { length: n } = e;
            if (n !== t.length) return !1;
            for (let r = n; r-- !== 0; ) if (!ae(e[r], t[r])) return !1;
            return !0;
        }
        function si(e, t) {
            if (e.byteLength !== t.byteLength) return !1;
            let n = new DataView(e.buffer),
                r = new DataView(t.buffer),
                i = e.byteLength;
            for (; i--; ) if (n.getUint8(i) !== r.getUint8(i)) return !1;
            return !0;
        }
        function li(e, t) {
            if (e.size !== t.size) return !1;
            for (let n of e.entries()) if (!t.has(n[0])) return !1;
            for (let n of e.entries()) if (!ae(n[1], t.get(n[0]))) return !1;
            return !0;
        }
        function ci(e, t) {
            if (e.size !== t.size) return !1;
            for (let n of e.entries()) if (!t.has(n[0])) return !1;
            return !0;
        }
        function ae(e, t) {
            if (e === t) return !0;
            if (e && Bn(e) && t && Bn(t)) {
                if (e.constructor !== t.constructor) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return ai(e, t);
                if (e instanceof Map && t instanceof Map) return li(e, t);
                if (e instanceof Set && t instanceof Set) return ci(e, t);
                if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
                    return si(e, t);
                if (Fn(e) && Fn(t))
                    return e.source === t.source && e.flags === t.flags;
                if (e.valueOf !== Object.prototype.valueOf)
                    return e.valueOf() === t.valueOf();
                if (e.toString !== Object.prototype.toString)
                    return e.toString() === t.toString();
                let n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (let i = n.length; i-- !== 0; )
                    if (!Object.prototype.hasOwnProperty.call(t, n[i]))
                        return !1;
                for (let i = n.length; i-- !== 0; ) {
                    let o = n[i];
                    if (!(o === "_owner" && e.$$typeof) && !ae(e[o], t[o]))
                        return !1;
                }
                return !0;
            }
            return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
        }
        function Nt(e) {
            let t = Object.prototype.toString.call(e).slice(8, -1);
            if (/HTML\w+Element/.test(t)) return "HTMLElement";
            if (fi(t)) return t;
        }
        function Ee(e) {
            return t => Nt(t) === e;
        }
        function fi(e) {
            return ui.includes(e);
        }
        function Je(e) {
            return t => typeof t === e;
        }
        function di(e) {
            return pi.includes(e);
        }
        function _(e) {
            if (e === null) return "null";
            switch (typeof e) {
                case "bigint":
                    return "bigint";
                case "boolean":
                    return "boolean";
                case "number":
                    return "number";
                case "string":
                    return "string";
                case "symbol":
                    return "symbol";
                case "undefined":
                    return "undefined";
            }
            return _.array(e)
                ? "Array"
                : _.plainFunction(e)
                  ? "Function"
                  : Nt(e) || "Object";
        }
        function yi(...e) {
            return e.every(t => j.string(t) || j.array(t) || j.plainObject(t));
        }
        function mi(e, t, n) {
            return Or(e, t)
                ? [e, t].every(j.array)
                    ? !e.some(zn(n)) && t.some(zn(n))
                    : [e, t].every(j.plainObject)
                      ? !Object.entries(e).some(Gn(n)) &&
                        Object.entries(t).some(Gn(n))
                      : t === n
                : !1;
        }
        function Wn(e, t, n) {
            let { actual: r, key: i, previous: o, type: a } = n,
                s = Te(e, i),
                l = Te(t, i),
                c =
                    [s, l].every(j.number) &&
                    (a === "increased" ? s < l : s > l);
            return (
                j.undefined(r) || (c = c && l === r),
                j.undefined(o) || (c = c && s === o),
                c
            );
        }
        function Un(e, t, n) {
            let { key: r, type: i, value: o } = n,
                a = Te(e, r),
                s = Te(t, r),
                l = i === "added" ? a : s,
                c = i === "added" ? s : a;
            if (!j.nullOrUndefined(o)) {
                if (j.defined(l)) {
                    if (j.array(l) || j.plainObject(l)) return mi(l, c, o);
                } else return ae(c, o);
                return !1;
            }
            return [a, s].every(j.array)
                ? !c.every(on(l))
                : [a, s].every(j.plainObject)
                  ? gi(Object.keys(l), Object.keys(c))
                  : ![a, s].every(p => j.primitive(p) && j.defined(p)) &&
                    (i === "added"
                        ? !j.defined(a) && j.defined(s)
                        : j.defined(a) && !j.defined(s));
        }
        function Hn(e, t, { key: n } = {}) {
            let r = Te(e, n),
                i = Te(t, n);
            if (!Or(r, i)) throw new TypeError("Inputs have different types");
            if (!yi(r, i)) throw new TypeError("Inputs don't have length");
            return (
                [r, i].every(j.plainObject) &&
                    ((r = Object.keys(r)), (i = Object.keys(i))),
                [r, i]
            );
        }
        function Gn(e) {
            return ([t, n]) =>
                j.array(e)
                    ? ae(e, n) ||
                      e.some(r => ae(r, n) || (j.array(n) && on(n)(r)))
                    : j.plainObject(e) && e[t]
                      ? !!e[t] && ae(e[t], n)
                      : ae(e, n);
        }
        function gi(e, t) {
            return t.some(n => !e.includes(n));
        }
        function zn(e) {
            return t =>
                j.array(e)
                    ? e.some(n => ae(n, t) || (j.array(t) && on(t)(n)))
                    : ae(e, t);
        }
        function lt(e, t) {
            return j.array(e) ? e.some(n => ae(n, t)) : ae(e, t);
        }
        function on(e) {
            return t => e.some(n => ae(n, t));
        }
        function Or(...e) {
            return (
                e.every(j.array) ||
                e.every(j.number) ||
                e.every(j.plainObject) ||
                e.every(j.string)
            );
        }
        function Te(e, t) {
            return j.plainObject(e) || j.array(e)
                ? j.string(t)
                    ? t.split(".").reduce((n, r) => n && n[r], e)
                    : j.number(t)
                      ? e[t]
                      : e
                : e;
        }
        function xt(e, t) {
            if ([e, t].some(j.nullOrUndefined))
                throw new Error("Missing required parameters");
            if (![e, t].every(n => j.plainObject(n) || j.array(n)))
                throw new Error("Expected plain objects or array");
            return {
                added: (n, r) => {
                    try {
                        return Un(e, t, { key: n, type: "added", value: r });
                    } catch {
                        return !1;
                    }
                },
                changed: (n, r, i) => {
                    try {
                        let o = Te(e, n),
                            a = Te(t, n),
                            s = j.defined(r),
                            l = j.defined(i);
                        if (s || l) {
                            let c = l ? lt(i, o) : !lt(r, o),
                                p = lt(r, a);
                            return c && p;
                        }
                        return [o, a].every(j.array) ||
                            [o, a].every(j.plainObject)
                            ? !ae(o, a)
                            : o !== a;
                    } catch {
                        return !1;
                    }
                },
                changedFrom: (n, r, i) => {
                    if (!j.defined(n)) return !1;
                    try {
                        let o = Te(e, n),
                            a = Te(t, n),
                            s = j.defined(i);
                        return lt(r, o) && (s ? lt(i, a) : !s);
                    } catch {
                        return !1;
                    }
                },
                decreased: (n, r, i) => {
                    if (!j.defined(n)) return !1;
                    try {
                        return Wn(e, t, {
                            key: n,
                            actual: r,
                            previous: i,
                            type: "decreased",
                        });
                    } catch {
                        return !1;
                    }
                },
                emptied: n => {
                    try {
                        let [r, i] = Hn(e, t, { key: n });
                        return !!r.length && !i.length;
                    } catch {
                        return !1;
                    }
                },
                filled: n => {
                    try {
                        let [r, i] = Hn(e, t, { key: n });
                        return !r.length && !!i.length;
                    } catch {
                        return !1;
                    }
                },
                increased: (n, r, i) => {
                    if (!j.defined(n)) return !1;
                    try {
                        return Wn(e, t, {
                            key: n,
                            actual: r,
                            previous: i,
                            type: "increased",
                        });
                    } catch {
                        return !1;
                    }
                },
                removed: (n, r) => {
                    try {
                        return Un(e, t, { key: n, type: "removed", value: r });
                    } catch {
                        return !1;
                    }
                },
            };
        }
        function Ei(e) {
            var t = !1;
            return function () {
                t ||
                    ((t = !0),
                    window.Promise.resolve().then(function () {
                        ((t = !1), e());
                    }));
            };
        }
        function Oi(e) {
            var t = !1;
            return function () {
                t ||
                    ((t = !0),
                    setTimeout(function () {
                        ((t = !1), e());
                    }, vi));
            };
        }
        function Sr(e) {
            var t = {};
            return e && t.toString.call(e) === "[object Function]";
        }
        function We(e, t) {
            if (e.nodeType !== 1) return [];
            var n = e.ownerDocument.defaultView,
                r = n.getComputedStyle(e, null);
            return t ? r[t] : r;
        }
        function an(e) {
            return e.nodeName === "HTML" ? e : e.parentNode || e.host;
        }
        function yt(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var t = We(e),
                n = t.overflow,
                r = t.overflowX,
                i = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + i + r) ? e : yt(an(e));
        }
        function Tr(e) {
            return e && e.referenceNode ? e.referenceNode : e;
        }
        function Xe(e) {
            return e === 11 ? Yn : e === 10 ? qn : Yn || qn;
        }
        function $e(e) {
            if (!e) return document.documentElement;
            for (
                var t = Xe(10) ? document.body : null,
                    n = e.offsetParent || null;
                n === t && e.nextElementSibling;

            )
                n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return !r || r === "BODY" || r === "HTML"
                ? e
                    ? e.ownerDocument.documentElement
                    : document.documentElement
                : ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
                    We(n, "position") === "static"
                  ? $e(n)
                  : n;
        }
        function Ti(e) {
            var t = e.nodeName;
            return t === "BODY"
                ? !1
                : t === "HTML" || $e(e.firstElementChild) === e;
        }
        function Xt(e) {
            return e.parentNode !== null ? Xt(e.parentNode) : e;
        }
        function _t(e, t) {
            if (!e || !e.nodeType || !t || !t.nodeType)
                return document.documentElement;
            var n =
                    e.compareDocumentPosition(t) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                i = n ? t : e,
                o = document.createRange();
            (o.setStart(r, 0), o.setEnd(i, 0));
            var a = o.commonAncestorContainer;
            if ((e !== a && t !== a) || r.contains(i)) return Ti(a) ? a : $e(a);
            var s = Xt(e);
            return s.host ? _t(s.host, t) : _t(e, Xt(t).host);
        }
        function Ve(e) {
            var t =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : "top",
                n = t === "top" ? "scrollTop" : "scrollLeft",
                r = e.nodeName;
            if (r === "BODY" || r === "HTML") {
                var i = e.ownerDocument.documentElement,
                    o = e.ownerDocument.scrollingElement || i;
                return o[n];
            }
            return e[n];
        }
        function Ii(e, t) {
            var n =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1,
                r = Ve(t, "top"),
                i = Ve(t, "left"),
                o = n ? -1 : 1;
            return (
                (e.top += r * o),
                (e.bottom += r * o),
                (e.left += i * o),
                (e.right += i * o),
                e
            );
        }
        function $n(e, t) {
            var n = t === "x" ? "Left" : "Top",
                r = n === "Left" ? "Right" : "Bottom";
            return (
                parseFloat(e["border" + n + "Width"]) +
                parseFloat(e["border" + r + "Width"])
            );
        }
        function Vn(e, t, n, r) {
            return Math.max(
                t["offset" + e],
                t["scroll" + e],
                n["client" + e],
                n["offset" + e],
                n["scroll" + e],
                Xe(10)
                    ? parseInt(n["offset" + e]) +
                          parseInt(
                              r["margin" + (e === "Height" ? "Top" : "Left")],
                          ) +
                          parseInt(
                              r[
                                  "margin" +
                                      (e === "Height" ? "Bottom" : "Right")
                              ],
                          )
                    : 0,
            );
        }
        function Ir(e) {
            var t = e.body,
                n = e.documentElement,
                r = Xe(10) && getComputedStyle(n);
            return {
                height: Vn("Height", t, n, r),
                width: Vn("Width", t, n, r),
            };
        }
        function je(e) {
            return de({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height,
            });
        }
        function Qt(e) {
            var t = {};
            try {
                if (Xe(10)) {
                    t = e.getBoundingClientRect();
                    var n = Ve(e, "top"),
                        r = Ve(e, "left");
                    ((t.top += n),
                        (t.left += r),
                        (t.bottom += n),
                        (t.right += r));
                } else t = e.getBoundingClientRect();
            } catch {}
            var i = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top,
                },
                o = e.nodeName === "HTML" ? Ir(e.ownerDocument) : {},
                a = o.width || e.clientWidth || i.width,
                s = o.height || e.clientHeight || i.height,
                l = e.offsetWidth - a,
                c = e.offsetHeight - s;
            if (l || c) {
                var p = We(e);
                ((l -= $n(p, "x")),
                    (c -= $n(p, "y")),
                    (i.width -= l),
                    (i.height -= c));
            }
            return je(i);
        }
        function sn(e, t) {
            var n =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1,
                r = Xe(10),
                i = t.nodeName === "HTML",
                o = Qt(e),
                a = Qt(t),
                s = yt(e),
                l = We(t),
                c = parseFloat(l.borderTopWidth),
                p = parseFloat(l.borderLeftWidth);
            n &&
                i &&
                ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
            var u = je({
                top: o.top - a.top - c,
                left: o.left - a.left - p,
                width: o.width,
                height: o.height,
            });
            if (((u.marginTop = 0), (u.marginLeft = 0), !r && i)) {
                var f = parseFloat(l.marginTop),
                    b = parseFloat(l.marginLeft);
                ((u.top -= c - f),
                    (u.bottom -= c - f),
                    (u.left -= p - b),
                    (u.right -= p - b),
                    (u.marginTop = f),
                    (u.marginLeft = b));
            }
            return (
                (r && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") &&
                    (u = Ii(u, t)),
                u
            );
        }
        function Ri(e) {
            var t =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                n = e.ownerDocument.documentElement,
                r = sn(e, n),
                i = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : Ve(n),
                s = t ? 0 : Ve(n, "left"),
                l = {
                    top: a - r.top + r.marginTop,
                    left: s - r.left + r.marginLeft,
                    width: i,
                    height: o,
                };
            return je(l);
        }
        function Cr(e) {
            var t = e.nodeName;
            if (t === "BODY" || t === "HTML") return !1;
            if (We(e, "position") === "fixed") return !0;
            var n = an(e);
            return n ? Cr(n) : !1;
        }
        function Pr(e) {
            if (!e || !e.parentElement || Xe()) return document.documentElement;
            for (var t = e.parentElement; t && We(t, "transform") === "none"; )
                t = t.parentElement;
            return t || document.documentElement;
        }
        function ln(e, t, n, r) {
            var i =
                    arguments.length > 4 && arguments[4] !== void 0
                        ? arguments[4]
                        : !1,
                o = { top: 0, left: 0 },
                a = i ? Pr(e) : _t(e, Tr(t));
            if (r === "viewport") o = Ri(a, i);
            else {
                var s = void 0;
                r === "scrollParent"
                    ? ((s = yt(an(t))),
                      s.nodeName === "BODY" &&
                          (s = e.ownerDocument.documentElement))
                    : r === "window"
                      ? (s = e.ownerDocument.documentElement)
                      : (s = r);
                var l = sn(s, a, i);
                if (s.nodeName === "HTML" && !Cr(a)) {
                    var c = Ir(e.ownerDocument),
                        p = c.height,
                        u = c.width;
                    ((o.top += l.top - l.marginTop),
                        (o.bottom = p + l.top),
                        (o.left += l.left - l.marginLeft),
                        (o.right = u + l.left));
                } else o = l;
            }
            n = n || 0;
            var f = typeof n == "number";
            return (
                (o.left += f ? n : n.left || 0),
                (o.top += f ? n : n.top || 0),
                (o.right -= f ? n : n.right || 0),
                (o.bottom -= f ? n : n.bottom || 0),
                o
            );
        }
        function xi(e) {
            var t = e.width,
                n = e.height;
            return t * n;
        }
        function Rr(e, t, n, r, i) {
            var o =
                arguments.length > 5 && arguments[5] !== void 0
                    ? arguments[5]
                    : 0;
            if (e.indexOf("auto") === -1) return e;
            var a = ln(n, r, o, i),
                s = {
                    top: { width: a.width, height: t.top - a.top },
                    right: { width: a.right - t.right, height: a.height },
                    bottom: { width: a.width, height: a.bottom - t.bottom },
                    left: { width: t.left - a.left, height: a.height },
                },
                l = Object.keys(s)
                    .map(function (f) {
                        return de({ key: f }, s[f], { area: xi(s[f]) });
                    })
                    .sort(function (f, b) {
                        return b.area - f.area;
                    }),
                c = l.filter(function (f) {
                    var b = f.width,
                        m = f.height;
                    return b >= n.clientWidth && m >= n.clientHeight;
                }),
                p = c.length > 0 ? c[0].key : l[0].key,
                u = e.split("-")[1];
            return p + (u ? "-" + u : "");
        }
        function xr(e, t, n) {
            var r =
                    arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : null,
                i = r ? Pr(t) : _t(t, Tr(n));
            return sn(n, i, r);
        }
        function _r(e) {
            var t = e.ownerDocument.defaultView,
                n = t.getComputedStyle(e),
                r =
                    parseFloat(n.marginTop || 0) +
                    parseFloat(n.marginBottom || 0),
                i =
                    parseFloat(n.marginLeft || 0) +
                    parseFloat(n.marginRight || 0),
                o = { width: e.offsetWidth + i, height: e.offsetHeight + r };
            return o;
        }
        function At(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
            };
            return e.replace(/left|right|bottom|top/g, function (n) {
                return t[n];
            });
        }
        function Ar(e, t, n) {
            n = n.split("-")[0];
            var r = _r(e),
                i = { width: r.width, height: r.height },
                o = ["right", "left"].indexOf(n) !== -1,
                a = o ? "top" : "left",
                s = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return (
                (i[a] = t[a] + t[l] / 2 - r[l] / 2),
                n === s ? (i[s] = t[s] - r[c]) : (i[s] = t[At(s)]),
                i
            );
        }
        function mt(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function _i(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function (i) {
                    return i[t] === n;
                });
            var r = mt(e, function (i) {
                return i[t] === n;
            });
            return e.indexOf(r);
        }
        function kr(e, t, n) {
            var r = n === void 0 ? e : e.slice(0, _i(e, "name", n));
            return (
                r.forEach(function (i) {
                    i.function &&
                        console.warn(
                            "`modifier.function` is deprecated, use `modifier.fn`!",
                        );
                    var o = i.function || i.fn;
                    i.enabled &&
                        Sr(o) &&
                        ((t.offsets.popper = je(t.offsets.popper)),
                        (t.offsets.reference = je(t.offsets.reference)),
                        (t = o(t, i)));
                }),
                t
            );
        }
        function Ai() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                };
                ((e.offsets.reference = xr(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed,
                )),
                    (e.placement = Rr(
                        this.options.placement,
                        e.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding,
                    )),
                    (e.originalPlacement = e.placement),
                    (e.positionFixed = this.options.positionFixed),
                    (e.offsets.popper = Ar(
                        this.popper,
                        e.offsets.reference,
                        e.placement,
                    )),
                    (e.offsets.popper.position = this.options.positionFixed
                        ? "fixed"
                        : "absolute"),
                    (e = kr(this.modifiers, e)),
                    this.state.isCreated
                        ? this.options.onUpdate(e)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(e)));
            }
        }
        function Nr(e, t) {
            return e.some(function (n) {
                var r = n.name,
                    i = n.enabled;
                return i && r === t;
            });
        }
        function cn(e) {
            for (
                var t = [!1, "ms", "Webkit", "Moz", "O"],
                    n = e.charAt(0).toUpperCase() + e.slice(1),
                    r = 0;
                r < t.length;
                r++
            ) {
                var i = t[r],
                    o = i ? "" + i + n : e;
                if (typeof document.body.style[o] < "u") return o;
            }
            return null;
        }
        function ki() {
            return (
                (this.state.isDestroyed = !0),
                Nr(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[cn("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                this
            );
        }
        function jr(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function Mr(e, t, n, r) {
            var i = e.nodeName === "BODY",
                o = i ? e.ownerDocument.defaultView : e;
            (o.addEventListener(t, n, { passive: !0 }),
                i || Mr(yt(o.parentNode), t, n, r),
                r.push(o));
        }
        function Ni(e, t, n, r) {
            ((n.updateBound = r),
                jr(e).addEventListener("resize", n.updateBound, {
                    passive: !0,
                }));
            var i = yt(e);
            return (
                Mr(i, "scroll", n.updateBound, n.scrollParents),
                (n.scrollElement = i),
                (n.eventsEnabled = !0),
                n
            );
        }
        function ji() {
            this.state.eventsEnabled ||
                (this.state = Ni(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate,
                ));
        }
        function Mi(e, t) {
            return (
                jr(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach(function (n) {
                    n.removeEventListener("scroll", t.updateBound);
                }),
                (t.updateBound = null),
                (t.scrollParents = []),
                (t.scrollElement = null),
                (t.eventsEnabled = !1),
                t
            );
        }
        function Li() {
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state = Mi(this.reference, this.state)));
        }
        function un(e) {
            return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function Zt(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = "";
                (["width", "height", "top", "right", "bottom", "left"].indexOf(
                    n,
                ) !== -1 &&
                    un(t[n]) &&
                    (r = "px"),
                    (e.style[n] = t[n] + r));
            });
        }
        function Di(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = t[n];
                r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
            });
        }
        function Fi(e) {
            return (
                Zt(e.instance.popper, e.styles),
                Di(e.instance.popper, e.attributes),
                e.arrowElement &&
                    Object.keys(e.arrowStyles).length &&
                    Zt(e.arrowElement, e.arrowStyles),
                e
            );
        }
        function Bi(e, t, n, r, i) {
            var o = xr(i, t, e, n.positionFixed),
                a = Rr(
                    n.placement,
                    o,
                    t,
                    e,
                    n.modifiers.flip.boundariesElement,
                    n.modifiers.flip.padding,
                );
            return (
                t.setAttribute("x-placement", a),
                Zt(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
            );
        }
        function Wi(e, t) {
            var n = e.offsets,
                r = n.popper,
                i = n.reference,
                o = Math.round,
                a = Math.floor,
                s = function (F) {
                    return F;
                },
                l = o(i.width),
                c = o(r.width),
                p = ["left", "right"].indexOf(e.placement) !== -1,
                u = e.placement.indexOf("-") !== -1,
                f = l % 2 === c % 2,
                b = l % 2 === 1 && c % 2 === 1,
                m = t ? (p || u || f ? o : a) : s,
                T = t ? o : s;
            return {
                left: m(b && !u && t ? r.left - 1 : r.left),
                top: T(r.top),
                bottom: T(r.bottom),
                right: m(r.right),
            };
        }
        function Hi(e, t) {
            var n = t.x,
                r = t.y,
                i = e.offsets.popper,
                o = mt(e.instance.modifiers, function (v) {
                    return v.name === "applyStyle";
                }).gpuAcceleration;
            o !== void 0 &&
                console.warn(
                    "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
                );
            var a = o !== void 0 ? o : t.gpuAcceleration,
                s = $e(e.instance.popper),
                l = Qt(s),
                c = { position: i.position },
                p = Wi(e, window.devicePixelRatio < 2 || !Ui),
                u = n === "bottom" ? "top" : "bottom",
                f = r === "right" ? "left" : "right",
                b = cn("transform"),
                m = void 0,
                T = void 0;
            if (
                (u === "bottom"
                    ? s.nodeName === "HTML"
                        ? (T = -s.clientHeight + p.bottom)
                        : (T = -l.height + p.bottom)
                    : (T = p.top),
                f === "right"
                    ? s.nodeName === "HTML"
                        ? (m = -s.clientWidth + p.right)
                        : (m = -l.width + p.right)
                    : (m = p.left),
                a && b)
            )
                ((c[b] = "translate3d(" + m + "px, " + T + "px, 0)"),
                    (c[u] = 0),
                    (c[f] = 0),
                    (c.willChange = "transform"));
            else {
                var F = u === "bottom" ? -1 : 1,
                    I = f === "right" ? -1 : 1;
                ((c[u] = T * F), (c[f] = m * I), (c.willChange = u + ", " + f));
            }
            var x = { "x-placement": e.placement };
            return (
                (e.attributes = de({}, x, e.attributes)),
                (e.styles = de({}, c, e.styles)),
                (e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles)),
                e
            );
        }
        function Lr(e, t, n) {
            var r = mt(e, function (s) {
                    var l = s.name;
                    return l === t;
                }),
                i =
                    !!r &&
                    e.some(function (s) {
                        return s.name === n && s.enabled && s.order < r.order;
                    });
            if (!i) {
                var o = "`" + t + "`",
                    a = "`" + n + "`";
                console.warn(
                    a +
                        " modifier is required by " +
                        o +
                        " modifier in order to work, be sure to include it before " +
                        o +
                        "!",
                );
            }
            return i;
        }
        function Gi(e, t) {
            var n;
            if (!Lr(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var r = t.element;
            if (typeof r == "string") {
                if (((r = e.instance.popper.querySelector(r)), !r)) return e;
            } else if (!e.instance.popper.contains(r))
                return (
                    console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!",
                    ),
                    e
                );
            var i = e.placement.split("-")[0],
                o = e.offsets,
                a = o.popper,
                s = o.reference,
                l = ["left", "right"].indexOf(i) !== -1,
                c = l ? "height" : "width",
                p = l ? "Top" : "Left",
                u = p.toLowerCase(),
                f = l ? "left" : "top",
                b = l ? "bottom" : "right",
                m = _r(r)[c];
            (s[b] - m < a[u] && (e.offsets.popper[u] -= a[u] - (s[b] - m)),
                s[u] + m > a[b] && (e.offsets.popper[u] += s[u] + m - a[b]),
                (e.offsets.popper = je(e.offsets.popper)));
            var T = s[u] + s[c] / 2 - m / 2,
                F = We(e.instance.popper),
                I = parseFloat(F["margin" + p]),
                x = parseFloat(F["border" + p + "Width"]),
                v = T - e.offsets.popper[u] - I - x;
            return (
                (v = Math.max(Math.min(a[c] - m, v), 0)),
                (e.arrowElement = r),
                (e.offsets.arrow =
                    ((n = {}), Ke(n, u, Math.round(v)), Ke(n, f, ""), n)),
                e
            );
        }
        function zi(e) {
            return e === "end" ? "start" : e === "start" ? "end" : e;
        }
        function Kn(e) {
            var t =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                n = Vt.indexOf(e),
                r = Vt.slice(n + 1).concat(Vt.slice(0, n));
            return t ? r.reverse() : r;
        }
        function Yi(e, t) {
            if (
                Nr(e.instance.modifiers, "inner") ||
                (e.flipped && e.placement === e.originalPlacement)
            )
                return e;
            var n = ln(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    t.boundariesElement,
                    e.positionFixed,
                ),
                r = e.placement.split("-")[0],
                i = At(r),
                o = e.placement.split("-")[1] || "",
                a = [];
            switch (t.behavior) {
                case Kt.FLIP:
                    a = [r, i];
                    break;
                case Kt.CLOCKWISE:
                    a = Kn(r);
                    break;
                case Kt.COUNTERCLOCKWISE:
                    a = Kn(r, !0);
                    break;
                default:
                    a = t.behavior;
            }
            return (
                a.forEach(function (s, l) {
                    if (r !== s || a.length === l + 1) return e;
                    ((r = e.placement.split("-")[0]), (i = At(r)));
                    var c = e.offsets.popper,
                        p = e.offsets.reference,
                        u = Math.floor,
                        f =
                            (r === "left" && u(c.right) > u(p.left)) ||
                            (r === "right" && u(c.left) < u(p.right)) ||
                            (r === "top" && u(c.bottom) > u(p.top)) ||
                            (r === "bottom" && u(c.top) < u(p.bottom)),
                        b = u(c.left) < u(n.left),
                        m = u(c.right) > u(n.right),
                        T = u(c.top) < u(n.top),
                        F = u(c.bottom) > u(n.bottom),
                        I =
                            (r === "left" && b) ||
                            (r === "right" && m) ||
                            (r === "top" && T) ||
                            (r === "bottom" && F),
                        x = ["top", "bottom"].indexOf(r) !== -1,
                        v =
                            !!t.flipVariations &&
                            ((x && o === "start" && b) ||
                                (x && o === "end" && m) ||
                                (!x && o === "start" && T) ||
                                (!x && o === "end" && F)),
                        P =
                            !!t.flipVariationsByContent &&
                            ((x && o === "start" && m) ||
                                (x && o === "end" && b) ||
                                (!x && o === "start" && F) ||
                                (!x && o === "end" && T)),
                        R = v || P;
                    (f || I || R) &&
                        ((e.flipped = !0),
                        (f || I) && (r = a[l + 1]),
                        R && (o = zi(o)),
                        (e.placement = r + (o ? "-" + o : "")),
                        (e.offsets.popper = de(
                            {},
                            e.offsets.popper,
                            Ar(
                                e.instance.popper,
                                e.offsets.reference,
                                e.placement,
                            ),
                        )),
                        (e = kr(e.instance.modifiers, e, "flip")));
                }),
                e
            );
        }
        function qi(e) {
            var t = e.offsets,
                n = t.popper,
                r = t.reference,
                i = e.placement.split("-")[0],
                o = Math.floor,
                a = ["top", "bottom"].indexOf(i) !== -1,
                s = a ? "right" : "bottom",
                l = a ? "left" : "top",
                c = a ? "width" : "height";
            return (
                n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]),
                n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])),
                e
            );
        }
        function $i(e, t, n, r) {
            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +i[1],
                a = i[2];
            if (!o) return e;
            if (a.indexOf("%") === 0) {
                var s = void 0;
                switch (a) {
                    case "%p":
                        s = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        s = r;
                }
                var l = je(s);
                return (l[t] / 100) * o;
            } else if (a === "vh" || a === "vw") {
                var c = void 0;
                return (
                    a === "vh"
                        ? (c = Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0,
                          ))
                        : (c = Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0,
                          )),
                    (c / 100) * o
                );
            } else return o;
        }
        function Vi(e, t, n, r) {
            var i = [0, 0],
                o = ["right", "left"].indexOf(r) !== -1,
                a = e.split(/(\+|\-)/).map(function (p) {
                    return p.trim();
                }),
                s = a.indexOf(
                    mt(a, function (p) {
                        return p.search(/,|\s/) !== -1;
                    }),
                );
            a[s] &&
                a[s].indexOf(",") === -1 &&
                console.warn(
                    "Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
                );
            var l = /\s*,\s*|\s+/,
                c =
                    s !== -1
                        ? [
                              a.slice(0, s).concat([a[s].split(l)[0]]),
                              [a[s].split(l)[1]].concat(a.slice(s + 1)),
                          ]
                        : [a];
            return (
                (c = c.map(function (p, u) {
                    var f = (u === 1 ? !o : o) ? "height" : "width",
                        b = !1;
                    return p
                        .reduce(function (m, T) {
                            return m[m.length - 1] === "" &&
                                ["+", "-"].indexOf(T) !== -1
                                ? ((m[m.length - 1] = T), (b = !0), m)
                                : b
                                  ? ((m[m.length - 1] += T), (b = !1), m)
                                  : m.concat(T);
                        }, [])
                        .map(function (m) {
                            return $i(m, f, t, n);
                        });
                })),
                c.forEach(function (p, u) {
                    p.forEach(function (f, b) {
                        un(f) && (i[u] += f * (p[b - 1] === "-" ? -1 : 1));
                    });
                }),
                i
            );
        }
        function Ki(e, t) {
            var n = t.offset,
                r = e.placement,
                i = e.offsets,
                o = i.popper,
                a = i.reference,
                s = r.split("-")[0],
                l = void 0;
            return (
                un(+n) ? (l = [+n, 0]) : (l = Vi(n, o, a, s)),
                s === "left"
                    ? ((o.top += l[0]), (o.left -= l[1]))
                    : s === "right"
                      ? ((o.top += l[0]), (o.left += l[1]))
                      : s === "top"
                        ? ((o.left += l[0]), (o.top -= l[1]))
                        : s === "bottom" && ((o.left += l[0]), (o.top += l[1])),
                (e.popper = o),
                e
            );
        }
        function Ji(e, t) {
            var n = t.boundariesElement || $e(e.instance.popper);
            e.instance.reference === n && (n = $e(n));
            var r = cn("transform"),
                i = e.instance.popper.style,
                o = i.top,
                a = i.left,
                s = i[r];
            ((i.top = ""), (i.left = ""), (i[r] = ""));
            var l = ln(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                n,
                e.positionFixed,
            );
            ((i.top = o), (i.left = a), (i[r] = s), (t.boundaries = l));
            var c = t.priority,
                p = e.offsets.popper,
                u = {
                    primary: function (f) {
                        var b = p[f];
                        return (
                            p[f] < l[f] &&
                                !t.escapeWithReference &&
                                (b = Math.max(p[f], l[f])),
                            Ke({}, f, b)
                        );
                    },
                    secondary: function (f) {
                        var b = f === "right" ? "left" : "top",
                            m = p[b];
                        return (
                            p[f] > l[f] &&
                                !t.escapeWithReference &&
                                (m = Math.min(
                                    p[b],
                                    l[f] - (f === "right" ? p.width : p.height),
                                )),
                            Ke({}, b, m)
                        );
                    },
                };
            return (
                c.forEach(function (f) {
                    var b =
                        ["left", "top"].indexOf(f) !== -1
                            ? "primary"
                            : "secondary";
                    p = de({}, p, u[b](f));
                }),
                (e.offsets.popper = p),
                e
            );
        }
        function Xi(e) {
            var t = e.placement,
                n = t.split("-")[0],
                r = t.split("-")[1];
            if (r) {
                var i = e.offsets,
                    o = i.reference,
                    a = i.popper,
                    s = ["bottom", "top"].indexOf(n) !== -1,
                    l = s ? "left" : "top",
                    c = s ? "width" : "height",
                    p = {
                        start: Ke({}, l, o[l]),
                        end: Ke({}, l, o[l] + o[c] - a[c]),
                    };
                e.offsets.popper = de({}, a, p[r]);
            }
            return e;
        }
        function Qi(e) {
            if (!Lr(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
                n = mt(e.instance.modifiers, function (r) {
                    return r.name === "preventOverflow";
                }).boundaries;
            if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
            ) {
                if (e.hide === !0) return e;
                ((e.hide = !0), (e.attributes["x-out-of-boundaries"] = ""));
            } else {
                if (e.hide === !1) return e;
                ((e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1));
            }
            return e;
        }
        function Zi(e) {
            var t = e.placement,
                n = t.split("-")[0],
                r = e.offsets,
                i = r.popper,
                o = r.reference,
                a = ["left", "right"].indexOf(n) !== -1,
                s = ["top", "left"].indexOf(n) === -1;
            return (
                (i[a ? "left" : "top"] =
                    o[n] - (s ? i[a ? "width" : "height"] : 0)),
                (e.placement = At(t)),
                (e.offsets.popper = je(i)),
                e
            );
        }
        function Mt(e) {
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (/HTML\w+Element/.test(t)) return "HTMLElement";
            if (ia(t)) return t;
        }
        function Oe(e) {
            return function (t) {
                return Mt(t) === e;
            };
        }
        function ia(e) {
            return ra.includes(e);
        }
        function Qe(e) {
            return function (t) {
                return typeof t === e;
            };
        }
        function aa(e) {
            return oa.includes(e);
        }
        function A(e) {
            if (e === null) return "null";
            switch (typeof e) {
                case "bigint":
                    return "bigint";
                case "boolean":
                    return "boolean";
                case "number":
                    return "number";
                case "string":
                    return "string";
                case "symbol":
                    return "symbol";
                case "undefined":
                    return "undefined";
            }
            if (A.array(e)) return "Array";
            if (A.plainFunction(e)) return "Function";
            var t = Mt(e);
            return t || "Object";
        }
        function Fr(e) {
            return function (t) {
                return typeof t === e;
            };
        }
        function ua(e, t) {
            var n = e.length;
            if (n !== t.length) return !1;
            for (var r = n; r-- !== 0; ) if (!le(e[r], t[r])) return !1;
            return !0;
        }
        function pa(e, t) {
            if (e.byteLength !== t.byteLength) return !1;
            for (
                var n = new DataView(e.buffer),
                    r = new DataView(t.buffer),
                    i = e.byteLength;
                i--;

            )
                if (n.getUint8(i) !== r.getUint8(i)) return !1;
            return !0;
        }
        function fa(e, t) {
            var n, r, i, o;
            if (e.size !== t.size) return !1;
            try {
                for (
                    var a = tn(e.entries()), s = a.next();
                    !s.done;
                    s = a.next()
                ) {
                    var l = s.value;
                    if (!t.has(l[0])) return !1;
                }
            } catch (u) {
                n = { error: u };
            } finally {
                try {
                    s && !s.done && (r = a.return) && r.call(a);
                } finally {
                    if (n) throw n.error;
                }
            }
            try {
                for (
                    var c = tn(e.entries()), p = c.next();
                    !p.done;
                    p = c.next()
                ) {
                    var l = p.value;
                    if (!le(l[1], t.get(l[0]))) return !1;
                }
            } catch (u) {
                i = { error: u };
            } finally {
                try {
                    p && !p.done && (o = c.return) && o.call(c);
                } finally {
                    if (i) throw i.error;
                }
            }
            return !0;
        }
        function da(e, t) {
            var n, r;
            if (e.size !== t.size) return !1;
            try {
                for (
                    var i = tn(e.entries()), o = i.next();
                    !o.done;
                    o = i.next()
                ) {
                    var a = o.value;
                    if (!t.has(a[0])) return !1;
                }
            } catch (s) {
                n = { error: s };
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i);
                } finally {
                    if (n) throw n.error;
                }
            }
            return !0;
        }
        function le(e, t) {
            if (e === t) return !0;
            if (e && Qn(e) && t && Qn(t)) {
                if (e.constructor !== t.constructor) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return ua(e, t);
                if (e instanceof Map && t instanceof Map) return fa(e, t);
                if (e instanceof Set && t instanceof Set) return da(e, t);
                if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
                    return pa(e, t);
                if (Xn(e) && Xn(t))
                    return e.source === t.source && e.flags === t.flags;
                if (e.valueOf !== Object.prototype.valueOf)
                    return e.valueOf() === t.valueOf();
                if (e.toString !== Object.prototype.toString)
                    return e.toString() === t.toString();
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var i = n.length; i-- !== 0; )
                    if (!Object.prototype.hasOwnProperty.call(t, n[i]))
                        return !1;
                for (var i = n.length; i-- !== 0; ) {
                    var o = n[i];
                    if (!(o === "_owner" && e.$$typeof) && !le(e[o], t[o]))
                        return !1;
                }
                return !0;
            }
            return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
        }
        function ha() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return e.every(function (n) {
                return D.string(n) || D.array(n) || D.plainObject(n);
            });
        }
        function ya(e, t, n) {
            return Br(e, t)
                ? [e, t].every(D.array)
                    ? !e.some(rr(n)) && t.some(rr(n))
                    : [e, t].every(D.plainObject)
                      ? !Object.entries(e).some(nr(n)) &&
                        Object.entries(t).some(nr(n))
                      : t === n
                : !1;
        }
        function Zn(e, t, n) {
            var r = n.actual,
                i = n.key,
                o = n.previous,
                a = n.type,
                s = Ie(e, i),
                l = Ie(t, i),
                c =
                    [s, l].every(D.number) &&
                    (a === "increased" ? s < l : s > l);
            return (
                D.undefined(r) || (c = c && l === r),
                D.undefined(o) || (c = c && s === o),
                c
            );
        }
        function er(e, t, n) {
            var r = n.key,
                i = n.type,
                o = n.value,
                a = Ie(e, r),
                s = Ie(t, r),
                l = i === "added" ? a : s,
                c = i === "added" ? s : a;
            if (!D.nullOrUndefined(o)) {
                if (D.defined(l)) {
                    if (D.array(l) || D.plainObject(l)) return ya(l, c, o);
                } else return le(c, o);
                return !1;
            }
            return [a, s].every(D.array)
                ? !c.every(pn(l))
                : [a, s].every(D.plainObject)
                  ? ma(Object.keys(l), Object.keys(c))
                  : ![a, s].every(function (p) {
                        return D.primitive(p) && D.defined(p);
                    }) &&
                    (i === "added"
                        ? !D.defined(a) && D.defined(s)
                        : D.defined(a) && !D.defined(s));
        }
        function tr(e, t, n) {
            var r = n === void 0 ? {} : n,
                i = r.key,
                o = Ie(e, i),
                a = Ie(t, i);
            if (!Br(o, a)) throw new TypeError("Inputs have different types");
            if (!ha(o, a)) throw new TypeError("Inputs don't have length");
            return (
                [o, a].every(D.plainObject) &&
                    ((o = Object.keys(o)), (a = Object.keys(a))),
                [o, a]
            );
        }
        function nr(e) {
            return function (t) {
                var n = t[0],
                    r = t[1];
                return D.array(e)
                    ? le(e, r) ||
                          e.some(function (i) {
                              return le(i, r) || (D.array(r) && pn(r)(i));
                          })
                    : D.plainObject(e) && e[n]
                      ? !!e[n] && le(e[n], r)
                      : le(e, r);
            };
        }
        function ma(e, t) {
            return t.some(function (n) {
                return !e.includes(n);
            });
        }
        function rr(e) {
            return function (t) {
                return D.array(e)
                    ? e.some(function (n) {
                          return le(n, t) || (D.array(t) && pn(t)(n));
                      })
                    : le(e, t);
            };
        }
        function ct(e, t) {
            return D.array(e)
                ? e.some(function (n) {
                      return le(n, t);
                  })
                : le(e, t);
        }
        function pn(e) {
            return function (t) {
                return e.some(function (n) {
                    return le(n, t);
                });
            };
        }
        function Br() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return (
                e.every(D.array) ||
                e.every(D.number) ||
                e.every(D.plainObject) ||
                e.every(D.string)
            );
        }
        function Ie(e, t) {
            if (D.plainObject(e) || D.array(e)) {
                if (D.string(t)) {
                    var n = t.split(".");
                    return n.reduce(function (r, i) {
                        return r && r[i];
                    }, e);
                }
                return D.number(t) ? e[t] : e;
            }
            return e;
        }
        function ga(e, t) {
            if ([e, t].some(D.nullOrUndefined))
                throw new Error("Missing required parameters");
            if (
                ![e, t].every(function (u) {
                    return D.plainObject(u) || D.array(u);
                })
            )
                throw new Error("Expected plain objects or array");
            var n = function (u, f) {
                    try {
                        return er(e, t, { key: u, type: "added", value: f });
                    } catch {
                        return !1;
                    }
                },
                r = function (u, f, b) {
                    try {
                        var m = Ie(e, u),
                            T = Ie(t, u),
                            F = D.defined(f),
                            I = D.defined(b);
                        if (F || I) {
                            var x = I ? ct(b, m) : !ct(f, m),
                                v = ct(f, T);
                            return x && v;
                        }
                        return [m, T].every(D.array) ||
                            [m, T].every(D.plainObject)
                            ? !le(m, T)
                            : m !== T;
                    } catch {
                        return !1;
                    }
                },
                i = function (u, f, b) {
                    if (!D.defined(u)) return !1;
                    try {
                        var m = Ie(e, u),
                            T = Ie(t, u),
                            F = D.defined(b);
                        return ct(f, m) && (F ? ct(b, T) : !F);
                    } catch {
                        return !1;
                    }
                },
                o = function (u, f) {
                    return D.defined(u)
                        ? (console.warn(
                              "`changedTo` is deprecated! Replace it with `change`",
                          ),
                          r(u, f))
                        : !1;
                },
                a = function (u, f, b) {
                    if (!D.defined(u)) return !1;
                    try {
                        return Zn(e, t, {
                            key: u,
                            actual: f,
                            previous: b,
                            type: "decreased",
                        });
                    } catch {
                        return !1;
                    }
                },
                s = function (u) {
                    try {
                        var f = tr(e, t, { key: u }),
                            b = f[0],
                            m = f[1];
                        return !!b.length && !m.length;
                    } catch {
                        return !1;
                    }
                },
                l = function (u) {
                    try {
                        var f = tr(e, t, { key: u }),
                            b = f[0],
                            m = f[1];
                        return !b.length && !!m.length;
                    } catch {
                        return !1;
                    }
                },
                c = function (u, f, b) {
                    if (!D.defined(u)) return !1;
                    try {
                        return Zn(e, t, {
                            key: u,
                            actual: f,
                            previous: b,
                            type: "increased",
                        });
                    } catch {
                        return !1;
                    }
                },
                p = function (u, f) {
                    try {
                        return er(e, t, { key: u, type: "removed", value: f });
                    } catch {
                        return !1;
                    }
                };
            return {
                added: n,
                changed: r,
                changedFrom: i,
                changedTo: o,
                decreased: a,
                emptied: s,
                filled: l,
                increased: c,
                removed: p,
            };
        }
        function or(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                (t &&
                    (r = r.filter(function (i) {
                        return Object.getOwnPropertyDescriptor(e, i).enumerable;
                    })),
                    n.push.apply(n, r));
            }
            return n;
        }
        function ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t] != null ? arguments[t] : {};
                t % 2
                    ? or(Object(n), !0).forEach(function (r) {
                          oe(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                        )
                      : or(Object(n)).forEach(function (r) {
                            Object.defineProperty(
                                e,
                                r,
                                Object.getOwnPropertyDescriptor(n, r),
                            );
                        });
            }
            return e;
        }
        function gt(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        }
        function ir(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, Ur(r.key), r));
            }
        }
        function bt(e, t, n) {
            return (
                t && ir(e.prototype, t),
                n && ir(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
        }
        function oe(e, t, n) {
            return (
                (t = Ur(t)),
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function vt(e, t) {
            if (typeof t != "function" && t !== null)
                throw new TypeError(
                    "Super expression must either be null or a function",
                );
            ((e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
            })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && nn(e, t));
        }
        function kt(e) {
            return (
                (kt = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      }),
                kt(e)
            );
        }
        function nn(e, t) {
            return (
                (nn = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (n, r) {
                          return ((n.__proto__ = r), n);
                      }),
                nn(e, t)
            );
        }
        function ba() {
            if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
            )
                return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return (
                    Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                );
            } catch {
                return !1;
            }
        }
        function va(e, t) {
            if (e == null) return {};
            var n = {},
                r = Object.keys(e),
                i,
                o;
            for (o = 0; o < r.length; o++)
                ((i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
            return n;
        }
        function Wr(e, t) {
            if (e == null) return {};
            var n = va(e, t),
                r,
                i;
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    ((r = o[i]),
                        !(t.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (n[r] = e[r]));
            }
            return n;
        }
        function Pe(e) {
            if (e === void 0)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                );
            return e;
        }
        function Ea(e, t) {
            if (t && (typeof t == "object" || typeof t == "function")) return t;
            if (t !== void 0)
                throw new TypeError(
                    "Derived constructors may only return object or undefined",
                );
            return Pe(e);
        }
        function Et(e) {
            var t = ba();
            return function () {
                var n = kt(e),
                    r;
                if (t) {
                    var i = kt(this).constructor;
                    r = Reflect.construct(n, arguments, i);
                } else r = n.apply(this, arguments);
                return Ea(this, r);
            };
        }
        function Oa(e, t) {
            if (typeof e != "object" || e === null) return e;
            var n = e[Symbol.toPrimitive];
            if (n !== void 0) {
                var r = n.call(e, t || "default");
                if (typeof r != "object") return r;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                );
            }
            return (t === "string" ? String : Number)(e);
        }
        function Ur(e) {
            var t = Oa(e, "string");
            return typeof t == "symbol" ? t : String(t);
        }
        function Ia(e, t, n, r) {
            return typeof e == "boolean"
                ? e
                : typeof e == "function"
                  ? e(t, n, r)
                  : e
                    ? !!e
                    : !1;
        }
        function Ca(e, t) {
            return Object.hasOwnProperty.call(e, t);
        }
        function Pa(e, t, n, r) {
            return r
                ? new Error(r)
                : new Error(
                      "Required "
                          .concat(e[t], " `")
                          .concat(t, "` was not specified in `")
                          .concat(n, "`."),
                  );
        }
        function Ra(e, t) {
            if (typeof e != "function") throw new TypeError(Sa);
            if (t && typeof t != "string") throw new TypeError(Ta);
        }
        function ar(e, t, n) {
            return (
                Ra(e, n),
                function (r, i, o) {
                    for (
                        var a = arguments.length,
                            s = new Array(a > 3 ? a - 3 : 0),
                            l = 3;
                        l < a;
                        l++
                    )
                        s[l - 3] = arguments[l];
                    return Ia(t, r, i, o)
                        ? Ca(r, i)
                            ? e.apply(void 0, [r, i, o].concat(s))
                            : Pa(r, i, o, n)
                        : e.apply(void 0, [r, i, o].concat(s));
                }
            );
        }
        function Se() {
            return !!(
                typeof window < "u" &&
                window.document &&
                window.document.createElement
            );
        }
        function Jt() {
            return "ontouchstart" in window && /Mobi/.test(navigator.userAgent);
        }
        function Rt(e) {
            var t = e.title,
                n = e.data,
                r = e.warn,
                i = r === void 0 ? !1 : r,
                o = e.debug,
                a = o === void 0 ? !1 : o,
                s = i ? console.warn || console.error : console.log;
            a &&
                t &&
                n &&
                (console.groupCollapsed(
                    "%creact-floater: ".concat(t),
                    "color: #9b00ff; font-weight: bold; font-size: 12px;",
                ),
                Array.isArray(n)
                    ? n.forEach(function (l) {
                          D.plainObject(l) && l.key
                              ? s.apply(console, [l.key, l.value])
                              : s.apply(console, [l]);
                      })
                    : s.apply(console, [n]),
                console.groupEnd());
        }
        function xa(e, t, n) {
            var r =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !1;
            e.addEventListener(t, n, r);
        }
        function _a(e, t, n) {
            var r =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : !1;
            e.removeEventListener(t, n, r);
        }
        function Aa(e, t, n) {
            var r =
                    arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : !1,
                i;
            ((i = function (o) {
                (n(o), _a(e, t, i));
            }),
                xa(e, t, i, r));
        }
        function sr() {}
        function zr(e) {
            var t = e.handleClick,
                n = e.styles,
                r = n.color,
                i = n.height,
                o = n.width,
                a = Wr(n, ka);
            return E.createElement(
                "button",
                { "aria-label": "close", onClick: t, style: a, type: "button" },
                E.createElement(
                    "svg",
                    {
                        width: "".concat(o, "px"),
                        height: "".concat(i, "px"),
                        viewBox: "0 0 18 18",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMidYMid",
                    },
                    E.createElement(
                        "g",
                        null,
                        E.createElement("path", {
                            d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
                            fill: r,
                        }),
                    ),
                ),
            );
        }
        function Yr(e) {
            var t = e.content,
                n = e.footer,
                r = e.handleClick,
                i = e.open,
                o = e.positionWrapper,
                a = e.showCloseButton,
                s = e.title,
                l = e.styles,
                c = {
                    content: E.isValidElement(t)
                        ? t
                        : E.createElement(
                              "div",
                              {
                                  className: "__floater__content",
                                  style: l.content,
                              },
                              t,
                          ),
                };
            return (
                s &&
                    (c.title = E.isValidElement(s)
                        ? s
                        : E.createElement(
                              "div",
                              { className: "__floater__title", style: l.title },
                              s,
                          )),
                n &&
                    (c.footer = E.isValidElement(n)
                        ? n
                        : E.createElement(
                              "div",
                              {
                                  className: "__floater__footer",
                                  style: l.footer,
                              },
                              n,
                          )),
                (a || o) &&
                    !D.boolean(i) &&
                    (c.close = E.createElement(zr, {
                        styles: l.close,
                        handleClick: r,
                    })),
                E.createElement(
                    "div",
                    { className: "__floater__container", style: l.container },
                    c.close,
                    c.title,
                    c.content,
                    c.footer,
                )
            );
        }
        function ja(e) {
            var t = (0, en.default)(Na, e.options || {});
            return {
                wrapper: {
                    cursor: "help",
                    display: "inline-flex",
                    flexDirection: "column",
                    zIndex: t.zIndex,
                },
                wrapperPosition: {
                    left: -1e3,
                    position: "absolute",
                    top: -1e3,
                    visibility: "hidden",
                },
                floater: {
                    display: "inline-block",
                    filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
                    maxWidth: 300,
                    opacity: 0,
                    position: "relative",
                    transition: "opacity 0.3s",
                    visibility: "hidden",
                    zIndex: t.zIndex,
                },
                floaterOpening: { opacity: 1, visibility: "visible" },
                floaterWithAnimation: {
                    opacity: 1,
                    transition: "opacity 0.3s, transform 0.2s",
                    visibility: "visible",
                },
                floaterWithComponent: { maxWidth: "100%" },
                floaterClosing: { opacity: 0, visibility: "visible" },
                floaterCentered: {
                    left: "50%",
                    position: "fixed",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                },
                container: {
                    backgroundColor: "#fff",
                    color: "#666",
                    minHeight: 60,
                    minWidth: 200,
                    padding: 20,
                    position: "relative",
                    zIndex: 10,
                },
                title: {
                    borderBottom: "1px solid #555",
                    color: "#555",
                    fontSize: 18,
                    marginBottom: 5,
                    paddingBottom: 6,
                    paddingRight: 18,
                },
                content: { fontSize: 15 },
                close: {
                    backgroundColor: "transparent",
                    border: 0,
                    borderRadius: 0,
                    color: "#555",
                    fontSize: 0,
                    height: 15,
                    outline: "none",
                    padding: 10,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: 15,
                    WebkitAppearance: "none",
                },
                footer: {
                    borderTop: "1px solid #ccc",
                    fontSize: 13,
                    marginTop: 10,
                    paddingTop: 5,
                },
                arrow: {
                    color: "#fff",
                    display: "inline-flex",
                    length: 16,
                    margin: 8,
                    position: "absolute",
                    spread: 32,
                },
                options: t,
            };
        }
        function Ae() {
            return !!(
                typeof window < "u" &&
                window.document &&
                window.document.createElement
            );
        }
        function Vr(e) {
            return e ? e.getBoundingClientRect() : null;
        }
        function Wa(e = !0) {
            let { body: t, documentElement: n } = document;
            if (!t || !n) return 0;
            if (e) {
                let r = [
                        t.scrollHeight,
                        t.offsetHeight,
                        n.clientHeight,
                        n.scrollHeight,
                        n.offsetHeight,
                    ].sort((o, a) => o - a),
                    i = Math.floor(r.length / 2);
                return r.length % 2 === 0 ? (r[i - 1] + r[i]) / 2 : r[i];
            }
            return Math.max(
                t.scrollHeight,
                t.offsetHeight,
                n.clientHeight,
                n.scrollHeight,
                n.offsetHeight,
            );
        }
        function Ne(e) {
            return typeof e == "string" ? document.querySelector(e) : e;
        }
        function Ua(e) {
            return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
        }
        function Lt(e, t, n) {
            if (!e) return Fe();
            let r = (0, wr.default)(e);
            if (r) {
                if (r.isSameNode(Fe())) return n ? document : Fe();
                if (!(r.scrollHeight > r.offsetHeight) && !t)
                    return ((r.style.overflow = "initial"), Fe());
            }
            return r;
        }
        function Ot(e, t) {
            if (!e) return !1;
            let n = Lt(e, t);
            return n ? !n.isSameNode(Fe()) : !1;
        }
        function Ha(e) {
            return e.offsetParent !== document.body;
        }
        function dt(e, t = "fixed") {
            if (!e || !(e instanceof HTMLElement)) return !1;
            let { nodeName: n } = e,
                r = Ua(e);
            return n === "BODY" || n === "HTML"
                ? !1
                : r && r.position === t
                  ? !0
                  : e.parentNode
                    ? dt(e.parentNode, t)
                    : !1;
        }
        function Ga(e) {
            var t;
            if (!e) return !1;
            let n = e;
            for (; n && n !== document.body; ) {
                if (n instanceof HTMLElement) {
                    let { display: r, visibility: i } = getComputedStyle(n);
                    if (r === "none" || i === "hidden") return !1;
                }
                n = (t = n.parentElement) != null ? t : null;
            }
            return !0;
        }
        function za(e, t, n) {
            var r;
            let i = Vr(e),
                o = Lt(e, n),
                a = Ot(e, n),
                s = 0,
                l = (r = i?.top) != null ? r : 0;
            return (
                o instanceof HTMLElement &&
                    ((s = o.scrollTop),
                    !a && !dt(e) && (l += s),
                    o.isSameNode(Fe()) || (l += Fe().scrollTop)),
                Math.floor(l - t)
            );
        }
        function Ya(e, t, n) {
            var r;
            if (!e) return 0;
            let { offsetTop: i = 0, scrollTop: o = 0 } =
                    (r = (0, wr.default)(e)) != null ? r : {},
                a = e.getBoundingClientRect().top + o;
            i && (Ot(e, n) || Ha(e)) && (a -= i);
            let s = Math.floor(a - t);
            return s < 0 ? 0 : s;
        }
        function Fe() {
            var e;
            return (e = document.scrollingElement) != null
                ? e
                : document.documentElement;
        }
        function qa(e, t) {
            let { duration: n, element: r } = t;
            return new Promise((i, o) => {
                let { scrollTop: a } = r,
                    s = e > a ? e - a : a - e;
                bi.default.top(r, e, { duration: s < 100 ? 50 : n }, l =>
                    l &&
                    l.message !== "Element already at target scroll position"
                        ? o(l)
                        : i(),
                );
            });
        }
        function Kr(e = navigator.userAgent) {
            let t = e;
            return (
                typeof window > "u"
                    ? (t = "node")
                    : document.documentMode
                      ? (t = "ie")
                      : /Edge/.test(e)
                        ? (t = "edge")
                        : window.opera || e.includes(" OPR/")
                          ? (t = "opera")
                          : typeof window.InstallTrigger < "u"
                            ? (t = "firefox")
                            : window.chrome
                              ? (t = "chrome")
                              : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(
                                    e,
                                ) && (t = "safari"),
                t
            );
        }
        function ke(e) {
            let t = [],
                n = r => {
                    if (typeof r == "string" || typeof r == "number") t.push(r);
                    else if (Array.isArray(r)) r.forEach(i => n(i));
                    else if (Ht(r)) {
                        let { children: i } = r.props;
                        Array.isArray(i) ? i.forEach(o => n(o)) : n(i);
                    }
                };
            return (n(e), t.join(" ").trim());
        }
        function $a(e, t) {
            return !j.plainObject(e) || !j.array(t)
                ? !1
                : Object.keys(e).every(n => t.includes(n));
        }
        function Va(e) {
            let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
                n = e.replace(t, (i, o, a, s) => o + o + a + a + s + s),
                r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
            return r
                ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
                : [];
        }
        function lr(e) {
            return e.disableBeacon || e.placement === "center";
        }
        function cr() {
            return !["chrome", "safari", "firefox", "opera"].includes(Kr());
        }
        function Me({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
            let i = r ? console.warn || console.error : console.log;
            t &&
                (n && e
                    ? (console.groupCollapsed(
                          `%creact-joyride: ${n}`,
                          "color: #ff0044; font-weight: bold; font-size: 12px;",
                      ),
                      Array.isArray(e)
                          ? e.forEach(o => {
                                j.plainObject(o) && o.key
                                    ? i.apply(console, [o.key, o.value])
                                    : i.apply(console, [o]);
                            })
                          : i.apply(console, [e]),
                      console.groupEnd())
                    : console.error("Missing title or data props"));
        }
        function Ka(e) {
            return Object.keys(e);
        }
        function Jr(e, ...t) {
            if (!j.plainObject(e)) throw new TypeError("Expected an object");
            let n = {};
            for (let r in e)
                ({}).hasOwnProperty.call(e, r) &&
                    (t.includes(r) || (n[r] = e[r]));
            return n;
        }
        function Ja(e, ...t) {
            if (!j.plainObject(e)) throw new TypeError("Expected an object");
            if (!t.length) return e;
            let n = {};
            for (let r in e)
                ({}).hasOwnProperty.call(e, r) &&
                    t.includes(r) &&
                    (n[r] = e[r]);
            return n;
        }
        function Xa(e) {
            let {
                isFirstStep: t,
                lifecycle: n,
                previousLifecycle: r,
                scrollToFirstStep: i,
                step: o,
                target: a,
            } = e;
            return (
                !o.disableScrolling &&
                (!t || i || n === W.TOOLTIP) &&
                o.placement !== "center" &&
                (!o.isFixed || !dt(a)) &&
                r !== n &&
                [W.BEACON, W.TOOLTIP].includes(n)
            );
        }
        function ns(e, t) {
            var n, r, i, o, a;
            let { floaterProps: s, styles: l } = e,
                c = (0, Pt.default)(
                    (n = t.floaterProps) != null ? n : {},
                    s ?? {},
                ),
                p = (0, Pt.default)(l ?? {}, (r = t.styles) != null ? r : {}),
                u = (0, Pt.default)(ts, p.options || {}),
                f = t.placement === "center" || t.disableBeacon,
                { width: b } = u;
            (window.innerWidth > 480 && (b = 380),
                "width" in u &&
                    (b =
                        typeof u.width == "number" &&
                        window.innerWidth < u.width
                            ? window.innerWidth - 30
                            : u.width));
            let m = {
                    bottom: 0,
                    left: 0,
                    overflow: "hidden",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    zIndex: u.zIndex,
                },
                T = {
                    beacon: {
                        ...ft,
                        display: f ? "none" : "inline-block",
                        height: u.beaconSize,
                        position: "relative",
                        width: u.beaconSize,
                        zIndex: u.zIndex,
                    },
                    beaconInner: {
                        animation:
                            "joyride-beacon-inner 1.2s infinite ease-in-out",
                        backgroundColor: u.primaryColor,
                        borderRadius: "50%",
                        display: "block",
                        height: "50%",
                        left: "50%",
                        opacity: 0.7,
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "50%",
                    },
                    beaconOuter: {
                        animation:
                            "joyride-beacon-outer 1.2s infinite ease-in-out",
                        backgroundColor: `rgba(${Va(u.primaryColor).join(",")}, 0.2)`,
                        border: `2px solid ${u.primaryColor}`,
                        borderRadius: "50%",
                        boxSizing: "border-box",
                        display: "block",
                        height: "100%",
                        left: 0,
                        opacity: 0.9,
                        position: "absolute",
                        top: 0,
                        transformOrigin: "center",
                        width: "100%",
                    },
                    tooltip: {
                        backgroundColor: u.backgroundColor,
                        borderRadius: 5,
                        boxSizing: "border-box",
                        color: u.textColor,
                        fontSize: 16,
                        maxWidth: "100%",
                        padding: 15,
                        position: "relative",
                        width: b,
                    },
                    tooltipContainer: { lineHeight: 1.4, textAlign: "center" },
                    tooltipTitle: { fontSize: 18, margin: 0 },
                    tooltipContent: { padding: "20px 10px" },
                    tooltipFooter: {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: 15,
                    },
                    tooltipFooterSpacer: { flex: 1 },
                    buttonNext: {
                        ...ft,
                        backgroundColor: u.primaryColor,
                        borderRadius: 4,
                        color: "#fff",
                    },
                    buttonBack: {
                        ...ft,
                        color: u.primaryColor,
                        marginLeft: "auto",
                        marginRight: 5,
                    },
                    buttonClose: {
                        ...ft,
                        color: u.textColor,
                        height: 14,
                        padding: 15,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: 14,
                    },
                    buttonSkip: { ...ft, color: u.textColor, fontSize: 14 },
                    overlay: {
                        ...m,
                        backgroundColor: u.overlayColor,
                        mixBlendMode: "hard-light",
                    },
                    overlayLegacy: { ...m },
                    overlayLegacyCenter: {
                        ...m,
                        backgroundColor: u.overlayColor,
                    },
                    spotlight: { ...ur, backgroundColor: "gray" },
                    spotlightLegacy: {
                        ...ur,
                        boxShadow: `0 0 0 9999px ${u.overlayColor}, ${u.spotlightShadow}`,
                    },
                    floaterStyles: {
                        arrow: {
                            color:
                                (a =
                                    (o =
                                        (i = c?.styles) == null
                                            ? void 0
                                            : i.arrow) == null
                                        ? void 0
                                        : o.color) != null
                                    ? a
                                    : u.arrowColor,
                        },
                        options: { zIndex: u.zIndex + 100 },
                    },
                    options: u,
                };
            return (0, Pt.default)(T, p);
        }
        function rs(e) {
            return Ja(
                e,
                "beaconComponent",
                "disableCloseOnEsc",
                "disableOverlay",
                "disableOverlayClose",
                "disableScrolling",
                "disableScrollParentFix",
                "floaterProps",
                "hideBackButton",
                "hideCloseButton",
                "locale",
                "showProgress",
                "showSkipButton",
                "spotlightClicks",
                "spotlightPadding",
                "styles",
                "tooltipComponent",
            );
        }
        function qe(e, t) {
            var n, r, i, o, a, s;
            let l = t ?? {},
                c = Ct.default.all([Za, rs(e), l], {
                    isMergeableObject: j.plainObject,
                }),
                p = ns(e, c),
                u = Ot(Ne(c.target), c.disableScrollParentFix),
                f = Ct.default.all([
                    Qa,
                    (n = e.floaterProps) != null ? n : {},
                    (r = c.floaterProps) != null ? r : {},
                ]);
            return (
                (f.offset = c.offset),
                (f.styles = (0, Ct.default)(
                    (i = f.styles) != null ? i : {},
                    p.floaterStyles,
                )),
                (f.offset +=
                    (a =
                        (o = e.spotlightPadding) != null
                            ? o
                            : c.spotlightPadding) != null
                        ? a
                        : 0),
                c.placementBeacon &&
                    f.wrapperOptions &&
                    (f.wrapperOptions.placement = c.placementBeacon),
                u &&
                    f.options.preventOverflow &&
                    (f.options.preventOverflow.boundariesElement = "window"),
                {
                    ...c,
                    locale: Ct.default.all([
                        Xr,
                        (s = e.locale) != null ? s : {},
                        c.locale || {},
                    ]),
                    floaterProps: f,
                    styles: Jr(p, "floaterStyles"),
                }
            );
        }
        function Qr(e, t = !1) {
            return j.plainObject(e)
                ? e.target
                    ? !0
                    : (Me({
                          title: "validateStep",
                          data: "target is missing from the step",
                          warn: !0,
                          debug: t,
                      }),
                      !1)
                : (Me({
                      title: "validateStep",
                      data: "step must be an object",
                      warn: !0,
                      debug: t,
                  }),
                  !1);
        }
        function pr(e, t = !1) {
            return j.array(e)
                ? e.every(n => Qr(n, t))
                : (Me({
                      title: "validateSteps",
                      data: "steps must be an array",
                      warn: !0,
                      debug: t,
                  }),
                  !1);
        }
        function is(e) {
            return new os(e);
        }
        function as({ styles: e }) {
            return V("div", {
                key: "JoyrideSpotlight",
                className: "react-joyride__spotlight",
                "data-test-id": "spotlight",
                style: e,
            });
        }
        function fs({ styles: e, ...t }) {
            let { color: n, height: r, width: i, ...o } = e;
            return E.createElement(
                "button",
                { style: o, type: "button", ...t },
                E.createElement(
                    "svg",
                    {
                        height: typeof r == "number" ? `${r}px` : r,
                        preserveAspectRatio: "xMidYMid",
                        version: "1.1",
                        viewBox: "0 0 18 18",
                        width: typeof i == "number" ? `${i}px` : i,
                        xmlns: "http://www.w3.org/2000/svg",
                    },
                    E.createElement(
                        "g",
                        null,
                        E.createElement("path", {
                            d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
                            fill: n,
                        }),
                    ),
                ),
            );
        }
        function hs(e) {
            let {
                    backProps: t,
                    closeProps: n,
                    continuous: r,
                    index: i,
                    isLastStep: o,
                    primaryProps: a,
                    size: s,
                    skipProps: l,
                    step: c,
                    tooltipProps: p,
                } = e,
                {
                    content: u,
                    hideBackButton: f,
                    hideCloseButton: b,
                    hideFooter: m,
                    locale: T,
                    showProgress: F,
                    showSkipButton: I,
                    styles: x,
                    title: v,
                } = c,
                { back: P, close: R, last: K, next: B, skip: te } = T,
                J = { primary: R };
            return (
                r &&
                    ((J.primary = o ? K : B),
                    F &&
                        (J.primary = V(
                            "span",
                            null,
                            J.primary,
                            " (",
                            i + 1,
                            "/",
                            s,
                            ")",
                        ))),
                J.primary &&
                    (J.primary = V(
                        "button",
                        {
                            "data-test-id": "button-primary",
                            style: x.buttonNext,
                            type: "button",
                            ...a,
                        },
                        J.primary,
                    )),
                I &&
                    !o &&
                    (J.skip = V(
                        "button",
                        {
                            "aria-live": "off",
                            "data-test-id": "button-skip",
                            style: x.buttonSkip,
                            type: "button",
                            ...l,
                        },
                        te,
                    )),
                !f &&
                    i > 0 &&
                    (J.back = V(
                        "button",
                        {
                            "data-test-id": "button-back",
                            style: x.buttonBack,
                            type: "button",
                            ...t,
                        },
                        P,
                    )),
                (J.close =
                    !b &&
                    V(ds, {
                        "data-test-id": "button-close",
                        styles: x.buttonClose,
                        ...n,
                    })),
                V(
                    "div",
                    {
                        key: "JoyrideTooltip",
                        "aria-label": ke(v) || ke(u),
                        className: "react-joyride__tooltip",
                        style: x.tooltip,
                        ...p,
                    },
                    V(
                        "div",
                        { style: x.tooltipContainer },
                        v &&
                            V(
                                "h1",
                                { "aria-label": ke(v), style: x.tooltipTitle },
                                v,
                            ),
                        V("div", { style: x.tooltipContent }, u),
                    ),
                    !m &&
                        V(
                            "div",
                            { style: x.tooltipFooter },
                            V("div", { style: x.tooltipFooterSpacer }, J.skip),
                            J.back,
                            J.primary,
                        ),
                    J.close,
                )
            );
        }
        function xs({ step: e, steps: t, onClose: n, onComplete: r }) {
            let [i, o] = ue(null),
                a = _n();
            return (
                ce(() => {
                    let s;
                    return (
                        o(l => {
                            let c = t.findIndex(({ key: p }) => p === e);
                            return c === -1
                                ? null
                                : c === l
                                  ? l
                                  : ((s = setTimeout(o, 500, c)), null);
                        }),
                        () => clearTimeout(s)
                    );
                }, [e, t]),
                i === null
                    ? null
                    : E.createElement(bs, {
                          continuous: !0,
                          steps: t,
                          stepIndex: i,
                          spotlightPadding: 0,
                          disableCloseOnEsc: !0,
                          disableOverlayClose: !0,
                          disableScrolling: !0,
                          callback: s => {
                              (s.action === $.CLOSE && n(),
                                  s.action === $.NEXT &&
                                      s.index === s.size - 1 &&
                                      r());
                          },
                          floaterProps: {
                              disableAnimation: !0,
                              styles: {
                                  arrow: { length: 20, spread: 2 },
                                  floater: {
                                      filter:
                                          a.base === "light"
                                              ? "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
                                              : "drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)",
                                  },
                              },
                          },
                          tooltipComponent: Rs,
                          styles: {
                              overlay: {
                                  mixBlendMode: "unset",
                                  backgroundColor:
                                      t[i]?.target === "body"
                                          ? "rgba(27, 28, 29, 0.2)"
                                          : "none",
                              },
                              spotlight: {
                                  backgroundColor: "none",
                                  border: `solid 2px ${a.color.secondary}`,
                                  boxShadow:
                                      "0px 0px 0px 9999px rgba(27, 28, 29, 0.2)",
                              },
                              tooltip: {
                                  width: 280,
                                  color: a.color.lightest,
                                  background: a.color.secondary,
                              },
                              options: {
                                  zIndex: 9998,
                                  primaryColor: a.color.secondary,
                                  arrowColor: a.color.secondary,
                              },
                          },
                      })
            );
        }
        function Gs({ api: e }) {
            let [t, n] = ue(!0),
                [r, i] = ue(!1),
                [o, a] = ue("1:Intro"),
                [s, l] = ue(),
                [c, p] = ue(),
                [u, f] = ue(),
                [b, m] = ue(),
                T = ze(
                    B => {
                        try {
                            let { id: te, refId: J } =
                                e.getCurrentStoryData() || {};
                            (te !== B || J !== void 0) && e.selectStory(B);
                        } catch {}
                    },
                    [e],
                ),
                F = ze(() => {
                    let B = new URL(window.location.href),
                        te = decodeURIComponent(B.searchParams.get("path"));
                    ((B.search = `?path=${te}&onboarding=false`),
                        history.replaceState({}, "", B.href),
                        e.setQueryParams({ onboarding: "false" }),
                        n(!1));
                }, [e, n]),
                I = ze(() => {
                    (e.emit(Dn, {
                        step: "6:FinishedOnboarding",
                        type: "telemetry",
                    }),
                        T("configure-your-project--docs"),
                        F());
                }, [e, T, F]);
            if (
                (ce(() => {
                    (e.setQueryParams({ onboarding: "true" }),
                        T("example-button--primary"),
                        e.togglePanel(!0),
                        e.togglePanelPosition("bottom"),
                        e.setSelectedPanel("addon-controls"));
                }, [e, T]),
                ce(() => {
                    let B = new MutationObserver(() => {
                        (l(document.getElementById("control-primary")),
                            p(document.getElementById("save-from-controls")),
                            f(
                                document.getElementById(
                                    "create-new-story-form",
                                ),
                            ));
                    });
                    return (
                        B.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                        }),
                        () => B.disconnect()
                    );
                }, []),
                ce(() => {
                    a(B =>
                        [
                            "1:Intro",
                            "5:StoryCreated",
                            "6:FinishedOnboarding",
                        ].includes(B)
                            ? B
                            : u
                              ? "4:CreateStory"
                              : c
                                ? "3:SaveFromControls"
                                : s
                                  ? "2:Controls"
                                  : "1:Intro",
                    );
                }, [u, s, c]),
                ce(
                    () =>
                        e.on(wn, ({ payload: B, success: te }) => {
                            !te ||
                                !B?.newStoryName ||
                                (m(B),
                                i(!0),
                                a("5:StoryCreated"),
                                setTimeout(() =>
                                    e.clearNotification("save-story-success"),
                                ));
                        }),
                    [e],
                ),
                ce(() => e.emit(Dn, { step: o, type: "telemetry" }), [e, o]),
                !t)
            )
                return null;
            let x = b?.sourceFileContent,
                v = x?.lastIndexOf(`export const ${b?.newStoryExportName}`),
                P = x?.slice(v).trim(),
                R = x?.slice(0, v).split(`
`).length,
                K = [
                    {
                        key: "2:Controls",
                        target: "#control-primary",
                        title: "Interactive story playground",
                        content: E.createElement(
                            E.Fragment,
                            null,
                            "See how a story renders with different data and state without touching code. Try it out by toggling this button.",
                            E.createElement(Ln, {
                                targetSelector: "#control-primary",
                                pulsating: !0,
                            }),
                        ),
                        offset: 20,
                        placement: "right",
                        disableBeacon: !0,
                        disableOverlay: !0,
                        spotlightClicks: !0,
                        onNextButtonClick: () => {
                            document.querySelector("#control-primary").click();
                        },
                    },
                    {
                        key: "3:SaveFromControls",
                        target: 'button[aria-label="Create new story with these settings"]',
                        title: "Save your changes as a new story",
                        content: E.createElement(
                            E.Fragment,
                            null,
                            "Great! Storybook stories represent the key states of each of your components. After modifying a story, you can save your changes from here or reset it.",
                            E.createElement(Ln, {
                                targetSelector:
                                    "button[aria-label='Create new story with these settings']",
                            }),
                        ),
                        offset: 6,
                        placement: "top",
                        disableBeacon: !0,
                        disableOverlay: !0,
                        spotlightClicks: !0,
                        onNextButtonClick: () => {
                            document
                                .querySelector(
                                    'button[aria-label="Create new story with these settings"]',
                                )
                                .click();
                        },
                        styles: { tooltip: { width: 400 } },
                    },
                    {
                        key: "5:StoryCreated",
                        target: '#storybook-explorer-tree [data-selected="true"]',
                        title: "You just added your first story!",
                        content: E.createElement(
                            E.Fragment,
                            null,
                            "Well done! You just created your first story from the Storybook manager. This automatically added a few lines of code in",
                            " ",
                            E.createElement(Ws, null, b?.sourceFileName),
                            ".",
                            P &&
                                E.createElement(
                                    Yt,
                                    { theme: qt(xn.dark) },
                                    E.createElement(
                                        Us,
                                        null,
                                        E.createElement(
                                            Pn,
                                            {
                                                language: "jsx",
                                                showLineNumbers: !0,
                                                startingLineNumber: R,
                                            },
                                            P,
                                        ),
                                    ),
                                ),
                        ),
                        offset: 12,
                        placement: "right",
                        disableBeacon: !0,
                        disableOverlay: !0,
                        styles: { tooltip: { width: 400 } },
                    },
                ];
            return E.createElement(
                Yt,
                { theme: Hs },
                r &&
                    E.createElement(ei, {
                        numberOfPieces: 800,
                        recycle: !1,
                        tweenDuration: 2e4,
                        onConfettiComplete: B => {
                            (B?.reset(), i(!1));
                        },
                    }),
                o === "1:Intro"
                    ? E.createElement(Bs, { onDismiss: () => a("2:Controls") })
                    : E.createElement(xs, {
                          step: o,
                          steps: K,
                          onClose: F,
                          onComplete: I,
                      }),
            );
        }
        var hr,
            Wo,
            yr,
            Uo,
            mr,
            Ho,
            Go,
            he,
            zo,
            Be,
            Yo,
            qo,
            rn,
            $o,
            gr,
            Vo,
            br,
            vr,
            Ko,
            Jo,
            Xo,
            Qo,
            Zo,
            Dn,
            ri,
            oi,
            Fn,
            Bn,
            ii,
            ui,
            pi,
            hi,
            j,
            bi,
            wr,
            Ct,
            Pt,
            C,
            ht,
            vi,
            wi,
            Si,
            Yn,
            qn,
            Ci,
            Pi,
            Ke,
            de,
            Ui,
            Dr,
            Vt,
            Kt,
            ea,
            ta,
            jt,
            Jn,
            en,
            na,
            ra,
            oa,
            D,
            sa,
            la,
            Xn,
            Qn,
            ca,
            tn,
            wa,
            Sa,
            Ta,
            q,
            ut,
            Hr,
            Gr,
            ka,
            qr,
            $r,
            Na,
            Ma,
            La,
            fn,
            Da,
            Fa,
            Ba,
            L,
            $,
            ve,
            W,
            Y,
            pt,
            Qa,
            Xr,
            Za,
            es,
            ts,
            ft,
            ur,
            Zr,
            fr,
            os,
            ss,
            ls,
            cs,
            us,
            ps,
            ds,
            ys,
            ms,
            gs,
            eo,
            bs,
            vs,
            Es,
            Os,
            ws,
            Ss,
            Ts,
            Is,
            Cs,
            Ps,
            Rs,
            _s,
            to,
            As,
            ks,
            Ns,
            js,
            Ms,
            Ls,
            Ds,
            Fs,
            dr,
            Bs,
            Ws,
            Us,
            Hs,
            ro = ye(() => {
                X();
                Q();
                Z();
                Ye();
                Ye();
                Rn();
                zt();
                An();
                Tt();
                Tt();
                hr = po(kn());
                Mn();
                ((Wo = Object.create),
                    (yr = Object.defineProperty),
                    (Uo = Object.getOwnPropertyDescriptor),
                    (mr = Object.getOwnPropertyNames),
                    (Ho = Object.getPrototypeOf),
                    (Go = Object.prototype.hasOwnProperty),
                    (he = (e, t) =>
                        function () {
                            return (
                                t ||
                                    (0, e[mr(e)[0]])(
                                        (t = { exports: {} }).exports,
                                        t,
                                    ),
                                t.exports
                            );
                        }),
                    (zo = (e, t, n, r) => {
                        if (
                            (t && typeof t == "object") ||
                            typeof t == "function"
                        )
                            for (let i of mr(t))
                                !Go.call(e, i) &&
                                    i !== n &&
                                    yr(e, i, {
                                        get: () => t[i],
                                        enumerable:
                                            !(r = Uo(t, i)) || r.enumerable,
                                    });
                        return e;
                    }),
                    (Be = (e, t, n) => (
                        (n = e != null ? Wo(Ho(e)) : {}),
                        zo(
                            t || !e || !e.__esModule
                                ? yr(n, "default", { value: e, enumerable: !0 })
                                : n,
                            e,
                        )
                    )),
                    (Yo = he({
                        "../../node_modules/scroll/index.js"(e, t) {
                            var n = new Error(
                                    "Element already at target scroll position",
                                ),
                                r = new Error("Scroll cancelled"),
                                i = Math.min,
                                o = Date.now;
                            t.exports = {
                                left: a("scrollLeft"),
                                top: a("scrollTop"),
                            };
                            function a(c) {
                                return function (p, u, f, b) {
                                    ((f = f || {}),
                                        typeof f == "function" &&
                                            ((b = f), (f = {})),
                                        typeof b != "function" && (b = l));
                                    var m = o(),
                                        T = p[c],
                                        F = f.ease || s,
                                        I = isNaN(f.duration)
                                            ? 350
                                            : +f.duration,
                                        x = !1;
                                    return (
                                        T === u
                                            ? b(n, p[c])
                                            : requestAnimationFrame(P),
                                        v
                                    );
                                    function v() {
                                        x = !0;
                                    }
                                    function P(R) {
                                        if (x) return b(r, p[c]);
                                        var K = o(),
                                            B = i(1, (K - m) / I),
                                            te = F(B);
                                        ((p[c] = te * (u - T) + T),
                                            B < 1
                                                ? requestAnimationFrame(P)
                                                : requestAnimationFrame(
                                                      function () {
                                                          b(null, p[c]);
                                                      },
                                                  ));
                                    }
                                };
                            }
                            function s(c) {
                                return 0.5 * (1 - Math.cos(Math.PI * c));
                            }
                            function l() {}
                        },
                    })),
                    (qo = he({
                        "../../node_modules/scrollparent/scrollparent.js"(
                            e,
                            t,
                        ) {
                            (function (n, r) {
                                typeof define == "function" && define.amd
                                    ? define([], r)
                                    : typeof t == "object" && t.exports
                                      ? (t.exports = r())
                                      : (n.Scrollparent = r());
                            })(e, function () {
                                function n(i) {
                                    var o = getComputedStyle(
                                        i,
                                        null,
                                    ).getPropertyValue("overflow");
                                    return (
                                        o.indexOf("scroll") > -1 ||
                                        o.indexOf("auto") > -1
                                    );
                                }
                                function r(i) {
                                    if (
                                        i instanceof HTMLElement ||
                                        i instanceof SVGElement
                                    ) {
                                        for (
                                            var o = i.parentNode;
                                            o.parentNode;

                                        ) {
                                            if (n(o)) return o;
                                            o = o.parentNode;
                                        }
                                        return (
                                            document.scrollingElement ||
                                            document.documentElement
                                        );
                                    }
                                }
                                return r;
                            });
                        },
                    })),
                    (rn = he({
                        "../../node_modules/deepmerge/dist/cjs.js"(e, t) {
                            var n = function (v) {
                                return r(v) && !i(v);
                            };
                            function r(v) {
                                return !!v && typeof v == "object";
                            }
                            function i(v) {
                                var P = Object.prototype.toString.call(v);
                                return (
                                    P === "[object RegExp]" ||
                                    P === "[object Date]" ||
                                    s(v)
                                );
                            }
                            var o = typeof Symbol == "function" && Symbol.for,
                                a = o ? Symbol.for("react.element") : 60103;
                            function s(v) {
                                return v.$$typeof === a;
                            }
                            function l(v) {
                                return Array.isArray(v) ? [] : {};
                            }
                            function c(v, P) {
                                return P.clone !== !1 && P.isMergeableObject(v)
                                    ? I(l(v), v, P)
                                    : v;
                            }
                            function p(v, P, R) {
                                return v.concat(P).map(function (K) {
                                    return c(K, R);
                                });
                            }
                            function u(v, P) {
                                if (!P.customMerge) return I;
                                var R = P.customMerge(v);
                                return typeof R == "function" ? R : I;
                            }
                            function f(v) {
                                return Object.getOwnPropertySymbols
                                    ? Object.getOwnPropertySymbols(v).filter(
                                          function (P) {
                                              return Object.propertyIsEnumerable.call(
                                                  v,
                                                  P,
                                              );
                                          },
                                      )
                                    : [];
                            }
                            function b(v) {
                                return Object.keys(v).concat(f(v));
                            }
                            function m(v, P) {
                                try {
                                    return P in v;
                                } catch {
                                    return !1;
                                }
                            }
                            function T(v, P) {
                                return (
                                    m(v, P) &&
                                    !(
                                        Object.hasOwnProperty.call(v, P) &&
                                        Object.propertyIsEnumerable.call(v, P)
                                    )
                                );
                            }
                            function F(v, P, R) {
                                var K = {};
                                return (
                                    R.isMergeableObject(v) &&
                                        b(v).forEach(function (B) {
                                            K[B] = c(v[B], R);
                                        }),
                                    b(P).forEach(function (B) {
                                        T(v, B) ||
                                            (m(v, B) &&
                                            R.isMergeableObject(P[B])
                                                ? (K[B] = u(B, R)(
                                                      v[B],
                                                      P[B],
                                                      R,
                                                  ))
                                                : (K[B] = c(P[B], R)));
                                    }),
                                    K
                                );
                            }
                            function I(v, P, R) {
                                ((R = R || {}),
                                    (R.arrayMerge = R.arrayMerge || p),
                                    (R.isMergeableObject =
                                        R.isMergeableObject || n),
                                    (R.cloneUnlessOtherwiseSpecified = c));
                                var K = Array.isArray(P),
                                    B = Array.isArray(v),
                                    te = K === B;
                                return te
                                    ? K
                                        ? R.arrayMerge(v, P, R)
                                        : F(v, P, R)
                                    : c(P, R);
                            }
                            I.all = function (v, P) {
                                if (!Array.isArray(v))
                                    throw new Error(
                                        "first argument should be an array",
                                    );
                                return v.reduce(function (R, K) {
                                    return I(R, K, P);
                                }, {});
                            };
                            var x = I;
                            t.exports = x;
                        },
                    })),
                    ($o = he({
                        "../../node_modules/react-is/cjs/react-is.development.js"(
                            e,
                        ) {
                            (function () {
                                var t =
                                        typeof Symbol == "function" &&
                                        Symbol.for,
                                    n = t ? Symbol.for("react.element") : 60103,
                                    r = t ? Symbol.for("react.portal") : 60106,
                                    i = t
                                        ? Symbol.for("react.fragment")
                                        : 60107,
                                    o = t
                                        ? Symbol.for("react.strict_mode")
                                        : 60108,
                                    a = t
                                        ? Symbol.for("react.profiler")
                                        : 60114,
                                    s = t
                                        ? Symbol.for("react.provider")
                                        : 60109,
                                    l = t ? Symbol.for("react.context") : 60110,
                                    c = t
                                        ? Symbol.for("react.async_mode")
                                        : 60111,
                                    p = t
                                        ? Symbol.for("react.concurrent_mode")
                                        : 60111,
                                    u = t
                                        ? Symbol.for("react.forward_ref")
                                        : 60112,
                                    f = t
                                        ? Symbol.for("react.suspense")
                                        : 60113,
                                    b = t
                                        ? Symbol.for("react.suspense_list")
                                        : 60120,
                                    m = t ? Symbol.for("react.memo") : 60115,
                                    T = t ? Symbol.for("react.lazy") : 60116,
                                    F = t ? Symbol.for("react.block") : 60121,
                                    I = t
                                        ? Symbol.for("react.fundamental")
                                        : 60117,
                                    x = t
                                        ? Symbol.for("react.responder")
                                        : 60118,
                                    v = t ? Symbol.for("react.scope") : 60119;
                                function P(O) {
                                    return (
                                        typeof O == "string" ||
                                        typeof O == "function" ||
                                        O === i ||
                                        O === p ||
                                        O === a ||
                                        O === o ||
                                        O === f ||
                                        O === b ||
                                        (typeof O == "object" &&
                                            O !== null &&
                                            (O.$$typeof === T ||
                                                O.$$typeof === m ||
                                                O.$$typeof === s ||
                                                O.$$typeof === l ||
                                                O.$$typeof === u ||
                                                O.$$typeof === I ||
                                                O.$$typeof === x ||
                                                O.$$typeof === v ||
                                                O.$$typeof === F))
                                    );
                                }
                                function R(O) {
                                    if (typeof O == "object" && O !== null) {
                                        var U = O.$$typeof;
                                        switch (U) {
                                            case n:
                                                var z = O.type;
                                                switch (z) {
                                                    case c:
                                                    case p:
                                                    case i:
                                                    case a:
                                                    case o:
                                                    case f:
                                                        return z;
                                                    default:
                                                        var ne =
                                                            z && z.$$typeof;
                                                        switch (ne) {
                                                            case l:
                                                            case u:
                                                            case T:
                                                            case m:
                                                            case s:
                                                                return ne;
                                                            default:
                                                                return U;
                                                        }
                                                }
                                            case r:
                                                return U;
                                        }
                                    }
                                }
                                var K = c,
                                    B = p,
                                    te = l,
                                    J = s,
                                    se = n,
                                    Ze = u,
                                    Ue = i,
                                    Re = T,
                                    et = m,
                                    He = r,
                                    Ce = a,
                                    tt = o,
                                    pe = f,
                                    fe = !1;
                                function Le(O) {
                                    return (
                                        fe ||
                                            ((fe = !0),
                                            console.warn(
                                                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.",
                                            )),
                                        we(O) || R(O) === c
                                    );
                                }
                                function we(O) {
                                    return R(O) === p;
                                }
                                function S(O) {
                                    return R(O) === l;
                                }
                                function N(O) {
                                    return R(O) === s;
                                }
                                function H(O) {
                                    return (
                                        typeof O == "object" &&
                                        O !== null &&
                                        O.$$typeof === n
                                    );
                                }
                                function G(O) {
                                    return R(O) === u;
                                }
                                function d(O) {
                                    return R(O) === i;
                                }
                                function h(O) {
                                    return R(O) === T;
                                }
                                function g(O) {
                                    return R(O) === m;
                                }
                                function y(O) {
                                    return R(O) === r;
                                }
                                function k(O) {
                                    return R(O) === a;
                                }
                                function M(O) {
                                    return R(O) === o;
                                }
                                function w(O) {
                                    return R(O) === f;
                                }
                                ((e.AsyncMode = K),
                                    (e.ConcurrentMode = B),
                                    (e.ContextConsumer = te),
                                    (e.ContextProvider = J),
                                    (e.Element = se),
                                    (e.ForwardRef = Ze),
                                    (e.Fragment = Ue),
                                    (e.Lazy = Re),
                                    (e.Memo = et),
                                    (e.Portal = He),
                                    (e.Profiler = Ce),
                                    (e.StrictMode = tt),
                                    (e.Suspense = pe),
                                    (e.isAsyncMode = Le),
                                    (e.isConcurrentMode = we),
                                    (e.isContextConsumer = S),
                                    (e.isContextProvider = N),
                                    (e.isElement = H),
                                    (e.isForwardRef = G),
                                    (e.isFragment = d),
                                    (e.isLazy = h),
                                    (e.isMemo = g),
                                    (e.isPortal = y),
                                    (e.isProfiler = k),
                                    (e.isStrictMode = M),
                                    (e.isSuspense = w),
                                    (e.isValidElementType = P),
                                    (e.typeOf = R));
                            })();
                        },
                    })),
                    (gr = he({
                        "../../node_modules/react-is/index.js"(e, t) {
                            t.exports = $o();
                        },
                    })),
                    (Vo = he({
                        "../../node_modules/object-assign/index.js"(e, t) {
                            var n = Object.getOwnPropertySymbols,
                                r = Object.prototype.hasOwnProperty,
                                i = Object.prototype.propertyIsEnumerable;
                            function o(s) {
                                if (s == null)
                                    throw new TypeError(
                                        "Object.assign cannot be called with null or undefined",
                                    );
                                return Object(s);
                            }
                            function a() {
                                try {
                                    if (!Object.assign) return !1;
                                    var s = new String("abc");
                                    if (
                                        ((s[5] = "de"),
                                        Object.getOwnPropertyNames(s)[0] ===
                                            "5")
                                    )
                                        return !1;
                                    for (var l = {}, c = 0; c < 10; c++)
                                        l["_" + String.fromCharCode(c)] = c;
                                    var p = Object.getOwnPropertyNames(l).map(
                                        function (f) {
                                            return l[f];
                                        },
                                    );
                                    if (p.join("") !== "0123456789") return !1;
                                    var u = {};
                                    return (
                                        "abcdefghijklmnopqrst"
                                            .split("")
                                            .forEach(function (f) {
                                                u[f] = f;
                                            }),
                                        Object.keys(Object.assign({}, u)).join(
                                            "",
                                        ) === "abcdefghijklmnopqrst"
                                    );
                                } catch {
                                    return !1;
                                }
                            }
                            t.exports = a()
                                ? Object.assign
                                : function (s, l) {
                                      for (
                                          var c, p = o(s), u, f = 1;
                                          f < arguments.length;
                                          f++
                                      ) {
                                          c = Object(arguments[f]);
                                          for (var b in c)
                                              r.call(c, b) && (p[b] = c[b]);
                                          if (n) {
                                              u = n(c);
                                              for (var m = 0; m < u.length; m++)
                                                  i.call(c, u[m]) &&
                                                      (p[u[m]] = c[u[m]]);
                                          }
                                      }
                                      return p;
                                  };
                        },
                    })),
                    (br = he({
                        "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(
                            e,
                            t,
                        ) {
                            var n =
                                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                            t.exports = n;
                        },
                    })),
                    (vr = he({
                        "../../node_modules/prop-types/lib/has.js"(e, t) {
                            t.exports = Function.call.bind(
                                Object.prototype.hasOwnProperty,
                            );
                        },
                    })),
                    (Ko = he({
                        "../../node_modules/prop-types/checkPropTypes.js"(
                            e,
                            t,
                        ) {
                            var n = function () {};
                            ((r = br()),
                                (i = {}),
                                (o = vr()),
                                (n = function (s) {
                                    var l = "Warning: " + s;
                                    typeof console < "u" && console.error(l);
                                    try {
                                        throw new Error(l);
                                    } catch {}
                                }));
                            var r, i, o;
                            function a(s, l, c, p, u) {
                                for (var f in s)
                                    if (o(s, f)) {
                                        var b;
                                        try {
                                            if (typeof s[f] != "function") {
                                                var m = Error(
                                                    (p || "React class") +
                                                        ": " +
                                                        c +
                                                        " type `" +
                                                        f +
                                                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                                                        typeof s[f] +
                                                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                                                );
                                                throw (
                                                    (m.name =
                                                        "Invariant Violation"),
                                                    m
                                                );
                                            }
                                            b = s[f](l, f, p, c, null, r);
                                        } catch (F) {
                                            b = F;
                                        }
                                        if (
                                            (b &&
                                                !(b instanceof Error) &&
                                                n(
                                                    (p || "React class") +
                                                        ": type specification of " +
                                                        c +
                                                        " `" +
                                                        f +
                                                        "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                                                        typeof b +
                                                        ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                                                ),
                                            b instanceof Error &&
                                                !(b.message in i))
                                        ) {
                                            i[b.message] = !0;
                                            var T = u ? u() : "";
                                            n(
                                                "Failed " +
                                                    c +
                                                    " type: " +
                                                    b.message +
                                                    (T ?? ""),
                                            );
                                        }
                                    }
                            }
                            ((a.resetWarningCache = function () {
                                i = {};
                            }),
                                (t.exports = a));
                        },
                    })),
                    (Jo = he({
                        "../../node_modules/prop-types/factoryWithTypeCheckers.js"(
                            e,
                            t,
                        ) {
                            var n = gr(),
                                r = Vo(),
                                i = br(),
                                o = vr(),
                                a = Ko(),
                                s = function () {};
                            s = function (c) {
                                var p = "Warning: " + c;
                                typeof console < "u" && console.error(p);
                                try {
                                    throw new Error(p);
                                } catch {}
                            };
                            function l() {
                                return null;
                            }
                            t.exports = function (c, p) {
                                var u =
                                        typeof Symbol == "function" &&
                                        Symbol.iterator,
                                    f = "@@iterator";
                                function b(S) {
                                    var N = S && ((u && S[u]) || S[f]);
                                    if (typeof N == "function") return N;
                                }
                                var m = "<<anonymous>>",
                                    T = {
                                        array: v("array"),
                                        bigint: v("bigint"),
                                        bool: v("boolean"),
                                        func: v("function"),
                                        number: v("number"),
                                        object: v("object"),
                                        string: v("string"),
                                        symbol: v("symbol"),
                                        any: P(),
                                        arrayOf: R,
                                        element: K(),
                                        elementType: B(),
                                        instanceOf: te,
                                        node: Ue(),
                                        objectOf: se,
                                        oneOf: J,
                                        oneOfType: Ze,
                                        shape: et,
                                        exact: He,
                                    };
                                function F(S, N) {
                                    return S === N
                                        ? S !== 0 || 1 / S === 1 / N
                                        : S !== S && N !== N;
                                }
                                function I(S, N) {
                                    ((this.message = S),
                                        (this.data =
                                            N && typeof N == "object" ? N : {}),
                                        (this.stack = ""));
                                }
                                I.prototype = Error.prototype;
                                function x(S) {
                                    var N = {},
                                        H = 0;
                                    function G(h, g, y, k, M, w, O) {
                                        if (
                                            ((k = k || m),
                                            (w = w || y),
                                            O !== i)
                                        ) {
                                            if (p) {
                                                var U = new Error(
                                                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types",
                                                );
                                                throw (
                                                    (U.name =
                                                        "Invariant Violation"),
                                                    U
                                                );
                                            } else if (typeof console < "u") {
                                                var z = k + ":" + y;
                                                !N[z] &&
                                                    H < 3 &&
                                                    (s(
                                                        "You are manually calling a React.PropTypes validation function for the `" +
                                                            w +
                                                            "` prop on `" +
                                                            k +
                                                            "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                                                    ),
                                                    (N[z] = !0),
                                                    H++);
                                            }
                                        }
                                        return g[y] == null
                                            ? h
                                                ? g[y] === null
                                                    ? new I(
                                                          "The " +
                                                              M +
                                                              " `" +
                                                              w +
                                                              "` is marked as required " +
                                                              ("in `" +
                                                                  k +
                                                                  "`, but its value is `null`."),
                                                      )
                                                    : new I(
                                                          "The " +
                                                              M +
                                                              " `" +
                                                              w +
                                                              "` is marked as required in " +
                                                              ("`" +
                                                                  k +
                                                                  "`, but its value is `undefined`."),
                                                      )
                                                : null
                                            : S(g, y, k, M, w);
                                    }
                                    var d = G.bind(null, !1);
                                    return (
                                        (d.isRequired = G.bind(null, !0)),
                                        d
                                    );
                                }
                                function v(S) {
                                    function N(H, G, d, h, g, y) {
                                        var k = H[G],
                                            M = pe(k);
                                        if (M !== S) {
                                            var w = fe(k);
                                            return new I(
                                                "Invalid " +
                                                    h +
                                                    " `" +
                                                    g +
                                                    "` of type " +
                                                    ("`" +
                                                        w +
                                                        "` supplied to `" +
                                                        d +
                                                        "`, expected ") +
                                                    ("`" + S + "`."),
                                                { expectedType: S },
                                            );
                                        }
                                        return null;
                                    }
                                    return x(N);
                                }
                                function P() {
                                    return x(l);
                                }
                                function R(S) {
                                    function N(H, G, d, h, g) {
                                        if (typeof S != "function")
                                            return new I(
                                                "Property `" +
                                                    g +
                                                    "` of component `" +
                                                    d +
                                                    "` has invalid PropType notation inside arrayOf.",
                                            );
                                        var y = H[G];
                                        if (!Array.isArray(y)) {
                                            var k = pe(y);
                                            return new I(
                                                "Invalid " +
                                                    h +
                                                    " `" +
                                                    g +
                                                    "` of type " +
                                                    ("`" +
                                                        k +
                                                        "` supplied to `" +
                                                        d +
                                                        "`, expected an array."),
                                            );
                                        }
                                        for (var M = 0; M < y.length; M++) {
                                            var w = S(
                                                y,
                                                M,
                                                d,
                                                h,
                                                g + "[" + M + "]",
                                                i,
                                            );
                                            if (w instanceof Error) return w;
                                        }
                                        return null;
                                    }
                                    return x(N);
                                }
                                function K() {
                                    function S(N, H, G, d, h) {
                                        var g = N[H];
                                        if (!c(g)) {
                                            var y = pe(g);
                                            return new I(
                                                "Invalid " +
                                                    d +
                                                    " `" +
                                                    h +
                                                    "` of type " +
                                                    ("`" +
                                                        y +
                                                        "` supplied to `" +
                                                        G +
                                                        "`, expected a single ReactElement."),
                                            );
                                        }
                                        return null;
                                    }
                                    return x(S);
                                }
                                function B() {
                                    function S(N, H, G, d, h) {
                                        var g = N[H];
                                        if (!n.isValidElementType(g)) {
                                            var y = pe(g);
                                            return new I(
                                                "Invalid " +
                                                    d +
                                                    " `" +
                                                    h +
                                                    "` of type " +
                                                    ("`" +
                                                        y +
                                                        "` supplied to `" +
                                                        G +
                                                        "`, expected a single ReactElement type."),
                                            );
                                        }
                                        return null;
                                    }
                                    return x(S);
                                }
                                function te(S) {
                                    function N(H, G, d, h, g) {
                                        if (!(H[G] instanceof S)) {
                                            var y = S.name || m,
                                                k = we(H[G]);
                                            return new I(
                                                "Invalid " +
                                                    h +
                                                    " `" +
                                                    g +
                                                    "` of type " +
                                                    ("`" +
                                                        k +
                                                        "` supplied to `" +
                                                        d +
                                                        "`, expected ") +
                                                    ("instance of `" +
                                                        y +
                                                        "`."),
                                            );
                                        }
                                        return null;
                                    }
                                    return x(N);
                                }
                                function J(S) {
                                    if (!Array.isArray(S))
                                        return (
                                            arguments.length > 1
                                                ? s(
                                                      "Invalid arguments supplied to oneOf, expected an array, got " +
                                                          arguments.length +
                                                          " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
                                                  )
                                                : s(
                                                      "Invalid argument supplied to oneOf, expected an array.",
                                                  ),
                                            l
                                        );
                                    function N(H, G, d, h, g) {
                                        for (
                                            var y = H[G], k = 0;
                                            k < S.length;
                                            k++
                                        )
                                            if (F(y, S[k])) return null;
                                        var M = JSON.stringify(
                                            S,
                                            function (w, O) {
                                                var U = fe(O);
                                                return U === "symbol"
                                                    ? String(O)
                                                    : O;
                                            },
                                        );
                                        return new I(
                                            "Invalid " +
                                                h +
                                                " `" +
                                                g +
                                                "` of value `" +
                                                String(y) +
                                                "` " +
                                                ("supplied to `" +
                                                    d +
                                                    "`, expected one of " +
                                                    M +
                                                    "."),
                                        );
                                    }
                                    return x(N);
                                }
                                function se(S) {
                                    function N(H, G, d, h, g) {
                                        if (typeof S != "function")
                                            return new I(
                                                "Property `" +
                                                    g +
                                                    "` of component `" +
                                                    d +
                                                    "` has invalid PropType notation inside objectOf.",
                                            );
                                        var y = H[G],
                                            k = pe(y);
                                        if (k !== "object")
                                            return new I(
                                                "Invalid " +
                                                    h +
                                                    " `" +
                                                    g +
                                                    "` of type " +
                                                    ("`" +
                                                        k +
                                                        "` supplied to `" +
                                                        d +
                                                        "`, expected an object."),
                                            );
                                        for (var M in y)
                                            if (o(y, M)) {
                                                var w = S(
                                                    y,
                                                    M,
                                                    d,
                                                    h,
                                                    g + "." + M,
                                                    i,
                                                );
                                                if (w instanceof Error)
                                                    return w;
                                            }
                                        return null;
                                    }
                                    return x(N);
                                }
                                function Ze(S) {
                                    if (!Array.isArray(S))
                                        return (
                                            s(
                                                "Invalid argument supplied to oneOfType, expected an instance of array.",
                                            ),
                                            l
                                        );
                                    for (var N = 0; N < S.length; N++) {
                                        var H = S[N];
                                        if (typeof H != "function")
                                            return (
                                                s(
                                                    "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                                                        Le(H) +
                                                        " at index " +
                                                        N +
                                                        ".",
                                                ),
                                                l
                                            );
                                    }
                                    function G(d, h, g, y, k) {
                                        for (
                                            var M = [], w = 0;
                                            w < S.length;
                                            w++
                                        ) {
                                            var O = S[w],
                                                U = O(d, h, g, y, k, i);
                                            if (U == null) return null;
                                            U.data &&
                                                o(U.data, "expectedType") &&
                                                M.push(U.data.expectedType);
                                        }
                                        var z =
                                            M.length > 0
                                                ? ", expected one of type [" +
                                                  M.join(", ") +
                                                  "]"
                                                : "";
                                        return new I(
                                            "Invalid " +
                                                y +
                                                " `" +
                                                k +
                                                "` supplied to " +
                                                ("`" + g + "`" + z + "."),
                                        );
                                    }
                                    return x(G);
                                }
                                function Ue() {
                                    function S(N, H, G, d, h) {
                                        return Ce(N[H])
                                            ? null
                                            : new I(
                                                  "Invalid " +
                                                      d +
                                                      " `" +
                                                      h +
                                                      "` supplied to " +
                                                      ("`" +
                                                          G +
                                                          "`, expected a ReactNode."),
                                              );
                                    }
                                    return x(S);
                                }
                                function Re(S, N, H, G, d) {
                                    return new I(
                                        (S || "React class") +
                                            ": " +
                                            N +
                                            " type `" +
                                            H +
                                            "." +
                                            G +
                                            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                                            d +
                                            "`.",
                                    );
                                }
                                function et(S) {
                                    function N(H, G, d, h, g) {
                                        var y = H[G],
                                            k = pe(y);
                                        if (k !== "object")
                                            return new I(
                                                "Invalid " +
                                                    h +
                                                    " `" +
                                                    g +
                                                    "` of type `" +
                                                    k +
                                                    "` " +
                                                    ("supplied to `" +
                                                        d +
                                                        "`, expected `object`."),
                                            );
                                        for (var M in S) {
                                            var w = S[M];
                                            if (typeof w != "function")
                                                return Re(d, h, g, M, fe(w));
                                            var O = w(
                                                y,
                                                M,
                                                d,
                                                h,
                                                g + "." + M,
                                                i,
                                            );
                                            if (O) return O;
                                        }
                                        return null;
                                    }
                                    return x(N);
                                }
                                function He(S) {
                                    function N(H, G, d, h, g) {
                                        var y = H[G],
                                            k = pe(y);
                                        if (k !== "object")
                                            return new I(
                                                "Invalid " +
                                                    h +
                                                    " `" +
                                                    g +
                                                    "` of type `" +
                                                    k +
                                                    "` " +
                                                    ("supplied to `" +
                                                        d +
                                                        "`, expected `object`."),
                                            );
                                        var M = r({}, H[G], S);
                                        for (var w in M) {
                                            var O = S[w];
                                            if (
                                                o(S, w) &&
                                                typeof O != "function"
                                            )
                                                return Re(d, h, g, w, fe(O));
                                            if (!O)
                                                return new I(
                                                    "Invalid " +
                                                        h +
                                                        " `" +
                                                        g +
                                                        "` key `" +
                                                        w +
                                                        "` supplied to `" +
                                                        d +
                                                        "`.\nBad object: " +
                                                        JSON.stringify(
                                                            H[G],
                                                            null,
                                                            "  ",
                                                        ) +
                                                        `
Valid keys: ` +
                                                        JSON.stringify(
                                                            Object.keys(S),
                                                            null,
                                                            "  ",
                                                        ),
                                                );
                                            var U = O(
                                                y,
                                                w,
                                                d,
                                                h,
                                                g + "." + w,
                                                i,
                                            );
                                            if (U) return U;
                                        }
                                        return null;
                                    }
                                    return x(N);
                                }
                                function Ce(S) {
                                    switch (typeof S) {
                                        case "number":
                                        case "string":
                                        case "undefined":
                                            return !0;
                                        case "boolean":
                                            return !S;
                                        case "object":
                                            if (Array.isArray(S))
                                                return S.every(Ce);
                                            if (S === null || c(S)) return !0;
                                            var N = b(S);
                                            if (N) {
                                                var H = N.call(S),
                                                    G;
                                                if (N !== S.entries) {
                                                    for (
                                                        ;
                                                        !(G = H.next()).done;

                                                    )
                                                        if (!Ce(G.value))
                                                            return !1;
                                                } else
                                                    for (
                                                        ;
                                                        !(G = H.next()).done;

                                                    ) {
                                                        var d = G.value;
                                                        if (d && !Ce(d[1]))
                                                            return !1;
                                                    }
                                            } else return !1;
                                            return !0;
                                        default:
                                            return !1;
                                    }
                                }
                                function tt(S, N) {
                                    return S === "symbol"
                                        ? !0
                                        : N
                                          ? N["@@toStringTag"] === "Symbol" ||
                                            (typeof Symbol == "function" &&
                                                N instanceof Symbol)
                                          : !1;
                                }
                                function pe(S) {
                                    var N = typeof S;
                                    return Array.isArray(S)
                                        ? "array"
                                        : S instanceof RegExp
                                          ? "object"
                                          : tt(N, S)
                                            ? "symbol"
                                            : N;
                                }
                                function fe(S) {
                                    if (typeof S > "u" || S === null)
                                        return "" + S;
                                    var N = pe(S);
                                    if (N === "object") {
                                        if (S instanceof Date) return "date";
                                        if (S instanceof RegExp)
                                            return "regexp";
                                    }
                                    return N;
                                }
                                function Le(S) {
                                    var N = fe(S);
                                    switch (N) {
                                        case "array":
                                        case "object":
                                            return "an " + N;
                                        case "boolean":
                                        case "date":
                                        case "regexp":
                                            return "a " + N;
                                        default:
                                            return N;
                                    }
                                }
                                function we(S) {
                                    return !S.constructor || !S.constructor.name
                                        ? m
                                        : S.constructor.name;
                                }
                                return (
                                    (T.checkPropTypes = a),
                                    (T.resetWarningCache = a.resetWarningCache),
                                    (T.PropTypes = T),
                                    T
                                );
                            };
                        },
                    })),
                    (Xo = he({
                        "../../node_modules/prop-types/index.js"(e, t) {
                            ((n = gr()),
                                (r = !0),
                                (t.exports = Jo()(n.isElement, r)));
                            var n, r;
                        },
                    })),
                    (Qo = he({
                        "../../node_modules/react-innertext/index.js"(e, t) {
                            var n = function (o) {
                                    return Object.prototype.hasOwnProperty.call(
                                        o,
                                        "props",
                                    );
                                },
                                r = function (o, a) {
                                    return o + i(a);
                                },
                                i = function (o) {
                                    return o === null ||
                                        typeof o == "boolean" ||
                                        typeof o > "u"
                                        ? ""
                                        : typeof o == "number"
                                          ? o.toString()
                                          : typeof o == "string"
                                            ? o
                                            : Array.isArray(o)
                                              ? o.reduce(r, "")
                                              : n(o) &&
                                                  Object.prototype.hasOwnProperty.call(
                                                      o.props,
                                                      "children",
                                                  )
                                                ? i(o.props.children)
                                                : "";
                                };
                            ((i.default = i), (t.exports = i));
                        },
                    })),
                    (Zo = re.div(
                        ({ width: e, height: t, left: n, top: r }) => ({
                            width: `${e}px`,
                            height: `${t}px`,
                            left: `${n}px`,
                            top: `${r}px`,
                            position: "relative",
                            overflow: "hidden",
                        }),
                    )));
                Dn = "STORYBOOK_ADDON_ONBOARDING_CHANNEL";
                ((ri = Er("function")),
                    (oi = e => e === null),
                    (Fn = e =>
                        Object.prototype.toString.call(e).slice(8, -1) ===
                        "RegExp"),
                    (Bn = e =>
                        !ii(e) && !oi(e) && (ri(e) || typeof e == "object")),
                    (ii = Er("undefined")));
                ((ui = [
                    "Array",
                    "ArrayBuffer",
                    "AsyncFunction",
                    "AsyncGenerator",
                    "AsyncGeneratorFunction",
                    "Date",
                    "Error",
                    "Function",
                    "Generator",
                    "GeneratorFunction",
                    "HTMLElement",
                    "Map",
                    "Object",
                    "Promise",
                    "RegExp",
                    "Set",
                    "WeakMap",
                    "WeakSet",
                ]),
                    (pi = [
                        "bigint",
                        "boolean",
                        "null",
                        "number",
                        "string",
                        "symbol",
                        "undefined",
                    ]));
                hi = [
                    "innerHTML",
                    "ownerDocument",
                    "style",
                    "attributes",
                    "nodeValue",
                ];
                _.array = Array.isArray;
                _.arrayOf = (e, t) =>
                    !_.array(e) && !_.function(t) ? !1 : e.every(n => t(n));
                _.asyncGeneratorFunction = e =>
                    Nt(e) === "AsyncGeneratorFunction";
                _.asyncFunction = Ee("AsyncFunction");
                _.bigint = Je("bigint");
                _.boolean = e => e === !0 || e === !1;
                _.date = Ee("Date");
                _.defined = e => !_.undefined(e);
                _.domElement = e =>
                    _.object(e) &&
                    !_.plainObject(e) &&
                    e.nodeType === 1 &&
                    _.string(e.nodeName) &&
                    hi.every(t => t in e);
                _.empty = e =>
                    (_.string(e) && e.length === 0) ||
                    (_.array(e) && e.length === 0) ||
                    (_.object(e) &&
                        !_.map(e) &&
                        !_.set(e) &&
                        Object.keys(e).length === 0) ||
                    (_.set(e) && e.size === 0) ||
                    (_.map(e) && e.size === 0);
                _.error = Ee("Error");
                _.function = Je("function");
                _.generator = e =>
                    _.iterable(e) && _.function(e.next) && _.function(e.throw);
                _.generatorFunction = Ee("GeneratorFunction");
                _.instanceOf = (e, t) =>
                    !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
                _.iterable = e =>
                    !_.nullOrUndefined(e) && _.function(e[Symbol.iterator]);
                _.map = Ee("Map");
                _.nan = e => Number.isNaN(e);
                _.null = e => e === null;
                _.nullOrUndefined = e => _.null(e) || _.undefined(e);
                _.number = e => Je("number")(e) && !_.nan(e);
                _.numericString = e =>
                    _.string(e) && e.length > 0 && !Number.isNaN(Number(e));
                _.object = e =>
                    !_.nullOrUndefined(e) &&
                    (_.function(e) || typeof e == "object");
                _.oneOf = (e, t) => (_.array(e) ? e.indexOf(t) > -1 : !1);
                _.plainFunction = Ee("Function");
                _.plainObject = e => {
                    if (Nt(e) !== "Object") return !1;
                    let t = Object.getPrototypeOf(e);
                    return t === null || t === Object.getPrototypeOf({});
                };
                _.primitive = e => _.null(e) || di(typeof e);
                _.promise = Ee("Promise");
                _.propertyOf = (e, t, n) => {
                    if (!_.object(e) || !t) return !1;
                    let r = e[t];
                    return _.function(n) ? n(r) : _.defined(r);
                };
                _.regexp = Ee("RegExp");
                _.set = Ee("Set");
                _.string = Je("string");
                _.symbol = Je("symbol");
                _.undefined = Je("undefined");
                _.weakMap = Ee("WeakMap");
                _.weakSet = Ee("WeakSet");
                j = _;
                ((bi = Be(Yo(), 1)),
                    (wr = Be(qo(), 1)),
                    (Ct = Be(rn(), 1)),
                    (Pt = Be(rn(), 1)),
                    (C = Be(Xo())),
                    (ht =
                        typeof window < "u" &&
                        typeof document < "u" &&
                        typeof navigator < "u"),
                    (vi = (function () {
                        for (
                            var e = ["Edge", "Trident", "Firefox"], t = 0;
                            t < e.length;
                            t += 1
                        )
                            if (ht && navigator.userAgent.indexOf(e[t]) >= 0)
                                return 1;
                        return 0;
                    })()));
                ((wi = ht && window.Promise), (Si = wi ? Ei : Oi));
                ((Yn =
                    ht &&
                    !!(window.MSInputMethodContext && document.documentMode)),
                    (qn = ht && /MSIE 10/.test(navigator.userAgent)));
                ((Ci = function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function",
                        );
                }),
                    (Pi = (function () {
                        function e(t, n) {
                            for (var r = 0; r < n.length; r++) {
                                var i = n[r];
                                ((i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(t, i.key, i));
                            }
                        }
                        return function (t, n, r) {
                            return (n && e(t.prototype, n), r && e(t, r), t);
                        };
                    })()),
                    (Ke = function (e, t, n) {
                        return (
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n),
                            e
                        );
                    }),
                    (de =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r,
                                    ) && (e[r] = n[r]);
                            }
                            return e;
                        }));
                Ui = ht && /Firefox/i.test(navigator.userAgent);
                ((Dr = [
                    "auto-start",
                    "auto",
                    "auto-end",
                    "top-start",
                    "top",
                    "top-end",
                    "right-start",
                    "right",
                    "right-end",
                    "bottom-end",
                    "bottom",
                    "bottom-start",
                    "left-end",
                    "left",
                    "left-start",
                ]),
                    (Vt = Dr.slice(3)));
                Kt = {
                    FLIP: "flip",
                    CLOCKWISE: "clockwise",
                    COUNTERCLOCKWISE: "counterclockwise",
                };
                ((ea = {
                    shift: { order: 100, enabled: !0, fn: Xi },
                    offset: { order: 200, enabled: !0, fn: Ki, offset: 0 },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: Ji,
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: { order: 400, enabled: !0, fn: qi },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: Gi,
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: Yi,
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1,
                    },
                    inner: { order: 700, enabled: !1, fn: Zi },
                    hide: { order: 800, enabled: !0, fn: Qi },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: Hi,
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: Fi,
                        onLoad: Bi,
                        gpuAcceleration: void 0,
                    },
                }),
                    (ta = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function () {},
                        onUpdate: function () {},
                        modifiers: ea,
                    }),
                    (jt = (function () {
                        function e(t, n) {
                            var r = this,
                                i =
                                    arguments.length > 2 &&
                                    arguments[2] !== void 0
                                        ? arguments[2]
                                        : {};
                            (Ci(this, e),
                                (this.scheduleUpdate = function () {
                                    return requestAnimationFrame(r.update);
                                }),
                                (this.update = Si(this.update.bind(this))),
                                (this.options = de({}, e.Defaults, i)),
                                (this.state = {
                                    isDestroyed: !1,
                                    isCreated: !1,
                                    scrollParents: [],
                                }),
                                (this.reference = t && t.jquery ? t[0] : t),
                                (this.popper = n && n.jquery ? n[0] : n),
                                (this.options.modifiers = {}),
                                Object.keys(
                                    de({}, e.Defaults.modifiers, i.modifiers),
                                ).forEach(function (a) {
                                    r.options.modifiers[a] = de(
                                        {},
                                        e.Defaults.modifiers[a] || {},
                                        i.modifiers ? i.modifiers[a] : {},
                                    );
                                }),
                                (this.modifiers = Object.keys(
                                    this.options.modifiers,
                                )
                                    .map(function (a) {
                                        return de(
                                            { name: a },
                                            r.options.modifiers[a],
                                        );
                                    })
                                    .sort(function (a, s) {
                                        return a.order - s.order;
                                    })),
                                this.modifiers.forEach(function (a) {
                                    a.enabled &&
                                        Sr(a.onLoad) &&
                                        a.onLoad(
                                            r.reference,
                                            r.popper,
                                            r.options,
                                            a,
                                            r.state,
                                        );
                                }),
                                this.update());
                            var o = this.options.eventsEnabled;
                            (o && this.enableEventListeners(),
                                (this.state.eventsEnabled = o));
                        }
                        return (
                            Pi(e, [
                                {
                                    key: "update",
                                    value: function () {
                                        return Ai.call(this);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        return ki.call(this);
                                    },
                                },
                                {
                                    key: "enableEventListeners",
                                    value: function () {
                                        return ji.call(this);
                                    },
                                },
                                {
                                    key: "disableEventListeners",
                                    value: function () {
                                        return Li.call(this);
                                    },
                                },
                            ]),
                            e
                        );
                    })()));
                jt.Utils = window.PopperUtils;
                jt.placements = Dr;
                jt.Defaults = ta;
                ((Jn = jt),
                    (en = Be(rn())),
                    (na = [
                        "innerHTML",
                        "ownerDocument",
                        "style",
                        "attributes",
                        "nodeValue",
                    ]),
                    (ra = [
                        "Array",
                        "ArrayBuffer",
                        "AsyncFunction",
                        "AsyncGenerator",
                        "AsyncGeneratorFunction",
                        "Date",
                        "Error",
                        "Function",
                        "Generator",
                        "GeneratorFunction",
                        "HTMLElement",
                        "Map",
                        "Object",
                        "Promise",
                        "RegExp",
                        "Set",
                        "WeakMap",
                        "WeakSet",
                    ]),
                    (oa = [
                        "bigint",
                        "boolean",
                        "null",
                        "number",
                        "string",
                        "symbol",
                        "undefined",
                    ]));
                A.array = Array.isArray;
                A.arrayOf = function (e, t) {
                    return !A.array(e) && !A.function(t)
                        ? !1
                        : e.every(function (n) {
                              return t(n);
                          });
                };
                A.asyncGeneratorFunction = function (e) {
                    return Mt(e) === "AsyncGeneratorFunction";
                };
                A.asyncFunction = Oe("AsyncFunction");
                A.bigint = Qe("bigint");
                A.boolean = function (e) {
                    return e === !0 || e === !1;
                };
                A.date = Oe("Date");
                A.defined = function (e) {
                    return !A.undefined(e);
                };
                A.domElement = function (e) {
                    return (
                        A.object(e) &&
                        !A.plainObject(e) &&
                        e.nodeType === 1 &&
                        A.string(e.nodeName) &&
                        na.every(function (t) {
                            return t in e;
                        })
                    );
                };
                A.empty = function (e) {
                    return (
                        (A.string(e) && e.length === 0) ||
                        (A.array(e) && e.length === 0) ||
                        (A.object(e) &&
                            !A.map(e) &&
                            !A.set(e) &&
                            Object.keys(e).length === 0) ||
                        (A.set(e) && e.size === 0) ||
                        (A.map(e) && e.size === 0)
                    );
                };
                A.error = Oe("Error");
                A.function = Qe("function");
                A.generator = function (e) {
                    return (
                        A.iterable(e) &&
                        A.function(e.next) &&
                        A.function(e.throw)
                    );
                };
                A.generatorFunction = Oe("GeneratorFunction");
                A.instanceOf = function (e, t) {
                    return !e || !t
                        ? !1
                        : Object.getPrototypeOf(e) === t.prototype;
                };
                A.iterable = function (e) {
                    return (
                        !A.nullOrUndefined(e) && A.function(e[Symbol.iterator])
                    );
                };
                A.map = Oe("Map");
                A.nan = function (e) {
                    return Number.isNaN(e);
                };
                A.null = function (e) {
                    return e === null;
                };
                A.nullOrUndefined = function (e) {
                    return A.null(e) || A.undefined(e);
                };
                A.number = function (e) {
                    return Qe("number")(e) && !A.nan(e);
                };
                A.numericString = function (e) {
                    return (
                        A.string(e) && e.length > 0 && !Number.isNaN(Number(e))
                    );
                };
                A.object = function (e) {
                    return (
                        !A.nullOrUndefined(e) &&
                        (A.function(e) || typeof e == "object")
                    );
                };
                A.oneOf = function (e, t) {
                    return A.array(e) ? e.indexOf(t) > -1 : !1;
                };
                A.plainFunction = Oe("Function");
                A.plainObject = function (e) {
                    if (Mt(e) !== "Object") return !1;
                    var t = Object.getPrototypeOf(e);
                    return t === null || t === Object.getPrototypeOf({});
                };
                A.primitive = function (e) {
                    return A.null(e) || aa(typeof e);
                };
                A.promise = Oe("Promise");
                A.propertyOf = function (e, t, n) {
                    if (!A.object(e) || !t) return !1;
                    var r = e[t];
                    return A.function(n) ? n(r) : A.defined(r);
                };
                A.regexp = Oe("RegExp");
                A.set = Oe("Set");
                A.string = Qe("string");
                A.symbol = Qe("symbol");
                A.undefined = Qe("undefined");
                A.weakMap = Oe("WeakMap");
                A.weakSet = Oe("WeakSet");
                D = A;
                ((sa = Fr("function")),
                    (la = function (e) {
                        return e === null;
                    }),
                    (Xn = function (e) {
                        return (
                            Object.prototype.toString.call(e).slice(8, -1) ===
                            "RegExp"
                        );
                    }),
                    (Qn = function (e) {
                        return (
                            !ca(e) && !la(e) && (sa(e) || typeof e == "object")
                        );
                    }),
                    (ca = Fr("undefined")),
                    (tn = function (e) {
                        var t = typeof Symbol == "function" && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && typeof e.length == "number")
                            return {
                                next: function () {
                                    return (
                                        e && r >= e.length && (e = void 0),
                                        { value: e && e[r++], done: !e }
                                    );
                                },
                            };
                        throw new TypeError(
                            t
                                ? "Object is not iterable."
                                : "Symbol.iterator is not defined.",
                        );
                    }));
                ((wa = {
                    flip: { padding: 20 },
                    preventOverflow: { padding: 10 },
                }),
                    (Sa =
                        "The typeValidator argument must be a function with the signature function(props, propName, componentName)."),
                    (Ta =
                        "The error message is optional, but must be a string if provided."));
                ((q = {
                    INIT: "init",
                    IDLE: "idle",
                    OPENING: "opening",
                    OPEN: "open",
                    CLOSING: "closing",
                    ERROR: "error",
                }),
                    (ut = De.createPortal !== void 0));
                Hr = (function (e) {
                    vt(n, e);
                    var t = Et(n);
                    function n() {
                        return (gt(this, n), t.apply(this, arguments));
                    }
                    return (
                        bt(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    Se() &&
                                        (this.node || this.appendNode(),
                                        ut || this.renderPortal());
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    Se() && (ut || this.renderPortal());
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    !Se() ||
                                        !this.node ||
                                        (ut ||
                                            De.unmountComponentAtNode(
                                                this.node,
                                            ),
                                        this.node &&
                                            this.node.parentNode ===
                                                document.body &&
                                            (document.body.removeChild(
                                                this.node,
                                            ),
                                            (this.node = void 0)));
                                },
                            },
                            {
                                key: "appendNode",
                                value: function () {
                                    var r = this.props,
                                        i = r.id,
                                        o = r.zIndex;
                                    this.node ||
                                        ((this.node =
                                            document.createElement("div")),
                                        i && (this.node.id = i),
                                        o && (this.node.style.zIndex = o),
                                        document.body.appendChild(this.node));
                                },
                            },
                            {
                                key: "renderPortal",
                                value: function () {
                                    if (!Se()) return null;
                                    var r = this.props,
                                        i = r.children,
                                        o = r.setRef;
                                    if ((this.node || this.appendNode(), ut))
                                        return De.createPortal(i, this.node);
                                    var a =
                                        De.unstable_renderSubtreeIntoContainer(
                                            this,
                                            i.length > 1
                                                ? E.createElement(
                                                      "div",
                                                      null,
                                                      i,
                                                  )
                                                : i[0],
                                            this.node,
                                        );
                                    return (o(a), null);
                                },
                            },
                            {
                                key: "renderReact16",
                                value: function () {
                                    var r = this.props,
                                        i = r.hasChildren,
                                        o = r.placement,
                                        a = r.target;
                                    return i
                                        ? this.renderPortal()
                                        : a || o === "center"
                                          ? this.renderPortal()
                                          : null;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return ut ? this.renderReact16() : null;
                                },
                            },
                        ]),
                        n
                    );
                })(E.Component);
                oe(Hr, "propTypes", {
                    children: C.default.oneOfType([
                        C.default.element,
                        C.default.array,
                    ]),
                    hasChildren: C.default.bool,
                    id: C.default.oneOfType([
                        C.default.string,
                        C.default.number,
                    ]),
                    placement: C.default.string,
                    setRef: C.default.func.isRequired,
                    target: C.default.oneOfType([
                        C.default.object,
                        C.default.string,
                    ]),
                    zIndex: C.default.number,
                });
                Gr = (function (e) {
                    vt(n, e);
                    var t = Et(n);
                    function n() {
                        return (gt(this, n), t.apply(this, arguments));
                    }
                    return (
                        bt(n, [
                            {
                                key: "parentStyle",
                                get: function () {
                                    var r = this.props,
                                        i = r.placement,
                                        o = r.styles,
                                        a = o.arrow.length,
                                        s = {
                                            pointerEvents: "none",
                                            position: "absolute",
                                            width: "100%",
                                        };
                                    return (
                                        i.startsWith("top")
                                            ? ((s.bottom = 0),
                                              (s.left = 0),
                                              (s.right = 0),
                                              (s.height = a))
                                            : i.startsWith("bottom")
                                              ? ((s.left = 0),
                                                (s.right = 0),
                                                (s.top = 0),
                                                (s.height = a))
                                              : i.startsWith("left")
                                                ? ((s.right = 0),
                                                  (s.top = 0),
                                                  (s.bottom = 0))
                                                : i.startsWith("right") &&
                                                  ((s.left = 0), (s.top = 0)),
                                        s
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var r = this.props,
                                        i = r.placement,
                                        o = r.setArrowRef,
                                        a = r.styles,
                                        s = a.arrow,
                                        l = s.color,
                                        c = s.display,
                                        p = s.length,
                                        u = s.margin,
                                        f = s.position,
                                        b = s.spread,
                                        m = { display: c, position: f },
                                        T,
                                        F = b,
                                        I = p;
                                    return (
                                        i.startsWith("top")
                                            ? ((T = "0,0 "
                                                  .concat(F / 2, ",")
                                                  .concat(I, " ")
                                                  .concat(F, ",0")),
                                              (m.bottom = 0),
                                              (m.marginLeft = u),
                                              (m.marginRight = u))
                                            : i.startsWith("bottom")
                                              ? ((T = ""
                                                    .concat(F, ",")
                                                    .concat(I, " ")
                                                    .concat(F / 2, ",0 0,")
                                                    .concat(I)),
                                                (m.top = 0),
                                                (m.marginLeft = u),
                                                (m.marginRight = u))
                                              : i.startsWith("left")
                                                ? ((I = b),
                                                  (F = p),
                                                  (T = "0,0 "
                                                      .concat(F, ",")
                                                      .concat(I / 2, " 0,")
                                                      .concat(I)),
                                                  (m.right = 0),
                                                  (m.marginTop = u),
                                                  (m.marginBottom = u))
                                                : i.startsWith("right") &&
                                                  ((I = b),
                                                  (F = p),
                                                  (T = ""
                                                      .concat(F, ",")
                                                      .concat(I, " ")
                                                      .concat(F, ",0 0,")
                                                      .concat(I / 2)),
                                                  (m.left = 0),
                                                  (m.marginTop = u),
                                                  (m.marginBottom = u)),
                                        E.createElement(
                                            "div",
                                            {
                                                className: "__floater__arrow",
                                                style: this.parentStyle,
                                            },
                                            E.createElement(
                                                "span",
                                                { ref: o, style: m },
                                                E.createElement(
                                                    "svg",
                                                    {
                                                        width: F,
                                                        height: I,
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                    },
                                                    E.createElement("polygon", {
                                                        points: T,
                                                        fill: l,
                                                    }),
                                                ),
                                            ),
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(E.Component);
                oe(Gr, "propTypes", {
                    placement: C.default.string.isRequired,
                    setArrowRef: C.default.func.isRequired,
                    styles: C.default.object.isRequired,
                });
                ka = ["color", "height", "width"];
                zr.propTypes = {
                    handleClick: C.default.func.isRequired,
                    styles: C.default.object.isRequired,
                };
                Yr.propTypes = {
                    content: C.default.node.isRequired,
                    footer: C.default.node,
                    handleClick: C.default.func.isRequired,
                    open: C.default.bool,
                    positionWrapper: C.default.bool.isRequired,
                    showCloseButton: C.default.bool.isRequired,
                    styles: C.default.object.isRequired,
                    title: C.default.node,
                };
                qr = (function (e) {
                    vt(n, e);
                    var t = Et(n);
                    function n() {
                        return (gt(this, n), t.apply(this, arguments));
                    }
                    return (
                        bt(n, [
                            {
                                key: "style",
                                get: function () {
                                    var r = this.props,
                                        i = r.disableAnimation,
                                        o = r.component,
                                        a = r.placement,
                                        s = r.hideArrow,
                                        l = r.status,
                                        c = r.styles,
                                        p = c.arrow.length,
                                        u = c.floater,
                                        f = c.floaterCentered,
                                        b = c.floaterClosing,
                                        m = c.floaterOpening,
                                        T = c.floaterWithAnimation,
                                        F = c.floaterWithComponent,
                                        I = {};
                                    return (
                                        s ||
                                            (a.startsWith("top")
                                                ? (I.padding = "0 0 ".concat(
                                                      p,
                                                      "px",
                                                  ))
                                                : a.startsWith("bottom")
                                                  ? (I.padding = "".concat(
                                                        p,
                                                        "px 0 0",
                                                    ))
                                                  : a.startsWith("left")
                                                    ? (I.padding = "0 ".concat(
                                                          p,
                                                          "px 0 0",
                                                      ))
                                                    : a.startsWith("right") &&
                                                      (I.padding =
                                                          "0 0 0 ".concat(
                                                              p,
                                                              "px",
                                                          ))),
                                        [q.OPENING, q.OPEN].indexOf(l) !== -1 &&
                                            (I = ee(ee({}, I), m)),
                                        l === q.CLOSING &&
                                            (I = ee(ee({}, I), b)),
                                        l === q.OPEN &&
                                            !i &&
                                            (I = ee(ee({}, I), T)),
                                        a === "center" &&
                                            (I = ee(ee({}, I), f)),
                                        o && (I = ee(ee({}, I), F)),
                                        ee(ee({}, u), I)
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var r = this.props,
                                        i = r.component,
                                        o = r.handleClick,
                                        a = r.hideArrow,
                                        s = r.setFloaterRef,
                                        l = r.status,
                                        c = {},
                                        p = ["__floater"];
                                    return (
                                        i
                                            ? E.isValidElement(i)
                                                ? (c.content = E.cloneElement(
                                                      i,
                                                      { closeFn: o },
                                                  ))
                                                : (c.content = i({
                                                      closeFn: o,
                                                  }))
                                            : (c.content = E.createElement(
                                                  Yr,
                                                  this.props,
                                              )),
                                        l === q.OPEN &&
                                            p.push("__floater__open"),
                                        a ||
                                            (c.arrow = E.createElement(
                                                Gr,
                                                this.props,
                                            )),
                                        E.createElement(
                                            "div",
                                            {
                                                ref: s,
                                                className: p.join(" "),
                                                style: this.style,
                                            },
                                            E.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "__floater__body",
                                                },
                                                c.content,
                                                c.arrow,
                                            ),
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(E.Component);
                oe(qr, "propTypes", {
                    component: C.default.oneOfType([
                        C.default.func,
                        C.default.element,
                    ]),
                    content: C.default.node,
                    disableAnimation: C.default.bool.isRequired,
                    footer: C.default.node,
                    handleClick: C.default.func.isRequired,
                    hideArrow: C.default.bool.isRequired,
                    open: C.default.bool,
                    placement: C.default.string.isRequired,
                    positionWrapper: C.default.bool.isRequired,
                    setArrowRef: C.default.func.isRequired,
                    setFloaterRef: C.default.func.isRequired,
                    showCloseButton: C.default.bool,
                    status: C.default.string.isRequired,
                    styles: C.default.object.isRequired,
                    title: C.default.node,
                });
                $r = (function (e) {
                    vt(n, e);
                    var t = Et(n);
                    function n() {
                        return (gt(this, n), t.apply(this, arguments));
                    }
                    return (
                        bt(n, [
                            {
                                key: "render",
                                value: function () {
                                    var r = this.props,
                                        i = r.children,
                                        o = r.handleClick,
                                        a = r.handleMouseEnter,
                                        s = r.handleMouseLeave,
                                        l = r.setChildRef,
                                        c = r.setWrapperRef,
                                        p = r.style,
                                        u = r.styles,
                                        f;
                                    if (i)
                                        if (E.Children.count(i) === 1)
                                            if (!E.isValidElement(i))
                                                f = E.createElement(
                                                    "span",
                                                    null,
                                                    i,
                                                );
                                            else {
                                                var b = D.function(i.type)
                                                    ? "innerRef"
                                                    : "ref";
                                                f = E.cloneElement(
                                                    E.Children.only(i),
                                                    oe({}, b, l),
                                                );
                                            }
                                        else f = i;
                                    return f
                                        ? E.createElement(
                                              "span",
                                              {
                                                  ref: c,
                                                  style: ee(ee({}, u), p),
                                                  onClick: o,
                                                  onMouseEnter: a,
                                                  onMouseLeave: s,
                                              },
                                              f,
                                          )
                                        : null;
                                },
                            },
                        ]),
                        n
                    );
                })(E.Component);
                oe($r, "propTypes", {
                    children: C.default.node,
                    handleClick: C.default.func.isRequired,
                    handleMouseEnter: C.default.func.isRequired,
                    handleMouseLeave: C.default.func.isRequired,
                    setChildRef: C.default.func.isRequired,
                    setWrapperRef: C.default.func.isRequired,
                    style: C.default.object,
                    styles: C.default.object.isRequired,
                });
                Na = { zIndex: 100 };
                ((Ma = ["arrow", "flip", "offset"]),
                    (La = ["position", "top", "right", "bottom", "left"]),
                    (fn = (function (e) {
                        vt(n, e);
                        var t = Et(n);
                        function n(r) {
                            var i;
                            return (
                                gt(this, n),
                                (i = t.call(this, r)),
                                oe(Pe(i), "setArrowRef", function (o) {
                                    i.arrowRef = o;
                                }),
                                oe(Pe(i), "setChildRef", function (o) {
                                    i.childRef = o;
                                }),
                                oe(Pe(i), "setFloaterRef", function (o) {
                                    i.floaterRef = o;
                                }),
                                oe(Pe(i), "setWrapperRef", function (o) {
                                    i.wrapperRef = o;
                                }),
                                oe(Pe(i), "handleTransitionEnd", function () {
                                    var o = i.state.status,
                                        a = i.props.callback;
                                    (i.wrapperPopper &&
                                        i.wrapperPopper.instance.update(),
                                        i.setState(
                                            {
                                                status:
                                                    o === q.OPENING
                                                        ? q.OPEN
                                                        : q.IDLE,
                                            },
                                            function () {
                                                var s = i.state.status;
                                                a(
                                                    s === q.OPEN
                                                        ? "open"
                                                        : "close",
                                                    i.props,
                                                );
                                            },
                                        ));
                                }),
                                oe(Pe(i), "handleClick", function () {
                                    var o = i.props,
                                        a = o.event,
                                        s = o.open;
                                    if (!D.boolean(s)) {
                                        var l = i.state,
                                            c = l.positionWrapper,
                                            p = l.status;
                                        (i.event === "click" ||
                                            (i.event === "hover" && c)) &&
                                            (Rt({
                                                title: "click",
                                                data: [
                                                    {
                                                        event: a,
                                                        status:
                                                            p === q.OPEN
                                                                ? "closing"
                                                                : "opening",
                                                    },
                                                ],
                                                debug: i.debug,
                                            }),
                                            i.toggle());
                                    }
                                }),
                                oe(Pe(i), "handleMouseEnter", function () {
                                    var o = i.props,
                                        a = o.event,
                                        s = o.open;
                                    if (!(D.boolean(s) || Jt())) {
                                        var l = i.state.status;
                                        i.event === "hover" &&
                                            l === q.IDLE &&
                                            (Rt({
                                                title: "mouseEnter",
                                                data: [
                                                    {
                                                        key: "originalEvent",
                                                        value: a,
                                                    },
                                                ],
                                                debug: i.debug,
                                            }),
                                            clearTimeout(i.eventDelayTimeout),
                                            i.toggle());
                                    }
                                }),
                                oe(Pe(i), "handleMouseLeave", function () {
                                    var o = i.props,
                                        a = o.event,
                                        s = o.eventDelay,
                                        l = o.open;
                                    if (!(D.boolean(l) || Jt())) {
                                        var c = i.state,
                                            p = c.status,
                                            u = c.positionWrapper;
                                        i.event === "hover" &&
                                            (Rt({
                                                title: "mouseLeave",
                                                data: [
                                                    {
                                                        key: "originalEvent",
                                                        value: a,
                                                    },
                                                ],
                                                debug: i.debug,
                                            }),
                                            s
                                                ? [q.OPENING, q.OPEN].indexOf(
                                                      p,
                                                  ) !== -1 &&
                                                  !u &&
                                                  !i.eventDelayTimeout &&
                                                  (i.eventDelayTimeout =
                                                      setTimeout(function () {
                                                          (delete i.eventDelayTimeout,
                                                              i.toggle());
                                                      }, s * 1e3))
                                                : i.toggle(q.IDLE));
                                    }
                                }),
                                (i.state = {
                                    currentPlacement: r.placement,
                                    needsUpdate: !1,
                                    positionWrapper:
                                        r.wrapperOptions.position && !!r.target,
                                    status: q.INIT,
                                    statusWrapper: q.INIT,
                                }),
                                (i._isMounted = !1),
                                (i.hasMounted = !1),
                                Se() &&
                                    window.addEventListener(
                                        "load",
                                        function () {
                                            (i.popper &&
                                                i.popper.instance.update(),
                                                i.wrapperPopper &&
                                                    i.wrapperPopper.instance.update());
                                        },
                                    ),
                                i
                            );
                        }
                        return (
                            bt(n, [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        if (Se()) {
                                            var r = this.state.positionWrapper,
                                                i = this.props,
                                                o = i.children,
                                                a = i.open,
                                                s = i.target;
                                            ((this._isMounted = !0),
                                                Rt({
                                                    title: "init",
                                                    data: {
                                                        hasChildren: !!o,
                                                        hasTarget: !!s,
                                                        isControlled:
                                                            D.boolean(a),
                                                        positionWrapper: r,
                                                        target: this.target,
                                                        floater:
                                                            this.floaterRef,
                                                    },
                                                    debug: this.debug,
                                                }),
                                                this.hasMounted ||
                                                    (this.initPopper(),
                                                    (this.hasMounted = !0)),
                                                !o && s && D.boolean(a));
                                        }
                                    },
                                },
                                {
                                    key: "componentDidUpdate",
                                    value: function (r, i) {
                                        if (Se()) {
                                            var o = this.props,
                                                a = o.autoOpen,
                                                s = o.open,
                                                l = o.target,
                                                c = o.wrapperOptions,
                                                p = ga(i, this.state),
                                                u = p.changedFrom,
                                                f = p.changed;
                                            if (r.open !== s) {
                                                var b;
                                                (D.boolean(s) &&
                                                    (b = s
                                                        ? q.OPENING
                                                        : q.CLOSING),
                                                    this.toggle(b));
                                            }
                                            ((r.wrapperOptions.position !==
                                                c.position ||
                                                r.target !== l) &&
                                                this.changeWrapperPosition(
                                                    this.props,
                                                ),
                                                f("status", q.IDLE) && s
                                                    ? this.toggle(q.OPEN)
                                                    : u(
                                                          "status",
                                                          q.INIT,
                                                          q.IDLE,
                                                      ) &&
                                                      a &&
                                                      this.toggle(q.OPEN),
                                                this.popper &&
                                                    f("status", q.OPENING) &&
                                                    this.popper.instance.update(),
                                                this.floaterRef &&
                                                    (f("status", q.OPENING) ||
                                                        f(
                                                            "status",
                                                            q.CLOSING,
                                                        )) &&
                                                    Aa(
                                                        this.floaterRef,
                                                        "transitionend",
                                                        this
                                                            .handleTransitionEnd,
                                                    ),
                                                f("needsUpdate", !0) &&
                                                    this.rebuildPopper());
                                        }
                                    },
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function () {
                                        Se() &&
                                            ((this._isMounted = !1),
                                            this.popper &&
                                                this.popper.instance.destroy(),
                                            this.wrapperPopper &&
                                                this.wrapperPopper.instance.destroy());
                                    },
                                },
                                {
                                    key: "initPopper",
                                    value: function () {
                                        var r = this,
                                            i =
                                                arguments.length > 0 &&
                                                arguments[0] !== void 0
                                                    ? arguments[0]
                                                    : this.target,
                                            o = this.state.positionWrapper,
                                            a = this.props,
                                            s = a.disableFlip,
                                            l = a.getPopper,
                                            c = a.hideArrow,
                                            p = a.offset,
                                            u = a.placement,
                                            f = a.wrapperOptions,
                                            b =
                                                u === "top" || u === "bottom"
                                                    ? "flip"
                                                    : [
                                                          "right",
                                                          "bottom-end",
                                                          "top-end",
                                                          "left",
                                                          "top-start",
                                                          "bottom-start",
                                                      ];
                                        if (u === "center")
                                            this.setState({ status: q.IDLE });
                                        else if (i && this.floaterRef) {
                                            var m = this.options,
                                                T = m.arrow,
                                                F = m.flip,
                                                I = m.offset,
                                                x = Wr(m, Ma);
                                            new Jn(i, this.floaterRef, {
                                                placement: u,
                                                modifiers: ee(
                                                    {
                                                        arrow: ee(
                                                            {
                                                                enabled: !c,
                                                                element:
                                                                    this
                                                                        .arrowRef,
                                                            },
                                                            T,
                                                        ),
                                                        flip: ee(
                                                            {
                                                                enabled: !s,
                                                                behavior: b,
                                                            },
                                                            F,
                                                        ),
                                                        offset: ee(
                                                            {
                                                                offset: "0, ".concat(
                                                                    p,
                                                                    "px",
                                                                ),
                                                            },
                                                            I,
                                                        ),
                                                    },
                                                    x,
                                                ),
                                                onCreate: function (P) {
                                                    var R;
                                                    if (
                                                        ((r.popper = P),
                                                        !(
                                                            (R =
                                                                r.floaterRef) !==
                                                                null &&
                                                            R !== void 0 &&
                                                            R.isConnected
                                                        ))
                                                    ) {
                                                        r.setState({
                                                            needsUpdate: !0,
                                                        });
                                                        return;
                                                    }
                                                    (l(P, "floater"),
                                                        r._isMounted &&
                                                            r.setState({
                                                                currentPlacement:
                                                                    P.placement,
                                                                status: q.IDLE,
                                                            }),
                                                        u !== P.placement &&
                                                            setTimeout(
                                                                function () {
                                                                    P.instance.update();
                                                                },
                                                                1,
                                                            ));
                                                },
                                                onUpdate: function (P) {
                                                    r.popper = P;
                                                    var R =
                                                        r.state
                                                            .currentPlacement;
                                                    r._isMounted &&
                                                        P.placement !== R &&
                                                        r.setState({
                                                            currentPlacement:
                                                                P.placement,
                                                        });
                                                },
                                            });
                                        }
                                        if (o) {
                                            var v = D.undefined(f.offset)
                                                ? 0
                                                : f.offset;
                                            new Jn(
                                                this.target,
                                                this.wrapperRef,
                                                {
                                                    placement: f.placement || u,
                                                    modifiers: {
                                                        arrow: { enabled: !1 },
                                                        offset: {
                                                            offset: "0, ".concat(
                                                                v,
                                                                "px",
                                                            ),
                                                        },
                                                        flip: { enabled: !1 },
                                                    },
                                                    onCreate: function (P) {
                                                        ((r.wrapperPopper = P),
                                                            r._isMounted &&
                                                                r.setState({
                                                                    statusWrapper:
                                                                        q.IDLE,
                                                                }),
                                                            l(P, "wrapper"),
                                                            u !== P.placement &&
                                                                setTimeout(
                                                                    function () {
                                                                        P.instance.update();
                                                                    },
                                                                    1,
                                                                ));
                                                    },
                                                },
                                            );
                                        }
                                    },
                                },
                                {
                                    key: "rebuildPopper",
                                    value: function () {
                                        var r = this;
                                        this.floaterRefInterval = setInterval(
                                            function () {
                                                var i;
                                                (i = r.floaterRef) !== null &&
                                                    i !== void 0 &&
                                                    i.isConnected &&
                                                    (clearInterval(
                                                        r.floaterRefInterval,
                                                    ),
                                                    r.setState({
                                                        needsUpdate: !1,
                                                    }),
                                                    r.initPopper());
                                            },
                                            50,
                                        );
                                    },
                                },
                                {
                                    key: "changeWrapperPosition",
                                    value: function (r) {
                                        var i = r.target,
                                            o = r.wrapperOptions;
                                        this.setState({
                                            positionWrapper: o.position && !!i,
                                        });
                                    },
                                },
                                {
                                    key: "toggle",
                                    value: function (r) {
                                        var i = this.state.status,
                                            o =
                                                i === q.OPEN
                                                    ? q.CLOSING
                                                    : q.OPENING;
                                        (D.undefined(r) || (o = r),
                                            this.setState({ status: o }));
                                    },
                                },
                                {
                                    key: "debug",
                                    get: function () {
                                        var r = this.props.debug;
                                        return (
                                            r ||
                                            (Se() &&
                                                "ReactFloaterDebug" in window &&
                                                !!window.ReactFloaterDebug)
                                        );
                                    },
                                },
                                {
                                    key: "event",
                                    get: function () {
                                        var r = this.props,
                                            i = r.disableHoverToClick,
                                            o = r.event;
                                        return o === "hover" && Jt() && !i
                                            ? "click"
                                            : o;
                                    },
                                },
                                {
                                    key: "options",
                                    get: function () {
                                        var r = this.props.options;
                                        return (0, en.default)(wa, r || {});
                                    },
                                },
                                {
                                    key: "styles",
                                    get: function () {
                                        var r = this,
                                            i = this.state,
                                            o = i.status,
                                            a = i.positionWrapper,
                                            s = i.statusWrapper,
                                            l = this.props.styles,
                                            c = (0, en.default)(ja(l), l);
                                        if (a) {
                                            var p;
                                            ([q.IDLE].indexOf(o) === -1 ||
                                            [q.IDLE].indexOf(s) === -1
                                                ? (p = c.wrapperPosition)
                                                : (p =
                                                      this.wrapperPopper
                                                          .styles),
                                                (c.wrapper = ee(
                                                    ee({}, c.wrapper),
                                                    p,
                                                )));
                                        }
                                        if (this.target) {
                                            var u = window.getComputedStyle(
                                                this.target,
                                            );
                                            this.wrapperStyles
                                                ? (c.wrapper = ee(
                                                      ee({}, c.wrapper),
                                                      this.wrapperStyles,
                                                  ))
                                                : [
                                                      "relative",
                                                      "static",
                                                  ].indexOf(u.position) ===
                                                      -1 &&
                                                  ((this.wrapperStyles = {}),
                                                  a ||
                                                      (La.forEach(function (f) {
                                                          r.wrapperStyles[f] =
                                                              u[f];
                                                      }),
                                                      (c.wrapper = ee(
                                                          ee({}, c.wrapper),
                                                          this.wrapperStyles,
                                                      )),
                                                      (this.target.style.position =
                                                          "relative"),
                                                      (this.target.style.top =
                                                          "auto"),
                                                      (this.target.style.right =
                                                          "auto"),
                                                      (this.target.style.bottom =
                                                          "auto"),
                                                      (this.target.style.left =
                                                          "auto")));
                                        }
                                        return c;
                                    },
                                },
                                {
                                    key: "target",
                                    get: function () {
                                        if (!Se()) return null;
                                        var r = this.props.target;
                                        return r
                                            ? D.domElement(r)
                                                ? r
                                                : document.querySelector(r)
                                            : this.childRef || this.wrapperRef;
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var r = this.state,
                                            i = r.currentPlacement,
                                            o = r.positionWrapper,
                                            a = r.status,
                                            s = this.props,
                                            l = s.children,
                                            c = s.component,
                                            p = s.content,
                                            u = s.disableAnimation,
                                            f = s.footer,
                                            b = s.hideArrow,
                                            m = s.id,
                                            T = s.open,
                                            F = s.showCloseButton,
                                            I = s.style,
                                            x = s.target,
                                            v = s.title,
                                            P = E.createElement(
                                                $r,
                                                {
                                                    handleClick:
                                                        this.handleClick,
                                                    handleMouseEnter:
                                                        this.handleMouseEnter,
                                                    handleMouseLeave:
                                                        this.handleMouseLeave,
                                                    setChildRef:
                                                        this.setChildRef,
                                                    setWrapperRef:
                                                        this.setWrapperRef,
                                                    style: I,
                                                    styles: this.styles.wrapper,
                                                },
                                                l,
                                            ),
                                            R = {};
                                        return (
                                            o
                                                ? (R.wrapperInPortal = P)
                                                : (R.wrapperAsChildren = P),
                                            E.createElement(
                                                "span",
                                                null,
                                                E.createElement(
                                                    Hr,
                                                    {
                                                        hasChildren: !!l,
                                                        id: m,
                                                        placement: i,
                                                        setRef: this
                                                            .setFloaterRef,
                                                        target: x,
                                                        zIndex: this.styles
                                                            .options.zIndex,
                                                    },
                                                    E.createElement(qr, {
                                                        component: c,
                                                        content: p,
                                                        disableAnimation: u,
                                                        footer: f,
                                                        handleClick:
                                                            this.handleClick,
                                                        hideArrow:
                                                            b || i === "center",
                                                        open: T,
                                                        placement: i,
                                                        positionWrapper: o,
                                                        setArrowRef:
                                                            this.setArrowRef,
                                                        setFloaterRef:
                                                            this.setFloaterRef,
                                                        showCloseButton: F,
                                                        status: a,
                                                        styles: this.styles,
                                                        title: v,
                                                    }),
                                                    R.wrapperInPortal,
                                                ),
                                                R.wrapperAsChildren,
                                            )
                                        );
                                    },
                                },
                            ]),
                            n
                        );
                    })(E.Component)));
                oe(fn, "propTypes", {
                    autoOpen: C.default.bool,
                    callback: C.default.func,
                    children: C.default.node,
                    component: ar(
                        C.default.oneOfType([
                            C.default.func,
                            C.default.element,
                        ]),
                        function (e) {
                            return !e.content;
                        },
                    ),
                    content: ar(C.default.node, function (e) {
                        return !e.component;
                    }),
                    debug: C.default.bool,
                    disableAnimation: C.default.bool,
                    disableFlip: C.default.bool,
                    disableHoverToClick: C.default.bool,
                    event: C.default.oneOf(["hover", "click"]),
                    eventDelay: C.default.number,
                    footer: C.default.node,
                    getPopper: C.default.func,
                    hideArrow: C.default.bool,
                    id: C.default.oneOfType([
                        C.default.string,
                        C.default.number,
                    ]),
                    offset: C.default.number,
                    open: C.default.bool,
                    options: C.default.object,
                    placement: C.default.oneOf([
                        "top",
                        "top-start",
                        "top-end",
                        "bottom",
                        "bottom-start",
                        "bottom-end",
                        "left",
                        "left-start",
                        "left-end",
                        "right",
                        "right-start",
                        "right-end",
                        "auto",
                        "center",
                    ]),
                    showCloseButton: C.default.bool,
                    style: C.default.object,
                    styles: C.default.object,
                    target: C.default.oneOfType([
                        C.default.object,
                        C.default.string,
                    ]),
                    title: C.default.node,
                    wrapperOptions: C.default.shape({
                        offset: C.default.number,
                        placement: C.default.oneOf([
                            "top",
                            "top-start",
                            "top-end",
                            "bottom",
                            "bottom-start",
                            "bottom-end",
                            "left",
                            "left-start",
                            "left-end",
                            "right",
                            "right-start",
                            "right-end",
                            "auto",
                        ]),
                        position: C.default.bool,
                    }),
                });
                oe(fn, "defaultProps", {
                    autoOpen: !1,
                    callback: sr,
                    debug: !1,
                    disableAnimation: !1,
                    disableFlip: !1,
                    disableHoverToClick: !1,
                    event: "click",
                    eventDelay: 0.4,
                    getPopper: sr,
                    hideArrow: !1,
                    offset: 15,
                    placement: "bottom",
                    showCloseButton: !1,
                    styles: {},
                    target: null,
                    wrapperOptions: { position: !1 },
                });
                ((Da = Be(Qo(), 1)),
                    (Fa = Object.defineProperty),
                    (Ba = (e, t, n) =>
                        t in e
                            ? Fa(e, t, {
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                  value: n,
                              })
                            : (e[t] = n)),
                    (L = (e, t, n) => (
                        Ba(e, typeof t != "symbol" ? t + "" : t, n),
                        n
                    )),
                    ($ = {
                        INIT: "init",
                        START: "start",
                        STOP: "stop",
                        RESET: "reset",
                        PREV: "prev",
                        NEXT: "next",
                        GO: "go",
                        CLOSE: "close",
                        SKIP: "skip",
                        UPDATE: "update",
                    }),
                    (ve = {
                        TOUR_START: "tour:start",
                        STEP_BEFORE: "step:before",
                        BEACON: "beacon",
                        TOOLTIP: "tooltip",
                        STEP_AFTER: "step:after",
                        TOUR_END: "tour:end",
                        TOUR_STATUS: "tour:status",
                        TARGET_NOT_FOUND: "error:target_not_found",
                        ERROR: "error",
                    }),
                    (W = {
                        INIT: "init",
                        READY: "ready",
                        BEACON: "beacon",
                        TOOLTIP: "tooltip",
                        COMPLETE: "complete",
                        ERROR: "error",
                    }),
                    (Y = {
                        IDLE: "idle",
                        READY: "ready",
                        WAITING: "waiting",
                        RUNNING: "running",
                        PAUSED: "paused",
                        SKIPPED: "skipped",
                        FINISHED: "finished",
                        ERROR: "error",
                    }));
                pt = it !== void 0;
                ((Qa = {
                    options: {
                        preventOverflow: { boundariesElement: "scrollParent" },
                    },
                    wrapperOptions: { offset: -18, position: !0 },
                }),
                    (Xr = {
                        back: "Back",
                        close: "Close",
                        last: "Last",
                        next: "Next",
                        open: "Open the dialog",
                        skip: "Skip",
                    }),
                    (Za = {
                        event: "click",
                        placement: "bottom",
                        offset: 10,
                        disableBeacon: !1,
                        disableCloseOnEsc: !1,
                        disableOverlay: !1,
                        disableOverlayClose: !1,
                        disableScrollParentFix: !1,
                        disableScrolling: !1,
                        hideBackButton: !1,
                        hideCloseButton: !1,
                        hideFooter: !1,
                        isFixed: !1,
                        locale: Xr,
                        showProgress: !1,
                        showSkipButton: !1,
                        spotlightClicks: !1,
                        spotlightPadding: 10,
                    }),
                    (es = {
                        continuous: !1,
                        debug: !1,
                        disableCloseOnEsc: !1,
                        disableOverlay: !1,
                        disableOverlayClose: !1,
                        disableScrolling: !1,
                        disableScrollParentFix: !1,
                        getHelpers: void 0,
                        hideBackButton: !1,
                        run: !0,
                        scrollOffset: 20,
                        scrollDuration: 300,
                        scrollToFirstStep: !1,
                        showSkipButton: !1,
                        showProgress: !1,
                        spotlightClicks: !1,
                        spotlightPadding: 10,
                        steps: [],
                    }),
                    (ts = {
                        arrowColor: "#fff",
                        backgroundColor: "#fff",
                        beaconSize: 36,
                        overlayColor: "rgba(0, 0, 0, 0.5)",
                        primaryColor: "#f04",
                        spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                        textColor: "#333",
                        width: 380,
                        zIndex: 100,
                    }),
                    (ft = {
                        backgroundColor: "transparent",
                        border: 0,
                        borderRadius: 0,
                        color: "#555",
                        cursor: "pointer",
                        fontSize: 16,
                        lineHeight: 1,
                        padding: 8,
                        WebkitAppearance: "none",
                    }),
                    (ur = { borderRadius: 4, position: "absolute" }));
                ((Zr = {
                    action: "init",
                    controlled: !1,
                    index: 0,
                    lifecycle: W.INIT,
                    origin: null,
                    size: 0,
                    status: Y.IDLE,
                }),
                    (fr = Ka(Jr(Zr, "controlled", "size"))),
                    (os = class {
                        constructor(e) {
                            (L(this, "beaconPopper"),
                                L(this, "tooltipPopper"),
                                L(this, "data", new Map()),
                                L(this, "listener"),
                                L(this, "store", new Map()),
                                L(this, "addListener", i => {
                                    this.listener = i;
                                }),
                                L(this, "setSteps", i => {
                                    let { size: o, status: a } =
                                            this.getState(),
                                        s = { size: i.length, status: a };
                                    (this.data.set("steps", i),
                                        a === Y.WAITING &&
                                            !o &&
                                            i.length &&
                                            (s.status = Y.RUNNING),
                                        this.setState(s));
                                }),
                                L(this, "getPopper", i =>
                                    i === "beacon"
                                        ? this.beaconPopper
                                        : this.tooltipPopper,
                                ),
                                L(this, "setPopper", (i, o) => {
                                    i === "beacon"
                                        ? (this.beaconPopper = o)
                                        : (this.tooltipPopper = o);
                                }),
                                L(this, "cleanupPoppers", () => {
                                    ((this.beaconPopper = null),
                                        (this.tooltipPopper = null));
                                }),
                                L(this, "close", (i = null) => {
                                    let { index: o, status: a } =
                                        this.getState();
                                    a === Y.RUNNING &&
                                        this.setState({
                                            ...this.getNextState({
                                                action: $.CLOSE,
                                                index: o + 1,
                                                origin: i,
                                            }),
                                        });
                                }),
                                L(this, "go", i => {
                                    let { controlled: o, status: a } =
                                        this.getState();
                                    if (o || a !== Y.RUNNING) return;
                                    let s = this.getSteps()[i];
                                    this.setState({
                                        ...this.getNextState({
                                            action: $.GO,
                                            index: i,
                                        }),
                                        status: s ? a : Y.FINISHED,
                                    });
                                }),
                                L(this, "info", () => this.getState()),
                                L(this, "next", () => {
                                    let { index: i, status: o } =
                                        this.getState();
                                    o === Y.RUNNING &&
                                        this.setState(
                                            this.getNextState({
                                                action: $.NEXT,
                                                index: i + 1,
                                            }),
                                        );
                                }),
                                L(this, "open", () => {
                                    let { status: i } = this.getState();
                                    i === Y.RUNNING &&
                                        this.setState({
                                            ...this.getNextState({
                                                action: $.UPDATE,
                                                lifecycle: W.TOOLTIP,
                                            }),
                                        });
                                }),
                                L(this, "prev", () => {
                                    let { index: i, status: o } =
                                        this.getState();
                                    o === Y.RUNNING &&
                                        this.setState({
                                            ...this.getNextState({
                                                action: $.PREV,
                                                index: i - 1,
                                            }),
                                        });
                                }),
                                L(this, "reset", (i = !1) => {
                                    let { controlled: o } = this.getState();
                                    o ||
                                        this.setState({
                                            ...this.getNextState({
                                                action: $.RESET,
                                                index: 0,
                                            }),
                                            status: i ? Y.RUNNING : Y.READY,
                                        });
                                }),
                                L(this, "skip", () => {
                                    let { status: i } = this.getState();
                                    i === Y.RUNNING &&
                                        this.setState({
                                            action: $.SKIP,
                                            lifecycle: W.INIT,
                                            status: Y.SKIPPED,
                                        });
                                }),
                                L(this, "start", i => {
                                    let { index: o, size: a } = this.getState();
                                    this.setState({
                                        ...this.getNextState(
                                            {
                                                action: $.START,
                                                index: j.number(i) ? i : o,
                                            },
                                            !0,
                                        ),
                                        status: a ? Y.RUNNING : Y.WAITING,
                                    });
                                }),
                                L(this, "stop", (i = !1) => {
                                    let { index: o, status: a } =
                                        this.getState();
                                    [Y.FINISHED, Y.SKIPPED].includes(a) ||
                                        this.setState({
                                            ...this.getNextState({
                                                action: $.STOP,
                                                index: o + (i ? 1 : 0),
                                            }),
                                            status: Y.PAUSED,
                                        });
                                }),
                                L(this, "update", i => {
                                    var o, a;
                                    if (!$a(i, fr))
                                        throw new Error(
                                            `State is not valid. Valid keys: ${fr.join(", ")}`,
                                        );
                                    this.setState({
                                        ...this.getNextState(
                                            {
                                                ...this.getState(),
                                                ...i,
                                                action:
                                                    (o = i.action) != null
                                                        ? o
                                                        : $.UPDATE,
                                                origin:
                                                    (a = i.origin) != null
                                                        ? a
                                                        : null,
                                            },
                                            !0,
                                        ),
                                    });
                                }));
                            let {
                                continuous: t = !1,
                                stepIndex: n,
                                steps: r = [],
                            } = e ?? {};
                            (this.setState(
                                {
                                    action: $.INIT,
                                    controlled: j.number(n),
                                    continuous: t,
                                    index: j.number(n) ? n : 0,
                                    lifecycle: W.INIT,
                                    origin: null,
                                    status: r.length ? Y.READY : Y.IDLE,
                                },
                                !0,
                            ),
                                (this.beaconPopper = null),
                                (this.tooltipPopper = null),
                                (this.listener = null),
                                this.setSteps(r));
                        }
                        getState() {
                            return this.store.size
                                ? {
                                      action: this.store.get("action") || "",
                                      controlled:
                                          this.store.get("controlled") || !1,
                                      index: parseInt(
                                          this.store.get("index"),
                                          10,
                                      ),
                                      lifecycle:
                                          this.store.get("lifecycle") || "",
                                      origin: this.store.get("origin") || null,
                                      size: this.store.get("size") || 0,
                                      status: this.store.get("status") || "",
                                  }
                                : { ...Zr };
                        }
                        getNextState(e, t = !1) {
                            var n, r, i, o, a;
                            let {
                                    action: s,
                                    controlled: l,
                                    index: c,
                                    size: p,
                                    status: u,
                                } = this.getState(),
                                f = j.number(e.index) ? e.index : c,
                                b = l && !t ? c : Math.min(Math.max(f, 0), p);
                            return {
                                action: (n = e.action) != null ? n : s,
                                controlled: l,
                                index: b,
                                lifecycle:
                                    (r = e.lifecycle) != null ? r : W.INIT,
                                origin: (i = e.origin) != null ? i : null,
                                size: (o = e.size) != null ? o : p,
                                status:
                                    b === p
                                        ? Y.FINISHED
                                        : (a = e.status) != null
                                          ? a
                                          : u,
                            };
                        }
                        getSteps() {
                            let e = this.data.get("steps");
                            return Array.isArray(e) ? e : [];
                        }
                        hasUpdatedState(e) {
                            let t = JSON.stringify(e),
                                n = JSON.stringify(this.getState());
                            return t !== n;
                        }
                        setState(e, t = !1) {
                            let n = this.getState(),
                                {
                                    action: r,
                                    index: i,
                                    lifecycle: o,
                                    origin: a = null,
                                    size: s,
                                    status: l,
                                } = { ...n, ...e };
                            (this.store.set("action", r),
                                this.store.set("index", i),
                                this.store.set("lifecycle", o),
                                this.store.set("origin", a),
                                this.store.set("size", s),
                                this.store.set("status", l),
                                t &&
                                    (this.store.set("controlled", e.controlled),
                                    this.store.set("continuous", e.continuous)),
                                this.listener &&
                                    this.hasUpdatedState(n) &&
                                    this.listener(this.getState()));
                        }
                        getHelpers() {
                            return {
                                close: this.close,
                                go: this.go,
                                info: this.info,
                                next: this.next,
                                open: this.open,
                                prev: this.prev,
                                reset: this.reset,
                                skip: this.skip,
                            };
                        }
                    }));
                ((ss = as),
                    (ls = class extends _e {
                        constructor() {
                            (super(...arguments),
                                L(this, "isActive", !1),
                                L(this, "resizeTimeout"),
                                L(this, "scrollTimeout"),
                                L(this, "scrollParent"),
                                L(this, "state", {
                                    isScrolling: !1,
                                    mouseOverSpotlight: !1,
                                    showSpotlight: !0,
                                }),
                                L(this, "hideSpotlight", () => {
                                    let {
                                            continuous: e,
                                            disableOverlay: t,
                                            lifecycle: n,
                                        } = this.props,
                                        r = [W.BEACON, W.COMPLETE, W.ERROR];
                                    return (
                                        t ||
                                        (e ? r.includes(n) : n !== W.TOOLTIP)
                                    );
                                }),
                                L(this, "handleMouseMove", e => {
                                    let { mouseOverSpotlight: t } = this.state,
                                        {
                                            height: n,
                                            left: r,
                                            position: i,
                                            top: o,
                                            width: a,
                                        } = this.spotlightStyles,
                                        s = i === "fixed" ? e.clientY : e.pageY,
                                        l = i === "fixed" ? e.clientX : e.pageX,
                                        c = s >= o && s <= o + n,
                                        p = l >= r && l <= r + a && c;
                                    p !== t &&
                                        this.updateState({
                                            mouseOverSpotlight: p,
                                        });
                                }),
                                L(this, "handleScroll", () => {
                                    let { target: e } = this.props,
                                        t = Ne(e);
                                    if (this.scrollParent !== document) {
                                        let { isScrolling: n } = this.state;
                                        (n ||
                                            this.updateState({
                                                isScrolling: !0,
                                                showSpotlight: !1,
                                            }),
                                            clearTimeout(this.scrollTimeout),
                                            (this.scrollTimeout =
                                                window.setTimeout(() => {
                                                    this.updateState({
                                                        isScrolling: !1,
                                                        showSpotlight: !0,
                                                    });
                                                }, 50)));
                                    } else
                                        dt(t, "sticky") && this.updateState({});
                                }),
                                L(this, "handleResize", () => {
                                    (clearTimeout(this.resizeTimeout),
                                        (this.resizeTimeout = window.setTimeout(
                                            () => {
                                                this.isActive &&
                                                    this.forceUpdate();
                                            },
                                            100,
                                        )));
                                }));
                        }
                        componentDidMount() {
                            let {
                                    debug: e,
                                    disableScrolling: t,
                                    disableScrollParentFix: n = !1,
                                    target: r,
                                } = this.props,
                                i = Ne(r);
                            ((this.scrollParent = Lt(
                                i ?? document.body,
                                n,
                                !0,
                            )),
                                (this.isActive = !0),
                                !t &&
                                    Ot(i, !0) &&
                                    Me({
                                        title: "step has a custom scroll parent and can cause trouble with scrolling",
                                        data: [
                                            {
                                                key: "parent",
                                                value: this.scrollParent,
                                            },
                                        ],
                                        debug: e,
                                    }),
                                window.addEventListener(
                                    "resize",
                                    this.handleResize,
                                ));
                        }
                        componentDidUpdate(e) {
                            var t;
                            let { lifecycle: n, spotlightClicks: r } =
                                    this.props,
                                { changed: i } = xt(e, this.props);
                            (i("lifecycle", W.TOOLTIP) &&
                                ((t = this.scrollParent) == null ||
                                    t.addEventListener(
                                        "scroll",
                                        this.handleScroll,
                                        { passive: !0 },
                                    ),
                                setTimeout(() => {
                                    let { isScrolling: o } = this.state;
                                    o ||
                                        this.updateState({ showSpotlight: !0 });
                                }, 100)),
                                (i("spotlightClicks") ||
                                    i("disableOverlay") ||
                                    i("lifecycle")) &&
                                    (r && n === W.TOOLTIP
                                        ? window.addEventListener(
                                              "mousemove",
                                              this.handleMouseMove,
                                              !1,
                                          )
                                        : n !== W.TOOLTIP &&
                                          window.removeEventListener(
                                              "mousemove",
                                              this.handleMouseMove,
                                          )));
                        }
                        componentWillUnmount() {
                            var e;
                            ((this.isActive = !1),
                                window.removeEventListener(
                                    "mousemove",
                                    this.handleMouseMove,
                                ),
                                window.removeEventListener(
                                    "resize",
                                    this.handleResize,
                                ),
                                clearTimeout(this.resizeTimeout),
                                clearTimeout(this.scrollTimeout),
                                (e = this.scrollParent) == null ||
                                    e.removeEventListener(
                                        "scroll",
                                        this.handleScroll,
                                    ));
                        }
                        get overlayStyles() {
                            let { mouseOverSpotlight: e } = this.state,
                                {
                                    disableOverlayClose: t,
                                    placement: n,
                                    styles: r,
                                } = this.props,
                                i = r.overlay;
                            return (
                                cr() &&
                                    (i =
                                        n === "center"
                                            ? r.overlayLegacyCenter
                                            : r.overlayLegacy),
                                {
                                    cursor: t ? "default" : "pointer",
                                    height: Wa(),
                                    pointerEvents: e ? "none" : "auto",
                                    ...i,
                                }
                            );
                        }
                        get spotlightStyles() {
                            var e, t, n;
                            let { showSpotlight: r } = this.state,
                                {
                                    disableScrollParentFix: i = !1,
                                    spotlightClicks: o,
                                    spotlightPadding: a = 0,
                                    styles: s,
                                    target: l,
                                } = this.props,
                                c = Ne(l),
                                p = Vr(c),
                                u = dt(c),
                                f = za(c, a, i);
                            return {
                                ...(cr() ? s.spotlightLegacy : s.spotlight),
                                height: Math.round(
                                    ((e = p?.height) != null ? e : 0) + a * 2,
                                ),
                                left: Math.round(
                                    ((t = p?.left) != null ? t : 0) - a,
                                ),
                                opacity: r ? 1 : 0,
                                pointerEvents: o ? "none" : "auto",
                                position: u ? "fixed" : "absolute",
                                top: f,
                                transition: "opacity 0.2s",
                                width: Math.round(
                                    ((n = p?.width) != null ? n : 0) + a * 2,
                                ),
                            };
                        }
                        updateState(e) {
                            this.isActive &&
                                this.setState(t => ({ ...t, ...e }));
                        }
                        render() {
                            let { showSpotlight: e } = this.state,
                                { onClickOverlay: t, placement: n } =
                                    this.props,
                                {
                                    hideSpotlight: r,
                                    overlayStyles: i,
                                    spotlightStyles: o,
                                } = this;
                            if (r()) return null;
                            let a = n !== "center" && e && V(ss, { styles: o });
                            if (Kr() === "safari") {
                                let { mixBlendMode: s, zIndex: l, ...c } = i;
                                ((a = V("div", { style: { ...c } }, a)),
                                    delete i.backgroundColor);
                            }
                            return V(
                                "div",
                                {
                                    className: "react-joyride__overlay",
                                    "data-test-id": "overlay",
                                    onClick: t,
                                    role: "presentation",
                                    style: i,
                                },
                                a,
                            );
                        }
                    }),
                    (cs = class extends _e {
                        constructor() {
                            (super(...arguments), L(this, "node", null));
                        }
                        componentDidMount() {
                            let { id: e } = this.props;
                            Ae() &&
                                ((this.node = document.createElement("div")),
                                (this.node.id = e),
                                document.body.appendChild(this.node),
                                pt || this.renderReact15());
                        }
                        componentDidUpdate() {
                            Ae() && (pt || this.renderReact15());
                        }
                        componentWillUnmount() {
                            !Ae() ||
                                !this.node ||
                                (pt || En(this.node),
                                this.node.parentNode === document.body &&
                                    (document.body.removeChild(this.node),
                                    (this.node = null)));
                        }
                        renderReact15() {
                            if (!Ae()) return;
                            let { children: e } = this.props;
                            this.node && On(this, e, this.node);
                        }
                        renderReact16() {
                            if (!Ae() || !pt) return null;
                            let { children: e } = this.props;
                            return this.node ? it(e, this.node) : null;
                        }
                        render() {
                            return pt ? this.renderReact16() : null;
                        }
                    }),
                    (us = class {
                        constructor(e, t) {
                            if (
                                (L(this, "element"),
                                L(this, "options"),
                                L(this, "canBeTabbed", n => {
                                    let { tabIndex: r } = n;
                                    return r === null || r < 0
                                        ? !1
                                        : this.canHaveFocus(n);
                                }),
                                L(this, "canHaveFocus", n => {
                                    let r =
                                            /input|select|textarea|button|object/,
                                        i = n.nodeName.toLowerCase();
                                    return (
                                        ((r.test(i) &&
                                            !n.getAttribute("disabled")) ||
                                            (i === "a" &&
                                                !!n.getAttribute("href"))) &&
                                        this.isVisible(n)
                                    );
                                }),
                                L(this, "findValidTabElements", () =>
                                    [].slice
                                        .call(
                                            this.element.querySelectorAll("*"),
                                            0,
                                        )
                                        .filter(this.canBeTabbed),
                                ),
                                L(this, "handleKeyDown", n => {
                                    let { code: r = "Tab" } = this.options;
                                    n.code === r && this.interceptTab(n);
                                }),
                                L(this, "interceptTab", n => {
                                    n.preventDefault();
                                    let r = this.findValidTabElements(),
                                        { shiftKey: i } = n;
                                    if (!r.length) return;
                                    let o = document.activeElement
                                        ? r.indexOf(document.activeElement)
                                        : 0;
                                    (o === -1 || (!i && o + 1 === r.length)
                                        ? (o = 0)
                                        : i && o === 0
                                          ? (o = r.length - 1)
                                          : (o += i ? -1 : 1),
                                        r[o].focus());
                                }),
                                L(this, "isHidden", n => {
                                    let r =
                                            n.offsetWidth <= 0 &&
                                            n.offsetHeight <= 0,
                                        i = window.getComputedStyle(n);
                                    return r && !n.innerHTML
                                        ? !0
                                        : (r &&
                                              i.getPropertyValue("overflow") !==
                                                  "visible") ||
                                              i.getPropertyValue("display") ===
                                                  "none";
                                }),
                                L(this, "isVisible", n => {
                                    let r = n;
                                    for (; r; )
                                        if (r instanceof HTMLElement) {
                                            if (r === document.body) break;
                                            if (this.isHidden(r)) return !1;
                                            r = r.parentNode;
                                        }
                                    return !0;
                                }),
                                L(this, "removeScope", () => {
                                    window.removeEventListener(
                                        "keydown",
                                        this.handleKeyDown,
                                    );
                                }),
                                L(this, "checkFocus", n => {
                                    document.activeElement !== n &&
                                        (n.focus(),
                                        window.requestAnimationFrame(() =>
                                            this.checkFocus(n),
                                        ));
                                }),
                                L(this, "setFocus", () => {
                                    let { selector: n } = this.options;
                                    if (!n) return;
                                    let r = this.element.querySelector(n);
                                    r &&
                                        window.requestAnimationFrame(() =>
                                            this.checkFocus(r),
                                        );
                                }),
                                !(e instanceof HTMLElement))
                            )
                                throw new TypeError(
                                    "Invalid parameter: element must be an HTMLElement",
                                );
                            ((this.element = e),
                                (this.options = t),
                                window.addEventListener(
                                    "keydown",
                                    this.handleKeyDown,
                                    !1,
                                ),
                                this.setFocus());
                        }
                    }),
                    (ps = class extends _e {
                        constructor(e) {
                            if (
                                (super(e),
                                L(this, "beacon", null),
                                L(this, "setBeaconRef", r => {
                                    this.beacon = r;
                                }),
                                e.beaconComponent)
                            )
                                return;
                            let t =
                                    document.head ||
                                    document.getElementsByTagName("head")[0],
                                n = document.createElement("style");
                            ((n.id = "joyride-beacon-animation"),
                                e.nonce && n.setAttribute("nonce", e.nonce),
                                n.appendChild(
                                    document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `),
                                ),
                                t.appendChild(n));
                        }
                        componentDidMount() {
                            let { shouldFocus: e } = this.props;
                            (j.domElement(this.beacon) ||
                                console.warn(
                                    "beacon is not a valid DOM element",
                                ),
                                setTimeout(() => {
                                    j.domElement(this.beacon) &&
                                        e &&
                                        this.beacon.focus();
                                }, 0));
                        }
                        componentWillUnmount() {
                            let e = document.getElementById(
                                "joyride-beacon-animation",
                            );
                            e?.parentNode && e.parentNode.removeChild(e);
                        }
                        render() {
                            let {
                                    beaconComponent: e,
                                    continuous: t,
                                    index: n,
                                    isLastStep: r,
                                    locale: i,
                                    onClickOrHover: o,
                                    size: a,
                                    step: s,
                                    styles: l,
                                } = this.props,
                                c = j.string(i.open)
                                    ? i.open
                                    : (0, Da.default)(i.open),
                                p = {
                                    "aria-label": c,
                                    onClick: o,
                                    onMouseEnter: o,
                                    ref: this.setBeaconRef,
                                    title: c,
                                },
                                u;
                            return (
                                e
                                    ? (u = V(e, {
                                          continuous: t,
                                          index: n,
                                          isLastStep: r,
                                          size: a,
                                          step: s,
                                          ...p,
                                      }))
                                    : (u = V(
                                          "button",
                                          {
                                              key: "JoyrideBeacon",
                                              className:
                                                  "react-joyride__beacon",
                                              "data-test-id": "button-beacon",
                                              style: l.beacon,
                                              type: "button",
                                              ...p,
                                          },
                                          V("span", { style: l.beaconInner }),
                                          V("span", { style: l.beaconOuter }),
                                      )),
                                u
                            );
                        }
                    }));
                ds = fs;
                ((ys = hs),
                    (ms = class extends _e {
                        constructor() {
                            (super(...arguments),
                                L(this, "handleClickBack", e => {
                                    e.preventDefault();
                                    let { helpers: t } = this.props;
                                    t.prev();
                                }),
                                L(this, "handleClickClose", e => {
                                    e.preventDefault();
                                    let { helpers: t } = this.props;
                                    t.close("button_close");
                                }),
                                L(this, "handleClickPrimary", e => {
                                    e.preventDefault();
                                    let { continuous: t, helpers: n } =
                                        this.props;
                                    if (!t) {
                                        n.close("button_primary");
                                        return;
                                    }
                                    n.next();
                                }),
                                L(this, "handleClickSkip", e => {
                                    e.preventDefault();
                                    let { helpers: t } = this.props;
                                    t.skip();
                                }),
                                L(this, "getElementsProps", () => {
                                    let {
                                            continuous: e,
                                            isLastStep: t,
                                            setTooltipRef: n,
                                            step: r,
                                        } = this.props,
                                        i = ke(r.locale.back),
                                        o = ke(r.locale.close),
                                        a = ke(r.locale.last),
                                        s = ke(r.locale.next),
                                        l = ke(r.locale.skip),
                                        c = e ? s : o;
                                    return (
                                        t && (c = a),
                                        {
                                            backProps: {
                                                "aria-label": i,
                                                "data-action": "back",
                                                onClick: this.handleClickBack,
                                                role: "button",
                                                title: i,
                                            },
                                            closeProps: {
                                                "aria-label": o,
                                                "data-action": "close",
                                                onClick: this.handleClickClose,
                                                role: "button",
                                                title: o,
                                            },
                                            primaryProps: {
                                                "aria-label": c,
                                                "data-action": "primary",
                                                onClick:
                                                    this.handleClickPrimary,
                                                role: "button",
                                                title: c,
                                            },
                                            skipProps: {
                                                "aria-label": l,
                                                "data-action": "skip",
                                                onClick: this.handleClickSkip,
                                                role: "button",
                                                title: l,
                                            },
                                            tooltipProps: {
                                                "aria-modal": !0,
                                                ref: n,
                                                role: "alertdialog",
                                            },
                                        }
                                    );
                                }));
                        }
                        render() {
                            let {
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    setTooltipRef: r,
                                    size: i,
                                    step: o,
                                } = this.props,
                                {
                                    beaconComponent: a,
                                    tooltipComponent: s,
                                    ...l
                                } = o,
                                c;
                            if (s) {
                                let p = {
                                    ...this.getElementsProps(),
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    size: i,
                                    step: l,
                                    setTooltipRef: r,
                                };
                                c = V(s, { ...p });
                            } else
                                c = V(ys, {
                                    ...this.getElementsProps(),
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    size: i,
                                    step: o,
                                });
                            return c;
                        }
                    }),
                    (gs = class extends _e {
                        constructor() {
                            (super(...arguments),
                                L(this, "scope", null),
                                L(this, "tooltip", null),
                                L(this, "handleClickHoverBeacon", e => {
                                    let { step: t, store: n } = this.props;
                                    (e.type === "mouseenter" &&
                                        t.event !== "hover") ||
                                        n.update({ lifecycle: W.TOOLTIP });
                                }),
                                L(this, "setTooltipRef", e => {
                                    this.tooltip = e;
                                }),
                                L(this, "setPopper", (e, t) => {
                                    var n;
                                    let {
                                        action: r,
                                        lifecycle: i,
                                        step: o,
                                        store: a,
                                    } = this.props;
                                    (t === "wrapper"
                                        ? a.setPopper("beacon", e)
                                        : a.setPopper("tooltip", e),
                                        a.getPopper("beacon") &&
                                            a.getPopper("tooltip") &&
                                            i === W.INIT &&
                                            a.update({
                                                action: r,
                                                lifecycle: W.READY,
                                            }),
                                        (n = o.floaterProps) != null &&
                                            n.getPopper &&
                                            o.floaterProps.getPopper(e, t));
                                }),
                                L(this, "renderTooltip", e => {
                                    let {
                                        continuous: t,
                                        helpers: n,
                                        index: r,
                                        size: i,
                                        step: o,
                                    } = this.props;
                                    return V(ms, {
                                        continuous: t,
                                        helpers: n,
                                        index: r,
                                        isLastStep: r + 1 === i,
                                        setTooltipRef: this.setTooltipRef,
                                        size: i,
                                        step: o,
                                        ...e,
                                    });
                                }));
                        }
                        componentDidMount() {
                            let { debug: e, index: t } = this.props;
                            Me({
                                title: `step:${t}`,
                                data: [{ key: "props", value: this.props }],
                                debug: e,
                            });
                        }
                        componentDidUpdate(e) {
                            var t;
                            let {
                                    action: n,
                                    callback: r,
                                    continuous: i,
                                    controlled: o,
                                    debug: a,
                                    helpers: s,
                                    index: l,
                                    lifecycle: c,
                                    status: p,
                                    step: u,
                                    store: f,
                                } = this.props,
                                { changed: b, changedFrom: m } = xt(
                                    e,
                                    this.props,
                                ),
                                T = s.info(),
                                F =
                                    i &&
                                    n !== $.CLOSE &&
                                    (l > 0 || n === $.PREV),
                                I =
                                    b("action") ||
                                    b("index") ||
                                    b("lifecycle") ||
                                    b("status"),
                                x = m("lifecycle", [W.TOOLTIP, W.INIT], W.INIT),
                                v = b("action", [
                                    $.NEXT,
                                    $.PREV,
                                    $.SKIP,
                                    $.CLOSE,
                                ]),
                                P = o && l === e.index;
                            if (
                                (v &&
                                    (x || P) &&
                                    r({
                                        ...T,
                                        index: e.index,
                                        lifecycle: W.COMPLETE,
                                        step: e.step,
                                        type: ve.STEP_AFTER,
                                    }),
                                u.placement === "center" &&
                                    p === Y.RUNNING &&
                                    b("index") &&
                                    n !== $.START &&
                                    c === W.INIT &&
                                    f.update({ lifecycle: W.READY }),
                                I)
                            ) {
                                let R = Ne(u.target),
                                    K = !!R;
                                K && Ga(R)
                                    ? (m("status", Y.READY, Y.RUNNING) ||
                                          m("lifecycle", W.INIT, W.READY)) &&
                                      r({ ...T, step: u, type: ve.STEP_BEFORE })
                                    : (console.warn(
                                          K
                                              ? "Target not visible"
                                              : "Target not mounted",
                                          u,
                                      ),
                                      r({
                                          ...T,
                                          type: ve.TARGET_NOT_FOUND,
                                          step: u,
                                      }),
                                      o ||
                                          f.update({
                                              index:
                                                  l + (n === $.PREV ? -1 : 1),
                                          }));
                            }
                            (m("lifecycle", W.INIT, W.READY) &&
                                f.update({
                                    lifecycle:
                                        lr(u) || F ? W.TOOLTIP : W.BEACON,
                                }),
                                b("index") &&
                                    Me({
                                        title: `step:${c}`,
                                        data: [
                                            { key: "props", value: this.props },
                                        ],
                                        debug: a,
                                    }),
                                b("lifecycle", W.BEACON) &&
                                    r({ ...T, step: u, type: ve.BEACON }),
                                b("lifecycle", W.TOOLTIP) &&
                                    (r({ ...T, step: u, type: ve.TOOLTIP }),
                                    this.tooltip &&
                                        ((this.scope = new us(this.tooltip, {
                                            selector: "[data-action=primary]",
                                        })),
                                        this.scope.setFocus())),
                                m("lifecycle", [W.TOOLTIP, W.INIT], W.INIT) &&
                                    ((t = this.scope) == null ||
                                        t.removeScope(),
                                    f.cleanupPoppers()));
                        }
                        componentWillUnmount() {
                            var e;
                            (e = this.scope) == null || e.removeScope();
                        }
                        get open() {
                            let { lifecycle: e, step: t } = this.props;
                            return lr(t) || e === W.TOOLTIP;
                        }
                        render() {
                            let {
                                    continuous: e,
                                    debug: t,
                                    index: n,
                                    nonce: r,
                                    shouldScroll: i,
                                    size: o,
                                    step: a,
                                } = this.props,
                                s = Ne(a.target);
                            return !Qr(a) || !j.domElement(s)
                                ? null
                                : V(
                                      "div",
                                      {
                                          key: `JoyrideStep-${n}`,
                                          className: "react-joyride__step",
                                      },
                                      V(
                                          fn,
                                          {
                                              ...a.floaterProps,
                                              component: this.renderTooltip,
                                              debug: t,
                                              getPopper: this.setPopper,
                                              id: `react-joyride-step-${n}`,
                                              open: this.open,
                                              placement: a.placement,
                                              target: a.target,
                                          },
                                          V(ps, {
                                              beaconComponent:
                                                  a.beaconComponent,
                                              continuous: e,
                                              index: n,
                                              isLastStep: n + 1 === o,
                                              locale: a.locale,
                                              nonce: r,
                                              onClickOrHover:
                                                  this.handleClickHoverBeacon,
                                              shouldFocus: i,
                                              size: o,
                                              step: a,
                                              styles: a.styles,
                                          }),
                                      ),
                                  );
                        }
                    }),
                    (eo = class extends _e {
                        constructor(e) {
                            (super(e),
                                L(this, "helpers"),
                                L(this, "store"),
                                L(this, "callback", a => {
                                    let { callback: s } = this.props;
                                    j.function(s) && s(a);
                                }),
                                L(this, "handleKeyboard", a => {
                                    let { index: s, lifecycle: l } = this.state,
                                        { steps: c } = this.props,
                                        p = c[s];
                                    l === W.TOOLTIP &&
                                        a.code === "Escape" &&
                                        p &&
                                        !p.disableCloseOnEsc &&
                                        this.store.close("keyboard");
                                }),
                                L(this, "handleClickOverlay", () => {
                                    let { index: a } = this.state,
                                        { steps: s } = this.props;
                                    qe(this.props, s[a]).disableOverlayClose ||
                                        this.helpers.close("overlay");
                                }),
                                L(this, "syncState", a => {
                                    this.setState(a);
                                }));
                            let {
                                debug: t,
                                getHelpers: n,
                                run: r,
                                stepIndex: i,
                            } = e;
                            ((this.store = is({
                                ...e,
                                controlled: r && j.number(i),
                            })),
                                (this.helpers = this.store.getHelpers()));
                            let { addListener: o } = this.store;
                            (Me({
                                title: "init",
                                data: [
                                    { key: "props", value: this.props },
                                    { key: "state", value: this.state },
                                ],
                                debug: t,
                            }),
                                o(this.syncState),
                                n && n(this.helpers),
                                (this.state = this.store.getState()));
                        }
                        componentDidMount() {
                            if (!Ae()) return;
                            let {
                                    debug: e,
                                    disableCloseOnEsc: t,
                                    run: n,
                                    steps: r,
                                } = this.props,
                                { start: i } = this.store;
                            (pr(r, e) && n && i(),
                                t ||
                                    document.body.addEventListener(
                                        "keydown",
                                        this.handleKeyboard,
                                        { passive: !0 },
                                    ));
                        }
                        componentDidUpdate(e, t) {
                            if (!Ae()) return;
                            let {
                                    action: n,
                                    controlled: r,
                                    index: i,
                                    lifecycle: o,
                                    status: a,
                                } = this.state,
                                {
                                    debug: s,
                                    run: l,
                                    stepIndex: c,
                                    steps: p,
                                } = this.props,
                                { stepIndex: u, steps: f } = e,
                                {
                                    reset: b,
                                    setSteps: m,
                                    start: T,
                                    stop: F,
                                    update: I,
                                } = this.store,
                                { changed: x } = xt(e, this.props),
                                { changed: v, changedFrom: P } = xt(
                                    t,
                                    this.state,
                                ),
                                R = qe(this.props, p[i]),
                                K = !ae(f, p),
                                B = j.number(c) && x("stepIndex"),
                                te = Ne(R.target);
                            if (
                                (K &&
                                    (pr(p, s)
                                        ? m(p)
                                        : console.warn(
                                              "Steps are not valid",
                                              p,
                                          )),
                                x("run") && (l ? T(c) : F()),
                                B)
                            ) {
                                let se = j.number(u) && u < c ? $.NEXT : $.PREV;
                                (n === $.STOP && (se = $.START),
                                    [Y.FINISHED, Y.SKIPPED].includes(a) ||
                                        I({
                                            action:
                                                n === $.CLOSE ? $.CLOSE : se,
                                            index: c,
                                            lifecycle: W.INIT,
                                        }));
                            }
                            !r &&
                                a === Y.RUNNING &&
                                i === 0 &&
                                !te &&
                                (this.store.update({ index: i + 1 }),
                                this.callback({
                                    ...this.state,
                                    type: ve.TARGET_NOT_FOUND,
                                    step: R,
                                }));
                            let J = { ...this.state, index: i, step: R };
                            if (
                                v("action", [
                                    $.NEXT,
                                    $.PREV,
                                    $.SKIP,
                                    $.CLOSE,
                                ]) &&
                                v("status", Y.PAUSED)
                            ) {
                                let se = qe(this.props, p[t.index]);
                                this.callback({
                                    ...J,
                                    index: t.index,
                                    lifecycle: W.COMPLETE,
                                    step: se,
                                    type: ve.STEP_AFTER,
                                });
                            }
                            if (v("status", [Y.FINISHED, Y.SKIPPED])) {
                                let se = qe(this.props, p[t.index]);
                                (r ||
                                    this.callback({
                                        ...J,
                                        index: t.index,
                                        lifecycle: W.COMPLETE,
                                        step: se,
                                        type: ve.STEP_AFTER,
                                    }),
                                    this.callback({
                                        ...J,
                                        type: ve.TOUR_END,
                                        step: se,
                                        index: t.index,
                                    }),
                                    b());
                            } else
                                P("status", [Y.IDLE, Y.READY], Y.RUNNING)
                                    ? this.callback({
                                          ...J,
                                          type: ve.TOUR_START,
                                      })
                                    : (v("status") || v("action", $.RESET)) &&
                                      this.callback({
                                          ...J,
                                          type: ve.TOUR_STATUS,
                                      });
                            (this.scrollToStep(t),
                                R.placement === "center" &&
                                    a === Y.RUNNING &&
                                    o === W.INIT &&
                                    this.store.update({ lifecycle: W.READY }));
                        }
                        componentWillUnmount() {
                            let { disableCloseOnEsc: e } = this.props;
                            e ||
                                document.body.removeEventListener(
                                    "keydown",
                                    this.handleKeyboard,
                                );
                        }
                        scrollToStep(e) {
                            let {
                                    index: t,
                                    lifecycle: n,
                                    status: r,
                                } = this.state,
                                {
                                    debug: i,
                                    disableScrollParentFix: o = !1,
                                    scrollDuration: a,
                                    scrollOffset: s = 20,
                                    scrollToFirstStep: l = !1,
                                    steps: c,
                                } = this.props,
                                p = qe(this.props, c[t]),
                                u = Ne(p.target),
                                f = Xa({
                                    isFirstStep: t === 0,
                                    lifecycle: n,
                                    previousLifecycle: e.lifecycle,
                                    scrollToFirstStep: l,
                                    step: p,
                                    target: u,
                                });
                            if (r === Y.RUNNING && f) {
                                let b = Ot(u, o),
                                    m = Lt(u, o),
                                    T = Math.floor(Ya(u, s, o)) || 0;
                                Me({
                                    title: "scrollToStep",
                                    data: [
                                        { key: "index", value: t },
                                        { key: "lifecycle", value: n },
                                        { key: "status", value: r },
                                    ],
                                    debug: i,
                                });
                                let F = this.store.getPopper("beacon"),
                                    I = this.store.getPopper("tooltip");
                                if (n === W.BEACON && F) {
                                    let { offsets: x, placement: v } = F;
                                    !["bottom"].includes(v) &&
                                        !b &&
                                        (T = Math.floor(x.popper.top - s));
                                } else if (n === W.TOOLTIP && I) {
                                    let {
                                        flipped: x,
                                        offsets: v,
                                        placement: P,
                                    } = I;
                                    ["top", "right", "left"].includes(P) &&
                                    !x &&
                                    !b
                                        ? (T = Math.floor(v.popper.top - s))
                                        : (T -= p.spotlightPadding);
                                }
                                ((T = T >= 0 ? T : 0),
                                    r === Y.RUNNING &&
                                        qa(T, { element: m, duration: a }).then(
                                            () => {
                                                setTimeout(() => {
                                                    var x;
                                                    (x =
                                                        this.store.getPopper(
                                                            "tooltip",
                                                        )) == null ||
                                                        x.instance.update();
                                                }, 10);
                                            },
                                        ));
                            }
                        }
                        render() {
                            if (!Ae()) return null;
                            let {
                                    index: e,
                                    lifecycle: t,
                                    status: n,
                                } = this.state,
                                {
                                    continuous: r = !1,
                                    debug: i = !1,
                                    nonce: o,
                                    scrollToFirstStep: a = !1,
                                    steps: s,
                                } = this.props,
                                l = n === Y.RUNNING,
                                c = {};
                            if (l && s[e]) {
                                let p = qe(this.props, s[e]);
                                ((c.step = V(gs, {
                                    ...this.state,
                                    callback: this.callback,
                                    continuous: r,
                                    debug: i,
                                    helpers: this.helpers,
                                    nonce: o,
                                    shouldScroll:
                                        !p.disableScrolling && (e !== 0 || a),
                                    step: p,
                                    store: this.store,
                                })),
                                    (c.overlay = V(
                                        cs,
                                        { id: "react-joyride-portal" },
                                        V(ls, {
                                            ...p,
                                            continuous: r,
                                            debug: i,
                                            lifecycle: t,
                                            onClickOverlay:
                                                this.handleClickOverlay,
                                        }),
                                    )));
                            }
                            return V(
                                "div",
                                { className: "react-joyride" },
                                c.step,
                                c.overlay,
                            );
                        }
                    }));
                L(eo, "defaultProps", es);
                ((bs = eo),
                    (vs = re.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) => (t === "primary" ? e.color.secondary : t === "secondary" ? e.color.lighter : t === "outline" ? "transparent" : t === "white" ? e.color.lightest : e.color.secondary)};
  color: ${({ theme: e, variant: t }) => (t === "primary" ? e.color.lightest : t === "secondary" || t === "outline" ? e.darkest : t === "white" ? e.color.secondary : e.color.lightest)};
  box-shadow: ${({ variant: e }) => (e === "secondary" || e === "outline" ? "#D9E8F2 0 0 0 1px inset" : "none")};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, color, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme: e, variant: t }) => (t === "primary" ? "#0b94eb" : t === "secondary" ? "#eef4f9" : t === "outline" ? "transparent" : t === "white" ? e.color.lightest : "#0b94eb")};
    color: ${({ theme: e, variant: t }) => (t === "primary" ? e.color.lightest : t === "secondary" || t === "outline" ? e.darkest : t === "white" ? e.color.darkest : e.color.lightest)};
  }

  &:focus {
    box-shadow: ${({ variant: e }) => (e === "primary" ? "inset 0 0 0 1px rgba(0, 0, 0, 0.2)" : e === "secondary" || e === "outline" ? "inset 0 0 0 1px #0b94eb" : e === "white" ? "none" : "inset 0 0 0 2px rgba(0, 0, 0, 0.1)")};
  }
`),
                    (Es = Ut(function (
                        {
                            children: e,
                            onClick: t,
                            variant: n = "primary",
                            ...r
                        },
                        i,
                    ) {
                        return E.createElement(
                            vs,
                            { ref: i, onClick: t, variant: n, ...r },
                            e,
                        );
                    })),
                    (Os = re.div`
  padding: 15px;
  border-radius: 5px;
`),
                    (ws = re.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
                    (Ss = re.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin: -5px -5px 5px 0;
`),
                    (Ts = re.div`
  line-height: 18px;
  font-weight: 700;
  font-size: 14px;
  margin: 5px 5px 5px 0;
`),
                    (Is = re.p`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  text-wrap: balance;
  margin: 0;
  margin-top: 5px;
`),
                    (Cs = re.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`),
                    (Ps = re.span`
  font-size: 13px;
`),
                    (Rs = ({
                        index: e,
                        size: t,
                        step: n,
                        closeProps: r,
                        primaryProps: i,
                        tooltipProps: o,
                    }) => (
                        ce(() => {
                            let a = document.createElement("style");
                            return (
                                (a.id = "#sb-onboarding-arrow-style"),
                                (a.innerHTML = `
      .__floater__arrow { container-type: size; }
      .__floater__arrow span { background: ${It.secondary}; }
      .__floater__arrow span::before, .__floater__arrow span::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: ${It.secondary};
        box-shadow: 0 0 0 2px ${It.secondary};
        border-radius: 3px;
        flex: 0 0 2px;
      }
      @container (min-height: 1px) {
        .__floater__arrow span { flex-direction: column; }
      }
    `),
                                document.head.appendChild(a),
                                () => {
                                    let s = document.querySelector(
                                        "#sb-onboarding-arrow-style",
                                    );
                                    s && s.remove();
                                }
                            );
                        }, []),
                        E.createElement(
                            Os,
                            { ...o, style: n.styles?.tooltip },
                            E.createElement(
                                ws,
                                null,
                                E.createElement(
                                    Ss,
                                    null,
                                    n.title &&
                                        E.createElement(Ts, null, n.title),
                                    E.createElement(
                                        Cn,
                                        {
                                            ...r,
                                            onClick: r.onClick,
                                            variant: "solid",
                                        },
                                        E.createElement(jn, null),
                                    ),
                                ),
                                E.createElement(Is, null, n.content),
                            ),
                            E.createElement(
                                Cs,
                                { id: "buttonNext" },
                                E.createElement(Ps, null, e + 1, " of ", t),
                                !n.hideNextButton &&
                                    E.createElement(
                                        Es,
                                        {
                                            ...i,
                                            onClick:
                                                n.onNextButtonClick ||
                                                i.onClick,
                                            variant: "white",
                                        },
                                        e + 1 === t ? "Done" : "Next",
                                    ),
                            ),
                        )
                    )));
                ((_s = at({ from: { opacity: 0 }, to: { opacity: 1 } })),
                    (to = at({
                        from: { transform: "translate(0, 20px)", opacity: 0 },
                        to: { transform: "translate(0, 0)", opacity: 1 },
                    })),
                    (As = at({
                        from: { opacity: 0, transform: "scale(0.8)" },
                        to: { opacity: 1, transform: "scale(1)" },
                    })),
                    (ks = at({
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                    })),
                    (Ns = re.div(({ visible: e }) => ({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        opacity: e ? 1 : 0,
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1e3,
                        transition: "opacity 1s 0.5s",
                    }))),
                    (js = re.div({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        animation: `${_s} 2s`,
                        background: `
    radial-gradient(90% 90%, #ff4785 0%, #db5698 30%, #1ea7fdcc 100%),
    radial-gradient(circle, #ff4785 0%, transparent 80%),
    radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 20%, transparent 40%),
    radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 18%, transparent 30%)`,
                        "&::before": {
                            opacity: 0.5,
                            background: `
      radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 10%, transparent 20%),
      radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 8%, transparent 20%)`,
                            content: '""',
                            position: "absolute",
                            top: "-50vw",
                            left: "-50vh",
                            transform: "translate(-50%, -50%)",
                            width: "calc(100vw + 100vh)",
                            height: "calc(100vw + 100vh)",
                            animation: `${ks} 12s linear infinite`,
                        },
                    })),
                    (Ms = re.div(({ visible: e }) => ({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        textAlign: "center",
                        width: "90vw",
                        minWidth: 290,
                        maxWidth: 410,
                        opacity: e ? 1 : 0,
                        transition: "opacity 0.5s",
                        h1: {
                            fontSize: 45,
                            fontWeight: "bold",
                            animation: `${to} 1.5s 1s backwards`,
                        },
                    }))),
                    (Ls = re.div({
                        display: "flex",
                        marginTop: 40,
                        div: {
                            display: "flex",
                            flexBasis: "33.33%",
                            flexDirection: "column",
                            alignItems: "center",
                            animation: `${to} 1s backwards`,
                            "&:nth-child(1)": { animationDelay: "2s" },
                            "&:nth-child(2)": { animationDelay: "2.5s" },
                            "&:nth-child(3)": { animationDelay: "3s" },
                        },
                        svg: { marginBottom: 10 },
                    })),
                    (Ds = re.button({
                        display: "inline-flex",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 40,
                        width: 48,
                        height: 48,
                        padding: 0,
                        borderRadius: "50%",
                        border: 0,
                        outline: "none",
                        background: "rgba(255, 255, 255, 0.3)",
                        cursor: "pointer",
                        transition: "background 0.2s",
                        animation: `${As} 1.5s 4s backwards`,
                        "&:hover, &:focus": {
                            background: "rgba(255, 255, 255, 0.4)",
                        },
                    })),
                    (Fs = re(Nn)({ width: 30, color: "white" })),
                    (dr = re.svg(({ progress: e }) => ({
                        position: "absolute",
                        top: -1,
                        left: -1,
                        width: "50px!important",
                        height: "50px!important",
                        transform: "rotate(-90deg)",
                        color: "white",
                        circle: {
                            r: "24",
                            cx: "25",
                            cy: "25",
                            fill: "transparent",
                            stroke: e ? "currentColor" : "transparent",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            strokeDasharray: Math.PI * 48,
                        },
                    }))),
                    (Bs = ({ onDismiss: e, duration: t = 6e3 }) => {
                        let [n, r] = ue(-4e5 / t),
                            [i, o] = ue(!0),
                            a = n >= 100,
                            s = ze(() => {
                                o(!1);
                                let l = setTimeout(e, 1500);
                                return () => clearTimeout(l);
                            }, [e]);
                        return (
                            ce(() => {
                                if (!t) return;
                                let l = 1e3 / 50,
                                    c = 100 / (t / l),
                                    p = setInterval(() => r(u => u + c), l);
                                return () => clearInterval(p);
                            }, [t]),
                            ce(() => {
                                a && s();
                            }, [a, s]),
                            E.createElement(
                                Ns,
                                { visible: i },
                                E.createElement(js, null),
                                E.createElement(
                                    Ms,
                                    { visible: i },
                                    E.createElement(
                                        "h1",
                                        null,
                                        "Meet your new frontend workshop",
                                    ),
                                    E.createElement(
                                        Ls,
                                        null,
                                        E.createElement(
                                            "div",
                                            null,
                                            E.createElement(
                                                "svg",
                                                {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "33",
                                                    height: "32",
                                                },
                                                E.createElement("path", {
                                                    d: "M4.06 0H32.5v28.44h-3.56V32H.5V3.56h3.56V0Zm21.33 7.11H4.06v21.33h21.33V7.11Z",
                                                    fill: "currentColor",
                                                }),
                                            ),
                                            "Development",
                                        ),
                                        E.createElement(
                                            "div",
                                            null,
                                            E.createElement(
                                                "svg",
                                                {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "32",
                                                    height: "32",
                                                },
                                                E.createElement("path", {
                                                    d: "M15.95 32c-1.85 0-3.1-1.55-3.1-3.54 0-1.1.45-2.78 1.35-5.03.9-2.3 1.35-4.51 1.35-6.81a22.21 22.21 0 0 0-5.1 3.67c-2.5 2.47-4.95 4.9-7.55 4.9-1.6 0-2.9-1.1-2.9-2.43 0-1.46 1.35-2.91 4.3-3.62 1.45-.36 3.1-.75 4.95-1.06 1.8-.31 3.8-1.02 5.9-2.08a23.77 23.77 0 0 0-6.1-2.12C5.3 13.18 2.3 12.6 1 11.28.35 10.6 0 9.9 0 9.14 0 7.82 1.2 6.8 2.95 6.8c2.65 0 5.75 3.1 7.95 5.3 1.1 1.1 2.65 2.21 4.65 3.27v-.57c0-1.77-.15-3.23-.55-4.3-.8-2.11-2.05-5.43-2.05-6.97 0-2.04 1.3-3.54 3.1-3.54 1.75 0 3.1 1.41 3.1 3.54 0 1.06-.45 2.78-1.35 5.12-.9 2.35-1.35 4.6-1.35 6.72 2.85-1.59 2.5-1.41 4.95-3.5 2.35-2.29 4-3.7 4.9-4.23.95-.58 1.9-.84 2.9-.84 1.6 0 2.8.97 2.8 2.34 0 1.5-1.25 2.78-4.15 3.62-1.4.4-3.05.75-4.9 1.1-1.9.36-3.9 1.07-6.1 2.13a23.3 23.3 0 0 0 5.95 2.08c3.65.7 6.75 1.32 8.15 2.6.7.67 1.05 1.33 1.05 2.08 0 1.33-1.2 2.43-2.95 2.43-2.95 0-6.75-4.15-8.2-5.61-.7-.7-2.2-1.72-4.4-2.96v.57c0 1.9.45 4.03 1.3 6.32.85 2.3 1.3 3.94 1.3 4.95 0 2.08-1.35 3.54-3.1 3.54Z",
                                                    fill: "currentColor",
                                                }),
                                            ),
                                            "Testing",
                                        ),
                                        E.createElement(
                                            "div",
                                            null,
                                            E.createElement(
                                                "svg",
                                                {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "33",
                                                    height: "32",
                                                },
                                                E.createElement("path", {
                                                    d: "M.5 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Zm16 12.44A12.44 12.44 0 0 1 4.3 13.53a8 8 0 1 0 9.73-9.73 12.44 12.44 0 1 1 2.47 24.64ZM12.06 16a4.44 4.44 0 1 1 0-8.89 4.44 4.44 0 0 1 0 8.89Z",
                                                    fill: "currentColor",
                                                    fillRule: "evenodd",
                                                }),
                                            ),
                                            "Documentation",
                                        ),
                                    ),
                                    E.createElement(
                                        Ds,
                                        { onClick: s },
                                        E.createElement(Fs, null),
                                        E.createElement(
                                            dr,
                                            {
                                                xmlns: "http://www.w3.org/2000/svg",
                                            },
                                            E.createElement("circle", null),
                                        ),
                                        E.createElement(
                                            dr,
                                            {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                progress: !0,
                                            },
                                            E.createElement("circle", {
                                                strokeDashoffset:
                                                    Math.PI *
                                                    48 *
                                                    (1 -
                                                        Math.max(
                                                            0,
                                                            Math.min(n, 100),
                                                        ) /
                                                            100),
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    (Ws = re.span(({ theme: e }) => ({
                        display: "inline-flex",
                        borderRadius: 3,
                        padding: "0 5px",
                        marginBottom: -2,
                        opacity: 0.8,
                        fontFamily: e.typography.fonts.mono,
                        fontSize: 11,
                        border:
                            e.base === "dark"
                                ? e.color.darkest
                                : e.color.lightest,
                        color:
                            e.base === "dark"
                                ? e.color.lightest
                                : e.color.darkest,
                        backgroundColor:
                            e.base === "dark" ? "black" : e.color.light,
                        boxSizing: "border-box",
                        lineHeight: "17px",
                    }))),
                    (Us = re.div(({ theme: e }) => ({
                        background: e.background.content,
                        borderRadius: 3,
                        marginTop: 15,
                        padding: 10,
                        fontSize: e.typography.size.s1,
                        ".linenumber": { opacity: 0.5 },
                    }))),
                    (Hs = qt()));
            });
        X();
        Q();
        Z();
        X();
        Q();
        Z();
        Ye();
        Tt();
        zt();
        X();
        Q();
        Z();
        var wc = __STORYBOOK_API__,
            {
                ActiveTabs: Sc,
                Consumer: Tc,
                ManagerContext: Ic,
                Provider: Cc,
                RequestResponseError: Pc,
                addons: In,
                combineParameters: Rc,
                controlOrMetaKey: xc,
                controlOrMetaSymbol: _c,
                eventMatchesShortcut: Ac,
                eventToShortcut: kc,
                experimental_requestResponse: Nc,
                isMacLike: jc,
                isShortcutTaken: Mc,
                keyToSymbol: Lc,
                merge: Dc,
                mockChannel: Fc,
                optionOrAltSymbol: Bc,
                shortcutMatchesShortcut: Wc,
                shortcutToHumanString: Uc,
                types: Hc,
                useAddonState: Gc,
                useArgTypes: zc,
                useArgs: Yc,
                useChannel: qc,
                useGlobalTypes: $c,
                useGlobals: Vc,
                useParameter: Kc,
                useSharedState: Jc,
                useStoryPrepared: Xc,
                useStorybookApi: Qc,
                useStorybookState: Zc,
            } = __STORYBOOK_API__;
        var zs = Gt(() => Promise.resolve().then(() => (ro(), no)));
        In.register("@storybook/addon-onboarding", async e => {
            let t = e.getUrlState(),
                n =
                    t.path === "/onboarding" ||
                    t.queryParams.onboarding === "true";
            e.once(Sn, () => {
                if (
                    !(
                        e.getData("example-button--primary") ||
                        document.getElementById("example-button--primary")
                    )
                ) {
                    console.warn(
                        "[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling",
                    );
                    return;
                }
                if (!n || window.innerWidth < 730) return;
                (e.togglePanel(!0),
                    e.togglePanelPosition("bottom"),
                    e.setSelectedPanel("addon-controls"));
                let r = document.createElement("div");
                ((r.id = "storybook-addon-onboarding"),
                    document.body.appendChild(r),
                    De.render(
                        E.createElement(
                            Wt,
                            { fallback: E.createElement("div", null) },
                            E.createElement(zs, { api: e }),
                        ),
                        r,
                    ));
            });
        });
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
