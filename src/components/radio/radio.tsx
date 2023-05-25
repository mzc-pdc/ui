import * as React from 'react';
import {FC} from 'react';
import {StyledRadio, StyledRadioProps} from "./styled";

export const Radio: FC<StyledRadioProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledRadio
            {...props}
            {...restProps}
        />
    )
}