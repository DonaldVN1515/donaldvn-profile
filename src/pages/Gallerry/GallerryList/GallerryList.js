import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './GallerryList.module.scss';
import { GallerryItem } from '~/pages/Gallerry/GallerryList';

GallerryList.propTypes = {
    dataGallery: PropTypes.array.isRequired,
};

const cx = classNames.bind(styles);
function GallerryList({ dataGallery }) {
    // THEME
    const context = useContext(ThemeContext);
    return (
        <ul className={cx('collections', context.theme)}>
            {dataGallery.map((data, index) => (
                <GallerryItem key={index} title={data.title} img={data.imgUrl} />
            ))}
        </ul>
    );
}

export default GallerryList;
