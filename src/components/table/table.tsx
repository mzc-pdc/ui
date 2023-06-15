import React, { FC } from 'react';

import { TableProps } from './types';

import { StyledTable } from './styled';

export const Table: FC<TableProps> = React.forwardRef((props, ref) => {
    return <StyledTable {...props} ref={ref} />;
});

Table.displayName = "Table";