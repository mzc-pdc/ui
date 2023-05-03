import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mui/material';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button Description',
      },
    },
  },
  args: {
    //storybook common args
    color: `primary`,
    children: `Button`,
    size: `medium`,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const outlined: Story = {
  args: {
    variant: `outlined`,
    disabled: false,
  },
};

export const contained: Story = {
  args: {
    variant: `contained`,
    disabled: false,
  },
};

export const text: Story = {
  args: {
    variant: `text`,
    disabled: false,
  },
};
