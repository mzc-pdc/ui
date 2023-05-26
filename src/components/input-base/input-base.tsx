import React, {FC} from "react";
import {InputBaseProps} from "@mui/material";
import {StyledInputBase} from "./styled";

export const InputBase: FC<InputBaseProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledInputBase
            {...props}
            {...restProps}
        />
    )
}