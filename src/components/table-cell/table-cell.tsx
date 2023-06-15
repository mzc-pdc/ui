import React, { FC } from 'react';

import { TableCellProps } from './types';

import { StyledTableCell } from './styled';

export const TableCell: FC<TableCellProps> = React.forwardRef((props, ref) => {
    return <StyledTableCell {...props} ref={ref} />;
});

TableCell.displayName = "TableCell";