import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import styles from './Gallerry.module.scss';
import GallerryList from '~/pages/Gallerry/GallerryList';
import Filter from '~/components/Filter';
// import { useDebounce } from '~/hooks';
// import * as gallerryService from '~/services/gallerryService';
const Gallerry = () => {
    const cx = classNames.bind(styles);
    const [dataGallery, setDataGallerry] = useState([]);
    const [dataFilter, setdataFilter] = useState([]);

    // const debouncedValue = useDebounce(gallerryValue, 500)
    useEffect(() => {
        // dataImage
        const dataImages = [
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT', 'Student Achievements'],
                imgUrl: require('~/assets/img/btec1.jpg'),
            },
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec2.jpg'),
            },
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec3.jpg'),
            },
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec4.jpg'),
            },
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec5.jpg'),
            },
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec6.jpg'),
            },
            {
                title: 'Lunar New Year 2021',
                category: ['BTEC FPT', 'Lunar New Year'],
                imgUrl: require('~/assets/img/btec7.jpg'),
            },
            {
                title: 'Student Achievements Summer 2020',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec8.jpg'),
            },
            {
                title: 'Student Achievements Summer 2020',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec9.jpg'),
            },
            {
                title: 'Visiting FPT Software Company',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec10.jpg'),
            },
            {
                title: 'Visiting FPT Software Company',
                category: ['BTEC FPT', 'FPT Software'],
                imgUrl: require('~/assets/img/btec11.jpg'),
            },
            {
                title: 'Visiting FPT Software Company',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec12.jpg'),
            },
            {
                title: 'Signing Ceremony between Enterprises and British International College ',
                category: ['BTEC FPT', 'Signing Ceremony'],
                imgUrl: require('~/assets/img/btec13.jpg'),
            },
            {
                title: 'Signing Ceremony between Enterprises and British International College',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec14.jpg'),
            },
            {
                title: 'Signing Ceremony between Enterprises and British International College',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec15.jpg'),
            },
            {
                title: 'B-Club of British International College',
                category: ['BTEC FPT', 'B-Club'],
                imgUrl: require('~/assets/img/btec16.jpg'),
            },
            {
                title: 'Freshman orientation day BTEC FPT',
                category: ['BTEC FPT', 'Freshman'],
                imgUrl: require('~/assets/img/btec17.jpg'),
            },
            {
                title: 'Freshman orientation day BTEC FPT',
                category: ['BTEC FPT', 'Freshman'],
                imgUrl: require('~/assets/img/btec18.jpg'),
            },
            {
                title: 'Freshman orientation day BTEC FPT',
                category: ['BTEC FPT', 'Freshman'],
                imgUrl: require('~/assets/img/btec19.jpg'),
            },
            {
                title: 'Student Achievements Spring 2022',
                category: ['BTEC FPT'],
                imgUrl: require('~/assets/img/btec20.jpg'),
            },
        ];

        // const fetchApi = async () => {

        //     const resultGallerry = await gallerryService.gallerry();

        //     console.log(resultGallerry);
        setDataGallerry(dataImages);

        setdataFilter(dataImages);
        // };

        // fetchApi();
    }, []);
    // FILTER
    const dataFilterCategory = [];

    dataGallery.map((data) =>
        data.category.map((duplicateCategory) => {
            if (dataFilterCategory.includes(duplicateCategory)) return null;
            dataFilterCategory.push(duplicateCategory);
            return dataFilterCategory;
        }),
    );

    const handleFilter = (filterValueSelected) => {
        // // Filter by category
        if (filterValueSelected === 'Show All') {
            setdataFilter(dataGallery);
            return;
        }
        const filteredData = dataGallery.filter((data) => {
            let category = '';
            data.category.map((data) => {
                console.log(category);
                category = data;
                return category;
            });

            return category === filterValueSelected;
        });

        setdataFilter(filteredData);
    };

    // SEARCH

    const dataFilterTitle = [];

    dataGallery.map((data) => {
        if (dataFilterTitle.includes(data.title)) return null;
        dataFilterTitle.push(data.title);

        return dataFilterTitle;
    });

    return (
        <div className={cx('wapper')}>
            {/* Filter */}
            <Filter
                dataFilterCategory={dataFilterCategory}
                dataFilterTitle={dataFilterTitle}
                filterValueSelected={handleFilter}
            />

            {/* GALLERRY */}
            <GallerryList dataGallery={dataFilter} />
        </div>
    );
};
Gallerry.propTypes = {};
export default Gallerry;
