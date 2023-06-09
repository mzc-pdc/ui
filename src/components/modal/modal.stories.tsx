import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Typography} from "@mui/material";
import {Modal} from "./modal";
import {Button} from "../button";
import {Box} from "../box";


const meta: Meta<typeof Modal> = {
    title: 'Components/UTILS / Modal',
    tags: ['autodocs'],
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: 'Modal Description',
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
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
            <>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        backgroundColor: '#fff',
                        border: '2px solid #000',
                        boxShadow: 24,
                        padding: 6,
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </>
        )
    }
}
