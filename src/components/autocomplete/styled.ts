
import {Autocomplete, AutocompleteProps, styled} from "@mui/material";

export interface StyledAutoCompleteProps extends AutocompleteProps<string, boolean, boolean, boolean, any> {
}

export const StyledAutocomplete = styled(Autocomplete, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})(() => ({}))
