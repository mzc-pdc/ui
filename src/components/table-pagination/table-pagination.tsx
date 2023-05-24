import React, { FC } from 'react';

import { TablePaginationProps } from '@mui/material';

import { StyledTablePagination } from './styled';

export const TablePagination: FC<TablePaginationProps> = ({ ...restProps }) => {
    return <StyledTablePagination {...restProps} />;
};