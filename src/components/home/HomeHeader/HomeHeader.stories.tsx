import { Meta, StoryObj } from "@storybook/react";
import HomeHeader from "./HomeHeader";

const meta: Meta<typeof HomeHeader> = {
    title: "Home/HomeHeader",
    component: HomeHeader,
    argTypes: {
        name: { control: "text" },
        avatar: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
    args: {
        name: "Martina",
        avatar: "woman_avatar.png", // Cambia esta ruta según donde tengas la imagen
    },
};
