import React, { FC } from 'react';

import { ClickAwayListenerProps } from './types';

import { StyledClickAwayListener } from './styled';

export const ClickAwayListener: FC<ClickAwayListenerProps> = React.forwardRef((props, ref) => {
    return <StyledClickAwayListener {...props} ref={ref} >{props.children}</StyledClickAwayListener>;
});

ClickAwayListener.displayName = "ClickAwayListener";