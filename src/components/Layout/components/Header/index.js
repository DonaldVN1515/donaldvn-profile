import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss'

const cx = classNames.bind(styles)
const Header = () => {
  return (
    <div className={cx('header')}>
      <h2>HEADER</h2>
    </div>
  );
}

export default Header;
