import React, { FC } from 'react';

import { StyledFab } from './styled';
import type { ExtendedFabProps } from './types';

export const Fab: FC<ExtendedFabProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFab
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledFab>
    );
};
