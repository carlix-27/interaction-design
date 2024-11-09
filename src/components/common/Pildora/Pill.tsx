import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from "class-variance-authority";


const pillVariant = cva(['flex font-buttonFont font-buttonFont justify-center items-center flex-shrink-0 rounded-[32px] shadow-md'], {
    variants:{
        variant:{
            default:[
                "w-32 h-9 bg-grey-50 text-primary-500",
                "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);"
            ],
            selected: [
                "w-32 h-9 bg-primary-500 text-white",
                "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);"
            ],
            disabled:[
                "w-32 h-9 bg-grey-100 text-grey-400",
                "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);"
            ]
        },
        size:{
            medium: ["w-32 h-9 text-base"],
        }
    },
    defaultVariants:{
        variant: 'default',
        size:'medium'
    }
})

export interface PillProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof pillVariant> {}

const Pill: React.FC<PillProps> = ({ variant, size, ...rest }) => {
    return <div className={pillVariant({ variant, size })} {...rest}></div>;
};

export default Pill;