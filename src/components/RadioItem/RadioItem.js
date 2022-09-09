import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './RadioItem.module.scss';

const cx = classNames.bind(styles);
const RadioItem = ({ label, onClick, isChecked = false }) => {
    // THEME
    const context = useContext(ThemeContext);

    return (
        <div className={cx('wapper', context.theme)}>
            <div className={cx('input', 'input-radio', 'input-secondary')}>
                <label>
                    <input
                        type="radio"
                        value={label}
                        name="radio-secondary"
                        defaultChecked={isChecked}
                        onClick={onClick}
                    />
                    <span className={cx('input-box')}></span>
                    <span className={cx('label')}>{label}</span>
                </label>
            </div>
        </div>
    );
};

RadioItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
export default RadioItem;
