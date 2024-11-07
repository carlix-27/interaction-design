import React from 'react';

interface ButtonPlusProps {
    onClick?: () => void;
}

const ButtonPlus: React.FC<ButtonPlusProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center w-8 h-8 bg-[#a035f0] rounded-lg shadow-md hover:bg-[#8b2acb] focus:outline-none"
            aria-label="Add"
        >
            <div className="h-6 w-6 text-white text-xl font-bold leading-none">+</div>
        </button>
    );
};

export default ButtonPlus;
