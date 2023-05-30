import * as React from 'react';
import {FC} from 'react';
import {StyledLinearProgress} from "./styled";
import {LinearProgressProps} from "./types";


export const LinearProgress: FC<LinearProgressProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledLinearProgress
            {...props}
            {...restProps}
        />
    )
}