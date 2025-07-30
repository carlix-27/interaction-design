import {Meta, StoryObj} from "@storybook/react";
import Pill from "./Pill";

const meta: Meta<typeof Pill> = {
    title: "VisualizeContent/Pill",
    component: Pill,
    argTypes: {
        text: {
            control: "text",
            defaultValue: "Programación",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
    args: {
        text: "Programación",
    },
};
