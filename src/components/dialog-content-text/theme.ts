import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const DialogContentTextTheme = (
    theme: any
): Components['MuiDialogContentText'] => ({
    defaultProps: {},
    styleOverrides: {
        root: {
            color: theme.palette.text.primary
        },
    },
});
