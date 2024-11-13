import React from 'react';
import ButtonPlus from "./ButtonPlus";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonPlus> = {
    title: "Course/ButtonPlus",
    component: ButtonPlus,
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export default meta;

type ButtonPlusStories = StoryObj<typeof ButtonPlus>;

export const RoundedSquareButton: ButtonPlusStories = {
    name: 'RoundedSquareButton',
    render: args => <ButtonPlus {...args} onClick={() => alert("Button clicked!")} />,
};
