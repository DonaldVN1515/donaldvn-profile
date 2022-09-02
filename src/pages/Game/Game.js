import classNames from 'classnames/bind';
import React from 'react';

import styles from './Game.module.scss';
const Game = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('project')}>
            <h2>Game PAGE</h2>
            <div className={cx('wrapper')}></div>
        </div>
    );
};

export default Game;
