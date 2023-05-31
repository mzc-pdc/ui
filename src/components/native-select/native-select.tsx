import React, { FC } from 'react';
import { NativeSelectProps } from './types';

import { StyledNativeSelect } from './styled';

export const NativeSelect: FC<NativeSelectProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledNativeSelect
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledNativeSelect>
    );
};
