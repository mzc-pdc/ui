import * as React from 'react';
import { FC } from 'react';
import { StyledButtonBase } from './styled';
import { ButtonBaseProps } from './types';

export const ButtonBase: FC<ButtonBaseProps> = (
    props,
    { ...restProps }
) => {
    return <StyledButtonBase {...props} {...restProps} >{props.children}</StyledButtonBase>;
};
