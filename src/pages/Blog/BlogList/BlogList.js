import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Image, OndemandVideo, PermMediaOutlined, FormatQuote, MusicVideo } from '@mui/icons-material';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './BlogList.module.scss';
import { BlogEmbedded, BlogSlides, BlogImage, BlogQuote, BlogContent, BlogType } from '~/pages/Blog/BlogItem';

BlogList.propTypes = {
    dataBlogs: PropTypes.array.isRequired,
    className: PropTypes.string,
};

const cx = classNames.bind(styles);
function BlogList({ dataBlogs, className }) {
    // THEME
    const context = useContext(ThemeContext);

    // console.log(context.theme);
    const classes = cx('item', {
        [className]: className,
        [context.theme]: context.theme,
    });

    return (
        <div className={cx('blogs')}>
            {dataBlogs.map((data, index) => {
                switch (data.label) {
                    case 'video':
                        return (
                            <div key={index} className={classes}>
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

                                <BlogType className={cx('label-embedded')}>
                                    <OndemandVideo className={cx('label-icon')} />
                                </BlogType>
                            </div>
                        );
                    case 'music':
                        return (
                            <div key={index} className={classes}>
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
                    case 'slides':
                        return (
                            <div key={index} className={classes}>
                                <BlogSlides mediaUrl={data.url} title={data.title} />

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
                            <div key={index} className={classes}>
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
                            <div key={index} className={classes}>
                                <BlogImage mediaUrl={data.url} title={data.title} className={cx('image')} />

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
