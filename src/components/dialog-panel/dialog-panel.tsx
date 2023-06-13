import * as React from 'react';
import { FC } from 'react';
import { StyledDialogPanel } from './styled';
import { DialogPanelProps } from './types';

export const DialogPanel: FC<DialogPanelProps> = props => {
    return <StyledDialogPanel {...props} >{props.children}</StyledDialogPanel>;
};
