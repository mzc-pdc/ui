import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Fade} from "./fade";
import {FormControlLabel} from "../form-control-label";
import {Switch} from "../switch";
import {theme} from "../../themes";
import {Box} from "../box";


const meta: Meta<typeof Fade> = {
    title: 'Components / Fade',
    tags: ['autodocs'],
    component: Fade,
    parameters: {
        docs: {
            description: {
                component: 'Fade Description',
            },
        },
    },
    args: {
        //storybook common args
        children:  <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
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
            <Box sx={{ height: 180 }}>
                <FormControlLabel
                    control={<Switch checked={checked} color={'success'} onChange={handleChange} />}
                    label="Show"
                />
                <Box sx={{ display: 'flex' }}>
                    <Fade in={checked}>
                        <div> {args.children}</div>
                    </Fade>
                </Box>
            </Box>
        );
    }
}
