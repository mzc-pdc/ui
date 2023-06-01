import React, { FC } from 'react';
import { SvgIconProps } from './types';

import { StyledSvgIcon } from './styled';

export const SvgIcon: FC<SvgIconProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSvgIcon
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledSvgIcon>
    );
};
