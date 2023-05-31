import { styled } from '@mui/material/styles';
import { Rating as MuiRating } from '@mui/material';
import { RatingProps } from './types';

export const StyledRating = styled(MuiRating, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<RatingProps>(({ theme }) => ({

}));
