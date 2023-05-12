
import {Chip, ChipProps, styled} from "@mui/material";

export interface StyledChipProps extends ChipProps {
}

export const StyledChip = styled(Chip, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
