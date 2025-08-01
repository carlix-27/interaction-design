try {
    (() => {
        var E = __STORYBOOK_API__,
            {
                ActiveTabs: T,
                Consumer: h,
                ManagerContext: p,
                Provider: A,
                RequestResponseError: b,
                addons: a,
                combineParameters: O,
                controlOrMetaKey: R,
                controlOrMetaSymbol: k,
                eventMatchesShortcut: v,
                eventToShortcut: g,
                experimental_requestResponse: I,
                isMacLike: C,
                isShortcutTaken: M,
                keyToSymbol: P,
                merge: x,
                mockChannel: f,
                optionOrAltSymbol: q,
                shortcutMatchesShortcut: D,
                shortcutToHumanString: G,
                types: K,
                useAddonState: V,
                useArgTypes: $,
                useArgs: B,
                useChannel: N,
                useGlobalTypes: Q,
                useGlobals: U,
                useParameter: Y,
                useSharedState: H,
                useStoryPrepared: L,
                useStorybookApi: j,
                useStorybookState: w,
            } = __STORYBOOK_API__;
        var e = "storybook/links",
            n = {
                NAVIGATE: `${e}/navigate`,
                REQUEST: `${e}/request`,
                RECEIVE: `${e}/receive`,
            };
        a.register(e, t => {
            t.on(n.REQUEST, ({ kind: u, name: S }) => {
                let c = t.storyId(u, S);
                t.emit(n.RECEIVE, c);
            });
        });
    })();
} catch (e) {
    console.error(
        "[Storybook] One of your manager-entries failed: " + import.meta.url,
        e,
    );
}
