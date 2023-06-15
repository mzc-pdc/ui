import * as React from 'react';
import {FC} from 'react';
import {StyledRadio} from "./styled";
import {RadioProps} from "./types";

export const Radio: FC<RadioProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledRadio
            {...props}
            ref={ref}
        />
    )
});

Radio.displayName = "Radio";