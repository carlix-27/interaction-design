import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import QuestionQuiz from './QuestionQuiz';

const meta: Meta<typeof QuestionQuiz> = {
    title: 'QuestionQuiz',
    component: QuestionQuiz,
    argTypes: {
        question: {
            control: 'text',
            defaultValue: '¿Cuál es la capital de España?',
        },
        currentQuestion: {
            control: 'number',
            defaultValue: 3,
        },
        totalQuestions: {
            control: 'number',
            defaultValue: 10,
        },
    },
};

export default meta;

type Story = StoryObj<typeof QuestionQuiz>;

export const Default: Story = {
    args: {
        question: 'Cuál es la forma correcta de declarar una variable en javaScript?',
        currentQuestion: 3,
        totalQuestions: 10,
    },
};
