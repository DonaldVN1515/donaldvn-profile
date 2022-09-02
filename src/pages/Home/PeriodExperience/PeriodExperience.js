import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PeriodExperience.module.scss';

const cx = classNames.bind(styles);

const PeriodExperience = ({ dataExperience }) => {
    return (
        <div className={cx('experience')}>
            {dataExperience.map((period, index) => (
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
PeriodExperience.propTypes = {
    dataExperience: PropTypes.array.isRequired,
};
export default PeriodExperience;
