import React, {FC} from "react";
import {ListItemSecondaryActionProps} from "@mui/material";
import {StyledListItemSecondaryAction} from "./styled";

export const ListItemSecondaryAction: FC<ListItemSecondaryActionProps> = React.forwardRef((props, ref) => {
    return (
        <StyledListItemSecondaryAction
            {...props}
            ref={ref}
        />
    )
});

ListItemSecondaryAction.displayName = "ListItemSecondaryAction";