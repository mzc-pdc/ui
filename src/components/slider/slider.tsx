import React, { FC } from 'react';
import { SliderProps } from './types';

import { StyledSlider } from './styled';

export const Slider: FC<SliderProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSlider
            {...props}
            ref={ref}
        />
    );
});

Slider.displayName = "Slider";