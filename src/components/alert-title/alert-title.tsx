import React, {FC} from "react";
import {AlertTitleProps} from "./types";
import {StyledAlertTitle} from "./styled";

export const AlertTitle: FC<AlertTitleProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledAlertTitle
            {...props}
            {...restProps}
        />
    )
}