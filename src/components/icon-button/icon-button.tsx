import React, {FC} from 'react';
import {StyledIconButton, Spinner} from './styled';
import {IconButtonProps} from './types';

// eslint-disable-next-line react/display-name
export const IconButton: FC<IconButtonProps> = React.forwardRef((props,  ref) => {

    return (
        <StyledIconButton
            {...props}
            ref={ref}
        >
            {props.children}
            {props.loading && (
                <Spinner
                    size={props.size === 'xsmall' ? 10 : props.size === 'small' ? 16 : props.size === 'medium' ? 20 : 24}
                    color={
                        props.color
                            ? props.variant === 'contained'
                                ? 'inherit'
                                : props.color === 'inherit'
                                    ? 'secondary'
                                    : props.color
                            : `inherit`
                    }
                />
            )}
        </StyledIconButton>
    )
});
