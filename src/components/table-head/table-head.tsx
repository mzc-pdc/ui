import React, { FC } from 'react';

import { TableHeadProps } from '@mui/material';

import { StyledTableHead } from './styled';

export const TableHead: FC<TableHeadProps> = React.forwardRef((props, ref) => {
    return <StyledTableHead {...props} ref={ref}/>;
});

TableHead.displayName = "TableHead";