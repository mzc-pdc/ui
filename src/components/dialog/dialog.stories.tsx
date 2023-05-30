import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {Grid,  Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import {Dialog} from "./dialog";
import {Button} from "../button";
import {DialogTitle} from "../dialog-title";
import {DialogContent} from "../dialog-content";
import {DialogContentText} from "../dialog-content-text";
import {DialogActions} from "../dialog-actions";
import {DialogPanel} from "../dialog-panel";
import {IconButton} from "../icon-button";


const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    tags: ['autodocs'],
    component: Dialog,
    argTypes: {
        variant: {
            options:  [ 'confirm' , 'alert' , 'simple' , 'option' , 'create'],
            control: { type: 'select' },
        }
    },
    args: { //storybook common args
    }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    dialog
                </Button>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant={'text'} color={'secondary'}>Cancel</Button>
                        <Button onClick={handleClose} variant={'contained'} color={'primary'}>Select</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export const Confirm: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    dialog
                </Button>
                <Dialog onClose={handleClose} open={open} variant={'confirm'}>
                    <DialogTitle>Title</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            If you archive the asset, you will be charged the <Typography color={'primary'} variant={'body1Bold'} component={'strong'}>90-day</Typography> archive amount immediately.<br/>
                            Are you sure you want to archive?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant={'text'} color={'secondary'}>Cancel</Button>
                        <Button onClick={handleClose} variant={'contained'} color={'primary'}>Select</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export const Alert: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    dialog
                </Button>
                <Dialog onClose={handleClose} open={open} variant={'alert'}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Discard unsaved changes?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant={'text'} color={'secondary'} size={'small'}>Cancel</Button>
                        <Button onClick={handleClose} variant={'text'} color={'primary'} size={'small'}>Discard</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export const Option: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    dialog
                </Button>
                <Dialog onClose={handleClose} open={open} variant={'option'}>
                    <DialogContent>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant={'text'} color={'secondary'} size={'small'}>Cancel</Button>
                        <Button onClick={handleClose} variant={'text'} color={'primary'} size={'small'}>Discard</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export const Create: Story = {
    render: args => {
        const [open, setOpen] = React.useState(false);
        const [informationOpen, setInformationOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const handleClickInformationOpen = () => {
            setInformationOpen(true)
        }
        const handleCloseInformationOpen = () => {
            setInformationOpen(false)
        }

        return (
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    dialog
                </Button>
                <Dialog onClose={handleClose} open={open} variant={'create'} informationOpen={informationOpen}>
                    <DialogTitle>
                        <Grid container>
                            <Typography>
                                {"Use Google's location service?"}
                            </Typography>
                            <Button variant={'solid'} onClick={handleClickInformationOpen}>
                                info
                            </Button>
                        </Grid>
                        <IconButton circled onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant={'text'} color={'secondary'}>Cancel</Button>
                        <Button onClick={handleClose} variant={'contained'} color={'primary'}>Add</Button>
                    </DialogActions>
                    <DialogPanel
                        open={informationOpen}
                        variant='permanent'
                        anchor='right'
                    >
                        {informationOpen ?
                            <Grid container direction={'column'}>
                                <Grid item>
                                    <Typography>Information</Typography>
                                    <Button onClick={handleCloseInformationOpen}>close</Button>
                                </Grid>
                                <Grid item xs>
                                    Information Content
                                    Information Content
                                </Grid>
                            </Grid>
                            :
                            <IconButton onClick={handleClickInformationOpen} circled><InfoIcon/></IconButton>
                        }
                    </DialogPanel>
                </Dialog>
            </div>
        )
    }
}