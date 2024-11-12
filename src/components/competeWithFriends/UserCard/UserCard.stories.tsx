import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UserCard from './UserCard';

const meta: Meta<typeof UserCard> = {
    title: 'CompeteWithFriends/UserCard',
    component: UserCard,
    argTypes: {
        color: {
            control: 'select',
            options: ['gray'],
        },
        username: {
            control: 'text',
            defaultValue: 'Carla A.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
    args: {
        username: 'Carla A.',
        color: 'gray',
    },
};
