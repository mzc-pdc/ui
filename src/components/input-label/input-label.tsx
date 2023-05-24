import React, {FC} from "react";
import {InputLabelProps} from "@mui/material";
import {StyledInputLabel} from "./styled";

export const InputLabel: FC<InputLabelProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledInputLabel
            {...props}
            {...restProps}
        />
    )
}