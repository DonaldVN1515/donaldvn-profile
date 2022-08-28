import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './GallerryList.module.scss';
import { GallerryItem } from '~/pages/Gallerry/GallerryList';

GallerryList.propTypes = {
    dataGallery: PropTypes.array.isRequired,
};

function GallerryList({ dataGallery }) {
    const cx = classNames.bind(styles);

    return (
        <ul className={cx('collections')}>
            {dataGallery.map((data, index) => (
                <GallerryItem key={index} title={data.title} img={data.imgUrl} />
            ))}
        </ul>
    );
}

export default GallerryList;
