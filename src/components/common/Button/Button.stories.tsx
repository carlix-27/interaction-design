import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "fulfilled",
        "focus",
        "outlined",
        "active",
        "ghost",
        "disabled",
      ],
      control: { type: "select" },
      defaultValue: "fulfilled",
    },
    size: {
      options: ["medium"],
      control: { type: "select" },
      defaultValue: "medium",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// export const Default: Story = {
//     name: 'Default',
//     render: (args) => <Button {...args}>Button</Button>
// }

export const Fulfilled: Story = {
  name: "Fulfilled",
  render: (args) => (
    <Button variant={"fulfilled"} {...args}>
      Button
    </Button>
  ),
};

export const Focus: Story = {
  name: "Focus",
  render: (args) => (
    <Button variant={"focus"} {...args}>
      Button
    </Button>
  ),
};

export const Outlined: Story = {
  name: "Outlined",
  render: (args) => (
    <Button variant={"outlined"} {...args}>
      Button
    </Button>
  ),
};

export const Active: Story = {
  name: "Active",
  render: (args) => (
    <Button variant={"active"} {...args}>
      Button
    </Button>
  ),
};

export const Ghost: Story = {
  name: "Ghost",
  render: (args) => (
    <Button variant={"ghost"} {...args}>
      Button
    </Button>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: (args) => (
    <Button variant={"disabled"} {...args}>
      Button
    </Button>
  ),
};
