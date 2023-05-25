import {Meta, StoryObj} from "@storybook/react";
import {Checkbox} from "./checkbox";

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        indeterminate: false,
        color: "default",
    },
}
export const Disabled: Story = {
    args: {
        color: "default",
        disabled: true,
        checked: true,
    },
}

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        disabled: false,
        checked: true,
        color: "default",
    },
}