import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Typography} from "@mui/material";
import {Rating} from "./rating";


const meta: Meta<typeof Rating> = {
    title: 'Components/INPUTS / Rating',
    tags: ['autodocs'],
    component: Rating,
    parameters: {
        docs: {
            description: {
                component: 'Rating Description',
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
        const [value, setValue] = React.useState<number | null>(2);
        return (
           <div>
               <Typography component="legend">Controlled</Typography>
               <Rating
                   name="simple-controlled"
                   value={value}
                   onChange={(event, newValue) => {
                       setValue(newValue);
                   }}
               />
               <Typography component="legend">Read only</Typography>
               <Rating name="read-only" value={value} readOnly />
               <Typography component="legend">Disabled</Typography>
               <Rating name="disabled" value={value} disabled />
           </div>
        )
    }
}
