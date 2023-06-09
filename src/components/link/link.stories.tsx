import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Link} from "./link";


const meta: Meta<typeof Link> = {
    title: 'Components/NAVIGATION / Link',
    tags: ['autodocs'],
    component: Link,
    parameters: {
        docs: {
            description: {
                component: 'Link Description',
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
            <Link>link</Link>
        )
    }
}
