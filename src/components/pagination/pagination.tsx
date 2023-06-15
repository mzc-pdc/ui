import React, { FC } from 'react';
import { PaginationProps } from './types';

import { StyledPagination } from './styled';

export const Pagination: FC<PaginationProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledPagination
            {...props}
            ref={ref}
        />
    );
});

Pagination.displayName = "Pagination";