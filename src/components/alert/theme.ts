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
        variants: [
            {
                props: {variant: 'filled', color: "success"},
                style: {
                    color: theme.palette.common.white,
                    backgroundColor: alpha( theme.palette.success[600], 0.9)
                }
            },
            {
                props: {variant: 'filled', color: "info"},
                style: {
                    color: theme.palette.common.white,
                    backgroundColor: alpha( `#304075`, 0.9)
                }
            },
            {
                props: {variant: 'filled', color: "warning"},
                style: {
                    color: theme.palette.common.white,
                    backgroundColor: alpha( theme.palette.warning[700], 0.9)
                }
            },
            {
                props: {variant: 'filled', color: "error"},
                style: {
                    color: theme.palette.common.white,
                    backgroundColor: alpha( '#ef4016', 0.9)
                }
            },
        ]
    }
);

