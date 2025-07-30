import React from "react";
import Icon from "../../../assets/icons/Icon";

interface ButtonPlusProps {
    onClick?: () => void;
}

const ButtonPlus: React.FC<ButtonPlusProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#a035f0] shadow-md hover:bg-[#8b2acb] focus:outline-none"
            aria-label="Add"
        >
            <Icon name="plus" />
        </button>
    );
};

export default ButtonPlus;
