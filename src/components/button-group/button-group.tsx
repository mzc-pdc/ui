import React, { FC } from 'react';

import { StyledButtonGroup } from './styled';
import type { ButtonGroupProps } from './types';

export const ButtonGroup: FC<ButtonGroupProps> = React.forwardRef((props, ref) => {
    return (
        <StyledButtonGroup
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledButtonGroup>
    );

});

ButtonGroup.displayName = "ButtonGroup";