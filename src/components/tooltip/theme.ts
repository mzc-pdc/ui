import {Components} from '@mui/material/styles/components';

export const TooltipTheme = (
    theme: any
): Components['MuiTooltip'] => ({
    defaultProps: {},
    styleOverrides: {
        tooltip: {
            maxWidth: 256,
            fontSize: theme.typography.body4Regular,
            fontWeight: "normal",
            borderRadius:`2px`,
        },
    }
})