import {Components} from "@mui/material/styles/components";

export const ListItemTextTheme = (theme: any): Components["MuiListItemText"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {

            },
            primary: {
                fontSize: `0.875rem`,
            }
        }
    }
);

