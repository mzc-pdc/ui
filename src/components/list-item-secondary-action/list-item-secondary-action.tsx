import React, {FC} from "react";
import {ListItemSecondaryActionProps} from "@mui/material";
import {StyledListItemSecondaryAction} from "./styled";

export const ListItemSecondaryAction: FC<ListItemSecondaryActionProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledListItemSecondaryAction
            {...props}
            {...restProps}
        />
    )
}