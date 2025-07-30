import React from "react";
import Icon from "../../../assets/icons/Icon";

interface ListProps {
    title: string;
    details: string;
    icon?: string;
}

const List: React.FC<ListProps> = ({ title, details, icon }) => {
    console.log(icon);
    return (
        <div className="flex h-[56px] items-center justify-between self-stretch rounded-[15px] bg-grey-50 px-4 py-0 shadow-md">
            <div className="flex items-center">
                {icon && (
                    <div className="icon mr-4 rounded-l-lg text-primary-500">
                        <Icon name={icon} />
                    </div>
                )}
                <span className="fontFamily-subtitleFont font-semibold text-gray-900">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default List;
