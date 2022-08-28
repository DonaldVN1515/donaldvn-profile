import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { AccessTime, EventAvailable, FolderOpen, PersonOutline, Visibility } from '@mui/icons-material';

import Button from '~/components/Buttton';
import styles from './BlogItem.module.scss';
import { convertUrl } from '~/components/Functions';

BlogContent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    viewers: PropTypes.number.isRequired,
    published: PropTypes.string.isRequired,
    hotBadge: PropTypes.bool,
    bestPriceBadge: PropTypes.bool,
    bestSellerBadge: PropTypes.bool,
    trendingBadge: PropTypes.bool,
    featureBadge: PropTypes.bool,
};

function BlogContent({
    title,
    subtitle,
    className,
    category,
    author,
    hotBadge = false,
    bestPriceBadge = false,
    bestSellerBadge = false,
    trendingBadge = false,
    featureBadge = false,
    readTime = '00:00',
    viewers = '0',
    published = 'dd/mm/yyyy',
}) {
    const cx = classNames.bind(styles);

    const url = convertUrl(title);

    const classes = cx('content', {
        [className]: className,
        hotBadge,
        bestPriceBadge,
        bestSellerBadge,
        trendingBadge,
        featureBadge,
    });
    return (
        <div className={classes}>
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
    );
}

export default BlogContent;
