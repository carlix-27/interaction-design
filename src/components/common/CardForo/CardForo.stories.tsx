import React from 'react';
import { CardForo } from './CardForo';

export default {
    title: 'Componentes/CardForo',
    component: CardForo,
};

export const Default = () => (
    <CardForo title="Título del foro" onClick={() => alert('Card clickeado')} />
);

export const SinAcción = () => (
    <CardForo title="Solo título, sin acción" />
);