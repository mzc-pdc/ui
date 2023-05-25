import {Components} from "@mui/material/styles/components";
import {alpha} from "@mui/system";

export const MenuItemTheme = (theme: any): Components["MuiMenuItem"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08)
                },
                "&.Mui-selected": {
                    "backgroundColor":alpha(theme.palette.grayscaleSecondary.A100, 0.5)
                }
            },
        }
    }
);

