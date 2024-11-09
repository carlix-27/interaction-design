import { Meta, StoryObj } from '@storybook/react';
import CourseCard from "./CourseCard";

const meta: Meta<typeof CourseCard> = {
    title: "CourseCard",
    component: CourseCard,
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
        shadow: {
            control: { type: "radio", options: ["default"] },
        },
        size: {
            control: { type: "radio", options: ["medium"] },
        },
    },
};

export default meta;

type Story = StoryObj<typeof CourseCard>;

export const Default: Story = {}; // Historia predeterminada
Default.args = {
    title: "Javascript",
    description: "En curso",
    image: "default-image-flowers.png"
};