declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    solid: true;
  }
  export interface ButtonPropsColorOverrides {
    inherit: true;
    grayscale: true;
    grayscaleSecondary: true;
    default: true;
  }
}

/** todo: module export 확인이 필요함. */
export type Variant = 'contained' | 'outlined' | 'text' | 'solid';
