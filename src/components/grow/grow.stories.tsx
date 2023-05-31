import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {FormControlLabel} from "../form-control-label";
import {Switch} from "../switch";
import {theme} from "../../themes";
import {Box} from "../box";

import {Grow} from './grow';

const meta: Meta<typeof Grow> = {
    title: 'Components / Grow',
    tags: ['autodocs'],
    component: Grow,
    parameters: {
        docs: {
            description: {
                component: 'Grow Description',
            },
        },
    },
    args: {
        //storybook common args
        children: <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
    },
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        const [checked, setChecked] = React.useState(false);

        const handleChange = () => {
            setChecked((prev) => !prev);
        };

        return (
            <Box sx={{height: 180}}>
                <FormControlLabel
                    control={<Switch checked={checked} color={'success'} onChange={handleChange}/>}
                    label="Show"
                />
                <Box sx={{display: 'flex'}} gap={2}>
                    <Grow in={checked}>
                        <div> {args.children}</div>
                    </Grow>
                    <Grow
                        in={checked}
                        style={{transformOrigin: '0 0 0'}}
                        {...(checked ? {timeout: 1000} : {})}
                    >
                        <div>  {args.children}</div>
                    </Grow>
                </Box>
            </Box>
        );
    }
}
