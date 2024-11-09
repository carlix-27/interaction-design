import React, { HTMLAttributes, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

// Variantes de estilos para el contenedor del input
const inputVariant = cva(
    [
        'flex flex-col gap-2', // Flex contenedor general
        'w-[350px] h-[108px]', // Tamaño base del contenedor
        'bg-white', // Fondo por defecto
    ],
    {
        variants: {
            size: {
                medium: 'w-[300px] h-[90px]',
                large: 'w-[400px] h-[120px]',
            },
            filled: {
                true: 'bg-gray-100 border-gray-300', // Cuando el input es "filled"
                false: 'bg-white border-gray-400', // Cuando el input no está "filled"
            },
            focus: {
                true: 'border-blue-500', // Cuando está en foco
                false: 'border-gray-400', // Cuando no está en foco
            },
            icon: {
                true: 'pl-10', // Cuando hay un ícono a la izquierda (espaciado extra)
                false: '',
            }
        },
        defaultVariants: {
            size: 'medium',
            filled: false,
            focus: false,
            icon: false
        }
    }
);

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
    placeholder: string;
    iconLeft?: React.ReactNode; // Icono a la izquierda (opcional)
    iconRight?: React.ReactNode; // Icono a la derecha (opcional)
    helperText?: string; // Texto de ayuda
    isFocused?: boolean; // Estado de foco
    size?: 'medium' | 'large'; // Tamaño del input
    filled?: boolean; // Si es el estilo "filled" o no
}

const Input: React.FC<InputProps> = ({
                                         placeholder,
                                         iconLeft,
                                         iconRight,
                                         helperText,
                                         isFocused,
                                         size,
                                         filled,
                                         ...rest
                                     }) => {
    const [focused, setFocused] = useState(isFocused || false);

    return (
        <div className={inputVariant({ size, filled, focus: focused, icon: iconLeft != null })} {...rest}>
            {/* Label */}
            <label className="flex items-center self-stretch">
                <span className="text-black text-base font-semibold">Label</span>
            </label>
            {/* Contenedor del input */}
            <div className="flex items-center gap-2 rounded-lg">
                {iconLeft && <div className="icon-left">{iconLeft}</div>} {/* Ícono a la izquierda */}
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full p-3 rounded-lg text-gray-500 placeholder-gray-500 outline-none"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {iconRight && <div className="icon-right">{iconRight}</div>} {/* Ícono a la derecha */}
            </div>
            {/* Texto de ayuda */}
            {helperText && (
                <div className="text-sm text-gray-500 mt-1">{helperText}</div>
            )}
        </div>
    );
};

export default Input;
