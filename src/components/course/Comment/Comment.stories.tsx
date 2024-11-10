import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import Comment from "./Comment";

const meta: Meta<typeof Comment> = {
    title: 'Comment',
    component: Comment,
    argTypes: {
        authorName: { control: 'text' },
        content: { control: 'text' },
        isOnline: { control: 'boolean' },
    }
}

export default meta

type Template = StoryObj<typeof Comment>

export const ActiveComment: Template = {
    args: {
        authorName: "Alan Walker",
        content:'Un curso muy entretenido y muy variado en su contenido.',
        isOnline: true
    },

    name: 'ActiveComment',
    render: (args) => <Comment authorName={args.authorName} content={args.content} isOnline={args.isOnline}></Comment>
}

