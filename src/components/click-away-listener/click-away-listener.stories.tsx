import { Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Box} from "../box";
import {ClickAwayListener} from './click-away-listener';

const meta: Meta<typeof ClickAwayListener> = {
    title: 'Components/UTILS/ClickAwayListener',
    tags: ['autodocs'],
    component: ClickAwayListener,
    parameters: {
        docs: {
            description: {
                component: 'ClickAwayListener Description',
            },
        },
    },
    args: {
        //storybook common args
    },
} satisfies Meta<typeof ClickAwayListener>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen((prev) => !prev);
        };

        const handleClickAway = () => {
            setOpen(false);
        };
        return (
            <Box sx={{height: `500px`}}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{position: 'relative'}}>
                    <button type="button" onClick={handleClick}>
                        Open menu ClickAwayListener
                    </button>
                    {open ? (
                        <Box sx={{position: `absolute`, top: `100%`, p: 3, mt: 1, border: `1px solid #dfdfee`, borderRadius: 1, }}>
                            Click me, I will stay visible until you click outside.
                        </Box>
                    ) : null}
                </Box>
            </ClickAwayListener>
            </Box>
        )
    }
}
