import React, {FC} from "react";
import {FormControlProps} from "@mui/material";
import {StyledOutlinedInput} from "./styled";

export const OutlinedInput: FC<FormControlProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledOutlinedInput
            {...props}
            {...restProps}
        />
    )
}