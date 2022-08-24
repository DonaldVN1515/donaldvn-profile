import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import styles from './Gallerry.module.scss';
import GallerryItem from '~/components/GallerryItem';
import RadioItem from '~/components/RadioItem';
import FilterIcon from '@mui/icons-material/Filter';
// import { useState } from 'react';

// dataImage
const dataImage = [
    {
        id: 1,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec1.jpg'),
    },
    {
        id: 2,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec2.jpg'),
    },
    {
        id: 3,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec3.jpg'),
    },
    {
        id: 4,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec4.jpg'),
    },
    {
        id: 5,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec5.jpg'),
    },
    {
        id: 6,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec6.jpg'),
    },
    {
        id: 7,
        title: 'Lunar New Year 2021',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec7.jpg'),
    },
    {
        id: 8,
        title: 'Student Achievements Summer 2020',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec8.jpg'),
    },
    {
        id: 9,
        title: 'Student Achievements Summer 2020',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec9.jpg'),
    },
    {
        id: 10,
        title: 'Visiting FPT Software Company',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec10.jpg'),
    },
    {
        id: 11,
        title: 'Visiting FPT Software Company',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec11.jpg'),
    },
    {
        id: 12,
        title: 'Visiting FPT Software Company',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec12.jpg'),
    },
    {
        id: 13,
        title: 'Signing Ceremony between Enterprises and British International College',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec13.jpg'),
    },
    {
        id: 14,
        title: 'Signing Ceremony between Enterprises and British International College',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec14.jpg'),
    },
    {
        id: 15,
        title: 'Signing Ceremony between Enterprises and British International College',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec15.jpg'),
    },
    {
        id: 16,
        title: 'B-Club of British International College',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec16.jpg'),
    },
    {
        id: 17,
        title: 'Freshman orientation day BTEC FPT',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec17.jpg'),
    },
    {
        id: 18,
        title: 'Freshman orientation day BTEC FPT',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec18.jpg'),
    },
    {
        id: 19,
        title: 'Freshman orientation day BTEC FPT',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec19.jpg'),
    },
    {
        id: 20,
        title: 'Student Achievements Spring 2022',
        category: 'BTEC FPT',
        imgUrl: require('~/assets/img/btec20.jpg'),
    },
];
const cx = classNames.bind(styles);
const Gallerry = () => {
    // const [setData, setSetData] = useState([dataImage || []]);

    const duplicateCheck = [];

    const handleClick = () => {
        dataImage.map((data) => {
            return <GallerryItem key={data.id} title={data.title} img={data.imgUrl} />;
        });
    };
    return (
        <div className={cx('wapper')}>
            <div className={cx('filter')}>
                <div className={cx('title')}>
                    <FilterIcon className={cx('icon')} />
                    <h3>Filter:</h3>
                </div>
                <div className={cx('options')}>
                    <RadioItem label="Show All" isChecked={true} onClick={handleClick} />

                    {dataImage.map((data) => {
                        if (duplicateCheck.includes(data.category)) return null;
                        duplicateCheck.push(data.category);
                        return <RadioItem key={data.id} label={data.category} />;
                    })}
                </div>
            </div>
            {/* GALLERRY */}
            <ul className={cx('collections')}>
                {dataImage.map((data) => (
                    <GallerryItem key={data.id} title={data.title} img={data.imgUrl} />
                ))}
            </ul>
        </div>
    );
};
Gallerry.propTypes = {};
export default Gallerry;
