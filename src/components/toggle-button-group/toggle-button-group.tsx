import React, {FC} from "react";
import {ToggleButtonGroupProps} from "./types";
import {StyledToggleButtonGroup} from "./styled";

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledToggleButtonGroup
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledToggleButtonGroup>
    )
});

ToggleButtonGroup.displayName = "ToggleButtonGroup";