import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Close, RotateRight } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect, useRef } from 'react';

import styles from './Search.module.scss';
// import { useDebounce } from '~/hooks';
// import  * as searchService from '~/services/searchService';
import { Wrapper } from '~/components/Wrapper';
Search.propTypes = {
    dataFilterTitle: PropTypes.array.isRequired,
};

function Search({ dataFilterTitle }) {
    const cx = classNames.bind(styles);

    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    // const debouncedValue = useDebounce(searchValue, 500);

    // https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less
    useEffect(() => {
        // if (!debouncedValue.trim()) {
        //     setSearchResult([]);
        //     return;
        // }
        setLoading(true);

        // const fetchApi = async () => {
        //     const result = await searchService.search(debouncedValue);

        setSearchResult(dataFilterTitle);

        setLoading(false);
        // };
        // fetchApi();
        // debouncedValue
    }, [dataFilterTitle, searchResult]);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSubmit = () => {
        // Search Page
    };

    // renderSearchResult
    const renderSearchResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('search-wrapper')}>
                {searchResult
                    .filter((result) => {
                        if (result === '') {
                            return result;
                        } else if (result.toLowerCase().includes(searchValue.toLowerCase())) {
                            return result;
                        }
                        // eslint-disable-next-line array-callback-return
                        return;
                    })
                    .map((result, index) => {
                        return (
                            <div key={index} onClick={() => setShowResult(false)}>
                                <h6>{result}</h6>
                            </div>
                        );
                    })}
            </Wrapper>
        </div>
    );
    return (
        <div className={cx('search')}>
            <Tippy
                // placement="bottom"
                offset={[0, 5]}
                interactive
                placement="bottom-end"
                visible={showResult && searchResult.length > 0}
                render={renderSearchResult}
                onClickOutside={handleHideResult}
            >
                <form className={cx('searchbar')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search ..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={(e) => setShowResult(true)}
                    />
                    {!!searchValue && <Close className={cx('clear')} onClick={handleClear} />}
                    {loading && <RotateRight className={cx('loading')} />}
                    <button className={cx('search-btn')} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </form>
            </Tippy>
        </div>
    );
}

export default Search;
