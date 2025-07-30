// LoadingSpinner.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

export default {
    title: "Loader/LoadingSpinner",
    component: LoadingSpinner,
    argTypes: {
        size: { control: "number" },
        color: { control: "text" },
    },
} as Meta<typeof LoadingSpinner>;

const Template: StoryFn<typeof LoadingSpinner> = args => (
    <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
    size: 24,
    color: "purple-500",
};

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
    size: 48,
    color: "purple-700",
};
