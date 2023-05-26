import {Meta, StoryObj} from '@storybook/react';
import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import {AppBar} from './app-bar';
import {Toolbar} from "../toolbar";
import {IconButton} from "../icon-button";
import {Button} from "../button";

const meta: Meta<typeof AppBar> = {
    title: 'Components / AppBar',
    tags: ['autodocs'],
    component: AppBar,
    parameters: {
        docs: {
            description: {
                component: 'AppBar Description',
            },
        },
    },
    args: {
        //storybook common args
        color: `transparent`,
        position: `static`,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return (
            <AppBar position={args.position} color={args.color}>
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Button color="primary">Login</Button>
                </Toolbar>
            </AppBar>

        )
    }
}