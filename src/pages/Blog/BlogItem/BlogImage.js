import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BlogItem.module.scss';

BlogImage.propTypes = { mediaUrl: PropTypes.string.isRequired, title: PropTypes.string };

function BlogImage(mediaUrl, title) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('image')}>
            <img src={mediaUrl.mediaUrl} alt={mediaUrl.title} />
        </div>
    );
}

export default BlogImage;
