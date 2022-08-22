import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);
const NavMenu = ({ children, className }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

NavMenu.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default NavMenu;
