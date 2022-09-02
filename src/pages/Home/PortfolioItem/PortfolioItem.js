import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './PortfolioItem.module.scss';
import Overlay from '~/components/Overlay';
import { ReadMore } from '@mui/icons-material';

const cx = classNames.bind(styles);

PortfolioItem.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

function PortfolioItem({ category, title, src, alt, href }) {
    return (
        <div className={cx('portfolio-item')}>
            <a href={href} target="_blank" rel="noreferrer" className={cx('portfolio-img')}>
                <Overlay className={cx('overlay')} />
                <img src={src} alt={alt} />

                <div className={cx('portfolio-more')}>
                    <ReadMore className={cx('portfolio-icon')} />
                </div>
            </a>
            <div className={cx('portfolio-infor')}>
                <h6>{title}</h6>
                <span>{category}</span>
            </div>
        </div>
    );
}

export default PortfolioItem;
