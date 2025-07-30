import {Meta, StoryObj} from "@storybook/react";
import MoreActions from "./MoreActions";

const meta: Meta<typeof MoreActions> = {
    title: "VisualizeContent/MoreActions",
    component: MoreActions,
};

export default meta;
type Story = StoryObj<typeof MoreActions>;

export const Default: Story = {};
