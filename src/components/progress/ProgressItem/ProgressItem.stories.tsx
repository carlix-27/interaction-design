// ProgressItem.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProgressItem, { ProgressItemProps } from "./ProgressItem";

export default {
    title: "Progress/ProgressItem",
    component: ProgressItem,
    argTypes: {
        medalType: {
            control: { type: "select" },
            options: ["gold", "silver", "bronze", "default"], // Dropdown options in Storybook
        },
        name: {
            control: { type: "text" }, // Allows editing text
        },
        percentage: {
            control: { type: "number", min: 0, max: 100 }, // Slider for percentage between 0 and 100
        },
    },
} as Meta;

// Template for the component
const Template: StoryFn<ProgressItemProps> = args => <ProgressItem {...args} />;

// Export a default story with default prop values
export const Default = Template.bind({});
Default.args = {
    medalType: "gold",
    name: "Top Performer",
    percentage: 75,
};

export const SilverMedal = Template.bind({});
SilverMedal.args = {
    medalType: "silver",
    name: "Second performer",
    percentage: 75,
};
