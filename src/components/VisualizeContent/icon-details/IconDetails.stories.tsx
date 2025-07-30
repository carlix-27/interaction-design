import { Meta, StoryObj } from "@storybook/react";
import IconDetails, { IconDetailsVariant } from "./IconDetails";

const meta: Meta<typeof IconDetails> = {
    title: "VisualizeContent/IconDetails",
    component: IconDetails,
    argTypes: {
        //tags: ["autodocs"],
        variant: {
            control: { type: "select" },
            options: [
                "subtitle",
                "language",
                "info",
                "steamline",
                "forum",
                "trophy",
            ] satisfies IconDetailsVariant[],
        },
    },
};

export default meta;
type Story = StoryObj<typeof IconDetails>;

export const subtitle: Story = { args: { variant: "subtitle" } };
export const language: Story = { args: { variant: "language" } };
export const info: Story = { args: { variant: "info" } };
export const steamline: Story = { args: { variant: "steamline" } };
export const forum: Story = { args: { variant: "forum" } };
export const trophy: Story = { args: { variant: "trophy" } };
