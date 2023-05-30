import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const BottomNavigationTheme = (
    theme: any
): Components['MuiBottomNavigation'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
