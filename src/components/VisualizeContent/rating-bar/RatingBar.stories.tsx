import { Meta, StoryObj } from "@storybook/react";
import RatingBar from "./RatingBar";

const meta: Meta<typeof RatingBar> = {
    title: "VisualizeContent/RatingBar",
    component: RatingBar,
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 5, step: 0.1 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RatingBar>;

export const Default: Story = {
    args: {
        value: 3.5,
    },
};
