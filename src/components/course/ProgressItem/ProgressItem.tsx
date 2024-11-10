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
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg w-full">
      <div className="flex items-center space-x-2">
        <Icon name={"medal-" + medalType} />
        <span className="text-gray-800 font-medium">{name}</span>
      </div>
      <span className="text-gray-800 font-medium">{percentage}%</span>
    </div>
  );
};

export default ProgressItem;
