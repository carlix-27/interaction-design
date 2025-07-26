import React from 'react';
import Icon from '../../../assets/icons/Icon';

export const CardForo: React.FC = () => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '294px',
                minHeight: '28px',
                height: 'auto',
                padding: '16px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxSizing: 'border-box',
            }}
        >
            <span style={{ fontSize: '16px', fontWeight: 500 }}>Unidad 1</span>
            <Icon name="Nav-arrow-right" />
        </div>
    );
};