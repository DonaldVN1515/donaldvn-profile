import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CircularProgressItem.module.scss';

CircularProgress.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

const cx = classNames.bind(styles);
function CircularProgress({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default CircularProgress;
