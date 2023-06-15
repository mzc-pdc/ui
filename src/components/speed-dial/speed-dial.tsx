import React, { FC } from 'react';
import { SpeedDialProps } from './types';

import { StyledSpeedDial } from './styled';

export const SpeedDial: FC<SpeedDialProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSpeedDial
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledSpeedDial>
    );
});

SpeedDial.displayName = "SpeedDial";