import React, { FC } from 'react';
import { TypographyProps } from './types';

import { StyledTypography } from './styled';

export const Typography: FC<TypographyProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledTypography
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledTypography>
    );
};
