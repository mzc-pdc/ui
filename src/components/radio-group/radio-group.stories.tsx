import type { Meta, StoryObj } from '@storybook/react';

import React from "react";
import { RadioGroup } from './radio-group';
import {FormControlLabel} from "../form-control-label";
import {Radio} from "../radio";

const meta = {
    title: 'Components/INPUTS/Radio Group',
    tags: ['autodocs'],
    component: RadioGroup,
    parameters: {
        docs: {
            description: {
                component: 'Radio Group Description'
            },
        },
    },
    args: { //storybook common args
        children: <><FormControlLabel value="female" control={<Radio color={'secondary'} />} label="Female" /><FormControlLabel value="male" control={<Radio  color={'secondary'}/>} label="Male" /></>
    }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const direction: Story = {
    args: {
        row: true
    },
};
