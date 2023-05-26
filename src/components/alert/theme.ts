import {Components} from "@mui/material/styles/components";
import {alpha} from "@mui/material";

export const AlertTheme = (theme: any): Components["MuiAlert"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ownerState}) => ({
                ...((!ownerState.variant ||  ownerState.variant === 'standard' ) && {
                    ...(ownerState.color && {
                        color: theme.palette.text.primary,
                        border: `1px solid ${theme.palette[ownerState.color][200]}`,
                        backgroundColor: alpha(theme.palette[ownerState.color][50], 0.5),
                        '.MuiAlert-message': {
                            fontSize: `0.875rem`,
                        }
                    })
                })
            })
        },
    }
);

