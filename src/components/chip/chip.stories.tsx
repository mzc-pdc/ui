import {ComponentStory, Meta, StoryObj} from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Grid";
import {Chip} from "./chip";

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    tags: ['autodocs'],
    component: Chip,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "default",
        label: <>Default</>
    },
}
export const Filled: Story = {
    args: {
        variant: 'filled',
        size: 'medium',
        label: <># Tag</>
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        size: 'medium',
        label: <># Tag</>
    },
};

export const Chips: ComponentStory<typeof Chip>= () => (
    <Grid container gap={2}>
        <Chip
            variant="filled"
            label="filled chip"
            size="small"
            onClick={() => {
                console.log("click");
            }}
            onDelete={() => {
                console.log("delete");
            }}
        />
        <Chip
            variant="outlined"
            label="Outlined chip"
            size="small"
            onClick={() => {
                console.log("click");
            }}
            onDelete={() => {
                console.log("delete");
            }}
            // deleteIcon={<CancelIcon />}
        />
        <Chip
            variant="filled"
            label="filled chip"
            color="error"
            size="small"
            onClick={() => {
                console.log("click");
            }}
            onDelete={() => {
                console.log("delete");
            }}
        />
        <Chip
            variant="outlined"
            label="outlined chip"
            color="error"
            size="small"
            // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            onClick={() => {
                console.log("click");
            }}
            onDelete={() => {
                console.log("delete");
            }}
            // deleteIcon={<CancelIcon />}
        />
    </Grid>
)