import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Paper, styled} from "@mui/material";
import {Grid} from "./grid";
import {Box} from "../box";
import {theme} from "../../themes";


const meta: Meta<typeof Grid> = {
    title: 'Components/LAYOUT / Grid',
    tags: ['autodocs'],
    component: Grid,
    parameters: {
        docs: {
            description: {
                component: 'Grid Description',
            },
        },
    },
    args: {
        //storybook common args
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.grayscaleSecondary[50] ,
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Default: Story = {
    render: args => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        )
    }
}

export const MultipleBreakpoints: Story = {
    render: args => {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}


export const Responsive: Story = {
    render: args => {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>xs=2</Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )
    }
}
