import * as React from 'react';
import { FC } from 'react';
import { StyledDialogContent } from './styled';
import { DialogContentProps } from './types';

export const DialogContent: FC<DialogContentProps> = (
    props,
    { ...restProps }
) => {
    return <StyledDialogContent {...props} {...restProps} >{props.children}</StyledDialogContent>;
};
