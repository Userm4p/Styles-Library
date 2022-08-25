import React, { ElementType, MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styled";

export type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';

export type ComponentSize = 'default' | 'large' | 'small';

interface BaseButtonProps {
    type?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    children?: ReactNode;
    disable?: boolean;
    loading?: boolean;
    className?: string;
}

type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;

/*
    For React Router Link
*/

type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLAnchorProps & HTMLButtonProps & CustomNodeProps;


const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {

    const {
        type = 'default',
        icon,
        size = 'default',
        className = '',
        children,
        disable = false,
        loading = false,
        onClick,
        href,
        as,
        to
    } = props

    const styles = {
        innerType: type,
        size,
        disable,
        withText: children !== null,
    }

    const typeSelector = (ButtonType: ButtonType): string => {
        switch (ButtonType) {
            case 'default':
                return 'blue'
                break;
            case 'danger':
                return 'red'
                break;
            case 'ghost':
                return 'grey'
                break;
            case 'secondary':
                return 'green'
                break;
            default:
                return 'blue'
                break;
        }
    }

    const sizeSelector = (ButtonSize: ComponentSize) => {
        switch (ButtonSize) {
            case 'default':
                return '15px'
                break;
            case 'small':
                return '10px'
                break;
            case 'large':
                return '25px'
            default:
                return '15px'
                break;
        }
    }

    if (as) {
        return (
            <StyledButton
                style={{
                    "--backgroundColor": typeSelector(type),
                    padding: sizeSelector(size),
                } as React.CSSProperties}
                as={as}
                to={to}
                ref={ref as React.MutableRefObject<HTMLButtonElement>}
                className={className}
                {...styles}
            >
                {loading ? 'Loading...' : children}
            </StyledButton>
        )
    }

    if (href) {
        return (
            <StyledButton
                style={{
                    "--backgroundColor": typeSelector(type),
                    padding: sizeSelector(size),
                } as React.CSSProperties}
                as='a'
                href={href}
                className={className}
                {...styles}
            >
                {loading ? 'Loading...' : children}
            </StyledButton>
        )
    }

    return (
        <StyledButton
            style={{
                "--backgroundColor": typeSelector(type),
                padding: sizeSelector(size),
            } as React.CSSProperties}
            as='button'
            type='button'
            onClick={onClick}
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            className={className}
            {...styles}
        >
            {loading ? 'Loading...' : children}
        </StyledButton>
    )

}

export default React.forwardRef<unknown, ButtonProps>(Button);