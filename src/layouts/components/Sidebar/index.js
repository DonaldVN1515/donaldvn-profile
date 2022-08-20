import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
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
} from '@mui/icons-material';

import img from '~/assets/img';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Button from '~/components/Buttton';
import PersonalInfor from '~/components/PersonalInfor';

const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <div className={cx('sidebar')}>
            {/* ABOUT ME */}
            <div className={cx('about')}>
                <div className={cx('avt-blur')}>
                    <img src={img.avt} alt="Quoc Viet" />

                    <div className={cx('avt-main')}>
                        <img src={img.avt} alt="Quoc Viet" />
                    </div>
                </div>
                <h3 className={cx('name')}>Phan Lam Quoc Viet</h3>
                <h4 className={cx('job')}>Web Developer</h4>
                <p className={cx('description')}>
                    Hi! My name is Quoc Viet, I'm a creative designer and web developer. I enjoy creating eye candy
                    solutions for web and mobile applications. I'd love to work on yours, too!
                </p>
                <img src="https://profiler.jollyany.co/images/tz_profiler/Victoria-Rawson.png" alt="" />

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
            <nav className={cx('navbar')}>
                <Tippy content="Home" placement="right">
                    <Link className={cx('option')} to={config.routes.home}>
                        <Home className={cx('icon')} />
                        <span>Home</span>
                    </Link>
                </Tippy>
                <Tippy content="Collections" placement="right">
                    <Link className={cx('option')} to={config.routes.gallerry}>
                        <Collections className={cx('icon')} />
                        <span>Gallerry</span>
                    </Link>
                </Tippy>
                <Tippy content="Blog" placement="right">
                    <Link className={cx('option')} to={config.routes.blog}>
                        <Book className={cx('icon')} />
                        <span>Blog</span>
                    </Link>
                </Tippy>

                <Tippy content="Project" placement="right">
                    <Link className={cx('option')} to={config.routes.project}>
                        <Web className={cx('icon')} />
                        <span>Project</span>
                    </Link>
                </Tippy>

                <Tippy content="Contact me" placement="right">
                    <Link className={cx('option')} to={config.routes.contact}>
                        <Send className={cx('icon')} />
                        <span>Contact</span>
                    </Link>
                </Tippy>
            </nav>
        </div>
    );
};

export default Sidebar;
