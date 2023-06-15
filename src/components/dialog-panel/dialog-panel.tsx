import * as React from 'react';
import { FC } from 'react';
import { StyledDialogPanel } from './styled';
import { DialogPanelProps } from './types';

export const DialogPanel: FC<DialogPanelProps> = React.forwardRef((props, ref) => {
    return <StyledDialogPanel {...props} ref={ref}>{props.children}</StyledDialogPanel>;
});

DialogPanel.displayName = "DialogPanel";