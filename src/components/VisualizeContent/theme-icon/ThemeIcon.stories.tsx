import { Meta, StoryObj } from "@storybook/react";
import ThemeIcon, { ThemeIconVariant } from "./ThemeIcon";

const meta: Meta<typeof ThemeIcon> = {
    title: "VisualizeContent/ThemeIcon",
    component: ThemeIcon,
    argTypes: {
        //tags: ["autodocs"],
        variant: {
            control: { type: "select" },
            options: [
                "paint-brush",
                "fire",
                "chat",
                "mini-chat",
                "color-mini-chat",
                "doble-chat",
            ] satisfies ThemeIconVariant[],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ThemeIcon>;

export const paintBrush: Story = { args: { variant: "paint-brush" } };
export const fire: Story = { args: { variant: "fire" } };
export const chat: Story = { args: { variant: "chat" } };
export const miniChat: Story = { args: { variant: "mini-chat" } };
export const colorMiniChat: Story = { args: { variant: "color-mini-chat" } };
export const dobleChat: Story = { args: { variant: "doble-chat" } };
