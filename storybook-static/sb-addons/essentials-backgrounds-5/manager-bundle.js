try {
    (() => {
        var re = Object.create;
        var Y = Object.defineProperty;
        var ie = Object.getOwnPropertyDescriptor;
        var ae = Object.getOwnPropertyNames;
        var ce = Object.getPrototypeOf,
            le = Object.prototype.hasOwnProperty;
        var E = (e =>
            typeof require < "u"
                ? require
                : typeof Proxy < "u"
                  ? new Proxy(e, {
                        get: (o, c) => (typeof require < "u" ? require : o)[c],
                    })
                  : e)(function (e) {
            if (typeof require < "u") return require.apply(this, arguments);
            throw Error('Dynamic require of "' + e + '" is not supported');
        });
        var M = (e, o) => () => (e && (o = e((e = 0))), o);
        var se = (e, o) => () => (
            o || e((o = { exports: {} }).exports, o),
            o.exports
        );
        var ue = (e, o, c, r) => {
            if ((o && typeof o == "object") || typeof o == "function")
                for (let i of ae(o))
                    !le.call(e, i) &&
                        i !== c &&
                        Y(e, i, {
                            get: () => o[i],
                            enumerable: !(r = ie(o, i)) || r.enumerable,
                        });
            return e;
        };
        var Ie = (e, o, c) => (
            (c = e != null ? re(ce(e)) : {}),
            ue(
                o || !e || !e.__esModule
                    ? Y(c, "default", { value: e, enumerable: !0 })
                    : c,
                e,
            )
        );
        var p = M(() => {});
        var h = M(() => {});
        var f = M(() => {});
        var X = se((Q, V) => {
            p();
            h();
            f();
            (function (e) {
                if (typeof Q == "object" && typeof V < "u") V.exports = e();
                else if (typeof define == "function" && define.amd)
                    define([], e);
                else {
                    var o;
                    (typeof window < "u" || typeof window < "u"
                        ? (o = window)
                        : typeof self < "u"
                          ? (o = self)
                          : (o = this),
                        (o.memoizerific = e()));
                }
            })(function () {
                var e, o, c;
                return (function r(i, d, l) {
                    function t(a, I) {
                        if (!d[a]) {
                            if (!i[a]) {
                                var s = typeof E == "function" && E;
                                if (!I && s) return s(a, !0);
                                if (n) return n(a, !0);
                                var C = new Error(
                                    "Cannot find module '" + a + "'",
                                );
                                throw ((C.code = "MODULE_NOT_FOUND"), C);
                            }
                            var m = (d[a] = { exports: {} });
                            i[a][0].call(
                                m.exports,
                                function (b) {
                                    var y = i[a][1][b];
                                    return t(y || b);
                                },
                                m,
                                m.exports,
                                r,
                                i,
                                d,
                                l,
                            );
                        }
                        return d[a].exports;
                    }
                    for (
                        var n = typeof E == "function" && E, u = 0;
                        u < l.length;
                        u++
                    )
                        t(l[u]);
                    return t;
                })(
                    {
                        1: [
                            function (r, i, d) {
                                i.exports = function (l) {
                                    if (typeof Map != "function" || l) {
                                        var t = r("./similar");
                                        return new t();
                                    } else return new Map();
                                };
                            },
                            { "./similar": 2 },
                        ],
                        2: [
                            function (r, i, d) {
                                function l() {
                                    return (
                                        (this.list = []),
                                        (this.lastItem = void 0),
                                        (this.size = 0),
                                        this
                                    );
                                }
                                ((l.prototype.get = function (t) {
                                    var n;
                                    if (
                                        this.lastItem &&
                                        this.isEqual(this.lastItem.key, t)
                                    )
                                        return this.lastItem.val;
                                    if (((n = this.indexOf(t)), n >= 0))
                                        return (
                                            (this.lastItem = this.list[n]),
                                            this.list[n].val
                                        );
                                }),
                                    (l.prototype.set = function (t, n) {
                                        var u;
                                        return this.lastItem &&
                                            this.isEqual(this.lastItem.key, t)
                                            ? ((this.lastItem.val = n), this)
                                            : ((u = this.indexOf(t)),
                                              u >= 0
                                                  ? ((this.lastItem =
                                                        this.list[u]),
                                                    (this.list[u].val = n),
                                                    this)
                                                  : ((this.lastItem = {
                                                        key: t,
                                                        val: n,
                                                    }),
                                                    this.list.push(
                                                        this.lastItem,
                                                    ),
                                                    this.size++,
                                                    this));
                                    }),
                                    (l.prototype.delete = function (t) {
                                        var n;
                                        if (
                                            (this.lastItem &&
                                                this.isEqual(
                                                    this.lastItem.key,
                                                    t,
                                                ) &&
                                                (this.lastItem = void 0),
                                            (n = this.indexOf(t)),
                                            n >= 0)
                                        )
                                            return (
                                                this.size--,
                                                this.list.splice(n, 1)[0]
                                            );
                                    }),
                                    (l.prototype.has = function (t) {
                                        var n;
                                        return this.lastItem &&
                                            this.isEqual(this.lastItem.key, t)
                                            ? !0
                                            : ((n = this.indexOf(t)),
                                              n >= 0
                                                  ? ((this.lastItem =
                                                        this.list[n]),
                                                    !0)
                                                  : !1);
                                    }),
                                    (l.prototype.forEach = function (t, n) {
                                        var u;
                                        for (u = 0; u < this.size; u++)
                                            t.call(
                                                n || this,
                                                this.list[u].val,
                                                this.list[u].key,
                                                this,
                                            );
                                    }),
                                    (l.prototype.indexOf = function (t) {
                                        var n;
                                        for (n = 0; n < this.size; n++)
                                            if (
                                                this.isEqual(
                                                    this.list[n].key,
                                                    t,
                                                )
                                            )
                                                return n;
                                        return -1;
                                    }),
                                    (l.prototype.isEqual = function (t, n) {
                                        return t === n || (t !== t && n !== n);
                                    }),
                                    (i.exports = l));
                            },
                            {},
                        ],
                        3: [
                            function (r, i, d) {
                                var l = r("map-or-similar");
                                i.exports = function (a) {
                                    var I = new l(!1),
                                        s = [];
                                    return function (C) {
                                        var m = function () {
                                            var b = I,
                                                y,
                                                w,
                                                _ = arguments.length - 1,
                                                x = Array(_ + 1),
                                                O = !0,
                                                A;
                                            if (
                                                (m.numArgs ||
                                                    m.numArgs === 0) &&
                                                m.numArgs !== _ + 1
                                            )
                                                throw new Error(
                                                    "Memoizerific functions should always be called with the same number of arguments",
                                                );
                                            for (A = 0; A < _; A++) {
                                                if (
                                                    ((x[A] = {
                                                        cacheItem: b,
                                                        arg: arguments[A],
                                                    }),
                                                    b.has(arguments[A]))
                                                ) {
                                                    b = b.get(arguments[A]);
                                                    continue;
                                                }
                                                ((O = !1),
                                                    (y = new l(!1)),
                                                    b.set(arguments[A], y),
                                                    (b = y));
                                            }
                                            return (
                                                O &&
                                                    (b.has(arguments[_])
                                                        ? (w = b.get(
                                                              arguments[_],
                                                          ))
                                                        : (O = !1)),
                                                O ||
                                                    ((w = C.apply(
                                                        null,
                                                        arguments,
                                                    )),
                                                    b.set(arguments[_], w)),
                                                a > 0 &&
                                                    ((x[_] = {
                                                        cacheItem: b,
                                                        arg: arguments[_],
                                                    }),
                                                    O ? t(s, x) : s.push(x),
                                                    s.length > a &&
                                                        n(s.shift())),
                                                (m.wasMemoized = O),
                                                (m.numArgs = _ + 1),
                                                w
                                            );
                                        };
                                        return (
                                            (m.limit = a),
                                            (m.wasMemoized = !1),
                                            (m.cache = I),
                                            (m.lru = s),
                                            m
                                        );
                                    };
                                };
                                function t(a, I) {
                                    var s = a.length,
                                        C = I.length,
                                        m,
                                        b,
                                        y;
                                    for (b = 0; b < s; b++) {
                                        for (m = !0, y = 0; y < C; y++)
                                            if (!u(a[b][y].arg, I[y].arg)) {
                                                m = !1;
                                                break;
                                            }
                                        if (m) break;
                                    }
                                    a.push(a.splice(b, 1)[0]);
                                }
                                function n(a) {
                                    var I = a.length,
                                        s = a[I - 1],
                                        C,
                                        m;
                                    for (
                                        s.cacheItem.delete(s.arg), m = I - 2;
                                        m >= 0 &&
                                        ((s = a[m]),
                                        (C = s.cacheItem.get(s.arg)),
                                        !C || !C.size);
                                        m--
                                    )
                                        s.cacheItem.delete(s.arg);
                                }
                                function u(a, I) {
                                    return a === I || (a !== a && I !== I);
                                }
                            },
                            { "map-or-similar": 1 },
                        ],
                    },
                    {},
                    [3],
                )(3);
            });
        });
        p();
        h();
        f();
        p();
        h();
        f();
        p();
        h();
        f();
        p();
        h();
        f();
        var g = __REACT__,
            {
                Children: Ee,
                Component: Be,
                Fragment: D,
                Profiler: Re,
                PureComponent: we,
                StrictMode: xe,
                Suspense: Le,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Pe,
                cloneElement: Me,
                createContext: De,
                createElement: Ge,
                createFactory: Fe,
                createRef: Ne,
                forwardRef: Ue,
                isValidElement: He,
                lazy: qe,
                memo: B,
                startTransition: ze,
                unstable_act: Ke,
                useCallback: G,
                useContext: Ve,
                useDebugValue: We,
                useDeferredValue: Ye,
                useEffect: je,
                useId: $e,
                useImperativeHandle: Ze,
                useInsertionEffect: Je,
                useLayoutEffect: Qe,
                useMemo: j,
                useReducer: Xe,
                useRef: eo,
                useState: F,
                useSyncExternalStore: oo,
                useTransition: no,
                version: to,
            } = __REACT__;
        p();
        h();
        f();
        var lo = __STORYBOOK_API__,
            {
                ActiveTabs: so,
                Consumer: uo,
                ManagerContext: Io,
                Provider: mo,
                RequestResponseError: po,
                addons: N,
                combineParameters: ho,
                controlOrMetaKey: fo,
                controlOrMetaSymbol: go,
                eventMatchesShortcut: bo,
                eventToShortcut: Co,
                experimental_requestResponse: yo,
                isMacLike: So,
                isShortcutTaken: ko,
                keyToSymbol: vo,
                merge: To,
                mockChannel: _o,
                optionOrAltSymbol: Ao,
                shortcutMatchesShortcut: Oo,
                shortcutToHumanString: Eo,
                types: $,
                useAddonState: Bo,
                useArgTypes: Ro,
                useArgs: wo,
                useChannel: xo,
                useGlobalTypes: Lo,
                useGlobals: L,
                useParameter: P,
                useSharedState: Po,
                useStoryPrepared: Mo,
                useStorybookApi: Do,
                useStorybookState: Go,
            } = __STORYBOOK_API__;
        p();
        h();
        f();
        var qo = __STORYBOOK_COMPONENTS__,
            {
                A: zo,
                ActionBar: Ko,
                AddonPanel: Vo,
                Badge: Wo,
                Bar: Yo,
                Blockquote: jo,
                Button: $o,
                ClipboardCode: Zo,
                Code: Jo,
                DL: Qo,
                Div: Xo,
                DocumentWrapper: en,
                EmptyTabContent: on,
                ErrorFormatter: nn,
                FlexBar: tn,
                Form: rn,
                H1: an,
                H2: cn,
                H3: ln,
                H4: sn,
                H5: un,
                H6: In,
                HR: dn,
                IconButton: R,
                IconButtonSkeleton: mn,
                Icons: pn,
                Img: hn,
                LI: fn,
                Link: gn,
                ListItem: bn,
                Loader: Cn,
                Modal: yn,
                OL: Sn,
                P: kn,
                Placeholder: vn,
                Pre: Tn,
                ResetWrapper: _n,
                ScrollArea: An,
                Separator: On,
                Spaced: En,
                Span: Bn,
                StorybookIcon: Rn,
                StorybookLogo: wn,
                Symbols: xn,
                SyntaxHighlighter: Ln,
                TT: Pn,
                TabBar: Mn,
                TabButton: Dn,
                TabWrapper: Gn,
                Table: Fn,
                Tabs: Nn,
                TabsState: Un,
                TooltipLinkList: U,
                TooltipMessage: Hn,
                TooltipNote: qn,
                UL: zn,
                WithTooltip: H,
                WithTooltipPure: Kn,
                Zoom: Vn,
                codeCommon: Wn,
                components: Yn,
                createCopyToClipboardFunction: jn,
                getStoryHref: $n,
                icons: Zn,
                interleaveSeparators: Jn,
                nameSpaceClassNames: Qn,
                resetComponents: Xn,
                withReset: et,
            } = __STORYBOOK_COMPONENTS__;
        p();
        h();
        f();
        var it = __STORYBOOK_ICONS__,
            {
                AccessibilityAltIcon: at,
                AccessibilityIcon: ct,
                AddIcon: lt,
                AdminIcon: st,
                AlertAltIcon: ut,
                AlertIcon: It,
                AlignLeftIcon: dt,
                AlignRightIcon: mt,
                AppleIcon: pt,
                ArrowBottomLeftIcon: ht,
                ArrowBottomRightIcon: ft,
                ArrowDownIcon: gt,
                ArrowLeftIcon: bt,
                ArrowRightIcon: Ct,
                ArrowSolidDownIcon: yt,
                ArrowSolidLeftIcon: St,
                ArrowSolidRightIcon: kt,
                ArrowSolidUpIcon: vt,
                ArrowTopLeftIcon: Tt,
                ArrowTopRightIcon: _t,
                ArrowUpIcon: At,
                AzureDevOpsIcon: Ot,
                BackIcon: Et,
                BasketIcon: Bt,
                BatchAcceptIcon: Rt,
                BatchDenyIcon: wt,
                BeakerIcon: xt,
                BellIcon: Lt,
                BitbucketIcon: Pt,
                BoldIcon: Mt,
                BookIcon: Dt,
                BookmarkHollowIcon: Gt,
                BookmarkIcon: Ft,
                BottomBarIcon: Nt,
                BottomBarToggleIcon: Ut,
                BoxIcon: Ht,
                BranchIcon: qt,
                BrowserIcon: zt,
                ButtonIcon: Kt,
                CPUIcon: Vt,
                CalendarIcon: Wt,
                CameraIcon: Yt,
                CategoryIcon: jt,
                CertificateIcon: $t,
                ChangedIcon: Zt,
                ChatIcon: Jt,
                CheckIcon: Qt,
                ChevronDownIcon: Xt,
                ChevronLeftIcon: er,
                ChevronRightIcon: or,
                ChevronSmallDownIcon: nr,
                ChevronSmallLeftIcon: tr,
                ChevronSmallRightIcon: rr,
                ChevronSmallUpIcon: ir,
                ChevronUpIcon: ar,
                ChromaticIcon: cr,
                ChromeIcon: lr,
                CircleHollowIcon: sr,
                CircleIcon: Z,
                ClearIcon: ur,
                CloseAltIcon: Ir,
                CloseIcon: dr,
                CloudHollowIcon: mr,
                CloudIcon: pr,
                CogIcon: hr,
                CollapseIcon: fr,
                CommandIcon: gr,
                CommentAddIcon: br,
                CommentIcon: Cr,
                CommentsIcon: yr,
                CommitIcon: Sr,
                CompassIcon: kr,
                ComponentDrivenIcon: vr,
                ComponentIcon: Tr,
                ContrastIcon: _r,
                ControlsIcon: Ar,
                CopyIcon: Or,
                CreditIcon: Er,
                CrossIcon: Br,
                DashboardIcon: Rr,
                DatabaseIcon: wr,
                DeleteIcon: xr,
                DiamondIcon: Lr,
                DirectionIcon: Pr,
                DiscordIcon: Mr,
                DocChartIcon: Dr,
                DocListIcon: Gr,
                DocumentIcon: Fr,
                DownloadIcon: Nr,
                DragIcon: Ur,
                EditIcon: Hr,
                EllipsisIcon: qr,
                EmailIcon: zr,
                ExpandAltIcon: Kr,
                ExpandIcon: Vr,
                EyeCloseIcon: Wr,
                EyeIcon: Yr,
                FaceHappyIcon: jr,
                FaceNeutralIcon: $r,
                FaceSadIcon: Zr,
                FacebookIcon: Jr,
                FailedIcon: Qr,
                FastForwardIcon: Xr,
                FigmaIcon: ei,
                FilterIcon: oi,
                FlagIcon: ni,
                FolderIcon: ti,
                FormIcon: ri,
                GDriveIcon: ii,
                GithubIcon: ai,
                GitlabIcon: ci,
                GlobeIcon: li,
                GoogleIcon: si,
                GraphBarIcon: ui,
                GraphLineIcon: Ii,
                GraphqlIcon: di,
                GridAltIcon: mi,
                GridIcon: q,
                GrowIcon: pi,
                HeartHollowIcon: hi,
                HeartIcon: fi,
                HomeIcon: gi,
                HourglassIcon: bi,
                InfoIcon: Ci,
                ItalicIcon: yi,
                JumpToIcon: Si,
                KeyIcon: ki,
                LightningIcon: vi,
                LightningOffIcon: Ti,
                LinkBrokenIcon: _i,
                LinkIcon: Ai,
                LinkedinIcon: Oi,
                LinuxIcon: Ei,
                ListOrderedIcon: Bi,
                ListUnorderedIcon: Ri,
                LocationIcon: wi,
                LockIcon: xi,
                MarkdownIcon: Li,
                MarkupIcon: Pi,
                MediumIcon: Mi,
                MemoryIcon: Di,
                MenuIcon: Gi,
                MergeIcon: Fi,
                MirrorIcon: Ni,
                MobileIcon: Ui,
                MoonIcon: Hi,
                NutIcon: qi,
                OutboxIcon: zi,
                OutlineIcon: Ki,
                PaintBrushIcon: Vi,
                PaperClipIcon: Wi,
                ParagraphIcon: Yi,
                PassedIcon: ji,
                PhoneIcon: $i,
                PhotoDragIcon: Zi,
                PhotoIcon: z,
                PinAltIcon: Ji,
                PinIcon: Qi,
                PlayBackIcon: Xi,
                PlayIcon: ea,
                PlayNextIcon: oa,
                PlusIcon: na,
                PointerDefaultIcon: ta,
                PointerHandIcon: ra,
                PowerIcon: ia,
                PrintIcon: aa,
                ProceedIcon: ca,
                ProfileIcon: la,
                PullRequestIcon: sa,
                QuestionIcon: ua,
                RSSIcon: Ia,
                RedirectIcon: da,
                ReduxIcon: ma,
                RefreshIcon: J,
                ReplyIcon: pa,
                RepoIcon: ha,
                RequestChangeIcon: fa,
                RewindIcon: ga,
                RulerIcon: ba,
                SearchIcon: Ca,
                ShareAltIcon: ya,
                ShareIcon: Sa,
                ShieldIcon: ka,
                SideBySideIcon: va,
                SidebarAltIcon: Ta,
                SidebarAltToggleIcon: _a,
                SidebarIcon: Aa,
                SidebarToggleIcon: Oa,
                SpeakerIcon: Ea,
                StackedIcon: Ba,
                StarHollowIcon: Ra,
                StarIcon: wa,
                StatusFailIcon: xa,
                StatusPassIcon: La,
                StatusWarnIcon: Pa,
                StickerIcon: Ma,
                StopAltIcon: Da,
                StopIcon: Ga,
                StorybookIcon: Fa,
                StructureIcon: Na,
                SubtractIcon: Ua,
                SunIcon: Ha,
                SupportIcon: qa,
                SwitchAltIcon: za,
                SyncIcon: Ka,
                TabletIcon: Va,
                ThumbsUpIcon: Wa,
                TimeIcon: Ya,
                TimerIcon: ja,
                TransferIcon: $a,
                TrashIcon: Za,
                TwitterIcon: Ja,
                TypeIcon: Qa,
                UbuntuIcon: Xa,
                UndoIcon: ec,
                UnfoldIcon: oc,
                UnlockIcon: nc,
                UnpinIcon: tc,
                UploadIcon: rc,
                UserAddIcon: ic,
                UserAltIcon: ac,
                UserIcon: cc,
                UsersIcon: lc,
                VSCodeIcon: sc,
                VerifiedIcon: uc,
                VideoIcon: Ic,
                WandIcon: dc,
                WatchIcon: mc,
                WindowsIcon: pc,
                WrenchIcon: hc,
                XIcon: fc,
                YoutubeIcon: gc,
                ZoomIcon: bc,
                ZoomOutIcon: Cc,
                ZoomResetIcon: yc,
                iconList: Sc,
            } = __STORYBOOK_ICONS__;
        p();
        h();
        f();
        var Ac = __STORYBOOK_CLIENT_LOGGER__,
            {
                deprecate: Oc,
                logger: K,
                once: Ec,
                pretty: Bc,
            } = __STORYBOOK_CLIENT_LOGGER__;
        var W = Ie(X());
        p();
        h();
        f();
        var Fc = __STORYBOOK_THEMING__,
            {
                CacheProvider: Nc,
                ClassNames: Uc,
                Global: Hc,
                ThemeProvider: qc,
                background: zc,
                color: Kc,
                convert: Vc,
                create: Wc,
                createCache: Yc,
                createGlobal: jc,
                createReset: $c,
                css: Zc,
                darken: Jc,
                ensure: Qc,
                ignoreSsrWarning: Xc,
                isPropValid: el,
                jsx: ol,
                keyframes: nl,
                lighten: tl,
                styled: ee,
                themes: rl,
                typography: il,
                useTheme: al,
                withTheme: cl,
            } = __STORYBOOK_THEMING__;
        p();
        h();
        f();
        function oe(e) {
            for (var o = [], c = 1; c < arguments.length; c++)
                o[c - 1] = arguments[c];
            var r = Array.from(typeof e == "string" ? [e] : e);
            r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
            var i = r.reduce(function (t, n) {
                var u = n.match(/\n([\t ]+|(?!\s).)/g);
                return u
                    ? t.concat(
                          u.map(function (a) {
                              var I, s;
                              return (s =
                                  (I = a.match(/[\t ]/g)) === null ||
                                  I === void 0
                                      ? void 0
                                      : I.length) !== null && s !== void 0
                                  ? s
                                  : 0;
                          }),
                      )
                    : t;
            }, []);
            if (i.length) {
                var d = new RegExp(
                    `
[	 ]{` +
                        Math.min.apply(Math, i) +
                        "}",
                    "g",
                );
                r = r.map(function (t) {
                    return t.replace(
                        d,
                        `
`,
                    );
                });
            }
            r[0] = r[0].replace(/^\r?\n/, "");
            var l = r[0];
            return (
                o.forEach(function (t, n) {
                    var u = l.match(/(?:^|\n)( *)$/),
                        a = u ? u[1] : "",
                        I = t;
                    (typeof t == "string" &&
                        t.includes(`
`) &&
                        (I = String(t)
                            .split(
                                `
`,
                            )
                            .map(function (s, C) {
                                return C === 0 ? s : "" + a + s;
                            }).join(`
`)),
                        (l += I + r[n + 1]));
                }),
                l
            );
        }
        var ne = "storybook/background",
            S = "backgrounds",
            de = {
                light: { name: "light", value: "#F8F8F8" },
                dark: { name: "dark", value: "#333" },
            },
            me = B(function () {
                let e = P(S),
                    [o, c, r] = L(),
                    [i, d] = F(!1),
                    { options: l = de, disable: t = !0 } = e || {};
                if (t) return null;
                let n = o[S] || {},
                    u = n.value,
                    a = n.grid || !1,
                    I = l[u],
                    s = !!r?.[S],
                    C = Object.keys(l).length;
                return g.createElement(pe, {
                    length: C,
                    backgroundMap: l,
                    item: I,
                    updateGlobals: c,
                    backgroundName: u,
                    setIsTooltipVisible: d,
                    isLocked: s,
                    isGridActive: a,
                    isTooltipVisible: i,
                });
            }),
            pe = B(function (e) {
                let {
                        item: o,
                        length: c,
                        updateGlobals: r,
                        setIsTooltipVisible: i,
                        backgroundMap: d,
                        backgroundName: l,
                        isLocked: t,
                        isGridActive: n,
                        isTooltipVisible: u,
                    } = e,
                    a = G(
                        I => {
                            r({ [S]: I });
                        },
                        [r],
                    );
                return g.createElement(
                    D,
                    null,
                    g.createElement(
                        R,
                        {
                            key: "grid",
                            active: n,
                            disabled: t,
                            title: "Apply a grid to the preview",
                            onClick: () => a({ value: l, grid: !n }),
                        },
                        g.createElement(q, null),
                    ),
                    c > 0
                        ? g.createElement(
                              H,
                              {
                                  key: "background",
                                  placement: "top",
                                  closeOnOutsideClick: !0,
                                  tooltip: ({ onHide: I }) =>
                                      g.createElement(U, {
                                          links: [
                                              ...(o
                                                  ? [
                                                        {
                                                            id: "reset",
                                                            title: "Reset background",
                                                            icon: g.createElement(
                                                                J,
                                                                null,
                                                            ),
                                                            onClick: () => {
                                                                (a({
                                                                    value: void 0,
                                                                    grid: n,
                                                                }),
                                                                    I());
                                                            },
                                                        },
                                                    ]
                                                  : []),
                                              ...Object.entries(d).map(
                                                  ([s, C]) => ({
                                                      id: s,
                                                      title: C.name,
                                                      icon: g.createElement(Z, {
                                                          color:
                                                              C?.value ||
                                                              "grey",
                                                      }),
                                                      active: s === l,
                                                      onClick: () => {
                                                          (a({
                                                              value: s,
                                                              grid: n,
                                                          }),
                                                              I());
                                                      },
                                                  }),
                                              ),
                                          ],
                                      }),
                                  onVisibleChange: i,
                              },
                              g.createElement(
                                  R,
                                  {
                                      disabled: t,
                                      key: "background",
                                      title: "Change the background of the preview",
                                      active: !!o || u,
                                  },
                                  g.createElement(z, null),
                              ),
                          )
                        : null,
                );
            }),
            he = ee.span(
                ({ background: e }) => ({
                    borderRadius: "1rem",
                    display: "block",
                    height: "1rem",
                    width: "1rem",
                    background: e,
                }),
                ({ theme: e }) => ({
                    boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
                }),
            ),
            fe = (e, o = [], c) => {
                if (e === "transparent") return "transparent";
                if (o.find(i => i.value === e) || e) return e;
                let r = o.find(i => i.name === c);
                if (r) return r.value;
                if (c) {
                    let i = o.map(d => d.name).join(", ");
                    K.warn(oe`
        Backgrounds Addon: could not find the default color "${c}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `);
                }
                return "transparent";
            },
            te = (0, W.default)(1e3)((e, o, c, r, i, d) => ({
                id: e || o,
                title: o,
                onClick: () => {
                    i({ selected: c, name: o });
                },
                value: c,
                right: r ? g.createElement(he, { background: c }) : void 0,
                active: d,
            })),
            ge = (0, W.default)(10)((e, o, c) => {
                let r = e.map(({ name: i, value: d }) =>
                    te(null, i, d, !0, c, d === o),
                );
                return o !== "transparent"
                    ? [
                          te(
                              "reset",
                              "Clear background",
                              "transparent",
                              null,
                              c,
                              !1,
                          ),
                          ...r,
                      ]
                    : r;
            }),
            be = { default: null, disable: !0, values: [] },
            Ce = B(function () {
                let e = P(S, be),
                    [o, c] = F(!1),
                    [r, i] = L(),
                    d = r[S]?.value,
                    l = j(() => fe(d, e.values, e.default), [e, d]);
                Array.isArray(e) &&
                    K.warn(
                        "Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md",
                    );
                let t = G(
                    n => {
                        i({ [S]: { ...r[S], value: n } });
                    },
                    [e, r, i],
                );
                return e.disable
                    ? null
                    : g.createElement(
                          H,
                          {
                              placement: "top",
                              closeOnOutsideClick: !0,
                              tooltip: ({ onHide: n }) =>
                                  g.createElement(U, {
                                      links: ge(
                                          e.values,
                                          l,
                                          ({ selected: u }) => {
                                              (l !== u && t(u), n());
                                          },
                                      ),
                                  }),
                              onVisibleChange: c,
                          },
                          g.createElement(
                              R,
                              {
                                  key: "background",
                                  title: "Change the background of the preview",
                                  active: l !== "transparent" || o,
                              },
                              g.createElement(z, null),
                          ),
                      );
            }),
            ye = B(function () {
                let [e, o] = L(),
                    { grid: c } = P(S, { grid: { disable: !1 } });
                if (c?.disable) return null;
                let r = e[S]?.grid || !1;
                return g.createElement(
                    R,
                    {
                        key: "background",
                        active: r,
                        title: "Apply a grid to the preview",
                        onClick: () => o({ [S]: { ...e[S], grid: !r } }),
                    },
                    g.createElement(q, null),
                );
            });
        N.register(ne, () => {
            N.add(ne, {
                title: "Backgrounds",
                type: $.TOOL,
                match: ({ viewMode: e, tabId: o }) =>
                    !!(e && e.match(/^(story|docs)$/)) && !o,
                render: () =>
                    FEATURES?.backgroundsStoryGlobals
                        ? g.createElement(me, null)
                        : g.createElement(
                              D,
                              null,
                              g.createElement(Ce, null),
                              g.createElement(ye, null),
                          ),
            });
        });
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
