import * as React from 'react';
import {FC} from 'react';
import {StyledCheckbox} from "./styled";
import {CheckboxProps} from "./types";


export const Checkbox: FC<CheckboxProps> = (props,{
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