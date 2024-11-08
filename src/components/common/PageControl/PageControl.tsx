import React from "react";
import { cva } from "class-variance-authority";


interface PageControlProps{
    totalDots: number;
    activePage: number;
}

const dotStyles = cva(["w-4 h-4 rounded-full mx-1.5 transition-color duration-300"], {
    variants:{
        active:{
            true: 'bg-primary-500',
            false: 'bg-primary-50',
        }
    }
});

export const PageControl: React.FC<PageControlProps> = ({ totalDots, activePage}) =>{
    return (
        <div className="h-8 w-40 flex items-center justify-center bg-grey-50 py-2 px-4 rounded-full">
            {Array.from({ length: totalDots }).map((_, index) => (
                <span
                    key={index}
                    className={dotStyles({ active: index === activePage })}
                />
            ))}
        </div>
    );
}