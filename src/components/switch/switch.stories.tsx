import {Meta, StoryObj} from "@storybook/react";
import {Switch} from "./switch";

const meta: Meta<typeof Switch> = {
    title: 'Components/INPUTS/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        color: "success",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "success",
    },
}
export const Disabled: Story = {
    args: {
        color: "success",
        disabled: true,
        checked: true,
    },
}
