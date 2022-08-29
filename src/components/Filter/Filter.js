import React from 'react';
import PropTypes from 'prop-types';
import RadioItem from '~/components/RadioItem';
import FilterIcon from '@mui/icons-material/Filter';
import classNames from 'classnames/bind';

import styles from './Filter.module.scss';
import Search from '~/components/Search';
Filter.propTypes = {
    dataFilterCategory: PropTypes.array.isRequired,
    dataFilterTitle: PropTypes.array,
    filterValueSelected: PropTypes.func,
};

function Filter({ dataFilterCategory, filterValueSelected, dataFilterTitle }) {
    const cx = classNames.bind(styles);

    // FILTER
    const filterValueChanged = (e) => {
        filterValueSelected(e.target.value);

    };
    return (
        <div className={cx('filter')}>
            <div className={cx('heading')}>
                <div className={cx('title')}>
                    <FilterIcon className={cx('icon')} />
                    <h4>Filter:</h4>
                </div>

                <Search dataFilterTitle={dataFilterTitle} />
            </div>

            {/* FIll by CATEGORY */}
            <div className={cx('options')}>
                <RadioItem label="Show All" isChecked={true} onClick={filterValueChanged} />

                {dataFilterCategory.map((category, index) => {
                    return <RadioItem key={index} label={category} onClick={filterValueChanged} />;
                })}
            </div>
        </div>
    );
}

export default Filter;
