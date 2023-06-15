import React, { FC } from 'react';
import { SwipeableDrawerProps } from './types';

import { StyledSwipeableDrawer} from './styled';

export const SwipeableDrawer: FC<SwipeableDrawerProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSwipeableDrawer
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledSwipeableDrawer>
    );
});

SwipeableDrawer.displayName = "SwipeableDrawer";