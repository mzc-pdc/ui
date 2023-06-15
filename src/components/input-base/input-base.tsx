import React, {FC} from "react";
import {InputBaseProps} from "@mui/material";
import {StyledInputBase} from "./styled";

export const InputBase: FC<InputBaseProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledInputBase
            {...props}
            ref={ref}
        />
    )
});

InputBase.displayName = "InputBase";