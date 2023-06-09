import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Stack} from "@mui/system";
import {theme} from "../../themes";
import {Avatar} from "./avatar";
import {AvatarGroup} from "../avatar-group";


const meta: Meta<typeof Avatar> = {
    title: 'Components/DATA DISPLAY / Avatar',
    tags: ['autodocs'],
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component: 'Avatar Description',
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
        return (
            <Stack direction="row" spacing={2}>
                <Avatar
                    sx={{ bgcolor: theme.palette.primary[500] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    B
                </Avatar>
                <Avatar
                    sx={{ bgcolor: theme.palette.primary[500] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                />
                <Avatar src="/broken-image.jpg" />
            </Stack>

        )
    }
}

export const Groups: Story = {
    render: args => {
        return (
            <div style={{display: `flex`, alignItems: `center`, justifyContent: `center`}}>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ bgcolor: theme.palette.primary[500] }}/>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ bgcolor: theme.palette.primary[500] }}/>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ bgcolor: theme.palette.primary[500] }}/>
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{ bgcolor: theme.palette.primary[500] }}/>
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ bgcolor: theme.palette.primary[500] }}/>
                </AvatarGroup>
            </div>
        )
    }
}