import React from 'react';
import Icon from "../../../assets/icons/Icon";


const sizeClasses = {
    xs: 'w-32 h-32',
    sm: 'w-40 h-40',
    md: 'w-48 h-48',
    lg: 'w-56 h-56',
    xl: 'w-64 h-64',
    xxl: 'w-80 h-80'
}


interface AvatarProps {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    iconName: string;
}


const Avatar: React.FC<AvatarProps> = ({size , iconName}) => {
    return (
        <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
                <Icon name={iconName} ></Icon>
        </div>

    )};

export default Avatar;