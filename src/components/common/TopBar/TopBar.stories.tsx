import type { Meta, StoryObj } from '@storybook/react';
import TopBar from './TopBar';

const meta: Meta<typeof TopBar> = {
    title: 'Common/TopBar',
    component: TopBar,
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#F6E7FD' },
                { name: 'dark', value: '#333333' },
                { name: 'white', value: '#FFFFFF' }
            ]
        }
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Título que aparece en la barra'
        },
        variant: {
            control: 'select',
            options: ['default', 'compact', 'withMenu', 'onlyTitle'],
            description: 'Variante del componente TopBar'
        },
        showBackButton: { 
            control: false 
        },
        onBackClick: { 
            control: false
        },
        onMenuClick: { 
            control: false
        }
    }
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
    args: {
        title: 'Arte',
        variant: 'default',
        showBackButton: true
    }
};

export const Compact: Story = {
    args: {
        title: 'Arte',
        variant: 'compact',
        showBackButton: true
    }
};

export const WithMenu: Story = {
    args: {
        title: 'Arte',
        variant: 'withMenu',
        showBackButton: true
    }
};

export const OnlyTitle: Story = {
    args: {
        title: 'Arte',
        variant: 'onlyTitle',
        showBackButton: true
    }
};