import classNames from 'classnames/bind';

import styles from './PersonalInfor.module.scss';
import Button from '~/components/Buttton';

const cx = classNames.bind(styles);
const PersonalInfor = ({className}) => {
    return (
        <ul className={cx('infor')}>
            <li className={cx('item')}>
                <span>Date of Birth: </span>
                <Button className={cx('about', className)}>January 01, 2002</Button>
            </li>
            <li className={cx('item')}>
                <span>Address: </span>
                <Button className={cx('about', className)}>66 Vo Van Tan, Thanh Khe, Da Nang</Button>
            </li>
            <li className={cx('item')}>
                <span>Phone: </span>
                <Button className={cx('about', className)} text href="tel:0329702303">0329702303</Button>
            </li>
            <li className={cx('item')}>
                <span>Email: </span>
                <Button className={cx('about', className)} text href="mailto:vietplqbdaf200035@fpt.edu.vn">vietplqbdaf200035@fpt.edu.vn</Button>
            </li>
            <li className={cx('item')}>
                <span>Website: </span>
                <Button className={cx('about', className)} text target="_blank" rel="noreferrer" href="https://github.com/DonaldVN1515">
                    DonaldVN1515
                </Button>
            </li>
        </ul>
    );
};

export default PersonalInfor;
