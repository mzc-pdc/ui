import React, { FC } from 'react';

import { TableRowProps } from './types';

import { StyledTableRow } from './styled';

export const TableRow: FC<TableRowProps> = React.forwardRef((props, ref) => {
    return <StyledTableRow {...props} ref={ref}/>;
});

TableRow.displayName = "TableRow";