import { Meta, StoryObj } from "@storybook/react";
import User from "./User";

const meta: Meta<typeof User> = {
    title: "VisualizeContent/User",
    component: User,
    argTypes: {
        rating: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
        date: { control: "text" },
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
type Story = StoryObj<typeof User>;

export const Default: Story = {
    args: {
        name: "Valentina Moyano",
        image: "/profile-picture-1.png",
        rating: 4.5,
        date: "26/3/22",
    },
};
