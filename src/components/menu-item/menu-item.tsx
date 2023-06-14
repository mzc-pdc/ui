import React, {FC} from "react";
import {MenuItemProps} from "./types";
import {StyledMenuItem} from "./styled";

// eslint-disable-next-line react/display-name
export const MenuItem: FC<MenuItemProps> = React.forwardRef((props, ref) => {
    return (
        <StyledMenuItem
            {...props}
            ref={ref}
        />
    )
})