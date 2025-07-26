import React from 'react';
import Icon from '../../../assets/icons/Icon';

type MensajeProps = {
    autor: string;
    fecha: string;
    hora: string;
    texto: string;
    estaOnline?: boolean;
};

export const Mensaje: React.FC<MensajeProps> = ({
                                                    autor,
                                                    fecha,
                                                    hora,
                                                    texto,
                                                    estaOnline = false,
                                                }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{ position: 'relative', width: 40, height: 40 }}>
                <Icon
                    name="man_thinking"
                    style={{ borderRadius: '50%' }}
                />
                {estaOnline && (
                    <span
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 10,
                            height: 10,
                            backgroundColor: '#00C853',
                            border: '2px solid white',
                            borderRadius: '50%',
                        }}
                    />
                )}
            </div>
            <div>
                <div style={{ fontSize: 14 }}>
                    <strong>{autor}</strong>{' '}
                    <span style={{ color: '#999' }}>
                        {fecha}, {hora}
                    </span>
                </div>
                <div style={{ marginTop: 4 }}>{texto}</div>
            </div>
        </div>
    );
};