import React, {FC} from "react";
import {FormLabelProps} from "@mui/material";
import {StyledFormLabel} from "./styled";

export const FormLabel: FC<FormLabelProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormLabel
            {...props}
            {...restProps}
        />
    )
}