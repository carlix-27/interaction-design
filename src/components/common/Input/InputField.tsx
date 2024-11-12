import React from "react";
import Icon from "../../../assets/icons/Icon";

export interface InputFieldProps {
  label?: string;
  placeholder: string;
  leftIcon?: string; // Left icon component
  rightIcon?: string; // Right icon component
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  leftIcon,
  rightIcon,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label ? (
        <label className="text-gray-700 font-medium">{label}</label>
      ) : (
        <></>
      )}
      <div className="flex items-center px-3 py-2 bg-gray-50 rounded-lg border border-gray-300">
        {leftIcon ? <Icon name={leftIcon} /> : <></>}
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 pl-2"
        />
        {rightIcon ? <Icon name={rightIcon} /> : <></>}
      </div>
    </div>
  );
};

export default InputField;
