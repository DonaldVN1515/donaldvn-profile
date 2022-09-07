import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
const cx = classNames.bind(styles);

function Modal({ children, onClose, className }) {
    return (
        <div className={cx('wrapper', className)} onClick={onClose}>
            {children}
        </div>
    );
}

export default Modal;
