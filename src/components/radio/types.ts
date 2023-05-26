import { RadioProps as MuRadioProps } from '@mui/material/Radio';

declare module '@mui/material/Radio' {
    export interface RadioPropsColorOverrides {
        white: true;
    }
}
export interface RadioProps extends MuRadioProps {
}
