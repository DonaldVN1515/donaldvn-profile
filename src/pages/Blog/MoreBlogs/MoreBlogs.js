import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Article } from '@mui/icons-material';

import styles from './MoreBlogs.module.scss';
import Button from '~/components/Buttton';
import { convertUrl } from '~/components/Functions';

MoreBlogs.propTypes = {
    moreBlogs: PropTypes.array.isRequired,
    indexOfLastBlog: PropTypes.number,
    indexOfFirstBlog: PropTypes.number,
};

function MoreBlogs({ moreBlogs, indexOfLastBlog, indexOfFirstBlog }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('more')}>
            <div className={cx('title')}>
                <Article className={cx('icon')} />
                <h4>More Articles ...</h4>
            </div>

            <ul className={cx('blogs')}>
                {moreBlogs.map((data, index) => {
                    const url = convertUrl(data.title);

                    if (data.id > indexOfLastBlog || data.id < indexOfFirstBlog) {
                        return (
                            <li key={index} className={cx('blog')}>
                                <Button to={`/blog/${url}`} text className={cx('link')}>
                                    {data.title}
                                </Button>
                            </li>
                        );
                    }
                    // eslint-disable-next-line array-callback-return
                    return;
                })}
            </ul>
        </div>
    );
}

export default MoreBlogs;
