import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogItem.module.scss';
import { FormatQuote } from '@mui/icons-material';

BlogQuote.propTypes = {};

function BlogQuote(mediaUrl) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('quote')}>
            <div className={cx('quote-content')}>
                <p className={cx('quote-title')}>{mediaUrl.mediaUrl}</p>

                <span className={cx('quote-author')}>Huan Roses</span>
            </div>

            <FormatQuote className={cx('quote-icon')} />
        </div>
    );
}

export default BlogQuote;
