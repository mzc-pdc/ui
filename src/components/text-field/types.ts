import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface ITextFieldProps {
  isEdit?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
}


export type TextFieldProps = ITextFieldProps &
    Omit<MuiTextFieldProps, 'variant'>;
