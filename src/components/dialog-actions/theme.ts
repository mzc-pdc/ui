import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const DialogActionsTheme = (
    theme: any
): Components['MuiDialogActions'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
