import type {Meta, StoryObj} from "@storybook/react";
import StartCourse from "./StartCourse";

const meta: Meta<typeof StartCourse> = {
    title: "Components/StartCourse",
    component: StartCourse,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StartCourse>;

export const Default: Story = {
    args: {
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const CustomClass: Story = {
    args: {
        className: "shadow-lg",
        disabled: false,
    },
};
