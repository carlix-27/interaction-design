import { Meta, StoryObj } from "@storybook/react";
import InstructorCard from "./InstructorCard";

const meta: Meta<typeof InstructorCard> = {
    title: "VisualizeContent/InstructorCard",
    component: InstructorCard,
    argTypes: {
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
type Story = StoryObj<typeof InstructorCard>;

export const Default: Story = {
    args: {
        name: "Matías Blanco",
        description: "Especialista en Formación Digital",
        image: "/profile-picture-4.png",
    },
};
