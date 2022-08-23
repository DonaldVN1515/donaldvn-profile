import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './PeriodExperience.module.scss';

const cx = classNames.bind(styles);

const userExperience = [
    {
        title: 'Tutors',
        time: 'May 2022 - August 2022',
        job: 'Tutors at British International College BTEC FPT',
        description: 'Support teachers to manage students, answer academic and professional problems of the subject.',
        details: {
            line1: 'Students are very enthusiastic, diligent in studying, always acquiring new knowledge.',
            line2: "The environment in The United Kingdom's is vibrant, positive and always fun to learn.",
            line3: 'I also learned how to communicate more effectively, get used to many new relationships.',
        },
    },
];
const PeriodExperience = () => {
    return (
        <div className={cx('experience')}>
            {userExperience.map((period, index) => (
                <div key={index} className={cx('period')}>
                    <div className={cx('work')}>
                        <h3 className={cx('title')}>{period.title}</h3>
                        <h6 className={cx('time')}>{period.time}</h6>
                    </div>
                    <div className={cx('infor')}>
                        <h4 className={cx('job')}>{period.job}</h4>
                        <p className={cx('description')}>{period.description}</p>
                        <ul className={cx('details')}>
                            <li>{period.details.line1}</li>
                            <li>{period.details.line2}</li>
                            <li>{period.details.line3}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
PeriodExperience.propTypes = {};
export default PeriodExperience;
