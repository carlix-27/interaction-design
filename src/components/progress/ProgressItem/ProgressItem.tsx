import React from "react";
import Icon from "../../../assets/icons/Icon";

export interface ProgressItemProps {
    medalType: "gold" | "silver" | "bronze" | "default"; // Options for medal types
    name: string; // Text label on the left side
    percentage: number; // Percentage displayed on the right side
}

const ProgressItem: React.FC<ProgressItemProps> = ({
    medalType,
    name,
    percentage,
}) => {
    return (
        <div className="flex h-[42px] w-[342px] items-center justify-between rounded-[16px] bg-gray-100 p-4">
            <div className="flex items-center space-x-2">
                <Icon name={"medal-" + medalType} />
                <span className="font-medium text-gray-800">{name}</span>
            </div>
            <span className="font-medium text-gray-800">{percentage}%</span>
        </div>
    );
};

export default ProgressItem;
