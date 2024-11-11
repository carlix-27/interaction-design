
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UserGameProfile  from './UserGameProfile';

const meta: Meta<typeof UserGameProfile> = {
    title: 'UserGameProfile',
    component: UserGameProfile,
    argTypes: {

        username: {
            control: 'text',
            defaultValue: 'Anilamejor',
        },
        achievements: {
            control: 'object',
            defaultValue: '2 veces Top 10',
        },
        division: {
            control: 'text',
            defaultValue: 'Oro',
        },
        totalExp: {
            control: 'number',
            defaultValue: 10500,
        },
    },
};

export default meta;

type Story = StoryObj<typeof UserGameProfile>;

export const Default: Story = {
    args: {

        username: 'Anilamejor',
        achievements: '2 veces Top 10',
        division: 'Oro',
        totalExp: 10500,
    },
};

