import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from './Comment';

const meta: Meta<typeof Comment> = {
    title: 'Common/Comment',
    component: Comment,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Default: Story = {
    args: {
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Juan Pérez',
        rating: 4,
        date: '2024-06-20',
        comment: '¡Excelente servicio y atención! Muy recomendable.',
    },
};

export const SinComentario: Story = {
    args: {
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'María López',
        rating: 5,
        date: '2024-06-18',
        comment: '',
    },
};

export const ConComentarioLargo: Story = {
    args: {
        avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
        name: 'Carlos Gómez',
        rating: 3,
        date: '2024-06-15',
        comment:
            'El producto cumplió con lo esperado, aunque el envío tardó un poco más de lo previsto. Volvería a comprar.',
    },
};