import React, { FC } from 'react';

import { ListProps } from './types';

import { StyledList } from './styled';

export const List: FC<ListProps> = props => {
    return <StyledList {...props} />;
};