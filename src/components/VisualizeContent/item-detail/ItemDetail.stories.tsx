import { Meta, StoryObj } from "@storybook/react";
import ItemDetail from "./ItemDetail";

const meta: Meta<typeof ItemDetail> = {
    title: "VisualizeContent/ItemDetail",
    component: ItemDetail,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["default", "highlighted"],
        },
        icon: {
            control: { type: "select" },
            options: [
                "subtitle",
                "language",
                "info",
                "steamline",
                "forum",
                "trophy",
            ],
        },
        text: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof ItemDetail>;

export const Default: Story = {
    args: {
        text: "Inglés",
        variant: "default",
        icon: "subtitle",
    },
};

export const Highlighted: Story = {
    args: {
        text: "Inglés",
        variant: "highlighted",
        icon: "subtitle",
    },
};
