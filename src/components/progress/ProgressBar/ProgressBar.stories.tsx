import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  title: "Progress/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: "range", min: 0, max: 100 } },
  },
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
};
