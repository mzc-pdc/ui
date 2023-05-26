import React, {FC} from "react";
import {AlertProps} from "./types";
import {StyledAlert} from "./styled";

export const Alert: FC<AlertProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledAlert
            {...props}
            {...restProps}
        />
    )
}