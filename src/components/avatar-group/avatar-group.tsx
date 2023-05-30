import React, { FC } from 'react';
import { AvatarGroupProps } from './types';

import { StyledAvatarGroup } from './styled';

export const AvatarGroup: FC<AvatarGroupProps> = (props, {
  ...restProps
}) => {
  return (
    <StyledAvatarGroup
      {...props}
      {...restProps}
    >
      {props.children}
    </StyledAvatarGroup>
  );
};
