import React, {FC} from "react";
import {MenuItemProps} from "./types";
import {StyledMenuItem} from "./styled";

export const MenuItem: FC<MenuItemProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledMenuItem
            {...props}
            {...restProps}
        />
    )
}