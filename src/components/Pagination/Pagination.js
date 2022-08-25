import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Pagination.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={cx('pagination')}>
                <button disabled={currentPage <= 1} className={cx('page-item')} onClick={() => paginate(1)}>
                    <Link to={config.routes.blog} className={cx('page-link')}>
                        First
                    </Link>
                </button>
                <button
                    disabled={currentPage <= 1}
                    className={cx('page-item')}
                    onClick={() => paginate(currentPage - 1)}
                >
                    <Link to={config.routes.blog} className={cx('page-link')}>
                        Prev
                    </Link>
                </button>
                {pageNumbers.map((index) => (
                    <li key={index} className={cx('page-item')} onClick={() => paginate(index)}>
                        <NavLink
                            to={`${config.routes.blog}?${index}`}
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
                <button
                    disabled={currentPage > pageNumbers.length - 1}
                    className={cx('page-item')}
                    onClick={() => paginate(currentPage + 1)}
                >
                    <Link to={config.routes.blog} className={cx('page-link')}>
                        Next
                    </Link>
                </button>
                <button disabled={currentPage > pageNumbers.length - 1} className={cx('page-item')} onClick={() => paginate(pageNumbers.length)}>
                    <Link to={config.routes.blog} className={cx('page-link')}>
                        Last
                    </Link>
                </button>
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    blogsPerPage: PropTypes.number,
    totalBlogs: PropTypes.number,
    paginate: PropTypes.func,
};
export default Pagination;
