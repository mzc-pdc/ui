import React, { FC } from 'react';
import { TableContainerProps } from '@mui/material';
import { StyledTableContainer } from './styled';

// eslint-disable-next-line react/display-name
export const TableContainer: FC<TableContainerProps> = React.forwardRef((props, ref) => {
    return <StyledTableContainer {...props} ref={ref}/>;
});

TableContainer.displayName = "TableContainer";