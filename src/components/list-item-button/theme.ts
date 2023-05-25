import {Components} from "@mui/material/styles/components";
import {alpha} from "@mui/system";

export const ListItemButtonTheme = (theme: any): Components["MuiListItemButton"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                paddingTop: `0.344rem`,
                paddingBottom: `0.344rem`,
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08)
                },
                "&.Mui-selected": {
                    "backgroundColor":alpha(theme.palette.grayscaleSecondary.A100, 0.5)
                }
            },
            dense: {
                paddingTop: `0.125rem`,
                paddingBottom: `0.125rem`,
            }
        }
    }
);

