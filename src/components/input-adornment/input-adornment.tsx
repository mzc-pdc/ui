import React, {FC} from "react";
import {InputAdornmentProps} from "@mui/material";
import {StyledInputAdornment} from "./styled";

export const InputAdornment: FC<InputAdornmentProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledInputAdornment
            {...props}
            {...restProps}
        />
    )
}