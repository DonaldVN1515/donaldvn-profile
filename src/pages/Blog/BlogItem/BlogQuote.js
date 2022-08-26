import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogItem.module.scss';

BlogQuote.propTypes = {};

function BlogQuote(mediaUrl) {
    const cx = classNames.bind(styles);
    return <div className={cx('quote')}></div>;
}

export default BlogQuote;
