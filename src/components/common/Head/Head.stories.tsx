import type { Meta, StoryObj } from '@storybook/react';
import Head from './Head';

const meta: Meta<typeof Head> = {
    title: 'Common/Head',
    component: Head,
};

export default meta;
type Story = StoryObj<typeof Head>;

export const Default: Story = {
    render: () => <Head />,
};