import { LinearProgressProps as MuLinearProgressProps } from '@mui/material/LinearProgress';

declare module '@mui/material/LinearProgress' {
    export interface LinearProgressPropsColorOverrides {
        inherit: true;
        grayscale: true;
        grayscaleSecondary: true;
        default: true;
    }
}

export interface LinearProgressProps extends MuLinearProgressProps {
}
