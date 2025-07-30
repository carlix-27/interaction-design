import React from "react";
import Icon from "../../../assets/icons/Icon";
import * as child_process from "node:child_process";

export interface InputFieldProps {
    label?: string;
    placeholder: string;
    leftIcon?: string; // Left icon component
    rightIcon?: string; // Right icon component
    onChange: (value: string) => void;
    children?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    leftIcon,
    rightIcon,
    onChange,
    children,
}) => {
    return (
        <div className="flex flex-col space-y-1">
            {label ? (
                <label className="font-medium text-gray-700">{label}</label>
            ) : (
                <></>
            )}
            <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 focus-within:border-primary-500 focus-within:bg-primary-50">
                {leftIcon ? <Icon name={leftIcon} /> : <></>}
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    className="flex-grow bg-transparent pl-2 text-gray-700 placeholder-gray-500 outline-none focus:bg-primary-50"
                />
                {rightIcon ? <Icon name={rightIcon} /> : <></>}
            </div>
        </div>
    );
};

export default InputField;
