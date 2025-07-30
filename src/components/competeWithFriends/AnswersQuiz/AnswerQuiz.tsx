import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const answerQuizVariant = cva(
    [
        "flex justify-center items-center gap-3 flex-shrink-0",
        "w-[300px] h-[48px] p-[8px_0]",
        "text-white text-center",
        "rounded-[24px] shadow-md",
        "font-roboto text-[16px] font-medium leading-[24px]",
    ],
    {
        variants: {
            variant: {
                default: "bg-[#CB6DF1]", // Light purple background
                press: "bg-[#860ABA]", // Dark purple background
            },
        },
        defaultVariants: {
            variant: "default", // Default to dark purple
        },
    },
);

export interface AnswerQuizProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof answerQuizVariant> {}

const AnswerQuiz = ({ variant, children, ...rest }: AnswerQuizProps) => {
    return (
        <button className={answerQuizVariant({ variant })} {...rest}>
            {children}
        </button>
    );
};

export default AnswerQuiz;
