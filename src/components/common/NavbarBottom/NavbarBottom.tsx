// NavbarBottom.tsx
import React from "react";
import Icon from "../../../assets/icons/Icon";

export interface BottomNavBarProps {
    activeButton: "home" | "list" | "user";
    onButtonClick: (button: "home" | "list" | "user") => void;
}

const NavbarBottom: React.FC<BottomNavBarProps> = ({
    activeButton,
    onButtonClick,
}) => {
    const buttonClasses =
        "flex flex-col items-center flex-1 justify-center relative";

    return (
        <div className="fixed bottom-0 z-50 flex h-[70px] w-[390px] items-center justify-center bg-[#F9FAFB]">
            <div
                className={`${buttonClasses} h-full`}
                onClick={() => onButtonClick("home")}
            >
                {activeButton === "home" && (
                    <div className="absolute top-0 h-[4px] w-full bg-primary-500" />
                )}
                <div className="flex h-full w-[78px] items-center justify-center">
                    <Icon name="house-solid" />
                </div>
            </div>

            <div
                className={`${buttonClasses} h-full`}
                onClick={() => onButtonClick("list")}
            >
                {activeButton === "list" && (
                    <div className="absolute top-0 h-[4px] w-full bg-primary-500" />
                )}
                <div className="flex h-full w-[78px] items-center justify-center">
                    <Icon name="list" />
                </div>
            </div>

            <div
                className={`${buttonClasses} h-full`}
                onClick={() => onButtonClick("user")}
            >
                {activeButton === "user" && (
                    <div className="absolute top-0 h-[4px] w-full bg-primary-500" />
                )}
                <div className="flex h-full w-[78px] items-center justify-center">
                    <Icon name="user" />
                </div>
            </div>
        </div>
    );
};

export default NavbarBottom;
