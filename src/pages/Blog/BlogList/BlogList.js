import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BlogList.module.scss'
import { BlogItem } from '~/pages/Blog/BlogList';

BlogList.propTypes = {
  dataBlogs: PropTypes.array.isRequired
};

const cx = classNames.bind(styles)
function BlogList({ dataBlogs }) {
  return (

    <div className={cx('blogs')}>
      {dataBlogs.map((data) => {

        return (

          <BlogItem
            
            className={cx('item')}
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            author={data.author}
            category={data.category}
            mediaUrl={data.url}
            viewers={data.viewers}
            readTime={data.readTime}
            published={data.published}

          />
        );
      })}
    </div>
  );
}

export default BlogList;