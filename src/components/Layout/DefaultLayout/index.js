import classNames from 'classnames/bind';
import React from 'react';

import styles from './DefaultLayout.module.scss';
import Sidebar from '~/components/Layout/components/Sidebar';
import Header from '~/components/Layout/components/Header';

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wapper')}>
            <Sidebar />

            <div className={cx('container')}>
                <Header />

                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
