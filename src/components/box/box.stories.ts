import { Meta, StoryObj } from '@storybook/react';

import { Box } from './box';

const meta: Meta<typeof Box> = {
  title: 'Components/LAYOUT / Box',
  tags: ['autodocs'],
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'Box Description',
      },
    },
  },
  args: {
    //storybook common args
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: `Box`,
  },
} satisfies Story;
