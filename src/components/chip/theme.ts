import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const ChipTheme = (theme: any): Components["MuiChip"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ownerState}) => ({
                "svg:first-of-type": {
                    marginLeft: theme.spacing - 1
                },
                ".MuiChip-label": {
                    "+ svg": {
                        marginRight: theme.spacing * 2
                    }
                },
            }),
            deleteIcon: ({ownerState}) => ({
                color: `#939bb7`,
                fontSize: `0.75rem`,
                marginRight: theme.spacing * 2,
                ...(ownerState.variant === 'filled' && {
                    color: ownerState.color === 'default' ? '#939bb7' : `inherit`
                })
            }),
            outlined: ({ownerState}) => ({
                ...(ownerState.color && {
                    borderColor: alpha(theme.palette[ownerState.color].main, 0.4),
                    '&:hover': {
                        backgroundColor: ownerState.color === 'default' ?
                            alpha(theme.palette.grayscaleSecondary.main, 0.08) :
                            alpha(theme.palette[ownerState.color].main, 0.08
                        ),
                    },
                    "&:active": {
                        boxShadow: `none`,
                        backgroundColor: ownerState.color === 'default' ?
                            alpha(theme.palette.grayscaleSecondary.main, 0.12) :
                            alpha(theme.palette[ownerState.color].main, 0.12)
                    },
                    "&.MuiChip-clickable": {
                        "&:hover": {
                            backgroundColor: ownerState.color === 'default' ?
                                alpha(theme.palette.grayscaleSecondary.main, 0.08) :
                                alpha(theme.palette[ownerState.color].main, 0.08)
                        }
                    }
                }),
            }),
            filled: ({ownerState}) => ({
                ...(ownerState.color && {

                    color:ownerState.color === 'default' ?
                        theme.palette.secondary.main :
                        theme.palette[ownerState.color].main,
                    backgroundColor: ownerState.color === 'default' ?
                        alpha(theme.palette.grayscaleSecondary.A100, 0.4) :
                        alpha(theme.palette[ownerState.color].main, 0.1),
                    "&:hover": {
                        backgroundColor: ownerState.color === 'default' ?
                            alpha(theme.palette.grayscaleSecondary.A100, 0.6) :
                            alpha(theme.palette[ownerState.color].main, 0.3)
                    },
                    "&:active": {
                        boxShadow: `none`,
                        backgroundColor: ownerState.color === 'default' ?
                            alpha(theme.palette.grayscaleSecondary.A100, 0.8):
                            alpha(theme.palette[ownerState.color].main, 0.6)
                    },
                    ".MuiChip-label": {
                        "+ svg": {
                            color: theme.palette[ownerState.color].main
                        }
                    },
                    ".MuiChip-deleteIcon": {
                        color: theme.palette[ownerState.color].main,
                        '&:hover, &:active': {
                            color: theme.palette[ownerState.color].main,
                        }
                    }
                }),
            }),
        },
    }
)
