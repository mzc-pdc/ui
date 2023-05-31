import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Paper} from "./paper";
import {Box} from "../box";


const meta: Meta<typeof Paper> = {
    title: 'Components / Paper',
    tags: ['autodocs'],
    component: Paper,
    parameters: {
        docs: {
            description: {
                component: 'Paper Description',
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
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
            </Box>
        )
    }
}

export const Variant: Story = {
    render: args => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper variant="outlined" />
                <Paper variant="outlined" square />
            </Box>
        )
    }
}
