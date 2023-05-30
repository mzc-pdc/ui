import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const DialogTheme = (
    theme: any
): Components['MuiDialog'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
