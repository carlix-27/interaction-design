import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { iconArray, iconList } from "../../../assets/icons/icon_list";
import User from "./user";

const meta: Meta<typeof User> = {
    title: "Components/User",
    component: User,
    argTypes: {
        iconName: { control: "select", options: iconArray },
        isOnline: { control: "boolean" },
        name: {
            control: "text",
            defaultValue: "User Name",
        },
    },
};

export default meta;

type UserStories = StoryObj<typeof User>;

export const UserAvatar: UserStories = {
    args: {
        iconName: iconList.avatarManThinking,
        isOnline: true,
        name: "User",
    },
    name: "AllAvatars",
    render: args => {
        return (
            <div className="flex flex-row gap-10">
                <User
                    iconName={args.iconName}
                    isOnline={args.isOnline}
                    name={args.name}
                ></User>
            </div>
        );
    },
};
