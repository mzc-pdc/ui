import React, {FC} from "react";
import {FormControlProps} from "@mui/material";
import {StyledFormControl} from "./styled";

export const FormControl: FC<FormControlProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormControl
            {...props}
            {...restProps}
        />
    )
}