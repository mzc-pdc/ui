import { Chip, styled } from '@mui/material';
import {ChipProps} from "./types";

export const StyledChip = styled(Chip, {
    shouldForwardProp: prop => ![ 'rounded'].includes(String(prop)),
})<ChipProps>(({ theme, rounded }) => ({
    ...(rounded && {
        borderRadius: `3px`
    })
}));
