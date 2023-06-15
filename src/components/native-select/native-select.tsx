import React, { FC } from 'react';
import { NativeSelectProps } from './types';

import { StyledNativeSelect } from './styled';

export const NativeSelect: FC<NativeSelectProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledNativeSelect
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledNativeSelect>
    );
});

NativeSelect.displayName = "NativeSelect";
