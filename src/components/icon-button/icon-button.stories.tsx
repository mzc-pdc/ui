import type {Meta, StoryObj, ComponentStory} from '@storybook/react';

import React from 'react';
import Grid from "@mui/material/Grid";
import {Divider, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { //storybook common args
      color: `primary`,
      size: `medium`,
      children: <DeleteIcon/>,
      disabled: false,
      loading: false,
  }
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {
    args: {
        variant: `outlined`,
    },
};

export const circled: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    circled: true,
    children: <DeleteIcon />,
  },
};


export const Variants: ComponentStory<typeof IconButton> = () => (
    <Grid container gap={2} direction={'column'}>
      <Grid item>
        <Grid container alignItems={'center'}>
          <Grid item xs={3}>undefined</Grid>
          <Grid item><IconButton ><DeleteIcon /></IconButton></Grid>
        </Grid>
      </Grid>
      <Divider orientation={'horizontal'} flexItem/>
      <Grid item>
        <Grid container alignItems={'center'}>
          <Grid item xs={3}>contained</Grid>
          <Grid item><IconButton variant="contained"><DeleteIcon /></IconButton></Grid>
        </Grid>
      </Grid>
      <Divider orientation={'horizontal'} flexItem/>
      <Grid item>
        <Grid container alignItems={'center'}>
          <Grid item xs={3}>outlined</Grid>
          <Grid item><IconButton variant="outlined"><DeleteIcon /></IconButton></Grid>
        </Grid>
      </Grid>
      <Divider orientation={'horizontal'} flexItem/>
      <Grid item>
        <Grid container alignItems={'center'}>
          <Grid item xs={3}>dashed</Grid>
          <Grid item><IconButton variant="dashed"><DeleteIcon /></IconButton></Grid>
        </Grid>
      </Grid>
    </Grid>
);
export const Color: ComponentStory<typeof IconButton> = () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>inherit</TableCell>
                <TableCell>default</TableCell>
                <TableCell>primary</TableCell>
                <TableCell>secondary</TableCell>
                <TableCell>success</TableCell>
                <TableCell>error</TableCell>
                <TableCell>warning</TableCell>
                <TableCell>grayscale</TableCell>
                <TableCell>grayscaleSecondary</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>contained</TableCell>
                <TableCell><IconButton variant="contained" ><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"inherit"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"default"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"primary"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"secondary"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"success"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"error"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"warning"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"grayscale"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="contained" color={"grayscaleSecondary"}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>outlined</TableCell>
                <TableCell><IconButton variant="outlined" ><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"inherit"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"default"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"primary"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"secondary"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"success"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"error"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"warning"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"grayscale"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="outlined" color={"grayscaleSecondary"}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>dashed</TableCell>
                <TableCell><IconButton variant="dashed" ><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"inherit"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"default"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"primary"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"secondary"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"success"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"error"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"warning"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"grayscale"}><DeleteIcon /></IconButton></TableCell>
                <TableCell><IconButton variant="dashed" color={"grayscaleSecondary"}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
        </TableBody>
    </Table>
);
export const Size: ComponentStory<typeof IconButton> = () => (
    <Grid container alignItems={'center'} gap={2}>
        <IconButton variant="contained" size={'xsmall'}><DeleteIcon /></IconButton>
        <IconButton variant="contained" size={'small'}><DeleteIcon /></IconButton>
        <IconButton variant="contained" size={'medium'}><DeleteIcon /></IconButton>
        <IconButton variant="contained" size={'large'}><DeleteIcon /></IconButton>
    </Grid>
);
