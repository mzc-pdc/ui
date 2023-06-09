import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Stack} from "@mui/system";
import {Skeleton} from "./skeleton";


const meta: Meta<typeof Skeleton> = {
    title: 'Components/FEEDBACK / Skeleton',
    tags: ['autodocs'],
    component: Skeleton,
    parameters: {
        docs: {
            description: {
                component: 'Skeleton Description',
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
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        )
    }
}
