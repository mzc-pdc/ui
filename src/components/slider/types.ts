import {
    SliderProps as MuiSliderProps,
} from '@mui/material';

declare module '@mui/material/Slider' {
    export interface SliderPropsSizeOverrides {
        large: true;
    }
}

export type Size = 'small' | 'medium' | 'large';

export interface StyledSliderProps  {
    size?: Size;
}

export type ExtendedSliderProps = MuiSliderProps & StyledSliderProps;