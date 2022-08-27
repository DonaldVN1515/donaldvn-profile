import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './BlogItem.module.scss';

BlogLabel.propTypes = { children: PropTypes.node.isRequired, className: PropTypes.string };

function BlogLabel({ children, className }) {
    const cx = classNames.bind(styles);

    // console.log(icon);
    return (
        <label className={cx('label', className)}>
            <span className={cx('label-content')}>{children} </span>
        </label>
    );
}

export default BlogLabel;
