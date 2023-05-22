import {
    ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material';


export type Variant = 'contained' | 'outlined' | 'dashed';
export type Color =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'error'
    | 'warning'
    | 'grayscale'
    | 'grayscaleSecondary'
    | 'default'
    | undefined;
export type Size = 'small' | 'medium' | 'large';

export interface StyledButtonGroupProps  {
    color?: Color;
    variant?: Variant;
    size?: Size;
}

export type ExtendedButtonGroupProps = MuiButtonGroupProps & StyledButtonGroupProps;