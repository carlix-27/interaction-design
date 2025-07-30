import { Meta, StoryObj } from "@storybook/react";
import Star, { StarVariant } from "./Star";

const meta: Meta<typeof Star> = {
    title: "VisualizeContent/Star",
    component: Star,
    //tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["full", "half", "empty"] satisfies StarVariant[],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Star>;

export const Full: Story = {
    args: { variant: "full" },
};

export const Half: Story = {
    args: { variant: "half" },
};

export const Empty: Story = {
    args: { variant: "empty" },
};
