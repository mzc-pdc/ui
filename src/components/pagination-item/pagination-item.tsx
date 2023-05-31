import React, { FC } from 'react';
import { PaginationItemProps } from './types';

import { StyledPaginationItem } from './styled';

export const PaginationItem: FC<PaginationItemProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledPaginationItem
            {...props}
            {...restProps}
        />
    );
};
