import type { Meta, StoryObj } from '@storybook/react';
import StartCourse from './StartCourse';

const meta: Meta<typeof StartCourse> = {
    title: 'Common/StartCourse',
    component: StartCourse,
    argTypes: {
        text: {
            control: 'text',
            description: 'Texto que aparece en el botón'
        }
    }
};

export default meta;
type Story = StoryObj<typeof StartCourse>;

export const Default: Story = {
    args: {
        text: 'Iniciar Curso'
    }
};