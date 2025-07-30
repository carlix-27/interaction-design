import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Popup from "././Popup";

const meta: Meta<typeof Popup> = {
    title: "CompeteWithFriends/Popup",
    component: Popup,
    argTypes: {
        onAccept: { action: "accepted" },
        onHide: { action: "hidden" },
    },
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
    args: {
        onAccept: () => console.log("Aceptado"),
        onHide: () => console.log("No volver a mostrar"),
    },
};
