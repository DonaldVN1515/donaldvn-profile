import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';

import styles from './BlogItem.module.scss';

BlogEmbedded.propTypes = {
    mediaUrl: PropTypes.string,
    className: PropTypes.string,
};

function BlogEmbedded({ mediaUrl, className }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <ReactPlayer
                // height="unset"
                width="100%"
                url={mediaUrl}
                controls
                className={cx('embedded', className)}
            />
        </div>
    );

    // <video src={mediaUrl} id='video' controls className={cx('video')} />
}

export default BlogEmbedded;
