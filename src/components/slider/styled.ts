import {
    Slider as MuiSlider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedSliderProps} from './types';

export const StyledSlider = styled(MuiSlider, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedSliderProps>(({ theme }) => ({

}));
