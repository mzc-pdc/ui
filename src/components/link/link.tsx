import React, { FC } from 'react';
import { LinkProps } from './types';

import { StyledLink } from './styled';

export const Link: FC<LinkProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledLink
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledLink>
    );
};
