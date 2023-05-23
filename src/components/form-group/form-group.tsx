import React, {FC} from "react";
import {FormGroupProps} from "@mui/material";
import {StyledFormGroup} from "./styled";

export const FormGroup: FC<FormGroupProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormGroup
            {...props}
            {...restProps}
        />
    )
}