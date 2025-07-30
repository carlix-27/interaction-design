import { Meta, StoryObj } from "@storybook/react";
import Information from "./Information";
import { IconsVariant } from "../icons/Icons";

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

const meta: Meta<typeof Information> = {
    title: "VisualizeContent/Information",
    component: Information,
    argTypes: {
        icon: {
            control: { type: "select" },
            options: iconOptions,
        },
        title: {
            control: "text",
        },
        subtitle: {
            control: "text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Information>;

export const Default: Story = {
    args: {
        icon: "icon (12)",
        title: "100% en línea",
        subtitle: "Comienza ahora mismo y aprende a tu propio ritmo",
    },
};
