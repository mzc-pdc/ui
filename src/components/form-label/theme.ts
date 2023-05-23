import {Components} from "@mui/material/styles/components";

export const FormLabelTheme = (theme:any): Components["MuiFormLabel"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                fontSize: `0.875rem`,
            }
        }
    }
)