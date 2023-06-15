import React, {FC} from "react";
import {InputProps} from "@mui/material";
import {StyledInput} from "./styled";

export const Input: FC<InputProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledInput
            {...props}
            ref={ref}
        />
    )

});

Input.displayName = "Input";