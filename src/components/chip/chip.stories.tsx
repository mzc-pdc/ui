import { Meta, StoryObj} from "@storybook/react";
import {Grid} from "@mui/material";
import React from "react";
import {Box} from "@mui/system";
import {Chip} from './chip';

const meta: Meta<typeof Chip> = {
    title: 'Components/DATA DISPLAY/Chip',
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
        variant: 'outlined',
        size: `small`,
        disabled: false,
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: `Chip`,
    },
};

export const Rounded: Story = {
    args: {
        label: `Rounded Chip`,
        rounded: true,
        variant: 'filled',
        size: 'medium'
    },
};

export const Color: Story = {
    render: args => {
        return (
            <Box>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} label="Chip Outlined"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'primary'} label="Chip Outlined primary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'secondary'} label="Chip Outlined secondary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'error'} label="Chip Outlined error"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'info'} label="Chip Outlined info"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'success'} label="Chip Outlined success"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'warning'} label="Chip Outlined warning"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} label="Chip Filled"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'primary'} label="Chip Filled primary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'secondary'} label="Chip Filled secondary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'error'} label="Chip Filled error"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'info'} label="Chip Filled info"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'success'} label="Chip Filled success"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'warning'} label="Chip Filled warning"/>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export const onDelete: Story = {
    render: args => {
        return (
            <Box>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} label="Chip Outlined" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'primary'} label="Chip Outlined primary" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'secondary'} label="Chip Outlined secondary"
                              onDelete={() => {
                                  console.log('delete')
                              }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'error'} label="Chip Outlined error" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'info'} label="Chip Outlined info" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'success'} label="Chip Outlined success" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'warning'} label="Chip Outlined warning" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} label="Chip Filled" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'primary'} label="Chip Filled primary" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'secondary'} label="Chip Filled secondary" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'error'} label="Chip Filled error" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'info'} label="Chip Filled info" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'success'} label="Chip Filled success" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'warning'} label="Chip Filled warning" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}