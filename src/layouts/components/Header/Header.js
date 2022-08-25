import classNames from 'classnames/bind';
import { Email, Language, LocationOn, Person, PersonAddAlt, Logout, Settings } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import config from '~/config';
import Button from '~/components/Buttton';
import { AccountMenu, LanguageMenu } from '~/layouts/components/Header/HeaderMenu';
import Breadcrumb from '~/layouts/components/Header/Breadcrumb';

const cx = classNames.bind(styles);

const Header = () => {
    const [dataAccount, setDataAccount] = useState([]);
    const [dataLanguage, setDataLanguage] = useState([]);
    useEffect(() => {
        const dataAccount = [
            {
                icon: <Person />,
                title: 'View Profile',
                to: '/profile',
            },
            {
                icon: <Settings />,
                title: 'Settings',
                to: '/settings',
            },
            {
                icon: <Logout />,
                title: 'Log out',
                to: '/logout',
                separate: true,
            },
        ];

        const dataLanguage = [
            {
                code: 'en',
                title: 'English',
            },
            {
                code: 'vi',
                title: 'Tiếng Việt',
            },
        ];

        setDataAccount(dataAccount);

        setDataLanguage(dataLanguage);
    }, []);

    let currUser = true;

    const handleChangeLanguage = () => {
        // console.log(menuItem);

        switch (dataLanguage.code) {
            case 'language':
                // HANDLE CHANGE LANGUAGE

                break;

            default:
                break;
        }
    };
    return (
        <div className={cx('wapper')}>
            <div className={cx('header')}>
                <Breadcrumb />
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
                    {/* Language Menu */}
                    <LanguageMenu dataLanguage={dataLanguage} onChange={handleChangeLanguage}>
                        <Button
                            outline
                            className={cx('item', 'language')}
                            leftIcon={<Language className={cx('icon')} />}
                        >
                            Enghlish
                        </Button>
                    </LanguageMenu>

                    {/* Account Menu */}
                    {currUser ? (
                        <AccountMenu dataAccount={dataAccount}>
                            <Button
                                outline
                                className={cx('item', 'account')}
                                leftIcon={<Avatar className={cx('icon', 'avt')} />}
                            >
                                My Account
                            </Button>
                        </AccountMenu>
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
