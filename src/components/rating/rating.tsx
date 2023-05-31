import React, { FC } from 'react';
import { RatingProps } from './types';

import { StyledRating } from './styled';

export const Rating: FC<RatingProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledRating
            {...props}
            {...restProps}
        />
    );
};
