import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './OverlayMenu.module.scss';

OverlayMenuItem.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    to: PropTypes.string,
};
const cx = classNames.bind(styles);

function OverlayMenuItem({ icon, title, to }) {
    return (
        <NavLink className={(nav) => cx('option', { active: nav.isActive })} to={to}>
            {icon}
            <h3>{title}</h3>
        </NavLink>
    );
}

export default OverlayMenuItem;
