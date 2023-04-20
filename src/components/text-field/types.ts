import React, { ChangeEventHandler, KeyboardEvent } from 'react';

import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface ITextFieldProps {
  className?: string;
  id?: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
  size?: 'medium' | 'small';
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  bytes?: number;
  sx?: object;
  value?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: (evt: KeyboardEvent<HTMLImageElement>) => void;
  isEdit?: boolean;
  maxRows?: number;
  type?: 'input' | 'textarea' | 'search' | undefined;
  inputStyle?: object;
  variant?: 'standard' | 'filled' | 'outlined';
}

export type TextFieldProps = ITextFieldProps &
  Omit<MuiTextFieldProps, 'variant'>;
