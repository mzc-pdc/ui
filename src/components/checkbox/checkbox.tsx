import * as React from 'react';
import {FC} from 'react';
import {StyledCheckbox, StyledCheckboxProps} from "./styled";

export const Checkbox: FC<StyledCheckboxProps> = (props,{
    ...restProps
}) => {
    return (
        <StyledCheckbox
            {...props}
            color={props.color}
            size={props.size}
            {...restProps}
        />
    )
}