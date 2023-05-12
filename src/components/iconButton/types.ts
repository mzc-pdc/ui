import  { MouseEventHandler } from 'react';
import {
  IconButtonProps as MuiIconButtonProps,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

/* overrides */
declare module '@mui/material/IconButton' {
  export interface IconButtonPropsColorOverrides {
    inherit: true;
    grayscale: true;
    grayscaleSecondary: true;
    default: true;
    // ... 커스텀으로 추가 해야할 컬러들.
  }
  export interface IconButtonPropsSizeOverrides {
    Xsmall: true;
  }
  interface IconButtonPropsVariantOverrides {
    dashed: true;
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
export type Size = 'Xsmall' | 'small' | 'medium' | 'large';

export interface StyledIconButtonProps  {
  color?: Color;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  edge?: boolean;
  circled?: boolean;
  loading?: boolean;
  active?: boolean;
}

export interface StyledSpinnerProps extends MuiCircularProgressProps {
  color?: Color;
}

export type ExtendedIconButtonProps = MuiIconButtonProps & StyledIconButtonProps;