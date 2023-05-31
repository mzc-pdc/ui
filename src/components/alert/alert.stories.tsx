import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Stack, Box} from "@mui/system";
import {Alert} from "./alert";

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
    args: {
        color: "info",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return (
            <Box>
                <Alert color={'info'}>Info Alert</Alert>
            </Box>
        )
    }
}


export const Color: Story = {
    render: args => {
        return (
            <Box>
                <Stack gap={3} mb={3}>
                    <Alert color={'success'} severity="success" variant={'standard'}>Standard Alert</Alert>
                    <Alert color={'info'} severity="info" variant={'standard'}>Standard Alert</Alert>
                    <Alert color={'warning'} severity="warning" variant={'standard'}>Standard Alert</Alert>
                    <Alert color={'error'} severity="error" variant={'standard'}>Standard Alert</Alert>
                </Stack>
            </Box>
        )
    }
}

export const Filled: Story = {
    render: args => {
        return (
            <Box>
                <Stack gap={3} mb={3}>
                    <Alert color={'success'} severity="success" variant={'filled'}>Standard Alert</Alert>
                    <Alert color={'info'} severity="info" variant={'filled'}>Standard Alert</Alert>
                    <Alert color={'warning'} severity="warning" variant={'filled'}>Standard Alert</Alert>
                    <Alert color={'error'} severity="error" variant={'filled'}>Standard Alert</Alert>
                </Stack>
            </Box>
        )
    }
}