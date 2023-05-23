import {CircularProgress, IconButton as MuiIconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import {alpha} from "@mui/system";
import { IconButtonProps } from './types';

export const Children = styled('span')``;

export const Spinner = styled(CircularProgress)(() => ({
  position: `absolute`,
}));


const colorInheritMixIn = ({ theme, variant }: any) => ({
  ...(variant === 'contained' && {
    color: theme.palette.secondary.contrastText,
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover, &:active': {
      opacity: 1,
      boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.88),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.84),
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary.contrastText, 0.9),
      borderColor: alpha(theme.palette.secondary.main, 0.35),
      backgroundColor: alpha(theme.palette.secondary.main, 0.35),
    },
  }),
  ...(variant === 'outlined' && {
    border: `1px solid`,
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.contrastText,
    '&:hover, &:active, &:focus': {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    '&:disabled': {
      color: alpha(theme.palette.secondary.main, 0.7),
      borderColor: alpha(theme.palette.secondary.main, 0.35),
    },
  }),
  ...(variant === 'dashed' && {
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
});

const variantMixIn = ({ theme, variant, color }: any) => ({
  ...(variant === 'contained' && {
    color: theme.palette[color].contrastText,
    borderColor: theme.palette[color].main,
    backgroundColor: theme.palette[color].main,
    '&:hover, &:active': {
      opacity: 1,
      boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette[color].main, 0.88),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette[color].main, 0.84),
    },
    '&:disabled': {
      color: alpha(theme.palette[color].contrastText, 0.9),
      borderColor: alpha(theme.palette[color].main, 0.35),
      backgroundColor: alpha(theme.palette[color].main, 0.35),
    },
  }),
  ...(variant === 'outlined' && {
    border: `1px solid`,
    color: theme.palette[color].main,
    borderColor: theme.palette[color].main,
    backgroundColor: theme.palette[color].contrastText,
    '&:hover, &:active, &:focus': {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      borderColor: theme.palette[color].main,
    },
    '&:disabled': {
      color: alpha(theme.palette[color].main, 0.7),
      borderColor: alpha(theme.palette[color].main, 0.35),
    },
  }),
  ...(variant === 'dashed' && {
    border: `1px dashed ${theme.palette[color][600]}`,
    backgroundColor: theme.palette[color][50],
    '.MuiSvgIcon-root': {
      color: theme.palette[color].main,
      transition: `all linear 0.2s`,
    },
    '&:hover': {
      backgroundColor: theme.palette[color].main,
      borderColor: theme.palette[color].main,
      '.MuiSvgIcon-root': {
        color: theme.palette[color].contrastText
      },
    },

  }),
});

export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: prop => !['variant','color', 'loading', 'circled'].includes(String(prop)),
})<IconButtonProps>(({ theme, variant, color, loading, circled }) => ({
  color: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.08)
  },
  ...((color === undefined || color === `inherit`) && colorInheritMixIn({theme, variant})),
  ...((variant !== undefined && (color !== undefined && color !== 'inherit')) && variantMixIn({ theme, variant, color })),
  ...(loading && {
    pointerEvents: `none`,
    '> svg': {
      opacity:0,
    }
  }),
  ...(circled && {
    borderRadius: `100%`
  }),
}));
