import React, {FC} from "react";
import {ToggleButtonGroupProps} from "./types";
import {StyledToggleButtonGroup} from "./styled";

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledToggleButtonGroup
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledToggleButtonGroup>
    )
}