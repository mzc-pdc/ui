import  { MouseEventHandler } from 'react';
import {
  ButtonProps as MuiButtonProps,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

/* overrides */
declare module '@mui/material/Button' {
  export interface ButtonPropsColorOverrides {
    inherit: true;
    grayscale: true;
    grayscaleSecondary: true;
    default: true;
    // ... 커스텀으로 추가 해야할 컬러들.
  }
}

declare module '@mui/material/CircularProgress' {
  export interface CircularProgressPropsColorOverrides {
    inherit: true;
    grayscale: true;
    grayscaleSecondary: true;
    default: true;
    // ... 커스텀으로 추가 해야할 컬러들.
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    solid: true;
  }
}
export type Variant = 'contained' | 'outlined' | 'text' | 'solid';
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
export type OnClick = MouseEventHandler<HTMLButtonElement>;

export interface StyledButtonProps extends MuiButtonProps {
  type?: 'submit' | 'button';
  variant?: Variant;
  color?: Color;
  size?: Size;
  label?: string;
  loading?: boolean;
  onClick?: OnClick;
  disabled?: boolean;
}

export interface  StyledSpinnerProps extends MuiCircularProgressProps {
  color?: Color;
}
