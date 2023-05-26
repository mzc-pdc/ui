import type {Meta, StoryObj} from '@storybook/react';

import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import {Avatar, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/system";
import {List} from './list';
import {ListItem} from "../list-item";
import {ListItemButton} from "../list-item-button";
import {ListItemText} from "../list-item-text";
import {ListItemAvatar} from "../list-item-avatar";
import {IconButton} from "../icon-button";
import {ListItemIcon} from "../list-item-icon";
import {Checkbox} from "../checkbox";

const meta: Meta<typeof List> = {
    title: 'Components/List',
    tags: ['autodocs'],
    component: List,
    parameters: {
        docs: {
            description: {
                component: 'List Description'
            },
        },
    },
    args: { //storybook common args

    }
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playgroud: Story = {
    render: args => {
        return (
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Trash"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton selected>
                        <ListItemText primary="Spam"/>
                    </ListItemButton>
                </ListItem>
                <ListItem
                    secondaryAction={
                        <IconButton circled edge="end" aria-label="comments">
                            <SettingsIcon/>
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <Checkbox color='secondary'
                                      edge="start"
                            />
                        </ListItemIcon>
                        <ListItemText primary={`Line item`}/>
                    </ListItemButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sizes={'16'} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        )
    }
};


export const Variant: Story = {
    render: args => {
        return (
            <Stack gap={4}>
                <Grid container gap={5}>
                    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <List dense>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton selected>
                                    <ListItemText primary="Spam"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Spam"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>


                    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton selected>
                                    <ListItemText primary="Spam"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Spam"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>

                </Grid>

                <Grid container gap={5}>
                    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <List dense>
                            <ListItem
                                secondaryAction={
                                    <IconButton circled edge="end" aria-label="comments">
                                        <SettingsIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox color='secondary'
                                                  edge="start"
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Line item`}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                secondaryAction={
                                    <IconButton circled edge="end" aria-label="comments">
                                        <SettingsIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox color='secondary'
                                                  edge="start"
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Line item`}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                secondaryAction={
                                    <IconButton circled edge="end" aria-label="comments">
                                        <SettingsIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox color='secondary'
                                                  edge="start"
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Line item`}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                secondaryAction={
                                    <IconButton circled edge="end" aria-label="comments">
                                        <SettingsIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox color='secondary'
                                                  edge="start"
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Line item`}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>


                    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <List>

                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar sizes={'16'} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{display: 'inline'}}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>

                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar sizes={'16'} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{display: 'inline'}}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>

                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar sizes={'16'} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{display: 'inline'}}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>

                            <ListItem alignItems="flex-start" disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar sizes={'16'} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{display: 'inline'}}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>

                </Grid>
            </Stack>
        )
    }
};

