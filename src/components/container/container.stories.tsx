import { Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Box} from "../box";
import {Container} from './container';

const meta: Meta<typeof Container> = {
    title: 'Components/LAYOUT/Container',
    tags: ['autodocs'],
    component: Container,
    parameters: {
        docs: {
            description: {
                component: 'Container Description',
            },
        },
    },
    args: {
        //storybook common args
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        return (
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
        )
    }
}
