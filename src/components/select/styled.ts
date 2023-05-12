
import {Select, SelectProps, styled} from "@mui/material";

export interface StyledSelectProps extends SelectProps {
}

export const StyledSelect = styled(Select, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
