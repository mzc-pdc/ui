import {Components} from "@mui/material/styles/components";

export const InputLabelTheme = (theme:any): Components["MuiInputLabel"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                fontSize: `0.875rem`,
            }
        }
    }
)