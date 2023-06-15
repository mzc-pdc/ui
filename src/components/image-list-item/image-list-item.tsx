import React, { FC } from 'react';
import { ImageListItemProps } from './types';

import { StyledImageListItem } from './styled';

export const ImageListItem: FC<ImageListItemProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledImageListItem
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledImageListItem>
    );

});

ImageListItem.displayName = "ImageListItem";