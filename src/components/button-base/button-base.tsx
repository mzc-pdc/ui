import * as React from 'react';
import { FC } from 'react';
import { StyledButtonBase } from './styled';
import { ButtonBaseProps } from './types';

export const ButtonBase: FC<ButtonBaseProps> = React.forwardRef((props, ref) => {
    return <StyledButtonBase {...props} ref={ref} >{props.children}</StyledButtonBase>;
});

ButtonBase.displayName = "ButtonBase";