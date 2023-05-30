import type { Meta, StoryObj } from '@storybook/react';

import React from "react";
import { ButtonGroup } from './button-group';
import {Button} from "../button";

const meta = {
    title: 'Components/Button Group',
    tags: ['autodocs'],
    component: ButtonGroup,
    parameters: {
        docs: {
            description: {
                component: 'Button Group Description'
            },
        },
    },
    args: { //storybook common args
        color: `primary`,
        children: <><Button>button</Button><Button>button</Button></>
    }
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const outlined: Story = {
    args: {
        variant: `outlined`,
    },
};
