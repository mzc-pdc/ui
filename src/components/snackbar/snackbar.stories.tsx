import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Stack} from "@mui/system";
import {Snackbar} from "./snackbar";
import {Button} from "../button";
import {Alert} from "../alert";


const meta: Meta<typeof Snackbar> = {
    title: 'Components/FEEDBACK / Snackbar',
    tags: ['autodocs'],
    component: Snackbar,
    parameters: {
        docs: {
            description: {
                component: 'Snackbar Description',
            },
        },
    },
    args: {
        //storybook common args
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }

            setOpen(false);
        };
        return (
            <Stack spacing={2} >
                <Button variant="outlined" onClick={handleClick}>
                    Open success snackbar
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{vertical: "top", horizontal: "right"}}
                >
                    <div>
                        <Alert onClose={handleClose} color="success" variant={'filled'}>
                            This is a success message!
                        </Alert>
                    </div>
                </Snackbar>
                <Alert color="error" variant={'filled'} severity={'error'} onClose={handleClose}>This is an error message!</Alert>
                <Alert color="warning" variant={'filled'} severity={'warning'} onClose={handleClose}>This is a warning message!</Alert>
                <Alert color="info" variant={'filled'} severity={'info'} onClose={handleClose}>This is an information message!</Alert>
                <Alert color="success" variant={'filled'} severity={'success'} onClose={handleClose}>This is a success message!</Alert>
            </Stack>
        );
    }
}
