import React from 'react';
import Icon from "../../../assets/icons/Icon";

interface ListProps {
    title: string;
    details: string;
    show_details?: boolean;
}



const List: React.FC<ListProps> = ({title, details, show_details}) => {
    return (
        <div className="flex items-center justify-between h-14 py-1 px-0  self-stretch rounded-[15px] bg-grey-50 shadow-md">
            <div className="flex items-center">
                <div className="icon mr-4 text-purple-500"></div>
                <span className="text-gray-900 font-semibold">{title}</span>
            </div>
            <div className="flex items-center text-gray-500 font-medium">
                {show_details && (
                    <div className="flex items-center text-gray-500 font-medium">
                        <span>{details}</span>
                        <Icon name={'details'}></Icon>
                    </div>
                )}
            </div>
        </div>
    );
};

export default List;