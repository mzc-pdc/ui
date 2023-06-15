import React, { FC } from 'react';
import { SpeedDialActionProps } from './types';

import { StyledSpeedDialAction } from './styled';

export const SpeedDialAction: FC<SpeedDialActionProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSpeedDialAction
            {...props}
            ref={ref}
        />
    );
});

SpeedDialAction.displayName = "SpeedDialAction";