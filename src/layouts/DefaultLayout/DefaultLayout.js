import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import { motion, useScroll, useSpring } from 'framer-motion';
import { useContext } from 'react';

import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import BackToTop from '~/components/BackToTop';
import { ThemeContext } from '~/components/ThemeContext';
import { useWindowSize } from '~/hooks';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    // Scroll Progress
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001,
    // });

    // THEME
    const context = useContext(ThemeContext);

    // SCROLL ON BREAKPOINT 1024px
    const [width] = useWindowSize();

    const wapperRef = useRef();
    const containerRef = useRef();
    useEffect(() => {
        if (width >= 1024) {
            wapperRef.current.classList.add(cx('wrapper--active'));
            containerRef.current.classList.add(cx('container--active'));
        } else {
            wapperRef.current.classList.remove(cx('wrapper--active'));
            containerRef.current.classList.remove(cx('container--active'));
        }
    }, [width]);

    return (
        <div ref={wapperRef} className={cx('wrapper', context.theme)}>
            <Sidebar />

            <div className={cx('container', context.theme)} ref={containerRef}>
                {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}

                <Header />

                <div className={cx('content', context.theme)}>{children}</div>

                <Footer />

                <BackToTop ref={containerRef} />
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
