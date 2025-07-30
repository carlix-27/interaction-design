import React from "react";
import clsx from "clsx";
import Icon from "../../../assets/icons/Icon";

export type ThemeIconVariant =
    | "paint-brush"
    | "fire"
    | "chat"
    | "mini-chat"
    | "color-mini-chat"
    | "doble-chat";

interface ThemeIconProps {
    variant: ThemeIconVariant;
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ variant }) => {
    return (
        <div className="flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center">
            <div className="aspect-square h-[16px] w-[16px] flex-shrink-0">
                <Icon name={variant} />
            </div>
        </div>
    );
};

export default ThemeIcon;
