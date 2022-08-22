import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PersonalInfor.module.scss';
import Button from '~/components/Buttton';

const cx = classNames.bind(styles);
const PersonalInfor = ({
    className,
    dob = 'January 01, 2002',
    address = '66 Vo Van Tan, Thanh Khe, Da Nang',
    phone = '0329702303',
    email = 'vietplqbdaf200035@fpt.edu.vn',
    href = 'https://github.com/DonaldVN1515',
}) => {
    return (
        <ul className={cx('infor')}>
            <li className={cx('item')}>
                <span>Date of Birth: </span>
                <Button className={cx('about', className)}>{dob}</Button>
            </li>
            <li className={cx('item')}>
                <span>Address: </span>
                <Button className={cx('about', className)}>{address}</Button>
            </li>
            <li className={cx('item')}>
                <span>Phone: </span>
                <Button className={cx('about', className)} text href={`tel:${phone}`}>
                    {phone}
                </Button>
            </li>
            <li className={cx('item')}>
                <span>Email: </span>
                <Button className={cx('about', className)} text href={`mailto:${email}`}>
                    {email}
                </Button>
            </li>
            <li className={cx('item')}>
                <span>Website: </span>
                <Button className={cx('about', className)} text target="_blank" rel="noreferrer" href={href}>
                    {href}
                </Button>
            </li>
        </ul>
    );
};
PersonalInfor.propTypes = {
    className: PropTypes.string,
    dob: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    href: PropTypes.string,
};
export default PersonalInfor;
