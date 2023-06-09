import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {CircularProgress} from "./circular-progress";
import {LinearProgress} from "../linear-progress";

const meta: Meta<typeof CircularProgress> = {
    title: 'Components/FEEDBACK/Progress',
    tags: ['autodocs'],
    component: CircularProgress,
    args: { //storybook common args
        color: `default`,
    }
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
    render: args => {
        return (
            <CircularProgress/>
        )
    }
}

export const Linear: Story = {
    render: args => {
        return (
            <LinearProgress/>
        )
    }
}