import {
    FabProps as MuiFabProps,
} from '@mui/material';


export type Variant = 'circular' | 'extended' ;
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
export type Size = 'small' | 'medium' | 'large' | string;

export interface StyledFabProps  {
    color?: Color;
    variant?: Variant;
    size?: Size;
}

export type ExtendedFabProps = MuiFabProps & StyledFabProps;