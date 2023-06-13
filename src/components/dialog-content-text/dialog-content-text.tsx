import * as React from 'react';
import { FC } from 'react';
import { StyledDialogContentText } from './styled';
import { DialogContentTextProps } from './types';

export const DialogContentText: FC<DialogContentTextProps> = props => {
    return <StyledDialogContentText {...props} >{props.children}</StyledDialogContentText>;
};
