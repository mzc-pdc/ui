import * as React from 'react';
import { FC } from 'react';
import { StyledDialogTitle } from './styled';
import { DialogTitleProps } from './types';

export const DialogTitle: FC<DialogTitleProps> = (
    props,
    { ...restProps }
) => {
    return <StyledDialogTitle {...props} {...restProps} >{props.children}</StyledDialogTitle>;
};
