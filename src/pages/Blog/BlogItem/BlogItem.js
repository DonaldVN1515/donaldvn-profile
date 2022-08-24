import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import videos from '~/assets/video';

import styles from './BlogItem.module.scss';
import Button from '~/components/Buttton';
import { AccessTime, EventAvailable, FolderOpen, PersonOutline, Visibility } from '@mui/icons-material';

const cx = classNames.bind(styles);

const BlogItem = ({
    to,
    title,
    subtitle,
    className,
    blog = 'Blog',
    author = 'DonaldVN',
    readTime = '0',
    viewers = '0',
    large = false,
    video = videos.video,
    published = 'dd/mm/yyyy',
}) => {
    const classes = cx('wapper', {
        [className]: className,
        large,
    });
    return (
        <div className={classes}>
            <video src={video} controls className={cx('video')} />

            <div className={cx('content')}>
                <Button text className={cx('title')}>
                    {title}
                </Button>
                <div className={cx('infor')}>
                    <span>
                        <PersonOutline className={cx('icon')} />
                        <h6>{author}</h6>
                    </span>
                    <span>
                        <FolderOpen className={cx('icon')} />
                        <h6>{blog}</h6>
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
                <Button to={to} className={cx('read-more')}>
                    Read more: {title}
                </Button>
            </div>
        </div>
    );
};
BlogItem.propTypes = {};
export default BlogItem;
