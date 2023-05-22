import {alpha} from '@mui/material';
import {Components} from '@mui/material/styles/components';

export const ToggleButtonTheme = (
    theme: any
): Components['MuiToggleButton'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ownerState}) => ({
            ...(ownerState.variant === 'outlined' && {
                ...(ownerState.color && ownerState.color !== 'inherit' && {
                    "&:hover": {
                        backgroundColor: alpha(theme.palette[ownerState.color].main,0.08),
                        boxShadow: `none`,
                    },
                }),
                ...(ownerState.color && ownerState.color === 'default' && {
                    color: theme.palette.secondary.main,
                    border: `1px solid ${theme.palette.secondary[300]}`,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08)
                    },
                }),
            }),
            ...(ownerState.circled === true && {
                borderRadius: theme.borderRadius,
            }),
        }),
        sizeSmall: {
            width: 24,
            height: 24,
        },
        sizeMedium: {
            width: 32,
            height: 32,
        },
        sizeLarge: {
            width: 40,
            height: 40,
        },
    }
})


export const ToggleButtonGroupTheme = (
    theme: any
): Components['MuiToggleButtonGroup'] => ({
    defaultProps: {},
    styleOverrides: {}
})