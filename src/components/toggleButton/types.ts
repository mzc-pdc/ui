import {
    ToggleButtonProps as MuiToggleButtonProps,
    ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';


declare module '@mui/material/ToggleButton' {
    export interface ToggleButtonPropsColorOverrides {
        inherit: true;
        grayscale: true;
        grayscaleSecondary: true;
        default: true;
        // ... 커스텀으로 추가 해야할 컬러들.
    }
    export interface ToggleButtonPropsSizeOverrides {
        Xsmall: true;
    }
    interface ToggleButtonPropsVariantOverrides {
        contained: true;
        outlined: true;
        dashed: true;
    }
}

export type Variant = 'contained' | 'outlined' | 'dashed' ;
export type Size = 'Xsmall' | 'small' | 'medium' | 'large' ;

export interface StyledToggleButtonProps  {
    size?: Size;
    variant?: Variant;
    circled?: boolean;
}

export interface StyledToggleButtonGroupProps  {
    size?: Size;
}

export type ExtendedToggleButtonProps = MuiToggleButtonProps & StyledToggleButtonProps;
export type ExtendedToggleButtonGroupProps = MuiToggleButtonGroupProps & StyledToggleButtonGroupProps;