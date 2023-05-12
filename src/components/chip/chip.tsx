import * as React from 'react';
import {FC} from 'react';
import {StyledChip, StyledChipProps} from "./styled";

export const Chip: FC<StyledChipProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledChip
            {...props}
            {...restProps}
        />
    )
}