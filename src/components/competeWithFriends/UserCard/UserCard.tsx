import React, { HTMLAttributes } from "react";
import SwordIcon from "../SwordIcon/SwordIcon";
import Icon from "../../../assets/icons/Icon";

interface UserCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
    username: string;
    isWaiting?: boolean; // Nuevo prop para controlar el estado de espera
}

const UserCard: React.FC<UserCardProps> = ({ username, isWaiting = false }) => {
    return (
        <div
            className={`flex p-2 ${isWaiting ? "bg-grey-50 opacity-40" : "bg-grey-50"} h-[60px] w-[340px] rounded-[16px] shadow-md drop-shadow-lg`}
        >
            <div className="mr-4 flex items-center justify-center">
                <Icon name="woman_avatar" />
            </div>
            <div className="font-roboto flex flex-1 flex-col items-start justify-center text-center text-[14px] text-lg font-semibold text-gray-900">
                {username}
            </div>
            <div className="mr-1 flex items-center">
                <SwordIcon />
            </div>
        </div>
    );
};

export default UserCard;
