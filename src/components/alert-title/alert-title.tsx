import React, {FC} from "react";
import {AlertTitleProps} from "./types";
import {StyledAlertTitle} from "./styled";

export const AlertTitle: FC<AlertTitleProps>= React.forwardRef((props, ref) => {
    return (
        <StyledAlertTitle
            {...props}
            ref={ref}
        />
    )
});

AlertTitle.displayName = "AlertTitle";