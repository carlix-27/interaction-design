import React, { useState } from 'react';
import { Buscar } from './Buscar';

export default {
    title: 'Componentes/Buscar',
    component: Buscar,
};

export const Default = () => {
    const [valor, setValor] = useState('');
    return (
        <Buscar
            value={valor}
            onChange={setValor}
        />
    );
};

export const ConValor = () => {
    const [valor, setValor] = useState('React');
    return (
        <Buscar
            value={valor}
            onChange={setValor}
        />
    );
};