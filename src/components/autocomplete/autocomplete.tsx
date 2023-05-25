import * as React from 'react';
import {FC} from 'react';
import {StyledAutocomplete, StyledAutoCompleteProps} from "./styled";

export const Autocomplete: FC<StyledAutoCompleteProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledAutocomplete
            {...props}
            {...restProps}
        />
    )
}