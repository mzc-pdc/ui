import React, { FC } from 'react';
import { PaginationItemProps } from './types';

import { StyledPaginationItem } from './styled';

export const PaginationItem: FC<PaginationItemProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledPaginationItem
            {...props}
            ref={ref}
        />
    );
});

PaginationItem.displayName = "PaginationItem";