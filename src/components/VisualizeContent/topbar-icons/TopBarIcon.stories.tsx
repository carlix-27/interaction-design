import { Meta, StoryObj } from "@storybook/react";
import TopBarIcon from "./TopBarIcon";

const meta: Meta<typeof TopBarIcon> = {
    title: "VisualizeContent/TopBarIcon",
    component: TopBarIcon,
    argTypes: {
        iconName: {
            control: "select",
            options: ["arrow-back-rounded", "more-2-fill", "search-icon"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof TopBarIcon>;

export const Back: Story = {
    args: {
        iconName: "arrow-back-rounded",
    },
};

export const More: Story = {
    args: {
        iconName: "more-2-fill",
    },
};

export const Search: Story = {
    args: {
        iconName: "search-icon",
    },
};
