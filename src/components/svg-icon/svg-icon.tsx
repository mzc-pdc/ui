import React, { FC } from 'react';
import { SvgIconProps } from './types';

import { StyledSvgIcon } from './styled';

export const SvgIcon: FC<SvgIconProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSvgIcon
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledSvgIcon>
    );
});

SvgIcon.displayName = "SvgIcon";