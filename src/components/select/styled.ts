import {Select, styled} from "@mui/material";
import {SelectProps} from './types';

export const StyledSelect = styled(Select, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<SelectProps>(() => ({}))
