import { ArrowUpward } from '@mui/icons-material';
import { useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './BackToTop.module.scss';

const cx = classNames.bind(styles);
const BackToTop = (props, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = ref.current.scrollTop;

            setVisible(scrolled >= 200);
        };

        ref.current.addEventListener('scroll', toggleVisible);

        return () => {
            // ref.current.removeEventListener('scroll', toggleVisible);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleScrollToTop = () => {
        ref.current.scrollTo({
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
