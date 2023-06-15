import React, {FC} from "react";
import {InputLabelProps} from "@mui/material";
import {StyledInputLabel} from "./styled";

export const InputLabel: FC<InputLabelProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledInputLabel
            {...props}
            ref={ref}
        />
    )
});

InputLabel.displayName = "InputLabel";