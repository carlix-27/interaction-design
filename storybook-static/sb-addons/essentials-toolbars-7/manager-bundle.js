try {
    (() => {
        var l = __REACT__,
            {
                Children: se,
                Component: ie,
                Fragment: ue,
                Profiler: ce,
                PureComponent: pe,
                StrictMode: me,
                Suspense: de,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
                cloneElement: Se,
                createContext: Te,
                createElement: ye,
                createFactory: _e,
                createRef: fe,
                forwardRef: Ce,
                isValidElement: ve,
                lazy: Ie,
                memo: Oe,
                startTransition: Ee,
                unstable_act: xe,
                useCallback: C,
                useContext: ge,
                useDebugValue: ke,
                useDeferredValue: he,
                useEffect: g,
                useId: Ae,
                useImperativeHandle: Re,
                useInsertionEffect: Le,
                useLayoutEffect: Be,
                useMemo: Me,
                useReducer: Pe,
                useRef: L,
                useState: B,
                useSyncExternalStore: Ne,
                useTransition: we,
                version: Ve,
            } = __REACT__;
        var We = __STORYBOOK_API__,
            {
                ActiveTabs: Ke,
                Consumer: Ye,
                ManagerContext: $e,
                Provider: qe,
                RequestResponseError: ze,
                addons: k,
                combineParameters: Ue,
                controlOrMetaKey: je,
                controlOrMetaSymbol: Ze,
                eventMatchesShortcut: Je,
                eventToShortcut: Qe,
                experimental_requestResponse: Xe,
                isMacLike: et,
                isShortcutTaken: tt,
                keyToSymbol: ot,
                merge: rt,
                mockChannel: at,
                optionOrAltSymbol: lt,
                shortcutMatchesShortcut: nt,
                shortcutToHumanString: st,
                types: M,
                useAddonState: it,
                useArgTypes: ut,
                useArgs: ct,
                useChannel: pt,
                useGlobalTypes: P,
                useGlobals: h,
                useParameter: mt,
                useSharedState: dt,
                useStoryPrepared: bt,
                useStorybookApi: N,
                useStorybookState: St,
            } = __STORYBOOK_API__;
        var Ct = __STORYBOOK_COMPONENTS__,
            {
                A: vt,
                ActionBar: It,
                AddonPanel: Ot,
                Badge: Et,
                Bar: xt,
                Blockquote: gt,
                Button: kt,
                ClipboardCode: ht,
                Code: At,
                DL: Rt,
                Div: Lt,
                DocumentWrapper: Bt,
                EmptyTabContent: Mt,
                ErrorFormatter: Pt,
                FlexBar: Nt,
                Form: wt,
                H1: Vt,
                H2: Dt,
                H3: Ht,
                H4: Ft,
                H5: Gt,
                H6: Wt,
                HR: Kt,
                IconButton: w,
                IconButtonSkeleton: Yt,
                Icons: A,
                Img: $t,
                LI: qt,
                Link: zt,
                ListItem: Ut,
                Loader: jt,
                Modal: Zt,
                OL: Jt,
                P: Qt,
                Placeholder: Xt,
                Pre: eo,
                ResetWrapper: to,
                ScrollArea: oo,
                Separator: V,
                Spaced: ro,
                Span: ao,
                StorybookIcon: lo,
                StorybookLogo: no,
                Symbols: so,
                SyntaxHighlighter: io,
                TT: uo,
                TabBar: co,
                TabButton: po,
                TabWrapper: mo,
                Table: bo,
                Tabs: So,
                TabsState: To,
                TooltipLinkList: D,
                TooltipMessage: yo,
                TooltipNote: _o,
                UL: fo,
                WithTooltip: H,
                WithTooltipPure: Co,
                Zoom: vo,
                codeCommon: Io,
                components: Oo,
                createCopyToClipboardFunction: Eo,
                getStoryHref: xo,
                icons: go,
                interleaveSeparators: ko,
                nameSpaceClassNames: ho,
                resetComponents: Ao,
                withReset: Ro,
            } = __STORYBOOK_COMPONENTS__;
        var K = { type: "item", value: "" },
            Y = (o, t) => ({
                ...t,
                name: t.name || o,
                description: t.description || o,
                toolbar: {
                    ...t.toolbar,
                    items: t.toolbar.items.map(e => {
                        let r =
                            typeof e == "string" ? { value: e, title: e } : e;
                        return (
                            r.type === "reset" &&
                                t.toolbar.icon &&
                                ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
                            { ...K, ...r }
                        );
                    }),
                },
            }),
            $ = ["reset"],
            q = o => o.filter(t => !$.includes(t.type)).map(t => t.value),
            S = "addon-toolbars",
            z = async (o, t, e) => {
                (e &&
                    e.next &&
                    (await o.setAddonShortcut(S, {
                        label: e.next.label,
                        defaultShortcut: e.next.keys,
                        actionName: `${t}:next`,
                        action: e.next.action,
                    })),
                    e &&
                        e.previous &&
                        (await o.setAddonShortcut(S, {
                            label: e.previous.label,
                            defaultShortcut: e.previous.keys,
                            actionName: `${t}:previous`,
                            action: e.previous.action,
                        })),
                    e &&
                        e.reset &&
                        (await o.setAddonShortcut(S, {
                            label: e.reset.label,
                            defaultShortcut: e.reset.keys,
                            actionName: `${t}:reset`,
                            action: e.reset.action,
                        })));
            },
            U = o => t => {
                let {
                        id: e,
                        toolbar: { items: r, shortcuts: a },
                    } = t,
                    c = N(),
                    [T, i] = h(),
                    n = L([]),
                    u = T[e],
                    v = C(() => {
                        i({ [e]: "" });
                    }, [i]),
                    I = C(() => {
                        let s = n.current,
                            m = s.indexOf(u),
                            d = m === s.length - 1 ? 0 : m + 1,
                            p = n.current[d];
                        i({ [e]: p });
                    }, [n, u, i]),
                    O = C(() => {
                        let s = n.current,
                            m = s.indexOf(u),
                            d = m > -1 ? m : 0,
                            p = d === 0 ? s.length - 1 : d - 1,
                            b = n.current[p];
                        i({ [e]: b });
                    }, [n, u, i]);
                return (
                    g(() => {
                        a &&
                            z(c, e, {
                                next: { ...a.next, action: I },
                                previous: { ...a.previous, action: O },
                                reset: { ...a.reset, action: v },
                            });
                    }, [c, e, a, I, O, v]),
                    g(() => {
                        n.current = q(r);
                    }, []),
                    l.createElement(o, { cycleValues: n.current, ...t })
                );
            },
            F = ({ currentValue: o, items: t }) =>
                o != null && t.find(e => e.value === o && e.type !== "reset"),
            j = ({ currentValue: o, items: t }) => {
                let e = F({ currentValue: o, items: t });
                if (e) return e.icon;
            },
            Z = ({ currentValue: o, items: t }) => {
                let e = F({ currentValue: o, items: t });
                if (e) return e.title;
            },
            J = ({
                active: o,
                disabled: t,
                title: e,
                icon: r,
                description: a,
                onClick: c,
            }) =>
                l.createElement(
                    w,
                    {
                        active: o,
                        title: a,
                        disabled: t,
                        onClick: t ? () => {} : c,
                    },
                    r &&
                        l.createElement(A, {
                            icon: r,
                            __suppressDeprecationWarning: !0,
                        }),
                    e ? `\xA0${e}` : null,
                ),
            Q = ({
                right: o,
                title: t,
                value: e,
                icon: r,
                hideIcon: a,
                onClick: c,
                disabled: T,
                currentValue: i,
            }) => {
                let n =
                        r &&
                        l.createElement(A, { style: { opacity: 1 }, icon: r }),
                    u = {
                        id: e ?? "_reset",
                        active: i === e,
                        right: o,
                        title: t,
                        disabled: T,
                        onClick: c,
                    };
                return (r && !a && (u.icon = n), u);
            },
            X = U(
                ({
                    id: o,
                    name: t,
                    description: e,
                    toolbar: {
                        icon: r,
                        items: a,
                        title: c,
                        preventDynamicIcon: T,
                        dynamicTitle: i,
                    },
                }) => {
                    let [n, u, v] = h(),
                        [I, O] = B(!1),
                        s = n[o],
                        m = !!s,
                        d = o in v,
                        p = r,
                        b = c;
                    (T || (p = j({ currentValue: s, items: a }) || p),
                        i && (b = Z({ currentValue: s, items: a }) || b),
                        !b &&
                            !p &&
                            console.warn(
                                `Toolbar '${t}' has no title or icon`,
                            ));
                    let G = C(
                        x => {
                            u({ [o]: x });
                        },
                        [o, u],
                    );
                    return l.createElement(
                        H,
                        {
                            placement: "top",
                            tooltip: ({ onHide: x }) => {
                                let W = a
                                    .filter(({ type: E }) => {
                                        let R = !0;
                                        return (
                                            E === "reset" && !s && (R = !1),
                                            R
                                        );
                                    })
                                    .map(E =>
                                        Q({
                                            ...E,
                                            currentValue: s,
                                            disabled: d,
                                            onClick: () => {
                                                (G(E.value), x());
                                            },
                                        }),
                                    );
                                return l.createElement(D, { links: W });
                            },
                            closeOnOutsideClick: !0,
                            onVisibleChange: O,
                        },
                        l.createElement(J, {
                            active: I || m,
                            disabled: d,
                            description: e || "",
                            icon: p,
                            title: b || "",
                        }),
                    );
                },
            ),
            ee = () => {
                let o = P(),
                    t = Object.keys(o).filter(e => !!o[e].toolbar);
                return t.length
                    ? l.createElement(
                          l.Fragment,
                          null,
                          l.createElement(V, null),
                          t.map(e => {
                              let r = Y(e, o[e]);
                              return l.createElement(X, {
                                  key: e,
                                  id: e,
                                  ...r,
                              });
                          }),
                      )
                    : null;
            };
        k.register(S, () =>
            k.add(S, {
                title: S,
                type: M.TOOL,
                match: ({ tabId: o }) => !o,
                render: () => l.createElement(ee, null),
            }),
        );
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
