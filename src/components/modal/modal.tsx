import React, { FC } from 'react';
import { ModalProps } from './types';

import { StyledModal } from './styled';

export const Modal: FC<ModalProps> = React.forwardRef((props,  ref) => {
    return (

        <StyledModal
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledModal>
    )
});

Modal.displayName = "Modal";