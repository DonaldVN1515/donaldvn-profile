import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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
import configRoute from '~/config/routes';

const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('about')}>
                <div className={cx('avt-blur')}>
                    <img src={img.avt} alt="Quoc Viet" />

                    <div className={cx('avt-main')}>
                        <img src={img.avt} alt="Quoc Viet" />
                    </div>
                </div>
                <h3 className={cx('name')}>Phan Lam Quoc Viet</h3>
                <h4 className={cx('job')}>Web Development</h4>
                <p className={cx('description')}>
                    Hi! My name is Quoc Viet, I'm a creative designer and web developer. I enjoy creating eye candy
                    solutions for web and mobile applications. I'd love to work on yours, too!
                </p>
                <img src="https://profiler.jollyany.co/images/tz_profiler/Victoria-Rawson.png" alt="" />
                <ul className={cx('infor')}>
                    <li>
                        <span>Date of Birth: </span>
                        <a className={cx('link')} href="#">
                            January 01, 2002
                        </a>
                    </li>
                    <li>
                        <span>Address: </span>
                        <a className={cx('link')} href="#">
                            66 Vo Van Tan, Thanh Khe, Da Nang
                        </a>
                    </li>
                    <li>
                        <span>Phone: </span>
                        <a className={cx('link')} href="tel:0329702303">
                            0329702303
                        </a>
                    </li>
                    <li>
                        <span>Email: </span>
                        <a className={cx('link')} href="mail:vietplqbdaf200035@fpt.edu.vn">
                            vietplqbdaf200035@fpt.edu.vn
                        </a>
                    </li>
                    <li>
                        <span>Website: </span>
                        <a
                            className={cx('link')}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/DonaldVN1515"
                        >
                            https://github.com/DonaldVN1515
                        </a>
                    </li>
                </ul>

                <div className={cx('socials')}>
                    <a className={cx('link')} href="#" target="" rel="noreferrer">
                        <Facebook className={cx('icon')} />
                    </a>

                    <a className={cx('link')} href="#" target="" rel="noreferrer">
                        <YouTube className={cx('icon')} />
                    </a>

                    <a className={cx('link')} href="#" target="" rel="noreferrer">
                        <Email className={cx('icon')} />
                    </a>

                    <a className={cx('link')} href="#" target="" rel="noreferrer">
                        <Phone className={cx('icon')} />
                    </a>

                    <a className={cx('link')} href="#" target="" rel="noreferrer">
                        <Twitter className={cx('icon')} />
                    </a>

                    <a className={cx('link')} href="#" target="" rel="noreferrer">
                        <LinkedIn className={cx('icon')} />
                    </a>
                </div>
            </div>

            <nav className={cx('navbar')}>
                <Link className={cx('option')} to={configRoute.home}>
                    <Home className={cx('icon')} />
                    <span>Home</span>
                </Link>
                <Link className={cx('option')} to={configRoute.gallerry}>
                    <Collections className={cx('icon')} />
                    <span>Gallerry</span>
                </Link>
                <Link className={cx('option')} to={configRoute.blog}>
                    <Book className={cx('icon')} />
                    <span>Blog</span>
                </Link>
                <Link className={cx('option')} to={configRoute.project}>
                    <Web className={cx('icon')} />
                    <span>Project</span>
                </Link>
                <Link className={cx('option')} to={configRoute.contact}>
                    <Send className={cx('icon')} />
                    <span>Contact</span>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
