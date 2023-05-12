import {alpha} from '@mui/material';
import {Components} from '@mui/material/styles/components';

export const IconButtonTheme = (
    theme: any
): Components['MuiIconButton'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ownerState}) => ({
            color: theme.palette.secondary.main,
            borderRadius: 3,
            "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.08)
            },
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
            ...(ownerState.variant === 'contained' && {

                ...(ownerState.color && ownerState.color !== 'inherit' && {
                    color: theme.palette[ownerState.color].contrastText,
                    borderColor: theme.palette[ownerState.color].main,
                    backgroundColor: theme.palette[ownerState.color].main,
                    "&:hover": {
                        backgroundColor: theme.palette[ownerState.color].main,
                        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
                        ".MuiTouchRipple-root": {
                            backgroundColor: alpha(theme.palette.common.white, 0.08)
                        }
                    },
                    "&:focus": {
                        backgroundColor: theme.palette[ownerState.color].main,
                        ".MuiTouchRipple-root": {
                            backgroundColor: alpha(theme.palette.common.white, 0.12)
                        }
                    },
                    "&:active": {
                        backgroundColor: theme.palette[ownerState.color].main,
                        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
                        ".MuiTouchRipple-root": {
                            backgroundColor: alpha(theme.palette.common.white, 0.16)
                        }
                    },
                }),
                ...(ownerState.color && ownerState.color === 'default' && {
                    color: theme.palette.secondary.contrastText,
                    backgroundColor: theme.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
                    },
                }),
            }),
            ...(ownerState.variant === "dashed" && {
                ...(ownerState.color && ownerState.color !== 'inherit' && {
                    color: theme.palette[ownerState.color].contrastText,
                    borderColor: theme.palette[ownerState.color].main,
                    backgroundColor: theme.palette[ownerState.color].main,
                    boxShadow: `none`,
                    "&.Mui-disabled": {
                        background: alpha(theme.palette.secondary.main, 0.16),
                        color: alpha(theme.palette.secondary.main, 0.48)
                    }
                }),
                ...(ownerState.color && ownerState.color === 'default' && {
                    border: `1px dashed ${theme.palette.secondary[600]}`,
                    backgroundColor: theme.palette.grayscaleSecondary[50],
                    '.MuiSvgIcon-root': {
                        color: theme.palette.secondary.main,
                        transition: `all linear 0.2s`,
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        borderColor: theme.palette.secondary.main,
                        '.MuiSvgIcon-root': {
                            color: theme.palette.secondary.contrastText
                        },
                    },
                })
            }),
            ...(ownerState.size === 'Xsmall' && {
                width: 18,
                height: 18,
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
        colorInherit: ({ownerState}) => ({
            ...(ownerState.variant === 'contained' && {
                color: theme.palette.secondary.contrastText,
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
                },
            }),
            ...(ownerState.variant === 'outlined' && {
                border: `1px solid ${theme.palette.secondary[300]}`,
                "&:hover": {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08)
                },
            }),
            ...(ownerState.variant === 'dashed' && {
                border: `1px dashed ${theme.palette.secondary[600]}`,
                backgroundColor: theme.palette.grayscaleSecondary[50],
                '.MuiSvgIcon-root': {
                    color: theme.palette.secondary.main,
                    transition: `all linear 0.2s`,
                },
                '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    '.MuiSvgIcon-root': {
                        color: theme.palette.secondary.contrastText
                    },
                },
            }),
        }),
    },
});
