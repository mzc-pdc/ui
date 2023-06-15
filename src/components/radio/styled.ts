
import {Radio, styled} from "@mui/material";

export const StyledRadio = styled(Radio, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
