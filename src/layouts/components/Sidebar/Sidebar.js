// import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import {
    Twitter,
    Facebook,
    YouTube,
    Email,
    Phone,
    LinkedIn,
    Home,
    Collections,
    Book,
    Web,
    Send,
    ChevronLeft,
    ChevronRight,
} from '@mui/icons-material';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Button from '~/components/Buttton/Button';
import PersonalInfor from '~/components/PersonalInfor';
import AvtImg from '~/components/AvtImg';
import img from '~/assets/img';
import NavMenu, { NavMenuItem } from './NavMenu';

const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <div className={cx('sidebar')}>
            {/* ABOUT ME */}
            <div className={cx('about')}>
                {/* AVT IMG */}

                <AvtImg src={img.avt} alt="Quoc Viet" />

                <h3 className={cx('name')}>Phan Lam Quoc Viet</h3>
                <h4 className={cx('job')}>Web Developer</h4>
                <p className={cx('description')}>
                    Hi! My name is Quoc Viet, I'm a creative designer and web developer. I enjoy creating eye candy
                    solutions for web and mobile applications. I'd love to work on yours, too!
                </p>
                <div className={cx('sub-avt')}>
                    <img src="https://profiler.jollyany.co/images/tz_profiler/Victoria-Rawson.png" alt="" />
                </div>

                {/* PersonalInfor */}
                <PersonalInfor />

                <div className={cx('socials')}>
                    <Button className={cx('link')} href="#" target="_blank" rel="noreferrer">
                        <Facebook className={cx('icon')} />
                    </Button>

                    <Button className={cx('link')} href="#" target="_blank" rel="noreferrer">
                        <YouTube className={cx('icon')} />
                    </Button>

                    <Button className={cx('link')} href="#" target="_blank" rel="noreferrer">
                        <Email className={cx('icon')} />
                    </Button>

                    <Button className={cx('link')} href="#" target="_blank" rel="noreferrer">
                        <Phone className={cx('icon')} />
                    </Button>

                    <Button className={cx('link')} href="#" target="_blank" rel="noreferrer">
                        <Twitter className={cx('icon')} />
                    </Button>

                    <Button className={cx('link')} href="#" target="_blank" rel="noreferrer">
                        <LinkedIn className={cx('icon')} />
                    </Button>
                </div>
            </div>

            {/* NAV BAR (active)*/}
            <div className={cx('navbar')}>
                <NavMenu className={cx('nav-menu')}>
                    <NavMenuItem icon={<Home className={cx('icon')} />} title="Home" to={config.routes.home} />

                    <NavMenuItem
                        icon={<Collections className={cx('icon')} />}
                        title="Gallerry"
                        to={config.routes.gallerry}
                    />

                    <NavMenuItem icon={<Book className={cx('icon')} />} title="Blog" to={config.routes.blog} />

                    <NavMenuItem icon={<Web className={cx('icon')} />} title="Project" to={config.routes.project} />

                    <NavMenuItem icon={<Send className={cx('icon')} />} title="Contact" to={config.routes.contact} />
                </NavMenu>

                {/* MENU ON TABLET & MOBILE */}
                <div className={cx('menu')}>
                    <span className={cx('menu-icon', 'icon-top', 'icon-top-click')}></span>
                    <span className={cx('menu-icon', 'icon-mid', 'icon-mid-click')}></span>
                    <span className={cx('menu-icon', 'icon-bot', 'icon-bot-click')}></span>
                </div>

                <div className={cx('show-hide-profile')}>
                    <ChevronLeft className={cx('icon', 'active')} />
                    <ChevronRight className={cx('icon', '')} />
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {};
export default Sidebar;
