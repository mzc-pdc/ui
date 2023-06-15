import React, {FC} from "react";
import {FormLabelProps} from "@mui/material";
import {StyledFormLabel} from "./styled";

export const FormLabel: FC<FormLabelProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledFormLabel
            {...props}
            ref={ref}
        />
    )
});

FormLabel.displayName = "FormLabel";