import classNames from 'classnames/bind';
import React from 'react';

import styles from './Login.module.scss';

const Login = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('login')}>
            <h2>LOG IN PAGE</h2>
            <div className={cx('wrapper')}></div>
        </div>
    );
};

export default Login;
