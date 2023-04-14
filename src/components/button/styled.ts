import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from '@mui/material';
import { styled, alpha, CSSObject } from '@mui/material/styles';

/* components */

/* types */
import { StyledButtonProps, StyledSpinnerProps } from './types';
type ExtendedButtonProps = MuiButtonProps & StyledButtonProps;

/* styled */
export const Text = styled('span')``;

export const Spinner = styled(CircularProgress)<StyledSpinnerProps>(() => ({
  position: `absolute`,
}));

const variantInheritMixin = ({
  theme,
  variant,
  color,
  active,
}: any): CSSObject => ({
  ...(active && {
    borderColor: alpha(theme.palette.secondary.main, 0.08),
  }),
  ...(variant === `outlined` && {
    border: `1px solid`,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
    },
    '&:active, &:focus': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.12),
    },
    '&:disabled': {
      // opacity: `0.16`,
      borderColor: alpha(theme.palette.secondary.light, 0.16),
      color: alpha(theme.palette.secondary.light, 0.48),
    },
    ...(active && {
      borderColor: alpha(theme.palette.divider, 0.12),
    }),
  }),
  ...(variant === `contained` && {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
    boxShadow: `none`,
    '&:hover': {
      opacity: 1,
      backgroundColor: alpha(theme.palette.secondary.light, 0.88),
      boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
    },
    ' &:active, &:focus': {
      opacity: 1,
      backgroundColor: alpha(theme.palette.secondary.light, 0.84),
      boxShadow: `none`,
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary[800], 0.48),
      borderColor: alpha(theme.palette.secondary[800], 0.16),
      backgroundColor: alpha(theme.palette.secondary[800], 0.16),
    },

    ...(active &&
      {
        // borderColor: alpha(theme.palette.secondary.main, 0.88),
      }),
  }),
  ...(variant === `text` && {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.light, 0.08),
    },
    '&:active, &:focus': {
      backgroundColor: alpha(theme.palette.secondary.light, 0.12),
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary.light, 0.48),
    },
    ...(active && {
      backgroundColor: alpha(theme.palette.divider, 0.12),
    }),
  }),
  ...(color === 'default' && {
    borderColor: theme.palette.divider,
    '&:hover, &:active, &:focus': {
      borderColor: theme.palette.divider,
    },
  }),
});

const variantMixin = ({ theme, variant, color }: any): CSSObject => ({
  ...(variant === `outlined` && {
    borderColor: theme.palette[color].light,
    color: theme.palette[color].main,
    boxShadow: `none`,
    '&:hover': {
      backgroundColor: alpha(theme.palette[color].main, 0.08),
      borderColor: theme.palette[color].light,
    },
    '&:active': {
      backgroundColor: alpha(theme.palette[color].main, 0.12),
      borderColor: theme.palette[color].light,
    },
    '&:focus': {
      backgroundColor: `none`,
      borderColor: theme.palette[color].light,
    },
    '&:disabled': {
      color: alpha(theme.palette[color].main, 0.48),
      borderColor: alpha(theme.palette[color].main, 0.16),
    },
  }),
  ...(variant === `contained` && {
    color: theme.palette[color].contrastText,
    borderColor: theme.palette[color].light,
    backgroundColor: theme.palette[color].light,
    boxShadow: `none`,
    '&:hover': {
      opacity: 1,
      backgroundColor: alpha(theme.palette[color].light, 0.88),
      boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
    },
    ' &:active, &:focus': {
      opacity: 1,
      backgroundColor: alpha(theme.palette[color].light, 0.84),
      boxShadow: `none`,
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary[800], 0.48),
      borderColor: alpha(theme.palette.secondary[800], 0.16),
      backgroundColor: alpha(theme.palette.secondary[800], 0.16),
    },
    ...(color && {
      borderColor: theme.palette[color].main,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        opacity: 1,
        backgroundColor: alpha(theme.palette[color].main, 1),
        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
      },
      ' &:active, &:focus': {
        opacity: 1,
        backgroundColor: alpha(theme.palette[color].main, 1),
        boxShadow: `none`,
      },
    }),
  }),
  ...(variant === `text` && {
    color: theme.palette[color].main,
    boxShadow: `none`,
    ...(color && {
      '&:hover': {
        opacity: 1,
        backgroundColor: alpha(theme.palette[color].main, 0.08),
      },
      ' &:active, &:focus': {
        opacity: 1,
        backgroundColor: alpha(theme.palette[color].main, 0.12),
      },
    }),
    '&:disabled': {
      color: alpha(theme.palette[color].light, 0.9),
    },
  }),
  ...(color === 'grayscaleSecondary' && {
    color: theme.palette.grayscaleSecondary.A400,
    '&:hover': {
      opacity: 1,
      backgroundColor: alpha(theme.palette.grayscaleSecondary.A400, 0.08),
    },
    ' &:active, &:focus': {
      opacity: 1,
      backgroundColor: alpha(theme.palette.grayscaleSecondary.A400, 0.12),
    },
  }),
  ...(color === 'default' && {
    color: theme.palette.common.black,
    borderColor: theme.palette.divider,
    '&:hover, &:active, &:focus': {
      borderColor: theme.palette.divider,
    },
  }),
});

const sizeMixin = (size: string): CSSObject => ({
  ...(size === `small` && {
    height: `32px`,
    paddingLeft: `8px`,
    paddingRight: `8px`,
    fontSize: `14px`,
  }),
  ...(size === `medium` && {
    height: `40px`,
    paddingLeft: `20px`,
    paddingRight: `20px`,
    fontSize: `14px`,
    // '.MuiButton-endIcon' : {
    //   marginLeft: `16px`,
    //   marginRight: `-12px`
    // }
  }),
  ...(size === `large` && {
    height: `52px`,
    paddingLeft: `32px`,
    paddingRight: `32px`,
    fontSize: `16px`,
  }),
});

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: prop => !['loading'].includes(String(prop)),
})<ExtendedButtonProps>(({ theme, variant, color, size, loading }) => ({
  textTransform: `none`,
  fontWeight: `400`,
  ...(variant === `contained` && {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.white, 0.08),
    boxShadow: `none`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.08),
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.common.white, 0.12),
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 0.16),
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary.light, 0.48),
      borderColor: alpha(theme.palette.common.white, 0.16),
    },
  }),
  ...(variant === `outlined` && {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
    boxShadow: `none`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.08),
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.common.white, 0.12),
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 0.16),
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary.light, 0.48),
      borderColor: alpha(theme.palette.common.white, 0.16),
    },
  }),
  ...(variant === `text` && {
    color: theme.palette.common.white,
    boxShadow: `none`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.08),
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
  }),
  ...(size != null && sizeMixin(size)),

  ...(color !== undefined &&
    color !== `inherit` &&
    variant !== undefined &&
    variantMixin({ theme, variant, color })),
  ...(color !== undefined &&
    color === `inherit` &&
    variant !== undefined &&
    variantInheritMixin({ theme, variant, color })),

  ...(loading && {
    pointerEvents: `none`,
    '.text': {
      opacity: 0,
    },
  }),

  '.MuiButton-startIcon': {
    '+ span': {
      lineHeight: `1`,
    },
  },

  ...(variant === `solid` && {
    color: theme.palette.primary.main,
    boxShadow: `none`,
    height: `auto`,
    padding: `0`,
    fontSize: `14px`,
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
  }),
}));
