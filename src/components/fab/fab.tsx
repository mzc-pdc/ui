import React, { FC } from 'react';
import { FabProps } from './types';

import { StyledFab } from './styled';

export const Fab: FC<FabProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFab
            {...props}
            {...restProps}
        />
    );
};
