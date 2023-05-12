
import {Switch, SwitchProps, styled} from "@mui/material";

export interface StyledSwitchProps extends SwitchProps {
}

export const StyledSwitch = styled(Switch, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
