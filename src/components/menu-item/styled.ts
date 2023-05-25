import {styled} from "@mui/material/styles";
import {MenuItem as MuiMenuItem} from "@mui/material";
import {MenuItemProps} from "./types";


const sizeMixIn = ({theme, size}: any) => ({
    ...(size === 'small' && {
        [theme.breakpoints.up('sm')]: {
            minHeight: `2rem`
        },
    }),
    ...(size === 'medium' && {
        [theme.breakpoints.up('sm')]: {
            minHeight: `2.5rem`
        },
    })
})
export const StyledMenuItem = styled(MuiMenuItem, {
    shouldForwardProp: prop => !['size'].includes(String(prop)),
})<MenuItemProps>(({theme, size}) => ({
    [theme.breakpoints.up('sm')]: {
        minHeight: `2rem`
    },
    ...(size && sizeMixIn({theme, size})),
    '&:has(input[type="checkbox"])': {
        paddingTop: `0.188rem`,
        paddingBottom: `0.188rem`,
        paddingLeft: `0.5rem`
    }
}));