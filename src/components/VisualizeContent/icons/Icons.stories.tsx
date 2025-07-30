import { Meta, StoryObj } from "@storybook/react";
import Icons, { IconsVariant } from "./Icons";

const iconOptions: IconsVariant[] = [
    "icon (1)",
    "icon (2)",
    "icon (3)",
    "icon (4)",
    "icon (5)",
    "icon (6)",
    "icon (7)",
    "icon (8)",
    "icon (9)",
    "icon (10)",
    "icon (11)",
    "icon (12)",
    "icon (13)",
    "icon (14)",
    "icon (15)",
    "icon (16)",
    "icon (17)",
    "icon (18)",
];

const meta: Meta<typeof Icons> = {
    title: "VisualizeContent/Icons",
    component: Icons,
    argTypes: {
        name: {
            control: { type: "select" },
            options: iconOptions,
        },
        size: {
            control: { type: "number" },
        },
        alt: {
            control: { type: "text" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Icons>;

export const Default: Story = {
    args: {
        name: "icon (1)",
        size: 24,
        alt: "Icono demo",
    },
};
