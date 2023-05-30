import {Meta, StoryObj} from "@storybook/react";
import React from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {BottomNavigation} from "./bottom-navigation";
import {BottomNavigationAction} from "../bottom-navigation-action";

const meta: Meta<typeof BottomNavigation> = {
    title: 'Components/BottomNavigation',
    tags: ['autodocs'],
    component: BottomNavigation,
    args: { //storybook common args
    }
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => {
        const [value, setValue] = React.useState(0);

        return (
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        )
    }
}