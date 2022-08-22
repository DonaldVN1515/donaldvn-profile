import React from 'react';
import classNames from 'classnames/bind';
import { Email, LocationOn, Person, PersonAddAlt } from '@mui/icons-material';

import styles from './Header.module.scss';
import config from '~/config';
import Button from '~/components/Buttton';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);
const Header = () => {
    let currUser = false;
    // let currUser = false;

    return (
        <div className={cx('wapper')}>
            <div className={cx('header')}>
                <div className={cx('path')}>PATH</div>
                <ul className={cx('infor')}>
                    <Button className={cx('item')} leftIcon={<LocationOn className={cx('icon')} />}>
                        66 Vo Van Tan, Thanh Khe, Da Nang
                    </Button>

                    <Button
                        text
                        className={cx('item')}
                        leftIcon={<Email className={cx('icon')} />}
                        href="mailto:vietplqbdaf200035@fpt.edu.vn"
                    >
                        vietplqbdaf200035@fpt.edu.vn
                    </Button>

                    {currUser ? (
                        <>
                            <Button
                                outline
                                className={cx('item', 'account')}
                                leftIcon={<Avatar className={cx('icon', 'avt')} />}
                            >
                                My Account
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                outline
                                className={cx('item')}
                                leftIcon={<PersonAddAlt className={cx('icon')} />}
                                to={config.routes.register}
                            >
                                Register
                            </Button>
                            <Button
                                primary
                                className={cx('item')}
                                leftIcon={<Person className={cx('icon', 'login')} />}
                                to={config.routes.login}
                            >
                                Log-in
                            </Button>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;
