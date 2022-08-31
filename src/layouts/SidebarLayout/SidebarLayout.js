import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import classNames from 'classnames/bind';

import Sidebar from '~/layouts/components/Sidebar';
import BackToTop from '~/components/BackToTop';
import styles from './SidebarLayout.module.scss';
SidebarLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

function SidebarLayout({ children }) {
    const cx = classNames.bind(styles);

    const backToTopRef = useRef();

    return (
        <div className={cx('wapper')}>
            <Sidebar />

            <div className={cx('container')} ref={backToTopRef}>
                {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

                <div className={cx('content')}>{children}</div>

                <BackToTop ref={backToTopRef} />
            </div>
        </div>
    );
}

export default SidebarLayout;
