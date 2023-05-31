import React, { FC } from 'react';
import { FadeProps } from './types';

import { StyledFade } from './styled';

export const Fade: FC<FadeProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFade
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledFade>
    );
};
