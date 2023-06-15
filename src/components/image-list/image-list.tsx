import React, { FC } from 'react';
import { ImageListProps } from './types';

import { StyledImageList } from './styled';

export const ImageList: FC<ImageListProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledImageList
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledImageList>
    );
});

ImageList.displayName = "ImageList";