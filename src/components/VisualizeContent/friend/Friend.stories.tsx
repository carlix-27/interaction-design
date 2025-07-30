import { Meta, StoryObj } from "@storybook/react";
import Friend from "./Friend";

const meta: Meta<typeof Friend> = {
    title: "VisualizeContent/Friend",
    component: Friend,
    //tags: ["autodocs"],
    argTypes: {
        name: { control: "text" },
        description: { control: "text" },
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
type Story = StoryObj<typeof Friend>;

export const Default: Story = {
    args: {
        name: "Valentina Moyano",
        description: "Se unió recientemente",
        image: "/profile-picture-1.png",
    },
};
