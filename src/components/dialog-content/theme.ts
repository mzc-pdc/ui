import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const DialogContentTheme = (
    theme: any
): Components['MuiDialogContent'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
