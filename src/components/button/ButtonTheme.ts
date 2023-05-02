import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const ButtonTheme = (
  cloudplexPalette: any
): Components['MuiButton'] => ({
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState }) => ({
      textTransform: 'none',
      fontWeight: '400',
      boxShadow: `none`,
      '.MuiButton-startIcon': {
        '+ span': {
          lineHeight: `1`,
        },
      },
      ...(ownerState.color &&
        ownerState.color !== 'inherit' && {
          '&:hover': {
            backgroundColor: cloudplexPalette[ownerState.color],
          },
        }),
    }),
    containedInherit: {
      backgroundColor: cloudplexPalette.secondary.light,
      color: cloudplexPalette.common.white,
      boxShadow: `none`,
      '&:hover': {
        opacity: 1,
        backgroundColor: alpha(cloudplexPalette.secondary.light, 0.88),
        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
      },
      ' &:active, &:focus': {
        opacity: 1,
        backgroundColor: alpha(cloudplexPalette.secondary.light, 0.84),
        boxShadow: `none`,
      },
      '&:disabled': {
        color: alpha(cloudplexPalette.secondary[800], 0.48),
        borderColor: alpha(cloudplexPalette.secondary[800], 0.16),
        backgroundColor: alpha(cloudplexPalette.secondary[800], 0.16),
      },
    },
    outlinedInherit: {
      border: `1px solid`,
      borderColor: cloudplexPalette.secondary.main,
      '&:hover': {
        backgroundColor: alpha(cloudplexPalette.secondary.main, 0.08),
      },
      '&:active, &:focus': {
        backgroundColor: alpha(cloudplexPalette.secondary.main, 0.12),
      },
      '&:disabled': {
        borderColor: alpha(cloudplexPalette.secondary.light, 0.16),
        color: alpha(cloudplexPalette.secondary.light, 0.48),
      },
    },
    textInherit: {
      color: cloudplexPalette.secondary.main,
      '&:hover': {
        backgroundColor: alpha(cloudplexPalette.secondary.light, 0.08),
      },
      '&:active, &:focus': {
        backgroundColor: alpha(cloudplexPalette.secondary.light, 0.12),
      },
      '&:disabled': {
        color: alpha(cloudplexPalette.secondary.light, 0.48),
      },
    },
    contained: ({ ownerState }) => ({
      ...(ownerState.color &&
        ownerState.color !== 'inherit' && {
          '&:hover': {
            backgroundColor: cloudplexPalette[ownerState.color].main,
          },
        }),
    }),
    text: {
      '&:hover': {
        '&:hover': {
          backgroundColor: alpha(cloudplexPalette.common.white, 0.08),
        },
        '&:focus': {
          backgroundColor: alpha(cloudplexPalette.common.white, 0.12),
        },
        '&:active': {
          backgroundColor: alpha(cloudplexPalette.common.white, 0.16),
        },
        '&:disabled': {
          color: alpha(cloudplexPalette.secondary.light, 0.48),
        },
      },
    },
  },
  variants: [
    {
      props: {
        size: 'small',
      },
      style: {
        height: `32px`,
        paddingLeft: `8px`,
        paddingRight: `8px`,
        fontSize: `14px`,
      },
    },
    {
      props: {
        size: 'medium',
      },
      style: {
        height: `40px`,
        paddingLeft: `20px`,
        paddingRight: `20px`,
        fontSize: `14px`,
      },
    },
    {
      props: {
        size: 'large',
      },
      style: {
        height: `56px`,
        paddingLeft: `32px`,
        paddingRight: `32px`,
        fontSize: `1rem`,
        '.MuiButton-startIcon': {
          marginRight: `24px`,
        },
      },
    },
    {
      props: { variant: 'solid' },
      style: {
        textTransform: 'none',
        color: cloudplexPalette.primary.main,
        boxShadow: `none`,
        height: `auto`,
        padding: `0`,
        fontSize: `14px`,
        '&:hover': {
          textDecoration: `underline`,
          backgroundColor: `#f00`,
        },
        '&:focus': {
          backgroundColor: `transparent`,
        },
        '&:active': {
          backgroundColor: `transparent`,
        },
        '&:disabled': {
          color: alpha(cloudplexPalette.secondary.main, 0.48),
          textDecoration: `underline`,
        },
      },
    },
  ],
});
