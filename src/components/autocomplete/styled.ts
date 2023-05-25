
import {Autocomplete, styled} from "@mui/material";

export const StyledAutocomplete = styled(Autocomplete, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
