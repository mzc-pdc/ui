import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './slider';

const meta = {
    title: 'Components/Slider',
    tags: ['autodocs'],
    component: Slider,
    parameters: {
        docs: {
            description: {
                component: 'Slider Description'
            },
        },
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const playground: Story = {

};
