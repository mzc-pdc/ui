import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Typography} from "@mui/material";
import {Popper} from "./popper";
import {Button} from "../button";


const meta: Meta<typeof Popper> = {
    title: 'Components / Popper',
    tags: ['autodocs'],
    component: Popper,
    parameters: {
        docs: {
            description: {
                component: 'Popper Description',
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
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(anchorEl ? null : event.currentTarget);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;

        return (
            <div>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Open Popper
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                </Popper>
            </div>
        )
    }
}
