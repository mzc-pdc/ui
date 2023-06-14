import React, { FC } from 'react';

import { TableRowProps } from './types';

import { StyledTableRow } from './styled';

export const TableRow: FC<TableRowProps> = props => {
    return <StyledTableRow {...props} />;
};