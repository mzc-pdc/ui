import React, { FC } from 'react';
import { AvatarGroupProps } from './types';

import { StyledAvatarGroup } from './styled';

export const AvatarGroup: FC<AvatarGroupProps>  = React.forwardRef((props, ref) => {
  return (
    <StyledAvatarGroup
      {...props}
      ref={ref}
    >
      {props.children}
    </StyledAvatarGroup>
  );
});

AvatarGroup.displayName = "AvatarGroup";
