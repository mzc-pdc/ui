import React, { FC } from 'react';
import { ZoomProps } from './types';

import { StyledZoom } from './styled';

export const Zoom: FC<ZoomProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledZoom
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledZoom>
    );
});

Zoom.displayName = "Zoom";