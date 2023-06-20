import { Meta, StoryObj} from "@storybook/react";
import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import {Grid} from "../grid";
import {Box} from "../box";
import {Chip} from './chip';
import { Typography } from "../typography";
import {Avatar} from "../avatar";
import {Divider} from "../divider";
import { Badge } from "../badge";

const meta: Meta<typeof Chip> = {
    title: 'Components/DATA DISPLAY/Chip',
    tags: ['autodocs'],
    component: Chip,
    parameters: {
        docs: {
            description: {
                component: 'Chip Description',
            },
        },
    },
    args: {
        //storybook common args
        variant: 'outlined',
        size: `small`,
        disabled: false,
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: `Chip`,
    },
};

export const WithAvatar: Story = {
    args: {
        label: `Avatar Chip`,
        variant: 'outlined',
        size: 'medium',
        avatar: <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />,
        deleteIcon: <CloseIcon fontSize={'small'}/>
    },
};
export const WithIcon: Story = {
    args: {
        label: `Icon Chip`,
        variant: 'outlined',
        size: 'medium',
        icon:<AccountCircleIcon />,
        deleteIcon: <CloseIcon fontSize={'small'}/>
    },
};


export const Rounded: Story = {
    args: {
        label: `Rounded Chip`,
        rounded: true,
        variant: 'filled',
        size: 'medium'
    },
};

export const Filter: Story = {
    parameters: {
        docs: {
            description: {
                story: `list filter : <a href="/docs/template-advanced-search--docs">사용 예시 바로 가기</a>`,
            },
        },
    },
    render: args => {
        return (
            <Box>
                <Chip
                    variant={'filter'}
                    size={'medium'}
                    rounded
                    label={
                        <Grid container gap={1}  alignItems={'center'}>
                            <Typography variant={'body3Regular'}>
                                Label
                            </Typography>
                            <Box>
                                <ArrowDropDownIcon/>
                            </Box>
                        </Grid>
                    }
                />
                <br/>
                <br/>
                <Chip
                    active
                    variant={'filter'}
                    size={'medium'}
                    rounded
                    label={
                        <Grid container gap={1} alignItems={'center'}>
                            <Typography variant={'body3Regular'} color={'primary'}>
                                Label
                            </Typography>
                            <Typography>
                                Keyword
                            </Typography>
                            <Badge
                                badgeContent={<>+ 3</>}
                                color="primary"
                                position={false}
                            />
                            <Box>
                                <ArrowDropDownIcon/>
                            </Box>
                        </Grid>
                    }
                />
                <br/>
                <br/>
                <Chip
                    disabled
                    variant={'filter'}
                    size={'medium'}
                    rounded
                    label={
                        <Grid container gap={1}  alignItems={'center'}>
                            <Typography variant={'body3Regular'}>
                                Label
                            </Typography>
                            <Box>
                                <ArrowDropDownIcon/>
                            </Box>
                        </Grid>
                    }
                />
            </Box>

        )
    }
}

