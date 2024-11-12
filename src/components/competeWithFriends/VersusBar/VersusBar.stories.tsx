import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import VersusBar from './VersusBar';

const meta: Meta<typeof VersusBar>={
    title: 'VersusBar',
    component: VersusBar,
    argTypes:{
        name1: {
            control: 'text',
            defaultValue: 'Juan',
        },
        name2: {
            control: 'text',
            defaultValue: 'Pedro',
        }
    },
};

export default meta;

type Story = StoryObj<typeof VersusBar>;

export const Default: Story = {
    args: {
        name1: 'Juan',
        name2: 'Pedro',
    },
};



