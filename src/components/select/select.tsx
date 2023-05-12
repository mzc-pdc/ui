import * as React from 'react';
import {FC} from 'react';
import {StyledSelect, StyledSelectProps} from "./styled";

export const Select: FC<StyledSelectProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSelect
            {...props}
            {...restProps}
        />
    )
}