import { useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import Overlay from '~/components/Overlay';
import styles from './OverlayMenu.module.scss';

OverlayMenu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
const cx = classNames.bind(styles);

function OverlayMenu({ children, className }) {
    const [isActive, setIsActive] = useState(false);
    // THEME
    const context = useContext(ThemeContext);

    const handleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <div className={cx('wrapper', context.theme, className)}>
            {/* MENU ON TABLET & MOBILE */}
            <div className={cx('menu')} onClick={handleMenu}>
                <span className={cx('menu-icon', 'icon-top', isActive ? 'icon-top-click' : false)}></span>
                <span className={cx('menu-icon', 'icon-mid', isActive ? 'icon-mid-click' : false)}></span>
                <span className={cx('menu-icon', 'icon-bot', isActive ? 'icon-bot-click' : false)}></span>
            </div>

            {isActive && (
                <div className={cx('content')} onClick={handleMenu}>
                    <Overlay className={cx('overlay')} />

                    <div className={cx('options')}>{children}</div>
                </div>
            )}
        </div>
    );
}

export default OverlayMenu;
