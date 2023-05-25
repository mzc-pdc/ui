
import {Radio, RadioProps, styled} from "@mui/material";

export interface StyledRadioProps extends RadioProps {
}

export const StyledRadio = styled(Radio, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
