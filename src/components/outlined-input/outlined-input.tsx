import React, {FC} from "react";
import {OutlinedInputProps} from "@mui/material";
import {StyledOutlinedInput} from "./styled";

export const OutlinedInput: FC<OutlinedInputProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledOutlinedInput
            {...props}
            ref={ref}
        />
    )
});

OutlinedInput.displayName = "OutlinedInput";