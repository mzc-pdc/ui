import React, {FC} from "react";
import {ToggleButtonProps} from "./types";
import {StyledToggleButton} from "./styled";

export const ToggleButton: FC<ToggleButtonProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledToggleButton
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledToggleButton>
    )
});

ToggleButton.displayName = "ToggleButton";