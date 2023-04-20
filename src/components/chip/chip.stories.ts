import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './chip';

const meta = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'Chip Description',
      },
    },
  },
  args: {
    //storybook common args
    color: `primary`,
    label: `Button`,
    size: `medium`,
    disabled: false,
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: `testtest`,
  },
};
