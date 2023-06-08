import React, {FC} from "react";
import {ToggleButtonProps} from "./types";
import {StyledToggleButton} from "./styled";

export const ToggleButton: FC<ToggleButtonProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledToggleButton
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledToggleButton>
    )
}