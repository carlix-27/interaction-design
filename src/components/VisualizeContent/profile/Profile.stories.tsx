import { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
    title: "VisualizeContent/Profile",
    component: Profile,
    argTypes: {
        size: {
            control: { type: "inline-radio" },
            options: ["sm", "md"],
        },
        image: {
            control: { type: "select" },
            options: [
                "/profile-picture-1.png",
                "/profile-picture-2.png",
                "/profile-picture-3.png",
                "/profile-picture-4.png",
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
    args: {
        image: "/profile-picture-1.png",
        size: "md",
    },
};
