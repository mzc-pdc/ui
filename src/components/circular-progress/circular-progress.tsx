import * as React from 'react';
import {FC} from 'react';
import {StyledCircularProgress} from "./styled";
import {CircularProgressProps} from "./types";


export const CircularProgress: FC<CircularProgressProps> = React.forwardRef((props, ref) => {
    return (
        <StyledCircularProgress
            {...props}
            ref={ref}
        />
    )
});

CircularProgress.displayName = "CircularProgress";