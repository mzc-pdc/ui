import React, {FC} from "react";
import {SwitchProps} from "./types";
import {StyledSwitch} from "./styled";

export const Switch: FC<SwitchProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSwitch
            {...props}
            ref={ref}
        />
    )
});

Switch.displayName = "Switch";