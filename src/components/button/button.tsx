import React, {FC} from 'react';
import {StyledButton, Children, Spinner} from './styled';
import {ButtonProps} from './types';
export const Button: FC<ButtonProps> = React.forwardRef((props, ref) => {

    return (
        <StyledButton
            {...props}
            ref={ref}
        >
            <Children>{props.children}</Children>
            {props.loading && (
                <Spinner
                    size={props.size === 'small' ? 16 : props.size === 'medium' ? 20 : 24}
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
        </StyledButton>
    )
});

Button.displayName = "Button";
