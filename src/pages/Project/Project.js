import classNames from 'classnames/bind';
import React from 'react';

import styles from './Project.module.scss';
const Project = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('project')}>
            <h2>PROJECT PAGE</h2>
            <div className={cx('wrapper')}></div>
        </div>
    );
};

export default Project;
