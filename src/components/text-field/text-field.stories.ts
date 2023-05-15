import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './text-field';

const meta = {
  title: 'Components/TextField',
  tags: ['autodocs'],
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'TextField Description',
      },
    },
  },
  args: {
    color: `primary`,
    label: `이름`,
    variant: `outlined`,
    size: `medium`,
    disabled: false,
  },
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'inherit',
      ],
      control: {
        type: 'select',
      },
      description: 'Textfield 테마',
    },
    variant: {
      description: 'Textfield 타입',
      options: ['standard', 'filled', 'outlined'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: [`small`, 'medium', 'large'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'medium',
        },
      },
      control: { type: 'select' },
    },
    label: {
      description: `label`,
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
    InputProps: {
      description: `InputProps`,
      table: {
        type: {
          summary: 'object',
        },
      },
      control: {
        type: 'object',
      },
    },
    error: {
      description: `error`,
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    multiline: {
      description: `multiline`,
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      description: `helperText`,
      table: {
        type: {
          summary: 'string',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: `testtest`,
  },
};
