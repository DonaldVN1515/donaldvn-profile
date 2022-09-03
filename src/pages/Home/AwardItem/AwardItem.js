import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AwardItem.module.scss';
import Image from '~/components/Image';

AwardItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
const cx = classNames.bind(styles);

function AwardItem({ src, alt, title, time }) {
    return (
        <li className={cx('wrapper')}>
            <Image src={src} alt={alt}  className={cx('image')} />
            {/* <div className={cx('infor')}>
                <h6>{title}</h6>
                <p>{time}</p>
            </div> */}
        </li>
    );
}

export default AwardItem;
