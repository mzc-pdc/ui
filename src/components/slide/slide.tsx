import React, { FC } from 'react';
import { SlideProps } from './types';

import { StyledSlide } from './styled';

export const Slide: FC<SlideProps> = React.forwardRef((props, ref) => {
  return (
    <StyledSlide
        {...props}
      ref={ref}
    >
      {props.children}
    </StyledSlide>
  );
});

Slide.displayName = "Slide";