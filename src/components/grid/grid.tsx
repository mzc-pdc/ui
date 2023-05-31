import React, { FC } from 'react';
import { GridProps } from './types';

import { StyledGrid } from './styled';

export const Grid: FC<GridProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledGrid
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledGrid>
    );
};
