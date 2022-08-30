import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Overlay.module.scss';

Overlay.propTypes = {
    className: PropTypes.string,
};

function Overlay({ className }) {
    const cx = classNames.bind(styles);

    return <div className={cx('overlay', className)}></div>;
}

export default Overlay;
