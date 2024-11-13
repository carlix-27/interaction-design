import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Icon from "../../../assets/icons/Icon";

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
            className={`${swordIconVariant({ color })} w-[40px] h-[40px] text-2xl shadow-[0px_10px_8px_rgba(0,_0,_0,_0.3)]`}
            {...props}
        >
            <span className="flex items-center justify-center w-full h-full">
                <Icon name='battle'></Icon>
            </span>
        </div>
    );
};

export default SwordIcon;
