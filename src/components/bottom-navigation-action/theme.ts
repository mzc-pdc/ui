import { Components } from '@mui/material/styles/components';

export const BottomNavigationActionTheme = (
    theme: any
): Components['MuiBottomNavigationAction'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
