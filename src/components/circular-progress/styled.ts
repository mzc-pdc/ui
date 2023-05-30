
import {CircularProgress,  styled} from "@mui/material";
import {CircularProgressProps} from "./types";

export const StyledCircularProgress = styled(CircularProgress, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CircularProgressProps>(() => ({}))
