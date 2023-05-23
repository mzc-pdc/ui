import React, {FC} from "react";
import {FormHelperTextProps} from "@mui/material";
import {StyledFormHelperText} from "./styled";

export const FormHelperText: FC<FormHelperTextProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormHelperText
            {...props}
            {...restProps}
        />
    )
}