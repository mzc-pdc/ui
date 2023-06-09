import { Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Zoom} from './zoom';
import {FormControlLabel} from "../form-control-label";
import {Switch} from "../switch";
import {theme} from "../../themes";
import {Box} from "../box";

const meta: Meta<typeof Zoom> = {
    title: 'Components/UTILS/TRANSITION/Zoom',
    tags: ['autodocs'],
    component: Zoom,
    parameters: {
        docs: {
            description: {
                component: 'Zoom Description',
            },
        },
    },
    args: {
        //storybook common args
        children: <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
    },
} ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        const [checked, setChecked] = React.useState(false);

        const handleChange = () => {
            setChecked((prev) => !prev);
        };


        return (
            <Box sx={{ height: 300 }}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Show"
                />
                <Box
                >
                    <Box sx={{ display: 'flex' , gap: 3}}>
                        <Zoom in={checked}>
                            <div> {args.children}</div>
                        </Zoom>
                        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                            <div> {args.children}</div>
                        </Zoom>
                    </Box>
                </Box>
            </Box>
        )
    }
}
