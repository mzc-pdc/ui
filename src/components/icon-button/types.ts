import { IconButtonProps as MuIconButtonProps } from '@mui/material/IconButton/IconButton';

declare module '@mui/material/CircularProgress' {
  export interface CircularProgressPropsColorOverrides {
    inherit:true;
    grayscale: true;
    grayscaleSecondary: true;
    default: true;
  }
}

declare module '@mui/material/IconButton' {
  export interface IconButtonPropsColorOverrides {
    grayscale: true;
    grayscaleSecondary: true;
    // ... 커스텀으로 추가 해야할 컬러들.
  }
  export interface IconButtonPropsSizeOverrides {
    Xsmall: true;
  }
}
export interface IconButtonProps extends MuIconButtonProps {
  variant?: 'outlined' | 'contained' | 'dashed';
  circled?: boolean;
  loading?: boolean;
}
