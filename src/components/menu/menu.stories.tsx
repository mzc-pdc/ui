import type {Meta, StoryObj, ComponentStory} from '@storybook/react';

import React from "react";
import {Checkbox, Divider, Grid} from "@mui/material";
import {Menu} from './menu';
import {Button} from '../button';
import {MenuItem} from "../menu-item";
import {MenuList} from "../menu-list";

const meta = {
    title: 'Components/Menu',
    tags: ['autodocs'],
    component: Menu,
    parameters: {
        docs: {
            description: {
                component: 'Menu Description'
            },
        },
    },
    args: { //storybook common args

    }
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Playgroud: ComponentStory<typeof Menu> = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant={'contained'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu Button
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Checkbox/> Profile Profile Profile </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem size={'medium'} onClick={handleClose}>Account</MenuItem>
                <Divider/>
                <MenuItem size={'medium'} onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
};


export const Variant: ComponentStory<typeof Menu> = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container gap={5} justifyContent={'space-around'}>
            <MenuList>
                <MenuItem onClick={handleClose}>Profile  </MenuItem>
                <MenuItem onClick={handleClose} selected>My account</MenuItem>
                <MenuItem onClick={handleClose}>Account</MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem size={'medium'} onClick={handleClose}>Profile </MenuItem>
                <MenuItem size={'medium'} selected onClick={handleClose}>My account</MenuItem>
                <MenuItem size={'medium'} onClick={handleClose}>Account</MenuItem>
                <Divider/>
                <MenuItem size={'medium'} onClick={handleClose}>Logout</MenuItem>
            </MenuList>
            <MenuList>
                <MenuItem onClick={handleClose}><Checkbox/> Profile </MenuItem>
                <MenuItem onClick={handleClose}><Checkbox/> My account</MenuItem>
                <MenuItem onClick={handleClose} selected><Checkbox/> Account</MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}><Checkbox/> Logout</MenuItem>
            </MenuList>
        </Grid>
    )
};

