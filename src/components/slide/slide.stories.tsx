import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {FormControlLabel} from "../form-control-label";
import {Switch} from "../switch";
import {theme} from "../../themes";
import {Box} from "../box";

import {Slide} from './slide';

const meta: Meta<typeof Slide> = {
    title: 'Components/UTILS /TRANSITION/ Slide',
    tags: ['autodocs'],
    component: Slide,
    parameters: {
        docs: {
            description: {
                component: 'Slide Description',
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
                    <Slide in={checked} direction="up">
                        <div> {args.children}</div>
                    </Slide>
                </Box>
            </Box>
        );
    }
}


export const Container: Story = {
    render: args => {
        const [checked, setChecked] = React.useState(false);
        const containerRef = React.useRef(null);

        const handleChange = () => {
            setChecked((prev) => !prev);
        };


        return (
            <Box
                sx={{
                    height: 180,
                    padding: 2,
                    overflow: 'hidden',
                    backgroundColor: `#f2f2f2`
                }}
                ref={containerRef}
            >
                <FormControlLabel
                    control={<Switch checked={checked} color={'success'} onChange={handleChange}/>}
                    label="Show"
                />
                <Box sx={{display: 'flex'}} gap={2}>
                    <Slide in={checked} direction="up">
                        <div> {args.children}</div>
                    </Slide>
                </Box>
            </Box>
        );
    }
}
