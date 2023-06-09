import { Meta, StoryObj} from "@storybook/react";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import {Badge} from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/DATA DISPLAY/Badge',
    tags: ['autodocs'],
    component: Badge,
    parameters: {
        docs: {
            description: {
                component: 'Badge Description',
            },
        },
    },
    args: {
        //storybook common args
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        return (
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
        )
    }
}
