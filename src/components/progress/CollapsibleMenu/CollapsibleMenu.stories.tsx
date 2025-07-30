// CollapsibleMenu.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CollapsibleMenu from "./CollapsibleMenu";

export default {
    title: "Progress/CollapsibleMenu",
    component: CollapsibleMenu,
    argTypes: {
        title: { control: "text" },
        items: { control: "object" },
    },
} as Meta<typeof CollapsibleMenu>;

const Template: StoryFn<typeof CollapsibleMenu> = args => (
    <CollapsibleMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: "Matemática I",
    items: [
        { name: "Explorando Números", progress: 100 },
        { name: "Figuras y Patrones", progress: 100 },
        { name: "Diversión con Fracciones", progress: 100 },
        { name: "Cómo Leer el Reloj", progress: 100 },
        { name: "Acertijos Matemáticos", progress: 100 },
    ],
};

export const PartialProgress = Template.bind({});
PartialProgress.args = {
    title: "Ciencia I",
    items: [
        { name: "Introducción a la Biología", progress: 75 },
        { name: "Química Básica", progress: 50 },
        { name: "Física Elemental", progress: 30 },
        { name: "Astronomía", progress: 60 },
    ],
};

export const MixedProgress = Template.bind({});
MixedProgress.args = {
    title: "Historia I",
    items: [
        { name: "Antigua Roma", progress: 100 },
        { name: "Edad Media", progress: 80 },
        { name: "Renacimiento", progress: 50 },
        { name: "Edad Moderna", progress: 20 },
    ],
};
