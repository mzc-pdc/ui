import React, { FC } from 'react';

import { TableSortLabelProps } from '@mui/material';

import { StyledTableSortLabel } from './styled';

export const TableSortLabel: FC<TableSortLabelProps> = props => {
    return <StyledTableSortLabel {...props} />;
};

