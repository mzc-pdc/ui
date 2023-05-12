import {Meta, StoryObj} from "@storybook/react";
import {Select} from "./select";

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    tags: ['autodocs'],
    component: Select,
    args: {
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
