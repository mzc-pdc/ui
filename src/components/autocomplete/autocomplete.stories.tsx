import React from 'react';
import {Autocomplete} from './autocomplete';
import {TextField} from '../textField';
import {Meta, StoryObj} from "@storybook/react";
import {ToggleButton} from "../toggleButton";


const meta = {
    title: 'Components/Autocomplete',
    tags: ['autodocs'],
    component: Autocomplete,
    parameters: {
        docs: {
            description: {
                component: 'Autocomplete Description'
            },
        },
    },
    args: {
        renderInput: params => <TextField {...params}/>
    },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;


export const playground: Story = {
    args : {
        options: ['Option 1', 'Option 2', 'Option 3'],
    }
};
