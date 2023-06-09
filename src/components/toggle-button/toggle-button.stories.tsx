import {Meta, StoryObj} from "@storybook/react";
import CheckIcon from '@mui/icons-material/Check';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import React from "react";
import {ToggleButton} from "./toggle-button";
import {ToggleButtonGroup} from "../toggle-button-group";

const meta: Meta<typeof ToggleButton> = {
    title: 'Components/INPUTS/ToggleButton',
    component: ToggleButton,
    tags: ['autodocs'],
    args: {
        children: <CheckIcon/>
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
    render: args => {
        const [selected, setSelected] = React.useState(false);

        return (
            <ToggleButton
                value="check"
                size={'small'}
                color={'primary'}
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            >
                <CheckIcon />
            </ToggleButton>
        );
    }
}

export const Group: Story = {
    render: args => {

        const [alignment, setAlignment] = React.useState<string | null>('left');

        const handleAlignment = (
            event: React.MouseEvent<HTMLElement>,
            newAlignment: string | null,
        ) => {
            setAlignment(newAlignment);
        };
        return (
            <ToggleButtonGroup
                value={alignment}
                exclusive
                size="small"
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value={'left'}>
                    <FormatAlignLeftIcon/>
                </ToggleButton>
                <ToggleButton value={'center'}>
                    <FormatAlignCenterIcon/>
                </ToggleButton>
                <ToggleButton value={'right'}>
                    <FormatAlignRightIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        )
    }
}

