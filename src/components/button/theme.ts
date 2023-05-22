import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';


export const ButtonTheme = (theme: any): Components['MuiButton'] => ({
  defaultProps: {},
  styleOverrides: {
    root: ({ownerState}) => ({
      textTransform: `none`,
      fontWeight: '400',
      boxShadow: `none`,
      lineHeight: 1.429,
      '.MuiButton-startIcon': {
        '+ span': {
          lineHeight: `1`,
        },
      },
      ...(ownerState.variant === "round" && {
        ...(ownerState.color && {
          color: theme.palette[ownerState.color].contrastText,
          borderColor: theme.palette[ownerState.color].main,
          backgroundColor: theme.palette[ownerState.color].main,
          boxShadow: `none`,
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
          "&.Mui-disabled": {
            background: alpha(theme.palette.secondary.main, 0.16),
            color: alpha(theme.palette.secondary.main, 0.48)
          }
        })
      }),
    }),
    sizeSmall:{
      // padding: `6px 8px`,
      padding: `0.375rem 0.5rem`,
      fontSize: `0.875rem`,
    },
    sizeMedium: {
      // padding: '10px 20px',
      padding: `0.563rem 1.25rem`,
      fontSize: `0.875rem`,
    },
    sizeLarge: {
      // padding: `16px 32px`,
      padding: `1rem 2rem`,
      fontSize: `1rem`,
      lineHeight: 1.5005,
      '.MuiButton-startIcon': {
        marginRight: `24px`,
      },
    },
    containedInherit: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.common.white,
      boxShadow: `none`,
      '&:hover': {
        opacity: 1,
        backgroundColor: alpha(theme.palette.secondary.light, 0.88),
        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
      },
      '&:disabled': {
        color: alpha(theme.palette.secondary[800], 0.48),
        borderColor: alpha(theme.palette.secondary[800], 0.16),
        backgroundColor: alpha(theme.palette.secondary[800], 0.16),
      },
    },
    outlinedInherit: {
      border: `1px solid ${theme.palette.secondary.light}`,
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
      },
      '&:disabled': {
        borderColor: alpha(theme.palette.secondary.light, 0.16),
        color: alpha(theme.palette.secondary.light, 0.48),
      },
    },
    textInherit: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.light, 0.08),
      },
      '&:disabled': {
        color: alpha(theme.palette.secondary.light, 0.48),
      },
    },
    contained: ({ownerState}) => ({
      ...(ownerState.color &&
          ownerState.color !== 'inherit' && {
            '&:hover': {
              backgroundColor: alpha(
                  theme.palette[ownerState.color].main,
                  0.92
              ),
            },
          }),
    }),
    text: {
      '&:hover': {
        '&:hover': {
          backgroundColor: alpha(theme.palette.secondary.main, 0.08),
        },
        '&:focus': {
          backgroundColor: alpha(theme.palette.common.white, 0.12),
        },
        '&:active': {
          backgroundColor: alpha(theme.palette.common.white, 0.16),
        },
        '&:disabled': {
          color: alpha(theme.palette.secondary.light, 0.48),
        },
      },
    },
  },
  variants: [
    {
      props: { variant: 'solid' },
      style: {
        textTransform: 'none',
        color: theme.palette.primary.main,
        boxShadow: `none`,
        height: `auto`,
        padding: `0`,
        '&:hover': {
          textDecoration: `underline`,
          backgroundColor: `transparent`,
        },
        '&:focus': {
          backgroundColor: `transparent`,
        },
        '&:active': {
          backgroundColor: `transparent`,
        },
        '&:disabled': {
          color: alpha(theme.palette.secondary.main, 0.48),
          textDecoration: `underline`,
        },
      },
    },
    {
      props: {variant: 'round'},
      style: {
        borderRadius: theme.spacing * 7,
        paddingLeft: theme.spacing * 10,
        paddingRight: theme.spacing * 10,
      }
    },
  ],
});