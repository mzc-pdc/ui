import type { Meta, StoryObj } from '@storybook/react';

import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import { Table } from './table';
import {TableContainer} from "../table-container";
import {TableHead} from "../table-head";
import {TableRow} from "../table-row";
import {TableCell} from "../table-cell";
import {TableBody} from "../table-body";
import {IconButton} from "../icon-button";
import {Checkbox} from "../checkbox";

const meta: Meta<typeof Table> = {
    title: 'Components/DATA DISPLAY/Table',
    tags: ['autodocs'],
    component: Table,
    parameters: {
        docs: {
            description: {
                component: 'Table Description'
            },
        },
    },
    args: { //storybook common args

    }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const Playgroud: Story = {
    render: args => {
        return(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right"><SettingsIcon fontSize='small' /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                hover
                                key={row.name}
                            >
                                <TableCell>
                                    <Checkbox color='secondary' sx={{mr:1}}/>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" >{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        size={'medium'}
                                        circled
                                    >
                                        <MoreHorizIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
} 

export const Status: Story = {
    render: args => {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell>
                                Dessert (100g serving)
                            </TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right"><SettingsIcon fontSize='small' /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        >
                            <TableCell>
                                <Checkbox color='secondary'/>
                                Frozen yoghurt
                            </TableCell>
                            <TableCell align="right" >159</TableCell>
                            <TableCell align="right">6</TableCell>
                            <TableCell align="right">24</TableCell>
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    size={'medium'}
                                    circled
                                >
                                    <MoreHorizIcon fontSize='small' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            checked
                        >
                            <TableCell>
                                <Checkbox color='secondary'/>
                                Frozen yoghurt
                            </TableCell>
                            <TableCell align="right" >159</TableCell>
                            <TableCell align="right">6</TableCell>
                            <TableCell align="right">24</TableCell>
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    size={'medium'}
                                    circled
                                >
                                    <MoreHorizIcon fontSize='small' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            selected
                        >
                            <TableCell>
                                <Checkbox color='secondary'/>
                                Frozen yoghurt
                            </TableCell>
                            <TableCell align="right" >159</TableCell>
                            <TableCell align="right">6</TableCell>
                            <TableCell align="right">24</TableCell>
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    size={'medium'}
                                    circled
                                >
                                    <MoreHorizIcon fontSize='small' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            status={'warning'}
                        >
                            <TableCell>
                                <Checkbox color='secondary'/>
                                Frozen yoghurt
                            </TableCell>
                            <TableCell align="right" >159</TableCell>
                            <TableCell align="right">6</TableCell>
                            <TableCell align="right">24</TableCell>
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    size={'medium'}
                                    circled
                                >
                                    <MoreHorizIcon fontSize='small' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            status={'error'}
                        >
                            <TableCell>
                                <Checkbox color='secondary'/>
                                Frozen yoghurt
                            </TableCell>
                            <TableCell align="right" >159</TableCell>
                            <TableCell align="right">6</TableCell>
                            <TableCell align="right">24</TableCell>
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    size={'medium'}
                                    circled
                                >
                                    <MoreHorizIcon fontSize='small' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
    
export const Small: Story = {
    render: args => {
        return (

            <TableContainer>
                <Table size={'small'}>
                    <TableHead>
                        <TableRow >
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right"><SettingsIcon fontSize='small' /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                hover
                                key={row.name}
                            >
                                <TableCell>
                                    <Checkbox color='secondary' sx={{mr:1}}/>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" >{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        size={'medium'}
                                        circled
                                    >
                                        <MoreHorizIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}


export const Medium: Story = {
    render: args => {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right"><SettingsIcon fontSize='small' /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                hover
                                key={row.name}
                            >
                                <TableCell>
                                    <Checkbox color='secondary' sx={{mr:1}}/>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" >{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        size={'medium'}
                                        circled
                                    >
                                        <MoreHorizIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}


export const large: Story = {
    render: args => {
        return (

            <TableContainer>
                <Table size={'large'}>
                    <TableHead>
                        <TableRow >
                            <TableCell >Dessert (100g serving)</TableCell>
                            <TableCell align="right" >Calories</TableCell>
                            <TableCell align="right" >Fat&nbsp;(g)</TableCell>
                            <TableCell align="right" >Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right" >Protein&nbsp;(g)</TableCell>
                            <TableCell align="right" ><SettingsIcon fontSize='small' /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                hover
                                key={row.name}
                            >
                                <TableCell>
                                    <Checkbox color='secondary' sx={{mr:1}}/>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right"  >{row.calories}</TableCell>
                                <TableCell align="right" >{row.fat}</TableCell>
                                <TableCell align="right" >{row.carbs}</TableCell>
                                <TableCell align="right" >{row.protein}</TableCell>
                                <TableCell align="right" >
                                    <IconButton
                                        size={'medium'}
                                        circled
                                    >
                                        <MoreHorizIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}


