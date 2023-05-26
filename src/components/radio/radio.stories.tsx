import {ComponentStory, Meta, StoryObj} from "@storybook/react";
import {Grid} from "@mui/material";
import React from "react";
import {Box} from "@mui/system";
import {Radio} from "./radio";
import { theme } from "../../themes";

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    tags: ['autodocs'],
    component: Radio,
    args: {
        color: "secondary",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "secondary",
    },
}
export const Disabled: Story = {
    args: {
        color: "secondary",
        disabled: true,
        checked: true,
    },
}

export const Color: ComponentStory<typeof Radio> = () => {
    return (
        <Box>
            <Grid container>
                <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                    <Radio color={'white'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'primary'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'secondary'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'error'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'info'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'success'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'warning'} checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'default'} checked/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                    <Radio color={'white'} disabled />
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'primary'} disabled/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'secondary'} disabled/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'error'} disabled/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'info'} disabled/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'success'} disabled/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'warning'} disabled/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'default'} disabled/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                    <Radio color={'white'} disabled checked />
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'primary'} disabled checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'secondary'} disabled checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'error'} disabled checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'info'} disabled checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'success'} disabled checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'warning'} disabled checked/>
                </Grid>
                <Grid item sx={{padding: 3}}>
                    <Radio color={'default'} disabled checked/>
                </Grid>
            </Grid>
        </Box>
    )
}