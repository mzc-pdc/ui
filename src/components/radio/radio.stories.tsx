import {Meta, StoryObj} from "@storybook/react";
import {Radio} from "./radio";

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    tags: ['autodocs'],
    component: Radio,
    args: {
        color: "default",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
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
