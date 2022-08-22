import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const Footer = () => {
    return (
        <div className={cx('footer')}>
            <h6>© Profile 2022. Design by DONALDVN</h6>
        </div>
    );
};

export default Footer;
