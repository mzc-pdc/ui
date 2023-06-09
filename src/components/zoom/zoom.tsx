import React, { FC } from 'react';
import { ZoomProps } from './types';

import { StyledZoom } from './styled';

export const Zoom: FC<ZoomProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledZoom
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledZoom>
    );
};
