import * as React from 'react';
import {FC} from 'react';
import {StyledCheckbox} from "./styled";
import {CheckboxProps} from "./types";


export const Checkbox: FC<CheckboxProps> = React.forwardRef((props, ref) => {
    return (
        <StyledCheckbox
            {...props}
            color={props.color}
            size={props.size}
            ref={ref}
        />
    )
});

Checkbox.displayName = "Checkbox";