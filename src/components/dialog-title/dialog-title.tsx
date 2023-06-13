import * as React from 'react';
import { FC } from 'react';
import { StyledDialogTitle } from './styled';
import { DialogTitleProps } from './types';

export const DialogTitle: FC<DialogTitleProps> = props => {
    return <StyledDialogTitle {...props} >{props.children}</StyledDialogTitle>;
};
