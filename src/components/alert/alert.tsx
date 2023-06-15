import React, {FC} from "react";
import {AlertProps} from "./types";
import {StyledAlert} from "./styled";

export const Alert: FC<AlertProps>  = React.forwardRef((props, ref) => {
    return (
        <StyledAlert
            {...props}
            ref={ref}
        />
    )
});
Alert.displayName = "Alert";