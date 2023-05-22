import type { Meta, StoryObj } from '@storybook/react';

import {Build} from "@mui/icons-material";
import React from "react";
import { ToggleButton, ToggleButtonGroup } from './toggleButton';
import {ExtendedToggleButtonGroupProps, ExtendedToggleButtonProps} from './types';

const meta = {
    title: 'Components/ToggleButton',
    tags: ['autodocs'],
    component: ToggleButton,
    parameters: {
        docs: {
            description: {
                component: 'ToggleButton Description'
            },
        },
    },
    args: {
        children: <Build/>,
        size: `small`,
        circled: true
    }
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const playground: Story = {
    args: {
        value: `check`,
    }
};
export const toggleButtonGroup = (args: ExtendedToggleButtonGroupProps & ExtendedToggleButtonProps) => (
    <>
        <ToggleButtonGroup>
            <ToggleButton {...args} value={'check'} selected={true}/>
            <ToggleButton {...args} value={'check'}/>
        </ToggleButtonGroup>
    </>
);