import { Meta, StoryObj } from '@storybook/react';
import Pill from './Pill'; // Asegúrate de que la ruta sea correcta

// Configuración de los metadatos para Storybook
const meta: Meta<typeof Pill> = {
    title: 'Componentes/Pill', // Nombre del componente en el menú de Storybook
    component: Pill,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'selected', 'disabled'],
            description: 'El estilo o estado de la píldora',
            defaultValue: 'default',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'El tamaño de la píldora',
            defaultValue: 'medium',
        },
        children: {
            control: 'text',
            description: 'Contenido dentro de la píldora',
            defaultValue: 'Texto de ejemplo',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Pill>;

// Definir cada una de las variantes como una historia independiente

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'medium',
        children: 'Default',
    },
};

export const Selected: Story = {
    args: {
        variant: 'selected',
        size: 'medium',
        children: 'Selected',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'disabled',
        size: 'medium',
        children: 'Disabled',
    },
};