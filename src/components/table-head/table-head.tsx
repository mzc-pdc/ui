import React, { FC } from 'react';

import { TableHeadProps } from '@mui/material';

import { StyledTableHead } from './styled';

export const TableHead: FC<TableHeadProps> = props => {
    return <StyledTableHead {...props} />;
};