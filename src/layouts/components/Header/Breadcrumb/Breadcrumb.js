import PropTypes from 'prop-types';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Breadcrumb.module.scss';
// import config from '~/config';

const cx = classNames.bind(styles);

const Breadcrumb = ({ className }) => {
    // THEME
    const context = useContext(ThemeContext);
    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <div className={cx('wapper', context.theme, className)} role="presentation" onClick={handleClick}>
            {/* <Breadcrumbs aria-label="breadcrumb">
                    <Link to={config.routes.home}>Home</Link>
                </Breadcrumbs> */}
            <h4>Breadcrumb</h4>
        </div>
    );
};

Breadcrumb.propTypes = {
    className: PropTypes.string,
};
export default Breadcrumb;
