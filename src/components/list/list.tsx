import React, { FC } from 'react';

import { ListProps } from '@mui/material';

import { StyledList } from './styled';

export const List: FC<ListProps> = ({ ...restProps }) => {
    return <StyledList {...restProps} />;
};