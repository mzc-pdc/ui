import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    solid: true;
  }
  export interface ButtonPropsColorOverrides {
    inherit: true;
    grayscale: true;
    grayscaleSecondary: true;
    default: true;
  }
}

export const ButtonTheme = (palette: any): Components['MuiButton'] => ({
  defaultProps: {},
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontWeight: '400',
      boxShadow: `none`,
      '.MuiButton-startIcon': {
        '+ span': {
          lineHeight: `1`,
        },
      },
    },
    sizeSmall: {
      height: `32px`,
      padding: '6px 8px',
      fontSize: `0.875rem`,
    },
    sizeMedium: {
      height: `40px`,
      padding: '10px 20px',
      fontSize: `1rem`,
    },
    sizeLarge: {
      height: `56px`,
      padding: `16px 32px`,
      fontSize: `1rem`,
      '.MuiButton-startIcon': {
        marginRight: `24px`,
      },
    },
    containedInherit: {
      backgroundColor: palette.secondary.light,
      color: palette.common.white,
      boxShadow: `none`,
      '&:hover': {
        opacity: 1,
        backgroundColor: alpha(palette.secondary.light, 0.88),
        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
      },
      '&:disabled': {
        color: alpha(palette.secondary[800], 0.48),
        borderColor: alpha(palette.secondary[800], 0.16),
        backgroundColor: alpha(palette.secondary[800], 0.16),
      },
    },
    outlinedInherit: {
      border: `1px solid ${palette.secondary.light}`,
      '&:hover': {
        backgroundColor: alpha(palette.secondary.main, 0.08),
      },
      '&:disabled': {
        borderColor: alpha(palette.secondary.light, 0.16),
        color: alpha(palette.secondary.light, 0.48),
      },
    },
    textInherit: {
      color: palette.secondary.main,
      '&:hover': {
        backgroundColor: alpha(palette.secondary.light, 0.08),
      },
      '&:disabled': {
        color: alpha(palette.secondary.light, 0.48),
      },
    },
    contained: ({ ownerState }) => ({
      ...(ownerState.color &&
        ownerState.color !== 'inherit' && {
          '&:hover': {
            backgroundColor: alpha(palette[ownerState.color].main, 0.92),
          },
        }),
    }),
    text: {
      '&:hover': {
        '&:hover': {
          backgroundColor: alpha(palette.secondary.main, 0.08),
        },
        '&:focus': {
          backgroundColor: alpha(palette.common.white, 0.12),
        },
        '&:active': {
          backgroundColor: alpha(palette.common.white, 0.16),
        },
        '&:disabled': {
          color: alpha(palette.secondary.light, 0.48),
        },
      },
    },
  },
  variants: [
    {
      props: { variant: 'solid' },
      style: {
        textTransform: 'none',
        color: palette.primary.main,
        boxShadow: `none`,
        height: `auto`,
        padding: `0`,
        fontSize: `0.875px`,
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
          color: alpha(palette.secondary.main, 0.48),
          textDecoration: `underline`,
        },
      },
    },
  ],
});
