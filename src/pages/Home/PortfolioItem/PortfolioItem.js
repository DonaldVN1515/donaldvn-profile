import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './PortfolioItem.module.scss';
import Overlay from '~/components/Overlay';
import { ReadMore } from '@mui/icons-material';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

PortfolioItem.propTypes = {
    data: PropTypes.array.isRequired,
};

function PortfolioItem({ data }) {
    // THEME
    const context = useContext(ThemeContext);
    return (
        <div className={cx('portfolio', context.theme)}>
            {data.map((data, index) => (
                <div key={index} className={cx('item')}>
                    <a href={data.href} target="_blank" rel="noreferrer" className={cx('link')}>
                        <Overlay className={cx('overlay')} />
                        <Image src={data.imageUrl} alt={data.title} className={cx('image')} />

                        <div className={cx('more')}>
                            <ReadMore className={cx('icon')} />
                        </div>
                    </a>
                    <div className={cx('infor')}>
                        <div className={cx('title')}>
                            <h6>{data.title}</h6>
                        </div>
                        <div className={cx('category')}>
                            <p>{data.category}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PortfolioItem;
