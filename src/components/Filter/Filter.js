import React from 'react';
import PropTypes from 'prop-types';
import RadioItem from '~/components/RadioItem';
import FilterIcon from '@mui/icons-material/Filter';
import classNames from 'classnames/bind';

import styles from './Filter.module.scss';
import Search from '~/components/Search';
Filter.propTypes = {
    dataFilterLabel: PropTypes.array.isRequired,
    filterValueSelected: PropTypes.func,
};

function Filter({ dataFilterLabel, filterValueSelected }) {
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

                <Search />
            </div>

            {/* FIll by CATEGORY */}
            <div className={cx('options')}>
                <RadioItem label="Show All" isChecked={true} onClick={filterValueChanged} />

                {dataFilterLabel.map((category, index) => {
                    return <RadioItem key={index} label={category} onClick={filterValueChanged} />;
                })}
            </div>
        </div>
    );
}

export default Filter;
