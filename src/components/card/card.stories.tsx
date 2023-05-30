import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Typography} from "@mui/material";
import {Card} from "./card";
import {CardContent} from "../card-content";
import {CardActions} from "../card-actions";
import {Button} from "../button";
import {CardMedia} from "../card-media";
import {CardHeader} from "../card-header";
import {Avatar} from "../avatar";
import {theme} from "../../themes";
import {IconButton} from "../icon-button";

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    tags: ['autodocs'],
    component: Card,
    args: { //storybook common args
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        return (
            <Card sx={{ width: 202 }} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be nev o lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }
}

export const Media: Story = {
    render: args => {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton circled>
                            <MoreHorizIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://mui.com/static/images/cards/paella.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}