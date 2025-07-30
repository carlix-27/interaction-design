import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface FigmaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const FigmaButton: React.FC<FigmaButtonProps> = ({ 
  children, 
  className,
  ...rest 
}) => {
  return (
    <button 
      className={`
        inline-flex
        h-[60px]
        px-8 py-5
        justify-center
        items-center
        rounded-[16px]
        border-[2px] border-[#C6B6F1]
        bg-[#F9FAFB]
        text-[#A80CE8]
        text-center
        font-normal
        text-[16px]
        leading-[20px]
        box-border
        min-w-[200px]
        transition-all duration-200
        hover:bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-[#A80CE8] focus:ring-offset-2
        selection:bg-[#A80CE8] selection:text-white
        ${className || ''}
      `}
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        boxSizing: 'border-box'
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default FigmaButton; 