import { Meta, StoryObj } from "@storybook/react";
import StarRating from "./StarRating";
import { StarRatingVariant } from "./StarRating";

const meta: Meta<typeof StarRating> = {
    title: "VisualizeContent/StarRating",
    component: StarRating,
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 5, step: 0.5 },
        },
        variant: {
            control: { type: "radio" },
            options: ["stars", "withText"] satisfies StarRatingVariant[],
        },
        votes: {
            control: "number",
            if: { arg: "variant", eq: "withText" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const OnlyStars: Story = {
    args: {
        value: 3.5,
        variant: "stars",
    },
};

export const WithText: Story = {
    args: {
        value: 4.3,
        votes: 135,
        variant: "withText",
    },
};
