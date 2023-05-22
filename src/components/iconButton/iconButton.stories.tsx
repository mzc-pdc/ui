import type {Meta, StoryObj, ComponentStory} from '@storybook/react';

import React from 'react';
import {Build} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import {Divider} from "@mui/material";
import {IconButton} from './iconButton';

const meta = {
    title: 'Components/IconButton',
    tags: ['autodocs'],
    component: IconButton,
    parameters: {
        docs: {
            description: {
                component: 'IconButton Description'
            },
        },
    },
    args: { //storybook common args
        children: <Build/>,
        size: `medium`,
        disabled: false,
        variant: 'outlined'
    }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const playground: Story = {
    args: {
        variant: `outlined`,
    },
};

// export const contained: Story = {
//     args: {
//         variant: `contained`,
//     },
// };

export const Variants: ComponentStory<typeof IconButton> = () => (
    <Grid container gap={2} direction={'column'}>
        <Grid item>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>default</Grid>
                <Grid item><IconButton><Build/></IconButton></Grid>
            </Grid>
        </Grid>
        <Divider orientation={'horizontal'} flexItem/>
        <Grid item>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>contained</Grid>
                <Grid item><IconButton variant="contained"><Build/></IconButton></Grid>
            </Grid>
        </Grid>
        <Divider orientation={'horizontal'} flexItem/>
        <Grid item>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>outlined</Grid>
                <Grid item><IconButton variant="outlined"><Build/></IconButton></Grid>
            </Grid>
        </Grid>
        <Divider orientation={'horizontal'} flexItem/>
        <Grid item>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>dashed</Grid>
                <Grid item><IconButton variant="dashed"><Build/></IconButton></Grid>
            </Grid>
        </Grid>
        <Divider orientation={'horizontal'} flexItem/>
        <Grid item>
            <Grid container alignItems={'center'}>
                <Grid item xs={3}>circled</Grid>
                <Grid item><IconButton variant={'outlined'} circled={true}><Build/></IconButton></Grid>
            </Grid>
        </Grid>
    </Grid>
);
export const Size: ComponentStory<typeof IconButton> = () => (
    <Grid container alignItems={'center'} gap={2}>
        <IconButton variant="contained" size={'Xsmall'}><Build/></IconButton>
        <IconButton variant="contained" size={'small'}><Build/></IconButton>
        <IconButton variant="contained" size={'medium'}><Build/></IconButton>
        <IconButton variant="contained" size={'large'}><Build/></IconButton>
    </Grid>
);