import * as React from 'react';
import { FC } from 'react';
import { StyledDialogActions } from './styled';
import { DialogActionsProps } from './types';

export const DialogActions: FC<DialogActionsProps> = (
    props,
    { ...restProps }
) => {
    return <StyledDialogActions {...props} {...restProps} >{props.children}</StyledDialogActions>;
};
