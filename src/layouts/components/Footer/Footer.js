import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Footer.module.scss';
import { ThemeContext } from '~/components/ThemeContext';

const cx = classNames.bind(styles);
const Footer = () => {
    // THEME
    const context = useContext(ThemeContext);
    return (
        <div className={cx('footer', context.theme)}>
            <h6>© Profile 2022. Design by DONALDVN</h6>
        </div>
    );
};

export default Footer;
