import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import List from "./List";
import { iconArray, iconList } from "../../../assets/icons/icon_list";

const meta: Meta<typeof List> = {
    title: "Course/List",
    component: List,
    argTypes: {
        icon: { control: "select", options: iconArray },
    },
};

export default meta;

type ListStories = StoryObj<typeof List>;

export const RequirementList: ListStories = {
    args: {
        title: "Computadora",
        details: "Detalles",
        icon: iconList.computer,
    },
    name: "RequirementList",
    render: args => (
        <List title={args.title} details={args.details} icon={args.icon}></List>
    ),
};
