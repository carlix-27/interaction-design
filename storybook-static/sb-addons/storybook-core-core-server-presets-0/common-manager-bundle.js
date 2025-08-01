try {
    (() => {
        var T = __STORYBOOK_API__,
            {
                ActiveTabs: _,
                Consumer: g,
                ManagerContext: O,
                Provider: f,
                RequestResponseError: A,
                addons: n,
                combineParameters: v,
                controlOrMetaKey: P,
                controlOrMetaSymbol: k,
                eventMatchesShortcut: x,
                eventToShortcut: M,
                experimental_requestResponse: R,
                isMacLike: w,
                isShortcutTaken: C,
                keyToSymbol: G,
                merge: I,
                mockChannel: K,
                optionOrAltSymbol: q,
                shortcutMatchesShortcut: B,
                shortcutToHumanString: F,
                types: Y,
                useAddonState: j,
                useArgTypes: E,
                useArgs: H,
                useChannel: L,
                useGlobalTypes: N,
                useGlobals: z,
                useParameter: D,
                useSharedState: J,
                useStoryPrepared: Q,
                useStorybookApi: U,
                useStorybookState: V,
            } = __STORYBOOK_API__;
        var S = (() => {
                let e;
                return (
                    typeof window < "u"
                        ? (e = window)
                        : typeof globalThis < "u"
                          ? (e = globalThis)
                          : typeof window < "u"
                            ? (e = window)
                            : typeof self < "u"
                              ? (e = self)
                              : (e = {}),
                    e
                );
            })(),
            u = "static-filter";
        n.register(u, e => {
            let i = Object.entries(S.TAGS_OPTIONS ?? {}).reduce((t, r) => {
                let [o, c] = r;
                return (c.excludeFromSidebar && (t[o] = !0), t);
            }, {});
            e.experimental_setFilter(u, t => {
                let r = t.tags ?? [];
                return (
                    (r.includes("dev") || t.type === "docs") &&
                    r.filter(o => i[o]).length === 0
                );
            });
        });
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
