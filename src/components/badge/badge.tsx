import React, { FC } from 'react';

import { BadgeProps } from './types';

import { StyledBadge } from './styled';

export const Badge: FC<BadgeProps> = React.forwardRef((props, ref) => {
  return <StyledBadge {...props} ref={ref} >{props.children}</StyledBadge>;
});

Badge.displayName = "Badge";

