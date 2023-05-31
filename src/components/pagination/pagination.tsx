import React, { FC } from 'react';
import { PaginationProps } from './types';

import { StyledPagination } from './styled';

export const Pagination: FC<PaginationProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledPagination
            {...props}
            {...restProps}
        />
    );
};
