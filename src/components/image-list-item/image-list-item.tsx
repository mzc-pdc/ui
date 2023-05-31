import React, { FC } from 'react';
import { ImageListItemProps } from './types';

import { StyledImageListItem } from './styled';

export const ImageListItem: FC<ImageListItemProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledImageListItem
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledImageListItem>
    );
};
