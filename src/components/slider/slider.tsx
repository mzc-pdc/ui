import React, { FC } from 'react';
import { SliderProps } from './types';

import { StyledSlider } from './styled';

export const Slider: FC<SliderProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSlider
            {...props}
            {...restProps}
        />
    );
};
