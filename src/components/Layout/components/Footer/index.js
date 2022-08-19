import classNames from 'classnames/bind';
import React from 'react';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <div className={cx('footer')}>
            <h6>© Profiler 2022. Design by TemPlaza</h6>
        </div>
    );
};

export default Footer;
