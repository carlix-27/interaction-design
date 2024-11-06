import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {PageControl} from "./PageControl";
import Card from "../../course/Card/Card";
import Button from "../Button";

const meta: Meta<typeof PageControl> = {
    title: 'PageControl',
    component: PageControl,
    argTypes:{
        totalDots: { control: { type: 'number', min: 1, max: 5 } },
        activePage: { control: { type: 'number', min: 0, max: 4 } },
    }
}

export default meta

type Template = StoryObj<typeof PageControl>

export const Default: Template = {
    name: 'Default',
    render: (args) => <PageControl totalDots={args.totalDots} activePage={args.activePage} />
}

