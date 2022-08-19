import React from 'react';
import classNames from 'classnames/bind';
import { Email, LocationOn, Person } from '@mui/icons-material';

import styles from './Header.module.scss';
import configRoute from '~/config/routes';
import Button from '~/components/Buttton';

const cx = classNames.bind(styles);
const Header = () => {
    return (
        <div className={cx('wapper')}>
            <div className={cx('header')}>
            <div className={cx('path')}>PATH</div>
            <ul className={cx('infor')}>
                <Button className={cx('item')} leftIcon={<LocationOn className={cx('icon')} />}>
                    66 Vo Van Tan, Thanh Khe, Da Nang
                </Button>

                <Button text className={cx('item')} leftIcon={<Email className={cx('icon')} />} href="mailto:vietplqbdaf200035@fpt.edu.vn">
                    vietplqbdaf200035@fpt.edu.vn
                </Button>

                <Button outline className={cx('item')} leftIcon={<Person className={cx('icon')} />} to={configRoute.login}>
                    Log-in
                </Button>
            </ul>
            </div>
        </div>
    );
};

export default Header;
