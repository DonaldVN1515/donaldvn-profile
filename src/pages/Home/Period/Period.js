import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Period.module.scss';

const cx = classNames.bind(styles);

const Period = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            {data.map((period, index) => (
                <div key={index} className={cx('period')}>
                    <div className={cx('work')}>
                        <h3 className={cx('title')}>{period.title}</h3>
                        <h6 className={cx('time')}>{period.time}</h6>
                    </div>
                    <div className={cx('infor')}>
                        <h4 className={cx('job')}>{period.job}</h4>
                        <p className={cx('description')}>{period.description}</p>
                        <ul className={cx('details')}>
                            {period.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
Period.propTypes = {
    data: PropTypes.array.isRequired,
};
export default Period;
