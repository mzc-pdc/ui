import React, { FC } from 'react';

import { TableProps } from '@mui/material';

import { StyledTable } from './styled';

export const Table: FC<TableProps> = ({ ...restProps }) => {
    return <StyledTable {...restProps} />;
};