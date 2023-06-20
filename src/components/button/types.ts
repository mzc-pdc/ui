import { ButtonProps as MuiButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        solid: true;
    }
    export interface ButtonPropsColorOverrides {
        inherit: true;
        grayscale: true;
        grayscaleSecondary: true;
        default: true;
        white: true;
    }
}
export interface ButtonProps extends MuiButtonProps {
  // additional prop keys that do not exist in MuiThemeProps
    loading?: boolean;
    rounded?:boolean;
}

