import React, {FC} from "react";
import {FormControlLabelProps} from "@mui/material";
import {StyledFormControlLabel} from "./styled";

export const FormControlLabel: FC<FormControlLabelProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledFormControlLabel
            {...props}
            ref={ref}
        />
    )
});

FormControlLabel.displayName = "FormControlLabel";