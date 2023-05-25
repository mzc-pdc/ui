import {ComponentStory, Meta, StoryObj} from "@storybook/react";
import {Grid} from "@mui/material";
import React from "react";
import {Box} from "@mui/system";
import {Checkbox} from "./checkbox";
import {List} from "../list";
import {theme} from "../../themes";

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
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
export const Color: ComponentStory<typeof List> = () => {
    return (
        <Box>
            <Grid container>
                <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                    <Checkbox color={'white'}/>
                </Grid>
                <Checkbox color={'primary'}/>
                <Checkbox color={'secondary'}/>
                <Checkbox color={'error'}/>
                <Checkbox color={'info'}/>
                <Checkbox color={'success'}/>
                <Checkbox color={'warning'}/>
                <Checkbox color={'default'}/>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 3, backgroundColor: theme.palette.secondary.main}}>
                    <Checkbox color={'white'} disabled/>
                </Grid>
                <Checkbox color={'primary'} disabled/>
                <Checkbox color={'secondary'} disabled/>
                <Checkbox color={'error'} disabled/>
                <Checkbox color={'info'} disabled/>
                <Checkbox color={'success'} disabled/>
                <Checkbox color={'warning'} disabled/>
                <Checkbox color={'default'} disabled/>
            </Grid>
        </Box>
    )
}