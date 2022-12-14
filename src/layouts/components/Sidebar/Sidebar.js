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
    Download,
} from '@mui/icons-material';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Button from '~/components/Buttton/Button';
import PersonalInfor from '~/layouts/components/Sidebar/PersonalInfor';
import Image from '~/components/Image';
import img from '~/assets/img';
import NavMenu, { NavMenuItem } from './NavMenu';
import { OverlayMenu, OverlayMenuItem } from './OverlayMenu';

const cx = classNames.bind(styles);
const Sidebar = () => {
    // THEME
    const context = useContext(ThemeContext);
    return (
        <div className={cx('sidebar')}>
            {/* ABOUT ME */}
            <div className={cx('about')}>
                {/* AVT IMG */}

                <Image src={img.avt} alt="Quoc Viet" className={cx('image')} />

                <div className={cx('content')}>
                    <h3 className={cx('name')}>Phan Lam Quoc Viet</h3>
                    <h4 className={cx('job')}>Web Developer</h4>
                    <p className={cx('description')}>
                        Hi! My name is Quoc Viet, I'm a creative designer and web developer. I enjoy creating eye candy
                        solutions for web and mobile applications. I'd love to work on yours, too!
                    </p>
                    {/* DOWNLOAD CV */}
                    <Button
                        href="#"
                        download
                        target="_blank"
                        rel="noreferrer"
                        primary
                        className={cx('download-cv')}
                        leftIcon={<Download className={cx('icon-cv')} />}
                    >
                        Download CV
                    </Button>

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
            </div>

            {/* NAV BAR (active)*/}
            <div className={cx('navbar', context.theme)}>
                <NavMenu className={cx('nav-menu', context.theme)}>
                    <NavMenuItem
                        icon={<Home className={cx('icon')} />}
                        title="Home"
                        to={config.routes.home}
                    />

                    <NavMenuItem
                        icon={<Collections className={cx('icon')} />}
                        title="Gallerry"
                        to={config.routes.gallerry}
                    />

                    <NavMenuItem icon={<Book className={cx('icon')} />} title="Blog" to={config.routes.blog} />

                    <NavMenuItem icon={<Web className={cx('icon')} />} title="Game" to={config.routes.game} />

                    <NavMenuItem icon={<Send className={cx('icon')} />} title="Contact" to={config.routes.contact} />
                </NavMenu>

                <div className={cx('show-hide-profile', context.theme)}>
                    <ChevronLeft className={cx('icon', 'active')} />
                    <ChevronRight className={cx('icon', '')} />
                </div>
            </div>

            {/* OVERLAY MENU ON MOBILE AND TABLET */}
            <OverlayMenu className={cx('overlay-menu')}>
                <OverlayMenuItem icon={<Home className={cx('menu-icon')} />} title="Home" to={config.routes.home} />

                <OverlayMenuItem
                    icon={<Collections className={cx('menu-icon')} />}
                    title="Gallerry"
                    to={config.routes.gallerry}
                />

                <OverlayMenuItem icon={<Book className={cx('menu-icon')} />} title="Blog" to={config.routes.blog} />

                <OverlayMenuItem icon={<Web className={cx('menu-icon')} />} title="Game" to={config.routes.game} />

                <OverlayMenuItem
                    icon={<Send className={cx('menu-icon')} />}
                    title="Contact"
                    to={config.routes.contact}
                />
            </OverlayMenu>
        </div>
    );
};

Sidebar.propTypes = {};
export default Sidebar;
