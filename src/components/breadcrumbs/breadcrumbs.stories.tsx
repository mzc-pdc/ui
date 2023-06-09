import { Meta, StoryObj} from "@storybook/react";
import { Link, Typography} from "@mui/material";
import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Breadcrumbs} from './breadcrumbs';
import {Button} from '../button';
import {IconButton} from '../icon-button';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Components/NAVIGATION/Breadcrumbs',
    tags: ['autodocs'],
    component: Breadcrumbs,
    parameters: {
        docs: {
            description: {
                component: 'Breadcrumbs Description',
            },
        },
    },
    args: {
        //storybook common args
    },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        return (
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="primary" href="/" variant={'body3Regular'}>
                    PDC
                </Link>
                <Link
                    underline="hover"
                    color="primary"
                    href="/"
                    variant={'body3Regular'}
                >
                    Core
                </Link>
                <Typography color="text.secondary" variant={'body3Regular'}>Breadcrumbs</Typography>
            </Breadcrumbs>
        )
    }
}


export const Buttons: Story = {
    render: args => {
        return (
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>}>
                <Button
                    variant={'text'}
                    size={'small'}
                    color={'secondary'}
                >
                    PDC
                </Button>
                <Button
                    variant={'text'}
                    size={'small'}
                    color={'secondary'}
                >
                    Core
                </Button>
                <IconButton circled>
                    <MoreHorizIcon/>
                </IconButton>
                <Button
                    variant={'text'}
                    size={'small'}
                    color={'secondary'}
                >
                    Breadcrumbs
                </Button>
            </Breadcrumbs>
        )
    }
}
