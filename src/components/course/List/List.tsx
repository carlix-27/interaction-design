import React from 'react';
import Icon from "../../../assets/icons/Icon";

interface ListProps {
    title: string;
    details: string;
    show_details?: boolean;
    type?: 'list' | 'drop-down'
}



const List: React.FC<ListProps> = ({title, details, show_details, type}) => {
    return (
        <div className="flex items-center justify-between h-14 py-1 px-0  self-stretch rounded-[15px] bg-grey-50 shadow-md">
            <div className="flex items-center">
                {type === 'list' && (
                    <div className="icon mr-4 rounded-l-lg text-primary-500">
                        <Icon name={'computer'}></Icon>
                    </div>
                )}
                <span className="text-gray-900 font-semibold">{title}</span>
            </div>
            <div className="flex items-center text-gray-500 font-medium">
                {show_details && (
                    <div className="flex items-center text-gray-500 font-medium">
                        <span className="flex items-center gap-1">
                            {details}
                            <Icon name={'array-down'}></Icon>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default List;