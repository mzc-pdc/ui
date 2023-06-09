import {Meta, StoryObj} from "@storybook/react";
import {Grid} from "@mui/material";
import React from "react";
import {Box} from "@mui/system";
import {Checkbox} from "./checkbox";
import {theme} from "../../themes";

const meta: Meta<typeof Checkbox> = {
    title: 'Components/INPUTS/Checkbox',
    tags: ['autodocs'],
    component: Checkbox,
    args: { //storybook common args
        color: `default`,
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        indeterminate: false,
    },
}
export const Disabled: Story = {
    args: {
        disabled: true,
        checked: true,
    },
}

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        disabled: false,
        checked: true,
    },
}
export const Color: Story = {
    render: args => {
        return (
            <Box>
                <Grid container>
                    <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                        <Checkbox color={'white'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'primary'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'secondary'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'error'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'info'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'success'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'warning'} checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'default'} checked/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                        <Checkbox color={'white'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'primary'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'secondary'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'error'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'info'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'success'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'warning'} disabled/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'default'} disabled/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                        <Checkbox color={'white'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'primary'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'secondary'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'error'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'info'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'success'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'warning'} disabled checked/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Checkbox color={'default'} disabled checked/>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}