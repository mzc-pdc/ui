
import {TextField, styled, BaseTextFieldProps} from "@mui/material";

export interface StyledTextFieldProps extends BaseTextFieldProps {
}

export const StyledTextField = styled(TextField, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
