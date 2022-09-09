import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './BlogItem.module.scss';
import Image from '~/components/Image';

BlogImage.propTypes = { mediaUrl: PropTypes.string.isRequired, title: PropTypes.string };

function BlogImage({ mediaUrl, title, className }) {
    const cx = classNames.bind(styles);
    // THEME
    const context = useContext(ThemeContext);

    return <Image className={cx('image', context.theme, className)} src={mediaUrl} alt={title} />;
}

export default BlogImage;
