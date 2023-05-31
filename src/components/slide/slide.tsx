import React, { FC } from 'react';
import { SlideProps } from './types';

import { StyledSlide } from './styled';

export const Slide: FC<SlideProps> = (props, {
  ...restProps
}) => {
  return (
    <StyledSlide
        {...props}
      {...restProps}
    >
      {props.children}
    </StyledSlide>
  );
};
