import React, {FC} from 'react';
import {GrowProps} from './types';

import {StyledGrow} from './styled';

export const Grow: FC<GrowProps> = React.forwardRef((props, ref) => {
    return (
        <StyledGrow
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledGrow>
    );
});

Grow.displayName = "Grow";