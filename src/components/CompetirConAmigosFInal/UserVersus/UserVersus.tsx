import React from "react";

interface User {
    name: string;
    avatar: string;
}

interface UsersVersusProps {
    user1: User;
    user2: User;
    className?: string;
}

export const UsersVersus = ({ user1, user2, className }: UsersVersusProps) => {
    const baseClasses = "flex w-full max-w-md p-4 flex-col items-start gap-2 bg-gray-50 rounded-lg";
    const allClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <div className={allClasses}>
            <div className="w-full h-14 relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src={user1.avatar}
                        alt={`${user1.name} avatar`}
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex flex-col justify-center">
            <span className="text-gray-700 font-roboto text-base font-normal leading-6">
              {user1.name}
            </span>
                    </div>
                </div>

                <div className="flex w-14 h-14 flex-col justify-center items-center rounded-full flex-shrink-0">
          <span className="text-gray-300 text-center font-open-sans text-lg font-bold leading-7">
            V
          </span>
                </div>

                <div className="flex items-center gap-4 flex-row-reverse">
                    <img
                        src={user2.avatar}
                        alt={`${user2.name} avatar`}
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex flex-col justify-center">
            <span className="text-gray-700 font-roboto text-base font-normal leading-6 text-right">
              {user2.name}
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};