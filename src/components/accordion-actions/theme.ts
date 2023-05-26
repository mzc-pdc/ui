import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const AccordionActionsTheme = (
    theme: any
): Components['MuiAccordionActions'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
