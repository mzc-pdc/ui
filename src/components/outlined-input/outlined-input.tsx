import React, {FC} from "react";
import {OutlinedInputProps} from "@mui/material";
import {StyledOutlinedInput} from "./styled";

export const OutlinedInput: FC<OutlinedInputProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledOutlinedInput
            {...props}
            {...restProps}
        />
    )
}