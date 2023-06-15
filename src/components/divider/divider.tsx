import React, { FC } from 'react';
import { DividerProps } from './types';

import { StyledDivider } from './styled';

export const Divider: FC<DividerProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledDivider
            {...props}
            ref={ref}
        />
    );
});

Divider.displayName = "Divider";