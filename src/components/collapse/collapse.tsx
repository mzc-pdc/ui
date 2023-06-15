import React, { FC } from 'react';

import { CollapseProps } from './types';

import { StyledCollapse } from './styled';

export const Collapse: FC<CollapseProps> = React.forwardRef((props, ref) => {
  return <StyledCollapse {...props} ref={ref} >{props.children}</StyledCollapse>;
});

Collapse.displayName = "Collapse";