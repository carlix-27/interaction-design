import React from "react";
import Icon from "../../../assets/icons/Icon";

export interface NavbarTopProps {
    courseName: string;
    hasNotifications?: boolean;
    onBackClick?: () => void;
    onNotificationsClick?: () => void;
}

const NavbarTop: React.FC<NavbarTopProps> = ({
    courseName,
    hasNotifications = false,
    onBackClick,
    onNotificationsClick,
}) => {
    return (
        <div className="inline-flex h-fit w-full items-center justify-center gap-x-12 pt-10">
            {/* Icono de regresar */}
            <div
                className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-gray-50 p-[3px_5px_3px_3px] shadow-custom-figma"
                onClick={onBackClick}
            >
                <Icon name="arrow-left" />
            </div>

            {/* Nombre del curso */}
            <div className="flex h-[37px] w-[166px] flex-col items-center justify-center rounded-full bg-gray-50 shadow-custom-figma">
                <p className="font-roboto text-center text-[16px] font-medium leading-[24px] text-gray-900">
                    {courseName}
                </p>
            </div>

            {/* Icono de notificaciones */}
            <div
                className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-gray-50 p-[3px_2px_3px_4px] shadow-custom-figma"
                onClick={onNotificationsClick}
            >
                <Icon name={hasNotifications ? "bell-notification" : "bell"} />
            </div>
        </div>
    );
};

export default NavbarTop;
