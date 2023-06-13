import * as React from 'react';
import { FC } from 'react';
import { StyledDialog } from './styled';
import { DialogProps } from './types';

export const Dialog: FC<DialogProps> = props => {
    return <StyledDialog {...props}>{props.children}</StyledDialog>;
};
