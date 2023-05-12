import type { Meta, StoryObj, ComponentStory } from '@storybook/react';

import React, {ReactNode} from "react";
import {Build} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button Description'
      },
    },
  },
  args: { //storybook common args
    color: `primary`,
    children: `Button`,
    size: `medium`,
    disabled: false,
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const outlined: Story = {
  args: {
    variant: `outlined`,
    startIcon: <Build/>
  },
};

// export const contained: Story = {
//   args: {
//     variant: `contained`,
//   },
// };
//
// export const text: Story = {
//   args: {
//     variant: `text`,
//   },
// };
//
// export const round: Story = {
//   args: {
//     variant: `round`,
//   },
// };
export const loading: Story = {
  args: {
    variant: `outlined`,
    loading: true
  },
};


export const Variants: ComponentStory<typeof Button> = () => (
    <Grid container gap={2}>
      <Button variant="solid">Solid Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="contained" label="Contained Button" >Contained Button</Button>
      <Button variant="outlined" label="Outlined Button" >Outlined Button</Button>
      <Button variant="round" label="Round Button" >Round Button</Button>
    </Grid>
);
export const Size: ComponentStory<typeof Button> = () => (
    <Grid container alignItems={'center'} gap={2}>
      <Button variant="contained" size={'small'}>Small Button</Button>
      <Button variant="contained" size={'medium'} >Medium Button</Button>
      <Button variant="contained" size={'large'} >Large Button</Button>
    </Grid>
);
