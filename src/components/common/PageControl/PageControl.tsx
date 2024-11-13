import React from "react";
import { cva } from "class-variance-authority";

interface PageControlProps {
  totalDots: number;
  activePage: number;
}

const dotStyles = cva(
  ["w-3 h-3 rounded-full mx-1.5 transition-color duration-300"],
  {
    variants: {
      active: {
        true: "bg-primary-500",
        false: "bg-primary-50",
      },
    },
  },
);

export const PageControl: React.FC<PageControlProps> = ({
  totalDots,
  activePage,
}) => {
  return (
    <div className="flex items-center justify-center bg-grey-50 rounded-full w-fit h-[24-px] px-[12px] py-[8px] ">
      {Array.from({ length: totalDots }).map((_, index) =>(
        <span
          key={index}
          className={dotStyles({ active: index === activePage })}
        />
      ))}
    </div>
  );
};
