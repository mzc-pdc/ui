import React, {FC} from "react";
import {ListItemProps} from "@mui/material";
import {StyledListItem} from "./styled";

export const ListItem: FC<ListItemProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledListItem
            {...props}
            {...restProps}
        />
    )
}