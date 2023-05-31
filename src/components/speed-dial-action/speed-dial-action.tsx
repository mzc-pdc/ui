import React, { FC } from 'react';
import { SpeedDialActionProps } from './types';

import { StyledSpeedDialAction } from './styled';

export const SpeedDialAction: FC<SpeedDialActionProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSpeedDialAction
            {...props}
            {...restProps}
        />
    );
};
