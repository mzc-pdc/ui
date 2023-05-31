import React, { FC } from 'react';
import { SpeedDialProps } from './types';

import { StyledSpeedDial } from './styled';

export const SpeedDial: FC<SpeedDialProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSpeedDial
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledSpeedDial>
    );
};
