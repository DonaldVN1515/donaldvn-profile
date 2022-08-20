import classNames from 'classnames/bind';
import React from 'react';
import { ArrowUpward } from '@mui/icons-material';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <div className={cx('footer')}>
            <h6>© Profile 2022. Design by DONALDVN</h6>

            <div className={cx('back-to-top', 'active')}>
                <ArrowUpward className={cx('icon')} />
            </div>
        </div>
    );
};

export default Footer;