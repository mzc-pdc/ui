import React, { FC } from 'react';
import { SkeletonProps } from './types';

import { StyledSkeleton } from './styled';

export const Skeleton: FC<SkeletonProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSkeleton
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledSkeleton>
    );
};
