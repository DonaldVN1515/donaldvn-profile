import classNames from 'classnames/bind';
import { useRef } from 'react';

import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import BackToTop from '~/components/BackToTop';

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    const backToTopRef = useRef();

    return (
        <div className={cx('wapper')}>
            <Sidebar />

            <div className={cx('container')} ref={backToTopRef}>
                <Header />

                <div className={cx('content')}>{children}</div>

                <Footer />

                <BackToTop ref={backToTopRef} />
            </div>
        </div>
    );
};

export default DefaultLayout;
