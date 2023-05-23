import React, {FC} from "react";
import {FormControlLabelProps} from "@mui/material";
import {StyledFormControlLabel} from "./styled";

export const FormControlLabel: FC<FormControlLabelProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormControlLabel
            {...props}
            {...restProps}
        />
    )
}