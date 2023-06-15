import * as React from 'react';
import { FC } from 'react';
import { StyledDialog } from './styled';
import { DialogProps } from './types';

export const Dialog: FC<DialogProps> = React.forwardRef((props, ref) => {
    return <StyledDialog {...props} ref={ref}>{props.children}</StyledDialog>;
});

Dialog.displayName = "Dialog";