import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const ChipTheme = (theme: any): Components["MuiChip"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ownerState}) => ({
                ".MuiChip-label": {
                    "+ svg": {
                        marginRight: theme.spacing
                    }
                },
            }),
            deleteIcon: {
                color: theme.palette.secondary[400],
                fontSize: `0.75rem`,
                marginRight: theme.spacing * 2,
            },
        },
    }
)
