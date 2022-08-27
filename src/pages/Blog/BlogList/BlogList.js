import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Image, OndemandVideo, PermMediaOutlined, FormatQuote, MusicVideo } from '@mui/icons-material';

import styles from './BlogList.module.scss';
import { BlogEmbedded, BlogSlides, BlogImage, BlogQuote, BlogContent, BlogType } from '~/pages/Blog/BlogItem';

BlogList.propTypes = {
    dataBlogs: PropTypes.array.isRequired,
    className: PropTypes.string,
};

const cx = classNames.bind(styles);
function BlogList({ dataBlogs, className }) {
    return (
        <div className={cx('blogs')}>
            {dataBlogs.map((data, index) => {
                switch (data.label) {
                    case 'video':
                        return (
                            <div key={index} className={cx('item', className)}>
                                <BlogEmbedded className={cx('embedded')} mediaUrl={data.url} />

                                <BlogContent
                                    hotBadge
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    author={data.author}
                                    category={data.category}
                                    viewers={data.viewers}
                                    readTime={data.readTime}
                                    published={data.published}
                                />

                                <BlogType className={cx('label-embedded')}>
                                    <OndemandVideo className={cx('label-icon')} />
                                </BlogType>
                            </div>
                        );
                    case 'music':
                        return (
                            <div key={index} className={cx('item', className)}>
                                <BlogEmbedded className={cx('embedded')} mediaUrl={data.url} />

                                <BlogContent
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    author={data.author}
                                    category={data.category}
                                    viewers={data.viewers}
                                    readTime={data.readTime}
                                    published={data.published}
                                />

                                <BlogType className={cx('label-music')}>
                                    <MusicVideo className={cx('label-icon')} />
                                </BlogType>
                            </div>
                        );
                    case 'images':
                        return (
                            <div key={index} className={cx('item', className)}>
                                <BlogSlides mediaUrl={data.url} title={data.title} className={cx('slides')} />

                                <BlogContent
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    author={data.author}
                                    category={data.category}
                                    viewers={data.viewers}
                                    readTime={data.readTime}
                                    published={data.published}
                                />

                                <BlogType className={cx('label-slides')}>
                                    <PermMediaOutlined className={cx('label-icon')} />
                                </BlogType>
                            </div>
                        );
                    case 'quote':
                        return (
                            <div key={index} className={cx('item', className)}>
                                <BlogQuote mediaUrl={data.url} />

                                <BlogContent
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    author={data.author}
                                    category={data.category}
                                    viewers={data.viewers}
                                    readTime={data.readTime}
                                    published={data.published}
                                />

                                <BlogType className={cx('label-quote')}>
                                    <FormatQuote className={cx('label-icon', 'icon-quote')} />
                                </BlogType>
                            </div>
                        );
                    case 'image':
                        return (
                            <div key={index} className={cx('item', className)}>
                                <BlogImage mediaUrl={data.url} title={data.title} />

                                <BlogContent
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    author={data.author}
                                    category={data.category}
                                    viewers={data.viewers}
                                    readTime={data.readTime}
                                    published={data.published}
                                />

                                <BlogType className={cx('label-image')}>
                                    <Image className={cx('label-icon')} />
                                </BlogType>
                            </div>
                        );
                    default:
                        console.log('Error Blog');
                        break;
                }
                // eslint-disable-next-line array-callback-return
                return;
            })}
        </div>
    );
}

export default BlogList;
