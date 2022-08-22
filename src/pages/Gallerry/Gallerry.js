import classNames from 'classnames/bind';

import styles from './Gallerry.module.scss';
import img from '~/assets/img';

const cx = classNames.bind(styles);

const Gallerry = () => {
    return (
        <div className={cx('wapper')}>
            <h2>GALLERRY PAGE</h2>
            {/* GALLERRY GREAT */}
            <ul className={cx('collections')}>
                <li className={cx('item', 'half-image')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt1} alt="Gallerry" />
                </li>
                <li className={cx('item', 'half-image')}>
                    <img src={img.avt2} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt1} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt2} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt1} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt2} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt1} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt2} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>{' '}
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt1} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt2} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt1} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt2} alt="Gallerry" />
                </li>
                <li className={cx('item')}>
                    <img src={img.avt} alt="Gallerry" />
                </li>
            </ul>

            {/* GALLERRY  SAD */}
            <section>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg" alt="" />
                <article>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </article>
            </section>
        </div>
    );
};

export default Gallerry;
