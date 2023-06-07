import { Components } from '@mui/material/styles/components';
import {alpha} from "@mui/material";

export const TabsTheme = (
    theme: any
): Components['MuiTabs'] => ({
    defaultProps: {},
    styleOverrides: {
        root : {

        },
        indicator: {
            height: `3px`,
            bottom: `inherit`,
            top: `0`,
            backgroundColor: theme.palette.common.black,
        }
    },
});
