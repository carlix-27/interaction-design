import React from "react";
import Icon from "../../../assets/icons/Icon";

interface ListProps {
  title: string;
  details: string;
  icon?: string;
}

const List: React.FC<ListProps> = ({ title, details, icon }) => {
    console.log(icon)
  return (
    <div className="flex items-center justify-between w-[350px] h-[56px] py-0 px-4  self-stretch rounded-[15px] bg-grey-50 shadow-md">
      <div className="flex items-center">
        {icon && (
          <div className="icon mr-4 rounded-l-lg text-primary-500">
            <Icon name={icon} />
          </div>
        )}
        <span className="text-gray-900 font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default List;
