import { ArrowUpward } from '@mui/icons-material';
import { useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './BackToTop.module.scss';
import { useWindowSize } from '~/hooks';

const cx = classNames.bind(styles);

const BackToTop = (props, ref) => {
    const [visible, setVisible] = useState(false);
    const [width] = useWindowSize();

    let scrollbar;
    width >= 1024 ? (scrollbar = ref.current) : (scrollbar = window);

    useEffect(() => {
        const toggleVisible = () => {
            let scrolled;
            width >= 1024 ? (scrolled = ref.current.scrollTop) : (scrolled = window.scrollY);

            setVisible(scrolled >= 200);
        };

        scrollbar.addEventListener('scroll', toggleVisible);

        return () => {
            // scrollbar.removeEventListener('scroll', toggleVisible);
        };
        // eslint-disable-next-line
    }, [width]);

    const handleScrollToTop = () => {
        scrollbar.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {visible && (
                <div className={cx('back-to-top')} onClick={handleScrollToTop}>
                    <ArrowUpward className={cx('icon')} />
                </div>
            )}
        </>
    );
};
export default forwardRef(BackToTop);
