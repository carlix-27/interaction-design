import React from "react";
import Icon from "../../../assets/icons/Icon";

const SwordIcon: React.FC = () => {
    return (
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-primary-700 p-2 shadow-lg">
            <Icon name="battle"></Icon>
        </div>
    );
};

export default SwordIcon;
