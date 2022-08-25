import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { AccessTime, EventAvailable, FolderOpen, PersonOutline, Visibility } from '@mui/icons-material';

import videos from '~/assets/video';
import Button from '~/components/Buttton';
import styles from './BlogItem.module.scss';
import { convertUrl } from '~/components/Functions';

const cx = classNames.bind(styles);

const BlogItem = ({
    title,
    subtitle,
    className,
    category,
    author,
    readTime = '00:00',
    viewers = '0',
    mediaUrl = videos.video,
    published = 'dd/mm/yyyy',
}) => {
    const url = convertUrl(title);

    return (
        <div className={cx('item', className)}>
            <video src={mediaUrl} controls className={cx('video')} />

            <div className={cx('content')}>
                <Button to={`/blog/${url}`} text className={cx('title')}>
                    {title}
                </Button>
                <div className={cx('infor')}>
                    <span>
                        <PersonOutline className={cx('icon')} />
                        <h6>{author}</h6>
                    </span>
                    <span>
                        <FolderOpen className={cx('icon')} />
                        <h6>{category}</h6>
                    </span>
                    <span>
                        <EventAvailable className={cx('icon')} />
                        <h6>Published: {published}</h6>
                    </span>
                    <span>
                        <AccessTime className={cx('icon')} />
                        <h6>Read Time: {readTime}</h6>
                    </span>
                    <span>
                        <Visibility className={cx('icon')} />
                        <h6>Viewers: {viewers}</h6>
                    </span>
                </div>
                <p className={cx('subtitle')}>{subtitle}</p>
                <Button to={`/blog/${url}`} className={cx('read-more')}>
                    Read more: {title}
                </Button>
            </div>
        </div>
    );
};
BlogItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    viewers: PropTypes.number.isRequired,
    mediaUrl: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
};
export default BlogItem;
