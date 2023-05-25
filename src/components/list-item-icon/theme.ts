import {Components} from "@mui/material/styles/components";

export const ListItemIconTheme = (theme: any): Components["MuiListItemIcon"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                minWidth: `34px`
            }
        }
    }
);

