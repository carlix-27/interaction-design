import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const pillVariant = cva(
    [
        "flex fontSize-buttonText fontFamily-buttonFont justify-center items-center flex-shrink-0 rounded-[32px] shadow-md",
    ],
    {
        variants: {
            variant: {
                default: [
                    "w-[120px] h-[35px] bg-grey-50 text-primary-500",
                    "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);",
                ],
                selected: [
                    "w-[120px] h-[35px] bg-primary-500 text-white",
                    "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);",
                ],
                disabled: [
                    "w-[120px] h-[35px] bg-grey-100 text-grey-400",
                    "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);",
                ],
            },
            size: {
                medium: ["w-[120px] h-[35px] text-base"],
            },
        },
        defaultVariants: {
            variant: "default",
            size: "medium",
        },
    },
);

export interface PillProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof pillVariant> {}

const Pill: React.FC<PillProps> = ({ variant, size, ...rest }) => {
    return <div className={pillVariant({ variant, size })} {...rest}></div>;
};

export default Pill;
