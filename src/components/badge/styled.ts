import {styled, Badge as MuiBadge} from '@mui/material';
import {BadgeProps} from "./types";

export const StyledBadge = styled(MuiBadge, {
    shouldForwardProp: prop => !['position'].includes(String(prop)),
})<BadgeProps>(({theme, position}) => ({
    ...(position === false && {
        position: `static`,
        '.MuiBadge-badge': {
            position: `static`,
            transform: `none`
        }
    })
}));