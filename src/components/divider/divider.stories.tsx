import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Divider} from "./divider";


const meta: Meta<typeof Divider> = {
    title: 'Components/DATA DISPLAY / Divider',
    tags: ['autodocs'],
    component: Divider,
    parameters: {
        docs: {
            description: {
                component: 'Divider Description',
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
           <Divider/>
        )
    }
}
