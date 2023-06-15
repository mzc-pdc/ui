import React, { FC } from 'react';
import { TableBodyProps } from '@mui/material';
import { StyledTableBody } from './styled';

export const TableBody: FC<TableBodyProps> = React.forwardRef((props, ref) => {
    return <StyledTableBody {...props} ref={ref}/>;
});

TableBody.displayName = "TableBody";