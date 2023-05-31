import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Slider} from "./slider";


const meta: Meta<typeof Slider> = {
    title: 'Components / Slider',
    tags: ['autodocs'],
    component: Slider,
    parameters: {
        docs: {
            description: {
                component: 'Slider Description',
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
            <div>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
        )
    }
}
