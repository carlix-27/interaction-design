import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const swordIconVariant = cva('flex items-center justify-center rounded-full', {
    variants: {
        color: {
            purple: 'bg-primary-700 text-white',
        },
    },
    defaultVariants: {
        color: 'purple',
    },
});

interface SwordIconProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
        VariantProps<typeof swordIconVariant> {}

const SwordIcon: React.FC<SwordIconProps> = ({ color, ...props }) => {
    return (
        <div
            className={swordIconVariant({ color })}
            style={{
                width: '40px', // Tamaño del círculo
                height: '40px', // Tamaño del círculo
                fontSize: '2rem', // Tamaño del ícono
                boxShadow : '0px 10px 8px rgba(0, 0, 0, 0.3)', // Sombra
            }}
            {...props}
        >
            <span role="img" aria-label="swords" style={{display: 'flex', alignItems:'center', justifyContent: 'center' +
                    ''}}>
                <img src="/Battle (1).png" alt="swords" style={{ width: '60%', height: '60%' }} />
            </span>
        </div>
    );
};

export default SwordIcon;