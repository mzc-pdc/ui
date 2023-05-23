import type {Meta, StoryObj, ComponentStory} from '@storybook/react';

import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import {Grid, Box, Stack, InputAdornment} from "@mui/material";
import {TextField} from './text-field';
import {IconButton} from "../icon-button";
import {FormHelperText} from "../form-helper-text";
import {FormControl} from "../form-control";

const meta = {
    title: 'Components/TextField',
    tags: ['autodocs'],
    component: TextField,
    parameters: {
        docs: {
            description: {
                component: 'TextField Description',
            },
        },
    },
    args: {
        label: `Label`,
        variant: `outlined`,
        disabled: false,
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: `Label`,
    },
};

export const Variants: ComponentStory<typeof TextField> = () => (
    <Stack gap={3}>
        <TextField placeholder="Placeholder" variant="outlined" fullWidth/>
        <TextField
            placeholder="Outlined"
            label="Outlined"
            variant="outlined"
            fullWidth
        />
        <TextField
            placeholder="filled"
            variant="filled"
            fullWidth
        />
    </Stack>
);


export const Size: ComponentStory<typeof TextField> = () => (
    <Stack gap={3}>
        <TextField
            placeholder="Placeholder small"
            variant="outlined"
            fullWidth
            size="small"
        />
        <TextField placeholder="Placeholder" variant="outlined" fullWidth/>
        <TextField
            placeholder="Placeholder small"
            label="Outlined small"
            variant="outlined"
            size="small"
            fullWidth
        />
        <TextField
            placeholder="Placeholder"
            label="Outlined medium"
            variant="outlined"
            fullWidth
        />
        <TextField
            placeholder="Filled small"
            variant="filled"
            fullWidth
            size="small"
        />
        <TextField
            placeholder="Placeholder"
            variant="filled"
            fullWidth
        />
    </Stack>
)


export const Search: ComponentStory<typeof TextField> = () => (
    <Stack gap={3}>
        <TextField
            type="search"
            placeholder="Search"
            variant="outlined"
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon fontSize={'small'}/>
                    </InputAdornment>
                ),
            }}
        />
        <TextField
            type="search"
            placeholder="Search"
            variant="filled"
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon fontSize={'small'}/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton circled>
                            <TuneIcon fontSize={'small'}/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    </Stack>
)
export const Textarea: ComponentStory<typeof TextField> = () => (
    <Stack gap={3}>
        <Box>
            <TextField
                placeholder="Placeholder"
                variant="outlined"
                multiline
                fullWidth
            />
        </Box>
        <Box>
            <FormControl variant="outlined" fullWidth>
                <TextField
                    placeholder="Placeholder"
                    variant="outlined"
                    multiline
                    fullWidth
                    helperText="Helper text."
                />
                <FormHelperText>
                    <Grid component="span" container gap={1} alignItems="center">
                        0 / 255 bytes
                    </Grid>
                </FormHelperText>
            </FormControl>
        </Box>
        <Box>
            <FormControl variant="outlined" fullWidth>
                <TextField
                    placeholder="Placeholder"
                    variant="outlined"
                    multiline
                    fullWidth
                    error
                    helperText="Incorrect entry."
                />
                <FormHelperText>
                    <Grid component="span" container gap={1} alignItems="center">
                        <ErrorIcon/>0 / 255 bytes
                    </Grid>
                </FormHelperText>
            </FormControl>
        </Box>
    </Stack>
)
