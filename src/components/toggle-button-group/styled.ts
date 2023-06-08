import {styled} from "@mui/material/styles";
import { ToggleButtonGroup as MuiToggleButtonGroup} from "@mui/material";
import {ToggleButtonGroupProps} from "./types";

export const StyledToggleButtonGroup = styled(MuiToggleButtonGroup, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ToggleButtonGroupProps>(({ theme }) => ({

}));