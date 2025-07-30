import { Meta, StoryObj } from "@storybook/react";
import CommentsAverage from "./CommentsAverage";

const meta: Meta<any> = {
    title: "VisualizeContent/CommentsAverage",
    component: CommentsAverage,
    argTypes: {
        votes1: { control: "number", name: "1 star" },
        votes2: { control: "number", name: "2 stars" },
        votes3: { control: "number", name: "3 stars" },
        votes4: { control: "number", name: "4 stars" },
        votes5: { control: "number", name: "5 stars" },
        distribution: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
    args: {
        votes1: 2,
        votes2: 4,
        votes3: 10,
        votes4: 22,
        votes5: 62,
    },
    render: (args: any) => (
        <CommentsAverage
            distribution={[
                args.votes1,
                args.votes2,
                args.votes3,
                args.votes4,
                args.votes5,
            ]}
        />
    ),
};
