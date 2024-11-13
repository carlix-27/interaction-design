import React from 'react';
import Icon from "../../../assets/icons/Icon";


const sizeClasses = {
    xs: 'w-[32px] h-[32px]',
    sm: 'w-[40px] h-[40px]',
    md: 'w-[48px] h-[48px]',
    lg: 'w-[56px] h-[56px]',
    xl: 'w-[64px] h-[64px]',
    xxl: 'w-[80px h-[80px]'
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