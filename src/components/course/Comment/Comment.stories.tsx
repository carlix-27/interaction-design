import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import Comment from "./Comment";
import {iconArray, iconList} from "../../../assets/icons/icon_list";

const meta: Meta<typeof Comment> = {
    title: 'Comment',
    component: Comment,
    argTypes: {
        authorName: { control: 'text' },
        content: { control: 'text' },
        isOnline: { control: 'boolean' },
        picture: { control: "select", options: iconArray },
    }
}

export default meta

type Template = StoryObj<typeof Comment>

export const ActiveComment: Template = {
    args: {
        authorName: "Alan Walker",
        content:'Un curso muy entretenido y muy variado en su contenido.',
        isOnline: true,
        picture:iconList.avatarManThinking
    },

    name: 'ActiveComment',
    render: (args) => <Comment authorName={args.authorName} content={args.content} isOnline={args.isOnline} picture={args.picture}></Comment>
}

