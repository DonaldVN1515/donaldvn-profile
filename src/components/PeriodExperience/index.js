import classNames from 'classnames/bind';
import React from 'react';

import styles from './PeriodExperience.module.scss';

const cx = classNames.bind(styles);
const PeriodExperience = () => {
    return (
        <div className={cx('period')}>
            <div className={cx('work')}>
                <h3 className={cx('title')}>Online Prepaid Services</h3>
                <h6 className={cx('time')}>September 2019 - present</h6>
            </div>
            <div className={cx('infor')}>
                <h4 className={cx('job')}>Fulltime - Senior Web Developer at TemPlaza.com</h4>
                <p className={cx('description')}>
                    Working as a Senior Devloper on a large european based webshop for digital games and gifrcards. The
                    application is Laravel based and as a team we are working in a fully scrum way.
                </p>
                <ul className={cx('details')}>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>At vero eos et accusamus et iusto odio.</li>
                    <li>Excepteur sint occaecat cupidatat non proident.</li>
                </ul>
            </div>
        </div>
    );
};

export default PeriodExperience;
