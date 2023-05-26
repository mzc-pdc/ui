import React, {FC} from 'react';
import {ToolbarProps} from './types';

import {StyledToolBar} from './styled';

export const Toolbar: FC<ToolbarProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledToolBar
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledToolBar>
    );
};
