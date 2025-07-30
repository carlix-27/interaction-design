import React from "react";
import Icon from "../../../assets/icons/Icon";

interface TopBarIconProps {
    iconName: "arrow-back-rounded" | "more-2-fill" | "search-icon";
}

const TopBarIcon: React.FC<TopBarIconProps> = ({ iconName }) => {
    return (
        <div className="flex items-center px-[8px] py-[12px]">
            <Icon name={iconName} />
        </div>
    );
};

export default TopBarIcon;