export const Search: Story = {
    parameters: {
        docs: {
            description: {
                story: `advance search : <a href="/docs/template-advanced-search--docs">사용 예시 바로 가기</a>`,
            },
        },
    },
    render: args => {
        return (
            <Box>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip
                            variant={'search'}
                            size={'medium'}
                            label={
                                <Grid container gap={1}  alignItems={'center'}>
                                        <Typography variant={'body3Regular'}>
                                            Label
                                        </Typography>
                                        <Box>
                                            <ArrowDropDownIcon/>
                                        </Box>
                                </Grid>
                            }
                            onClick={() => {console.log('onClick')}}
                        />
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip
                            variant={'search'}
                            size={'medium'}
                            label={
                                <Grid container gap={1}  alignItems={'center'}>
                                    <Typography variant={'body3Regular'}>
                                        Label
                                    </Typography>
                                    <Box>
                                        <ArrowDropDownIcon/>
                                    </Box>
                                    <Divider flexItem orientation={'vertical'} sx={{ml: 1}}/>
                                </Grid>
                            }
                            onClick={() => {console.log('onClick')}}
                            onDelete={() => {
                                console.log('onDelete')
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip
                            active
                            variant={'search'}
                            size={'medium'}
                            label={
                                <Grid container gap={1} alignItems={'center'}>
                                    <Typography variant={'body3Regular'} color={'primary'}>
                                        Label
                                    </Typography>
                                    <Typography>
                                        Keyword
                                    </Typography>
                                    <Badge
                                        badgeContent={<>+ 3</>}
                                        color="primary"
                                        position={false}
                                    />
                                    <Box>
                                        <ArrowDropDownIcon/>
                                    </Box>
                                </Grid>
                            }
                            onClick={() => {console.log('onClick')}}
                        />
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip
                            active
                            variant={'search'}
                            size={'medium'}
                            label={
                                <Grid container gap={1} alignItems={'center'}>
                                    <Typography variant={'body3Regular'} color={'primary'}>
                                        Label
                                    </Typography>
                                    <Typography>
                                        Keyword
                                    </Typography>
                                    <Badge
                                        badgeContent={<>+ 3</>}
                                        color="primary"
                                        position={false}
                                    />
                                    <Box>
                                        <ArrowDropDownIcon/>
                                    </Box>
                                    <Divider flexItem orientation={'vertical'}/>
                                </Grid>
                            }
                            onClick={() => {console.log('onClick')}}
                            onDelete={() => {
                                console.log('onDelete')
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip
                            disabled
                            variant={'search'}
                            size={'medium'}
                            label={
                                <Grid container gap={1}  alignItems={'center'}>
                                    <Typography variant={'body3Regular'}>
                                        Label
                                    </Typography>
                                    <Box>
                                        <ArrowDropDownIcon/>
                                    </Box>
                                </Grid>
                            }
                            onClick={() => {console.log('onClick')}}
                        />
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip
                            disabled
                            variant={'search'}
                            size={'medium'}
                            label={
                                <Grid container gap={1}  alignItems={'center'}>
                                    <Typography variant={'body3Regular'}>
                                        Label
                                    </Typography>
                                    <Box>
                                        <ArrowDropDownIcon/>
                                    </Box>
                                    <Divider flexItem orientation={'vertical'} sx={{ml: 1}}/>
                                </Grid>
                            }
                            onClick={() => {console.log('onClick')}}
                            onDelete={() => {
                                console.log('onDelete')
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export const Color: Story = {
    render: args => {
        return (
            <Box>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} label="Chip Outlined"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'primary'} label="Chip Outlined primary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'secondary'} label="Chip Outlined secondary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'error'} label="Chip Outlined error"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'info'} label="Chip Outlined info"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'success'} label="Chip Outlined success"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'warning'} label="Chip Outlined warning"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} label="Chip Filled"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'primary'} label="Chip Filled primary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'secondary'} label="Chip Filled secondary"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'error'} label="Chip Filled error"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'info'} label="Chip Filled info"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'success'} label="Chip Filled success"/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'warning'} label="Chip Filled warning"/>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export const onDelete: Story = {
    render: args => {
        return (
            <Box>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} label="Chip Outlined" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'primary'} label="Chip Outlined primary" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'secondary'} label="Chip Outlined secondary"
                              onDelete={() => {
                                  console.log('delete')
                              }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'error'} label="Chip Outlined error" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'info'} label="Chip Outlined info" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'success'} label="Chip Outlined success" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'outlined'} color={'warning'} label="Chip Outlined warning" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} label="Chip Filled" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'primary'} label="Chip Filled primary" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'secondary'} label="Chip Filled secondary" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'error'} label="Chip Filled error" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'info'} label="Chip Filled info" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'success'} label="Chip Filled success" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                    <Grid item sx={{padding: 3}}>
                        <Chip variant={'filled'} color={'warning'} label="Chip Filled warning" onDelete={() => {
                            console.log('delete')
                        }}/>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}