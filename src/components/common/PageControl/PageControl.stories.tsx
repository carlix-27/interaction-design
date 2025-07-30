import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PageControl } from "./PageControl";

const meta: Meta<typeof PageControl> = {
    title: "Components/PageControl",
    component: PageControl,
    argTypes: {
        totalDots: { control: { type: "number", min: 2, max: 4 } },
        activePage: { control: { type: "number", min: 0, max: 3 } },
    },
};

export default meta;

type Template = StoryObj<typeof PageControl>;

export const Default: Template = {
    name: "Default",
    render: args => (
        <PageControl totalDots={args.totalDots} activePage={args.activePage} />
    ),
};
