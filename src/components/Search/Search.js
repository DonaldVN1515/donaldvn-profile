import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Close, RotateRight } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect, useRef } from 'react';

import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as SearchServices from '~/services/searchService';
import { Wrapper } from '~/components/Wrapper';
Search.propTypes = {};

function Search() {
    const cx = classNames.bind(styles);

    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    // https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            const result = await SearchServices.search(debouncedValue);

            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

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
    return (
        <div className={cx('search')}>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4>Accounts</h4>
                            {searchResult.map((result) => (
                                <div key={result.id} data={result} onClick={() => setShowResult(false)}>
                                    Hello
                                </div>
                            ))}
                        </Wrapper>
                    </div>
                )}
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
