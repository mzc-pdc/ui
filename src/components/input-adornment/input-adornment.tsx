import React, {FC} from "react";
import {InputAdornmentProps} from "@mui/material";
import {StyledInputAdornment} from "./styled";

export const InputAdornment: FC<InputAdornmentProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledInputAdornment
            {...props}
            ref={ref}
        />
    )
});

InputAdornment.displayName = "InputAdornment";