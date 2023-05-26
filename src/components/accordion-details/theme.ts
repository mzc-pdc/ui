import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const AccordionDetailsTheme = (
    theme: any
): Components['MuiAccordionDetails'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
