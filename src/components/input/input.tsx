import React, {FC} from "react";
import {InputProps} from "@mui/material";
import {StyledInput} from "./styled";

export const Input: FC<InputProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledInput
            {...props}
            {...restProps}
        />
    )
}