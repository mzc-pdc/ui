import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const outlined: Story = {
  args: {
    color: 'primary',
    size: 'small',
    variant: 'outlined',
    children: <DeleteIcon />,
  },
};
export const contained: Story = {
  args: {
    color: 'primary',
    size: 'small',
    variant: 'contained',
    children: <DeleteIcon />,
  },
};

export const circled: Story = {
  args: {
    color: 'primary',
    size: 'small',
    variant: 'contained',
    circled: true,
    children: <DeleteIcon />,
  },
};
