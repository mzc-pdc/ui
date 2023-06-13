import React, { FC } from 'react';
import { TypographyProps } from './types';

import { StyledTypography } from './styled';

export const Typography: FC<TypographyProps> = (props, {
    ...restProps
}) => {


    return (
        <StyledTypography
            as={props.component}
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledTypography>
    );
};
