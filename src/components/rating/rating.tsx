import React, { FC } from 'react';
import { RatingProps } from './types';

import { StyledRating } from './styled';

export const Rating: FC<RatingProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledRating
            {...props}
            ref={ref}
        />
    );
});

Rating.displayName = "Rating";