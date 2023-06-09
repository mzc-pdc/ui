import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Typography} from "@mui/material";
import {Popover} from "./popover";
import {Button} from "../button";


const meta: Meta<typeof Popover> = {
    title: 'Components /UTILS/ Popover',
    tags: ['autodocs'],
    component: Popover,
    parameters: {
        docs: {
            description: {
                component: 'Popover Description',
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
        const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (

            <div>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Open Popover
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>
            </div>
        )
    }
}
