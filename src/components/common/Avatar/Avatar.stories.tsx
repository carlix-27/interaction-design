import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Avatar from '../Avatar/avatar';
import {iconArray, iconList} from "../../../assets/icons/icon_list";

const meta: Meta<typeof Avatar> = {
    title: 'Common/Avatar',
    component: Avatar,
    argTypes:{
        iconName: {control: "select", options: iconArray},
    }
}

export default meta


const sizeClasses = {
    xs: 'w-32 h-32',
    sm: 'w-40 h-40',
    md: 'w-48 h-48',
    lg: 'w-56 h-56',
    xl: 'w-64 h-64',
    xxl: 'w-80 h-80'
}



type AvatarStories = StoryObj<typeof Avatar>;


// todo: como desactivo la opcion a elegir del size? no tiene sentido poder elegirla.

export const AllAvatars: AvatarStories = {
    args: {
        iconName: iconList.avatarManThinking,
    },
    name: 'AllAvatars',
    render: (args) => {
        return (
                <div className="flex flex-row gap-6">
                    {Object.keys(sizeClasses).reverse().map((size, index) => (
                        <div
                            key={size}
                            className="flex items-center justify-center"
                            style={{marginTop: `${index * 10}px`}} // Esto hace que los avatares vayan descendiendo
                        >
                            <Avatar size={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'} iconName={args.iconName}/>
                        </div>
                    ))}
                </div>
        );
    }
};

