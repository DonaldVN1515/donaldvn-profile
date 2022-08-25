import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import React from 'react';

import styles from './SkillbarItem.module.scss';

const cx = classNames.bind(styles);

const SkillbarItem = ({ title, value }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('skill-box')}>
                <span className={cx('title')}>HTML</span>

                <div className={cx('skill-bar')}>
                    <span className={cx('skill-per', 'html')}>
                        <span className={cx('tooltip')}>90%</span>
                    </span>
                </div>
            </div>

            <div className={cx('skill-box')}>
                <span className={cx('title')}>CSS</span>

                <div className={cx('skill-bar')}>
                    <span className={cx('skill-per', 'css')}>
                        <span className={cx('tooltip')}>70%</span>
                    </span>
                </div>
            </div>
            <div className={cx('skill-box')}>
                <span className={cx('title')}>JavaScript</span>

                <div className={cx('skill-bar')}>
                    <span className={cx('skill-per', 'javscript')}>
                        <span className={cx('tooltip')}>50%</span>
                    </span>
                </div>
            </div>
            <div className={cx('skill-box')}>
                <span className={cx('title')}>NodeJS</span>

                <div className={cx('skill-bar')}>
                    <span className={cx('skill-per', 'nodjs')}>
                        <span className={cx('tooltip')}>30%</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SkillbarItem;
