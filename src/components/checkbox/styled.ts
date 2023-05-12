
import {Checkbox, CheckboxProps, styled} from "@mui/material";

export interface StyledCheckboxProps extends CheckboxProps {
}

export const StyledCheckbox = styled(Checkbox, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
