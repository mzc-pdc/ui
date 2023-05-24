import {Components} from "@mui/material/styles/components";

export const FormLabelTheme = (theme:any): Components["MuiFormLabel"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                '&&': {
                    transform: `translate(14px, 11px) scale(1)`,
                },
                fontSize: `0.875rem`,
                "&.MuiInputLabel-shrink": {
                    transform: `translate(14px, -9px) scale(0.75)`
                },
                '&.MuiInputLabel-sizeSmall': {
                    transform: `translate(8px, 6px) scale(1)`,
                    "&.MuiInputLabel-shrink": {
                        transform: `translate(14px, -9px) scale(0.75)`
                    }
                }
            },
        },
    }
)