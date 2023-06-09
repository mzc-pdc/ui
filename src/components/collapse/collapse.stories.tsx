import { Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Collapse} from './collapse';
import {FormControlLabel} from "../form-control-label";
import {Switch} from "../switch";
import {theme} from "../../themes";
import {Box} from "../box";

const meta: Meta<typeof Collapse> = {
    title: 'Components/UTILS/TRANSITION/Collapse',
    tags: ['autodocs'],
    component: Collapse,
    parameters: {
        docs: {
            description: {
                component: 'Collapse Description',
            },
        },
    },
    args: {
        //storybook common args
    },
} satisfies Meta<typeof Collapse>;

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
                    sx={{
                        '& > :not(style)': {
                            display: 'flex',
                            justifyContent: 'space-around',
                            height: 120,
                            width: 250,
                        },
                    }}
                >
                    <div>
                        <Collapse in={checked}>
                            <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
                        </Collapse>
                        <Collapse in={checked} collapsedSize={40}>
                            <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
                        </Collapse>
                    </div>
                    <div>
                        <Box sx={{ width: '50%' }}>
                            <Collapse orientation="horizontal" in={checked}>
                                <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
                            </Collapse>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                                <Box width={'100px'} height={'100px'} sx={{backgroundColor: theme.palette.primary[50]}}></Box>
                            </Collapse>
                        </Box>
                    </div>
                </Box>
            </Box>
        )
    }
}
