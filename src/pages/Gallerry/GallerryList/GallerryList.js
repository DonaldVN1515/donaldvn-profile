import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './GallerryList.module.scss';
import { GallerryItem } from '~/pages/Gallerry/GallerryList';

GallerryList.propTypes = {
    dataImgs: PropTypes.array.isRequired,
};

function GallerryList({ dataImgs }) {
    const cx = classNames.bind(styles);
    return (
        <ul className={cx('collections')}>
            {dataImgs.map((data) => (
                <GallerryItem key={data.id} title={data.title} img={data.imgUrl} />
            ))}
        </ul>
    );
}

export default GallerryList;
