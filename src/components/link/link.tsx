import React, { FC } from 'react';
import { LinkProps } from './types';

import { StyledLink } from './styled';

export const Link: FC<LinkProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledLink
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledLink>
    );
});

Link.displayName = "Link";