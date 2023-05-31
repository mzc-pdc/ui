import {Components} from '@mui/material/styles/components';
import {alpha} from "@mui/system";

export const PaginationItemTheme = (
    theme: any
): Components['MuiPaginationItem'] => ({
    defaultProps: {},
    styleOverrides: {
        root: {
            '&.MuiButtonBase-root ': {
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08)
                },
                '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.grayscaleSecondary.A100, 0.36)
                }
            }
        },
    },
});
