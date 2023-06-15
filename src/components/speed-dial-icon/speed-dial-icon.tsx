import React, { FC } from 'react';
import { SpeedDialIconProps } from './types';

import { StyledSpeedDialIcon } from './styled';

export const SpeedDialIcon: FC<SpeedDialIconProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSpeedDialIcon
            {...props}
            ref={ref}
        />
    );
});

SpeedDialIcon.displayName = "SpeedDialIcon";