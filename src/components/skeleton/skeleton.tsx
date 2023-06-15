import React, { FC } from 'react';
import { SkeletonProps } from './types';

import { StyledSkeleton } from './styled';

export const Skeleton: FC<SkeletonProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSkeleton
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledSkeleton>
    );
});

Skeleton.displayName = "Skeleton";