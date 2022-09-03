import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import styles from './CircularProgressItem.module.scss';

const cx = classNames.bind(styles);

const CircularProgressItem = ({ data }) => {
    const [valueProgress, setValueProgress] = useState(0);

    const circleRef = useRef();

    useEffect(() => {
        const circumference = circleRef.current.getTotalLength();
        let speed = 1000;
        setValueProgress(data.value);
        let progress = setInterval(() => {
            circleRef.current.style.strokeDashoffset = circumference - (valueProgress * circumference) / 100;
        }, speed);

        return () => {
            clearInterval(progress);
        };
    }, [data.value, valueProgress]);

    return (
        <div className={cx('card')}>
            <div className={cx('percent')}>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle ref={circleRef} cx="70" cy="70" r="70"></circle>
                </svg>
                <div className={cx('num')}>
                    <h6>
                        {valueProgress}
                        <span>%</span>
                    </h6>
                </div>
            </div>
            <h2 className={cx('text')}>{data.title}</h2>
        </div>
    );
};

CircularProgressItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CircularProgressItem;
