import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './AvtImg.module.scss';
import img from '~/assets/img';

const cx = classNames.bind(styles);
const AvtImg = ({ src = img.noImage, alt = 'No Image' }) => {
    return (
        <div className={cx('avt-blur')}>
            <img src={src} alt={alt} />

            <div className={cx('avt-main')}>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

AvtImg.propTypes = {
    src: PropTypes.node,
    alt: PropTypes.string,
};
export default AvtImg;
