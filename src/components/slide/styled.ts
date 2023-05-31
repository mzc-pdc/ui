import { styled } from '@mui/material/styles';
import { Slide as MuiSlide } from '@mui/material';
import { SlideProps } from './types';

export const StyledSlide = styled(MuiSlide, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SlideProps>(({ theme }) => ({

}));
