import React, { FC } from 'react';
import { ImageListItemBarProps } from './types';

import { StyledImageListItemBar } from './styled';

export const ImageListItemBar: FC<ImageListItemBarProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledImageListItemBar
            {...props}
            {...restProps}
        />
    );
};
