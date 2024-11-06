import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import Comment from "./Comment";

const meta: Meta<typeof Comment> = {
    title: 'Comment',
    component: Comment,
    argTypes: {
        authorName: { control: 'text' },
        content: { control: 'text' },
        authorIcon: { control: 'text' },
        isOnline: { control: 'boolean' },
    }
}

export default meta

type Template = StoryObj<typeof Comment>

export const DefaultComment: Template = {
    name: 'DefaultComment',
    render: (args) => <Comment authorName={args.authorName} content={args.content} authorIcon={args.authorIcon} isOnline={args.isOnline}></Comment>
}

