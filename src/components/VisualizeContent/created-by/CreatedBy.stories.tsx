import { Meta, StoryObj } from "@storybook/react";
import CreatedBy from "./CreatedBy";

const meta: Meta<typeof CreatedBy> = {
    title: "VisualizeContent/CreatedBy",
    component: CreatedBy,
    tags: ["autodocs"],
    argTypes: {
        organization: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof CreatedBy>;

export const Default: Story = {
    args: {
        organization: "Meta Platform, Inc.",
    },
};
