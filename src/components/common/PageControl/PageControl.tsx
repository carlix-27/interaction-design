import React from "react";
import {cva, VariantProps} from "class-variance-authority";

// todo: Como englobo los dots en la estructura que tienen?

interface PageControlProps{
    totalDots: number;
    activePage: number;
}

const dotStyles = cva(["w-4 h-4 rounded-full mx-1 transition-color duration-300"], {
    variants:{
        active:{
            true: 'bg-primary-500',
            false: 'bg-primary-50',
        }
    }
});

// fixme: considero que hay algo aca en el return que no es del todo correcto.
export const PageControl: React.FC<PageControlProps> = ({ totalDots, activePage}) =>{
    return (
        <div className="flex items-center justify-center bg-grey-50 py-2 px-4 rounded-full shadow-md">
            {Array.from({ length: totalDots }).map((_, index) => (
                <span
                    key={index}
                    className={dotStyles({ active: index === activePage })}
                />
            ))}
        </div>
    );
}