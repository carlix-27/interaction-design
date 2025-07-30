import { Meta, StoryObj } from "@storybook/react";
import CourseCard from "./CourseCard";

const meta: Meta<typeof CourseCard> = {
    title: "Home/CourseCard",
    component: CourseCard,
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        shadow: {
            control: { type: "radio", options: ["default"] },
        },
    },
};

export default meta;

type Story = StoryObj<typeof CourseCard>;

export const Default: Story = {}; // Historia predeterminada
Default.args = {
    title: "Javascript",
    description: "En curso",
    image: "default-image-flowers.png",
};
