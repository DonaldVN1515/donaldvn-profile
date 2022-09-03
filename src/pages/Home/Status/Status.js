import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Overlay from '~/components/Overlay';
import styles from './Status.module.scss';
Status.propTypes = {
    data: PropTypes.array.isRequired,
};
const cx = classNames.bind(styles);

function Status({ data }) {
    return (
        <div className={cx('status')}>
            <Overlay className={cx('overlay')} />

            <div className={cx('content')}>
                {data.map((data, index) => (
                    <div key={index} className={cx('item')}>
                        <i className={cx('icon')}>{data.icon}</i>
                        <span>{data.value}</span>
                        <h6>{data.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Status;
