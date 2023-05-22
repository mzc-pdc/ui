import type { Meta, StoryObj } from '@storybook/react';

import React from "react";
import {Build} from "@mui/icons-material";
import { Fab } from './fab';

const meta = {
    title: 'Components/Floating Action Button',
    tags: ['autodocs'],
    component: Fab,
    parameters: {
        docs: {
            description: {
                component: 'Floating Action Button Description'
            },
        },
    },
    args: { //storybook common args
        children: <Build/>
    }
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const size: Story = {
    args: {
        size: `small`,
    },
};
