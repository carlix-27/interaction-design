import { Meta, StoryObj } from "@storybook/react";
import UserCard from "./UserCard";

const meta: Meta<typeof UserCard> = {
    title: "CompeteWithFriends/UserCard",
    component: UserCard,
    argTypes: {
        username: {
            control: "text",
            defaultValue: "Lucia Mendez",
        },
    },
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
    args: {
        username: "Lucia Mendez.",
        isWaiting: false,
    },
};
