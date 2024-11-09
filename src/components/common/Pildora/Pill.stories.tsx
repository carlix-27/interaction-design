import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Pill, { PillProps } from "./Pill";

// Meta configuración para Storybook
const meta: Meta<typeof Pill> = {
    title: 'Components/Pill',
    component: Pill,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'selected', 'disabled'], // Opciones para cambiar la variante
        },
        label: {
            control: 'text',
        },
    }
};

export default meta;

// Tipo de template para las variantes de Pill
type Story = StoryObj<typeof Pill>;

// Variantes para mostrar en Storybook
export const Default: Story = {
    name: 'Default',
    args: {
        variant: 'default',
        label: 'Default Pill',
    },
};

export const Selected: Story = {
    name: 'Selected',
    args: {
        variant: 'selected',
        label: 'Selected Pill',
    },
};

export const Disabled: Story = {
    name: 'Disabled',
    args: {
        variant: 'disabled',
        label: 'Disabled Pill',
    },
};
