import type { Meta, StoryObj } from '@storybook/react';
import { Buscar } from './Buscar';

const meta: Meta<typeof Buscar> = {
    title: 'Common/Buscar',
    component: Buscar,
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
        placeholder: {
            control: 'text',
            description: 'Texto placeholder del input'
        },
        value: {
            control: 'text',
            description: 'Valor del input'
        },
        variant: {
            control: 'select',
            options: ['search', 'withClose', 'simple'],
            description: 'Variante del componente de búsqueda'
        },
        onChange: { 
            action: 'changed',
            description: 'Función que se ejecuta al cambiar el texto'
        },
        onClose: { 
            action: 'closed',
            description: 'Función que se ejecuta al hacer click en cerrar'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Buscar>;

export const Search: Story = {
    args: {
        variant: 'search',
        placeholder: '¿Qué vas a aprender hoy?',
        value: ''
    }
};

export const WithClose: Story = {
    args: {
        variant: 'withClose',
        value: 'Javascript'
    }
};

export const Simple: Story = {
    args: {
        variant: 'simple',
        value: ''
    }
};