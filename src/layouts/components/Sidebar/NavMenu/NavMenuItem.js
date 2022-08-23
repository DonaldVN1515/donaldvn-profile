import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { NavLink } from 'react-router-dom';
import React from 'react';

import styles from './NavMenu.module.scss';
import { Wrapper } from '~/components/Wrapper';

const cx = classNames.bind(styles);
const NavMenuItem = ({ to, title, icon }) => {
    const renderSubMenu = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <Wrapper>
                    <span className={cx('sub-title')}>{`My ${title}`} </span>
                </Wrapper>
            </div>
        );
    };
    return (
        <div className={cx('item')}>
            <Tippy interactive delay={[100, 0]} offset={[0, 10]} placement="right" render={renderSubMenu}>
                <NavLink className={(nav) => cx('option', { active: nav.isActive })} to={to}>
                    {icon}
                    <span>{title}</span>
                </NavLink>
            </Tippy>
        </div>
    );
};
NavMenuItem.propTypes = {
    to: PropTypes.node,
    title: PropTypes.string,
    icon: PropTypes.node,
};
export default NavMenuItem;
