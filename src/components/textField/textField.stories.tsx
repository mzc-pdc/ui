import {ComponentStory, Meta, StoryObj} from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Grid";
import {Box, FormControl, FormHelperText, InputAdornment, Stack, Typography} from "@mui/material";
import {TextField} from "./textField";
import {IconButton} from '../iconButton';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    tags: ['autodocs'],
    component: TextField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'placeholder'
    },
}
export const Filled: Story = {
    args: {
        variant: 'filled',
        size: 'medium',
        placeholder: 'placeholder'
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        size: 'medium',
        placeholder: 'placeholder'
    },
};

export const TextFields: ComponentStory<typeof TextField>= () => (
    <Box gap={1}>
        <Stack gap={5}>
            <Typography variant="h1">TextField</Typography>
            <Box>
                <TextField
                    placeholder="Placeholder small"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Box>
            <Box>
                <TextField placeholder="Placeholder" variant="outlined" fullWidth />
            </Box>
            <Box>
                <TextField
                    placeholder="Placeholder"
                    variant="outlined"
                    fullWidth
                    error
                    helperText="Incorrect entry."
                    inputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {/*<ErrorIcon />*/}
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box>
                <TextField
                    placeholder="Placeholder small"
                    id="outlined-basic-small"
                    label="Outlined small"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
            </Box>
            <Box>
                <TextField
                    placeholder="Placeholder"
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            <Box>
                <TextField
                    placeholder="Placeholder small"
                    id="filled-basic"
                    variant="filled"
                    fullWidth
                    size="small"
                />
            </Box>
            <Box>
                <TextField
                    placeholder="Placeholder"
                    id="filled-basic"
                    variant="filled"
                    fullWidth
                />
            </Box>
            {/* <Box>
            <TextField
              placeholder="Placeholder small"
              id="filled-basic"
              label="Filled small"
              variant="filled"
              fullWidth
              size="small"
            />
          </Box>
          <Box>
            <TextField
              placeholder="Placeholder"
              id="filled-basic"
              label="Filled"
              variant="filled"
              fullWidth
            />
          </Box> */}
            <Typography>Search</Typography>
            <Typography>기본 TextField 에 type= search 추가시 변형</Typography>
            <Box>
                <TextField
                    type="search"
                    placeholder="Search"
                    id="outlined-search"
                    variant="outlined"
                    fullWidth
                    inputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                icon
                                {/*<SearchIcon />*/}
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box>
                <TextField
                    type="search"
                    placeholder="Search"
                    id="filled-search"
                    variant="filled"
                    fullWidth
                    inputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                icon
                                {/*<SearchIcon />*/}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    icon
                                    {/*<SettingIcon />*/}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            {/* <Box>
            <TextField
              placeholder="Placeholder"
              id="standard-basic"
              label="Standard"
              variant="standard"
              fullWidth
            />
          </Box> */}
            <Typography variant="h1">TextArea</Typography>
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
                            {/*<ErrorIcon />0 / 255 bytes*/}
                        </Grid>
                    </FormHelperText>
                </FormControl>
            </Box>
        </Stack>
    </Box>
)