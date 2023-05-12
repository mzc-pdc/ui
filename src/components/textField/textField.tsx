import * as React from 'react';
import {FC} from 'react';
import {StyledTextField, StyledTextFieldProps} from "./styled";

export const TextField: FC<StyledTextFieldProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledTextField
            {...props}
            {...restProps}
        />
    )
}