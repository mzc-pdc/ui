import React, {FC} from "react";
import {FormControlProps} from "@mui/material";
import {StyledFilledInput} from "./styled";

export const FilledInput: FC<FormControlProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFilledInput
            {...props}
            {...restProps}
        />
    )
}