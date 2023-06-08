import {styled} from "@mui/material/styles";
import {ToggleButton as MuiToggleButton} from "@mui/material";
import {ToggleButtonProps} from "./types";

export const StyledToggleButton = styled(MuiToggleButton, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ToggleButtonProps>(({ theme }) => ({

}));