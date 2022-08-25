import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './GallerryItem.module.scss';
import imgUrl from '~/assets/img';
import Button from '~/components/Buttton';
import { convertUrl } from '~/components/Functions';

const cx = classNames.bind(styles);

const GallerryItem = ({ title, img = imgUrl.noImgae, href }) => {
    const url = convertUrl(title);

    return (
        <li className={cx('item')}>
            <div className={cx('description')}>
                <span className={cx('more')}>view more:</span>
                <Button text to={`/gallerry/${url}`} href={href} className={cx('title')}>
                    {title}
                </Button>
            </div>
            <div className={cx('shadow')}></div>
            <img className={cx('img')} src={img} alt={title} />
        </li>
    );
};
GallerryItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
};
export default GallerryItem;
