import {Components} from "@mui/material/styles/components";

export const InputTheme = (theme:any): Components["MuiInput"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                fontSize: `0.875rem`,
            }
        }
    }
)