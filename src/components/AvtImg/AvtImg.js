import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './AvtImg.module.scss';
import img from '~/assets/img';

const cx = classNames.bind(styles);
const AvtImg = ({ src = img.noImage, alt = 'No Image', cover = false }) => {
    const classes = cx({
        cover,
    });
    return (
        <div className={cx('avt-blur')}>
            <img src={src} alt={alt} />

            <div className={cx('avt-main')}>
                <img src={src} alt={alt} className={classes} />
            </div>
        </div>
    );
};

AvtImg.propTypes = {
    src: PropTypes.node,
    alt: PropTypes.string,
    cover: PropTypes.bool,
};
export default AvtImg;
