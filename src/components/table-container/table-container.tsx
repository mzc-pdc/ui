import React, { FC } from 'react';

import { TableContainerProps } from '@mui/material';

import { StyledTableContainer } from './styled';

export const TableContainer: FC<TableContainerProps> = ({ ...restProps }) => {
    return <StyledTableContainer {...restProps} />;
};