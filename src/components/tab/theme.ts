import { Components } from '@mui/material/styles/components';
import {alpha} from "@mui/material";

export const TabTheme = (
    theme: any
): Components['MuiTab'] => ({
    defaultProps: {},
    styleOverrides: {
        root: {
            paddingLeft: `1.25rem`,
            paddingRight: `1.25rem`,
            border: `1px solid ${theme.palette.secondary[100]}`,
            textTransform: `none`,
            minHeight: 0,
            '&.MuiButtonBase-root': {
                '~ .MuiButtonBase-root': {
                    marginLeft: `-1px`,
                }
            },
            '&:hover': {
                backgroundColor: alpha(theme.palette.secondary[800], 0.08),
            },
            '&.Mui-selected': {
                borderBottomColor: `transparent`,
                color: theme.palette.common.black,
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary[800], 0.08),
                },
            },
        }
    },
});
