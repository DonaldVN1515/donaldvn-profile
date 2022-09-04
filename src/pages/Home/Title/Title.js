import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Title.module.scss';

Title.propTypes = {
    title: PropTypes.string.isRequired,
    sub: PropTypes.string,
    className: PropTypes.string,
};
const cx = classNames.bind(styles);

function Title({ title, sub, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <h4>{title}</h4>
            <p>{sub}</p>
        </div>
    );
}

export default Title;
