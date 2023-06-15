import React, {FC} from "react";
import {ListItemTextProps} from "@mui/material";
import {StyledListItemText} from "./styled";

export const ListItemText: FC<ListItemTextProps> = React.forwardRef((props, ref) => {
    return (
        <StyledListItemText
            {...props}
            ref={ref}
        />
    )
});

ListItemText.displayName = "ListItemText";