import type { Meta, StoryObj } from '@storybook/react';

import { MenuPoPsManagement } from './components';

const meta = {
  title: 'Features/Menu/PoPs/MenuPoPsManagement',
  tags: ['autodocs'],
  component: MenuPoPsManagement,
  parameters: {
    docs: {
      description: {
        component: `PoP's feature menu`,
      },
    },
  },
  args: {
    title: `관리콘솔`,
    iconSize: 20,
  },
} satisfies Meta<typeof MenuPoPsManagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _default: Story = {
  args: {},
};
