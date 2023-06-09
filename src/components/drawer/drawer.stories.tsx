import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Drawer} from "./drawer";
import {Button} from "../button";
import {Box} from "../box";
import {List} from "../list";
import {ListItem} from "../list-item";
import {ListItemButton} from "../list-item-button";
import {ListItemIcon} from "../list-item-icon";
import {ListItemText} from "../list-item-text";
import {Divider} from "../divider";
import {SwipeableDrawer} from "../swipeable-drawer";

const meta: Meta<typeof Drawer> = {
    title: 'Components/NAVIGATION/Drawer',
    tags: ['autodocs'],
    component: Drawer,
    args: { //storybook common args
    }
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {

        type Anchor = 'top' | 'left' | 'bottom' | 'right';

        const [state, setState] = React.useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
        });

        const toggleDrawer =
            (anchor: Anchor, open: boolean) =>
                (event: React.KeyboardEvent | React.MouseEvent) => {
                    if (
                        event.type === 'keydown' &&
                        ((event as React.KeyboardEvent).key === 'Tab' ||
                            (event as React.KeyboardEvent).key === 'Shift')
                    ) {
                        return;
                    }

                    setState({...state, [anchor]: open});
                };

        const list = (anchor: Anchor) => (
            <Box
                sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
        return (

            <div>
                {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        )
    }
}


export const Swipeable: Story = {
    render: args => {
        type Anchor = 'top' | 'left' | 'bottom' | 'right';
        const [state, setState] = React.useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
        });

        const toggleDrawer =
            (anchor: Anchor, open: boolean) =>
                (event: React.KeyboardEvent | React.MouseEvent) => {
                    if (
                        event &&
                        event.type === 'keydown' &&
                        ((event as React.KeyboardEvent).key === 'Tab' ||
                            (event as React.KeyboardEvent).key === 'Shift')
                    ) {
                        return;
                    }

                    setState({ ...state, [anchor]: open });
                };

        const list = (anchor: Anchor) => (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
        return (
            <div>
                {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        )
    }
}