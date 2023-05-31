import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {NativeSelect} from "./native-select";
import {Box} from "../box";
import {FormControl} from "../form-control";
import {InputLabel} from "../input-label";


const meta: Meta<typeof NativeSelect> = {
    title: 'Components / NativeSelect',
    tags: ['autodocs'],
    component: NativeSelect,
    parameters: {
        docs: {
            description: {
                component: 'NativeSelect Description',
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
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Age
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Box>
        )
    }
}
