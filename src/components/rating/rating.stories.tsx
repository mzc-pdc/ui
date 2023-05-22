import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from './rating';

const meta = {
    title: 'Components/Rating',
    tags: ['autodocs'],
    component: Rating,
    parameters: {
        docs: {
            description: {
                component: 'Slider Description'
            },
        },
    },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const playground: Story = {

};
