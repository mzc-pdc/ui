import React, {FC} from "react";
import {ListSubheaderProps} from "@mui/material";
import {StyledListSubheader} from "./styled";

export const ListSubheader: FC<ListSubheaderProps> = React.forwardRef((props, ref) => {
    return (
        <StyledListSubheader
            {...props}
            ref={ref}
        />
    )
});

ListSubheader.displayName = "ListSubheader";