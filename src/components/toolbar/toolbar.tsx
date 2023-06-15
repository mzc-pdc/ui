import React, {FC} from 'react';
import {ToolbarProps} from './types';

import {StyledToolBar} from './styled';

export const Toolbar: FC<ToolbarProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledToolBar
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledToolBar>
    );
});

Toolbar.displayName = "Toolbar";