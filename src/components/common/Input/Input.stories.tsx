import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

// Definir la metadata del componente
export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        iconLeft: { control: 'boolean' },
        iconRight: { control: 'boolean' },
        helperText: { control: 'text' },
        isFocused: { control: 'boolean' },
        size: {
            control: { type: 'radio', options: ['default', 'medium', 'large'] },
        },
        filled: { control: 'boolean' },
    },
} as Meta<typeof Input>;

// Variantes

export const Default: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono de ejemplo
        iconRight: null,
        helperText: 'Texto de ayuda',
        isFocused: false,
        size: 'default',
        filled: false,
    },
};

export const Filled: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono de ejemplo
        iconRight: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono derecho
        helperText: 'Texto de ayuda',
        isFocused: false,
        size: 'default',
        filled: true,
    },
};

export const Focused: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: null,
        iconRight: null,
        helperText: 'Texto de ayuda',
        isFocused: true,
        size: 'default',
        filled: false,
    },
};

export const Large: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono de ejemplo
        iconRight: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono derecho
        helperText: 'Texto de ayuda',
        isFocused: false,
        size: 'large',
        filled: false,
    },
};

export const Medium: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: null,
        iconRight: null,
        helperText: 'Texto de ayuda',
        isFocused: false,
        size: 'medium',
        filled: false,
    },
};

export const WithHelperText: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono de ejemplo
        iconRight: null,
        helperText: 'Este es un texto de ayuda largo para ver cómo se comporta.',
        isFocused: false,
        size: 'default',
        filled: false,
    },
};

export const WithIcons: StoryObj<typeof Input> = {
    args: {
        placeholder: 'Escribe aquí...',
        iconLeft: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono izquierdo
        iconRight: <svg width="24" height="24" fill="none"><path d="M12 6v12M6 12h12" stroke="#000" strokeWidth="2" /></svg>, // Icono derecho
        helperText: 'Texto de ayuda',
        isFocused: false,
        size: 'default',
        filled: false,
    },
};