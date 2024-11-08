import React, {ReactNode, ButtonHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";


const buttonVariant = cva(['w-full sm:w-fit', 'rounded-lg'], {
    variants:{
        variant:{
            fulfilled:[
                'bg-primary-500 text-grey-50',
            ],
            focus: [
                'focus: bg-primary-800 text-grey-50',
            ],
            outlined:[
                'bg-grey-50 text-primary-500 border border-grey-50',
            ],
            active: [
                'active: bg-primary-100 text-primary-500 border border-primary-100',
            ],
            ghost:[
                'bg-transparent text-primary-500',
            ],
            disabled:[
                'disabled: bg-grey-50 text-grey-400 border border-grey-50',
            ]
        },
        size:{
            medium:['px-8 py-1 drop-shadow-md rounded-2xl text-buttonText font-buttonFont'],
        }
    },
    defaultVariants:{
        variant: 'fulfilled',
        size:'medium'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {}

const Button = ({variant, size, ...rest}:ButtonProps) => {
    return <button className={buttonVariant({size, variant})} {...rest}></button>
}

export default Button;