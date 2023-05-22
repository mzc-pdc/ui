import React, { FC } from 'react';

import { StyledSlider } from './styled';
import type { ExtendedSliderProps } from './types';

export const Slider: FC<ExtendedSliderProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSlider
            {...props}
            {...restProps}
        />
    );
};
