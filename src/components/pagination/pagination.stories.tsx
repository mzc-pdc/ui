import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import CachedIcon from '@mui/icons-material/Cached';
import {Pagination} from "./pagination";
import {TablePagination} from "../table-pagination";
import {Box} from "../box";
import {IconButton} from "../icon-button";
import {Button} from "../button";
import {Menu} from "../menu";
import {MenuItem} from "../menu-item";


const meta: Meta<typeof Pagination> = {
    title: 'Components / Pagination',
    tags: ['autodocs'],
    component: Pagination,
    parameters: {
        docs: {
            description: {
                component: 'Pagination Description',
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
        return (
            <>
                <Pagination count={10} showFirstButton showLastButton/>
                <Pagination count={10} defaultPage={6} showFirstButton showLastButton/>
            </>
        )
    }
}

export const Simple: Story = {
    render: args => {
        const [page, setPage] = React.useState(2);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);

        const handleChangePage = (
            event: React.MouseEvent<HTMLButtonElement> | null,
            newPage: number,
        ) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        };

        return (
            <Box sx={{display: `flex`, alignItems: `center`}}>
                <IconButton circled><CachedIcon/></IconButton>
                <TablePagination
                    component={'div'}
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={''}
                    rowsPerPageOptions={[
                        {label: '10 views', value: 10},
                        {label: '20 views', value: 20}
                    ]}
                />
            </Box>
        )
    }
}


export const SimpleFilterButton: Story = {
    render: args => {
        const [page, setPage] = React.useState(2);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        const handleChangePage = (
            event: React.MouseEvent<HTMLButtonElement> | null,
            newPage: number,
        ) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        };

        return (
            <Box sx={{display: `flex`, alignItems: `center`}}>
                <IconButton circled><CachedIcon/></IconButton>
                <Button
                    variant={'text'}
                    color={'secondary'}
                    size={'medium'}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{paddingLeft: `8px`, paddingRight: `8px`}}
                >
                    1-20 of 500
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Newest</MenuItem>
                    <MenuItem onClick={handleClose}>Oldest</MenuItem>
                </Menu>
                <TablePagination
                    sx={{'.MuiToolbar-root': {padding: 0}}}
                    component={'div'}
                    count={100}
                    page={page}
                    labelDisplayedRows={() => {
                        console.log('빈함수')
                    }}
                    labelRowsPerPage={''}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[
                        {label: '10 views', value: 10},
                        {label: '20 views', value: 20}
                    ]}
                />
            </Box>
        )
    }
}