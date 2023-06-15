import * as React from 'react';
import { FC } from 'react';
import { StyledDialogContentText } from './styled';
import { DialogContentTextProps } from './types';

export const DialogContentText: FC<DialogContentTextProps> = React.forwardRef((props, ref) => {
    return <StyledDialogContentText {...props} ref={ref}>{props.children}</StyledDialogContentText>;
});

DialogContentText.displayName = "DialogContentText";