import React from 'react';
import Icon from "../../../assets/icons/Icon";



interface UserProps {
    iconName: string;
    name?: string;
    isOnline?: boolean;
}



const User: React.FC<UserProps> = ({iconName, name, isOnline}) => {
    return (
        <div className={"relative flex flex-col items-center justify-center"}>
            <div className="relative">
                <Icon name={iconName} ></Icon>
                {isOnline && (
                    <span
                        className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                )}
            </div>
            {name && (
                <span className={"mt-2 text-sm fontFamily-bodyFont fontSize-caption1 text-gray-900 whitespace-nowrap"}>
                    {name}
                </span>
            )}
        </div>

    )};

export default User;