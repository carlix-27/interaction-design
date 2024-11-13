import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Avatar from '../Avatar/avatar';
import {iconArray, iconList} from "../../../assets/icons/icon_list";

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes:{
        iconName: {control: "select", options: iconArray},
    }
}

export default meta



const sizeClasses = {
    xs: 'w-[32px] h-[32px]',
    sm: 'w-[40px] h-[40px]',
    md: 'w-[48px] h-[48px]',
    lg: 'w-[56px] h-[56px]',
    xl: 'w-[64px] h-[64px]',
    xxl: 'w-[80px h-[80px]'
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

