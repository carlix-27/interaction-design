import React from "react";
import { cva, VariantProps } from "class-variance-authority";

// Definimos los estilos base y las variantes
const pillVariant = cva(
    [
        "flex",
        "w-[120px]",
        "h-[35px]",
        "p-4",
        "justify-center",
        "items-center",
        "flex-shrink-0",
        "rounded-lg", // Cambia esto a `rounded-[32px]` si no usas variables CSS
        "shadow-md", // Esto sustituye el box-shadow que describes
    ],
    {
        variants: {
            variant: {
                default: [
                    "bg-grey-50", // Usar el color de fondo gris por defecto
                ],
                selected: [
                    "bg-[#A80CE8]", // Color púrpura para el estado seleccionado
                ],
                disabled: [
                    "bg-grey-50", // Usar el mismo fondo que el estado `default`
                    "opacity-50",  // Opcional, para dar un aspecto deshabilitado
                    "cursor-not-allowed", // Cambiar el cursor en este estado
                ],
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface PillProps extends VariantProps<typeof pillVariant> {
    label: string; // Texto a mostrar dentro de la píldora
}

const Pill = ({ variant, label }: PillProps) => {
    return (
        <div className={pillVariant({ variant })}>
            {label}
        </div>
    );
};

export default Pill;

