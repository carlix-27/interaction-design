import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NavbarTop, { NavbarTopProps } from './NavbarTop';

const meta: Meta<typeof NavbarTop> = {
    title: 'Components/NavbarTop',
    component: NavbarTop,
    argTypes: {
        courseName: { control: 'text' },
        hasNotifications: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<NavbarTopProps>;

export const NoNotifications: Story = {
    args: {
        courseName: 'Course Name',
        hasNotifications: false,
    },
};

export const WithNotifications: Story = {
    args: {
        courseName: 'Course Name',
        hasNotifications: true,
    },
};
