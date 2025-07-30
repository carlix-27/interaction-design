// NavbarBottom.stories.tsx
import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";
import NavbarBottom, {BottomNavBarProps} from "./NavbarBottom";

const meta: Meta<typeof NavbarBottom> = {
    title: "Components/NavbarBottom",
    component: NavbarBottom,
    argTypes: {
        activeButton: {
            control: {
                type: "select",
                options: ["home", "list", "user"],
            },
        },
    },
};

export default meta;

type Story = StoryObj<BottomNavBarProps>;

export const HomeActive: Story = {
    args: {
        activeButton: "home",
    },
    render: args => {
        const [activeButton, setActiveButton] = useState(args.activeButton);
        return (
            <NavbarBottom
                {...args}
                activeButton={activeButton}
                onButtonClick={setActiveButton}
            />
        );
    },
};

export const ListActive: Story = {
    args: {
        activeButton: "list",
    },
    render: args => {
        const [activeButton, setActiveButton] = useState(args.activeButton);
        return (
            <NavbarBottom
                {...args}
                activeButton={activeButton}
                onButtonClick={setActiveButton}
            />
        );
    },
};

export const UserActive: Story = {
    args: {
        activeButton: "user",
    },
    render: args => {
        const [activeButton, setActiveButton] = useState(args.activeButton);
        return (
            <NavbarBottom
                {...args}
                activeButton={activeButton}
                onButtonClick={setActiveButton}
            />
        );
    },
};
