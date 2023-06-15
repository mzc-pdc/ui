import React, { FC } from 'react';

import { TableFooterProps } from '@mui/material';

import { StyledTableFooter } from './styled';

export const TableFooter: FC<TableFooterProps> = React.forwardRef((props, ref) => {
    return <StyledTableFooter {...props} ref={ref}/>;
});

TableFooter.displayName = "TableFooter";