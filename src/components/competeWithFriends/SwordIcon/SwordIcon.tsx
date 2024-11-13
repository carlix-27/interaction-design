import React from 'react';
import Icon from "../../../assets/icons/Icon";




const SwordIcon: React.FC = () => {
    return (
            <div className="flex items-center justify-center p-2 w-[32px] h-[32px] rounded-full bg-primary-700 shadow-lg">
                <Icon name='battle'></Icon>
            </div>
    );
};

export default SwordIcon;
