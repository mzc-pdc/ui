import React, { FC } from 'react';

import { TableFooterProps } from '@mui/material';

import { StyledTableFooter } from './styled';

export const TableFooter: FC<TableFooterProps> = ({ ...restProps }) => {
    return <StyledTableFooter {...restProps} />;
};