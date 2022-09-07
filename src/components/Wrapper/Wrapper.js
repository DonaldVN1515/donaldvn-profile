import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);
const Wrapper = ({ children, className }) => {
    // THEME
    const context = useContext(ThemeContext);

    return <div className={cx('wrapper', context.theme, className)}>{children}</div>;
};
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Wrapper;
