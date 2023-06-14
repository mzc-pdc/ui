import React, { FC } from 'react';

import { TableProps } from './types';

import { StyledTable } from './styled';

export const Table: FC<TableProps> = props => {
    return <StyledTable {...props} />;
};