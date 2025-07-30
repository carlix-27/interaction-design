import { Meta, StoryObj } from "@storybook/react";
import Items from "./Items";
import { IconDetailsVariant } from "../icon-details/IconDetails";

const iconOptions: IconDetailsVariant[] = [
    "subtitle",
    "language",
    "info",
    "steamline",
    "forum",
    "trophy",
];

const meta: Meta<ItemsStoryArgs> = {
    title: "VisualizeContent/Items",
    //tags: ["autodocs"],
    argTypes: {
        icon1: {
            control: { type: "select" },
            options: iconOptions,
            name: "Icon 1",
        },
        text1: {
            control: "text",
            name: "Text 1",
        },
        icon2: {
            control: { type: "select" },
            options: iconOptions,
            name: "Icon 2",
        },
        text2: {
            control: "text",
            name: "Text 2",
        },
        icon3: {
            control: { type: "select" },
            options: iconOptions,
            name: "Icon 3",
        },
        text3: {
            control: "text",
            name: "Text 3",
        },
    },
};

export default meta;

interface ItemsStoryArgs {
    icon1: IconDetailsVariant;
    text1: string;
    icon2: IconDetailsVariant;
    text2: string;
    icon3: IconDetailsVariant;
    text3: string;
}

type Story = StoryObj<ItemsStoryArgs>;

export const Default: Story = {
    args: {
        icon1: "info",
        text1: "Última actualización 6-2025",
        icon2: "subtitle",
        text2: "Inglés",
        icon3: "language",
        text3: "Subtítulos en inglés",
    },
    render: (args: ItemsStoryArgs) => (
        <Items
            items={[
                { icon: args.icon1, text: args.text1 },
                { icon: args.icon2, text: args.text2 },
                { icon: args.icon3, text: args.text3 },
            ]}
        />
    ),
};
