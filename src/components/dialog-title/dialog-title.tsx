import * as React from 'react';
import { FC } from 'react';
import { StyledDialogTitle } from './styled';
import { DialogTitleProps } from './types';

export const DialogTitle: FC<DialogTitleProps> = React.forwardRef((props, ref) => {
    return <StyledDialogTitle {...props} ref={ref}>{props.children}</StyledDialogTitle>;
});

DialogTitle.displayName = "DialogTitle";