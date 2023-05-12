import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const SwitchTheme = (theme: any): Components["MuiSwitch"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ ownerState }) => ({
                width: 52,
                height: 34,
                ".MuiSwitch-thumb": {
                    backgroundColor:
                        ownerState.checked === true
                            ? theme.palette[ownerState.color ? ownerState.color : 'success'].main
                            : theme.palette.secondary[400]
                },
                ".Mui-checked": {
                    ".MuiSwitch-thumb": {
                        backgroundColor: theme.palette[ownerState.color ? ownerState.color : 'success'].main
                    }
                },
                ".Mui-disabled": {
                    ".MuiSwitch-thumb": {
                        backgroundColor: theme.palette.secondary[100]
                    },
                    "+ .MuiSwitch-track": {
                        opacity: `1 !important`,
                        backgroundColor: theme.palette.secondary[50]
                    }
                }
            }),
            thumb: {
                width: 16,
                height: 16
            },
            track: {
                opacity: 1,
                backgroundColor: theme.palette.secondary[200]
            }
        },
    }
)
