import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import List from "./List";
import {iconArray, iconList} from "../../../assets/icons/icon_list";


const meta: Meta<typeof List> = {
    title: "List",
    component: List,
    argTypes: {
        icon: { control: "select", options: iconArray },
    }
}

export default meta

type ListStories = StoryObj<typeof List>;

export const DropDown: ListStories = {
    args: {
        title: 'DropDown',
        details: '100%',
        show_details: true,
        icon:iconList.computer
    },
    name: 'DropDown',
    render: (args) => <List title={args.title} details={args.details} show_details={args.show_details} type='drop-down' icon={args.icon}></List>
}

export const RequirementList: ListStories = {
    args: {
        title: 'RequirementList',
        details: 'Detalles',
        show_details: false,
        icon:iconList.computer
    },
    name: 'RequirementList',
    render: (args) => <List title={args.title} details={args.details} show_details={args.show_details} type='list' icon={args.icon}></List>
}

