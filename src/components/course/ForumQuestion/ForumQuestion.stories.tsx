import React from "react";
import ForumQuestion from "./ForumQuestion"; // Importing the ForumQuestion component

import { Meta, StoryObj } from "@storybook/react";

// Setting up the Meta configuration
const meta: Meta<typeof ForumQuestion> = {
    title: "Course/ForumQuestion", // You can organize it under a 'Forum' section in Storybook
    component: ForumQuestion, // Register the ForumQuestion component
};

export default meta;

type ForumQuestionStories = StoryObj<typeof ForumQuestion>;

// Defining a Story for ForumQuestion with different scenarios
export const DefaultForumQuestion: ForumQuestionStories = {
    name: "DefaultForumQuestion",
    render: args => <ForumQuestion {...args} />, // Passing args to the component
    args: {
        question: "¿Cómo puedo mejorar mi flujo de trabajo en React?", // Default question prop
    },
};
