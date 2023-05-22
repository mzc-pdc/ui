import {
    Rating as MuiRating,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedRatingProps} from './types';

export const StyledRating = styled(MuiRating, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedRatingProps>(({ theme }) => ({

}));
