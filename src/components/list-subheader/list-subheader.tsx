import React, {FC} from "react";
import {ListSubheaderProps} from "@mui/material";
import {StyledListSubheader} from "./styled";

export const ListSubheader: FC<ListSubheaderProps> = props => {
    return (
        <StyledListSubheader
            {...props}
        />
    )
}