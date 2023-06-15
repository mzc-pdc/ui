import React, { FC } from 'react';
import { AvatarProps } from './types';

import { StyledAvatar } from './styled';

export const Avatar: FC<AvatarProps> = React.forwardRef((props, ref) => {
  return (
    <StyledAvatar
      {...props}
      ref={ref}
    >
      {props.children}
    </StyledAvatar>
  );
});

Avatar.displayName = "Avatar";