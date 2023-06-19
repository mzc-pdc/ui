import {Components} from "@mui/material/styles/components";

export const FormHelperTextTheme = (theme:any): Components["MuiFormHelperText"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                marginTop: theme.spacing,
                marginLeft: 0,
                fontSize: `0.875rem`,
            }
        }
    }
)