import * as React from 'react';
import {FC} from 'react';
import {StyledLinearProgress} from "./styled";
import {LinearProgressProps} from "./types";


export const LinearProgress: FC<LinearProgressProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledLinearProgress
            {...props}
            ref={ref}
        />
    )
});

LinearProgress.displayName = "LinearProgress";