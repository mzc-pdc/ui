import React, {FC} from "react";
import {ListItemTextProps} from "@mui/material";
import {StyledListItemText} from "./styled";

export const ListItemText: FC<ListItemTextProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledListItemText
            {...props}
            {...restProps}
        />
    )
}