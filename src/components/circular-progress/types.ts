import { CircularProgressProps as MuCircularProgressProps } from '@mui/material/CircularProgress';

declare module '@mui/material/CircularProgress' {
    export interface CircularProgressPropsColorOverrides {
        inherit: true;
        grayscale: true;
        grayscaleSecondary: true;
        default: true;
        white: true;
    }
}

export interface CircularProgressProps extends MuCircularProgressProps {
}
