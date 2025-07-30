import React from "react";

interface AnswerOptionButtonProps {
    text: string;
    variant?: "default" | "secondary";
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}

export const AnswerOptionButton = ({
                                       text,
                                       variant = "default",
                                       selected = false,
                                       onClick,
                                       className
                                   }: AnswerOptionButtonProps) => {
    const isDefault = variant === "default" || selected;

    const baseClasses = "w-full max-w-sm px-6 py-4 rounded-full border-2 transition-all duration-200 hover:scale-105";
    const variantClasses = isDefault
        ? "bg-purple-600 border-purple-600 text-white"
        : "bg-gray-100 border-gray-300 text-gray-700 hover:border-purple-400";
    const allClasses = className
        ? `${baseClasses} ${variantClasses} ${className}`
        : `${baseClasses} ${variantClasses}`;

    return (
        <button
            onClick={onClick}
            className={allClasses}
        >
      <span className="text-center font-roboto text-base font-medium leading-6">
        {text}
      </span>
        </button>
    );
};