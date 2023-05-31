import React, { FC } from 'react';
import { SwipeableDrawerProps } from './types';

import { StyledSwipeableDrawer} from './styled';

export const SwipeableDrawer: FC<SwipeableDrawerProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSwipeableDrawer
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledSwipeableDrawer>
    );
};
