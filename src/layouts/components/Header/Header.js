import classNames from 'classnames/bind';
import { Email, Language, LocationOn, Person, PersonAddAlt } from '@mui/icons-material';

import styles from './Header.module.scss';
import config from '~/config';
import Button from '~/components/Buttton';
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { AccountMenu, LanguageMenu } from '~/layouts/components/Header/HeaderMenu';

const cx = classNames.bind(styles);

const Header = () => {
    const dataAccount = [
        {
            icon: <PersonIcon />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <LogoutIcon />,
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
