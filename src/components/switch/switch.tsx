import React, {FC} from "react";
import {SwitchProps} from "./types";
import {StyledSwitch} from "./styled";

export const Switch: FC<SwitchProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSwitch
            {...props}
            {...restProps}
        />
    )
}