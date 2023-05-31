import { styled } from '@mui/material/styles';
import { Slider as MuiSlider } from '@mui/material';
import { SliderProps } from './types';

export const StyledSlider = styled(MuiSlider, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SliderProps>(({ theme }) => ({

}));
