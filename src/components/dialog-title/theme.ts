import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const DialogTitleTheme = (
    theme: any
): Components['MuiDialogTitle'] => ({
    defaultProps: {},
    styleOverrides: {
        root: {
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`
        },
    },
});
