import React, { FC } from 'react';
import { TypographyProps } from './types';

import { StyledTypography } from './styled';

export const Typography: FC<TypographyProps> =  React.forwardRef((props, ref) => {

    return (
        <StyledTypography
            as={props.component}
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledTypography>
    );
});

Typography.displayName = "Typography";