
import {Checkbox,  styled} from "@mui/material";
import {CheckboxProps} from "./types";

export const StyledCheckbox = styled(Checkbox, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CheckboxProps>(() => ({}))
