import type {Meta, StoryObj} from '@storybook/react';

import React from "react";
import {Build} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/system";
import {Button} from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/INPUTS/Button',
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
        loading: false,
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        variant: `outlined`,
        startIcon: <Build/>
    },
};
export const loading: Story = {
    args: {
        variant: `outlined`,
        loading: true
    },
};
export const rounded: Story = {
    args: {
        variant: `contained`,
        rounded: true
    },
};


export const Variants: Story = {
    render: args => {
        return (
            <Grid container gap={2}>
                <Button variant="solid">Solid Button</Button>
                <Button variant="text">Text Button</Button>
                <Button variant="contained">Contained Button</Button>
                <Button variant="outlined">Outlined Button</Button>
                <Button variant="contained" rounded>Round Button</Button>
            </Grid>
        )
    }
};
export const Color: Story = {
    render: args => {
        return (
            <Stack gap={5}>
                <Grid container gap={2} direction={'row'}>
                    <Grid item>
                        <Button variant="contained" color={"primary"}>primary Button</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={'secondary'}>secondary Button</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color={'error'}>error Button</Button>
                    </Grid>
                </Grid>
                <Grid container gap={2} direction={'row'}>
                    <Grid item>
                        <Button variant="outlined" color={"primary"}>primary Button</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color={'secondary'}>secondary Button</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color={'error'}>error Button</Button>
                    </Grid>
                </Grid>
            </Stack>
        )
    }
}

export const Size: Story = {
    render: args => {
        return (
            <Stack gap={5}>
                <Grid container alignItems={'center'} gap={2}>
                    <Button variant="contained" size={'small'}>Small Button</Button>
                    <Button variant="contained" size={'medium'}>Medium Button</Button>
                    <Button variant="contained" size={'large'}>Large Button</Button>
                </Grid>
                <Grid container alignItems={'center'} gap={2}>
                    <Button variant="contained" size={'small'} startIcon={<Build/>}>Small Button</Button>
                    <Button variant="contained" size={'medium'} startIcon={<Build/>}>Medium Button</Button>
                    <Button variant="contained" size={'large'} startIcon={<Build/>}>Large Button</Button>
                </Grid>
            </Stack>
        )
    }
}