import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField/TextField';
import { styled, alpha } from '@mui/system';

import { ITextFieldProps } from './types';

export const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: prop =>
    !['size', 'isEdit', 'type', 'variant', 'disabled'].includes(String(prop)),
})<MuiTextFieldProps & ITextFieldProps>(
  ({ theme, size, isEdit, type, variant, disabled }) => ({
    width: `100%`,
    backgroundColor: theme.palette.common.white,
    legend: {
      display: `none`,
    },
    '.MuiInputBase-root': {
      borderRadius: `2px`,
      '> .MuiSvgIcon-root ': {
        '&:first-of-type': {
          marginRight: `16px`,
          ...(disabled && {
            opacity: `0.48`,
          }),
        },
      },
      ...(type === `search` && {
        borderRadius: `3px`,
        paddingLeft: `16px`,
        paddingRight: `8px`,
      }),
      ...(variant === 'filled' && {
        backgroundColor: alpha(theme.palette.grayscaleSecondary[50], 0.5),
        ...(disabled && {
          backgroundColor: alpha(theme.palette.grayscaleSecondary[50], 0.2),
        }),
      }),
    },
    '.MuiInputBase-input': {
      height: `40px`,
      boxSizing: `border-box`,
    },
    '.MuiOutlinedInput-notchedOutline': {
      top: `0`,
      borderWidth: `1px `,
      borderColor: theme.palette.secondary.light,
      ...(isEdit && {
        borderColor: theme.palette.primary.main,
      }),
      ...(variant === 'filled' && {
        border: 0,
      }),
    },
    '.MuiOutlinedInput-root': {
      '&:hover': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
      },
      '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
          borderWidth: `1px`,
        },
      },
    },
    // '.MuiInputBase-multiline': {
    //     textarea: {
    //         overflow: `overlay !important`,
    //         height: `55px !important`,
    //         fontSize: `14px`,
    //     },
    // },
    '.MuiFormHelperText-root.Mui-error': {
      fontSize: `14px`,
      margin: `8px 0 12px`,
    },
    ...(type === `textarea` && {
      textarea: {
        overflow: `overlay !important`,
        height: `55px !important`,
        fontSize: `14px`,
      },
    }),
  })
);
