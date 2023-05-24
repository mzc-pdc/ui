import React, { FC } from 'react';

import { TableBodyProps } from '@mui/material';

import { StyledTableBody } from './styled';

export const TableBody: FC<TableBodyProps> = ({ ...restProps }) => {
    return <StyledTableBody {...restProps} />;
};