import * as React from 'react';
import {FC} from 'react';
import {StyledCircularProgress} from "./styled";
import {CircularProgressProps} from "./types";


export const CircularProgress: FC<CircularProgressProps> = (props,{
    ...restProps
}) => {
    return (
        <StyledCircularProgress
            {...props}
            {...restProps}
        />
    )
}