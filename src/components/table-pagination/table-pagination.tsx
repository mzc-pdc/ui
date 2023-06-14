import React, { FC } from 'react';

import { TablePaginationProps } from './types';

import { StyledTablePagination } from './styled';

export const TablePagination: FC<TablePaginationProps> = (
  props,
  { ...restProps }
) => {
  return <StyledTablePagination {...props} {...restProps} />;
};

