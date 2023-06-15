import * as React from 'react';
import { FC } from 'react';
import { StyledDialogActions } from './styled';
import { DialogActionsProps } from './types';

export const DialogActions: FC<DialogActionsProps> = React.forwardRef((props, ref) => {
    return <StyledDialogActions {...props} ref={ref}>{props.children}</StyledDialogActions>;
});

DialogActions.displayName = "DialogActions";