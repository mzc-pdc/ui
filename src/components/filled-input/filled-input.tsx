import React, {FC} from "react";
import {FilledInputProps} from "@mui/material";
import {StyledFilledInput} from "./styled";

export const FilledInput: FC<FilledInputProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFilledInput
            {...props}
            {...restProps}
        />
    )
}