import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {styled} from "@mui/material/styles";
import {Stack} from "./stack";
import {Paper} from "../paper";
import {Box} from "../box";


const meta: Meta<typeof Stack> = {
    title: 'Components / Stack',
    tags: ['autodocs'],
    component: Stack,
    parameters: {
        docs: {
            description: {
                component: 'Stack Description',
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
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));
        return (
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>
        )
    }
}
