import React from "react";

interface VersusProps {
    className?: string;
}

export const Versus = ({ className }: VersusProps) => {
    const baseClasses = "flex w-14 h-14 flex-col justify-center items-center rounded-full";
    const allClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <div className={allClasses}>
      <span className="text-gray-300 text-center font-open-sans text-lg font-bold leading-7">
        V
      </span>
        </div>
    );
};