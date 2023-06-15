import React, { FC } from 'react';
import { ImageListItemBarProps } from './types';

import { StyledImageListItemBar } from './styled';

export const ImageListItemBar: FC<ImageListItemBarProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledImageListItemBar
            {...props}
            ref={ref}
        />
    );

});

ImageListItemBar.displayName = "ImageListItemBar";