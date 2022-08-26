import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BlogList.module.scss';
import { BlogEmbedded, BlogImages, BlogQuote, BlogContent } from '~/pages/Blog/BlogItem';

BlogList.propTypes = {
    dataBlogs: PropTypes.array.isRequired,
    className: PropTypes.string,
};

const cx = classNames.bind(styles);
function BlogList({ dataBlogs, className }) {
    return (
        <div className={cx('blogs')}>
            {dataBlogs.map((data, index) => {
                if (data.label === 'youtube' || data.label === 'soundcloud') {
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
                        </div>
                    );
                } else if (data.label === 'images') {
                    return (
                        <div key={index} className={cx('item', className)}>
                            <BlogImages mediaUrl={data.url} title={data.title} className={cx('slides')} />

                            <BlogContent
                                title={data.title}
                                subtitle={data.subtitle}
                                author={data.author}
                                category={data.category}
                                viewers={data.viewers}
                                readTime={data.readTime}
                                published={data.published}
                            />
                        </div>
                    );
                } else if (data.label === 'quote') {
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
                        </div>
                    );
                } else if (data.label === 'image') {
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
                        </div>
                    );
                }
                // eslint-disable-next-line array-callback-return
                return;
            })}
        </div>
    );
}

export default BlogList;
