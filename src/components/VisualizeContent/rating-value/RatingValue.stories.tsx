import { Meta, StoryObj } from "@storybook/react";
import RatingValue from "./RatingValue";

const meta: Meta<typeof RatingValue> = {
    title: "VisualizeContent/RatingValue",
    component: RatingValue,
    argTypes: {
        votes: {
            control: { type: "number", min: 0, step: 1 },
        },
        fill: {
            control: { type: "range", min: 0, max: 5, step: 0.1 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof RatingValue>;

export const Default: Story = {
    args: {
        votes: 5,
        fill: 3.2,
    },
};
