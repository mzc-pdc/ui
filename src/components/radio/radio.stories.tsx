import {Meta, StoryObj} from "@storybook/react";
import {Radio} from "./radio";

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    tags: ['autodocs'],
    component: Radio,
    args: {
        color: "secondary",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "secondary",
    },
}
export const Disabled: Story = {
    args: {
        color: "secondary",
        disabled: true,
        checked: true,
    },
}
