import { Meta, StoryObj } from '@storybook/react';
import AnswerQuiz from './AnswerQuiz';

const meta: Meta<typeof AnswerQuiz> = {
    title: 'CompeteWithFriends/AnswerQuiz',
    component: AnswerQuiz,
    argTypes: {
        variant: {
            options: ['default', 'press'],
            control: { type: 'select' },
            defaultValue: 'default',
        },
        children: {
            control: 'text',
            defaultValue: 'Caballo',
        },
    },
};

export default meta;

type Story = StoryObj<typeof AnswerQuiz>;

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Caballo',
    },
};

export const Press: Story = {
    args: {
        variant: 'press',
        children: 'Torre',
    },
};
