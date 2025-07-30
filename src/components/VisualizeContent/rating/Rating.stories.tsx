import { Meta, StoryObj } from "@storybook/react";
import Rating from "./Rating";

const meta: Meta<typeof Rating> = {
    title: "VisualizeContent/Rating",
    component: Rating,
    argTypes: {
        value: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
        date: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        value: 4.5,
        date: "26/3/22",
    },
};
