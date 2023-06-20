import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import {alpha} from "@mui/material";
import {
    AppBar,
    Box,
    Grid,
    Stack,
    Toolbar,
} from '../../components';

const meta: Meta = {
    title: 'TEMPLATE/Layout',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Layout ',
            },
        },
    },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: args => {
        return (
            <Stack sx={{height: ` calc(100vh - 32px)`}}>
                <AppBar position={'sticky'} color={'transparent'} sx={{backgroundColor: alpha(`#6b769a`, 0.3)}}>
                    <Toolbar>
                        header
                    </Toolbar>
                </AppBar>
                <Grid container sx={{height: `100%`}}>
                    <Grid item sx={{height: `100%`, width: `255px`, backgroundColor: alpha('#bdc2d4', 0.2)}}>
                        <nav>side nav</nav>
                    </Grid>
                    <Grid item xs>
                        <Grid container flexDirection={'column'} sx={{height: `100%`}}>
                            <Grid item xs pt={2} px={4} sx={{backgroundColor: alpha('#c9d4f4', 0.5)}}>
                                container
                            </Grid>
                            <Grid item sx={{backgroundColor: alpha('#6b769a', 0.2)}}>
                                <footer>footer</footer>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>
        )
    }
}


export const Detail: Story = {
    render: args => {
        return (
            <Stack sx={{height: ` calc(100vh - 32px)`}}>
                <AppBar position={'sticky'} color={'transparent'} sx={{backgroundColor: alpha(`#6b769a`, 0.3)}}>
                    <Toolbar>
                        header
                    </Toolbar>
                </AppBar>
                <Grid container sx={{height: `100%`}}>
                    <Grid item sx={{height: `100%`, width: `255px`, backgroundColor: alpha('#bdc2d4', 0.2)}}>
                        <nav>side nav</nav>
                    </Grid>
                    <Grid item xs>
                        <Grid container flexDirection={'column'} sx={{height: `100%`}}>
                            <Grid item xs py={2} px={4}>
                                <Grid container sx={{height: `100%`}} gap={2.5}>
                                    <Grid item xs sx={{height: `100%`}}>
                                        <Box sx={{height: `100%`, backgroundColor: alpha('#c9d4f4', 0.5)}}>
                                            main
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} sx={{height: `100%`}}>
                                        <Box sx={{height: `100%`,  backgroundColor: alpha('#6b769a', 0.3)}}>
                                            sub
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{backgroundColor: alpha('#6b769a', 0.2)}}>
                                <footer>footer</footer>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>
        )
    }
}


export const Detail2: Story = {
    render: args => {
        return (
            <Stack sx={{height: ` calc(100vh - 32px)`}}>
                <AppBar position={'sticky'} color={'transparent'} sx={{backgroundColor: alpha(`#6b769a`, 0.3)}}>
                    <Toolbar>
                        header
                    </Toolbar>
                </AppBar>
                <Grid container sx={{height: `100%`}}>
                    <Grid item sx={{height: `100%`, width: `255px`, backgroundColor: alpha('#bdc2d4', 0.2)}}>
                        <nav>side nav</nav>
                    </Grid>
                    <Grid item xs>
                        <Grid container flexDirection={'column'} sx={{height: `100%`}}>
                            <Grid item xs py={2} px={4}>
                                <Grid container sx={{height: `100%`}} gap={2.5}>
                                    <Grid item xs={4} sx={{height: `100%`, backgroundColor: alpha('#c9d4f4', 0.5)}}>
                                        main
                                    </Grid>
                                    <Grid item xs>
                                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Box sx={{height: `100px`, backgroundColor: alpha('#6b769a', 0.3)}}>
                                                    item
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Box sx={{height: `100px`, backgroundColor: alpha('#6b769a', 0.3)}}>
                                                    item
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Box sx={{height: `100px`, backgroundColor: alpha('#6b769a', 0.3)}}>
                                                    item
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Box sx={{height: `100px`, backgroundColor: alpha('#6b769a', 0.3)}}>
                                                    item
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Box sx={{height: `100px`, backgroundColor: alpha('#6b769a', 0.3)}}>
                                                    item
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Box sx={{height: `100px`, backgroundColor: alpha('#6b769a', 0.3)}}>
                                                    item
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{backgroundColor: alpha('#6b769a', 0.2)}}>
                                <footer>footer</footer>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>
        )
    }
}