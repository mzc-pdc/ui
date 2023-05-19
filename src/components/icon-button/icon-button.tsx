import React, { FC } from 'react';
import { StyledIconButton } from './styled';
import { IIconButtonProps } from './types';

export const IconButton: FC<IIconButtonProps> = ({ children, ...props }) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};
