import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const Footer = () => {
    // THEME
    const context = useContext(ThemeContext);
    return (
        <div className={cx('footer', context.theme)}>
            <h3>© Profile 2022. Design by DONALDVN</h3>
        </div>
    );
};

export default Footer;
