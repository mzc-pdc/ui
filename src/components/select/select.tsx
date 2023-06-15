import * as React from 'react';
import {FC} from 'react';
import {StyledSelect} from "./styled";
import {SelectProps} from './types';

export const Select: FC<SelectProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSelect
            {...props}
            ref={ref}
        />
    )
});

Select.displayName = "Select";