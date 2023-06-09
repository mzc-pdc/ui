import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {Typography} from "@mui/material";
import {Tooltip} from "./tooltip";
import {IconButton} from "../icon-button";
import {Grid} from "../grid";


const meta: Meta<typeof Tooltip> = {
    title: 'Components/DATA DISPLAY / Tooltip',
    tags: ['autodocs'],
    component: Tooltip,
    parameters: {
        docs: {
            description: {
                component: 'Tooltip Description',
            },
        },
    },
    args: {
        //storybook common args
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return(
            <Tooltip title="Delete">
                <IconButton circled>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        )
    }
}

export const Text: Story = {
    render: args => {
        return(
            <Tooltip title="Text">
                <Typography component={'span'}>
                    Typography
                </Typography>
            </Tooltip>
        )
    }
}

export const Color: Story = {
    render: args => {
        return(
            <Grid container gap={10}>
                <Tooltip title="undefined"  open={true}>
                    <IconButton circled>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="primary" color={'primary'} open={true}>
                    <IconButton circled>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="secondary" color={'secondary'} open={true}>
                    <IconButton circled>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="success" color={'success'} open={true}>
                    <IconButton circled>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="warning" color={'warning'} open={true}>
                    <IconButton circled>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="error" color={'error'} open={true}>
                    <IconButton circled>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        )
    }
}