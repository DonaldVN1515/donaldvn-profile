import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
    children,
    className,
    onClick,
    to,
    href,
    leftIcon,
    rightIcon,
    outline = false,
    text = false,
    primary = false,
    ...passProps
}) => {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wapper', {
        [className]: className,
        outline,
        text,
        primary,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
