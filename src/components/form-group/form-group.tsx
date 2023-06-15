import React, {FC} from "react";
import {FormGroupProps} from "@mui/material";
import {StyledFormGroup} from "./styled";

export const FormGroup: FC<FormGroupProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledFormGroup
            {...props}
            ref={ref}
        />
    )
});

FormGroup.displayName = "FormGroup";