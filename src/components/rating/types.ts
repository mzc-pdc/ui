import {
    RatingProps as MuiRatingProps,
} from '@mui/material';

export type Size = 'small' | 'medium' | 'large' | string;

export interface StyledRatingProps  {
    size?: Size;
}

export type ExtendedRatingProps = MuiRatingProps & StyledRatingProps;