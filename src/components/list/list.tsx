import React, { FC } from 'react';

import { ListProps } from './types';

import { StyledList } from './styled';

export const List: FC<ListProps> = React.forwardRef((props, ref) => {
    return <StyledList {...props} ref={ref} />;
});

List.displayName = "List";