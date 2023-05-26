import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const AccordionSummaryTheme = (
    theme: any
): Components['MuiAccordionSummary'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
        }),
    },
});
