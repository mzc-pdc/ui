import * as React from 'react';
import {FC} from 'react';
import {StyledSwitch, StyledSwitchProps} from "./styled";

export const Switch: FC<StyledSwitchProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSwitch
            {...props}
            color={props.color}
            {...restProps}
        />
    )
}