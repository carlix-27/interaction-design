import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import CourseCard, { CourseCardProps } from "./CourseCard";

const meta: Meta<typeof CourseCard> = {
    title: "CourseCard",  // Título de la historia en Storybook
    component: CourseCard, // El componente que Storybook mostrará
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

export default meta; // Esta es la exportación por defecto que espera ESLint

type Story = StoryObj<typeof CourseCard>;

export const Default: Story = {}; // Historia predeterminada
Default.args = {
    title: "Javascript",
    description: "En curso",
    image: "default-image-flowers.png"
};