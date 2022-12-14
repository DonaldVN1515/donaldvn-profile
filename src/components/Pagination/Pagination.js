import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Pagination.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
    // THEME
    const context = useContext(ThemeContext);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className={cx('pagination', context.theme)}>
            {/* FIRST BUTTON */}
            <button disabled={currentPage <= 1} className={cx('page-item')} onClick={() => paginate(1)}>
                <Link to={config.routes.blog} className={cx('page-link', 'first')}>
                    First
                </Link>
            </button>
            {/* PREVIOUS BUTTON */}
            <button disabled={currentPage <= 1} className={cx('page-item')} onClick={() => paginate(currentPage - 1)}>
                <Link to={config.routes.blog} className={cx('page-link', 'prev')}>
                    Prev
                </Link>
            </button>
            {/* PAGE NUMBERS */}
            {pageNumbers.map((index) => (
                <li key={index} className={cx('page-item')} onClick={() => paginate(index)}>
                    <NavLink
                        to={`${config.routes.blog}?page=${index}`}
                        className={(nav) => {
                            if (currentPage === index) {
                                return cx(cx('page-link'), { active: nav.isActive });
                            }
                            return cx('page-link');
                        }}
                    >
                        {index}
                    </NavLink>
                </li>
            ))}
            {/* NEXT BUTTON */}
            <button
                disabled={currentPage > pageNumbers.length - 1}
                className={cx('page-item')}
                onClick={() => paginate(currentPage + 1)}
            >
                <Link to={config.routes.blog} className={cx('page-link', 'next')}>
                    Next
                </Link>
            </button>
            {/* LAST BUTTON */}
            <button
                disabled={currentPage > pageNumbers.length - 1}
                className={cx('page-item')}
                onClick={() => paginate(pageNumbers.length)}
            >
                <Link to={config.routes.blog} className={cx('page-link', 'last')}>
                    Last
                </Link>
            </button>
        </ul>
    );
};
Pagination.propTypes = {
    blogsPerPage: PropTypes.number,
    totalBlogs: PropTypes.number,
    paginate: PropTypes.func,
};
export default Pagination;
