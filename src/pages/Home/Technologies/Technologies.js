import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

import styles from './Technologies.module.scss';
import Image from '~/components/Image';

Technologies.propTypes = {
    data: PropTypes.array.isRequired,
};
const cx = classNames.bind(styles);

function Technologies({ data }) {
    return (
        <Swiper autoplay grabCursor slidesPerView={6} className={cx('wrapper')} modules={[Autoplay]}>
            {data.map((award, index) => (
                <SwiperSlide key={index} className={cx('item')}>
                    <Image src={award.imageUrl} alt={award.title} className={cx('image')} />
                    {/* <div className={cx('infor')}>
                        <h6>{award.title}</h6>
                        <p>{award.time}</p>
                    </div> */}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Technologies;
