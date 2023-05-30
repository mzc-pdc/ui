import React, { FC } from 'react';
import { AvatarProps } from './types';

import { StyledAvatar } from './styled';

export const Avatar: FC<AvatarProps> = (props, {
  ...restProps
}) => {
  return (
    <StyledAvatar
      {...props}
      {...restProps}
    >
      {props.children}
    </StyledAvatar>
  );
};
