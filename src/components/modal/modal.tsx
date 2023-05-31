import React, { FC } from 'react';
import { ModalProps } from './types';

import { StyledModal } from './styled';

export const Modal: FC<ModalProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledModal
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledModal>
    );
};
