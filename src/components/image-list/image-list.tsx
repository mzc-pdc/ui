import React, { FC } from 'react';
import { ImageListProps } from './types';

import { StyledImageList } from './styled';

export const ImageList: FC<ImageListProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledImageList
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledImageList>
    );
};
