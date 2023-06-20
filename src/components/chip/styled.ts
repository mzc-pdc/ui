import {alpha, Chip, styled} from '@mui/material';
import {ChipProps} from "./types";

export const StyledChip = styled(Chip, {
    shouldForwardProp: prop => ![ 'rounded', 'variant', 'color', 'active'].includes(String(prop)),
})<ChipProps>(({ theme, rounded , variant, color, active}) => ({
    ...(rounded && {
        borderRadius: `3px`
    }),
    ...(!color && {
        ...(variant === 'outlined' && {
            color: theme.palette.secondary.main,
            border: `1px solid`,
            borderColor: theme.palette.secondary[300],
            backgroundColor: theme.palette.white.main,
            '&:hover': {
                backgroundColor:
                    alpha(theme.palette.secondary.main, 0.08)
            },
            "&:active": {
                boxShadow: `none`,
                backgroundColor:
                    alpha(theme.palette.secondary.main, 0.12)
            },
            "&.MuiChip-clickable": {
                "&:hover": {
                    backgroundColor:
                        alpha(theme.palette.secondary.main, 0.08)
                }
            },
        }),
        ...(variant === 'filled' && {
            color: theme.palette.secondary.main,
            backgroundColor:
                alpha(theme.palette.grayscaleSecondary.A100, 0.4) ,
            "&:hover": {
                backgroundColor:
                    alpha(theme.palette.grayscaleSecondary.A100, 0.6)
            },
            "&:active": {
                boxShadow: `none`,
                backgroundColor:
                    alpha(theme.palette.grayscaleSecondary.A100, 0.8)
            },
        }),

        ...(variant === 'filter' && {
            backgroundColor: theme.palette.white.main,
            '.MuiBox-root': {
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `20px`,
                height: `20px`,
                borderRadius: `20px`,
            },
            '&:hover': {
                backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                '.MuiBox-root': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                }
            },
            ...(active && {
                backgroundColor: alpha(theme.palette.secondary.A100, 0.4),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.A100, 0.8),
                    '.MuiBox-root': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                    }
                },
            }),
            '&.Mui-disabled': {
                opacity: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                '>  *': {
                    opacity: 0.48
                }
            }
        }),
        ...(variant === 'search' && {
            backgroundColor: alpha(theme.palette.secondary.main, 0.08),
            '.MuiBox-root': {
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `20px`,
                height: `20px`,
                borderRadius: `20px`,
            },
            '&:hover': {
                backgroundColor: alpha(theme.palette.secondary.A100, 0.4),
                '.MuiBox-root': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                }
            },
            ...(active && {
                backgroundColor: alpha(theme.palette.secondary.A100, 0.4),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.A100, 0.8),
                    '.MuiBox-root': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                    }
                },
            }),
            '&.Mui-disabled': {
                opacity: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                '>  *': {
                    opacity: 0.48
                }
            }
        })
    }),
    ...(color && {
        ...(variant === 'outlined' && {
            color: theme.palette[color].main,
            border: `1px solid`,
            borderColor: alpha(theme.palette[color].main, 0.4),
            backgroundColor: theme.palette.white.main,
            '&:hover': {
                backgroundColor: color === 'default' ?
                    alpha(theme.palette.grayscaleSecondary.main, 0.08) :
                    alpha(theme.palette[color].main, 0.08
                    ),
            },
            "&:active": {
                boxShadow: `none`,
                backgroundColor: color === 'default' ?
                    alpha(theme.palette.grayscaleSecondary.main, 0.12) :
                    alpha(theme.palette[color].main, 0.12)
            },
            "&.MuiChip-clickable": {
                "&:hover": {
                    backgroundColor: color === 'default' ?
                        alpha(theme.palette.grayscaleSecondary.main, 0.08) :
                        alpha(theme.palette[color].main, 0.08)
                }
            },
        }),
        ...(variant === 'filled' && {
            color: color === 'default' ?
                theme.palette.secondary.main :
                theme.palette[color].main,
            backgroundColor: color === 'default' ?
                alpha(theme.palette.grayscaleSecondary.A100, 0.4) :
                alpha(theme.palette[color].main, 0.1),
            "&:hover": {
                backgroundColor: color === 'default' ?
                    alpha(theme.palette.grayscaleSecondary.A100, 0.6) :
                    alpha(theme.palette[color].main, 0.3)
            },
            "&:active": {
                boxShadow: `none`,
                backgroundColor: color === 'default' ?
                    alpha(theme.palette.grayscaleSecondary.A100, 0.8):
                    alpha(theme.palette[color].main, 0.6)
            },
        }),
    }),

}));
