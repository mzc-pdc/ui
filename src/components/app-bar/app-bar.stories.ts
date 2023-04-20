import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './app-bar';

const meta: Meta<typeof AppBar> = {
  title: 'Components / AppBar',
  tags: ['autodocs'],
  component: AppBar,
  parameters: {
    docs: {
      description: {
        component: 'AppBar Description',
      },
    },
  },
  args: {
    //storybook common args
    color: `primary`,
    children: `Button`,
  },
  argTypes: {
    color: {
      options: ['default', 'inherit', 'primary', 'secondary', 'transparent'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      control: { type: 'select' },
    },
    htmlColor: {
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'color' },
    },
    children: {
      defaultValue: `test`,
    },
  },
  // decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  // parameters: {
  //   docs: {
  //     description: {
  //       component: 'Appbar Description',
  //     },
  //   },
  //   actions: { argTypesRegex: '^on.*' },
  //   componentSubtitle: `AppBar`,
  // },
  // args: {
  //   size: {
  //     options: [`small`, 'medium', 'large'],
  //     description: `크기`,
  //     table: {
  //       type: {
  //         summary: 'string',
  //       },
  //       defaultValue: {
  //         summary: 'medium',
  //       },
  //     },
  //     control: { type: 'select' },
  //   },
  //   color: {
  //     options: ['default', 'inherit', 'primary', 'secondary', 'transparent'],
  //     table: {
  //       type: {
  //         summary: 'string',
  //       },
  //       defaultValue: {
  //         summary: 'primary',
  //       },
  //     },
  //     control: { type: 'select' },
  //   },
  //   htmlColor: {
  //     table: {
  //       type: {
  //         summary: 'string',
  //       },
  //     },
  //     control: { type: 'color' },
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    color: `primary`,
    children: `aaaa`,
  },
} satisfies Story;
