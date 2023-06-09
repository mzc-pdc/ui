import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import {SpeedDial} from "./speed-dial";
import {SpeedDialIcon} from "../speed-dial-icon";
import {SpeedDialAction} from "../speed-dial-action";
import {Box} from "../box";


const meta: Meta<typeof SpeedDial> = {
    title: 'Components/NAVIGATION / SpeedDial',
    tags: ['autodocs'],
    component: SpeedDial,
    parameters: {
        docs: {
            description: {
                component: 'SpeedDial Description',
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
        const actions = [
            { icon: <FileCopyIcon />, name: 'Copy' },
            { icon: <SaveIcon />, name: 'Save' },
            { icon: <PrintIcon />, name: 'Print' },
            { icon: <ShareIcon />, name: 'Share' },
        ];
        return (
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        )
    }
}
