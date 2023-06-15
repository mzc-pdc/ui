import React, { FC } from 'react';
import { FadeProps } from './types';

import { StyledFade } from './styled';

export const Fade: FC<FadeProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledFade
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledFade>
    );
});

Fade.displayName = "Fade";