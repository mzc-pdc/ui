import * as React from 'react';
import { FC } from 'react';
import { StyledDialog } from './styled';
import { DialogProps } from './types';

export const Dialog: FC<DialogProps> = (
    props,
    { ...restProps }
) => {
    return <StyledDialog {...props} {...restProps} >{props.children}</StyledDialog>;
};
