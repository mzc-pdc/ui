import React, {FC} from "react";
import {FormHelperTextProps} from "@mui/material";
import {StyledFormHelperText} from "./styled";

export const FormHelperText: FC<FormHelperTextProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledFormHelperText
            {...props}
            ref={ref}
        />
    )
});

FormHelperText.displayName = "FormHelperText";