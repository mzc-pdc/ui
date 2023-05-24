import React, { FC } from 'react';

import { TableCellProps } from './types';

import { StyledTableCell } from './styled';

export const TableCell: FC<TableCellProps> = ({ ...restProps }) => {
    return <StyledTableCell {...restProps} />;
};