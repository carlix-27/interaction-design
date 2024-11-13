import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import VersusBar from './VersusBar';

const meta: Meta<typeof VersusBar>={
    title: 'VersusBar',
    component: VersusBar,
    argTypes:{
        name1: {
            control: 'text',
            defaultValue: 'Martina',
        },
        name2: {
            control: 'text',
            defaultValue: 'Juan',
        }
    },
};

export default meta;

type Story = StoryObj<typeof VersusBar>;

export const Default: Story = {
    args: {
        name1: 'Ana P.',
        name2: 'Juan',
    },
};



