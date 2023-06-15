import * as React from 'react';
import { FC } from 'react';
import { StyledDialogContent } from './styled';
import { DialogContentProps } from './types';
export const DialogContent: FC<DialogContentProps> = React.forwardRef((props, ref) => {
    return <StyledDialogContent {...props} ref={ref}>{props.children}</StyledDialogContent>;
});

DialogContent.displayName = "DialogContent";
