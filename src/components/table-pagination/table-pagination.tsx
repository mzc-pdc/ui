import React, { FC } from 'react';

import { TablePaginationProps } from './types';

import { StyledTablePagination } from './styled';
import {TableCellProps} from "../table-cell";

export const TablePagination: FC<TablePaginationProps & TableCellProps> = (props,{ ...restProps }) => {
    return <StyledTablePagination {...props} {...restProps} />;
};