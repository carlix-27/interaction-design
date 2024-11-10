// BottomNavBar.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BottomNavBar, { BottomNavBarProps } from './BottomNavBar';

const meta: Meta<typeof BottomNavBar> = {
    title: 'Components/BottomNavBar',
    component: BottomNavBar,
    argTypes: {
        activeButton: {
            control: {
                type: 'select',
                options: ['home', 'list', 'user'],
            },
        },
    },
};

export default meta;

type Story = StoryObj<BottomNavBarProps>;

export const HomeActive: Story = {
    args: {
        activeButton: 'home',
    },
    render: (args) => {
        const [activeButton, setActiveButton] = useState(args.activeButton);
        return (
            <BottomNavBar
                {...args}
                activeButton={activeButton}
                onButtonClick={setActiveButton}
            />
        );
    },
};

export const ListActive: Story = {
    args: {
        activeButton: 'list',
    },
    render: (args) => {
        const [activeButton, setActiveButton] = useState(args.activeButton);
        return (
            <BottomNavBar
                {...args}
                activeButton={activeButton}
                onButtonClick={setActiveButton}
            />
        );
    },
};

export const UserActive: Story = {
    args: {
        activeButton: 'user',
    },
    render: (args) => {
        const [activeButton, setActiveButton] = useState(args.activeButton);
        return (
            <BottomNavBar
                {...args}
                activeButton={activeButton}
                onButtonClick={setActiveButton}
            />
        );
    },
};
