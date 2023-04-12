import type { Meta, StoryObj } from '@storybook/react';

import { MenuManagement } from './components';

const meta = {
  title: 'Features/Menu/PoPs/MenuManagement',
  tags: ['autodocs'],
  component: MenuManagement,
} satisfies Meta<typeof MenuManagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Default: Story = {
  args: {
    title: `관리콘솔`,
  },
};
