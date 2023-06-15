import React, { FC } from 'react';
import { FabProps } from './types';

import { StyledFab } from './styled';

export const Fab: FC<FabProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledFab
            {...props}
            ref={ref}
        />
    );
});

Fab.displayName = "Fab";