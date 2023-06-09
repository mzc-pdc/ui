import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Typography} from "./typography";
import {Box} from "../box";


const meta: Meta<typeof Typography> = {
    title: 'Components / Typography',
    tags: ['autodocs'],
    component: Typography,
    parameters: {
        docs: {
            description: {
                component: 'Typography Description',
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
            <Box sx={{ width: '100%' , display: `flex`, flexDirection: `column`, gap: 5}}>
                <Typography variant={'h1'}>
                   Headline-1-Bold
                </Typography>
                <Typography variant={'h2'}>
                    Headline-2-Bold
                </Typography>
                <Typography variant={'h3'}>
                    Headline-3-Bold
                </Typography>

                <Typography variant={'subtitle1'}>
                    Title-1-Bold
                </Typography>
                <Typography variant={'subtitle2'}>
                    Title-2-Bold
                </Typography>
                <Typography variant={'subtitle3'}>
                    Title-3-Bold
                </Typography>

                <Typography variant={'body1Bold'}>
                    Body-1-Bold
                </Typography>
                <Typography variant={'body1'}>
                    Body-1-Medium
                </Typography>
                <Typography variant={'body1Regular'}>
                    Body-1-Regular
                </Typography>

                <Typography variant={'body2Bold'}>
                    Body-2-Bold
                </Typography>
                <Typography variant={'body2'}>
                    Body-2-Medium
                </Typography>
                <Typography variant={'body2Regular'}>
                    Body-2-Regular
                </Typography>

                <Typography variant={'body3Bold'}>
                    Body-3-Bold
                </Typography>
                <Typography variant={'body3'}>
                    Body-3-Medium
                </Typography>
                <Typography variant={'body3Regular'}>
                    Body-3-Regular
                </Typography>

                <Typography variant={'body4Bold'}>
                    Body-4-Bold
                </Typography>
                <Typography variant={'body4'}>
                    Body-4-Medium
                </Typography>
                <Typography variant={'body4Regular'}>
                    Body-4-Regular
                </Typography>
            </Box>
        )
    }
}
