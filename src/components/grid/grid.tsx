import React, { FC } from 'react';
import { GridProps } from './types';

import { StyledGrid } from './styled';

export const Grid: FC<GridProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledGrid
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledGrid>
    );
});

Grid.displayName = "Grid";