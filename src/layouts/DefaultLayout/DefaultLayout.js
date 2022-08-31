import classNames from 'classnames/bind';
import { useRef } from 'react';
import PropTypes from 'prop-types';
// import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import BackToTop from '~/components/BackToTop';

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    // Back to top
    const backToTopRef = useRef();

    // Scroll Progress
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001,
    // });

    return (
        <div className={cx('wapper')}>
            <Sidebar />

            <div className={cx('container')} ref={backToTopRef}>
                {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

                <Header />

                <div className={cx('content')}>{children}</div>

                <Footer />

                <BackToTop ref={backToTopRef} />
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
