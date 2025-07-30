import type { Meta, StoryObj } from '@storybook/react';
import Head from './Head';

const meta: Meta<typeof Head> = {
    title: 'Common/Head',
    component: Head,
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#F6E7FD' },
                { name: 'dark', value: '#333333' },
                { name: 'blue', value: '#E6F3FF' },
                { name: 'green', value: '#F0F9E6' }
            ]
        }
    },
    argTypes: {
        userName: {
            control: 'text',
            description: 'Nombre del usuario que aparece en el saludo'
        },
        avatarIcon: {
            control: 'select',
            options: [
                'woman_large_pink_hair',
                'woman_blue_dress', 
                'woman_v_sign',
                'woman_heart_sign',
                'man_thinking',
                'man_thumb_up',
                'man_with_dog'
            ],
            description: 'Ícono del avatar del usuario'
        },
        backgroundColor: {
            control: 'color',
            description: 'Color de fondo del componente Head'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Head>;

export const Default: Story = {
    args: {
        userName: 'Martina',
        avatarIcon: 'woman_large_pink_hair'
    }
};