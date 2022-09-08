import classNames from 'classnames/bind';
import { Email, Language, LocationOn, Person, PersonAddAlt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Header.module.scss';
import config from '~/config';
import Button from '~/components/Buttton';
import { AccountMenu, LanguageMenu } from '~/layouts/components/Header/HeaderMenu';
import Breadcrumb from '~/layouts/components/Header/Breadcrumb';
import ThemeSwitcher from '~/layouts/components/Header/ThemeSwitcher';

const cx = classNames.bind(styles);

const Header = () => {
    const context = useContext(ThemeContext);

    const [dataAccount, setDataAccount] = useState([]);
    const [dataLanguage, setDataLanguage] = useState([]);
    useEffect(() => {
        const dataAccount = [
            {
                icon: <FontAwesomeIcon icon={faUser} />,
                title: 'View Profile',
                to: '/profile',
            },
            {
                icon: <FontAwesomeIcon icon={faGear} />,
                title: 'Settings',
                to: '/settings',
            },
            {
                icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
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

    let currUser = false;

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
        <div className={cx('wapper', context.theme)}>
            <div className={cx('header')}>
                <div className={cx('navbar')}>
                    <Breadcrumb className={cx('breadcrumb')} />
                </div>
                <ul className={cx('infor')}>
                    <Button className={cx('item', 'address')} leftIcon={<LocationOn className={cx('icon')} />}>
                        66 Vo Van Tan, Thanh Khe, Da Nang
                    </Button>

                    <Button
                        text
                        className={cx('item', 'email')}
                        leftIcon={<Email className={cx('icon')} />}
                        href="mailto:vietplqbdaf200035@fpt.edu.vn"
                    >
                        vietplqbdaf200035@fpt.edu.vn
                    </Button>
                    {/* THEME SWITCHER */}
                    <ThemeSwitcher />
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
                                className={cx('item', 'register')}
                                leftIcon={<PersonAddAlt className={cx('icon')} />}
                                to={config.routes.register}
                            >
                                Register
                            </Button>
                            <Button
                                primary
                                className={cx('item', 'login')}
                                leftIcon={<Person className={cx('icon', 'login-icon')} />}
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
