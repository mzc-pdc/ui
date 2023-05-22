import React, { FC } from 'react';

import { StyledRating } from './styled';
import type { ExtendedRatingProps } from './types';

export const Rating: FC<ExtendedRatingProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledRating
            {...props}
            {...restProps}
        />
    );
};
