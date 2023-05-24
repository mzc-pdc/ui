import * as React from 'react';
import {FC} from 'react';
import {StyledSelect} from "./styled";
import {SelectProps} from './types';

export const Select: FC<SelectProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSelect
            {...props}
            {...restProps}
        />
    )
}