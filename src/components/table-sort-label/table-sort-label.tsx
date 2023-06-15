import React, { FC } from 'react';

import { TableSortLabelProps } from '@mui/material';

import { StyledTableSortLabel } from './styled';

export const TableSortLabel: FC<TableSortLabelProps> = React.forwardRef((props, ref) => {
    return <StyledTableSortLabel {...props} ref={ref} />;
});

TableSortLabel.displayName = "TableSortLabel";