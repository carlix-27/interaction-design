import React from 'react';
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
        <div className="inline-flex items-center justify-center w-full h-fit gap-x-12 pt-10">
            {/* Icono de regresar */}
            <div
                className="flex w-[37px] h-[37px] p-[3px_5px_3px_3px] justify-center items-center  shadow-custom-figma rounded-full bg-gray-50"
                onClick={onBackClick}
            >
                <Icon name="arrow-left" />
            </div>

            {/* Nombre del curso */}
            <div className="flex flex-col items-center justify-center w-[166px] h-[37px] shadow-custom-figma rounded-full bg-gray-50">
                <p className="text-center font-roboto font-medium text-[16px] leading-[24px] text-gray-900">
                    {courseName}
                </p>
            </div>

            {/* Icono de notificaciones */}
            <div
                className="flex w-[37px] h-[37px] p-[3px_2px_3px_4px] justify-center items-center  shadow-custom-figma rounded-full bg-gray-50"
                onClick={onNotificationsClick}
            >
                <Icon name={hasNotifications ? "bell-notification" : "bell"} />
            </div>
        </div>
    );
};

export default NavbarTop;
