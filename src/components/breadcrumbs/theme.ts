import {Components} from "@mui/material/styles/components";

export const BreadcrumbsTheme = (theme: any): Components["MuiBreadcrumbs"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                '.MuiTypography-root': {
                    fontWeight: `normal`
                }
            }
        },
    }
)
