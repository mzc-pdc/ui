import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const AccordionTheme = (
    theme: any
): Components['MuiAccordion'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
