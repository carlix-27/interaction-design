import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SwordIcon from './SwordIcon';

const meta: Meta<typeof SwordIcon> = {
    title: 'SwordIcon',
    component: SwordIcon,
    argTypes: {
        color: {
            control: 'select',
            options: ['purple'], // Puedes agregar más opciones en el futuro si añades más variantes
        },
    },
};

export default meta;

type Story = StoryObj<typeof SwordIcon>;

export const Default: Story = {
    args: {
        color: 'purple',
    },
};

