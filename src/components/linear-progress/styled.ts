
import {LinearProgress,  styled} from "@mui/material";
import {LinearProgressProps} from "./types";

export const StyledLinearProgress = styled(LinearProgress, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<LinearProgressProps>(() => ({}))
