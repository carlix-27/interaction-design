try {
    (() => {
        var he = Object.create;
        var J = Object.defineProperty;
        var me = Object.getOwnPropertyDescriptor;
        var fe = Object.getOwnPropertyNames;
        var ge = Object.getPrototypeOf,
            we = Object.prototype.hasOwnProperty;
        var O = (e =>
            typeof require < "u"
                ? require
                : typeof Proxy < "u"
                  ? new Proxy(e, {
                        get: (t, a) => (typeof require < "u" ? require : t)[a],
                    })
                  : e)(function (e) {
            if (typeof require < "u") return require.apply(this, arguments);
            throw Error('Dynamic require of "' + e + '" is not supported');
        });
        var N = (e, t) => () => (e && (t = e((e = 0))), t);
        var be = (e, t) => () => (
            t || e((t = { exports: {} }).exports, t),
            t.exports
        );
        var ye = (e, t, a, s) => {
            if ((t && typeof t == "object") || typeof t == "function")
                for (let c of fe(t))
                    !we.call(e, c) &&
                        c !== a &&
                        J(e, c, {
                            get: () => t[c],
                            enumerable: !(s = me(t, c)) || s.enumerable,
                        });
            return e;
        };
        var Se = (e, t, a) => (
            (a = e != null ? he(ge(e)) : {}),
            ye(
                t || !e || !e.__esModule
                    ? J(a, "default", { value: e, enumerable: !0 })
                    : a,
                e,
            )
        );
        var f = N(() => {});
        var g = N(() => {});
        var w = N(() => {});
        var le = be((ce, Z) => {
            f();
            g();
            w();
            (function (e) {
                if (typeof ce == "object" && typeof Z < "u") Z.exports = e();
                else if (typeof define == "function" && define.amd)
                    define([], e);
                else {
                    var t;
                    (typeof window < "u" || typeof window < "u"
                        ? (t = window)
                        : typeof self < "u"
                          ? (t = self)
                          : (t = this),
                        (t.memoizerific = e()));
                }
            })(function () {
                var e, t, a;
                return (function s(c, b, p) {
                    function o(n, d) {
                        if (!b[n]) {
                            if (!c[n]) {
                                var r = typeof O == "function" && O;
                                if (!d && r) return r(n, !0);
                                if (i) return i(n, !0);
                                var u = new Error(
                                    "Cannot find module '" + n + "'",
                                );
                                throw ((u.code = "MODULE_NOT_FOUND"), u);
                            }
                            var I = (b[n] = { exports: {} });
                            c[n][0].call(
                                I.exports,
                                function (m) {
                                    var y = c[n][1][m];
                                    return o(y || m);
                                },
                                I,
                                I.exports,
                                s,
                                c,
                                b,
                                p,
                            );
                        }
                        return b[n].exports;
                    }
                    for (
                        var i = typeof O == "function" && O, h = 0;
                        h < p.length;
                        h++
                    )
                        o(p[h]);
                    return o;
                })(
                    {
                        1: [
                            function (s, c, b) {
                                c.exports = function (p) {
                                    if (typeof Map != "function" || p) {
                                        var o = s("./similar");
                                        return new o();
                                    } else return new Map();
                                };
                            },
                            { "./similar": 2 },
                        ],
                        2: [
                            function (s, c, b) {
                                function p() {
                                    return (
                                        (this.list = []),
                                        (this.lastItem = void 0),
                                        (this.size = 0),
                                        this
                                    );
                                }
                                ((p.prototype.get = function (o) {
                                    var i;
                                    if (
                                        this.lastItem &&
                                        this.isEqual(this.lastItem.key, o)
                                    )
                                        return this.lastItem.val;
                                    if (((i = this.indexOf(o)), i >= 0))
                                        return (
                                            (this.lastItem = this.list[i]),
                                            this.list[i].val
                                        );
                                }),
                                    (p.prototype.set = function (o, i) {
                                        var h;
                                        return this.lastItem &&
                                            this.isEqual(this.lastItem.key, o)
                                            ? ((this.lastItem.val = i), this)
                                            : ((h = this.indexOf(o)),
                                              h >= 0
                                                  ? ((this.lastItem =
                                                        this.list[h]),
                                                    (this.list[h].val = i),
                                                    this)
                                                  : ((this.lastItem = {
                                                        key: o,
                                                        val: i,
                                                    }),
                                                    this.list.push(
                                                        this.lastItem,
                                                    ),
                                                    this.size++,
                                                    this));
                                    }),
                                    (p.prototype.delete = function (o) {
                                        var i;
                                        if (
                                            (this.lastItem &&
                                                this.isEqual(
                                                    this.lastItem.key,
                                                    o,
                                                ) &&
                                                (this.lastItem = void 0),
                                            (i = this.indexOf(o)),
                                            i >= 0)
                                        )
                                            return (
                                                this.size--,
                                                this.list.splice(i, 1)[0]
                                            );
                                    }),
                                    (p.prototype.has = function (o) {
                                        var i;
                                        return this.lastItem &&
                                            this.isEqual(this.lastItem.key, o)
                                            ? !0
                                            : ((i = this.indexOf(o)),
                                              i >= 0
                                                  ? ((this.lastItem =
                                                        this.list[i]),
                                                    !0)
                                                  : !1);
                                    }),
                                    (p.prototype.forEach = function (o, i) {
                                        var h;
                                        for (h = 0; h < this.size; h++)
                                            o.call(
                                                i || this,
                                                this.list[h].val,
                                                this.list[h].key,
                                                this,
                                            );
                                    }),
                                    (p.prototype.indexOf = function (o) {
                                        var i;
                                        for (i = 0; i < this.size; i++)
                                            if (
                                                this.isEqual(
                                                    this.list[i].key,
                                                    o,
                                                )
                                            )
                                                return i;
                                        return -1;
                                    }),
                                    (p.prototype.isEqual = function (o, i) {
                                        return o === i || (o !== o && i !== i);
                                    }),
                                    (c.exports = p));
                            },
                            {},
                        ],
                        3: [
                            function (s, c, b) {
                                var p = s("map-or-similar");
                                c.exports = function (n) {
                                    var d = new p(!1),
                                        r = [];
                                    return function (u) {
                                        var I = function () {
                                            var m = d,
                                                y,
                                                k,
                                                S = arguments.length - 1,
                                                M = Array(S + 1),
                                                x = !0,
                                                C;
                                            if (
                                                (I.numArgs ||
                                                    I.numArgs === 0) &&
                                                I.numArgs !== S + 1
                                            )
                                                throw new Error(
                                                    "Memoizerific functions should always be called with the same number of arguments",
                                                );
                                            for (C = 0; C < S; C++) {
                                                if (
                                                    ((M[C] = {
                                                        cacheItem: m,
                                                        arg: arguments[C],
                                                    }),
                                                    m.has(arguments[C]))
                                                ) {
                                                    m = m.get(arguments[C]);
                                                    continue;
                                                }
                                                ((x = !1),
                                                    (y = new p(!1)),
                                                    m.set(arguments[C], y),
                                                    (m = y));
                                            }
                                            return (
                                                x &&
                                                    (m.has(arguments[S])
                                                        ? (k = m.get(
                                                              arguments[S],
                                                          ))
                                                        : (x = !1)),
                                                x ||
                                                    ((k = u.apply(
                                                        null,
                                                        arguments,
                                                    )),
                                                    m.set(arguments[S], k)),
                                                n > 0 &&
                                                    ((M[S] = {
                                                        cacheItem: m,
                                                        arg: arguments[S],
                                                    }),
                                                    x ? o(r, M) : r.push(M),
                                                    r.length > n &&
                                                        i(r.shift())),
                                                (I.wasMemoized = x),
                                                (I.numArgs = S + 1),
                                                k
                                            );
                                        };
                                        return (
                                            (I.limit = n),
                                            (I.wasMemoized = !1),
                                            (I.cache = d),
                                            (I.lru = r),
                                            I
                                        );
                                    };
                                };
                                function o(n, d) {
                                    var r = n.length,
                                        u = d.length,
                                        I,
                                        m,
                                        y;
                                    for (m = 0; m < r; m++) {
                                        for (I = !0, y = 0; y < u; y++)
                                            if (!h(n[m][y].arg, d[y].arg)) {
                                                I = !1;
                                                break;
                                            }
                                        if (I) break;
                                    }
                                    n.push(n.splice(m, 1)[0]);
                                }
                                function i(n) {
                                    var d = n.length,
                                        r = n[d - 1],
                                        u,
                                        I;
                                    for (
                                        r.cacheItem.delete(r.arg), I = d - 2;
                                        I >= 0 &&
                                        ((r = n[I]),
                                        (u = r.cacheItem.get(r.arg)),
                                        !u || !u.size);
                                        I--
                                    )
                                        r.cacheItem.delete(r.arg);
                                }
                                function h(n, d) {
                                    return n === d || (n !== n && d !== d);
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
        f();
        g();
        w();
        f();
        g();
        w();
        f();
        g();
        w();
        f();
        g();
        w();
        var l = __REACT__,
            {
                Children: $e,
                Component: Je,
                Fragment: V,
                Profiler: Qe,
                PureComponent: Xe,
                StrictMode: et,
                Suspense: tt,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ot,
                cloneElement: nt,
                createContext: rt,
                createElement: z,
                createFactory: it,
                createRef: at,
                forwardRef: ct,
                isValidElement: lt,
                lazy: st,
                memo: Q,
                startTransition: ut,
                unstable_act: It,
                useCallback: X,
                useContext: pt,
                useDebugValue: dt,
                useDeferredValue: ht,
                useEffect: _,
                useId: mt,
                useImperativeHandle: ft,
                useInsertionEffect: gt,
                useLayoutEffect: wt,
                useMemo: bt,
                useReducer: yt,
                useRef: ee,
                useState: G,
                useSyncExternalStore: St,
                useTransition: vt,
                version: Ct,
            } = __REACT__;
        f();
        g();
        w();
        var kt = __STORYBOOK_API__,
            {
                ActiveTabs: xt,
                Consumer: At,
                ManagerContext: Ot,
                Provider: _t,
                RequestResponseError: Lt,
                addons: H,
                combineParameters: Bt,
                controlOrMetaKey: Pt,
                controlOrMetaSymbol: Mt,
                eventMatchesShortcut: Vt,
                eventToShortcut: Dt,
                experimental_requestResponse: Nt,
                isMacLike: zt,
                isShortcutTaken: Gt,
                keyToSymbol: Ht,
                merge: Ft,
                mockChannel: Ut,
                optionOrAltSymbol: qt,
                shortcutMatchesShortcut: Wt,
                shortcutToHumanString: Yt,
                types: te,
                useAddonState: jt,
                useArgTypes: Kt,
                useArgs: Zt,
                useChannel: $t,
                useGlobalTypes: Jt,
                useGlobals: F,
                useParameter: U,
                useSharedState: Qt,
                useStoryPrepared: Xt,
                useStorybookApi: oe,
                useStorybookState: eo,
            } = __STORYBOOK_API__;
        f();
        g();
        w();
        var io = __STORYBOOK_COMPONENTS__,
            {
                A: ao,
                ActionBar: co,
                AddonPanel: lo,
                Badge: so,
                Bar: uo,
                Blockquote: Io,
                Button: po,
                ClipboardCode: ho,
                Code: mo,
                DL: fo,
                Div: go,
                DocumentWrapper: wo,
                EmptyTabContent: bo,
                ErrorFormatter: yo,
                FlexBar: So,
                Form: vo,
                H1: Co,
                H2: Eo,
                H3: Ro,
                H4: To,
                H5: ko,
                H6: xo,
                HR: Ao,
                IconButton: L,
                IconButtonSkeleton: Oo,
                Icons: _o,
                Img: Lo,
                LI: Bo,
                Link: Po,
                ListItem: Mo,
                Loader: Vo,
                Modal: Do,
                OL: No,
                P: zo,
                Placeholder: Go,
                Pre: Ho,
                ResetWrapper: Fo,
                ScrollArea: Uo,
                Separator: qo,
                Spaced: Wo,
                Span: Yo,
                StorybookIcon: jo,
                StorybookLogo: Ko,
                Symbols: Zo,
                SyntaxHighlighter: $o,
                TT: Jo,
                TabBar: Qo,
                TabButton: Xo,
                TabWrapper: en,
                Table: tn,
                Tabs: on,
                TabsState: nn,
                TooltipLinkList: q,
                TooltipMessage: rn,
                TooltipNote: an,
                UL: cn,
                WithTooltip: W,
                WithTooltipPure: ln,
                Zoom: sn,
                codeCommon: un,
                components: In,
                createCopyToClipboardFunction: pn,
                getStoryHref: dn,
                icons: hn,
                interleaveSeparators: mn,
                nameSpaceClassNames: fn,
                resetComponents: gn,
                withReset: wn,
            } = __STORYBOOK_COMPONENTS__;
        f();
        g();
        w();
        var Cn = __STORYBOOK_THEMING__,
            {
                CacheProvider: En,
                ClassNames: Rn,
                Global: Y,
                ThemeProvider: Tn,
                background: kn,
                color: xn,
                convert: An,
                create: On,
                createCache: _n,
                createGlobal: Ln,
                createReset: Bn,
                css: Pn,
                darken: Mn,
                ensure: Vn,
                ignoreSsrWarning: Dn,
                isPropValid: Nn,
                jsx: zn,
                keyframes: Gn,
                lighten: Hn,
                styled: v,
                themes: Fn,
                typography: Un,
                useTheme: qn,
                withTheme: Wn,
            } = __STORYBOOK_THEMING__;
        f();
        g();
        w();
        var $n = __STORYBOOK_ICONS__,
            {
                AccessibilityAltIcon: Jn,
                AccessibilityIcon: Qn,
                AddIcon: Xn,
                AdminIcon: er,
                AlertAltIcon: tr,
                AlertIcon: or,
                AlignLeftIcon: nr,
                AlignRightIcon: rr,
                AppleIcon: ir,
                ArrowBottomLeftIcon: ar,
                ArrowBottomRightIcon: cr,
                ArrowDownIcon: lr,
                ArrowLeftIcon: sr,
                ArrowRightIcon: ur,
                ArrowSolidDownIcon: Ir,
                ArrowSolidLeftIcon: pr,
                ArrowSolidRightIcon: dr,
                ArrowSolidUpIcon: hr,
                ArrowTopLeftIcon: mr,
                ArrowTopRightIcon: fr,
                ArrowUpIcon: gr,
                AzureDevOpsIcon: wr,
                BackIcon: br,
                BasketIcon: yr,
                BatchAcceptIcon: Sr,
                BatchDenyIcon: vr,
                BeakerIcon: Cr,
                BellIcon: Er,
                BitbucketIcon: Rr,
                BoldIcon: Tr,
                BookIcon: kr,
                BookmarkHollowIcon: xr,
                BookmarkIcon: Ar,
                BottomBarIcon: Or,
                BottomBarToggleIcon: _r,
                BoxIcon: Lr,
                BranchIcon: Br,
                BrowserIcon: ne,
                ButtonIcon: Pr,
                CPUIcon: Mr,
                CalendarIcon: Vr,
                CameraIcon: Dr,
                CategoryIcon: Nr,
                CertificateIcon: zr,
                ChangedIcon: Gr,
                ChatIcon: Hr,
                CheckIcon: Fr,
                ChevronDownIcon: Ur,
                ChevronLeftIcon: qr,
                ChevronRightIcon: Wr,
                ChevronSmallDownIcon: Yr,
                ChevronSmallLeftIcon: jr,
                ChevronSmallRightIcon: Kr,
                ChevronSmallUpIcon: Zr,
                ChevronUpIcon: $r,
                ChromaticIcon: Jr,
                ChromeIcon: Qr,
                CircleHollowIcon: Xr,
                CircleIcon: ei,
                ClearIcon: ti,
                CloseAltIcon: oi,
                CloseIcon: ni,
                CloudHollowIcon: ri,
                CloudIcon: ii,
                CogIcon: ai,
                CollapseIcon: ci,
                CommandIcon: li,
                CommentAddIcon: si,
                CommentIcon: ui,
                CommentsIcon: Ii,
                CommitIcon: pi,
                CompassIcon: di,
                ComponentDrivenIcon: hi,
                ComponentIcon: mi,
                ContrastIcon: fi,
                ControlsIcon: gi,
                CopyIcon: wi,
                CreditIcon: bi,
                CrossIcon: yi,
                DashboardIcon: Si,
                DatabaseIcon: vi,
                DeleteIcon: Ci,
                DiamondIcon: Ei,
                DirectionIcon: Ri,
                DiscordIcon: Ti,
                DocChartIcon: ki,
                DocListIcon: xi,
                DocumentIcon: Ai,
                DownloadIcon: Oi,
                DragIcon: _i,
                EditIcon: Li,
                EllipsisIcon: Bi,
                EmailIcon: Pi,
                ExpandAltIcon: Mi,
                ExpandIcon: Vi,
                EyeCloseIcon: Di,
                EyeIcon: Ni,
                FaceHappyIcon: zi,
                FaceNeutralIcon: Gi,
                FaceSadIcon: Hi,
                FacebookIcon: Fi,
                FailedIcon: Ui,
                FastForwardIcon: qi,
                FigmaIcon: Wi,
                FilterIcon: Yi,
                FlagIcon: ji,
                FolderIcon: Ki,
                FormIcon: Zi,
                GDriveIcon: $i,
                GithubIcon: Ji,
                GitlabIcon: Qi,
                GlobeIcon: Xi,
                GoogleIcon: ea,
                GraphBarIcon: ta,
                GraphLineIcon: oa,
                GraphqlIcon: na,
                GridAltIcon: ra,
                GridIcon: ia,
                GrowIcon: j,
                HeartHollowIcon: aa,
                HeartIcon: ca,
                HomeIcon: la,
                HourglassIcon: sa,
                InfoIcon: ua,
                ItalicIcon: Ia,
                JumpToIcon: pa,
                KeyIcon: da,
                LightningIcon: ha,
                LightningOffIcon: ma,
                LinkBrokenIcon: fa,
                LinkIcon: ga,
                LinkedinIcon: wa,
                LinuxIcon: ba,
                ListOrderedIcon: ya,
                ListUnorderedIcon: Sa,
                LocationIcon: va,
                LockIcon: Ca,
                MarkdownIcon: Ea,
                MarkupIcon: Ra,
                MediumIcon: Ta,
                MemoryIcon: ka,
                MenuIcon: xa,
                MergeIcon: Aa,
                MirrorIcon: Oa,
                MobileIcon: re,
                MoonIcon: _a,
                NutIcon: La,
                OutboxIcon: Ba,
                OutlineIcon: Pa,
                PaintBrushIcon: Ma,
                PaperClipIcon: Va,
                ParagraphIcon: Da,
                PassedIcon: Na,
                PhoneIcon: za,
                PhotoDragIcon: Ga,
                PhotoIcon: Ha,
                PinAltIcon: Fa,
                PinIcon: Ua,
                PlayBackIcon: qa,
                PlayIcon: Wa,
                PlayNextIcon: Ya,
                PlusIcon: ja,
                PointerDefaultIcon: Ka,
                PointerHandIcon: Za,
                PowerIcon: $a,
                PrintIcon: Ja,
                ProceedIcon: Qa,
                ProfileIcon: Xa,
                PullRequestIcon: ec,
                QuestionIcon: tc,
                RSSIcon: oc,
                RedirectIcon: nc,
                ReduxIcon: rc,
                RefreshIcon: ie,
                ReplyIcon: ic,
                RepoIcon: ac,
                RequestChangeIcon: cc,
                RewindIcon: lc,
                RulerIcon: sc,
                SearchIcon: uc,
                ShareAltIcon: Ic,
                ShareIcon: pc,
                ShieldIcon: dc,
                SideBySideIcon: hc,
                SidebarAltIcon: mc,
                SidebarAltToggleIcon: fc,
                SidebarIcon: gc,
                SidebarToggleIcon: wc,
                SpeakerIcon: bc,
                StackedIcon: yc,
                StarHollowIcon: Sc,
                StarIcon: vc,
                StatusFailIcon: Cc,
                StatusPassIcon: Ec,
                StatusWarnIcon: Rc,
                StickerIcon: Tc,
                StopAltIcon: kc,
                StopIcon: xc,
                StorybookIcon: Ac,
                StructureIcon: Oc,
                SubtractIcon: _c,
                SunIcon: Lc,
                SupportIcon: Bc,
                SwitchAltIcon: Pc,
                SyncIcon: Mc,
                TabletIcon: ae,
                ThumbsUpIcon: Vc,
                TimeIcon: Dc,
                TimerIcon: Nc,
                TransferIcon: K,
                TrashIcon: zc,
                TwitterIcon: Gc,
                TypeIcon: Hc,
                UbuntuIcon: Fc,
                UndoIcon: Uc,
                UnfoldIcon: qc,
                UnlockIcon: Wc,
                UnpinIcon: Yc,
                UploadIcon: jc,
                UserAddIcon: Kc,
                UserAltIcon: Zc,
                UserIcon: $c,
                UsersIcon: Jc,
                VSCodeIcon: Qc,
                VerifiedIcon: Xc,
                VideoIcon: el,
                WandIcon: tl,
                WatchIcon: ol,
                WindowsIcon: nl,
                WrenchIcon: rl,
                XIcon: il,
                YoutubeIcon: al,
                ZoomIcon: cl,
                ZoomOutIcon: ll,
                ZoomResetIcon: sl,
                iconList: ul,
            } = __STORYBOOK_ICONS__;
        var $ = Se(le()),
            B = "storybook/viewport",
            A = "viewport",
            Ie = {
                mobile1: {
                    name: "Small mobile",
                    styles: { height: "568px", width: "320px" },
                    type: "mobile",
                },
                mobile2: {
                    name: "Large mobile",
                    styles: { height: "896px", width: "414px" },
                    type: "mobile",
                },
                tablet: {
                    name: "Tablet",
                    styles: { height: "1112px", width: "834px" },
                    type: "tablet",
                },
            },
            P = {
                name: "Reset viewport",
                styles: { height: "100%", width: "100%" },
                type: "desktop",
            },
            Ce = { [A]: { value: void 0, isRotated: !1 } },
            Ee = { viewport: "reset", viewportRotated: !1 },
            Re = FEATURES?.viewportStoryGlobals ? Ce : Ee,
            pe = (e, t) => e.indexOf(t),
            Te = (e, t) => {
                let a = pe(e, t);
                return a === e.length - 1 ? e[0] : e[a + 1];
            },
            ke = (e, t) => {
                let a = pe(e, t);
                return a < 1 ? e[e.length - 1] : e[a - 1];
            },
            de = async (e, t, a, s) => {
                (await e.setAddonShortcut(B, {
                    label: "Previous viewport",
                    defaultShortcut: ["alt", "shift", "V"],
                    actionName: "previous",
                    action: () => {
                        a({ viewport: ke(s, t) });
                    },
                }),
                    await e.setAddonShortcut(B, {
                        label: "Next viewport",
                        defaultShortcut: ["alt", "V"],
                        actionName: "next",
                        action: () => {
                            a({ viewport: Te(s, t) });
                        },
                    }),
                    await e.setAddonShortcut(B, {
                        label: "Reset viewport",
                        defaultShortcut: ["alt", "control", "V"],
                        actionName: "reset",
                        action: () => {
                            a(Re);
                        },
                    }));
            },
            xe = v.div(() => ({
                display: "inline-flex",
                alignItems: "center",
            })),
            se = v.div(({ theme: e }) => ({
                display: "inline-block",
                textDecoration: "none",
                padding: 10,
                fontWeight: e.typography.weight.bold,
                fontSize: e.typography.size.s2 - 1,
                lineHeight: "1",
                height: 40,
                border: "none",
                borderTop: "3px solid transparent",
                borderBottom: "3px solid transparent",
                background: "transparent",
            })),
            Ae = v(L)(() => ({ display: "inline-flex", alignItems: "center" })),
            Oe = v.div(({ theme: e }) => ({
                fontSize: e.typography.size.s2 - 1,
                marginLeft: 10,
            })),
            _e = {
                desktop: l.createElement(ne, null),
                mobile: l.createElement(re, null),
                tablet: l.createElement(ae, null),
                other: l.createElement(V, null),
            },
            Le = ({ api: e }) => {
                let t = U(A),
                    [a, s, c] = F(),
                    [b, p] = G(!1),
                    { options: o = Ie, disable: i } = t || {},
                    h = a?.[A] || {},
                    n = h.value,
                    d = h.isRotated,
                    r = o[n] || P,
                    u = b || r !== P,
                    I = A in c,
                    m = Object.keys(o).length;
                if (
                    (_(() => {
                        de(e, n, s, Object.keys(o));
                    }, [o, n, s, e]),
                    r.styles === null || !o || m < 1)
                )
                    return null;
                if (typeof r.styles == "function")
                    return (
                        console.warn(
                            "Addon Viewport no longer supports dynamic styles using a function, use css calc() instead",
                        ),
                        null
                    );
                let y = d ? r.styles.height : r.styles.width,
                    k = d ? r.styles.width : r.styles.height;
                return i
                    ? null
                    : l.createElement(Be, {
                          item: r,
                          updateGlobals: s,
                          viewportMap: o,
                          viewportName: n,
                          isRotated: d,
                          setIsTooltipVisible: p,
                          isLocked: I,
                          isActive: u,
                          width: y,
                          height: k,
                      });
            },
            Be = l.memo(function (e) {
                let {
                        item: t,
                        viewportMap: a,
                        viewportName: s,
                        isRotated: c,
                        updateGlobals: b,
                        setIsTooltipVisible: p,
                        isLocked: o,
                        isActive: i,
                        width: h,
                        height: n,
                    } = e,
                    d = X(r => b({ [A]: r }), [b]);
                return l.createElement(
                    V,
                    null,
                    l.createElement(
                        W,
                        {
                            placement: "bottom",
                            tooltip: ({ onHide: r }) =>
                                l.createElement(q, {
                                    links: [
                                        ...(length > 0 && t !== P
                                            ? [
                                                  {
                                                      id: "reset",
                                                      title: "Reset viewport",
                                                      icon: l.createElement(
                                                          ie,
                                                          null,
                                                      ),
                                                      onClick: () => {
                                                          (d({
                                                              value: void 0,
                                                              isRotated: !1,
                                                          }),
                                                              r());
                                                      },
                                                  },
                                              ]
                                            : []),
                                        ...Object.entries(a).map(([u, I]) => ({
                                            id: u,
                                            title: I.name,
                                            icon: _e[I.type],
                                            active: u === s,
                                            onClick: () => {
                                                (d({ value: u, isRotated: !1 }),
                                                    r());
                                            },
                                        })),
                                    ],
                                }),
                            closeOnOutsideClick: !0,
                            onVisibleChange: p,
                        },
                        l.createElement(
                            Ae,
                            {
                                disabled: o,
                                key: "viewport",
                                title: "Change the size of the preview",
                                active: i,
                                onDoubleClick: () => {
                                    d({ value: void 0, isRotated: !1 });
                                },
                            },
                            l.createElement(j, null),
                            t !== P
                                ? l.createElement(
                                      Oe,
                                      null,
                                      t.name,
                                      " ",
                                      c ? "(L)" : "(P)",
                                  )
                                : null,
                        ),
                    ),
                    l.createElement(Y, {
                        styles: {
                            'iframe[data-is-storybook="true"]': {
                                width: h,
                                height: n,
                            },
                        },
                    }),
                    t !== P
                        ? l.createElement(
                              xe,
                              null,
                              l.createElement(
                                  se,
                                  { title: "Viewport width" },
                                  h.replace("px", ""),
                              ),
                              o
                                  ? "/"
                                  : l.createElement(
                                        L,
                                        {
                                            key: "viewport-rotate",
                                            title: "Rotate viewport",
                                            onClick: () => {
                                                d({ value: s, isRotated: !c });
                                            },
                                        },
                                        l.createElement(K, null),
                                    ),
                              l.createElement(
                                  se,
                                  { title: "Viewport height" },
                                  n.replace("px", ""),
                              ),
                          )
                        : null,
                );
            }),
            Pe = (0, $.default)(50)(e => [
                ...Me,
                ...Object.entries(e).map(([t, { name: a, ...s }]) => ({
                    ...s,
                    id: t,
                    title: a,
                })),
            ]),
            D = {
                id: "reset",
                title: "Reset viewport",
                styles: null,
                type: "other",
            },
            Me = [D],
            Ve = (0, $.default)(50)((e, t, a, s) =>
                e
                    .filter(c => c.id !== D.id || t.id !== c.id)
                    .map(c => ({
                        ...c,
                        onClick: () => {
                            (a({ viewport: c.id }), s());
                        },
                    })),
            ),
            De = ({ width: e, height: t, ...a }) => ({
                ...a,
                height: e,
                width: t,
            }),
            Ne = v.div(() => ({
                display: "inline-flex",
                alignItems: "center",
            })),
            ue = v.div(({ theme: e }) => ({
                display: "inline-block",
                textDecoration: "none",
                padding: 10,
                fontWeight: e.typography.weight.bold,
                fontSize: e.typography.size.s2 - 1,
                lineHeight: "1",
                height: 40,
                border: "none",
                borderTop: "3px solid transparent",
                borderBottom: "3px solid transparent",
                background: "transparent",
            })),
            ze = v(L)(() => ({ display: "inline-flex", alignItems: "center" })),
            Ge = v.div(({ theme: e }) => ({
                fontSize: e.typography.size.s2 - 1,
                marginLeft: 10,
            })),
            He = (e, t, a) => {
                if (t === null) return;
                let s = typeof t == "function" ? t(e) : t;
                return a ? De(s) : s;
            },
            Fe = Q(function () {
                let [e, t] = F(),
                    {
                        viewports: a = Ie,
                        defaultOrientation: s,
                        defaultViewport: c,
                        disable: b,
                    } = U(A, {}),
                    p = Pe(a),
                    o = oe(),
                    [i, h] = G(!1);
                (c &&
                    !p.find(u => u.id === c) &&
                    console.warn(
                        `Cannot find "defaultViewport" of "${c}" in addon-viewport configs, please check the "viewports" setting in the configuration.`,
                    ),
                    _(() => {
                        de(o, e, t, Object.keys(a));
                    }, [a, e, e.viewport, t, o]),
                    _(() => {
                        let u = s === "landscape";
                        ((c && e.viewport !== c) ||
                            (s && e.viewportRotated !== u)) &&
                            t({ viewport: c, viewportRotated: u });
                    }, [s, c, t]));
                let n =
                        p.find(u => u.id === e.viewport) ||
                        p.find(u => u.id === c) ||
                        p.find(u => u.default) ||
                        D,
                    d = ee(),
                    r = He(d.current, n.styles, e.viewportRotated);
                return (
                    _(() => {
                        d.current = r;
                    }, [n]),
                    b || Object.entries(a).length === 0
                        ? null
                        : l.createElement(
                              V,
                              null,
                              l.createElement(
                                  W,
                                  {
                                      placement: "top",
                                      tooltip: ({ onHide: u }) =>
                                          l.createElement(q, {
                                              links: Ve(p, n, t, u),
                                          }),
                                      closeOnOutsideClick: !0,
                                      onVisibleChange: h,
                                  },
                                  l.createElement(
                                      ze,
                                      {
                                          key: "viewport",
                                          title: "Change the size of the preview",
                                          active: i || !!r,
                                          onDoubleClick: () => {
                                              t({ viewport: D.id });
                                          },
                                      },
                                      l.createElement(j, null),
                                      r
                                          ? l.createElement(
                                                Ge,
                                                null,
                                                e.viewportRotated
                                                    ? `${n.title} (L)`
                                                    : `${n.title} (P)`,
                                            )
                                          : null,
                                  ),
                              ),
                              r
                                  ? l.createElement(
                                        Ne,
                                        null,
                                        l.createElement(Y, {
                                            styles: {
                                                'iframe[data-is-storybook="true"]':
                                                    {
                                                        ...(r || {
                                                            width: "100%",
                                                            height: "100%",
                                                        }),
                                                    },
                                            },
                                        }),
                                        l.createElement(
                                            ue,
                                            { title: "Viewport width" },
                                            r.width.replace("px", ""),
                                        ),
                                        l.createElement(
                                            L,
                                            {
                                                key: "viewport-rotate",
                                                title: "Rotate viewport",
                                                onClick: () => {
                                                    t({
                                                        viewportRotated:
                                                            !e.viewportRotated,
                                                    });
                                                },
                                            },
                                            l.createElement(K, null),
                                        ),
                                        l.createElement(
                                            ue,
                                            { title: "Viewport height" },
                                            r.height.replace("px", ""),
                                        ),
                                    )
                                  : null,
                          )
                );
            });
        H.register(B, e => {
            H.add(B, {
                title: "viewport / media-queries",
                type: te.TOOL,
                match: ({ viewMode: t, tabId: a }) => t === "story" && !a,
                render: () =>
                    FEATURES?.viewportStoryGlobals
                        ? z(Le, { api: e })
                        : z(Fe, null),
            });
        });
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
