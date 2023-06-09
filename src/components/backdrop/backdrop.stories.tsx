import { Meta, StoryObj } from '@storybook/react';
import React from "react";

import { Backdrop } from './backdrop';
import {Button} from "../button";

const meta: Meta<typeof Backdrop> = {
  title: 'Components/FEEDBACK / Backdrop',
  tags: ['autodocs'],
  component: Backdrop,
  parameters: {
    docs: {
      description: {
        component: 'Backdrop Description',
      },
    },
  },
  args: {
    //storybook common args
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Playground: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    return (
      <div>
        <Button onClick={handleOpen}>Show backdrop</Button>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
          back drop
        </Backdrop>
      </div>
    )
  }
};
