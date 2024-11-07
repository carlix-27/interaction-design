import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import List from "./List";


const meta: Meta<typeof List> = {
    title: "List",
    component: List,
}

export default meta

type ListStories = StoryObj<typeof List>;

export const DropDown: ListStories = {
    args: {
        title: 'DropDown',
        details: '100%',
        show_details: true,
    },
    name: 'DropDown',
    render: (args) => <List title={args.title} details={args.details} show_details={args.show_details}></List>
}

export const RequirementList: ListStories = {
    args: {
        title: 'RequirementList',
        details: 'Detalles',
        show_details: false,
    },
    name: 'RequirementList',
    render: (args) => <List title={args.title} details={args.details} show_details={args.show_details}></List>
}