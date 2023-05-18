import React, { FC } from 'react';
import { StyledButton } from './styled';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
