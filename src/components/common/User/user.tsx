import React from "react";
import Icon from "../../../assets/icons/Icon";

interface UserProps {
    iconName: string;
    name?: string;
    isOnline?: boolean;
}

const User: React.FC<UserProps> = ({ iconName, name, isOnline }) => {
    return (
        <div className={"relative flex flex-col items-center justify-center"}>
            <div className="relative">
                <Icon name={iconName}></Icon>
                {isOnline && (
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
                )}
            </div>
            {name && (
                <span
                    className={
                        "fontFamily-bodyFont fontSize-caption1 mt-2 whitespace-nowrap text-sm text-gray-900"
                    }
                >
                    {name}
                </span>
            )}
        </div>
    );
};

export default User;
