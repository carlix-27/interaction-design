import { Meta, StoryObj } from "@storybook/react";
import Comment from "./Comment";

const meta: Meta<typeof Comment> = {
    title: "VisualizeContent/Comment",
    component: Comment,
    argTypes: {
        rating: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
        date: { control: "text" },
        variant: {
            control: { type: "radio" },
            options: ["default", "expanded"],
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
type Story = StoryObj<typeof Comment>;

export const Default: Story = {
    args: {
        name: "Valentina Moyano",
        image: "/profile-picture-1.png",
        rating: 4.5,
        date: "26/3/22",
        comment:
            "El curso de JavaScript estuvo muy bien estructurado y adecuado a mis expectativas. Se abordaron conceptos fundamentales del lenguaje de forma clara y progresiva, lo cual me ayudó a afianzar conocimientos...",
        variant: "default",
    },
};

export const Expanded: Story = {
    args: {
        ...Default.args,
        variant: "expanded",
        comment:
            "El curso de JavaScript estuvo muy bien estructurado y adecuado a mis expectativas. Se abordaron conceptos fundamentales del lenguaje de forma clara y progresiva, lo cual me ayudó a afianzar conocimientos que antes tenía muy dispersos.",
    },
};
