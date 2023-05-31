import React, { FC } from 'react';
import { SpeedDialIconProps } from './types';

import { StyledSpeedDialIcon } from './styled';

export const SpeedDialIcon: FC<SpeedDialIconProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSpeedDialIcon
            {...props}
            {...restProps}
        />
    );
};
