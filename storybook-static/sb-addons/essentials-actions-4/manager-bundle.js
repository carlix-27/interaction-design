try {
    (() => {
        var o = __REACT__,
            {
                Children: Te,
                Component: _e,
                Fragment: ve,
                Profiler: Jr,
                PureComponent: qr,
                StrictMode: Xr,
                Suspense: Zr,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Kr,
                cloneElement: Qr,
                createContext: Z,
                createElement: en,
                createFactory: tn,
                createRef: rn,
                forwardRef: Se,
                isValidElement: nn,
                lazy: an,
                memo: j,
                startTransition: on,
                unstable_act: sn,
                useCallback: x,
                useContext: K,
                useDebugValue: ln,
                useDeferredValue: un,
                useEffect: Re,
                useId: cn,
                useImperativeHandle: pn,
                useInsertionEffect: fn,
                useLayoutEffect: Ae,
                useMemo: Ce,
                useReducer: dn,
                useRef: we,
                useState: U,
                useSyncExternalStore: mn,
                useTransition: gn,
                version: bn,
            } = __REACT__;
        var Tn = __STORYBOOK_COMPONENTS__,
            {
                A: _n,
                ActionBar: Ne,
                AddonPanel: vn,
                Badge: xe,
                Bar: Sn,
                Blockquote: Rn,
                Button: An,
                ClipboardCode: Cn,
                Code: wn,
                DL: Nn,
                Div: xn,
                DocumentWrapper: Ln,
                EmptyTabContent: In,
                ErrorFormatter: Dn,
                FlexBar: Mn,
                Form: Pn,
                H1: Bn,
                H2: Fn,
                H3: zn,
                H4: Hn,
                H5: jn,
                H6: Un,
                HR: kn,
                IconButton: Gn,
                IconButtonSkeleton: Wn,
                Icons: Vn,
                Img: $n,
                LI: Yn,
                Link: Jn,
                ListItem: qn,
                Loader: Xn,
                Modal: Zn,
                OL: Kn,
                P: Qn,
                Placeholder: ea,
                Pre: ta,
                ResetWrapper: ra,
                ScrollArea: Le,
                Separator: na,
                Spaced: Ie,
                Span: aa,
                StorybookIcon: oa,
                StorybookLogo: ia,
                Symbols: sa,
                SyntaxHighlighter: la,
                TT: ua,
                TabBar: ca,
                TabButton: pa,
                TabWrapper: fa,
                Table: da,
                Tabs: ma,
                TabsState: ga,
                TooltipLinkList: ba,
                TooltipMessage: ha,
                TooltipNote: Ea,
                UL: ya,
                WithTooltip: Oa,
                WithTooltipPure: Ta,
                Zoom: _a,
                codeCommon: va,
                components: Sa,
                createCopyToClipboardFunction: Ra,
                getStoryHref: Aa,
                icons: Ca,
                interleaveSeparators: wa,
                nameSpaceClassNames: Na,
                resetComponents: xa,
                withReset: La,
            } = __STORYBOOK_COMPONENTS__;
        var Ba = __STORYBOOK_CORE_EVENTS__,
            {
                ARGTYPES_INFO_REQUEST: Fa,
                ARGTYPES_INFO_RESPONSE: za,
                CHANNEL_CREATED: Ha,
                CHANNEL_WS_DISCONNECT: ja,
                CONFIG_ERROR: Ua,
                CREATE_NEW_STORYFILE_REQUEST: ka,
                CREATE_NEW_STORYFILE_RESPONSE: Ga,
                CURRENT_STORY_WAS_SET: Wa,
                DOCS_PREPARED: Va,
                DOCS_RENDERED: $a,
                FILE_COMPONENT_SEARCH_REQUEST: Ya,
                FILE_COMPONENT_SEARCH_RESPONSE: Ja,
                FORCE_REMOUNT: qa,
                FORCE_RE_RENDER: Xa,
                GLOBALS_UPDATED: Za,
                NAVIGATE_URL: Ka,
                PLAY_FUNCTION_THREW_EXCEPTION: Qa,
                PRELOAD_ENTRIES: eo,
                PREVIEW_BUILDER_PROGRESS: to,
                PREVIEW_KEYDOWN: ro,
                REGISTER_SUBSCRIPTION: no,
                REQUEST_WHATS_NEW_DATA: ao,
                RESET_STORY_ARGS: oo,
                RESULT_WHATS_NEW_DATA: io,
                SAVE_STORY_REQUEST: so,
                SAVE_STORY_RESPONSE: lo,
                SELECT_STORY: uo,
                SET_CONFIG: co,
                SET_CURRENT_STORY: po,
                SET_FILTER: fo,
                SET_GLOBALS: mo,
                SET_INDEX: go,
                SET_STORIES: bo,
                SET_WHATS_NEW_CACHE: ho,
                SHARED_STATE_CHANGED: Eo,
                SHARED_STATE_SET: yo,
                STORIES_COLLAPSE_ALL: Oo,
                STORIES_EXPAND_ALL: To,
                STORY_ARGS_UPDATED: _o,
                STORY_CHANGED: k,
                STORY_ERRORED: vo,
                STORY_INDEX_INVALIDATED: So,
                STORY_MISSING: Ro,
                STORY_PREPARED: Ao,
                STORY_RENDERED: Co,
                STORY_RENDER_PHASE_CHANGED: wo,
                STORY_SPECIFIED: No,
                STORY_THREW_EXCEPTION: xo,
                STORY_UNCHANGED: Lo,
                TELEMETRY_ERROR: Io,
                TOGGLE_WHATS_NEW_NOTIFICATIONS: Do,
                UNHANDLED_ERRORS_WHILE_PLAYING: Mo,
                UPDATE_GLOBALS: Po,
                UPDATE_QUERY_PARAMS: Bo,
                UPDATE_STORY_ARGS: Fo,
            } = __STORYBOOK_CORE_EVENTS__;
        var Yo = __STORYBOOK_API__,
            {
                ActiveTabs: Jo,
                Consumer: qo,
                ManagerContext: Xo,
                Provider: Zo,
                RequestResponseError: Ko,
                addons: Q,
                combineParameters: Qo,
                controlOrMetaKey: ei,
                controlOrMetaSymbol: ti,
                eventMatchesShortcut: ri,
                eventToShortcut: ni,
                experimental_requestResponse: ai,
                isMacLike: oi,
                isShortcutTaken: ii,
                keyToSymbol: si,
                merge: li,
                mockChannel: ui,
                optionOrAltSymbol: ci,
                shortcutMatchesShortcut: pi,
                shortcutToHumanString: fi,
                types: De,
                useAddonState: Me,
                useArgTypes: di,
                useArgs: mi,
                useChannel: Pe,
                useGlobalTypes: gi,
                useGlobals: bi,
                useParameter: hi,
                useSharedState: Ei,
                useStoryPrepared: yi,
                useStorybookApi: Oi,
                useStorybookState: Ti,
            } = __STORYBOOK_API__;
        var Be = Object.prototype.hasOwnProperty;
        function Fe(e, t, r) {
            for (r of e.keys()) if (L(r, t)) return r;
        }
        function L(e, t) {
            var r, n, a;
            if (e === t) return !0;
            if (e && t && (r = e.constructor) === t.constructor) {
                if (r === Date) return e.getTime() === t.getTime();
                if (r === RegExp) return e.toString() === t.toString();
                if (r === Array) {
                    if ((n = e.length) === t.length)
                        for (; n-- && L(e[n], t[n]); );
                    return n === -1;
                }
                if (r === Set) {
                    if (e.size !== t.size) return !1;
                    for (n of e)
                        if (
                            ((a = n),
                            (a &&
                                typeof a == "object" &&
                                ((a = Fe(t, a)), !a)) ||
                                !t.has(a))
                        )
                            return !1;
                    return !0;
                }
                if (r === Map) {
                    if (e.size !== t.size) return !1;
                    for (n of e)
                        if (
                            ((a = n[0]),
                            (a &&
                                typeof a == "object" &&
                                ((a = Fe(t, a)), !a)) ||
                                !L(n[1], t.get(a)))
                        )
                            return !1;
                    return !0;
                }
                if (r === ArrayBuffer)
                    ((e = new Uint8Array(e)), (t = new Uint8Array(t)));
                else if (r === DataView) {
                    if ((n = e.byteLength) === t.byteLength)
                        for (; n-- && e.getInt8(n) === t.getInt8(n); );
                    return n === -1;
                }
                if (ArrayBuffer.isView(e)) {
                    if ((n = e.byteLength) === t.byteLength)
                        for (; n-- && e[n] === t[n]; );
                    return n === -1;
                }
                if (!r || typeof e == "object") {
                    n = 0;
                    for (r in e)
                        if (
                            (Be.call(e, r) && ++n && !Be.call(t, r)) ||
                            !(r in t) ||
                            !L(e[r], t[r])
                        )
                            return !1;
                    return Object.keys(t).length === n;
                }
            }
            return e !== e && t !== t;
        }
        var xi = __STORYBOOK_THEMING__,
            {
                CacheProvider: Li,
                ClassNames: Ii,
                Global: Di,
                ThemeProvider: Mi,
                background: Pi,
                color: Bi,
                convert: Fi,
                create: zi,
                createCache: Hi,
                createGlobal: ji,
                createReset: Ui,
                css: ki,
                darken: Gi,
                ensure: Wi,
                ignoreSsrWarning: Vi,
                isPropValid: $i,
                jsx: Yi,
                keyframes: Ji,
                lighten: qi,
                styled: B,
                themes: Xi,
                typography: Zi,
                useTheme: Ki,
                withTheme: ze,
            } = __STORYBOOK_THEMING__;
        function T() {
            return (
                (T = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r)
                                  ({}).hasOwnProperty.call(r, n) &&
                                      (e[n] = r[n]);
                          }
                          return e;
                      }),
                T.apply(null, arguments)
            );
        }
        function He(e) {
            if (e === void 0)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                );
            return e;
        }
        function R(e, t) {
            return (
                (R = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (r, n) {
                          return ((r.__proto__ = n), r);
                      }),
                R(e, t)
            );
        }
        function je(e, t) {
            ((e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                R(e, t));
        }
        function G(e) {
            return (
                (G = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      }),
                G(e)
            );
        }
        function Ue(e) {
            try {
                return (
                    Function.toString.call(e).indexOf("[native code]") !== -1
                );
            } catch {
                return typeof e == "function";
            }
        }
        function ee() {
            try {
                var e = !Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                );
            } catch {}
            return (ee = function () {
                return !!e;
            })();
        }
        function ke(e, t, r) {
            if (ee()) return Reflect.construct.apply(null, arguments);
            var n = [null];
            n.push.apply(n, t);
            var a = new (e.bind.apply(e, n))();
            return (r && R(a, r.prototype), a);
        }
        function W(e) {
            var t = typeof Map == "function" ? new Map() : void 0;
            return (
                (W = function (n) {
                    if (n === null || !Ue(n)) return n;
                    if (typeof n != "function")
                        throw new TypeError(
                            "Super expression must either be null or a function",
                        );
                    if (t !== void 0) {
                        if (t.has(n)) return t.get(n);
                        t.set(n, a);
                    }
                    function a() {
                        return ke(n, arguments, G(this).constructor);
                    }
                    return (
                        (a.prototype = Object.create(n.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                        R(a, n)
                    );
                }),
                W(e)
            );
        }
        var _ = (function (e) {
            je(t, e);
            function t(r) {
                var n;
                if (1)
                    n =
                        e.call(
                            this,
                            "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                                r +
                                " for more information.",
                        ) || this;
                else for (var a, i, s; s < a; s++);
                return He(n);
            }
            return t;
        })(W(Error));
        function Ge(e, t) {
            return e.substr(-t.length) === t;
        }
        var pt = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
        function We(e) {
            if (typeof e != "string") return e;
            var t = e.match(pt);
            return t ? parseFloat(e) : e;
        }
        var ft = function (t) {
                return function (r, n) {
                    n === void 0 && (n = "16px");
                    var a = r,
                        i = n;
                    if (typeof r == "string") {
                        if (!Ge(r, "px")) throw new _(69, t, r);
                        a = We(r);
                    }
                    if (typeof n == "string") {
                        if (!Ge(n, "px")) throw new _(70, t, n);
                        i = We(n);
                    }
                    if (typeof a == "string") throw new _(71, r, t);
                    if (typeof i == "string") throw new _(72, n, t);
                    return "" + a / i + t;
                };
            },
            $e = ft,
            rl = $e("em");
        var nl = $e("rem");
        function te(e) {
            return Math.round(e * 255);
        }
        function dt(e, t, r) {
            return te(e) + "," + te(t) + "," + te(r);
        }
        function F(e, t, r, n) {
            if ((n === void 0 && (n = dt), t === 0)) return n(r, r, r);
            var a = (((e % 360) + 360) % 360) / 60,
                i = (1 - Math.abs(2 * r - 1)) * t,
                s = i * (1 - Math.abs((a % 2) - 1)),
                l = 0,
                u = 0,
                c = 0;
            a >= 0 && a < 1
                ? ((l = i), (u = s))
                : a >= 1 && a < 2
                  ? ((l = s), (u = i))
                  : a >= 2 && a < 3
                    ? ((u = i), (c = s))
                    : a >= 3 && a < 4
                      ? ((u = s), (c = i))
                      : a >= 4 && a < 5
                        ? ((l = s), (c = i))
                        : a >= 5 && a < 6 && ((l = i), (c = s));
            var p = r - i / 2,
                d = l + p,
                f = u + p,
                E = c + p;
            return n(d, f, E);
        }
        var Ve = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "639",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32",
        };
        function mt(e) {
            if (typeof e != "string") return e;
            var t = e.toLowerCase();
            return Ve[t] ? "#" + Ve[t] : e;
        }
        var gt = /^#[a-fA-F0-9]{6}$/,
            bt = /^#[a-fA-F0-9]{8}$/,
            ht = /^#[a-fA-F0-9]{3}$/,
            Et = /^#[a-fA-F0-9]{4}$/,
            re =
                /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
            yt =
                /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
            Ot =
                /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
            Tt =
                /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
        function I(e) {
            if (typeof e != "string") throw new _(3);
            var t = mt(e);
            if (t.match(gt))
                return {
                    red: parseInt("" + t[1] + t[2], 16),
                    green: parseInt("" + t[3] + t[4], 16),
                    blue: parseInt("" + t[5] + t[6], 16),
                };
            if (t.match(bt)) {
                var r = parseFloat(
                    (parseInt("" + t[7] + t[8], 16) / 255).toFixed(2),
                );
                return {
                    red: parseInt("" + t[1] + t[2], 16),
                    green: parseInt("" + t[3] + t[4], 16),
                    blue: parseInt("" + t[5] + t[6], 16),
                    alpha: r,
                };
            }
            if (t.match(ht))
                return {
                    red: parseInt("" + t[1] + t[1], 16),
                    green: parseInt("" + t[2] + t[2], 16),
                    blue: parseInt("" + t[3] + t[3], 16),
                };
            if (t.match(Et)) {
                var n = parseFloat(
                    (parseInt("" + t[4] + t[4], 16) / 255).toFixed(2),
                );
                return {
                    red: parseInt("" + t[1] + t[1], 16),
                    green: parseInt("" + t[2] + t[2], 16),
                    blue: parseInt("" + t[3] + t[3], 16),
                    alpha: n,
                };
            }
            var a = re.exec(t);
            if (a)
                return {
                    red: parseInt("" + a[1], 10),
                    green: parseInt("" + a[2], 10),
                    blue: parseInt("" + a[3], 10),
                };
            var i = yt.exec(t.substring(0, 50));
            if (i)
                return {
                    red: parseInt("" + i[1], 10),
                    green: parseInt("" + i[2], 10),
                    blue: parseInt("" + i[3], 10),
                    alpha:
                        parseFloat("" + i[4]) > 1
                            ? parseFloat("" + i[4]) / 100
                            : parseFloat("" + i[4]),
                };
            var s = Ot.exec(t);
            if (s) {
                var l = parseInt("" + s[1], 10),
                    u = parseInt("" + s[2], 10) / 100,
                    c = parseInt("" + s[3], 10) / 100,
                    p = "rgb(" + F(l, u, c) + ")",
                    d = re.exec(p);
                if (!d) throw new _(4, t, p);
                return {
                    red: parseInt("" + d[1], 10),
                    green: parseInt("" + d[2], 10),
                    blue: parseInt("" + d[3], 10),
                };
            }
            var f = Tt.exec(t.substring(0, 50));
            if (f) {
                var E = parseInt("" + f[1], 10),
                    m = parseInt("" + f[2], 10) / 100,
                    y = parseInt("" + f[3], 10) / 100,
                    O = "rgb(" + F(E, m, y) + ")",
                    N = re.exec(O);
                if (!N) throw new _(4, t, O);
                return {
                    red: parseInt("" + N[1], 10),
                    green: parseInt("" + N[2], 10),
                    blue: parseInt("" + N[3], 10),
                    alpha:
                        parseFloat("" + f[4]) > 1
                            ? parseFloat("" + f[4]) / 100
                            : parseFloat("" + f[4]),
                };
            }
            throw new _(5);
        }
        function _t(e) {
            var t = e.red / 255,
                r = e.green / 255,
                n = e.blue / 255,
                a = Math.max(t, r, n),
                i = Math.min(t, r, n),
                s = (a + i) / 2;
            if (a === i)
                return e.alpha !== void 0
                    ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha }
                    : { hue: 0, saturation: 0, lightness: s };
            var l,
                u = a - i,
                c = s > 0.5 ? u / (2 - a - i) : u / (a + i);
            switch (a) {
                case t:
                    l = (r - n) / u + (r < n ? 6 : 0);
                    break;
                case r:
                    l = (n - t) / u + 2;
                    break;
                default:
                    l = (t - r) / u + 4;
                    break;
            }
            return (
                (l *= 60),
                e.alpha !== void 0
                    ? { hue: l, saturation: c, lightness: s, alpha: e.alpha }
                    : { hue: l, saturation: c, lightness: s }
            );
        }
        function A(e) {
            return _t(I(e));
        }
        var vt = function (t) {
                return t.length === 7 &&
                    t[1] === t[2] &&
                    t[3] === t[4] &&
                    t[5] === t[6]
                    ? "#" + t[1] + t[3] + t[5]
                    : t;
            },
            ae = vt;
        function w(e) {
            var t = e.toString(16);
            return t.length === 1 ? "0" + t : t;
        }
        function ne(e) {
            return w(Math.round(e * 255));
        }
        function St(e, t, r) {
            return ae("#" + ne(e) + ne(t) + ne(r));
        }
        function V(e, t, r) {
            return F(e, t, r, St);
        }
        function Rt(e, t, r) {
            if (
                typeof e == "number" &&
                typeof t == "number" &&
                typeof r == "number"
            )
                return V(e, t, r);
            if (typeof e == "object" && t === void 0 && r === void 0)
                return V(e.hue, e.saturation, e.lightness);
            throw new _(1);
        }
        function At(e, t, r, n) {
            if (
                typeof e == "number" &&
                typeof t == "number" &&
                typeof r == "number" &&
                typeof n == "number"
            )
                return n >= 1
                    ? V(e, t, r)
                    : "rgba(" + F(e, t, r) + "," + n + ")";
            if (
                typeof e == "object" &&
                t === void 0 &&
                r === void 0 &&
                n === void 0
            )
                return e.alpha >= 1
                    ? V(e.hue, e.saturation, e.lightness)
                    : "rgba(" +
                          F(e.hue, e.saturation, e.lightness) +
                          "," +
                          e.alpha +
                          ")";
            throw new _(2);
        }
        function oe(e, t, r) {
            if (
                typeof e == "number" &&
                typeof t == "number" &&
                typeof r == "number"
            )
                return ae("#" + w(e) + w(t) + w(r));
            if (typeof e == "object" && t === void 0 && r === void 0)
                return ae("#" + w(e.red) + w(e.green) + w(e.blue));
            throw new _(6);
        }
        function $(e, t, r, n) {
            if (typeof e == "string" && typeof t == "number") {
                var a = I(e);
                return (
                    "rgba(" +
                    a.red +
                    "," +
                    a.green +
                    "," +
                    a.blue +
                    "," +
                    t +
                    ")"
                );
            } else {
                if (
                    typeof e == "number" &&
                    typeof t == "number" &&
                    typeof r == "number" &&
                    typeof n == "number"
                )
                    return n >= 1
                        ? oe(e, t, r)
                        : "rgba(" + e + "," + t + "," + r + "," + n + ")";
                if (
                    typeof e == "object" &&
                    t === void 0 &&
                    r === void 0 &&
                    n === void 0
                )
                    return e.alpha >= 1
                        ? oe(e.red, e.green, e.blue)
                        : "rgba(" +
                              e.red +
                              "," +
                              e.green +
                              "," +
                              e.blue +
                              "," +
                              e.alpha +
                              ")";
            }
            throw new _(7);
        }
        var Ct = function (t) {
                return (
                    typeof t.red == "number" &&
                    typeof t.green == "number" &&
                    typeof t.blue == "number" &&
                    (typeof t.alpha != "number" || typeof t.alpha > "u")
                );
            },
            wt = function (t) {
                return (
                    typeof t.red == "number" &&
                    typeof t.green == "number" &&
                    typeof t.blue == "number" &&
                    typeof t.alpha == "number"
                );
            },
            Nt = function (t) {
                return (
                    typeof t.hue == "number" &&
                    typeof t.saturation == "number" &&
                    typeof t.lightness == "number" &&
                    (typeof t.alpha != "number" || typeof t.alpha > "u")
                );
            },
            xt = function (t) {
                return (
                    typeof t.hue == "number" &&
                    typeof t.saturation == "number" &&
                    typeof t.lightness == "number" &&
                    typeof t.alpha == "number"
                );
            };
        function C(e) {
            if (typeof e != "object") throw new _(8);
            if (wt(e)) return $(e);
            if (Ct(e)) return oe(e);
            if (xt(e)) return At(e);
            if (Nt(e)) return Rt(e);
            throw new _(8);
        }
        function Ye(e, t, r) {
            return function () {
                var a = r.concat(Array.prototype.slice.call(arguments));
                return a.length >= t ? e.apply(this, a) : Ye(e, t, a);
            };
        }
        function v(e) {
            return Ye(e, e.length, []);
        }
        function Lt(e, t) {
            if (t === "transparent") return t;
            var r = A(t);
            return C(T({}, r, { hue: r.hue + parseFloat(e) }));
        }
        var al = v(Lt);
        function D(e, t, r) {
            return Math.max(e, Math.min(t, r));
        }
        function It(e, t) {
            if (t === "transparent") return t;
            var r = A(t);
            return C(
                T({}, r, { lightness: D(0, 1, r.lightness - parseFloat(e)) }),
            );
        }
        var ol = v(It);
        function Dt(e, t) {
            if (t === "transparent") return t;
            var r = A(t);
            return C(
                T({}, r, { saturation: D(0, 1, r.saturation - parseFloat(e)) }),
            );
        }
        var il = v(Dt);
        function Mt(e, t) {
            if (t === "transparent") return t;
            var r = A(t);
            return C(
                T({}, r, { lightness: D(0, 1, r.lightness + parseFloat(e)) }),
            );
        }
        var sl = v(Mt);
        function Pt(e, t, r) {
            if (t === "transparent") return r;
            if (r === "transparent") return t;
            if (e === 0) return r;
            var n = I(t),
                a = T({}, n, {
                    alpha: typeof n.alpha == "number" ? n.alpha : 1,
                }),
                i = I(r),
                s = T({}, i, {
                    alpha: typeof i.alpha == "number" ? i.alpha : 1,
                }),
                l = a.alpha - s.alpha,
                u = parseFloat(e) * 2 - 1,
                c = u * l === -1 ? u : u + l,
                p = 1 + u * l,
                d = (c / p + 1) / 2,
                f = 1 - d,
                E = {
                    red: Math.floor(a.red * d + s.red * f),
                    green: Math.floor(a.green * d + s.green * f),
                    blue: Math.floor(a.blue * d + s.blue * f),
                    alpha:
                        a.alpha * parseFloat(e) + s.alpha * (1 - parseFloat(e)),
                };
            return $(E);
        }
        var Bt = v(Pt),
            Je = Bt;
        function Ft(e, t) {
            if (t === "transparent") return t;
            var r = I(t),
                n = typeof r.alpha == "number" ? r.alpha : 1,
                a = T({}, r, {
                    alpha: D(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
                });
            return $(a);
        }
        var zt = v(Ft),
            qe = zt;
        function Ht(e, t) {
            if (t === "transparent") return t;
            var r = A(t);
            return C(
                T({}, r, { saturation: D(0, 1, r.saturation + parseFloat(e)) }),
            );
        }
        var ll = v(Ht);
        function jt(e, t) {
            return t === "transparent"
                ? t
                : C(T({}, A(t), { hue: parseFloat(e) }));
        }
        var ul = v(jt);
        function Ut(e, t) {
            return t === "transparent"
                ? t
                : C(T({}, A(t), { lightness: parseFloat(e) }));
        }
        var cl = v(Ut);
        function kt(e, t) {
            return t === "transparent"
                ? t
                : C(T({}, A(t), { saturation: parseFloat(e) }));
        }
        var pl = v(kt);
        function Gt(e, t) {
            return t === "transparent"
                ? t
                : Je(parseFloat(e), "rgb(0, 0, 0)", t);
        }
        var fl = v(Gt);
        function Wt(e, t) {
            return t === "transparent"
                ? t
                : Je(parseFloat(e), "rgb(255, 255, 255)", t);
        }
        var dl = v(Wt);
        function Vt(e, t) {
            if (t === "transparent") return t;
            var r = I(t),
                n = typeof r.alpha == "number" ? r.alpha : 1,
                a = T({}, r, {
                    alpha: D(
                        0,
                        1,
                        +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100,
                    ),
                });
            return $(a);
        }
        var ml = v(Vt);
        var $t = "actions",
            H = "storybook/actions",
            Yt = `${H}/panel`,
            se = `${H}/action-event`,
            et = `${H}/action-clear`,
            Jt = Object.create,
            pe = Object.defineProperty,
            qt = Object.getOwnPropertyDescriptor,
            tt = Object.getOwnPropertyNames,
            Xt = Object.getPrototypeOf,
            Zt = Object.prototype.hasOwnProperty,
            fe = (e, t) =>
                function () {
                    return (
                        t || (0, e[tt(e)[0]])((t = { exports: {} }).exports, t),
                        t.exports
                    );
                },
            Kt = (e, t) => {
                for (var r in t) pe(e, r, { get: t[r], enumerable: !0 });
            },
            Qt = (e, t, r, n) => {
                if ((t && typeof t == "object") || typeof t == "function")
                    for (let a of tt(t))
                        !Zt.call(e, a) &&
                            a !== r &&
                            pe(e, a, {
                                get: () => t[a],
                                enumerable: !(n = qt(t, a)) || n.enumerable,
                            });
                return e;
            },
            er = (e, t, r) => (
                (r = e != null ? Jt(Xt(e)) : {}),
                Qt(
                    t || !e || !e.__esModule
                        ? pe(r, "default", { value: e, enumerable: !0 })
                        : r,
                    e,
                )
            ),
            tr = fe({
                "node_modules/is-object/index.js"(e, t) {
                    t.exports = function (r) {
                        return typeof r == "object" && r !== null;
                    };
                },
            }),
            rr = fe({
                "node_modules/is-window/index.js"(e, t) {
                    t.exports = function (r) {
                        if (r == null) return !1;
                        var n = Object(r);
                        return n === n.window;
                    };
                },
            }),
            nr = fe({
                "node_modules/is-dom/index.js"(e, t) {
                    var r = tr(),
                        n = rr();
                    function a(i) {
                        return !r(i) ||
                            !n(window) ||
                            typeof window.Node != "function"
                            ? !1
                            : typeof i.nodeType == "number" &&
                                  typeof i.nodeName == "string";
                    }
                    t.exports = a;
                },
            }),
            q = {};
        Kt(q, { chromeDark: () => ar, chromeLight: () => or });
        var ar = {
                BASE_FONT_FAMILY: "Menlo, monospace",
                BASE_FONT_SIZE: "11px",
                BASE_LINE_HEIGHT: 1.2,
                BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
                BASE_COLOR: "rgb(213, 213, 213)",
                OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
                OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
                OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
                OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
                OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
                OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
                OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
                OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
                OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
                OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
                OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
                HTML_TAG_COLOR: "rgb(93, 176, 215)",
                HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
                HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
                HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
                HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
                HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
                HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
                ARROW_COLOR: "rgb(145, 145, 145)",
                ARROW_MARGIN_RIGHT: 3,
                ARROW_FONT_SIZE: 12,
                ARROW_ANIMATION_DURATION: "0",
                TREENODE_FONT_FAMILY: "Menlo, monospace",
                TREENODE_FONT_SIZE: "11px",
                TREENODE_LINE_HEIGHT: 1.2,
                TREENODE_PADDING_LEFT: 12,
                TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
                TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
                TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
                TABLE_SORT_ICON_COLOR: "black",
                TABLE_DATA_BACKGROUND_IMAGE:
                    "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
                TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
            },
            or = {
                BASE_FONT_FAMILY: "Menlo, monospace",
                BASE_FONT_SIZE: "11px",
                BASE_LINE_HEIGHT: 1.2,
                BASE_BACKGROUND_COLOR: "white",
                BASE_COLOR: "black",
                OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
                OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
                OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
                OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
                OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
                OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
                OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
                OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
                OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
                OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
                OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
                HTML_TAG_COLOR: "rgb(168, 148, 166)",
                HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
                HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
                HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
                HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
                HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
                HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
                ARROW_COLOR: "#6e6e6e",
                ARROW_MARGIN_RIGHT: 3,
                ARROW_FONT_SIZE: 12,
                ARROW_ANIMATION_DURATION: "0",
                TREENODE_FONT_FAMILY: "Menlo, monospace",
                TREENODE_FONT_SIZE: "11px",
                TREENODE_LINE_HEIGHT: 1.2,
                TREENODE_PADDING_LEFT: 12,
                TABLE_BORDER_COLOR: "#aaa",
                TABLE_TH_BACKGROUND_COLOR: "#eee",
                TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
                TABLE_SORT_ICON_COLOR: "#6e6e6e",
                TABLE_DATA_BACKGROUND_IMAGE:
                    "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
                TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
            },
            rt = Z([{}, () => {}]),
            ie = {
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                KhtmlUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                OUserSelect: "none",
                userSelect: "none",
            },
            Y = e => ({
                DOMNodePreview: {
                    htmlOpenTag: {
                        base: { color: e.HTML_TAG_COLOR },
                        tagName: {
                            color: e.HTML_TAGNAME_COLOR,
                            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
                        },
                        htmlAttributeName: {
                            color: e.HTML_ATTRIBUTE_NAME_COLOR,
                        },
                        htmlAttributeValue: {
                            color: e.HTML_ATTRIBUTE_VALUE_COLOR,
                        },
                    },
                    htmlCloseTag: {
                        base: { color: e.HTML_TAG_COLOR },
                        offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
                        tagName: {
                            color: e.HTML_TAGNAME_COLOR,
                            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
                        },
                    },
                    htmlComment: { color: e.HTML_COMMENT_COLOR },
                    htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
                },
                ObjectPreview: {
                    objectDescription: { fontStyle: "italic" },
                    preview: { fontStyle: "italic" },
                    arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
                    objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
                },
                ObjectName: {
                    base: { color: e.OBJECT_NAME_COLOR },
                    dimmed: { opacity: 0.6 },
                },
                ObjectValue: {
                    objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
                    objectValueUndefined: {
                        color: e.OBJECT_VALUE_UNDEFINED_COLOR,
                    },
                    objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
                    objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
                    objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
                    objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
                    objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
                    objectValueFunctionPrefix: {
                        color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
                        fontStyle: "italic",
                    },
                    objectValueFunctionName: { fontStyle: "italic" },
                },
                TreeView: {
                    treeViewOutline: {
                        padding: 0,
                        margin: 0,
                        listStyleType: "none",
                    },
                },
                TreeNode: {
                    treeNodeBase: {
                        color: e.BASE_COLOR,
                        backgroundColor: e.BASE_BACKGROUND_COLOR,
                        lineHeight: e.TREENODE_LINE_HEIGHT,
                        cursor: "default",
                        boxSizing: "border-box",
                        listStyle: "none",
                        fontFamily: e.TREENODE_FONT_FAMILY,
                        fontSize: e.TREENODE_FONT_SIZE,
                    },
                    treeNodePreviewContainer: {},
                    treeNodePlaceholder: {
                        whiteSpace: "pre",
                        fontSize: e.ARROW_FONT_SIZE,
                        marginRight: e.ARROW_MARGIN_RIGHT,
                        ...ie,
                    },
                    treeNodeArrow: {
                        base: {
                            color: e.ARROW_COLOR,
                            display: "inline-block",
                            fontSize: e.ARROW_FONT_SIZE,
                            marginRight: e.ARROW_MARGIN_RIGHT,
                            ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
                                ? {
                                      transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s`,
                                  }
                                : {}),
                            ...ie,
                        },
                        expanded: {
                            WebkitTransform: "rotateZ(90deg)",
                            MozTransform: "rotateZ(90deg)",
                            transform: "rotateZ(90deg)",
                        },
                        collapsed: {
                            WebkitTransform: "rotateZ(0deg)",
                            MozTransform: "rotateZ(0deg)",
                            transform: "rotateZ(0deg)",
                        },
                    },
                    treeNodeChildNodesContainer: {
                        margin: 0,
                        paddingLeft: e.TREENODE_PADDING_LEFT,
                    },
                },
                TableInspector: {
                    base: {
                        color: e.BASE_COLOR,
                        position: "relative",
                        border: `1px solid ${e.TABLE_BORDER_COLOR}`,
                        fontFamily: e.BASE_FONT_FAMILY,
                        fontSize: e.BASE_FONT_SIZE,
                        lineHeight: "120%",
                        boxSizing: "border-box",
                        cursor: "default",
                    },
                },
                TableInspectorHeaderContainer: {
                    base: {
                        top: 0,
                        height: "17px",
                        left: 0,
                        right: 0,
                        overflowX: "hidden",
                    },
                    table: {
                        tableLayout: "fixed",
                        borderSpacing: 0,
                        borderCollapse: "separate",
                        height: "100%",
                        width: "100%",
                        margin: 0,
                    },
                },
                TableInspectorDataContainer: {
                    tr: { display: "table-row" },
                    td: {
                        boxSizing: "border-box",
                        border: "none",
                        height: "16px",
                        verticalAlign: "top",
                        padding: "1px 4px",
                        WebkitUserSelect: "text",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        lineHeight: "14px",
                    },
                    div: {
                        position: "static",
                        top: "17px",
                        bottom: 0,
                        overflowY: "overlay",
                        transform: "translateZ(0)",
                        left: 0,
                        right: 0,
                        overflowX: "hidden",
                    },
                    table: {
                        positon: "static",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        borderTop: "0 none transparent",
                        margin: 0,
                        backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
                        backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
                        tableLayout: "fixed",
                        borderSpacing: 0,
                        borderCollapse: "separate",
                        width: "100%",
                        fontSize: e.BASE_FONT_SIZE,
                        lineHeight: "120%",
                    },
                },
                TableInspectorTH: {
                    base: {
                        position: "relative",
                        height: "auto",
                        textAlign: "left",
                        backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
                        borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
                        fontWeight: "normal",
                        verticalAlign: "middle",
                        padding: "0 4px",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        lineHeight: "14px",
                        ":hover": { backgroundColor: e.TABLE_TH_HOVER_COLOR },
                    },
                    div: {
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontSize: e.BASE_FONT_SIZE,
                        lineHeight: "120%",
                    },
                },
                TableInspectorLeftBorder: {
                    none: { borderLeft: "none" },
                    solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
                },
                TableInspectorSortIcon: {
                    display: "block",
                    marginRight: 3,
                    width: 8,
                    height: 7,
                    marginTop: -7,
                    color: e.TABLE_SORT_ICON_COLOR,
                    fontSize: 12,
                    ...ie,
                },
            }),
            le = "chromeLight",
            nt = Z(Y(q[le])),
            S = e => K(nt)[e],
            de =
                e =>
                ({ theme: t = le, ...r }) => {
                    let n = Ce(() => {
                        switch (Object.prototype.toString.call(t)) {
                            case "[object String]":
                                return Y(q[t]);
                            case "[object Object]":
                                return Y(t);
                            default:
                                return Y(q[le]);
                        }
                    }, [t]);
                    return o.createElement(
                        nt.Provider,
                        { value: n },
                        o.createElement(e, { ...r }),
                    );
                },
            ir = ({ expanded: e, styles: t }) =>
                o.createElement(
                    "span",
                    { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } },
                    "\u25B6",
                ),
            sr = j(e => {
                e = {
                    expanded: !0,
                    nodeRenderer: ({ name: p }) =>
                        o.createElement("span", null, p),
                    onClick: () => {},
                    shouldShowArrow: !1,
                    shouldShowPlaceholder: !0,
                    ...e,
                };
                let {
                        expanded: t,
                        onClick: r,
                        children: n,
                        nodeRenderer: a,
                        title: i,
                        shouldShowArrow: s,
                        shouldShowPlaceholder: l,
                    } = e,
                    u = S("TreeNode"),
                    c = a;
                return o.createElement(
                    "li",
                    {
                        "aria-expanded": t,
                        role: "treeitem",
                        style: u.treeNodeBase,
                        title: i,
                    },
                    o.createElement(
                        "div",
                        { style: u.treeNodePreviewContainer, onClick: r },
                        s || Te.count(n) > 0
                            ? o.createElement(ir, {
                                  expanded: t,
                                  styles: u.treeNodeArrow,
                              })
                            : l &&
                                  o.createElement(
                                      "span",
                                      { style: u.treeNodePlaceholder },
                                      "\xA0",
                                  ),
                        o.createElement(c, { ...e }),
                    ),
                    o.createElement(
                        "ol",
                        { role: "group", style: u.treeNodeChildNodesContainer },
                        t ? n : void 0,
                    ),
                );
            }),
            X = "$",
            Xe = "*";
        function J(e, t) {
            return !t(e).next().done;
        }
        var lr = e =>
                Array.from({ length: e }, (t, r) =>
                    [X].concat(Array.from({ length: r }, () => "*")).join("."),
                ),
            ur = (e, t, r, n, a) => {
                let i = []
                        .concat(lr(n))
                        .concat(r)
                        .filter(l => typeof l == "string"),
                    s = [];
                return (
                    i.forEach(l => {
                        let u = l.split("."),
                            c = (p, d, f) => {
                                if (f === u.length) {
                                    s.push(d);
                                    return;
                                }
                                let E = u[f];
                                if (f === 0)
                                    J(p, t) &&
                                        (E === X || E === Xe) &&
                                        c(p, X, f + 1);
                                else if (E === Xe)
                                    for (let { name: m, data: y } of t(p))
                                        J(y, t) && c(y, `${d}.${m}`, f + 1);
                                else {
                                    let m = p[E];
                                    J(m, t) && c(m, `${d}.${E}`, f + 1);
                                }
                            };
                        c(e, "", 0);
                    }),
                    s.reduce((l, u) => ((l[u] = !0), l), { ...a })
                );
            },
            at = j(e => {
                let {
                        data: t,
                        dataIterator: r,
                        path: n,
                        depth: a,
                        nodeRenderer: i,
                    } = e,
                    [s, l] = K(rt),
                    u = J(t, r),
                    c = !!s[n],
                    p = x(() => u && l(d => ({ ...d, [n]: !c })), [u, l, n, c]);
                return o.createElement(
                    sr,
                    {
                        expanded: c,
                        onClick: p,
                        shouldShowArrow: u,
                        shouldShowPlaceholder: a > 0,
                        nodeRenderer: i,
                        ...e,
                    },
                    c
                        ? [...r(t)].map(({ name: d, data: f, ...E }) =>
                              o.createElement(at, {
                                  name: d,
                                  data: f,
                                  depth: a + 1,
                                  path: `${n}.${d}`,
                                  key: d,
                                  dataIterator: r,
                                  nodeRenderer: i,
                                  ...E,
                              }),
                          )
                        : null,
                );
            }),
            ot = j(
                ({
                    name: e,
                    data: t,
                    dataIterator: r,
                    nodeRenderer: n,
                    expandPaths: a,
                    expandLevel: i,
                }) => {
                    let s = S("TreeView"),
                        l = U({}),
                        [, u] = l;
                    return (
                        Ae(() => u(c => ur(t, r, a, i, c)), [t, r, a, i]),
                        o.createElement(
                            rt.Provider,
                            { value: l },
                            o.createElement(
                                "ol",
                                { role: "tree", style: s.treeViewOutline },
                                o.createElement(at, {
                                    name: e,
                                    data: t,
                                    dataIterator: r,
                                    depth: 0,
                                    path: X,
                                    nodeRenderer: n,
                                }),
                            ),
                        )
                    );
                },
            ),
            me = ({ name: e, dimmed: t = !1, styles: r = {} }) => {
                let n = S("ObjectName"),
                    a = { ...n.base, ...(t ? n.dimmed : {}), ...r };
                return o.createElement("span", { style: a }, e);
            },
            z = ({ object: e, styles: t }) => {
                let r = S("ObjectValue"),
                    n = a => ({ ...r[a], ...t });
                switch (typeof e) {
                    case "bigint":
                        return o.createElement(
                            "span",
                            { style: n("objectValueNumber") },
                            String(e),
                            "n",
                        );
                    case "number":
                        return o.createElement(
                            "span",
                            { style: n("objectValueNumber") },
                            String(e),
                        );
                    case "string":
                        return o.createElement(
                            "span",
                            { style: n("objectValueString") },
                            '"',
                            e,
                            '"',
                        );
                    case "boolean":
                        return o.createElement(
                            "span",
                            { style: n("objectValueBoolean") },
                            String(e),
                        );
                    case "undefined":
                        return o.createElement(
                            "span",
                            { style: n("objectValueUndefined") },
                            "undefined",
                        );
                    case "object":
                        return e === null
                            ? o.createElement(
                                  "span",
                                  { style: n("objectValueNull") },
                                  "null",
                              )
                            : e instanceof Date
                              ? o.createElement("span", null, e.toString())
                              : e instanceof RegExp
                                ? o.createElement(
                                      "span",
                                      { style: n("objectValueRegExp") },
                                      e.toString(),
                                  )
                                : Array.isArray(e)
                                  ? o.createElement(
                                        "span",
                                        null,
                                        `Array(${e.length})`,
                                    )
                                  : e.constructor
                                    ? typeof e.constructor.isBuffer ==
                                          "function" &&
                                      e.constructor.isBuffer(e)
                                        ? o.createElement(
                                              "span",
                                              null,
                                              `Buffer[${e.length}]`,
                                          )
                                        : o.createElement(
                                              "span",
                                              null,
                                              e.constructor.name,
                                          )
                                    : o.createElement("span", null, "Object");
                    case "function":
                        return o.createElement(
                            "span",
                            null,
                            o.createElement(
                                "span",
                                { style: n("objectValueFunctionPrefix") },
                                "\u0192\xA0",
                            ),
                            o.createElement(
                                "span",
                                { style: n("objectValueFunctionName") },
                                e.name,
                                "()",
                            ),
                        );
                    case "symbol":
                        return o.createElement(
                            "span",
                            { style: n("objectValueSymbol") },
                            e.toString(),
                        );
                    default:
                        return o.createElement("span", null);
                }
            },
            it = Object.prototype.hasOwnProperty,
            cr = Object.prototype.propertyIsEnumerable;
        function ue(e, t) {
            let r = Object.getOwnPropertyDescriptor(e, t);
            if (r.get)
                try {
                    return r.get();
                } catch {
                    return r.get;
                }
            return e[t];
        }
        function Ze(e, t) {
            return e.length === 0
                ? []
                : e.slice(1).reduce((r, n) => r.concat([t, n]), [e[0]]);
        }
        var ce = ({ data: e }) => {
                let t = S("ObjectPreview"),
                    r = e;
                if (
                    typeof r != "object" ||
                    r === null ||
                    r instanceof Date ||
                    r instanceof RegExp
                )
                    return o.createElement(z, { object: r });
                if (Array.isArray(r)) {
                    let n = t.arrayMaxProperties,
                        a = r
                            .slice(0, n)
                            .map((s, l) =>
                                o.createElement(z, { key: l, object: s }),
                            );
                    r.length > n &&
                        a.push(
                            o.createElement(
                                "span",
                                { key: "ellipsis" },
                                "\u2026",
                            ),
                        );
                    let i = r.length;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                            "span",
                            { style: t.objectDescription },
                            i === 0 ? "" : `(${i})\xA0`,
                        ),
                        o.createElement(
                            "span",
                            { style: t.preview },
                            "[",
                            Ze(a, ", "),
                            "]",
                        ),
                    );
                } else {
                    let n = t.objectMaxProperties,
                        a = [];
                    for (let s in r)
                        if (it.call(r, s)) {
                            let l;
                            a.length === n - 1 &&
                                Object.keys(r).length > n &&
                                (l = o.createElement(
                                    "span",
                                    { key: "ellipsis" },
                                    "\u2026",
                                ));
                            let u = ue(r, s);
                            if (
                                (a.push(
                                    o.createElement(
                                        "span",
                                        { key: s },
                                        o.createElement(me, {
                                            name: s || '""',
                                        }),
                                        ":\xA0",
                                        o.createElement(z, { object: u }),
                                        l,
                                    ),
                                ),
                                l)
                            )
                                break;
                        }
                    let i = r.constructor ? r.constructor.name : "Object";
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                            "span",
                            { style: t.objectDescription },
                            i === "Object" ? "" : `${i} `,
                        ),
                        o.createElement(
                            "span",
                            { style: t.preview },
                            "{",
                            Ze(a, ", "),
                            "}",
                        ),
                    );
                }
            },
            pr = ({ name: e, data: t }) =>
                typeof e == "string"
                    ? o.createElement(
                          "span",
                          null,
                          o.createElement(me, { name: e }),
                          o.createElement("span", null, ": "),
                          o.createElement(ce, { data: t }),
                      )
                    : o.createElement(ce, { data: t }),
            fr = ({ name: e, data: t, isNonenumerable: r = !1 }) => {
                let n = t;
                return o.createElement(
                    "span",
                    null,
                    typeof e == "string"
                        ? o.createElement(me, { name: e, dimmed: r })
                        : o.createElement(ce, { data: e }),
                    o.createElement("span", null, ": "),
                    o.createElement(z, { object: n }),
                );
            },
            dr = (e, t) =>
                function* (r) {
                    if (
                        !(
                            (typeof r == "object" && r !== null) ||
                            typeof r == "function"
                        )
                    )
                        return;
                    let n = Array.isArray(r);
                    if (!n && r[Symbol.iterator]) {
                        let a = 0;
                        for (let i of r) {
                            if (Array.isArray(i) && i.length === 2) {
                                let [s, l] = i;
                                yield { name: s, data: l };
                            } else yield { name: a.toString(), data: i };
                            a++;
                        }
                    } else {
                        let a = Object.getOwnPropertyNames(r);
                        t === !0 && !n
                            ? a.sort()
                            : typeof t == "function" && a.sort(t);
                        for (let i of a)
                            if (cr.call(r, i)) {
                                let s = ue(r, i);
                                yield { name: i || '""', data: s };
                            } else if (e) {
                                let s;
                                try {
                                    s = ue(r, i);
                                } catch {}
                                s !== void 0 &&
                                    (yield {
                                        name: i,
                                        data: s,
                                        isNonenumerable: !0,
                                    });
                            }
                        e &&
                            r !== Object.prototype &&
                            (yield {
                                name: "__proto__",
                                data: Object.getPrototypeOf(r),
                                isNonenumerable: !0,
                            });
                    }
                },
            mr = ({ depth: e, name: t, data: r, isNonenumerable: n }) =>
                e === 0
                    ? o.createElement(pr, { name: t, data: r })
                    : o.createElement(fr, {
                          name: t,
                          data: r,
                          isNonenumerable: n,
                      }),
            gr = ({
                showNonenumerable: e = !1,
                sortObjectKeys: t,
                nodeRenderer: r,
                ...n
            }) => {
                let a = dr(e, t),
                    i = r || mr;
                return o.createElement(ot, {
                    nodeRenderer: i,
                    dataIterator: a,
                    ...n,
                });
            },
            br = de(gr);
        function hr(e) {
            if (typeof e == "object") {
                let t = [];
                if (Array.isArray(e)) {
                    let n = e.length;
                    t = [...Array(n).keys()];
                } else e !== null && (t = Object.keys(e));
                let r = t.reduce((n, a) => {
                    let i = e[a];
                    return (
                        typeof i == "object" &&
                            i !== null &&
                            Object.keys(i).reduce(
                                (s, l) => (s.includes(l) || s.push(l), s),
                                n,
                            ),
                        n
                    );
                }, []);
                return { rowHeaders: t, colHeaders: r };
            }
        }
        var Er = ({ rows: e, columns: t, rowsData: r }) => {
                let n = S("TableInspectorDataContainer"),
                    a = S("TableInspectorLeftBorder");
                return o.createElement(
                    "div",
                    { style: n.div },
                    o.createElement(
                        "table",
                        { style: n.table },
                        o.createElement("colgroup", null),
                        o.createElement(
                            "tbody",
                            null,
                            e.map((i, s) =>
                                o.createElement(
                                    "tr",
                                    { key: i, style: n.tr },
                                    o.createElement(
                                        "td",
                                        { style: { ...n.td, ...a.none } },
                                        i,
                                    ),
                                    t.map(l => {
                                        let u = r[s];
                                        return typeof u == "object" &&
                                            u !== null &&
                                            it.call(u, l)
                                            ? o.createElement(
                                                  "td",
                                                  {
                                                      key: l,
                                                      style: {
                                                          ...n.td,
                                                          ...a.solid,
                                                      },
                                                  },
                                                  o.createElement(z, {
                                                      object: u[l],
                                                  }),
                                              )
                                            : o.createElement("td", {
                                                  key: l,
                                                  style: {
                                                      ...n.td,
                                                      ...a.solid,
                                                  },
                                              });
                                    }),
                                ),
                            ),
                        ),
                    ),
                );
            },
            yr = e =>
                o.createElement(
                    "div",
                    {
                        style: {
                            position: "absolute",
                            top: 1,
                            right: 0,
                            bottom: 1,
                            display: "flex",
                            alignItems: "center",
                        },
                    },
                    e.children,
                ),
            Or = ({ sortAscending: e }) => {
                let t = S("TableInspectorSortIcon"),
                    r = e ? "\u25B2" : "\u25BC";
                return o.createElement("div", { style: t }, r);
            },
            Ke = ({
                sortAscending: e = !1,
                sorted: t = !1,
                onClick: r = void 0,
                borderStyle: n = {},
                children: a,
                ...i
            }) => {
                let s = S("TableInspectorTH"),
                    [l, u] = U(!1),
                    c = x(() => u(!0), []),
                    p = x(() => u(!1), []);
                return o.createElement(
                    "th",
                    {
                        ...i,
                        style: {
                            ...s.base,
                            ...n,
                            ...(l ? s.base[":hover"] : {}),
                        },
                        onMouseEnter: c,
                        onMouseLeave: p,
                        onClick: r,
                    },
                    o.createElement("div", { style: s.div }, a),
                    t &&
                        o.createElement(
                            yr,
                            null,
                            o.createElement(Or, { sortAscending: e }),
                        ),
                );
            },
            Tr = ({
                indexColumnText: e = "(index)",
                columns: t = [],
                sorted: r,
                sortIndexColumn: n,
                sortColumn: a,
                sortAscending: i,
                onTHClick: s,
                onIndexTHClick: l,
            }) => {
                let u = S("TableInspectorHeaderContainer"),
                    c = S("TableInspectorLeftBorder");
                return o.createElement(
                    "div",
                    { style: u.base },
                    o.createElement(
                        "table",
                        { style: u.table },
                        o.createElement(
                            "tbody",
                            null,
                            o.createElement(
                                "tr",
                                null,
                                o.createElement(
                                    Ke,
                                    {
                                        borderStyle: c.none,
                                        sorted: r && n,
                                        sortAscending: i,
                                        onClick: l,
                                    },
                                    e,
                                ),
                                t.map(p =>
                                    o.createElement(
                                        Ke,
                                        {
                                            borderStyle: c.solid,
                                            key: p,
                                            sorted: r && a === p,
                                            sortAscending: i,
                                            onClick: s.bind(null, p),
                                        },
                                        p,
                                    ),
                                ),
                            ),
                        ),
                    ),
                );
            },
            _r = ({ data: e, columns: t }) => {
                let r = S("TableInspector"),
                    [
                        {
                            sorted: n,
                            sortIndexColumn: a,
                            sortColumn: i,
                            sortAscending: s,
                        },
                        l,
                    ] = U({
                        sorted: !1,
                        sortIndexColumn: !1,
                        sortColumn: void 0,
                        sortAscending: !1,
                    }),
                    u = x(() => {
                        l(({ sortIndexColumn: m, sortAscending: y }) => ({
                            sorted: !0,
                            sortIndexColumn: !0,
                            sortColumn: void 0,
                            sortAscending: m ? !y : !0,
                        }));
                    }, []),
                    c = x(m => {
                        l(({ sortColumn: y, sortAscending: O }) => ({
                            sorted: !0,
                            sortIndexColumn: !1,
                            sortColumn: m,
                            sortAscending: m === y ? !O : !0,
                        }));
                    }, []);
                if (typeof e != "object" || e === null)
                    return o.createElement("div", null);
                let { rowHeaders: p, colHeaders: d } = hr(e);
                t !== void 0 && (d = t);
                let f = p.map(m => e[m]),
                    E;
                if (
                    (i !== void 0
                        ? (E = f.map((m, y) =>
                              typeof m == "object" && m !== null
                                  ? [m[i], y]
                                  : [void 0, y],
                          ))
                        : a && (E = p.map((m, y) => [p[y], y])),
                    E !== void 0)
                ) {
                    let m = (O, N) => (ut, ct) => {
                            let ge = O(ut),
                                be = O(ct),
                                he = typeof ge,
                                Ee = typeof be,
                                ye = (P, Oe) => (P < Oe ? -1 : P > Oe ? 1 : 0),
                                M;
                            if (he === Ee) M = ye(ge, be);
                            else {
                                let P = {
                                    string: 0,
                                    number: 1,
                                    object: 2,
                                    symbol: 3,
                                    boolean: 4,
                                    undefined: 5,
                                    function: 6,
                                };
                                M = ye(P[he], P[Ee]);
                            }
                            return (N || (M = -M), M);
                        },
                        y = E.sort(m(O => O[0], s)).map(O => O[1]);
                    ((p = y.map(O => p[O])), (f = y.map(O => f[O])));
                }
                return o.createElement(
                    "div",
                    { style: r.base },
                    o.createElement(Tr, {
                        columns: d,
                        sorted: n,
                        sortIndexColumn: a,
                        sortColumn: i,
                        sortAscending: s,
                        onTHClick: c,
                        onIndexTHClick: u,
                    }),
                    o.createElement(Er, { rows: p, columns: d, rowsData: f }),
                );
            },
            vr = de(_r),
            Sr = 80,
            st = e =>
                e.childNodes.length === 0 ||
                (e.childNodes.length === 1 &&
                    e.childNodes[0].nodeType === Node.TEXT_NODE &&
                    e.textContent.length < Sr),
            Rr = ({ tagName: e, attributes: t, styles: r }) =>
                o.createElement(
                    "span",
                    { style: r.base },
                    "<",
                    o.createElement("span", { style: r.tagName }, e),
                    (() => {
                        if (t) {
                            let n = [];
                            for (let a = 0; a < t.length; a++) {
                                let i = t[a];
                                n.push(
                                    o.createElement(
                                        "span",
                                        { key: a },
                                        " ",
                                        o.createElement(
                                            "span",
                                            { style: r.htmlAttributeName },
                                            i.name,
                                        ),
                                        '="',
                                        o.createElement(
                                            "span",
                                            { style: r.htmlAttributeValue },
                                            i.value,
                                        ),
                                        '"',
                                    ),
                                );
                            }
                            return n;
                        }
                    })(),
                    ">",
                ),
            Qe = ({ tagName: e, isChildNode: t = !1, styles: r }) =>
                o.createElement(
                    "span",
                    { style: Object.assign({}, r.base, t && r.offsetLeft) },
                    "</",
                    o.createElement("span", { style: r.tagName }, e),
                    ">",
                ),
            Ar = {
                1: "ELEMENT_NODE",
                3: "TEXT_NODE",
                7: "PROCESSING_INSTRUCTION_NODE",
                8: "COMMENT_NODE",
                9: "DOCUMENT_NODE",
                10: "DOCUMENT_TYPE_NODE",
                11: "DOCUMENT_FRAGMENT_NODE",
            },
            Cr = ({ isCloseTag: e, data: t, expanded: r }) => {
                let n = S("DOMNodePreview");
                if (e)
                    return o.createElement(Qe, {
                        styles: n.htmlCloseTag,
                        isChildNode: !0,
                        tagName: t.tagName,
                    });
                switch (t.nodeType) {
                    case Node.ELEMENT_NODE:
                        return o.createElement(
                            "span",
                            null,
                            o.createElement(Rr, {
                                tagName: t.tagName,
                                attributes: t.attributes,
                                styles: n.htmlOpenTag,
                            }),
                            st(t) ? t.textContent : !r && "\u2026",
                            !r &&
                                o.createElement(Qe, {
                                    tagName: t.tagName,
                                    styles: n.htmlCloseTag,
                                }),
                        );
                    case Node.TEXT_NODE:
                        return o.createElement("span", null, t.textContent);
                    case Node.CDATA_SECTION_NODE:
                        return o.createElement(
                            "span",
                            null,
                            "<![CDATA[" + t.textContent + "]]>",
                        );
                    case Node.COMMENT_NODE:
                        return o.createElement(
                            "span",
                            { style: n.htmlComment },
                            "<!--",
                            t.textContent,
                            "-->",
                        );
                    case Node.PROCESSING_INSTRUCTION_NODE:
                        return o.createElement("span", null, t.nodeName);
                    case Node.DOCUMENT_TYPE_NODE:
                        return o.createElement(
                            "span",
                            { style: n.htmlDoctype },
                            "<!DOCTYPE ",
                            t.name,
                            t.publicId ? ` PUBLIC "${t.publicId}"` : "",
                            !t.publicId && t.systemId ? " SYSTEM" : "",
                            t.systemId ? ` "${t.systemId}"` : "",
                            ">",
                        );
                    case Node.DOCUMENT_NODE:
                        return o.createElement("span", null, t.nodeName);
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        return o.createElement("span", null, t.nodeName);
                    default:
                        return o.createElement("span", null, Ar[t.nodeType]);
                }
            },
            wr = function* (e) {
                if (e && e.childNodes) {
                    if (st(e)) return;
                    for (let t = 0; t < e.childNodes.length; t++) {
                        let r = e.childNodes[t];
                        (r.nodeType === Node.TEXT_NODE &&
                            r.textContent.trim().length === 0) ||
                            (yield { name: `${r.tagName}[${t}]`, data: r });
                    }
                    e.tagName &&
                        (yield {
                            name: "CLOSE_TAG",
                            data: { tagName: e.tagName },
                            isCloseTag: !0,
                        });
                }
            },
            Nr = e =>
                o.createElement(ot, {
                    nodeRenderer: Cr,
                    dataIterator: wr,
                    ...e,
                }),
            xr = de(Nr),
            Lr = er(nr()),
            Ir = ({ table: e = !1, data: t, ...r }) =>
                e
                    ? o.createElement(vr, { data: t, ...r })
                    : (0, Lr.default)(t)
                      ? o.createElement(xr, { data: t, ...r })
                      : o.createElement(br, { data: t, ...r }),
            Dr = B.div({
                display: "flex",
                padding: 0,
                borderLeft: "5px solid transparent",
                borderBottom: "1px solid transparent",
                transition: "all 0.1s",
                alignItems: "flex-start",
                whiteSpace: "pre",
            }),
            Mr = B.div(({ theme: e }) => ({
                backgroundColor: qe(0.5, e.appBorderColor),
                color: e.color.inverseText,
                fontSize: e.typography.size.s1,
                fontWeight: e.typography.weight.bold,
                lineHeight: 1,
                padding: "1px 5px",
                borderRadius: 20,
                margin: "2px 0px",
            })),
            Pr = B.div({ flex: 1, padding: "0 0 0 5px" }),
            lt = Se(({ children: e, className: t }, r) =>
                o.createElement(
                    Le,
                    { ref: r, horizontal: !0, vertical: !0, className: t },
                    e,
                ),
            );
        lt.displayName = "UnstyledWrapped";
        var Br = B(lt)({ margin: 0, padding: "10px 5px 20px" }),
            Fr = ze(({ theme: e, ...t }) =>
                o.createElement(Ir, {
                    theme: e.addonActionsTheme || "chromeLight",
                    table: !1,
                    ...t,
                }),
            ),
            zr = ({ actions: e, onClear: t }) => {
                let r = we(null),
                    n = r.current,
                    a = n && n.scrollHeight - n.scrollTop === n.clientHeight;
                return (
                    Re(() => {
                        a && (r.current.scrollTop = r.current.scrollHeight);
                    }, [a, e.length]),
                    o.createElement(
                        ve,
                        null,
                        o.createElement(
                            Br,
                            { ref: r },
                            e.map(i =>
                                o.createElement(
                                    Dr,
                                    { key: i.id },
                                    i.count > 1 &&
                                        o.createElement(Mr, null, i.count),
                                    o.createElement(
                                        Pr,
                                        null,
                                        o.createElement(Fr, {
                                            sortObjectKeys: !0,
                                            showNonenumerable: !1,
                                            name: i.data.name,
                                            data: i.data.args ?? i.data,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                        o.createElement(Ne, {
                            actionItems: [{ title: "Clear", onClick: t }],
                        }),
                    )
                );
            },
            Hr = (e, t) => {
                try {
                    return L(e, t);
                } catch {
                    return !1;
                }
            },
            jr = class extends _e {
                constructor(e) {
                    (super(e),
                        (this.handleStoryChange = () => {
                            let { actions: t } = this.state;
                            t.length > 0 &&
                                t[0].options.clearOnStoryChange &&
                                this.clearActions();
                        }),
                        (this.addAction = t => {
                            this.setState(r => {
                                let n = [...r.actions],
                                    a = n.length && n[n.length - 1];
                                return (
                                    a && Hr(a.data, t.data)
                                        ? a.count++
                                        : ((t.count = 1), n.push(t)),
                                    { actions: n.slice(0, t.options.limit) }
                                );
                            });
                        }),
                        (this.clearActions = () => {
                            let { api: t } = this.props;
                            (t.emit(et), this.setState({ actions: [] }));
                        }),
                        (this.mounted = !1),
                        (this.state = { actions: [] }));
                }
                componentDidMount() {
                    this.mounted = !0;
                    let { api: e } = this.props;
                    (e.on(se, this.addAction), e.on(k, this.handleStoryChange));
                }
                componentWillUnmount() {
                    this.mounted = !1;
                    let { api: e } = this.props;
                    (e.off(k, this.handleStoryChange),
                        e.off(se, this.addAction));
                }
                render() {
                    let { actions: e = [] } = this.state,
                        { active: t } = this.props,
                        r = { actions: e, onClear: this.clearActions };
                    return t ? o.createElement(zr, { ...r }) : null;
                }
            };
        function Ur() {
            let [{ count: e }, t] = Me(H, { count: 0 });
            return (
                Pe({
                    [se]: () => {
                        t(r => ({ ...r, count: r.count + 1 }));
                    },
                    [k]: () => {
                        t(r => ({ ...r, count: 0 }));
                    },
                    [et]: () => {
                        t(r => ({ ...r, count: 0 }));
                    },
                }),
                o.createElement(
                    "div",
                    null,
                    o.createElement(
                        Ie,
                        { col: 1 },
                        o.createElement(
                            "span",
                            {
                                style: {
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                },
                            },
                            "Actions",
                        ),
                        e === 0
                            ? ""
                            : o.createElement(xe, { status: "neutral" }, e),
                    ),
                )
            );
        }
        Q.register(H, e => {
            Q.add(Yt, {
                title: Ur,
                type: De.PANEL,
                render: ({ active: t }) =>
                    o.createElement(jr, { api: e, active: !!t }),
                paramKey: $t,
            });
        });
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
